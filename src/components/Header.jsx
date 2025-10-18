import React from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div
      className='relative min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url('/header_img.png')` }}
      id='Header'
    >
      {/* طبقة السواد الشفافة */}
      <div className="absolute inset-0 bg-[#00000079] bg-opacity-50 z-10"></div>

      <NavBar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='relative z-20 container mx-auto flex flex-col items-center justify-center h-full text-center py-4 px-6 md:px-20 lg:px-32 text-white max-w-4xl'
      >
        <h2 className='text-5xl font-bold mb-6 text-[#b2925f]'>شركة المغيب للتطوير العقاري</h2>
        <p className='text-lg mb-8  '>
          شركة متخصصة في تطوير مشاريع عقارية مبتكرة تعزز جودة الحياة وتلبي احتياجات السوق، بخبرة تمتد لأكثر من 25 سنة
        </p>
        <div className='flex gap-6 mt-6'>
          <a
            href="#Projects"
            className="hover:text-[#27282f] hover:bg-[#b2925f] cursor-pointer border border-white px-8 py-3 rounded"
          >
            المشاريع
          </a>
          <a
            href="#Contact"
            className="hover:text-[#27282f] cursor-pointer bg-[#b2925f] px-8 py-3 rounded"
          >
            تواصل معنا
          </a>
        </div>
      </motion.div>
    </div>
  )
}
