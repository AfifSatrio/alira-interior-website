import prisma from "@/lib/prisma"
import ServiceManager from "./ServiceManager"

export default async function ServicePage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Service Management</h1>
      <ServiceManager services={services} />
    </div>
  )
}
