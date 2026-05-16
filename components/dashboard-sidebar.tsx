"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Settings, 
  GraduationCap,
  LogOut,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
  { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-64 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col fixed left-0 top-0"
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            EduVerse
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-transform group-hover:scale-110",
                    isActive && "text-sidebar-primary"
                  )} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sidebar-accent/30">
          <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-semibold">
            JS
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">John Smith</p>
            <p className="text-xs text-sidebar-foreground/60">Student</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-xl text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </motion.aside>
  )
}
