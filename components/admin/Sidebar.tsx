"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Briefcase, 
  Settings 
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
  { name: "Clients", href: "/admin/client", icon: Users },
  { name: "Services", href: "/admin/service", icon: Briefcase },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-[#E6DDD2] bg-[#FFFCF8] text-[#2C1F0E]">
      <div className="flex h-20 items-center border-b border-[#EEE6DC] px-6">
        <span className="font-dm-serif text-3xl font-normal tracking-wide text-[#2C1F0E]">
          Alira Admin
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-5">
        <ul className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin")
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex min-h-11 items-center gap-3 rounded-lg px-3.5 py-2.5 text-[14px] font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-[#9B754B] text-white shadow-sm shadow-[#9B754B]/20" 
                      : "text-[#5F4D3D] hover:bg-[#F1E8DE] hover:text-[#2C1F0E]"
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
