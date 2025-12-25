const userConfig = {
  profile: {
    name: 'Anna',
    timezone: 'Asia/Kolkata',
  },
  budget: {
    monthlyCaps: {
      essentials: 2000,
      wants: 800,
      savings: 1000,
    },
    panicThresholdPercent: 0.8,
  },
  habits: [
    { id: 'h1', name: 'Gym', frequency: '3x/week', energy: 'High' },
    { id: 'h2', name: 'Reading', frequency: 'Daily', energy: 'Low' },
  ],
  wardrobe: {
    tags: ['Winter', 'Corporate', 'Date Night', 'Casual', 'Sporty'],
  },
}

export default userConfig
