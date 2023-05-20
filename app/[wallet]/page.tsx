import Bio from '@/components/bio'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'
import TopDonateItem from '@/components/top-donate-item'
import { MEMBERS, TOP_DONATE } from '@/configs/dummy-data'
import Avatar from 'boring-avatars'
import getUserByWallet from '../actions/getUserByWallet'

type Props = {
  params: { wallet: string }
}

export default async function Page({ params }: Props) {
  const user = await getUserByWallet({ wallet: params.wallet })

  return (
    <SolanaWalletProvider>
      <div className='bg-base-200 w-full'>
        <section className='w-full flex flex-col items-center h-fit '>
          <div className='w-[60%] mt-40'>
            <Bio currentUser={user} isDonate />

            <div className='flex flex-col items-center w-full'>
              <div className='w-full mt-7'>
                <h3 className=' font-semibold text-lg'>Members</h3>
              </div>
              <div className='avatar-group -space-x-6'>
                {MEMBERS.map((user) => (
                  <div className='avatar' key={user.id}>
                    <div className='w-12'>
                      <Avatar
                        size={44}
                        name={user.walletAddress}
                        variant='beam'
                        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                      />
                    </div>
                  </div>
                ))}

                <div className='avatar placeholder'>
                  <div className='w-12 bg-neutral-focus text-neutral-content'>
                    <span>+12</span>
                  </div>
                </div>
              </div>
            </div>

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
          </div>

          <div className=' h-20 w-10'></div>
        </section>
      </div>
    </SolanaWalletProvider>
  )
}
