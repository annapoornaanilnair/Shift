import React, { useState } from 'react'
import { useStore } from '../stores/store'

export default function Violin() {
  const { violinSessions, logViolin } = useStore()
  const [notes, setNotes] = useState('')
  const [stars, setStars] = useState(4)

  function handleLog() {
    const s = { id: 'v' + Date.now(), date: new Date().toISOString(), notes, stars }
    logViolin(s)
    setNotes('')
  }

  return (
    <div className="glass p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Violin Sessions</h2>
      <div className="space-y-2">
        {violinSessions.map((v: any) => (
          <div key={v.id} className="flex justify-between">
            <div>{new Date(v.date).toLocaleDateString()} • {v.notes}</div>
            <div>{'★'.repeat(v.stars)}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <textarea className="w-full p-2 rounded bg-white/50" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
        <div className="flex items-center gap-2 mt-2">
          <label>Rating</label>
          <input type="range" min={1} max={5} value={stars} onChange={(e) => setStars(Number(e.target.value))} />
          <button onClick={handleLog} className="bg-sky-500 text-white p-2 rounded">Log Session</button>
        </div>
      </div>
    </div>
  )
}
