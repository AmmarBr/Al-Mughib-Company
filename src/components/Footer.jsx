import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <footer className="bg-[#121C2B] text-gray-400 py-12 px-8 md:px-20 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* الشعار والوصف */}
        <div className="md:w-1/3 flex flex-col items-start gap-6">
          <img src={assets.logo} alt="شعار المغيب" className="w-32" />
          <p className="text-sm leading-relaxed max-w-xs">
            شركة متخصصة في تقديم أفضل الحلول العقارية مع التركيز على الجودة والابتكار لتلبية احتياجات عملائنا.
          </p>
        </div>

        {/* قائمة الروابط */}
        <div className="md:w-1/6">
          <h3 className="text-white font-bold mb-4 text-lg">الشركة</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><a href="#Header" className="hover:text-white">الرئيسية</a></li>
            <li><a href="#About" className="hover:text-white">من نحن</a></li>
            <li><a href="#Projects" className="hover:text-white">المشاريع</a></li>
            <li><a href="#" className="hover:text-white">سياسة الخصوصية</a></li>
          </ul>
        </div>

        {/* الاشتراك في النشرة البريدية */}
        <div className="md:w-1/3">
          <h3 className="text-white font-bold mb-4 text-lg">اشترك في النشرة البريدية</h3>
          <p className="text-gray-400 mb-4 max-w-md">
            ابقَ على اطلاع بأحدث الأخبار والعروض التي تُرسل مباشرة إلى بريدك الإلكتروني.
          </p>
          <form className="flex gap-4" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-grow p-3 rounded bg-[#18273E] placeholder-gray-500 text-white border border-transparent focus:outline-none focus:border-[#b2925f]"
            />
            <button
              type="submit"
              className="bg-[#b2925f] text-white px-6 py-3 rounded hover:bg-[#b2929f] transition"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-12 text-center text-gray-500 text-xs">
        حقوق النشر © {new Date().getFullYear()} AMMAR BARAKAT. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
