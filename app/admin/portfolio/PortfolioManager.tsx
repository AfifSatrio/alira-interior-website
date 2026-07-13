"use client"

import { useState, useRef, useEffect } from "react"
import { createPortfolio, deletePortfolio, togglePortfolioFeatured, updatePortfolio } from "./actions"
import Image from "next/image"
import { Trash2, Star, Edit, Plus, X } from "lucide-react"
import ImageUploader from "@/components/admin/ImageUploader"
import { motion, AnimatePresence } from "framer-motion"

export default function PortfolioManager({ portfolios }: { portfolios: any[] }) {
  const [isPending, setIsPending] = useState(false)
  const [coverUrl, setCoverUrl] = useState("")
  const [editId, setEditId] = useState<string | null>(null)
  
  // Form refs
  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const featuredRef = useRef<HTMLSelectElement>(null)

  const resetForm = () => {
    setEditId(null)
    setCoverUrl("")
    if (formRef.current) formRef.current.reset()
  }

  const handleEdit = (project: any) => {
    setEditId(project.id)
    setCoverUrl(project.coverImage)
    if (titleRef.current) titleRef.current.value = project.title
    if (featuredRef.current) featuredRef.current.value = project.featured.toString()
    
    // Scroll to form smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)
    formData.append("coverImage", coverUrl)
    
    try {
      if (editId) {
        await updatePortfolio(editId, formData)
      } else {
        await createPortfolio(formData)
      }
      resetForm()
    } catch (error) {
      alert("Failed to save portfolio.")
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
              {editId ? "Edit Project" : "Add New Project"}
            </h2>
            <p className="text-[#7A6652] text-[13px] font-light mt-1">
              {editId ? "Update the details of your portfolio project." : "Showcase a new project in your portfolio."}
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
              <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Project Title</label>
              <input 
                ref={titleRef}
                name="title" 
                className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                placeholder="e.g. Modern Minimalist Living Room"
                required 
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Featured on Homepage?</label>
              <select 
                ref={featuredRef}
                name="featured" 
                className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]"
              >
                <option value="false">No - Hide from Homepage</option>
                <option value="true">Yes - Show on Homepage</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-4">
            <ImageUploader 
              label="Cover Image"
              value={coverUrl} 
              onChange={setCoverUrl} 
            />
          </div>

          <div className="md:col-span-12 pt-4 border-t border-[#ede8e2]">
            <button 
              type="submit" 
              disabled={isPending || !coverUrl} 
              className="px-8 py-3.5 bg-[#B8946A] text-white rounded-xl font-medium tracking-wide disabled:opacity-50 hover:bg-[#A3815A] transition-colors flex items-center justify-center gap-2"
            >
              {isPending ? "Saving..." : editId ? "Save Changes" : <><Plus size={18} /> Add Project</>}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Grid Section */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]">
        <div className="mb-8">
          <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Existing Projects
          </h2>
          <p className="text-[#7A6652] text-[13px] font-light mt-1">Manage your portfolio gallery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map(project => (
            <div key={project.id} className="group relative border border-[#ede8e2] rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(184,148,106,0.15)] transition-all duration-500 bg-white flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={project.coverImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Actions overlay */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-2 bg-white/90 backdrop-blur-sm text-[#7A6652] rounded-xl hover:bg-[#B8946A] hover:text-white transition-colors shadow-sm"
                    title="Edit project"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => {
                      if(window.confirm("Are you sure you want to delete this project?")) {
                        deletePortfolio(project.id)
                      }
                    }}
                    className="p-2 bg-white/90 backdrop-blur-sm text-[#d9534f] rounded-xl hover:bg-[#d9534f] hover:text-white transition-colors shadow-sm"
                    title="Delete project"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <button
                  onClick={() => togglePortfolioFeatured(project.id, !project.featured)}
                  className={`absolute top-3 left-3 px-3 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase ${
                    project.featured 
                      ? 'bg-[#B8946A] text-white' 
                      : 'bg-white/90 backdrop-blur-sm text-[#7A6652] hover:bg-white'
                  }`}
                  title={project.featured ? "Unfeature from homepage" : "Feature on homepage"}
                >
                  <Star size={12} fill={project.featured ? "currentColor" : "none"} />
                  {project.featured && "Featured"}
                </button>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="font-medium text-[#2C1F0E] text-[15px] leading-snug line-clamp-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
          {portfolios.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-[#ede8e2] rounded-2xl">
              <p className="text-[#7A6652] text-sm">No portfolio projects found. Add your first project above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
