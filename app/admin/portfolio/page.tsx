import prisma from "@/lib/prisma"
import PortfolioManager from "./PortfolioManager"

export default async function PortfolioPage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Portfolio Management</h1>
      <PortfolioManager portfolios={portfolios} />
    </div>
  )
}
