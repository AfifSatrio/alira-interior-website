"use client"

import { useState, useEffect } from "react"

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const Toast = ({ type, message, onClose }: { type: "success" | "error", message: string, onClose: ()=>void }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className={`fixed right-6 bottom-6 z-50 max-w-sm rounded-md px-4 py-3 shadow-xl ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
      <div className="text-sm">{message}</div>
    </div>
  )
}

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ type: "success"|"error", message: string } | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setToast(null)

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ type: "error", message: "Semua field wajib diisi." })
      return
    }

    if (!validateEmail(form.email)) {
      setToast({ type: "error", message: "Email tidak valid." })
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setToast({ type: "success", message: "Pesan berhasil dikirim. Terima kasih!" })
        setForm({ name: "", email: "", phone: "", message: "" })
      } else {
        setToast({ type: "error", message: data.error || "Gagal mengirim pesan." })
      }
    } catch (err) {
      setToast({ type: "error", message: "Terjadi kesalahan jaringan." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col w-full gap-3 transition-all font-poppins">
        <label htmlFor="name" className="font-semibold text-sm">Nama Anda</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          type="text"
          className="p-4 rounded-md border-2 border-alira focus:outline-none focus:ring-2 focus:ring-alira/30"
          required
        />

        <label htmlFor="email" className="font-semibold text-sm">Email</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          className="p-4 rounded-md border-2 border-alira focus:outline-none focus:ring-2 focus:ring-alira/30"
          required
        />

        <label htmlFor="message" className="font-semibold text-sm">Pesan</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
          cols={30}
          rows={5}
          className="p-4 rounded-md border-2 border-alira focus:outline-none focus:ring-2 focus:ring-alira/30"
          required
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-fit border bg-alira px-6 py-2.5 rounded-md mt-4 transition-all cursor-pointer hover:bg-white hover:border-alira hover:text-alira disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="text-sm">{loading ? "Mengirim..." : "Kirim Pesan"}</span>
          </button>
        </div>
      </form>

      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
    </>
  )
}

export default ContactForm