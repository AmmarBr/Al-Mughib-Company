import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div
      className='relative min-h-screen flex items-center w-full overflow-hidden'
      id='Header'
    >
      {/* Background with Parallax and Zoom */}
      <motion.div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url('/header_img.png')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
        className='relative z-20 container mx-auto flex flex-col items-center justify-center h-full text-center py-4 px-6 md:px-20 lg:px-32 text-white max-w-4xl pt-32'
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='text-5xl md:text-7xl font-bold mb-6 text-[var(--brand-gold)] drop-shadow-lg'
        >
          شركة المغيب للتطوير العقاري
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='text-lg md:text-xl mb-10 leading-relaxed text-gray-200'
        >
          شركة متخصصة في تطوير مشاريع عقارية مبتكرة تعزز جودة الحياة وتلبي احتياجات السوق، بخبرة تمتد لأكثر من 25 سنة
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='flex gap-6 mt-6'
        >
          <a
            href="#Projects"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer border border-[var(--brand-gold)] text-[var(--brand-gold)] px-10 py-4 rounded-full text-lg hover:bg-[var(--brand-gold)] hover:text-white"
          >
            المشاريع
          </a>
          <a
            href="#Contact"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer bg-[var(--brand-gold)] px-10 py-4 rounded-full text-[#27282f] text-lg font-semibold hover:bg-white hover:text-[var(--brand-gold)]"
          >
            تواصل معنا
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
