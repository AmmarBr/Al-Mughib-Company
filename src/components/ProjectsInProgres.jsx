import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

export default function OngoingProjects() {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const totalCards = projectsData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 768) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? totalCards - 1 : prevIndex - 1);
  }

  return (
    <div className='mx-auto py-4 pt-20 px-6 pb-20 md:px-20 lg:px-32 w-full overflow-hidden' id='OngoingProjects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        المشاريع
        <span className='underline underline-offset-4 decoration-1 under font-light'> الجارية</span>
      </h1>
      <p className='text-center text-gray-500 max-w-xl mx-auto mb-8'>
        هذه هي المشاريع التي نقوم بتنفيذها حالياً ونسعى لإتمامها بأعلى جودة.
      </p>
      <div className='flex justify-between items-center mb-8'>
        <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='المشروع السابق' onClick={handlePrevious}>
          <img src={assets.left_arrow} alt="السابق" />
        </button>
        <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='المشروع التالي' onClick={handleNext}>
          <img src={assets.right_arrow} alt="التالي" />
        </button>
      </div>
      {/* شريط عرض المشاريع */}
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='overflow-hidden'
      >
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
          {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-auto max-w-lg mb-14' />
              <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                <div className='inline-block bg-white px-4 py-2 rounded shadow-lg w-3/4 text-center'>
                  <h2 className='text-lg font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-gray-500'>{project.location}</p>
                  <p className='text-gray-700 font-bold'>{project.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
