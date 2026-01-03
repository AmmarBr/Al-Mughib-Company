import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { FaBuilding, FaClock, FaRulerCombined, FaHardHat } from 'react-icons/fa'

const StatCard = ({ number, text, icon: Icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(number);
        }
    }, [isInView, number, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                const val = Math.floor(latest);
                ref.current.textContent = (number > 1000 ? "" : "+") + val;
            }
        })
    }, [springValue, number]);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className='flex flex-col items-center justify-center p-6 glass-panel rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(178,146,95,0.2)] group cursor-pointer border border-white/5'
        >
            <div className='mb-3 p-3 rounded-full bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-[#27282f] transition-colors duration-300'>
                {Icon && <Icon size={24} />}
            </div>
            <p className='text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight' ref={ref}>+0</p>
            <p className="text-gray-400 font-medium text-sm md:text-base">{text}</p>
        </motion.div>
    );
};

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden min-h-screen'
            id='About'
        >
            <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-center text-gradient-gold'>
                من نحن
            </h2>
            <p className='text-gray-400 max-w-xl text-center mb-12 text-lg'>
                منذ عام 2016، نرسخ معايير جديدة للفخامة والابتكار في الرياض، معتمدين على خبرة عريقة تتجاوز الثلاثين عاماً في التطوير العقاري المتميز.
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full'>
                <img src={assets.brand_img} alt='شركة المغيب للتطوير العقاري - مشاريعنا في الرياض' className='w-full sm:w-1/2 h-auto max-w-lg rounded-3xl shadow-2xl border border-white/10' loading="lazy" />
                <div className='flex flex-col items-center md:items-center gap-8 md:gap-12 w-full'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className='grid grid-cols-2 gap-6 md:gap-8 w-full'
                    >
                        <StatCard number={new Date().getFullYear() - 2016} text="عاماً من الخبرة" icon={FaClock} />
                        <StatCard number={2016} text="سنة التأسيس" icon={FaBuilding} />
                        <StatCard number={13} text="مشروعاً منجزاً" icon={FaHardHat} />
                        <StatCard number={25} text="مشاريع جارية" icon={FaRulerCombined} />
                    </motion.div>
                    <p className='text-gray-400 my-6 max-w-lg text-center leading-relaxed text-lg'>
                        نؤمن بأن التطوير العقاري هو صناعة حياة؛ لذا نطور مشاريعنا وفق أعلى معايير الابتكار والاستدامة لنلبي احتياجات عملائنا الاستثنائية.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
