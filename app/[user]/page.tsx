'use client'

import { EditUserModal } from '@/components/edit-user-modal'
import Avatar from 'boring-avatars'
import { Copy, Edit2, Settings, User2 } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { user: string }
}

export async function generateMetadata({ params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  return {
    title: params.user,
  }
}

export default function Page({ params }: { params: { user: string } }) {
  return (
    <>
      <EditUserModal />
      <div className='bg-base-200 w-full'>
        <section className='w-full flex flex-col items-center h-fit '>
          <div className='w-[60%] mt-40'>
            <div>
              <div className='w-full flex flex-col items-center '>
                <div className='avatar online indicator-bottom'>
                  <div className='w-24 rounded-full'>
                    <Avatar
                      size={98}
                      name='GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ'
                      variant='beam'
                      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                    />
                  </div>
                </div>

                <h2 className=' font-semibold text-2xl mt-7'>{params.user}</h2>
                <div className='flex justify-center gap-2 items-center'>
                  <h3 className=' font-normal text-lg mt-1 text-neutral-content '>
                    GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ
                  </h3>
                  <div className='tooltip' data-tip='Copy'>
                    <button className='btn btn-sm btn-square'>
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                <label htmlFor='my-modal' className='btn btn-sm gap-2 mt-2'>
                  <Edit2 size={16} /> Edit bio
                </label>
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
                        <tr key={index}>
                          <th>
                            <div className='flex justify-center '>
                              <label className='text-center m-auto'>1</label>
                            </div>
                          </th>
                          <td>
                            <div className='flex items-center space-x-3'>
                              <div className='avatar'>
                                <div className=' w-12 h-12'>
                                  <Avatar
                                    size={44}
                                    name='GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ'
                                    variant='beam'
                                    colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                                  />
                                </div>
                              </div>
                              <div>
                                GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ
                                <div className='tooltip' data-tip='Copy'>
                                  <button className='btn btn-sm btn-square ml-2'>
                                    <Copy size={16} />
                                  </button>
                                </div>
                                <div className='text-sm opacity-50'>United States</div>
                              </div>
                            </div>
                          </td>
                          <td>100 SOL</td>
                        </tr>
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
                    <>
                      <div key={index} className='w-full mb-4 rounded-sm flex items-start'>
                        <div className='avatar'>
                          <div className='w-15 h-15 rounded-full'>
                            <Avatar
                              size={60}
                              name='GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ'
                              variant='beam'
                              colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                            />
                          </div>
                        </div>
                        <div className='flex flex-col ml-4'>
                          <div className='flex items-center gap-2 '>
                            <span className='font-semibold text-lg'>ABC KKK</span>
                            <div className='tooltip' data-tip='Copy'>
                              <div className='text-sm opacity-50'>GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ</div>
                            </div>
                          </div>
                          <div className='text-sm opacity-50'>12 minutes ago</div>
                          <div className=' text-lg mt-2 text-base-content'>
                            Donate <div className='badge badge-primary'>10 SOL</div> with the message
                          </div>
                          <div className=' text-lg '>
                            You doing great You doing great You doing great You doing great You doing great
                          </div>
                        </div>
                      </div>
                      <div className='divider'></div>
                    </>
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
  )
}
