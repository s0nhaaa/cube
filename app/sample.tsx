'use client'

import { useEffect, useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'
import Bio from '@/components/bio'
import { RecentDonateItem } from '@/components/recent-donate-item'
import TopDonateItem from '@/components/top-donate-item'
import { LogOut, Settings, User2 } from 'lucide-react'
import { UserOwner } from '@/types/user-owner'

interface Props {
  user?: UserOwner | null
}

export default function Sample({ user }: Props) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

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

                  <div className='flex flex-col items-center w-full'>
                    <div className='w-full mt-4'>
                      <h3 className=' font-semibold text-lg'>Top Donator</h3>
                    </div>
                    <div className='overflow-x-auto w-full'>
                      <table className='table w-full'>
                        {/* head */}
                        <thead>
                          <tr className='text-base-content'>
                            <th>
                              <label>Rank</label>
                            </th>
                            <th>Address</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array(5)
                            .fill(0)
                            .map((_, index) => (
                              <TopDonateItem key={index} />
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className='flex flex-col items-center w-full'>
                    <div className='w-full mt-5'>
                      <h3 className=' font-semibold text-lg'>Recent Donates</h3>
                    </div>
                    <div className='w-full mt-3'>
                      {Array(10)
                        .fill(0)
                        .map((_, index) => (
                          <RecentDonateItem key={index} />
                        ))}
                    </div>
                  </div>
                </div>

                <div className=' h-20 w-10'></div>
              </section>

              <div className=' z-10 rounded-full btn-group fixed bottom-4 left-[50%] translate-x-[-50%] '>
                <button className='btn btn-circle'>
                  <User2 size={20} />
                </button>
                <button className='btn btn-circle'>
                  <Settings size={20} />
                </button>
              </div>
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
