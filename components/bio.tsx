'use client'

import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { UpdateUser } from '@/types/update-user'
import { UserOwner } from '@/types/user-owner'
import { truncatePubkey } from '@/utils/truncate-pubkey'
import { useWallet } from '@solana/wallet-adapter-react'
import axios from 'axios'
import Avatar from 'boring-avatars'
import { Copy, Edit2 } from 'lucide-react'
import { useState } from 'react'
import { DonateModal } from './donate-modal'
import { EditUserModal } from './edit-user-modal'

interface BioProps {
  currentUser: UserOwner | null
  isDonate?: boolean
}

export default function Bio({ currentUser, isDonate = false }: BioProps) {
  const [state, copyToClipboard] = useCopyToClipboard()
  const [username, setUsername] = useState<string>('')
  const { publicKey } = useWallet()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<UserOwner | null>(currentUser)
  const [isModal, setIsModal] = useState(false)
  const [isDonateModal, setIsDonateModal] = useState(false)

  const handleChangeBio = async () => {
    if (!user) return
    setIsLoading(true)

    try {
      const bio = await axios.put<UpdateUser>('/api/bio', {
        id: user.id,
        name: username,
        walletAddress: publicKey || user.walletAddress,
      })
      const data = bio.data
      setUser(data as UserOwner)
    } catch (error) {
      console.log(error)
    } finally {
      setIsModal(false)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className='w-full flex flex-col items-center '>
        <div className='avatar online indicator-bottom'>
          <div className='w-24 rounded-full'>
            <Avatar
              size={98}
              name={(user?.walletAddress as string) || publicKey?.toString()}
              variant='beam'
              colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
            />
          </div>
        </div>

        <h2 className=' font-semibold text-2xl mt-7'>{user?.name ? user?.name : user?.walletAddress}</h2>

        {user?.walletAddress ? (
          <div className='flex justify-center gap-2 items-center'>
            <h3 className=' font-normal text-lg mt-1 text-neutral-content '>{truncatePubkey(user.walletAddress)}</h3>
            <div className='tooltip' data-tip='Copy'>
              <button className='btn btn-sm btn-square' onClick={() => copyToClipboard(user.walletAddress!)}>
                <Copy size={16} />
              </button>
            </div>
          </div>
        ) : (
          <span></span>
        )}

        {!isDonate ? (
          <button className='btn btn-sm gap-2 mt-2' onClick={() => setIsModal(true)}>
            <Edit2 size={16} />
            {user?.walletAddress ? 'Edit bio' : 'Create donate account'}
          </button>
        ) : (
          <div className='flex gap-2 mt-2'>
            <button className='btn btn-primary' onClick={() => setIsDonateModal(true)}>
              Donate
            </button>
            <button className='btn btn-secondary'>Join</button>
          </div>
        )}
      </div>

      {isDonate && user ? (
        <DonateModal
          toName={user.name}
          toWallet={user.walletAddress}
          setModal={setIsDonateModal}
          isModal={isDonateModal}
        />
      ) : (
        <EditUserModal
          isLoading={isLoading}
          onSubmit={handleChangeBio}
          publicKey={publicKey}
          user={user}
          isModal={isModal}
          setModal={setIsModal}
          setUsername={setUsername}
        />
      )}
    </div>
  )
}
