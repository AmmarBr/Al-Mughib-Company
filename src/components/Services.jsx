import React from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiTrendingUp, FiSettings, FiUserCheck } from 'react-icons/fi'

const services = [
    {
        icon: <FiHome />,
        title: 'التطوير العقاري',
        description: 'نبتكر مجتمعات عمرانية متكاملة تتبنى أعلى معايير الجودة والاستدامة، مع التركيز على التصاميم الحديثة التي تلبي تطلعات عملائنا وتثري جودة الحياة.'
    },
    {
        icon: <FiTrendingUp />,
        title: 'الاستثمار العقاري',
        description: 'نقدم فرصاً استثمارية مدروسة بعناية تحقق عوائد مجزية، مستندين إلى تحليلات دقيقة لاتجاهات السوق لضمان نمو رأس المال وتحقيق الأهداف المالية لشركائنا.'
    },
    {
        icon: <FiSettings />,
        title: 'إدارة وتشغيل المشاريع',
        description: 'نقدم حلولاً تشغيلية احترافية تضمن استمرارية المشاريع وحفظ قيمتها السوقية، من خلال أنظمة متطورة للصيانة والإدارة المتكاملة للمرافق.'
    },
    {
        icon: <FiUserCheck />,
        title: 'الحلول العقارية المتكاملة',
        description: 'نوفر منظومة خدمات شاملة تبدأ من الدراسات والتمويل إلى التنفيذ، لضمان تجربة سلسة وقيمة مضافة حقيقية في كل مراحل المشروع العقاري.'
    }
];

export default function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <div className="px-6 md:px-20 lg:px-32 py-20 max-w-7xl mx-auto" id="Services">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-center mb-8 text-gradient-gold"
            >
                خدماتنا
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center max-w-xl mx-auto text-gray-400 mb-16 text-lg"
            >
                نقدم مجموعة متكاملة من الخدمات العقارية لتلبية كافة احتياجاتك بمعايير عالمية.
            </motion.p>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-panel p-8 text-center cursor-pointer relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 rounded-2xl hover:shadow-[0_10px_30px_rgba(178,146,95,0.15)] border border-white/5"
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <motion.div
                            className="mb-6 relative z-10"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="w-20 h-20 mx-auto bg-[var(--bg-secondary)] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(178,146,95,0.3)] transition-all duration-300 border border-white/5 group-hover:border-[var(--brand-gold)]/30">
                                {React.cloneElement(service.icon, { className: "text-[var(--brand-gold)] w-8 h-8" })}
                            </div>
                        </motion.div>

                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--brand-gold)] transition-colors duration-300 relative z-10">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 relative z-10 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}
