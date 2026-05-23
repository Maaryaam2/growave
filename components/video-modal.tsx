"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Clock, Calendar, CheckCircle } from "lucide-react"

// ۱. زێدەکرنا لێستا خاڵان و ڤیدیۆیێ بۆ پێناسا کۆرسی
interface Course {
  id: number
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
  videoUrl?: string // 🎥 لێنکێ فایلی ڤیدیۆیێ ل ڤێرە دەر دکەوێت
  learningPoints?: string[]
}

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  course: Course | null
}

export function VideoModal({ isOpen, onClose, course }: VideoModalProps) {
  if (!course) return null

  // ۲. ئەڤە خاڵێن سەرەکی نە ئەگەر تە د داتایێ کۆرسی دا خاڵ دیار نەکربن
  const defaultLearningPoints = [
    "Comprehensive curriculum designed by experts",
    "Interactive lessons with practical exercises",
    "Regular assessments and progress tracking",
    "Direct support from your instructor",
    "Certificate upon completion"
  ]

  const pointsToShow = course.learningPoints && course.learningPoints.length > 0 
    ? course.learningPoints 
    : defaultLearningPoints

  // پشتڕاستکرنا ناڤێ وێنەی دا کو هەمیشە سەرتۆپێ پۆڵدەری / وەرگریت
  const imagePath = course.backgroundImage.startsWith('/') ? course.backgroundImage : `/${course.backgroundImage}`

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
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-card-foreground hover:bg-card transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Section */}
            <div className="lg:w-3/5 h-64 lg:h-auto relative overflow-hidden bg-black flex items-center justify-center">
              {course.videoUrl ? (
                /* 🎥 ئەگەر لێنکێ ڤیدیۆیێ هەبیت دێ ل ڤێرە لۆد بیت */
                <video
                  src={course.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain absolute inset-0 z-10"
                  poster={imagePath}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                /* ئەگەر ڤیدیۆ نەبوو دێ شێوازێ وێنەیێ جێگیر یێ پێشتر نیشان دەت */
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imagePath})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <div 
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
                  />
                </>
              )}

              {/* ناڤ ونیشان ل سەر بەشی ڤیدیۆیێ (ئەگەر ڤیدیۆ نەبیت یان پێش پلەی بوونێ) */}
              {!course.videoUrl && (
                <div className="absolute top-6 left-6 right-16 z-20">
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
              )}
            </div>

            {/* Course Details */}
            <div className="lg:w-2/5 p-6 lg:p-8 overflow-y-auto bg-card">
              <h2 className="text-2xl font-bold text-card-foreground mb-2 lg:block">
                {course.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {course.description}
              </p>

              {/* Schedule Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" style={{ color: course.gradientFrom }} />
                    <p className="text-xs text-muted-foreground">Days</p>
                  </div>
                  <p className="font-medium text-card-foreground text-xs sm:text-sm">{course.days}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4" style={{ color: course.gradientFrom }} />
                    <p className="text-xs text-muted-foreground">Time</p>
                  </div>
                  <p className="font-medium text-card-foreground text-xs sm:text-sm">{course.time}</p>
                </div>
              </div>

              {/* Instructor & Level */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Instructor</p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-medium shrink-0"
                      style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
                    >
                      {course.instructor.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <p className="font-medium text-card-foreground text-xs truncate">{course.instructor}</p>
                  </div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Level</p>
                  <p className="font-medium text-card-foreground text-xs sm:text-sm">{course.level}</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="mb-6">
                <h3 className="font-semibold text-card-foreground mb-3 text-sm">What You&apos;ll Learn</h3>
                <ul className="space-y-2">
                  {pointsToShow.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
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