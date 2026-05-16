"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, ArrowLeft, Shield, Lock, CheckCircle, Activity } from "lucide-react"

const adminFeatures = [
  "Full platform management access",
  "User and role administration",
  "Course approval and moderation",
  "Revenue and analytics dashboard",
  "System configuration controls",
  "Priority support channel"
]

export default function AdminRegisterPage() {
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
            
            {/* Left Content - Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                <Shield className="w-4 h-4" />
                Control Center
              </span>

              <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                Become an <span className="text-muted-foreground">admin</span> with GrowWave Academy.
              </h1>

              <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">

Join our team as an admin and be part of the organization behind a growing educational academy. We are looking for responsible, organized, and motivated individuals who can support our daily operations and help manage communication with students and teachers.              </p>

              {/* Admin Features List */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {adminFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Security Badge */}
              <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-4">
                <Lock className="h-5 w-5 text-foreground" />
                <p className="text-xs font-medium text-muted-foreground">
                  Approval typically takes <span className="font-semibold text-foreground">24–48 hours</span>.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-foreground/5 blur-3xl" />
              <div className="relative rounded-xl border border-border bg-card p-10 text-center shadow-sm md:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary shadow-sm">
                  <Activity className="h-8 w-8 text-primary-foreground" />
                </div>

                <h2 className="mb-3 text-xl font-semibold text-foreground">System verification</h2>
                <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
                  Please complete the administrative verification form on our secure portal to proceed.
                </p>

                {/* دوگمەی لینکەکە بۆ ئەدمین */}
                <Link 
                  href="https://sfowtnygg8.zite.so" 
                  target="_blank"
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-md bg-primary text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request Admin Access
                    <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <div className="mt-8 flex items-center justify-center gap-2 opacity-70">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Security Systems Active
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  )
}