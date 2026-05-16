"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Clock, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Course {
  title: string
  description: string
  category: string
  days: string
  time: string
  instructor: string
  level: string
  gradientFrom: string
  gradientTo: string
  backgroundImage: string
}

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  course: Course | null
}

export function VideoModal({ isOpen, onClose, course }: VideoModalProps) {
  if (!course) return null

  const learningPoints = [
    "Comprehensive curriculum designed by experts",
    "Interactive lessons with practical exercises",
    "Regular assessments and progress tracking",
    "Direct support from your instructor",
    "Certificate upon completion"
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 glass-card overflow-hidden flex flex-col lg:flex-row rounded-3xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-card-foreground hover:bg-card transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Section */}
            <div 
              className="lg:w-3/5 h-64 lg:h-auto relative overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.backgroundImage})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
              />
              
              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>

              {/* Video Controls Placeholder */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="w-1/3 h-full rounded-full" 
                      style={{ background: `linear-gradient(90deg, ${course.gradientFrom}, ${course.gradientTo})` }}
                    />
                  </div>
                  <span className="text-sm text-white font-medium">0:00 / 45:00</span>
                </div>
              </div>

              {/* Course Title on Video */}
              <div className="absolute top-6 left-6 right-16">
                <span 
                  className="inline-block px-3 py-1 text-xs font-medium rounded-full text-white mb-3"
                  style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
                >
                  {course.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {course.title}
                </h2>
              </div>
            </div>

            {/* Course Details */}
            <div className="lg:w-2/5 p-6 lg:p-8 overflow-y-auto bg-card">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Schedule Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" style={{ color: course.gradientFrom }} />
                    <p className="text-xs text-muted-foreground">Days</p>
                  </div>
                  <p className="font-medium text-card-foreground">{course.days}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4" style={{ color: course.gradientFrom }} />
                    <p className="text-xs text-muted-foreground">Time</p>
                  </div>
                  <p className="font-medium text-card-foreground">{course.time}</p>
                </div>
              </div>

              {/* Instructor & Level */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Instructor</p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
                      style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
                    >
                      {course.instructor.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <p className="font-medium text-card-foreground text-sm">{course.instructor}</p>
                  </div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Level</p>
                  <p className="font-medium text-card-foreground">{course.level}</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="mb-6">
                <h3 className="font-semibold text-card-foreground mb-3">What You&apos;ll Learn</h3>
                <ul className="space-y-2">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: course.gradientFrom }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
