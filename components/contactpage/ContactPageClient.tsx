"use client"

import AliraContact from "./AliraContact"
import AliraMaps from "./AliraMaps"
import ContactForm from "./ContactForm"
import { motion, easeInOut } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
}

const ContactPageContent = ({ contact }: {contact: any }) => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full mx-auto my-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-15 gap-8 mx-5 lg:mx-20">
        <motion.div variants={itemVariants} className="w-full">
          <ContactForm />
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-start">
          <div className="w-full">
            <h1 className="text-4xl font-poppins font-bold mb-4">
              Awali Perjalanan Desain Anda
            </h1>
            <p className="text-sm font-poppins font-normal mb-6">
              Kami bukan sekadar kontraktor interior, kami adalah partner strategis dalam membangun ruang yang kuat, elegan, dan bernilai tinggi.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: easeInOut }}
            >
              <AliraContact contact={contact} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <AliraMaps mapUrl={contact.mapUrl}/>
    </motion.div>
  )
}

export default ContactPageContent