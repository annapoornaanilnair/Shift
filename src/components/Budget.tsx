import React from 'react'
import { useStore } from '../stores/store'
import userConfig from '../userConfig'

export default function Budget() {
  const { budget } = useStore()

  const spent = 700 // placeholder
  const dayOfMonth = new Date().getDate()
  const monthProgress = dayOfMonth / 30
  const percent = spent / budget.monthlyCaps.essentials
  const panic = percent > userConfig.budget.panicThresholdPercent && dayOfMonth < 20

  return (
    <div className="glass p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Budget</h2>
      <div>Essentials cap: ${budget.monthlyCaps.essentials}</div>
      <div>Spent this month: ${spent}</div>
      <div>Percent: {(percent * 100).toFixed(0)}%</div>
      {panic && <div className="text-red-500">Panic mode active — hiding wants</div>}
    </div>
  )
}
