"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { urlFor } from "@/lib/sanity.image"

interface Clients {
  _id: string
  clientName: string
  clientLogo: any
}

const AliraClient = ({ clients }: { clients: Clients[] }) => {
  // Triple duplicate supaya loop seamless saat drag ke kanan sekalipun
  const duplicatedClients = [...clients, ...clients, ...clients]

  const innerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartValue = useRef(0)
  const lastPointerX = useRef(0)
  const lastTimestamp = useRef(0)
  const pointerVelocity = useRef(0)

  const BASE_SPEED = -1.2 // px per frame, negatif = scroll ke kiri

  const getSingleSetWidth = () => {
    if (!innerRef.current) return 0
    return innerRef.current.scrollWidth / 3
  }

  // Loop utama: auto-scroll + momentum setelah drag
  useAnimationFrame(() => {
    if (isDragging.current) return

    const singleWidth = getSingleSetWidth()
    if (singleWidth === 0) return

    // Decay momentum dari swipe user
    if (Math.abs(pointerVelocity.current) > 0.1) {
      pointerVelocity.current *= 0.93
      x.set(x.get() + pointerVelocity.current)
    } else {
      pointerVelocity.current = 0
      x.set(x.get() + BASE_SPEED)
    }

    // Infinite loop — reset posisi saat melewati 1 set
    const current = x.get()
    if (current <= -singleWidth) x.set(current + singleWidth)
    if (current > 0) x.set(current - singleWidth)
  })

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragStartValue.current = x.get()
    lastPointerX.current = e.clientX
    lastTimestamp.current = performance.now()
    pointerVelocity.current = 0
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return

    const now = performance.now()
    const dt = now - lastTimestamp.current
    const dx = e.clientX - lastPointerX.current

    // Rekam velocity untuk momentum saat dilepas
    if (dt > 0) pointerVelocity.current = (dx / dt) * 16

    lastPointerX.current = e.clientX
    lastTimestamp.current = now

    x.set(dragStartValue.current + (e.clientX - dragStartX.current))
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  return (
    <div className="w-full overflow-hidden mt-15 cursor-grab active:cursor-grabbing">
      <motion.div
        ref={innerRef}
        style={{ x }}
        className="flex will-change-transform"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client._id}-${index}`}
            className="shrink-0 px-12 flex items-center justify-center select-none"
          >
            <Image
              src={urlFor(client.clientLogo).width(200).format("webp").url()}
              alt={client.clientName}
              width={100}
              height={50}
              className="object-contain transition duration-300 pointer-events-none"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AliraClient