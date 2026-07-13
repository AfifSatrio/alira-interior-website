import Sidebar from "@/components/admin/Sidebar"
import TopBar from "@/components/admin/TopBar"

export const metadata = {
  title: "Alira Admin Dashboard",
  description: "Admin dashboard for Alira Interior",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F6F1EA] font-poppins text-[#2C1F0E]">
      <Sidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F6F1EA] px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
