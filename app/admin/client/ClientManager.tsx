"use client"

import { useState, useRef } from "react"
import { createClient, deleteClient, updateClient } from "./actions"
import Image from "next/image"
import { Trash2, Edit, Plus, X } from "lucide-react"
import ImageUploader from "@/components/admin/ImageUploader"
import { motion } from "framer-motion"

export default function ClientManager({ clients }: { clients: any[] }) {
  const [isPending, setIsPending] = useState(false)
  const [logoUrl, setLogoUrl] = useState("")
  const [editId, setEditId] = useState<string | null>(null)
  
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const resetForm = () => {
    setEditId(null)
    setLogoUrl("")
    if (formRef.current) formRef.current.reset()
  }

  const handleEdit = (client: any) => {
    setEditId(client.id)
    setLogoUrl(client.clientLogo)
    if (nameRef.current) nameRef.current.value = client.clientName
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)
    formData.append("clientLogo", logoUrl)
    
    try {
      if (editId) {
        await updateClient(editId, formData)
      } else {
        await createClient(formData)
      }
      resetForm()
    } catch(err) {
      alert("Failed to save client.")
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
              {editId ? "Edit Client" : "Add New Client"}
            </h2>
            <p className="text-[#7A6652] text-[13px] font-light mt-1">
              {editId ? "Update the details of this client." : "Add a new client to showcase."}
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
              <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Client Name</label>
              <input 
                ref={nameRef}
                name="clientName" 
                className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                placeholder="e.g. Acme Corporation"
                required 
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <ImageUploader 
              label="Client Logo"
              value={logoUrl} 
              onChange={setLogoUrl} 
            />
          </div>

          <div className="md:col-span-12 pt-4 border-t border-[#ede8e2]">
            <button 
              type="submit" 
              disabled={isPending || !logoUrl} 
              className="px-8 py-3.5 bg-[#B8946A] text-white rounded-xl font-medium tracking-wide disabled:opacity-50 hover:bg-[#A3815A] transition-colors flex items-center justify-center gap-2"
            >
              {isPending ? "Saving..." : editId ? "Save Changes" : <><Plus size={18} /> Add Client</>}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Grid Section */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]">
        <div className="mb-8">
          <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Existing Clients
          </h2>
          <p className="text-[#7A6652] text-[13px] font-light mt-1">Manage your client logos.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map(client => (
            <div key={client.id} className="group relative border border-[#ede8e2] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgb(184,148,106,0.15)] transition-all duration-300 bg-[#F9F6F1] flex flex-col items-center justify-center min-h-[160px]">
              <Image src={client.clientLogo} alt={client.clientName} width={120} height={60} className="object-contain max-h-16 mix-blend-multiply" />
              <p className="mt-4 text-[13px] font-medium text-[#7A6652] text-center uppercase tracking-wider">{client.clientName}</p>
              
              {/* Actions overlay */}
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEdit(client)}
                  className="p-1.5 bg-white text-[#7A6652] rounded-lg hover:bg-[#B8946A] hover:text-white transition-colors shadow-sm"
                  title="Edit client"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => {
                    if(window.confirm("Are you sure you want to delete this client?")) {
                      deleteClient(client.id)
                    }
                  }}
                  className="p-1.5 bg-white text-[#d9534f] rounded-lg hover:bg-[#d9534f] hover:text-white transition-colors shadow-sm"
                  title="Delete client"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
          {clients.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-[#ede8e2] rounded-2xl bg-white">
              <p className="text-[#7A6652] text-sm">No clients found. Add your first client above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
