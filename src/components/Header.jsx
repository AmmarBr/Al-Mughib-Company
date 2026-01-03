import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });

      // Fill the message field after a slight delay to ensure scroll happens
      setTimeout(() => {
        const messageField = document.getElementById('contact-message');
        if (messageField) {
          messageField.value = "أود الاستفسار عن تفاصيل المساحات الإدارية المتوفرة في برج المغيب وكيفية حجز موعد للمعاينة.";
          messageField.focus();
        }
      }, 800);
    }
  };

  return (
    <div
      className='relative min-h-screen flex items-center w-full overflow-hidden'
      id='Header'
    >
      {/* Background Video with Zoom & Cinematic Overlay */}
      <motion.div
        className='absolute inset-0 z-0 overflow-hidden'
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="./header_img.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/برج المغيب تصوير مسفر الحارثي(٤).mp4" type="video/mp4" />
        </video>

        {/* Layered Overlays for Cinematic Feel (Reduced Opacity for Clarity) */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
      </motion.div>

      <div className='relative z-20 container mx-auto flex flex-col items-center justify-center min-h-screen text-center py-4 px-6 md:px-20 lg:px-32 text-white max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className='text-5xl md:text-8xl font-bold mb-4 text-gradient-gold drop-shadow-[0_0_15px_rgba(178,146,95,0.3)] leading-tight'
          >
            برج المغيب
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className='text-2xl md:text-4xl font-semibold mb-8 text-[var(--brand-gold)] opacity-90'
          >
            أكبر برج إداري في مدينة الرياض
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className='text-lg md:text-2xl mb-12 leading-relaxed text-gray-200/90 max-w-2xl font-light tracking-wide'
          >
            برج إداري متكامل يقع في أرقى أحياء شمال الرياض – حي الصحافة، يوفر مساحات إدارية متنوعة ضمن بيئة عمل حديثة ومتكاملة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className='flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto'
          >
            <a
              href="#Contact"
              onClick={handleQuoteClick}
              className="relative overflow-hidden bg-[var(--brand-gold)] px-12 py-4 rounded-full text-[#1a1b20] text-xl font-bold transition-all duration-500 hover:shadow-[0_0_30px_rgba(178,146,95,0.5)] hover:bg-[#d4af37] hover:scale-105 inline-block"
            >
              طلب عرض سعر
            </a>

            <a
              href="#Projects"
              className="glass-panel px-12 py-4 rounded-full text-white text-xl font-medium border border-white/20 transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              استكشف المشاريع
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[var(--brand-gold)] text-xs uppercase tracking-[0.3em] font-light">استكشف</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--brand-gold)] to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-white/40"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
