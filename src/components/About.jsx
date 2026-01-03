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
                ref.current.textContent = "+" + Math.floor(latest).toFixed(0);
            }
        })
    }, [springValue]);

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
            <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
                من نحن
                <span className='underline underline-offset-4 decoration-1 under font-light text-[var(--brand-gold)]'> شركتنا</span>
            </h1>
            <p className='text-gray-400 max-w-xl text-center mb-12 text-lg'>
                شغوفون بالعقارات ومكرسون لمساعدة عملائنا في العثور على منازل أحلامهم.
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full'>
                <img src={assets.brand_img} alt='عن شركتنا' className='w-full sm:w-1/2 h-auto max-w-lg rounded-lg shadow-2xl' />
                <div className='flex flex-col items-center md:items-center gap-8 md:gap-12 w-full'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className='grid grid-cols-2 gap-6 md:gap-8 w-full'
                    >
                        <StatCard number={25} text="سنوات الخبرة" icon={FaClock} />
                        <StatCard number={13} text="مشاريع مكتملة" icon={FaBuilding} />
                        <StatCard number={17} text="ملايين قدم مربع" icon={FaRulerCombined} />
                        <StatCard number={20} text="مشاريع جارية" icon={FaHardHat} />
                    </motion.div>
                    <p className='text-gray-400 my-6 max-w-lg text-center leading-relaxed text-lg'>
                        نسعى دائمًا لتقديم أفضل الخدمات العقارية التي تجمع بين الجودة والابتكار لنلبي احتياجات عملائنا بأعلى المعايير
                    </p>
                    <button className='bg-[var(--brand-gold)] text-[#27282f] py-3 px-10 rounded-full font-bold hover:bg-white hover:text-[var(--brand-gold)] transition-all duration-300 shadow-lg'>
                        اعرف المزيد
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
