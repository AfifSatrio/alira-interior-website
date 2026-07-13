import LayananSelectionClient from './LayananSelectionClient'
import prisma from "@/lib/prisma"

const LayananSelection = async() => {
    const services = await prisma.service.findMany()
  return (
    <div className='mt-5'>
        <LayananSelectionClient services = {services}/>
    </div>
  )
}

export default LayananSelection