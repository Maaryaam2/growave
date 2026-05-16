"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize nodes
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000)
    nodesRef.current = Array.from({ length: Math.min(nodeCount, 80) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move node
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i >= j) return
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.3
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = `rgba(120, 160, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        // Mouse interaction
        const mouseDx = mouse.x - node.x
        const mouseDy = mouse.y - node.y
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDist < 250) {
          const opacity = (1 - mouseDist / 250) * 0.5
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4)
        gradient.addColorStop(0, "rgba(120, 180, 255, 0.8)")
        gradient.addColorStop(1, "rgba(120, 180, 255, 0)")
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(100, 80, 255, 0.4) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(50, 180, 220, 0.4) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(180, 100, 255, 0.4) 0%, transparent 70%)",
          top: "40%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 network-pattern opacity-40" />
    </div>
  )
}
