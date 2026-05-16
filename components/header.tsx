
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-950/84 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* --- Logo Section --- */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-20 h-15 overflow-hidden rounded-lg bg-white border border-white/10">
              <img
                src="/log.png" 
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center font-bold text-xl tracking-tighter">
              <span className="text-white">GRO</span>
              <span className="text-emerald-500">W</span>
              <span className="text-white">AVE</span>
            </div>
          </Link>

          {/* --- Right Side: Desktop Nav + Mobile Menu --- */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation (شاراوەیە لە مۆبایل) */}
            <nav className="hidden md:flex items-center gap-6 mr-4">
                            <Link href="/register/teacher" className="text-sm text-slate-300 hover:text-emerald-400">Teacher</Link>
                                                        <Link href="/register/student" className="text-sm text-slate-300 hover:text-emerald-400">Student</Link>


              <Link href="/about" className="text-sm text-slate-300 hover:text-emerald-400">About</Link>
              <Link href="/contact" className="text-sm text-slate-300 hover:text-emerald-400">Contact</Link>

            </nav>

           

            {/* --- Mobile Menu Button (تەنها لە مۆبایل دیارە) --- */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-950 border-white/10 text-white">
                  <nav className="flex flex-col gap-4 mt-10">
                    <Link href="/register/student" className="text-lg font-medium hover:text-emerald-400">Student</Link>
                    <Link href="/register/teacher" className="text-lg font-medium hover:text-emerald-400">Teacher</Link>

                    <Link href="/about" className="text-lg font-medium hover:text-emerald-400">About Us</Link>
                    
                    <Link href="/contact" className="text-lg font-medium hover:text-emerald-400">Contact</Link>
                    
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

        </div>
      </div>
    </motion.header>
  )
}