"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Sparkles, Users, Zap, GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / 25
      const y = (e.clientY - rect.top - rect.height / 2) / 25
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-9 pt-34 overflow-hidden bg-white"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        
        {/* Giant Dynamic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-black leading-none tracking-tighter"
          >
            {/* Gro - ڕەنگی شینی تۆخی هێدەر */}
            <span className="text-[#1e293b]">Gro</span>
            
            {/* W - بە سەوزی دەمێنێتەوە وەک لۆگۆکە */}
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">W</span>
            
            {/* ave - ڕەنگی شینی تۆخی هێدەر */}
            <span className="text-[#1e293b]">ave</span>
            
            <br />
            
            {/* Academy - ئێستا ئەمیش بە هەمان ڕەنگی شینی تۆخە */}
            <span className="text-4xl sm:text-3xl md:text-6xl font-bold text-[#1e293b] opacity-90 block mt-2">
              Academy
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ y: y1 }}
          className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Your future starts with  smart online learning.
       
        </motion.p>

         <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="h-12 min-w-[180px] rounded-md px-8 text-base font-medium">
            <Link href="#courses">
              Browse programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 min-w-[180px] rounded-md px-8 text-base font-medium">
            <Link href="/contact">Talk to us</Link>
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex justify-center gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "50K+", label: "Active Students", icon: Users, color: "text-blue-600" },
            { value: "200+", label: "Expert Courses", icon: Sparkles, color: "text-emerald-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-3xl bg-slate-50/50 border border-slate-100 group hover:border-[#1e293b]/20 transition-all duration-300 flex-1"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <p className="text-3xl md:text-4xl font-bold text-[#1e293b]">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}