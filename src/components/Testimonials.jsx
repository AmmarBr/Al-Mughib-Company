import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <div className='mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-2xl sm:text-4xl font-bold mb-4 text-center'
      >
        آراء
        <span className='underline underline-offset-4 decoration-1 under font-light text-[var(--brand-gold)]'> العملاء</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='text-center text-gray-400 max-w-xl mx-auto mb-16 text-lg'
      >
        نحن نقدر ملاحظات عملائنا ونسعى دائمًا لتحسين خدماتنا لنكون عند حسن ظنهم.
      </motion.p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className='max-w-[340px] glass-panel rounded-2xl px-8 py-12 text-center relative group hover:shadow-[0_10px_30px_rgba(178,146,95,0.15)] transition-all duration-500 border border-white/5'
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[var(--brand-gold)] group-hover:w-full transition-all duration-700 ease-out opacity-80"></div>

            <div className="relative">
              <img src={testimonial.image} alt={testimonial.alt} className='w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[var(--bg-secondary)] shadow-lg object-cover' />
              <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-[var(--brand-gold)] rounded-full p-1.5 border-4 border-[#1a1b20]">
                <img src={assets.star_icon} className="w-4 h-4 invert brightness-0" alt="star" />
              </div>
            </div>

            <h2 className='text-xl font-bold text-white mb-1 group-hover:text-[var(--brand-gold)] transition-colors'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-6 text-sm font-medium'>{testimonial.title}</p>

            <div className='flex justify-center gap-1 mb-6'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  src={assets.star_icon}
                  alt='نجمة'
                  className='w-5 h-5 inline-block drop-shadow-[0_0_8px_rgba(178,146,95,0.6)]'
                />
              ))}
            </div>

            <p className="text-gray-300 italic leading-relaxed text-sm opacity-90">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
