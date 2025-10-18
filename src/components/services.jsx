import React from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiTrendingUp, FiSettings, FiUserCheck } from 'react-icons/fi'

const services = [
    {
        icon: <FiHome size={48} className="mx-auto text-[#b2925f]" />,
        title: 'تطوير المشاريع',
        description: 'تطوير مشاريع عقارية متميزة وفق أعلى معايير الجودة.'
    },
    {
        icon: <FiTrendingUp size={48} className="mx-auto text-[#b2925f]" />,
        title: 'الاستثمار العقاري',
        description: 'نوفر حلول استثمارية ذكية ومربحة لعملائنا.'
    },
    {
        icon: <FiSettings size={48} className="mx-auto text-[#b2925f]" />,
        title: 'الإدارة والصيانة',
        description: 'خدمات إدارة وصيانة للمباني لضمان استدامتها.'
    },
    {
        icon: <FiUserCheck size={48} className="mx-auto text-[#b2925f]" />,
        title: 'الاستشارات العقارية',
        description: 'تقديم استشارات متخصصة تساعد في اتخاذ القرار الصحيح.'
    }
];

export default function Services() {
    return (
        <div className="px-6 md:px-20 lg:px-32 py-20 max-w-7xl mx-auto" id="Services">

            <h2 className="text-3xl font-bold text-center mb-8">
                خدماتنا
            </h2>
            <p className="text-center max-w-xl mx-auto text-gray-600 mb-12">
                نقدم مجموعة متكاملة من الخدمات العقارية لتلبية كافة احتياجاتك.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="border rounded-lg shadow-lg p-8 text-center cursor-pointer relative overflow-hidden"
                        initial={{ y: 0 }}
                        whileHover={{ y: -16 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <motion.div
                            initial={{ y: 0 }}
                            whileHover={{ y: -16 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="mb-6">
                            {service.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}
