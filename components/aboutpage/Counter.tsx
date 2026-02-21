"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface CounterProps {
  target: number
  duration?: number
}

const Counter = ({ target, duration = 1.5 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = target / (duration * 60)

    const counter = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(counter)
      }
      setCount(Math.floor(start))
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count}+
    </span>
  )
}

export default Counter