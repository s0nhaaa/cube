'use client'

import { CreateDonate } from '@/types/create-donate'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface DonateModalProps {
  toWallet: string | null
  toName: string | null
  isModal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
}

export function DonateModal({ toWallet, toName, setModal, isModal }: DonateModalProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState('')

  const createSession = async () => {
    if (amount <= 0) {
      setModal(false)

      return
    }

    setIsLoading(true)
    console.log(toWallet)
    const response = await axios.post<CreateDonate>('/api/candypay', {
      amount,
      wallet: toWallet,
      to: toName,
      image: `https://source.boringavatars.com/beam/80/${toWallet}?colors=92a1c6,146a7c,F0ab3d,c271b4,c20d90`,
      current_url: window.location.href,
    })

    const data = response.data

    if (data && data.payment_url) {
      router.push(data.payment_url)
      setIsLoading(false)
    }
  }

  return (
    <>
      <input type='checkbox' id='donate-modal' className='modal-toggle' />
      <label htmlFor='donate-modal' className={`modal cursor-pointer ${isModal ? 'modal-open' : ''}`}>
        <label className='modal-box relative'>
          <button onClick={() => setModal(false)} className='btn btn-sm btn-circle absolute right-2 top-2 select-none'>
            ✕
          </button>
          <h3 className='text-lg font-bold'>Donate for {toName}</h3>
          <label className='label'>
            <span className='label-text'>Amount in USD</span>
          </label>
          <input
            type='number'
            placeholder='1 USD'
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            className='input input-bordered w-full '
          />
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            className='textarea textarea-bordered h-24 w-full'
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's your confess?"></textarea>
          <p className='py-4 text-sm opacity-50 font-normal'>
            Your message will pop up in the screen if {toName} is streaming
          </p>
          <div className='modal-action'>
            <button disabled={isLoading} className='btn btn-primary w-full' onClick={createSession}>
              {amount > 0 ? (isLoading ? 'Crafting...' : 'Donate') : 'Cancel'}
            </button>
          </div>
        </label>
      </label>
    </>
  )
}
