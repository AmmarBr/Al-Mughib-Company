import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets/assets'
import { FiMapPin, FiBriefcase, FiGrid, FiCheckCircle } from 'react-icons/fi'

const BurjAlMughib = () => {
    const [copied, setCopied] = useState(false);

    const handleQuoteClick = () => {
        navigator.clipboard.writeText("sales@almughib.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };



    const features = [
        {
            icon: <FiBriefcase className="text-[var(--brand-gold)]" size={24} />,
            title: "بنية تحتية متطورة",
            desc: "تجهيزات تقنية حديثة تدعم التحول الرقمي للأعمال."
        },
        {
            icon: <FiMapPin className="text-[var(--brand-gold)]" size={24} />,
            title: "قلب شمال الرياض",
            desc: "تواجد استراتيجي يضعك في مركز الحركة الاقتصادية."
        },
        {
            icon: <FiGrid className="text-[var(--brand-gold)]" size={24} />,
            title: "تصميم مرن",
            desc: "مساحات مفتوحة وقابلة للتشكيل حسب هوية شركتك."
        },
        {
            icon: <FiCheckCircle className="text-[var(--brand-gold)]" size={24} />,
            title: "إدارة احترافية",
            desc: "خدمات تشغيل وصيانة بمعايير عالمية على مدار الساعة."
        }
    ]

    return (
        <section id="BurjProject" className="py-32 px-8 md:px-20 lg:px-32 bg-[var(--bg-primary)] overflow-hidden relative">
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-gold)]/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-40 -mb-40"></div>

            {/* Animated Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#B2925F 1px, transparent 1px), linear-gradient(90deg, #B2925F 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Visual Side with Cinematic Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="lg:w-1/2 relative group"
                    >
                        {/* Professional Decorative Frames */}
                        <div className="absolute -inset-8 border border-[var(--brand-gold)]/5 rounded-[40px] hidden lg:block"></div>
                        <div className="absolute -inset-4 border border-[var(--brand-gold)]/10 rounded-[35px] hidden lg:block"></div>

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] aspect-[4/5] lg:aspect-[3/4] group">
                            {/* Cinematic Image Asset */}
                            <img
                                src={assets.header_img}
                                alt="مشروع برج المغيب - الرياض"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                            />

                            {/* Premium Overlays */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>



                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-4 bg-gradient-to-br from-[var(--brand-gold)] to-[#d4af37] text-[#1a1b20] py-4 px-8 rounded-2xl font-black shadow-[0_20px_40px_rgba(178,146,95,0.4)] hidden md:block z-20 border border-white/20"
                        >
                            <span className="relative z-10">مشروعنا الرائد</span>
                            <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 text-right"
                    >
                        <div className="inline-flex items-center gap-3 mb-8 bg-[var(--brand-gold)]/5 px-6 py-2 rounded-full border border-[var(--brand-gold)]/20 backdrop-blur-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-gold)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--brand-gold)]"></span>
                            </span>
                            <span className="text-[var(--brand-gold)] font-bold text-xs uppercase tracking-[0.3em]">Iconic Development</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[1] tracking-tight">
                            برج <span className="text-gradient-gold">المغيب</span>
                        </h2>

                        <p className="text-gray-400 text-xl lg:text-2xl mb-12 leading-relaxed font-light max-w-xl ml-auto">
                            نرسخ معايير جديدة للفخامة والابتكار في سماء الرياض. برج المغيب هو تجسيد حي للتفوق الهندسي، حيث ندمج أرقى الخدمات الإدارية مع موقع استراتيجي لا يضاهى.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[var(--brand-gold)]/40 hover:bg-white/[0.06] transition-all duration-700 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <div className="mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 relative z-10">{feature.icon}</div>
                                    <h5 className="text-white font-bold mb-3 text-xl relative z-10">{feature.title}</h5>
                                    <p className="text-gray-500 text-sm leading-relaxed relative z-10 font-light group-hover:text-gray-400 transition-colors">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row-reverse gap-6">
                            <a
                                href="mailto:sales@almughib.com?subject=طلب عرض سعر لبرج المغيب&body=الاسم الكريم:%0D%0Aرقم الجوال:%0D%0Aتفاصيل الطلب:"
                                onClick={handleQuoteClick}
                                className="group relative px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-700 hover:-translate-y-1 flex items-center justify-center gap-3"
                            >
                                {/* Glass Background with Gold Border */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-[var(--brand-gold)]/30 rounded-full group-hover:bg-[var(--brand-gold)] group-hover:border-[var(--brand-gold)] transition-all duration-700"></div>

                                {/* Content */}
                                <span className="relative z-10 text-[var(--brand-gold)] group-hover:text-[#1a1b20] transition-colors duration-700">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={copied ? "copied" : "default"}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {copied ? "تم نسخ الإيميل ✓" : "تواصل معنا لحجز مساحتك"}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>

                                {/* Internal Light Scan Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default BurjAlMughib
