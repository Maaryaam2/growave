"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CourseCard } from "./course-card"
import { VideoModal } from "./video-modal"
import { PaymentModal } from "./payment-modal"
import { Filter } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "English Beginner",
    description: "Start your journey with fundamental English vocabulary and grammar.",
    category: "Languages",
    days: "Sun, Thu",
    time: "11:00",
    instructor: "Ms. Rozan",
    level: "Beginner",
    gradientFrom: "#1e293b", // شینی تۆخی هێدەر
    gradientTo: "#334155",
    backgroundImage: "rozan.png",
  },
  {
    id: 2,
    title: "English Intermediate",
    description: "Improve your fluency with advanced grammar and conversation practice.",
    category: "Languages",
    days: "Mon, Wed",
    time: "11:00",
    instructor: "Mr. Zhardil",
    level: "Intermediate",
    gradientFrom: "#1e293b",
    gradientTo: "#334155",
    backgroundImage: "zhardil.png",
  },
  {
    id: 3,
    title: "English Advanced",
    description: "Master professional writing and sophisticated communication skills.",
    category: "Languages",
    days: "Tue, Thu",
    time: "11:00",
    instructor: "Mr. Rayan",
    level: "Advanced",
    gradientFrom: "#1e293b",
    gradientTo: "#334155",
    backgroundImage: "/ry2.png",
  },
  {
    id: 4,
    title: "Arabic Language",
    description: "تعلم اللغة العربية بطلاقة مع مهارات القراءة والكتابة والمحادثة.",
    category: "Languages",
    days: "Sat (Ms. Darin), Thu (Ms. Jwan)",
    time: "10:00",
    instructor: "Ms. shahira",
    level: "All Levels",
    gradientFrom: "#10b981", // سەوزی لۆگۆ
    gradientTo: "#059669",
    backgroundImage: "arabic.png",
  },
  {
    id: 5,
    title: "Turkish Language",
    description: "Uzman eğitmenlerle günlük konuşma ve dilbilgisi becerilerinizi geliştirin.",
    category: "Languages",
    days: "Mon , Wed ",
    time: "10:00",
    instructor: "Ms. Jwan",
    level: "All Levels",
    gradientFrom: "#1e293b",
    gradientTo: "#334155",
    backgroundImage: "/jwan.png",
  },
  {
    id: 6,
    title: "Persian Language",
    description: "زیبایی زبان فارسی را با آموزش‌های کاربردی و مکالمة تجربه کنید.",
    category: "Languages",
    days: "Sun, Thu",
    time: "10:00",
    instructor: "Ms. Bita",
    level: "All Levels",
    gradientFrom: "#1e293b",
    gradientTo: "#334155",
    backgroundImage: "bita.png",
  },
  {
    id: 7,
    title: "German Language",
    description: "Lernen Sie Deutsch mit Fokus auf Aussprache und Kommunikation.",
    category: "Languages",
    days: "Sun, Tue",
    time: "09:00",
    instructor: "Mr.",
    level: "All Levels",
    gradientFrom: "#1e293b", // شینی تۆخی هێدەر
    gradientTo: "#334155",
    backgroundImage: "amal.png",
  },
  {
    id: 8,
    title: "Computer Technology",
    description: "فێربوونی بنەماکانی کۆمپیوتەر و پرۆگرامسازی بە شێوەیەکی پراکتیکی.",
    category: "Tech",
    days: "Sat, Wed",
    time: "09:00",
    instructor: "Ms. Sipal",
    level: "All Levels",
    gradientFrom: "#10b981",
    gradientTo: "#059669",
    backgroundImage: "Sepal.png",
  },
  {
    id: 9,
    title: "Mental Health",
    description: "پەرەپێدانی زیرەکی سۆزداری و بەڕێوەبردنی فشار بۆ تەندروستییەکی باشتر.",
    category: "Health",
    days: "Mon, Thu",
    time: "09:00",
    instructor: "Ms. Amal",
    level: "All Levels",
    gradientFrom: "#1e293b",
    gradientTo: "#334155",
    backgroundImage: "amal.png",
  },
];

const categories = [
  { id: "all", label: "All", count: courses.length },
  { id: "Languages", label: "Languages", count: courses.filter(c => c.category === "Languages").length },
  { id: "Health", label: "Health", count: courses.filter(c => c.category === "Health").length },
  { id: "Tech", label: "Tech", count: courses.filter(c => c.category === "Tech").length }
]

export function CourseGrid() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCourses = activeCategory === "all"
    ? courses
    : courses.filter(course => course.category === activeCategory)

  return (
    <section className="border-t border-border bg-muted/30 py-20 px-6 lg:py-24" id="courses">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Courses designed for real-world fluency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Filter by focus area and explore instructor-led paths across languages, technology, and wellbeing.
          </motion.p>
        </div>

        <div className="mb-10 flex items-center gap-3 overflow-x-auto pb-2">
          <div className="mr-1 flex shrink-0 items-center gap-2 border-r border-border pr-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap rounded-md border px-4 py-2 text-xs font-medium transition-colors ${
                  activeCategory === category.id
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-muted hover:text-foreground"
                }`}
              >
                {category.label}
                <span
                  className={`ml-1.5 tabular-nums ${activeCategory === category.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="min-w-[320px] snap-center first:ml-0 md:min-w-[380px]"
                >
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <CourseCard
                      {...course}
                      onViewDetails={() => {
                        setSelectedCourse(course)
                        setIsModalOpen(true)
                      }}
                      onEnrollNow={() => {
                        setSelectedCourse(course)
                        setIsPaymentModalOpen(true)
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Subtle Gradient Fade for Scroll Indicators */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-16 bg-gradient-to-l from-muted/30 to-transparent md:block" />
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 bg-gradient-to-r from-muted/30 to-transparent md:block" />
        </div>
      </div>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} course={selectedCourse} />
      <PaymentModal
        key={isPaymentModalOpen ? `payment-${selectedCourse?.id ?? "course"}` : "payment-closed"}
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        courseTitle={selectedCourse?.title || ""}
      />
    </section>
  )
}