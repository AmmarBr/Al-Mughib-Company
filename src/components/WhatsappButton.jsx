import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappButton() {
  const phoneNumber = '966512345678' // استبدل بالرقم اللي تريد

  const openWhatsapp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <button
      onClick={openWhatsapp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      aria-label="اتصل عبر واتساب"
      title="اتصل عبر واتساب"
    >
      <FaWhatsapp size={28} />
    </button>
  )
}
