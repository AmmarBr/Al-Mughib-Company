import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 py-20 px-8 md:px-20 lg:px-32 border-t border-[var(--brand-gold)]/20 relative overflow-hidden" id="Footer" dir="rtl">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--brand-gold)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        {/* الشعار والوصف */}
        <div className="md:w-1/3 flex flex-col items-start gap-8">
          <img src={assets.logo_dark} alt="شعار المغيب" className="w-44 brightness-110" />
          <p className="text-sm leading-relaxed text-gray-400 font-medium opacity-80 max-w-sm">
            شركة متخصصة في تقديم أفضل الحلول العقارية مع التركيز على الجودة والابتكار لتلبية احتياجات عملائنا بمعايير استثنائية.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-white/5 flex items-center justify-center text-[var(--brand-gold)] hover:bg-[var(--brand-gold)] hover:text-[#111] transition-all duration-300 hover:shadow-[0_0_15px_rgba(178,146,95,0.4)]">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* قائمة الروابط */}
        <div className="md:w-1/5">
          <h3 className="text-white font-bold mb-8 text-lg relative inline-block">
            روابط سريعة
            <span className="absolute -bottom-2 right-0 w-1/2 h-0.5 bg-[var(--brand-gold)]"></span>
          </h3>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
            {['الرئيسية', 'من نحن', 'المشاريع', 'سياسة الخصوصية'].map((item, index) => (
              <li key={index}>
                <a href={`#${item === 'الرئيسية' ? 'Header' : item === 'من نحن' ? 'About' : item === 'المشاريع' ? 'Projects' : '#'}`}
                  className="hover:text-[var(--brand-gold)] hover:translate-x-[-5px] transition-all duration-300 inline-block flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* الاشتراك في النشرة البريدية */}
        <div className="md:w-1/3">
          <h3 className="text-white font-bold mb-8 text-lg relative inline-block">
            اشترك في النشرة البريدية
            <span className="absolute -bottom-2 right-0 w-1/2 h-0.5 bg-[var(--brand-gold)]"></span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-md text-sm opacity-80">
            ابقَ على اطلاع بأحدث الأخبار والعروض الحصرية التي تُرسل مباشرة إلى بريدك الإلكتروني.
          </p>
          <form className="flex flex-col gap-4 group" onSubmit={e => e.preventDefault()}>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--brand-gold)] transition-colors" />
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full p-4 pr-12 rounded-xl bg-[var(--bg-secondary)]/50 placeholder-gray-600 text-white border border-gray-800 focus:outline-none focus:border-[var(--brand-gold)] focus:bg-[var(--bg-secondary)] transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[var(--brand-gold)] to-[#b2925f] text-[#111] px-6 py-3.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(178,146,95,0.4)] hover:scale-[1.02] transition-all duration-300 active:scale-95"
            >
              اشترك الآن
            </button>
          </form>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          حقوق النشر © {new Date().getFullYear()} <span className="text-[var(--brand-gold)] font-bold">AL MUGHEB</span>. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-6 text-xs font-medium tracking-wide">
          <Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
        </div>
      </div>
    </footer>
  )
}
