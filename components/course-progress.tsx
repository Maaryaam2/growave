"use client"

import { motion } from "framer-motion"
import { Play, MoreHorizontal } from "lucide-react"

const enrolledCourses = [
  {
    id: 1,
    title: "Advanced English Communication",
    progress: 75,
    lessons: { completed: 15, total: 20 },
    image: "📚",
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    progress: 45,
    lessons: { completed: 18, total: 40 },
    image: "💻",
    color: "#10B981"
  },
  {
    id: 3,
    title: "Persian Language & Culture",
    progress: 30,
    lessons: { completed: 6, total: 20 },
    image: "🪻",
    color: "#8B5CF6"
  },
]

export function CourseProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-card-foreground">My Courses</h3>
          <p className="text-sm text-muted-foreground">Continue where you left off</p>
        </div>
      </div>

      <ul className="space-y-4">
        {enrolledCourses.map((course, index) => (
          <motion.li
            key={course.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-secondary/50 transition-all">
              {/* Course Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: `${course.color}20` }}
              >
                {course.image}
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-card-foreground truncate pr-2">
                    {course.title}
                  </h4>
                  <span className="text-sm font-semibold text-primary shrink-0">
                    {course.progress}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: course.color }}
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  {course.lessons.completed} of {course.lessons.total} lessons completed
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
