import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center bg-[#1a1b20] text-center px-6 relative overflow-hidden'>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-gold)]/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className='text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] to-[#fff] opacity-20 select-none'>
                    404
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='relative z-10 -mt-10 md:-mt-20'
            >
                <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                    عذراً، الصفحة غير موجودة
                </h2>
                <p className='text-gray-400 text-lg max-w-lg mx-auto mb-10'>
                    يبدو أنك وصلت إلى صفحة غير متاحة او تم نقلها. يرجى العودة للصفحة الرئيسية.
                </p>

                <Link
                    to="/"
                    className='inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[#1a1b20] rounded-full font-bold transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(178,146,95,0.4)]'
                >
                    <FaHome />
                    العودة للرئيسية
                </Link>
            </motion.div>
        </div>
    )
}
