"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Lightbulb, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // سەرۆکێ تیمی
  const leaderMember = {
    name: "Mr. Hishyar Omar Ali",
    role: "Chief Executive Officer (CEO)",
    image: "hshyar.png", 
   
  }

  // ئەندامێن تیمی
  const teamMembers = [
    {
      name: "Mr. Zhardil Hama Karim",
      role: "Chief Operating Officer (COO)",
      image: "zhardill.png", 
      
    },
    {
      name: "Ms. Maryam Mohammed Tahir",
      role: "Technology Lead",
      image: "maryaam.png", 
     
    },
    {
      name: "Ms. Khozik Hameed khalid",
      role: "Innovation Coordinator",
      image: "khozik.png", 
    },
    {
      name: "Amal Eido Ismail",
      role: "Administrative Manager",
      image: "amall.png", 
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-32 bg-entreprise-radial bg-cover bg-center">
        <div className="absolute inset-0 z-0 bg-background/90" />
        <div className="absolute left-10 top-20 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div
          className="absolute bottom-20 right-10 h-[50vh] w-[50vh] animate-pulse rounded-full bg-chart-2/25 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
          >
            <Lightbulb className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">About GrowWave Academy</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="text-foreground">Your Journey </span>
            <br />
            <span className="text-primary">Starts Here</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            GrowWave Academy is dedicated to helping students grow through language, knowledge, and practical skills. We create a supportive learning environment that inspires confidence, creativity, and success for a brighter future.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg">Join our community</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section (ئەڤە ئەو بەشە بوو کو کێشە چێکربوو، نوکا هاتییە ڕێکخستن) */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-10 px-6 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
      >
        {/* بەشێ خاڵی یان داتای سەرەتایی ل ڤێرە دبییت داهاتی */}
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At GrowWave Academy, our mission is to transform learners into confident, skilled individuals by delivering high-quality education, practical language training, and lifelong learning opportunities that open the door to a better future.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vision at GrowWave Academy is to inspire a new generation of learners to unlock their full potential through knowledge, innovation, and practical skills—creating a future where education leads to real growth, real confidence, and real opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

     

      {/* Team Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Meet our team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet our team and discover the people behind GrowWave Academy.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12">
            {/* 👑 کارتی سەرۆک (Mr. Hshyar) */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center px-4"
            >
              <div className="group cursor-pointer rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md flex flex-col items-center max-w-sm w-full">
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 mb-6 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg transition-transform duration-300 group-hover:scale-110 bg-muted">
                  <Image
                    src={leaderMember.image}
                    alt={leaderMember.name}
                    fill
                    className="object-cover"
                    sizes="(max-w-7xl) 100vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${leaderMember.name}`
                    }}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 transition-colors group-hover:text-primary break-words max-w-full">{leaderMember.name}</h3>
                <p className="text-xs sm:text-sm text-primary font-semibold mb-3">{leaderMember.role}</p>
              </div>
            </motion.div>

            {/* 👥 ئەندامێن تیمی */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group cursor-pointer rounded-xl border border-border bg-card p-4 sm:p-6 text-center shadow-sm transition-shadow hover:shadow-md flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="relative h-24 w-24 sm:h-36 sm:w-36 mb-4 overflow-hidden rounded-full border-2 sm:border-4 border-primary/30 shadow-md transition-transform duration-300 group-hover:scale-110 bg-muted">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-w-7xl) 100vw"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`
                        }}
                      />
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold text-foreground mb-1 transition-colors group-hover:text-primary line-clamp-2 min-h-[40px] sm:min-h-0">{member.name}</h3>
                    <p className="text-[11px] sm:text-sm text-primary font-semibold mb-2 line-clamp-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
 {/* Core Values Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-primary/10 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Our core values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape our community culture
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Growth", description: "We believe every student has the power to grow through learning and new experiences.", icon: "⭐" },
              { title: "Inclusivity", description: "We embrace diversity and ensure every student feels valued and supported.", icon: "🤝" },
              { title: "Quality Education", description: "We provide high-quality online online courses designed for real skills and real progress.", icon: "💡" },
              { title: "Empowerment", description: "We help students build confidence, knowledge, and opportunities for the future.", icon: "✅" },
              { title: "Community", description: "We create a supportive learning environment where everyone feels motivated and connected.", icon: "🌍" },
              { title: "Lifelong Learning", description: "Learning never stops, and we inspire continuous personal and professional development.", icon: "🚀" },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-transparent to-primary/10 px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border bg-card p-12 text-center shadow-md"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students already learning with GrowWave Academy and unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">Start learning today</Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 GrowWave Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}