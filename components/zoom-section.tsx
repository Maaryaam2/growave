"use client"

import { motion } from "framer-motion"
import { Video, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ZoomSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background px-6 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-enterprise-radial opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Live sessions
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Join live classes with your cohort
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Structured agendas, moderated Q&amp;A, and recordings when available—so teams and individuals stay aligned.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="w-full max-w-lg"
          >
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Video className="h-6 w-6" aria-hidden />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground">Enterprise-grade attendance</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Join from any device. Links rotate for security; please sign in with the email you used to enroll.
              </p>

              <a href="https://zoom.us/j/placeholder" target="_blank" rel="noopener noreferrer" className="mt-8 block">
                <Button size="lg" className="h-12 w-full rounded-md text-base font-medium">
                  <Video className="h-4 w-4" />
                  Open live classroom
                </Button>
              </a>

              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-8 text-xs font-medium text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-2 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-chart-3" aria-hidden />
                  1,200+ learners this week
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden />
                  Next session soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
