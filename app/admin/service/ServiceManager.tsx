"use client"

import { useState, useRef } from "react"
import { createService, deleteService, updateService } from "./actions"
import Image from "next/image"
import { Trash2, Edit, Plus, X } from "lucide-react"
import ImageUploader from "@/components/admin/ImageUploader"
import { motion } from "framer-motion"

export default function ServiceManager({ services }: { services: any[] }) {
  const [isPending, setIsPending] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [editId, setEditId] = useState<string | null>(null)
  
  const formRef = useRef<HTMLFormElement>(null)
  const itemRef = useRef<HTMLInputElement>(null)

  const resetForm = () => {
    setEditId(null)
    setImageUrl("")
    if (formRef.current) formRef.current.reset()
  }

  const handleEdit = (service: any) => {
    setEditId(service.id)
    setImageUrl(service.image)
    if (itemRef.current) itemRef.current.value = service.item
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)
    formData.append("image", imageUrl)
    
    try {
      if (editId) {
        await updateService(editId, formData)
      } else {
        await createService(formData)
      }
      resetForm()
    } catch(err) {
      alert("Failed to save service. Name must be unique.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="space-y-10 max-w-6xl font-poppins">
      
      {/* Form Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {editId ? "Edit Service" : "Add New Service"}
            </h2>
            <p className="text-[#7A6652] text-[13px] font-light mt-1">
              {editId ? "Update the details of this service." : "Create a new service offering."}
            </p>
          </div>
          {editId && (
            <button 
              onClick={resetForm}
              className="px-4 py-2 text-sm text-[#7A6652] bg-[#F9F6F1] rounded-full hover:bg-[#ede8e2] transition-colors flex items-center gap-2"
            >
              <X size={16} /> Cancel Edit
            </button>
          )}
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <div>
              <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Service Name</label>
              <input 
                ref={itemRef}
                name="item" 
                className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                placeholder="e.g. Interior Design"
                required 
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <ImageUploader 
              label="Service Image"
              value={imageUrl} 
              onChange={setImageUrl} 
            />
          </div>

          <div className="md:col-span-12 pt-4 border-t border-[#ede8e2]">
            <button 
              type="submit" 
              disabled={isPending || !imageUrl} 
              className="px-8 py-3.5 bg-[#B8946A] text-white rounded-xl font-medium tracking-wide disabled:opacity-50 hover:bg-[#A3815A] transition-colors flex items-center justify-center gap-2"
            >
              {isPending ? "Saving..." : editId ? "Save Changes" : <><Plus size={18} /> Add Service</>}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Grid Section */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]">
        <div className="mb-8">
          <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Existing Services
          </h2>
          <p className="text-[#7A6652] text-[13px] font-light mt-1">Manage your service offerings.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.id} className="group relative border border-[#ede8e2] rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(184,148,106,0.15)] transition-all duration-500 bg-white flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.item} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Actions overlay */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 bg-white/90 backdrop-blur-sm text-[#7A6652] rounded-xl hover:bg-[#B8946A] hover:text-white transition-colors shadow-sm"
                    title="Edit service"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => {
                      if(window.confirm("Are you sure you want to delete this service?")) {
                        deleteService(service.id)
                      }
                    }}
                    className="p-2 bg-white/90 backdrop-blur-sm text-[#d9534f] rounded-xl hover:bg-[#d9534f] hover:text-white transition-colors shadow-sm"
                    title="Delete service"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center">
                <h3 className="font-medium text-[#2C1F0E] text-[15px] leading-snug text-center">
                  {service.item}
                </h3>
              </div>
            </div>
          ))}
          {services.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-[#ede8e2] rounded-2xl">
              <p className="text-[#7A6652] text-sm">No services found. Add your first service above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
