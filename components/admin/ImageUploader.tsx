"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { UploadCloud, X, Loader2 } from "lucide-react"

interface ImageUploaderProps {
  value: string
  onChange: (url: string) => void
  label?: string
  className?: string
  minHeight?: number
}

export default function ImageUploader({ value, onChange, label = "Upload Image", className = "", minHeight = 200 }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (file: File) => {
    if (!file) return

    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch("/api/upload", { method: "POST", body: formData })
      
      if (!res.ok) throw new Error("Upload failed")
      
      const data = await res.json()
      if (data.url) {
        onChange(data.url)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleUpload(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      handleUpload(file)
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onChange("")
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-[13px] font-medium text-[#7A6652] mb-2">{label}</label>}
      
      <div 
        onClick={() => !value && !isUploading && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
          value ? "border-transparent" : "border-dashed cursor-pointer"
        } ${
          isDragging ? "border-[#B8946A] bg-[#B8946A]/5" : "border-[#e2dcd5] hover:border-[#B8946A]/50 bg-[#F9F6F1]"
        }`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileSelect} 
        />

        <AnimatePresence mode="wait">
          {isUploading ? (
            <motion.div 
              key="uploading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#F9F6F1]"
            >
              <Loader2 className="w-8 h-8 text-[#B8946A] animate-spin mb-3" />
              <p className="text-[13px] text-[#7A6652] font-medium tracking-wide">Uploading image...</p>
            </motion.div>
          ) : value ? (
            <motion.div 
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 group"
            >
              <Image 
                src={value} 
                alt="Uploaded preview" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-[#2C1F0E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={handleRemove}
                  className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#d9534f] rounded-lg text-[13px] font-medium flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <X size={16} /> Remove Image
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-[#B8946A]">
                <UploadCloud strokeWidth={1.5} size={32} />
              </div>
              <p className="text-[14px] font-medium text-[#2C1F0E] mb-1">Click to upload or drag and drop</p>
              <p className="text-[12px] text-[#7A6652]">SVG, PNG, JPG or WEBP (max. 5MB)</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
