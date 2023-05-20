'use client'

import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { truncatePubkey } from '@/utils/truncate-pubkey'
import Avatar from 'boring-avatars'
import { Copy } from 'lucide-react'
import React from 'react'

interface TopDonateItemProps {
  rank: number
  walletAddress: string
  name: string
  total: number
}

export default function TopDonateItem(props: TopDonateItemProps) {
  const [state, copyToClipboard] = useCopyToClipboard()

  return (
    <tr>
      <th>
        <div className='flex justify-center max-w-[50px] '>
          <label className={`text-center m-auto`}>{props.rank}</label>
        </div>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className=' w-12 h-12'>
              <Avatar
                size={44}
                name={props.walletAddress}
                variant='beam'
                colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
              />
            </div>
          </div>
          <div>
            {props.name}
            <div className='tooltip' data-tip='Copy'>
              <button className='btn btn-sm btn-square ml-2' onClick={() => copyToClipboard(props.walletAddress)}>
                <Copy size={16} />
              </button>
            </div>
            <div className='text-sm opacity-50'>{truncatePubkey(props.walletAddress, 8)}</div>
          </div>
        </div>
      </td>
      <td>{props.total} SOL</td>
    </tr>
  )
}
