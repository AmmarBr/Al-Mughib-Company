import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

export default function Loader({ onComplete }) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[100] bg-[#121212] flex items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                <motion.img
                    src={assets.logo}
                    alt="Loading..."
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-40 md:w-56 mb-8 drop-shadow-[0_0_15px_rgba(178,146,95,0.3)]"
                />

                {/* Progress Line */}
                <div className="w-64 h-0.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-[var(--brand-gold)] shadow-[0_0_10px_var(--brand-gold)]"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-[var(--brand-gold)] text-sm tracking-[0.2em] uppercase font-light"
                >
                    المغيب للتطوير العقاري
                </motion.p>
            </div>
        </motion.div>
    )
}
