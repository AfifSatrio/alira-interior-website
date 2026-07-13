"use client"

import { signIn } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function LoginContent() {
  const searchParams = useSearchParams()
  const errorParam = searchParams.get("error")
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (errorParam === "AccessDenied") {
      setShowToast(true)
      const timer = setTimeout(() => setShowToast(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [errorParam])

  return (
    <main className="relative min-h-screen bg-[#F9F6F1] flex items-center justify-center overflow-hidden px-6 py-12">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-8 left-1/2 z-50 w-[90%] max-w-[400px] bg-white border border-[#fccfcf] shadow-[0_10px_40px_rgb(217,83,79,0.15)] rounded-2xl p-4 flex items-start gap-3"
          >
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d9534f]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[#d9534f] text-[13px] font-semibold font-poppins mb-1">Akses Ditolak</h3>
              <p className="text-[#7A6652] text-[12px] font-light font-poppins leading-relaxed">
                Email Anda tidak terdaftar sebagai administrator. Hubungi developer jika ini adalah sebuah kesalahan.
              </p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="flex-shrink-0 text-[#b8a898] hover:text-[#7A6652] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#5C4A32" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 w-[90%] max-w-[420px] bg-white px-8 py-10 md:px-12 md:py-12 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-[#ede8e2]">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-4"
          >
            <Image 
              src="/logo/logo.svg" 
              alt="Alira Interior Logo" 
              width={56} 
              height={56}
              className="object-contain"
            />
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mx-auto mb-6 h-px w-12 bg-[#B8946A] origin-center"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#2C1F0E] text-3xl md:text-4xl font-light leading-tight mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Alira Interior
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#B8946A] text-[11px] md:text-xs tracking-[0.25em] uppercase font-poppins font-medium"
          >
            Admin Access
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-5"
        >

          <p className="text-[#7A6652] text-[13px] leading-relaxed text-center font-poppins font-light px-2 mb-2">
            Silakan masuk menggunakan akun Google yang memiliki akses admin.
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/admin" })}
            className="w-full group relative flex items-center justify-center gap-3 bg-white border border-[#e2dcd5] hover:border-[#B8946A] text-[#3d2f1e] px-6 py-3 md:py-4 rounded-xl transition-all duration-300 font-poppins overflow-hidden"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}
          >
            <div className="absolute inset-0 bg-[#faf8f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-[22px] h-[22px] relative z-10 shrink-0">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <span className="font-medium text-[14px] relative z-10 tracking-wide text-[#5C4A32] group-hover:text-[#2C1F0E] transition-colors">Sign in with Google</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#b8a898] hover:text-[#B8946A] text-[11px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-poppins font-medium"
          >
            <ArrowLeft size={14} />
            Kembali ke Web
          </Link>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap');
      `}</style>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F9F6F1] flex items-center justify-center">Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}
