"use client"

import { useState, useRef } from "react"
import { createBlog, deleteBlog, toggleBlogFeatured, updateBlog } from "./actions"
import Image from "next/image"
import { Trash2, Star, Edit, Plus, X } from "lucide-react"
import ImageUploader from "@/components/admin/ImageUploader"
import RichTextEditor from "@/components/admin/RichTextEditor"
import { motion } from "framer-motion"

type BlogItem = {
  id: string
  title: string
  slug: string
  author: string
  mainImage: string
  content: unknown
  publishedAt: string | Date
  featured: boolean
}

export default function BlogManager({ blogs }: { blogs: BlogItem[] }) {
  const [isPending, setIsPending] = useState(false)
  const [mainImageUrl, setMainImageUrl] = useState("")
  const [editId, setEditId] = useState<string | null>(null)
  const [content, setContent] = useState("")
  
  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const slugRef = useRef<HTMLInputElement>(null)
  const authorRef = useRef<HTMLInputElement>(null)
  const publishedAtRef = useRef<HTMLInputElement>(null)
  const featuredRef = useRef<HTMLSelectElement>(null)

  const resetForm = () => {
    setEditId(null)
    setMainImageUrl("")
    setContent("")
    if (formRef.current) formRef.current.reset()
  }

  const handleEdit = (blog: BlogItem) => {
    setEditId(blog.id)
    setMainImageUrl(blog.mainImage)
    if (titleRef.current) titleRef.current.value = blog.title
    if (slugRef.current) slugRef.current.value = blog.slug
    if (authorRef.current) authorRef.current.value = blog.author
    if (publishedAtRef.current) publishedAtRef.current.value = new Date(blog.publishedAt).toISOString().split('T')[0]
    if (featuredRef.current) featuredRef.current.value = blog.featured.toString()
    
    try {
      setContent(typeof blog.content === "string" ? blog.content : JSON.stringify(blog.content, null, 2))
    } catch (e) {
      setContent("")
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)
    formData.append("mainImage", mainImageUrl)
    // The RichTextEditor includes a hidden input named "content" that contains the value,
    // but just to be absolutely certain we'll append it.
    formData.set("content", content)
    
    try {
      if (editId) {
        await updateBlog(editId, formData)
      } else {
        await createBlog(formData)
      }
      resetForm()
    } catch(err) {
      alert("Failed to save blog. Slug must be unique.")
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
              {editId ? "Edit Blog Post" : "Create New Post"}
            </h2>
            <p className="text-[#7A6652] text-[13px] font-light mt-1">
              {editId ? "Update the details and content of your post." : "Publish an article to your journal."}
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

        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-9 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Title</label>
                <input 
                  ref={titleRef}
                  name="title" 
                  className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                  placeholder="e.g. 5 Design Trends for 2026"
                  required 
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Slug (URL friendly)</label>
                <input 
                  ref={slugRef}
                  name="slug" 
                  className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                  placeholder="e.g. 5-design-trends-2026"
                  required 
                  pattern="[a-z0-9-]+" 
                  title="Only lowercase letters, numbers, and hyphens" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Author</label>
                <input 
                  ref={authorRef}
                  name="author" 
                  defaultValue="Admin" 
                  className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                  required 
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Publish Date</label>
                <input 
                  ref={publishedAtRef}
                  type="date" 
                  name="publishedAt" 
                  defaultValue={new Date().toISOString().split('T')[0]} 
                  className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]" 
                  required 
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Featured?</label>
                <select 
                  ref={featuredRef}
                  name="featured" 
                  className="w-full border border-[#e2dcd5] rounded-xl p-3 focus:outline-none focus:border-[#B8946A] focus:ring-1 focus:ring-[#B8946A] transition-all bg-[#F9F6F1]"
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col lg:col-span-4">
            <ImageUploader 
              label="Cover Image"
              value={mainImageUrl} 
              onChange={setMainImageUrl} 
              className="flex-1"
            />
          </div>

          <div className="lg:col-span-12">
            <label className="block text-[13px] font-medium text-[#7A6652] mb-2">Content</label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>

          <div className="flex items-center border-t border-[#ede8e2] pt-7 lg:col-span-12">
            <button 
              type="submit" 
              disabled={isPending || !mainImageUrl} 
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#B8946A] px-8 py-3.5 font-medium tracking-wide text-white transition-colors hover:bg-[#A3815A] disabled:opacity-50"
            >
              {isPending ? "Publishing..." : editId ? "Save Changes" : <><Plus size={18} /> Publish Post</>}
            </button>
          </div>
        </form>
      </motion.div>

      {/* List Section */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ede8e2]">
        <div className="mb-8">
          <h2 className="text-3xl font-light text-[#2C1F0E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Existing Posts
          </h2>
          <p className="text-[#7A6652] text-[13px] font-light mt-1">Manage your published articles.</p>
        </div>

        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 border border-[#ede8e2] rounded-2xl hover:shadow-[0_8px_30px_rgb(184,148,106,0.1)] transition-all bg-[#F9F6F1]/50 group">
              <div className="relative w-full sm:w-40 h-28 sm:h-24 rounded-xl overflow-hidden shrink-0">
                <Image src={blog.mainImage} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[#2C1F0E] text-[16px] truncate">{blog.title}</h3>
                <p className="text-[13px] text-[#7A6652] mt-1 font-light">/{blog.slug} • {new Date(blog.publishedAt).toLocaleDateString()}</p>
                {blog.featured && <span className="inline-block mt-2 px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-[#B8946A] text-white rounded">Featured</span>}
              </div>
              <div className="flex gap-2 shrink-0 mt-4 sm:mt-0">
                <button
                  onClick={() => toggleBlogFeatured(blog.id, !blog.featured)}
                  className={`p-2 rounded-xl transition-all shadow-sm ${blog.featured ? 'bg-[#B8946A] text-white hover:bg-[#A3815A]' : 'bg-white text-[#7A6652] hover:bg-[#B8946A] hover:text-white border border-[#e2dcd5]'}`}
                  title={blog.featured ? "Unfeature" : "Feature"}
                >
                  <Star size={16} fill={blog.featured ? "currentColor" : "none"} />
                </button>
                <button
                  onClick={() => handleEdit(blog)}
                  className="p-2 bg-white text-[#7A6652] border border-[#e2dcd5] rounded-xl hover:bg-[#B8946A] hover:text-white transition-colors shadow-sm"
                  title="Edit post"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => {
                    if(window.confirm("Are you sure you want to delete this post?")) {
                      deleteBlog(blog.id)
                    }
                  }}
                  className="p-2 bg-white text-[#d9534f] border border-[#e2dcd5] rounded-xl hover:bg-[#d9534f] hover:text-white transition-colors shadow-sm"
                  title="Delete post"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          {blogs.length === 0 && (
            <div className="py-12 text-center border-2 border-dashed border-[#ede8e2] rounded-2xl bg-white">
              <p className="text-[#7A6652] text-sm">No blog posts found. Write your first article above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
