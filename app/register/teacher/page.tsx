"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, ArrowLeft, Presentation, Users, Star, CheckCircle } from "lucide-react"

const teacherBenefits = [
  "Reach thousands of students worldwide",
  "Flexible schedule and remote work",
  "Professional tools for online teaching",
  "Competitive earnings based on expertise",
  "Dedicated support for course creation",
  "Join a community of elite educators"
]

export default function TeacherRegisterPage() {
  return (
    <div className="min-h-screen bg-background text-left" dir="ltr">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-sm">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Grow<span className="text-emerald-500">W</span>ave
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-32 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* بەشی زانیارییەکان - چەپ */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-primary px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                <Presentation className="w-4 h-4" />
                Instructor Portal
              </span>

              <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                Share your <span className="text-primary">knowledge</span> with the world.
              </h1>

              <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                Become part of GroWave's elite teaching team. We provide the platform, you provide the expertise.
              </p>

              {/* لیستی سوودەکان */}
              <ul className="space-y-4 mb-10">
                {teacherBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-chart-3/15 p-1">
                      <CheckCircle className="h-4 w-4 shrink-0 text-chart-3" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* ئامارەکان */}
              <div className="flex items-center gap-8 border-t border-border pt-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-foreground">200+</span>
                  <span className="text-xs font-medium text-muted-foreground">Instructors</span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-foreground">98%</span>
                  <span className="text-xs font-medium text-muted-foreground">Success rate</span>
                </div>
              </div>
            </motion.div>

            {/* بەشی دوگمەکە - ڕاست */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
              <div className="relative rounded-xl border border-border bg-card p-10 text-center shadow-sm md:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                  <Presentation className="h-8 w-8 text-primary" />
                </div>

                <h2 className="mb-3 text-xl font-semibold text-foreground">Ready to teach?</h2>
                <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
                  Click the button below to fill out the teacher application form on our secure portal.
                </p>

                {/* دوگمەی لینکەکە لێرەیە */}
                <Link 
                  href="https://k6zumwwtcv.zite.so" 
                  target="_blank"
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-md bg-primary text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Apply as a Teacher
                    <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>

                <p className="mt-8 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Secure Application Process
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  )
}