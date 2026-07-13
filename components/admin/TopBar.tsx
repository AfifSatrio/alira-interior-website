"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export default function TopBar() {
  return (
    <header className="z-10 flex h-20 items-center justify-between border-b border-[#E6DDD2] bg-[#FFFCF8] px-5 sm:px-7 lg:px-8">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B754B]">
          Alira Interior
        </p>
        <h2 className="mt-1 font-dm-serif text-2xl font-normal leading-none text-[#2C1F0E]">
          Admin Portal
        </h2>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#D8CABB] bg-white px-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5F4D3D] shadow-sm transition-all duration-200 hover:border-[#9B754B] hover:bg-[#9B754B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B754B]/30"
        >
          <LogOut size={15} />
          Sign Out
        </button>
      </div>
    </header>
  )
}
