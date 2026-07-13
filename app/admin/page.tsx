import prisma from "@/lib/prisma"
import { auth } from "@/auth"
import { BookOpenText, BriefcaseBusiness, Images, Users } from "lucide-react"

export default async function AdminDashboard() {
  const session = await auth()
  
  const [blogs, portfolios, clients, services] = await Promise.all([
    prisma.blog.count(),
    prisma.portfolio.count(),
    prisma.client.count(),
    prisma.service.count()
  ])

  const stats = [
    { name: "Total Blogs", value: blogs, icon: BookOpenText },
    { name: "Total Portfolios", value: portfolios, icon: Images },
    { name: "Total Clients", value: clients, icon: Users },
    { name: "Total Services", value: services, icon: BriefcaseBusiness },
  ]

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-[#E6DDD2] bg-[#FFFCF8] px-6 py-6 shadow-sm sm:px-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B754B]">
          Dashboard
        </p>
        <h1 className="font-dm-serif text-4xl font-normal leading-tight text-[#2C1F0E] sm:text-5xl">
          Welcome back, {session?.user?.name?.split(' ')[0] || 'Admin'}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6B5847]">
          Here is an overview of your website content.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.name}
            className="group rounded-xl border border-[#E6DDD2] bg-[#FFFCF8] p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C7AE91] hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9B754B]">
                  {stat.name}
                </p>
                <p className="mt-5 font-dm-serif text-5xl font-normal leading-none text-[#2C1F0E]">
                  {stat.value}
                </p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F1E8DE] text-[#8A643F] transition-colors duration-200 group-hover:bg-[#9B754B] group-hover:text-white">
                <stat.icon size={19} strokeWidth={2} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
