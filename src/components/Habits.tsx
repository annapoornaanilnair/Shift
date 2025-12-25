import React, { useState } from 'react'
import { useStore } from '../stores/store'

export default function Habits() {
  const { habits, addHabit, removeHabit } = useStore()
  const [name, setName] = useState('')
  const [freq, setFreq] = useState('Daily')
  const [energy, setEnergy] = useState('Low')

  function handleAdd() {
    const id = 'h' + Date.now()
    addHabit({ id, name, frequency: freq, energy })
    setName('')
  }

  return (
    <div className="glass p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Habits</h2>
      <div className="space-y-2">
        {habits.map((h: any) => (
          <div key={h.id} className="flex justify-between">
            <div>
              {h.name} <span className="text-sm text-slate-400">{h.frequency} · {h.energy}</span>
            </div>
            <button onClick={() => removeHabit(h.id)} className="text-sm text-red-500">Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2">
        <input className="p-2 rounded bg-white/50" placeholder="Habit name" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={freq} onChange={(e) => setFreq(e.target.value)} className="p-2 rounded bg-white/50">
          <option>Daily</option>
          <option>3x/week</option>
          <option>Weekly</option>
        </select>
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="p-2 rounded bg-white/50">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={handleAdd} className="bg-sky-500 text-white p-2 rounded">Add Habit</button>
      </div>
    </div>
  )
}
