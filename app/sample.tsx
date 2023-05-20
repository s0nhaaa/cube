'use client'

import Bio from '@/components/bio'
import BottomNavBar from '@/components/bottom-nav-bar'
import Profile from '@/components/profile'
import Setting from '@/components/setting'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'
import { useAppStore } from '@/stores/app'
import { UserOwner } from '@/types/user-owner'
import { LogOut } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  user?: UserOwner | null
}

export default function Sample({ user }: Props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [tab, switchTab] = useAppStore((state) => [state.tab, state.switchTab])

  const createSession = async () => {
    setIsLoading(true)
    const response = await fetch('/api/candypay', {
      method: 'POST',
    })
    const data = await response.json()

    router.push(data.payment_url)
    setIsLoading(false)
  }

  return (
    <>
      <SolanaWalletProvider>
        {user ? (
          <>
            <div className='bg-base-200 w-full'>
              <section className='w-full flex flex-col items-center h-fit '>
                <div className='w-[60%] mt-40'>
                  <button className='btn btn-square' onClick={() => signOut()}>
                    <LogOut />
                  </button>

                  <Bio currentUser={user} />

                  {
                    {
                      profile: <Profile user={user} />,
                      setting: <Setting wallet={user.walletAddress} />,
                    }[tab]
                  }
                </div>

                <div className=' h-20 w-10'></div>
              </section>

              <BottomNavBar />
            </div>
          </>
        ) : (
          <>
            <button className='btn' onClick={() => signIn('google')}>
              Login Google
            </button>
            <button className='btn' onClick={() => signOut()}>
              Out
            </button>
            <button disabled={isLoading} onClick={createSession} className='btn'>
              {isLoading ? 'Loading...' : 'Checkout'}
            </button>
          </>
        )}
      </SolanaWalletProvider>
    </>
  )
}
