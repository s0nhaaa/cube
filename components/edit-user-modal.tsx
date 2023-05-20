'use client'

import { User } from '@prisma/client'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { PublicKey } from '@solana/web3.js'
import { Dispatch, SetStateAction } from 'react'

interface EditUserModalProps {
  publicKey: PublicKey | null
  user: User | null
  isModal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
  setUsername: Dispatch<SetStateAction<string>>
  onSubmit: () => void
  isLoading: boolean
}

export function EditUserModal({
  publicKey,
  user,
  isModal,
  setModal,
  setUsername,
  onSubmit,
  isLoading,
}: EditUserModalProps) {
  return (
    <>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <label htmlFor='my-modal' className={`modal cursor-pointer ${isModal ? 'modal-open' : ''} `}>
        <label className='modal-box relative' htmlFor=''>
          <button onClick={() => setModal(false)} className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </button>
          <h3 className='text-lg font-bold'>Edit Profile</h3>
          <input
            type='text'
            placeholder='Type here'
            defaultValue={user ? (user.name as string) : ''}
            onChange={(e) => setUsername(e.target.value)}
            className='mt-4 input input-bordered w-full'
          />

          {user?.walletAddress || publicKey ? (
            <input
              type='text'
              placeholder='Type here'
              disabled
              value={publicKey?.toString() || (user?.walletAddress as string)}
              onChange={(e) => setUsername(e.target.value)}
              className='mt-4 input input-bordered w-full'
            />
          ) : (
            <WalletMultiButton className='mt-4' />
          )}

          <p className='py-4 text-sm opacity-50 font-normal'>
            {user?.walletAddress
              ? 'Your fans will find you by your wallet address'
              : 'By click the Create Donate Account, you agree to our Teams and Conditions'}
          </p>
          <div className='modal-action'>
            <button className='btn btn-primary w-full' onClick={onSubmit} disabled={isLoading}>
              {!isLoading ? (user?.walletAddress ? 'Save change' : 'Create Donate Account') : 'Crafting...'}
            </button>
          </div>
        </label>
      </label>
    </>
  )
}
