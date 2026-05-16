"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Mail, Phone, MapPin, Send, Zap, MessageSquare, Clock, Instagram, Music, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "growaveacademy@gmail.com",
      description: "We'll respond within 24 hours",
      href: "mailto:growaveacademy@gmail.com",
    },
    {
      icon: Smartphone,
      label: "Phone",
      value: "+964 750 729 6446 ",
      description: "Call us Mon-Fri, 9AM-6PM",
      href: "tel:+9647507296446",
    },
  ]

  const paymentMethods = [
    {
      name: "FIB (First Iraq Bank)",
      number: "1234 5678 9012 3456",
      accountName: "GroWave Academy",
      icon: "🏦",
    },
    {
      name: "ZainCash",
      number: "+964 770 1234567",
      accountName: "GroWave ",
      icon: "📱",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-enterprise-radial opacity-70" />
        <div className="absolute left-10 top-20 h-96 w-96 animate-pulse rounded-full bg-primary/15 blur-3xl" />
        <div
          className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-chart-2/20 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="text-foreground">Contact us</span>
            <br />
           
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
We would love to hear from you.
If you have any questions about courses, registration, or learning opportunities, feel free to contact GrowWave Academy anytime.          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  variants={itemVariants}
                  className="group cursor-pointer rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.label}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12 items-center">
            {/* Location Map */}
            <motion.div variants={itemVariants} className="glass-card h-96 w-full max-w-2xl overflow-hidden rounded-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                  {/* Map placeholder with interactive elements */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%27100%27%20height=%27100%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M10%2050%20Q25%2025%2050%2050%20T90%2050%27%20fill=%27none%27%20stroke=%27%2364748b%27%20stroke-width=%272%27%20opacity=%270.1%27/%3E%3C/svg%3E')] opacity-20"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground text-sm">Duhok, Iraq</p>
                    <p className="text-muted-foreground text-sm">Available Worldwide</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      View on Map
                    </Button>
                  </div>
                </div>
              </motion.div>

            {/* Payment Methods */}
            <motion.div variants={containerVariants} className="space-y-4 w-full max-w-2xl">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground mb-4 text-center">
                Payment Methods
              </motion.h3>

              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-foreground mb-1">{method.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">Account: {method.accountName}</p>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-3 rounded-lg bg-background/50 border border-glass-border cursor-pointer group hover:border-primary transition-colors"
                      >
                        <p className="text-sm font-mono text-primary font-semibold">{method.number}</p>
                        <p className="text-xs text-muted-foreground mt-1">Click to copy</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">
                  <span className="text-yellow-400 font-semibold">💡 Tip:</span> Save our payment details for quick transactions. Your security is our priority.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-transparent to-primary/5"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="space-y-4"
          >
            {[
              {
                question: "Who can join the academy?",
                answer: "Anyone who wants to improve their language skills or learn new communication abilities can join—beginners, students, and professionals are all welcome.",
              },
              {
                question: "Do I get a certificate after completing a course?",
                answer: "Yes, students receive a certificate after successfully completing their course at GrowWave Academy. this certificate is recognized by employers and educational institutions.",
              },
              {
                question: "What makes GrowWave Academy different?",
                answer: "We focus on practical learning, real communication skills, and personal growth—not just theory. Our courses are designed to help you apply what you learn in real-world situations.",
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes! If you're not satisfied within 30 days, we offer a full refund with no questions asked.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="text-lg font-bold text-foreground mb-3">❓ {faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-primary/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Follow Us on Social Media</h2>
            <p className="text-muted-foreground text-lg">Stay connected with our latest updates and community highlights</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Instagram",
                handle: "@growave.acaddemy",
                icon: Instagram,
                color: "from-pink-500 to-purple-600",
                url: "https://www.instagram.com/growave.academy?igsh=cDBsZmxyNHdhMGZh",
                description: "Daily updates and community posts"
              },
              {
                name: "TikTok",
                handle: "@growave.acaddemy",
                icon: Instagram,
                color: "from-cyan-400 to-blue-600",
                url: "https://www.tiktok.com/@learninggrowth.community?_r=1&_t=ZS-96MH5GMX93V",
                description: "Short-form educational content"
              },
              {
                name: "Phone",
                handle: "+964 770 123 4567",
                icon: Smartphone,
                color: "from-green-500 to-emerald-600",
                url: "tel:+964770123456",
                description: "Direct support line"
              },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{social.name}</h3>
                  <p className="text-primary font-semibold mb-2">{social.handle}</p>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 EduVerse. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
