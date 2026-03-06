import { sanityClient } from '@/lib/sanity.client'
import LayananSelectionClient from './LayananSelectionClient'
import { serviceQuery } from '@/lib/queries'

const LayananSelection = async() => {
    const services = await sanityClient.fetch(serviceQuery)
  return (
    <div className='mt-5'>
        <LayananSelectionClient services = {services}/>
    </div>
  )
}

export default LayananSelection