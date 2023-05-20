'use client'

import React from 'react'

export function DonateModal() {
  return (
    <>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <label htmlFor='my-modal' className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <label htmlFor='my-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='text-lg font-bold'>Edit Profile</h3>
          <input type='text' placeholder='Type here' className='mt-4 input input-bordered w-full' />
          <p className='py-4'>
            You&apos;ve been selected for a chance to get one year of subscription to use Wikipedia for free!
          </p>
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn btn-primary w-full'>
              Save change
            </label>
          </div>
        </label>
      </label>
    </>
  )
}
