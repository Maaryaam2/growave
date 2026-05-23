"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CourseGrid } from "../components/course-grid"
import { ZoomSection } from "@/components/zoom-section"
import Link from "next/link"
// 🌐 هاوردەکردنی ئایکۆنێن پێویست بۆ فۆتەری
import { Facebook, Instagram, Youtube, Send } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* پشکا سەرەکی یا لاپەرەی */}
      <Header />
      <Hero />
      <div id="courses">
        <CourseGrid />
      </div>
      <ZoomSection />
      
      {/* 🚀 فۆتەرێ نوو و چاککری یێ GROWAVE */}
      <footer className="bg-slate-950 text-white py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* ١. بەشی لێنکێن خێرا (Quick Links) */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 uppercase tracking-wider text-emerald-400">
              Links
            </h3>
            <ul className="space-y-3 font-medium flex flex-col items-start">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ٢. بەشی ناونیشان (Address) */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 uppercase tracking-wider text-emerald-400">
              Address
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="font-semibold text-white text-base">Duhok Office</p>
                <p className="mt-1">Rojvin Road, House NO (31)</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-white text-base">Duhok Headquarters</p>
                <p className="mt-1">Duhok, Kurdistan Region</p>
              </div>
            </div>
          </div>

          {/* ٣. بەشی پەیوەندی و نووچەنامە (Contact & Newsletter) */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 uppercase tracking-wider text-emerald-400">
              Contact
            </h3>
            <p className="mb-5 font-bold text-xl text-slate-100 tracking-wide dir-ltr text-left">
              +964 750 729 6446
            </p>
            
            {/* ئایکۆنێن سۆشیال میدیایێ ب شێوازێ بازنەیی و ئەنیمەیشن */}
            <div className="flex gap-3 mb-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Input پێشکەوتوو بۆ سەبسکرایب */}
            <div className="flex bg-white/5 rounded-xl overflow-hidden border border-white/10 focus-within:border-emerald-500/50 transition-colors max-w-sm">
              <input 
                type="email"
                placeholder="Email Address" 
                className="bg-transparent border-none text-white text-sm p-3 w-full outline-none placeholder:text-slate-500" 
              />
              <button className="bg-emerald-500 text-white px-5 text-sm font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-1.5 shrink-0">
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* بەشی مافی پاراستن لە خوارەوە */}
        <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/5 text-center text-slate-500 text-xs tracking-wide">
          Copyright © 2026 Growave Academy. All Rights Reserved.
        </div>
      </footer>
    </main>
  )
}