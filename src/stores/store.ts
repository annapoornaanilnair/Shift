import create from 'zustand'
import { persist } from 'zustand/middleware'
import userConfig from '../userConfig'

type State = {
  budget: any
  habits: any[]
  violinSessions: any[]
  wardrobe: any[]
  moodboard: any[]
  setBudget: (b: any) => void
  addHabit: (h: any) => void
  removeHabit: (id: string) => void
  logViolin: (s: any) => void
}

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      budget: userConfig.budget,
      habits: userConfig.habits,
      violinSessions: [],
      wardrobe: [],
      moodboard: [],
      setBudget: (b) => set({ budget: b }),
      addHabit: (h) => set((s) => ({ habits: [...s.habits, h] })),
      removeHabit: (id) => set((s) => ({ habits: s.habits.filter((x) => x.id !== id) })),
      logViolin: (sesh) => set((s) => ({ violinSessions: [...s.violinSessions, sesh] })),
    }),
    { name: 'shift-storage' }
  )
)
