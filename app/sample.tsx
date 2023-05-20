'use client'

import Bio from '@/components/bio'
import BottomNavBar from '@/components/bottom-nav-bar'
import { RecentDonateItem } from '@/components/recent-donate-item'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'
import TopDonateItem from '@/components/top-donate-item'
import { RECENT_DONATE, TOP_DONATE } from '@/configs/dummy-data'
import { UserOwner } from '@/types/user-owner'
import { LogOut, Settings, User2 } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  user?: UserOwner | null
}

export default function Sample({ user }: Props) {
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
                          {TOP_DONATE.sort((a, b) => b.total - a.total).map((user, index) => (
                            <TopDonateItem
                              total={user.total}
                              key={user.id}
                              rank={index + 1}
                              name={user.name}
                              walletAddress={user.walletAddress}
                            />
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
                      {RECENT_DONATE.map((user) => (
                        <RecentDonateItem
                          message={user.message}
                          key={user.id}
                          total={user.total}
                          name={user.name}
                          walletAddress={user.walletAddress}
                        />
                      ))}
                    </div>
                  </div>
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
