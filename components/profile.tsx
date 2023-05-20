'use client'

import { RecentDonateItem } from '@/components/recent-donate-item'
import TopDonateItem from '@/components/top-donate-item'
import { RECENT_DONATE, TOP_DONATE } from '@/configs/dummy-data'
import { UserOwner } from '@/types/user-owner'

interface ProfileProps {
  user: UserOwner
}

export default function Profile({ user }: ProfileProps) {
  return (
    <>
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
    </>
  )
}
