// components/WhatsappFloat.tsx
import Link from 'next/link'

const WhatsappFloat = ({ phone, message }: { phone: string; message?: string }) => {
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-4 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <i className="ri-whatsapp-line text-2xl" />
    </Link>
  )
}

export default WhatsappFloat