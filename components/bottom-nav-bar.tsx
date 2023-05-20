'use client'

import { useAppStore } from '@/stores/app'
import { Settings, User2 } from 'lucide-react'
import React from 'react'

export default function BottomNavBar() {
  const [tab, switchTab] = useAppStore((state) => [state.tab, state.switchTab])

  return (
    <div className=' z-10 rounded-full btn-group fixed bottom-4 left-[50%] translate-x-[-50%] '>
      <button
        className={`btn btn-circle ${tab === 'profile' ? 'btn-primary' : ''}`}
        onClick={() => switchTab('profile')}>
        <User2 size={20} />
      </button>
      <button
        className={`btn btn-circle ${tab === 'setting' ? 'btn-primary' : ''}`}
        onClick={() => switchTab('setting')}>
        <Settings size={20} />
      </button>
    </div>
  )
}
