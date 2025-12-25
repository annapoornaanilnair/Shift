import React from 'react'

export default function Moodboard() {
  const [items, setItems] = React.useState<any[]>([
    { id: 'm1', type: 'image', src: '/images/beach.jpg' },
    { id: 'm2', type: 'quote', text: 'Ship the work.' },
  ])

  // minimal drag-drop
  function move(i: number, j: number) {
    const copy = [...items]
    const [a] = copy.splice(i, 1)
    copy.splice(j, 0, a)
    setItems(copy)
  }

  return (
    <div className="glass p-4 rounded-xl col-span-1 md:col-span-2">
      <h2 className="text-xl font-semibold mb-2">Moodboard</h2>
      <div className="grid grid-cols-3 gap-2">
        {items.map((it, idx) => (
          <div key={it.id} className="p-2 bg-white/50 rounded" draggable onDragOver={(e) => e.preventDefault()} onDrop={() => move(idx, 0)}>
            {it.type === 'image' ? <img src={it.src} className="w-full h-24 object-cover rounded" /> : <div>{it.text}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
