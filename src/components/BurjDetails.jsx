import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaCheckCircle, FaBuilding, FaChartLine, FaHandshake } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function BurjDetails() {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className='w-full overflow-hidden bg-[#1a1b20] min-h-screen pt-24 pb-20'>

            {/* Header / Hero */}
            <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 mb-20'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center'
                >
                    <h1 className='text-4xl md:text-6xl font-bold mb-6 text-gradient-gold'>
                        برج المغيب
                    </h1>
                    <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
                        أيقونة معمارية في قلب حي الصحافة، تجمع بين الفخامة والابتكار لتقديم بيئة عمل استثنائية.
                    </p>
                </motion.div>
            </div>

            {/* Section 1: Areas (Mshat Al Burj) */}
            <section className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 mb-32 relative'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-12'>
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className='w-full lg:w-1/2 text-right'
                    >
                        <motion.h2 variants={fadeInUp} className='text-3xl md:text-5xl font-bold mb-2 text-white'>
                            مساحات البرج
                        </motion.h2>
                        <motion.p variants={fadeInUp} className='text-xl text-[var(--brand-gold)] mb-8 font-medium'>
                            بيان كامل المساحة التأجيرية
                        </motion.p>

                        <div className='space-y-8'>
                            <motion.div variants={fadeInUp} className='glass-panel p-6 rounded-2xl border-r-4 border-r-[var(--brand-gold)]'>
                                <h3 className='text-2xl font-bold text-white mb-2'>المساحات التأجيرية | 11,300 م²</h3>
                                <p className='text-gray-400 leading-relaxed'>
                                    تمثل المساحة التشغيلية الأساسية للبرج، مخصصة للأنشطة التجارية والمكتبية بعوائد إيجارية مستقرة.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className='glass-panel p-6 rounded-2xl border-r-4 border-r-[var(--brand-gold)]'>
                                <h3 className='text-2xl font-bold text-white mb-2'>دورين الخدمات | 1,200 م²</h3>
                                <p className='text-gray-400 leading-relaxed'>
                                    مخصصة لتقديم خدمات استثنائية للمستأجرين يتم توفيرها حسب باقة المستأجر، بما يضمن تجربة تشغيلية مرنة وقيمة مضافة لكل نشاط.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className='glass-panel p-6 rounded-2xl border-r-4 border-r-[var(--brand-gold)]'>
                                <h3 className='text-2xl font-bold text-white mb-2'>الميزان | 200 م²</h3>
                                <p className='text-gray-400 leading-relaxed'>
                                    يضم قاعات اجتماعات متعددة المساحات مجهزة لتلبية احتياجات الاجتماعات والفعاليات الخاصة بالمستأجرين.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Image Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='w-full lg:w-1/2 flex justify-center'
                    >
                        <div className='relative w-full max-w-md aspect-[3/4]'>
                            <div className='absolute inset-0 bg-[var(--brand-gold)]/10 rounded-[40px] blur-3xl'></div>
                            <img
                                src={assets.about_tower}
                                alt="برج المغيب"
                                className='relative w-full h-full object-contain drop-shadow-2xl z-10'
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Average Prices Analysis */}
            <section className='glass-panel py-20 mb-32 border-y border-white/5'>
                <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32'>
                    <div className='flex flex-col lg:flex-row items-center gap-12'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className='w-full lg:w-1/2'
                        >
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                <img src={assets.about_bg} alt="Neighborhood" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <h3 className="text-4xl md:text-5xl font-bold text-white text-center">
                                        أسعار تنافسية<br />
                                        <span className="text-xl md:text-2xl font-normal text-[var(--brand-gold)] mt-2 block">مقارنة بمتوسط السعر المتداول</span>
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className='w-full lg:w-1/2'
                        >
                            <motion.h2 variants={fadeInUp} className='text-3xl md:text-5xl font-bold mb-8 text-white'>
                                متوسط الاسعار
                            </motion.h2>

                            <ul className='space-y-6'>
                                <motion.li variants={fadeInUp} className='flex gap-4 items-start'>
                                    <FaChartLine className='text-[var(--brand-gold)] text-2xl mt-1 shrink-0' />
                                    <p className='text-gray-300 text-lg leading-relaxed'>
                                        تم استعراض أسعار الأبراج التجارية المجاورة في حي الصحافة، حيث لوحظ تقارب أسعار التأجير بين الأبراج الواقعة ضمن نفس النطاق الجغرافي.
                                    </p>
                                </motion.li>
                                <motion.li variants={fadeInUp} className='flex gap-4 items-start'>
                                    <FaBuilding className='text-[var(--brand-gold)] text-2xl mt-1 shrink-0' />
                                    <p className='text-gray-300 text-lg leading-relaxed'>
                                        تشابه أنواع المساحات التأجيرية المتوفرة في الأبراج المحيطة وتوفر خدمات تشغيلية مشتركة بمستويات متقاربة.
                                    </p>
                                </motion.li>
                                <motion.li variants={fadeInUp} className='flex gap-4 items-start'>
                                    <FaHandshake className='text-[var(--brand-gold)] text-2xl mt-1 shrink-0' />
                                    <p className='text-gray-300 text-lg leading-relaxed'>
                                        اعتماد التسعير على موقع البرج وقربه من المحاور الحيوية، وبناءً على ذلك يقدم البرج أسعاراً مدروسة ومنافسة للسوق.
                                    </p>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2.5: Value Beyond Area */}
            <section className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 mb-32'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-12 glass-panel p-8 md:p-12 rounded-[3rem] border border-[var(--brand-gold)]/20'>
                    <div className='w-full lg:w-3/5 text-right'>
                        <h2 className='text-3xl md:text-5xl font-bold mb-6 text-white'>
                            قيمة تتجاوز <span className='text-gradient-gold'>المساحة</span>
                        </h2>
                        <ul className='space-y-4'>
                            <li className='text-gray-300 text-lg leading-relaxed'>
                                <strong className='text-white block mb-1'>لا يقدم البرج مساحات تأجيرية فقط،</strong>
                                بل يقدم منظومة تشغيلية متكاملة مصممة لتلبية احتياجات مختلف أنواع المستأجرين.
                            </li>
                            <li className='text-gray-300 text-lg leading-relaxed'>
                                <strong className='text-white block mb-1'>من خلال نظام الباقات المرن،</strong>
                                يتمكن كل مستأجر من اختيار مستوى الخدمات الأنسب لنشاطه.
                            </li>
                            <li className='text-gray-300 text-lg leading-relaxed'>
                                <strong className='text-white block mb-1'>تسعير عادل يعكس القيمة، الجودة، والتجربة التشغيلية.</strong>
                                BASIC - BUSINESS - VIP ثلاث باقات، مستويات مختلفة، وقيمة واحدة ثابتة: بيئة عمل راقية بمعايير عالية.
                            </li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-2/5'>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img src={assets.about_tower} alt="Burj Value" className="w-full h-full object-cover object-bottom" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Packages & Prices */}
            <section className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 mb-20'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-5xl font-bold mb-4 text-gradient-gold'>الباقات والاسعار</h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        يعتمد البرج على نظام باقات مرن يتيح للمستأجر اختيار مستوى الخدمات الأنسب لنشاطه.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Basic Package */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className='bg-[#2a2b30] rounded-3xl overflow-hidden border border-white/5 relative group flex flex-col'
                    >
                        <div className='absolute top-0 right-0 p-6 bg-[var(--brand-gold)] rounded-bl-3xl z-10'>
                            <span className='font-bold text-[#1a1b20]'>BASIC</span>
                        </div>
                        <div className='p-8 pt-20 flex-grow'>
                            <h3 className='text-3xl font-bold text-white mb-2'>باقة BASIC</h3>
                            <div className='text-3xl font-bold text-[var(--brand-gold)] mb-6'>
                                سعر تنافسي
                            </div>
                            <p className='text-gray-400 mb-8 border-b border-white/10 pb-6 min-h-[5rem]'>
                                باقة تشغيلية أساسية مصممة لتوفير بيئة عمل متكاملة، مع إتاحة خدمات إضافية اختيارية.
                            </p>

                            <h4 className='text-white font-bold mb-4 flex items-center gap-2'>
                                <span className='w-2 h-2 bg-[var(--brand-gold)] rounded-full'></span>
                                الخدمات الأساسية
                            </h4>
                            <ul className='grid grid-cols-1 gap-2 mb-8'>
                                {['المياه', 'النظافة', 'اللوبي', 'المصاعد', 'مواقف السيارات', 'الحراسة والأمن', 'الصيانة', 'مصلى', 'كهرباء الخدمات'].map((item) => (
                                    <li key={item} className='flex items-center gap-2 text-gray-400 text-sm'>
                                        <FaCheckCircle className='text-[var(--brand-gold)]/50' /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Business Package */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className='bg-gradient-to-b from-[#b2925f]/20 to-[#2a2b30] rounded-3xl overflow-hidden border border-[var(--brand-gold)]/30 relative group flex flex-col'
                    >
                        <div className='absolute top-0 right-0 p-6 bg-white rounded-bl-3xl z-10'>
                            <span className='font-bold text-[#1a1b20]'>BUSINESS</span>
                        </div>
                        <div className='p-8 pt-20 flex-grow'>
                            <h3 className='text-3xl font-bold text-white mb-2'>باقة BUSINESS</h3>
                            <div className='text-3xl font-bold text-[var(--brand-gold)] mb-6'>
                                سعر تنافسي
                            </div>
                            <p className='text-gray-400 mb-8 border-b border-white/10 pb-6 min-h-[5rem]'>
                                باقة أعمال متقدمة موجهة للشركات، تجمع بين الخدمات الأساسية ومجموعة موسعة من الخدمات الإضافية.
                            </p>

                            <h4 className='text-white font-bold mb-4 flex items-center gap-2'>
                                <span className='w-2 h-2 bg-[var(--brand-gold)] rounded-full'></span>
                                تشمل الخدمات الأساسية +
                            </h4>
                            <ul className='space-y-2 mb-8'>
                                {['مصعد VIP مخصص للمديرين', 'خدمة فاليه (Valet Parking)'].map((item) => (
                                    <li key={item} className='flex items-center gap-2 text-white text-sm bg-white/5 p-2 rounded-lg'>
                                        <FaCheckCircle className='text-[var(--brand-gold)]' /> {item}
                                    </li>
                                ))}
                                {['قاعة ترفيهية رجالي', 'قاعة ترفيهية سيدات + استرخاء', 'جلسات خارجية مطلة', '4 قاعات اجتماعات'].map((item) => (
                                    <li key={item} className='flex items-center gap-2 text-gray-300 text-sm'>
                                        <FaCheckCircle className='text-[var(--brand-gold)]' /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* VIP Package */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className='bg-[#0a0a0a] rounded-3xl overflow-hidden border border-[var(--brand-gold)] relative group flex flex-col shadow-[0_0_40px_rgba(178,146,95,0.15)]'
                    >
                        <div className='absolute top-0 right-0 p-6 bg-gradient-to-r from-[var(--brand-gold)] to-[#d4af37] rounded-bl-3xl z-10'>
                            <span className='font-bold text-[#1a1b20]'>VIP</span>
                        </div>
                        <div className='p-8 pt-20 flex-grow'>
                            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] to-white mb-2'>باقة VIP</h3>
                            <div className='text-3xl font-bold text-[var(--brand-gold)] mb-6'>
                                سعر تنافسي
                            </div>
                            <p className='text-gray-400 mb-8 border-b border-white/10 pb-6 min-h-[5rem]'>
                                باقة حصرية موجهة للإدارات العليا وكبرى الشركات، توفر أعلى مستوى من الخصوصية والرفاهية والخدمات.
                            </p>

                            <h4 className='text-[var(--brand-gold)] font-bold mb-4 flex items-center gap-2'>
                                <span className='w-2 h-2 bg-[var(--brand-gold)] rounded-full'></span>
                                حصرياً في هذه الباقة
                            </h4>
                            <ul className='space-y-3 mb-8'>
                                {['مجلس خاص للاجتماعات التنفيذية', 'قاعة مؤتمرات مجهزة للفعاليات الكبرى', 'كبسولات الاسترخاء والغفوة'].map((item) => (
                                    <li key={item} className='flex items-center gap-2 text-white text-sm bg-[var(--brand-gold)]/10 p-2 rounded-lg border border-[var(--brand-gold)]/20'>
                                        <FaCheckCircle className='text-[var(--brand-gold)]' /> {item}
                                    </li>
                                ))}
                                {['جميع مميزات باقة BUSINESS', 'أولوية الحجز في القاعات', 'خدمة ضيافة VIP'].map((item) => (
                                    <li key={item} className='flex items-center gap-2 text-gray-300 text-sm'>
                                        <FaCheckCircle className='text-[var(--brand-gold)]' /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <div className='mt-16 text-center'>
                    <Link to="/contact" className='btn-primary inline-flex items-center gap-2 text-lg px-8 py-4'>
                        احجز مساحتك الآن
                        <FaHandshake />
                    </Link>
                </div>
            </section>

        </div>
    )
}
