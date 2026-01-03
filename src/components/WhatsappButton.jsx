import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhatsappButton() {
  const phoneNumber = '966512345678' // استبدل بالرقم اللي تريد

  const openWhatsapp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 3, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openWhatsapp}
      className="fixed bottom-8 right-8 bg-[var(--brand-gold)] text-[#27282f] p-4 rounded-full shadow-[0_0_20px_rgba(178,146,95,0.4)] z-50 flex items-center justify-center border-2 border-white/10"
      aria-label="اتصل عبر واتساب"
      title="اتصل عبر واتساب"
    >
      <div className="absolute inset-0 rounded-full border border-[var(--brand-gold)] animate-ping opacity-75"></div>
      <FaWhatsapp size={32} className="relative z-10" />
    </motion.button>
  )
}
