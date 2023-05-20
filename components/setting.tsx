'use client'

import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { Plus } from 'lucide-react'
import Image from 'next/image'

interface SettingProps {
  wallet: string | null
}

export default function Setting({ wallet }: SettingProps) {
  const [state, copyToClipboard] = useCopyToClipboard()
  const donatePage = `${window.location.origin}/${wallet ? wallet : ''}`
  const donateDisplay = `${window.location.origin}/donate/${wallet ? wallet : ''}`

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div className='w-full mt-4'>
          <h3 className=' font-semibold text-lg'>Donate Settings</h3>
        </div>
        <div className=' w-full  overflow-x-hidden'>
          <div className='mt-2 overflow-x-hidden'>
            <label className='label'>
              <span className='label-text'>Your donate page</span>
            </label>
            <div className='input-group w-full gap-2'>
              <input value={donatePage} type='text' placeholder='0.01' className='w-full input input-bordered' />
              <a target='_blank' href={donatePage} className='btn'>
                Open
              </a>
              <button className='btn btn-primary' onClick={() => copyToClipboard(donatePage)}>
                Copy
              </button>
            </div>
          </div>
          <div className='mt-2'>
            <label className='label'>
              <span className='label-text'>Donate display link (Add Webpage URL in stream software)</span>
            </label>
            <div className='input-group w-full gap-2'>
              <input value={donateDisplay} type='text' placeholder='0.01' className='w-full input input-bordered' />
              <a target='_blank' href={donateDisplay} className='btn'>
                Open
              </a>
              <button className='btn btn-primary' onClick={() => copyToClipboard(donateDisplay)}>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full mt-4'>
        <div className='w-full mt-6'>
          <h3 className=' font-semibold text-lg'>Set up donate Display</h3>
        </div>
        <div className='w-full'>
          <p>
            Click the{' '}
            <kbd className='kbd'>
              <Plus size={16} />
            </kbd>{' '}
            Add button in the <kbd className='kbd'>Sources</kbd> panel.
          </p>
          <div className='w-full flex items-center flex-col mt-2'>
            <Image
              src={'/setup-step-01.png'}
              alt='Setup step 1'
              width={400}
              height={150}
              className='w-[50%] object-cover rounded-2xl'
            />
          </div>
        </div>
        <div className='w-full mt-6'>
          <p>
            A pop up will show up, choose <kbd className='kbd'>Browser</kbd>
          </p>
          <div className='w-full flex items-center flex-col mt-2'>
            <Image
              src={'/setup-step-02.png'}
              alt='Setup step 2'
              width={400}
              height={150}
              className='w-[50%] object-cover rounded-2xl'
            />
          </div>
        </div>
        <div className='w-full mt-6'>
          <p>
            A modal will show up, choose the <kbd className='kbd'>Create new</kbd> option and fill the name, hit{' '}
            <kbd className='kbd'>OK</kbd>
          </p>
          <div className='w-full flex items-center flex-col mt-2'>
            <Image
              src={'/setup-step-03.png'}
              alt='Setup step 3'
              width={400}
              height={150}
              className='w-[50%] object-cover rounded-2xl'
            />
          </div>
        </div>
        <div className='w-full mt-6'>
          <p>
            Copy and patse your Donate dislay link <kbd className='kbd'>{donateDisplay}</kbd> to URL, hit{' '}
            <kbd className='kbd'>OK</kbd>
          </p>
          <div className='w-full flex items-center flex-col mt-2'>
            <Image
              src={'/setup-step-04.png'}
              alt='Setup step 4'
              width={400}
              height={150}
              className='w-[50%] object-cover rounded-2xl'
            />
          </div>
        </div>
        <div className='w-full mt-6'>
          <p>Now, you&apos;re ready! 🎉</p>
          <div className='w-full flex items-center flex-col mt-2'>
            <Image
              src={'/setup-step-05.png'}
              alt='Setup step 5'
              width={400}
              height={150}
              className='w-[50%] object-cover rounded-2xl'
            />
          </div>
        </div>
      </div>
    </>
  )
}
