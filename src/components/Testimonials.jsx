import React from 'react'
import { testimonialsData } from '../assets/assets'
import { assets } from '../assets/assets'

export default function Testimonials() {
  return (
    <div className='mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        آراء
        <span className='underline underline-offset-4 decoration-1 under font-light'> العملاء</span>
      </h1>
      <p className='text-center text-gray-500 max-w-xl mx-auto mb-8'>
        نحن نقدر ملاحظات عملائنا ونسعى دائمًا لتحسين خدماتنا.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] border rounded shadow-lg px-8 py-12 text-center'>
            <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
            <h2 className='text-xl font-semibold text-gray-800'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 mb-4 text-red-500'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt='نجمة' className='w-4 h-4 inline-block' />
              ))}
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
