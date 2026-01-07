import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const categories = [
  "الكل",
  "التطوير العقاري",
  "القطاع الفندقي والسياحي",
  "محطات الوقود والخدمات",
  "القطاع التجاري",
  "الوحدات السكنية والفيلات"
];

const allProjects = [
  // التطوير العقاري
  {
    title: "الفلل  السكنية",
    category: "التطوير العقاري",
    desc: "نصمم ونبني فلل راقية بمواصفات عالية تجمع بين الفخامة والوظيفية وتلبي احتياجات السكن العصري.",
    image: assets.residential_villas
  },
  {
    title: "المباني الإدارية",
    category: "التطوير العقاري",
    desc: "نُطوّر مبانٍ إدارية حديثة بتصاميم ذكية ومواقع استراتيجية تدعم بيئة العمل وتواكب متطلبات الشركات والمستثمرين.",
    image: assets.administrative_building
  },
  {
    title: "المجمعات السكنية",
    category: "التطوير العقاري",
    desc: "نُنشئ مجمعات سكنية متكاملة توفر الخصوصية والراحة للعائلات، وتجمع بين جودة البناء وروعة التصميم.",
    image: assets.residential_complex
  },
  // القطاع الفندقي والسياحي
  {
    title: "أجنحة المغيب",
    category: "القطاع الفندقي والسياحي",
    desc: "نُطوّر ونُشغّل منشآت فندقية وسياحية تجمع بين الفخامة والراحة وعالي الجودة.",
    image: assets.almughib_suites
  },
  {
    title: "فنادق المغيب",
    category: "القطاع الفندقي والسياحي",
    desc: "نمتلك علامات فندقية متميزة تعكس خبرتنا الطويلة في قطاع الضيافة الراقية بالمملكة.",
    image: assets.almughib_hotels
  },
  // محطات الوقود والخدمات
  {
    title: "بترو المغيب",
    category: "محطات الوقود والخدمات",
    desc: "نُطوّر محطات وقود متكاملة بتصاميم عصرية ومعايير أمان عالية توفر تجربة مريحة وآمنة.",
    image: assets.petro_station
  },
  // القطاع التجاري
  {
    title: "معارض المغيب",
    category: "القطاع التجاري",
    desc: "نُنشئ صالات ومعارض تجارية بمواقع استراتيجية وتصاميم حديثة تخدم مختلف الأنشطة الاقتصادية.",
    image: assets.showrooms
  },
  // الوحدات السكنية والفيلات
  {
    title: "فلل  المغيب الحديثة",
    category: "الوحدات السكنية و الفلل",
    desc: "نبني وحدات فلل راقية توفر الراحة والجمال و جودة الحياة العصرية.",
    image: assets.modern_villas
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("الكل");
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const filteredProjects = activeTab === "الكل"
    ? allProjects
    : allProjects.filter(p => p.category === activeTab);

  return (
    <section id="Projects" className="py-24 px-8 md:px-20 lg:px-32 bg-[var(--bg-primary)] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            مشاريع <span className="text-gradient-gold">المغيب</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            استكشف سابقة أعمالنا المتنوعة التي تغطي مختلف القطاعات الحيوية في المملكة العربية السعودية.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-16" dir="rtl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${activeTab === cat
                  ? "bg-[var(--brand-gold)] border-[var(--brand-gold)] text-[#1a1b20] font-bold shadow-[0_0_20px_rgba(178,146,95,0.3)]"
                  : "border-white/10 text-gray-400 hover:border-[var(--brand-gold)]/50 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                dir="rtl"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={{
                  nextEl: nextRef.current,
                  prevEl: prevRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.params.navigation.prevEl = prevRef.current;
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3 }
                }}
                className="projects-swiper !pb-12"
              >
                {filteredProjects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="group relative h-[450px] rounded-2xl overflow-hidden border border-white/5 cursor-default shadow-2xl">
                      {/* Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

                      {/* Category Tag */}
                      <div className="absolute top-6 right-6">
                        <span className="bg-[var(--brand-gold)]/90 backdrop-blur-md text-[#1a1b20] text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end text-right">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-light opacity-90">
                          {project.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Side Navigation Arrows */}
              <button
                ref={prevRef}
                aria-label="المشروع السابق"
                className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#1a1b20]/60 backdrop-blur-xl border border-white/5 flex items-center justify-center text-gray-500 hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)]/40 hover:scale-110 transition-all duration-700 shadow-3xl group"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[var(--brand-gold)]/20 to-transparent transition-opacity duration-700"></div>
                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 border border-[var(--brand-gold)]/20 blur-sm transition-opacity duration-700"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform group-hover:-translate-x-1 transition-transform duration-500"><path d="M15 18l-6-6 6-6" /></svg>
              </button>

              <button
                ref={nextRef}
                aria-label="المشروع التالي"
                className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#1a1b20]/60 backdrop-blur-xl border border-white/5 flex items-center justify-center text-gray-500 hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)]/40 hover:scale-110 transition-all duration-700 shadow-3xl group"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-tl from-[var(--brand-gold)]/20 to-transparent transition-opacity duration-700"></div>
                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 border border-[var(--brand-gold)]/20 blur-sm transition-opacity duration-700"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Custom Swiper Navigation Style Injection */}
          <style dangerouslySetInnerHTML={{
            __html: `
                        .projects-swiper .swiper-button-next,
                        .projects-swiper .swiper-button-prev {
                            display: none;
                        }
                        .projects-swiper .swiper-pagination-bullet {
                            background: rgba(178, 146, 95, 0.2);
                            opacity: 1;
                        }
                        .projects-swiper .swiper-pagination-bullet-active {
                            background: var(--brand-gold);
                            width: 25px;
                            border-radius: 4px;
                            box-shadow: 0 0 10px rgba(178, 146, 95, 0.3);
                        }
                    `}} />
        </div>
      </div>
    </section>
  )
}
