import React, { useRef } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaHardHat } from 'react-icons/fa'

export default function OngoingProjects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <div className='mx-auto py-4 pt-20 px-6 pb-20 md:px-20 lg:px-32 w-full overflow-hidden' id='OngoingProjects'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl sm:text-4xl font-bold mb-4 text-center'
      >
        المشاريع
        <span className='underline underline-offset-4 decoration-1 under font-light text-[var(--brand-gold)]'> الجارية</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='text-center text-gray-400 max-w-xl mx-auto mb-12 text-lg'
      >
        هذه هي المشاريع التي نقوم بتنفيذها حالياً ونسعى لإتمامها بأعلى جودة.
      </motion.p>

      {/* Navigation Buttons */}
      <div className='flex justify-end gap-4 mb-8'>
        <button
          className='p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--brand-gold)]/20 hover:bg-[var(--brand-gold)] hover:text-[#27282f] transition-all duration-300 shadow-md group'
          onClick={() => scroll('left')}
          aria-label='Previous'
        >
          <img src={assets.left_arrow} alt="السابق" className='w-5 h-5 group-hover:invert group-hover:brightness-0 transition-all' />
        </button>
        <button
          className='p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--brand-gold)]/20 hover:bg-[var(--brand-gold)] hover:text-[#27282f] transition-all duration-300 shadow-md group'
          onClick={() => scroll('right')}
          aria-label='Next'
        >
          <img src={assets.right_arrow} alt="التالي" className='w-5 h-5 group-hover:invert group-hover:brightness-0 transition-all' />
        </button>
      </div>

      {/* Scrollable Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide'
        ref={scrollRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((project, index) => (
          <div key={index} className='min-w-[300px] md:min-w-[380px] snap-center'>
            <div className="glass-panel rounded-2xl overflow-hidden h-full relative group hover:shadow-[0_10px_30px_rgba(178,146,95,0.15)] transition-all duration-500 border border-white/5">

              {/* Image Container */}
              <div className="w-full h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                {/* Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b20] via-transparent to-transparent opacity-80"></div>

                {/* Ongoing Badge */}
                <div className="absolute top-4 right-4 bg-[var(--brand-gold)] text-[#27282f] text-xs font-bold px-3 py-1 rounded shadow-lg flex items-center gap-2">
                  <FaHardHat /> جاري التنفيذ
                </div>

              </div>

              {/* Content */}
              <div className='p-6 relative -mt-12'>
                <div className='glass-panel-dark p-4 rounded-xl border border-[var(--brand-gold)]/10 backdrop-blur-md shadow-lg'>
                  <div className='flex justify-between items-start mb-2'>
                    <h2 className='text-xl font-bold text-white group-hover:text-[var(--brand-gold)] transition-colors'>{project.title}</h2>
                    <span className='flex items-center gap-1 text-xs text-[var(--brand-gold)] bg-[var(--brand-gold)]/10 px-2 py-1 rounded'>
                      <FaMapMarkerAlt /> {project.location}
                    </span>
                  </div>

                  <p className='text-gray-400 text-sm line-clamp-3 leading-relaxed mb-4'>
                    {project.disc}
                  </p>

                  <div className='w-full h-0.5 bg-[var(--brand-gold)]/20 rounded-full overflow-hidden'>
                    <div className='w-0 h-full bg-[var(--brand-gold)] group-hover:w-full transition-all duration-700 ease-out'></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
