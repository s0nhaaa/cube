import Avatar from 'boring-avatars'
import { Copy } from 'lucide-react'
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
    <div className='bg-base-200 w-screen h-screen'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>Cube</a>
        </div>
        <div className='flex-none gap-2'>
          <div className='form-control'>
            <input type='text' placeholder='Search' className='input input-bordered' />
          </div>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <Avatar
                  size={40}
                  name='Maria Mitchell'
                  variant='beam'
                  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className='w-full h-fit px-[600px]'>
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

            <h2 className=' font-semibold text-2xl mt-3'>{params.user}</h2>
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

            <div className='flex gap-2'>
              <label htmlFor='my-modal' className='btn gap-2 mt-2 btn-primary'>
                Donate
              </label>
              <label htmlFor='my-modal' className='btn gap-2 mt-2 btn-secondary'>
                Join Fan Club
              </label>
            </div>
          </div>
        </div>

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
      </section>
    </div>
  )
}
