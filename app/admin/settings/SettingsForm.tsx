"use client"

import { useState } from "react"
import { updateSettings } from "./actions"
import ImageUploader from "@/components/admin/ImageUploader"
import { motion } from "framer-motion"
import { Save } from "lucide-react"

export default function SettingsForm({ site, seo }: { site: any, seo: any }) {
  const [isPending, setIsPending] = useState(false)
  const [bgImage, setBgImage] = useState(site?.backgroundImage || "")
  const [seoImg, setSeoImg] = useState(seo?.seoImage || "")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)
    formData.append("backgroundImage", bgImage)
    formData.append("seoImage", seoImg)

    try {
      await updateSettings(formData)
      alert("Settings updated successfully!")
    } catch (error) {
      alert("Failed to update settings.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-6xl font-poppins">
      
      {/* Site Settings Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Site Information
          </h2>
          <p className="text-[#7A6652] text-[13px] font-light mt-1">Manage global settings for your website.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="md:col-span-2">
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Tagline</label>
            <input 
              name="tagline" 
              defaultValue={site?.tagline} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
              required 
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Sub Tagline</label>
            <textarea 
              name="subtagline" 
              defaultValue={site?.subtagline} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1] leading-relaxed" 
              rows={3} 
              required 
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">WhatsApp Number</label>
            <input 
              name="whatsappNumber" 
              defaultValue={site?.whatsappNumber} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
              required 
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              defaultValue={site?.email} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
              required 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Physical Address</label>
            <input 
              name="address" 
              defaultValue={site?.address} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
              required 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Google Maps Embed URL</label>
            <input 
              name="mapUrl" 
              defaultValue={site?.mapUrl} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
              required 
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <ImageUploader 
              label="Hero Background Image"
              value={bgImage} 
              onChange={setBgImage} 
            />
          </div>
        </div>
      </motion.div>

      {/* SEO Settings Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            SEO & Social Sharing
          </h2>
          <p className="text-[#7A6652] text-[13px] font-light mt-1">Configure how your site appears on search engines and social media.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Meta Title</label>
            <input 
              name="seoTitle" 
              defaultValue={seo?.seoTitle} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Meta Description</label>
            <textarea 
              name="seoDesc" 
              defaultValue={seo?.seoDesc} 
              className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1] leading-relaxed" 
              rows={3} 
              required 
            />
          </div>
          
          <div className="pt-2">
            <ImageUploader 
              label="Social Share Image (OG Image)"
              value={seoImg} 
              onChange={setSeoImg} 
            />
          </div>
        </div>
      </motion.div>

      <div className="sticky bottom-6 z-10 flex justify-end">
        <button 
          type="submit" 
          disabled={isPending} 
          className="px-8 py-3.5 bg-[#B8946A] text-white rounded-xl font-medium tracking-wide shadow-lg shadow-[#B8946A]/30 disabled:opacity-50 hover:bg-[#A3815A] transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isPending ? "Saving Changes..." : <><Save size={18} /> Save All Settings</>}
        </button>
      </div>
    </form>
  )
}
