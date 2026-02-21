import { portfolioHighlight } from '@/constants'
import Image from 'next/image'

const ProyekPreview = () => {
  return (
    <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-10 bg-white/20 px-4 py-2 rounded-md backdrop-blur-xl border border-white/30">
      {portfolioHighlight.map((project, index) => (
        <div key={index} className='hidden lg:block'>
          <Image src={project.image} alt={project.name} width={80} height={40} className="rounded-md hover:scale-95 transition-all cursor-pointer" loading='lazy'/>
        </div>
      ))}
      {portfolioHighlight.slice(0, 3).map((project, index) => (
        <div key={index} className='lg:hidden'>
          <Image src={project.image} alt={project.name} width={80} height={40} className="rounded-md hover:scale-95 transition-all cursor-pointer" loading='lazy'/>
        </div>
      ))}
    </div>
  )
}

export default ProyekPreview