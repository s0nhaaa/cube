import Bio from '@/components/bio'
import TopDonateItem from '@/components/top-donate-item'
import Avatar from 'boring-avatars'
import { Metadata, ResolvingMetadata } from 'next'
import getUserByWallet from '../actions/getUserByWallet'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'

type Props = {
  params: { user: string }
}

export async function generateMetadata({ params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  return {
    title: params.user,
  }
}

export default async function Page({ params }: { params: { wallet: string } }) {
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
                <div className='avatar'>
                  <div className='w-12'>
                    <Avatar
                      size={44}
                      name='GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ'
                      variant='beam'
                      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                    />
                  </div>
                </div>
                <div className='avatar'>
                  <div className='w-12'>
                    <Avatar
                      size={44}
                      name='GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ'
                      variant='beam'
                      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                    />
                  </div>
                </div>
                <div className='avatar'>
                  <div className='w-12'>
                    <Avatar
                      size={44}
                      name='GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ'
                      variant='beam'
                      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                    />
                  </div>
                </div>
                <div className='avatar placeholder'>
                  <div className='w-12 bg-neutral-focus text-neutral-content'>
                    <span>+99</span>
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
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <TopDonateItem key={index} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SolanaWalletProvider>
  )
}
