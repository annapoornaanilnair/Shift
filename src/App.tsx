import React from 'react'
import Budget from './components/Budget'
import Habits from './components/Habits'
import Violin from './components/Violin'
import Wardrobe from './components/Wardrobe'
import Moodboard from './components/Moodboard'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/60 to-sky-50 flex flex-col items-center p-4">
      <header className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold mb-4">Shift</h1>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <Budget />
        <Habits />
        <Violin />
        <Wardrobe />
        <Moodboard />
      </main>

      <button className="fixed bottom-6 right-6 bg-white/60 backdrop-blur-lg rounded-full p-4 shadow-lg">
        Quick Log
      </button>
    </div>
  )
}
