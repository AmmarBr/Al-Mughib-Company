import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

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
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
                من نحن
                <span className='underline underline-offset-4 decoration-1 under font-light'> شركتنا</span>
            </h1>
            <p className='text-gray-500 max-w-xl text-center mb-8'>
                شغوفون بالعقارات ومكرسون لمساعدة عملائنا في العثور على منازل أحلامهم.
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
                <img src={assets.brand_img} alt='عن شركتنا' className='w-full sm:w-1/2 h-auto max-w-lg' />
                <div className='flex flex-col items-center md:items-center gap-4 md:gap-8'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full '>
                        <div className='text-center'>
                            <p className='text-4xl font-medium text-gray-500'>+25</p>
                            <p>سنوات الخبرة</p>
                        </div>
                        <div  className='text-center'>
                            <p className='text-4xl font-medium text-gray-500'>+13</p>
                            <p>مشاريع مكتملة</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-4xl font-medium text-gray-500'>+17</p>
                            <p>ملايين قدم مربع تم تسليمها</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-4xl font-medium text-gray-500'>+20</p>
                            <p>مشاريع جارية</p>
                        </div>
                    </div>
                    <p className='text-gray-500 my-10 max-w-lg text-center'>
                        نسعى دائمًا لتقديم أفضل الخدمات العقارية التي تجمع بين الجودة والابتكار لنلبي احتياجات عملائنا بأعلى المعايير
                    </p>
                    <button className='bg-[#b2925f] text-white py-2 px-8 rounded'>اعرف المزيد</button>
                </div>
            </div>
        </motion.div>
    )
}
