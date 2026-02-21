"use client"

import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  "/bg/bg-1.webp",
  "/bg/bg-1.webp",
  "/bg/bg-1.webp",
  "/bg/bg-1.webp",
  "/bg/bg-1.webp",
]

const PortfolioCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())

  emblaApi.on("select", () => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  })
}, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="overflow-hidden py-0 mt-10">

      <div ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => {
            const isActive = index === selectedIndex

            return (
              <div key={index} className="flex-[0_0_33.333%] px-2">
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative lg:w-180 w-100 lg:h-100 h-50 rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={src}
                    alt="portfolio"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <motion.div
              animate={{
                width: index === selectedIndex ? 32 : 8,
                backgroundColor:
                  index === selectedIndex ? "#ffffff" : "#ffffff80",
              }}
              transition={{ duration: 0.4 }}
              className="h-2 rounded-full cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default PortfolioCarousel