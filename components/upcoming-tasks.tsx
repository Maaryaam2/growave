"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, Clock, Calendar } from "lucide-react"

const tasks = [
  {
    id: 1,
    title: "Complete English Grammar Quiz",
    course: "Advanced English",
    dueDate: "Today, 5:00 PM",
    completed: false,
    priority: "high"
  },
  {
    id: 2,
    title: "Watch React Hooks Tutorial",
    course: "Full-Stack Development",
    dueDate: "Today, 8:00 PM",
    completed: false,
    priority: "medium"
  },
  {
    id: 3,
    title: "Submit Writing Assignment",
    course: "Creative Writing",
    dueDate: "Tomorrow, 12:00 PM",
    completed: false,
    priority: "high"
  },
  {
    id: 4,
    title: "Practice Persian Vocabulary",
    course: "Persian Language",
    dueDate: "Tomorrow, 3:00 PM",
    completed: true,
    priority: "low"
  },
  {
    id: 5,
    title: "Review ML Fundamentals",
    course: "AI & Machine Learning",
    dueDate: "Friday, 10:00 AM",
    completed: false,
    priority: "medium"
  },
]

const priorityColors = {
  high: "bg-red-500/10 text-red-600",
  medium: "bg-amber-500/10 text-amber-600",
  low: "bg-green-500/10 text-green-600"
}

export function UpcomingTasks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-card-foreground">Upcoming Tasks</h3>
          <p className="text-sm text-muted-foreground">Your pending assignments</p>
        </div>
        <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
          {tasks.filter(t => !t.completed).length} pending
        </span>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className={`p-4 rounded-xl border border-border transition-all hover:bg-secondary/50 ${
              task.completed ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <button className="mt-0.5 shrink-0">
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-card-foreground ${task.completed ? "line-through" : ""}`}>
                  {task.title}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">{task.course}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {task.dueDate}
                  </span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      <button className="w-full mt-4 py-3 text-sm font-medium text-primary hover:bg-secondary rounded-xl transition-colors">
        View All Tasks
      </button>
    </motion.div>
  )
}
