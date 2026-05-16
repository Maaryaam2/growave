"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

const weeklyProgress = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 3.5 },
  { day: "Sat", hours: 5.2 },
  { day: "Sun", hours: 2.0 },
]

const maxHours = Math.max(...weeklyProgress.map(d => d.hours))

export function ProgressChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-card-foreground">Weekly Progress</h3>
          <p className="text-sm text-muted-foreground">Hours spent learning</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary">
          <TrendingUp className="w-4 h-4" />
          <span className="font-medium">+12%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between gap-2 h-40">
        {weeklyProgress.map((item, index) => (
          <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(item.hours / maxHours) * 100}%` }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              className="w-full bg-primary/20 rounded-t-lg relative overflow-hidden min-h-[8px]"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
              />
            </motion.div>
            <span className="text-xs text-muted-foreground">{item.day}</span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-card-foreground">22.2</p>
          <p className="text-sm text-muted-foreground">Total hours this week</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-card-foreground">3.2h</p>
          <p className="text-sm text-muted-foreground">Daily average</p>
        </div>
      </div>
    </motion.div>
  )
}
