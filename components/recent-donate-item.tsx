import { truncatePubkey } from '@/utils/truncate-pubkey'
import Avatar from 'boring-avatars'
import React from 'react'

interface RecentDonateItemProps {
  message: string
  walletAddress: string
  name: string
  total: number
}

export const RecentDonateItem = (props: RecentDonateItemProps) => {
  return (
    <>
      <div className='w-full mb-4 rounded-sm flex items-start'>
        <div className='avatar'>
          <div className='w-15 h-15 rounded-full'>
            <Avatar
              size={60}
              name={props.walletAddress}
              variant='beam'
              colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
            />
          </div>
        </div>
        <div className='flex flex-col ml-4'>
          <div className='flex items-center gap-2 '>
            <span className='font-semibold text-lg'>{props.name}</span>
            <div className='tooltip' data-tip='Copy'>
              <div className='text-sm opacity-50'>{truncatePubkey(props.walletAddress, 6)}</div>
            </div>
          </div>
          <div className='text-sm opacity-50'>12 minutes ago</div>
          <div className=' text-lg mt-2 text-base-content'>
            Donate <div className='badge badge-primary'>{props.total} SOL</div> with the message
          </div>
          <div className=' text-lg '>{props.message}</div>
        </div>
      </div>
      <div className='divider'></div>
    </>
  )
}
