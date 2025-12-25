import React from 'react'
import { useStore } from '../stores/store'
import userConfig from '../userConfig'

export default function Wardrobe() {
  const { wardrobe } = useStore()
  const [query, setQuery] = React.useState('')

  // sample items
  const items = [
    { id: 'w1', name: 'Blazer', tags: ['Corporate', 'Winter', 'Professional'] },
    { id: 'w2', name: 'Sneakers', tags: ['Casual', 'Sporty'] },
  ]

  const today = new Date().getDay() // 0 Sun .. 6 Sat
  const suggestedTag = today >= 1 && today <= 5 ? 'Corporate' : 'Casual'

  const filtered = items.filter((it) => it.tags.join(' ').toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="glass p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Wardrobe</h2>
      <div>Suggested: {suggestedTag}</div>
      <input className="p-2 rounded bg-white/50 mt-2" placeholder="Filter tags" value={query} onChange={(e) => setQuery(e.target.value)} />

      <div className="mt-2 space-y-2">
        {filtered.map((it) => (
          <div key={it.id} className="flex justify-between">
            <div>{it.name}</div>
            <div className="text-sm text-slate-400">{it.tags.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
