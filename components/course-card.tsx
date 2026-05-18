"use client"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CourseCard({ 
  title, 
  instructor, 
  level, 
  backgroundImage, 
  days, 
  time, 
  description, 
  onViewDetails, 
  onEnrollNow 
}: any) {
  return (
    <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 h-full flex flex-col">
      
      {/* بەشی وێنە - Full Quality */}
      <div className="relative h-[300px] w-full overflow-hidden shrink-0 bg-slate-100">
        <Image
          src={backgroundImage.startsWith("/") ? backgroundImage : `/${backgroundImage}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        {/* سێبەری سەر وێنەکە بۆ دیاربوونی نووسینەکان */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/90 via-[#1e293b]/20 to-transparent" />
        
        {/* Level Tag */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.2em]">
            {level}
          </span>
        </div>

        {/* زانیاری کورت لەسەر وێنەکە */}
        <div className="absolute bottom-6 left-8 right-8">
          <h3 className="text-2xl font-black text-white mb-3 leading-tight tracking-tight">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xs border-2 border-white/20 shadow-lg shadow-emerald-900/20">
              {instructor.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-[0.1em] font-bold">Instructor</p>
              <p className="text-white font-bold text-sm tracking-tight">{instructor}</p>
            </div>
          </div>
        </div>
      </div>

      {/* بەشی زانیارییەکانی خوارەوە */}
      <div className="p-8 flex flex-col flex-grow bg-white">
        
        {/* وەسفی کۆرسەکە */}
        <div className="mb-6 flex-grow">
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium italic opacity-80">
            <span className="sr-only">Quote: </span>
            {description}
          </p>
        </div>

        {/* کات و ڕۆژەکان - بە ستایلی شینی تۆخ و ڕێک و پێک */}
        <div className="flex items-center justify-between mb-8 p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Calendar className="w-4 h-4 text-[#1e293b]" />
            </div>
            <span className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">{days}</span>
          </div>
          <div className="h-6 w-[1px] bg-slate-200" />
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Clock className="w-4 h-4 text-[#1e293b]" />
            </div>
            <span className="text-[11px] font-black text-[#1e293b] tracking-tighter">{time}</span>
          </div>
        </div>
        
        {/* دوگمەکانی چالاکی */}
        <div className="flex flex-col gap-3">
          <Button 
            onClick={onViewDetails}
            className="w-full h-14 rounded-2xl bg-blue-950/84 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-100 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost"
            onClick={onEnrollNow}
            className="w-full h-12 rounded-2xl text-slate-500 hover:text-[#1e293b] hover:bg-slate-50 font-bold text-xs uppercase tracking-widest transition-all"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  )
}