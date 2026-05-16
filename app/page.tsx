import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CourseGrid } from "@/components/course-grid"
import { ZoomSection } from "@/components/zoom-section"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="courses">
        <CourseGrid />
      </div>
      <ZoomSection />
      
    {/* لێرەوە دەست پێ بکە بۆ گۆڕینی فۆتەرە کۆنەکە */}
<footer className="bg-blue-950/84 text-white py-16 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
    
    {/* بەشی لینکەکان */}
    <div>
      <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 uppercase">Links</h3>
      <ul className="space-y-3 font-medium opacity-90">
             <Link href="/about" className="text-sm text-slate-300 hover:text-emerald-400">About</Link><br></br><br></br>

              <Link href="#courses" className="text-sm text-slate-300 hover:text-emerald-400">Courses</Link><br></br><br></br>
            <Link href="/contact" className="text-sm text-slate-300 hover:text-emerald-400">Contact</Link><br></br><br></br>
      </ul>
    </div>

    {/* بەشی ناونیشان */}
    <div>
      <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 uppercase">Address</h3>
      <div className="space-y-4 text-white/80">
        <p className="font-bold text-white">Duhok Office</p>
        <p>Rojvin Road, House NO (31)</p>
        <p className="font-bold text-white mt-4">duhok Headquarters</p>
        <p>duhok</p>
      </div>
    </div>

    {/* بەشی پەیوەندی و سۆشیاڵ میدیا */}
    <div>
      <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 uppercase">Contact</h3>
      <p className="mb-6 font-bold text-lg">+964 750 729 6446</p>
      
      <div className="flex gap-4 mb-8">
        {/* لێرە ئایکۆنەکانت دەبێت هەبێت */}
        <span className="p-2 bg-white/10 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors">FB</span>
        <span className="p-2 bg-white/10 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors">IG</span>
        <span className="p-2 bg-white/10 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors">YT</span>
      </div>

      {/* Subscribe Button */}
      <div className="flex bg-white/10 rounded-lg overflow-hidden border border-white/20">
        <input 
          placeholder="Email Address" 
          className="bg-transparent border-none text-white p-3 w-full outline-none placeholder:text-white/50" 
        />
        <button className="bg-white text-[#0066b2] px-4 font-bold">Subscribe</button>
      </div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center opacity-50 text-xs">
    Copyright © 2026 Growave Academy. All Rights Reserved.
  </div>
</footer>
    </main>
  )
}
