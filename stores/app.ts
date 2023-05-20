import { Tabs } from '@/types/tab'
import { create } from 'zustand'

interface AppState {
  tab: Tabs
  switchTab: (tab: Tabs) => void
}

export const useAppStore = create<AppState>()((set) => ({
  tab: 'profile',
  switchTab: (tab: Tabs) => set(() => ({ tab })),
}))
