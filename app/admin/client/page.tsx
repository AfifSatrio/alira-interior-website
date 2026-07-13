import prisma from "@/lib/prisma"
import ClientManager from "./ClientManager"

export default async function ClientPage() {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Client Management</h1>
      <ClientManager clients={clients} />
    </div>
  )
}
