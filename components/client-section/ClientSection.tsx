import { sanityClient } from "@/lib/sanity.client"
import AliraClient from "./AliraClient"
import { motion } from "framer-motion"
import { aliraClients } from "@/lib/queries"

const ClientSection = async () => {
  const clients = await sanityClient.fetch(aliraClients)

  return (
    <div className="mx-auto flex flex-col border-t-2 border-t-alira pt-10 py-20 justify-center">
        <h1 
          className="lg:px-80 px-10 font-black lg:text-4xl text-3xl font-poppins text-center"
        >
          Dipercaya Oleh Mereka Yang Menghargai Kualitas
        </h1>
      <AliraClient clients={clients}/>
    </div>
  )
}

export default ClientSection