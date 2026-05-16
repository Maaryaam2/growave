"use client"

import { motion } from "framer-motion"
import { Bell, Search, Sparkles } from "lucide-react"
import { ProgressChart } from "@/components/progress-chart"
import { UpcomingTasks } from "@/components/upcoming-tasks"
import { CourseProgress } from "@/components/course-progress"

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, John</h1>
          <p className="text-muted-foreground mt-1">Continue your learning journey</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-64 h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>
      </motion.header>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {[
          { label: "Courses Enrolled", value: "5", icon: "📚", change: "+2 this month" },
          { label: "Hours Learned", value: "48.5", icon: "⏱️", change: "+12.5 this week" },
          { label: "Certificates", value: "3", icon: "🏆", change: "+1 this month" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="glass-card p-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xs text-primary mt-1">{stat.change}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* AI Learning Assistant Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-8 p-6 rounded-2xl bg-primary text-primary-foreground"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">AI Learning Assistant</h3>
              <p className="text-sm text-primary-foreground/80">Get personalized recommendations and study tips</p>
            </div>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors">
            Try Now
          </button>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProgressChart />
        <UpcomingTasks />
      </div>

      {/* Course Progress */}
      <div className="mt-8">
        <CourseProgress />
      </div>
    </div>
  )
}
