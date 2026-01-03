import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen bg-[#111] text-gray-300 font-sans' dir="rtl">
            {/* Navbar Placeholder if needed, or back button */}


            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--brand-gold)] text-center">الشروط والأحكام</h1>
                    <p className="text-gray-400 mb-12 text-center leading-relaxed">
                        آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
                    </p>

                    <div className="space-y-8 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. مقدمة</h2>
                            <p>مرحبًا بكم في شركة المغيب. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يحق لك استخدام خدماتنا.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. حقوق الملكية الفكرية</h2>
                            <p>جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص، الصور، الشعارات، والتصاميم، هي ملك لشركة المغيب ومحمية بموجب قوانين حقوق النشر والعلامات التجارية.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. استخدام الموقع</h2>
                            <ul className="list-disc list-inside space-y-2 mr-4 text-gray-400">
                                <li>يمنع استخدام الموقع لأغراض غير قانونية.</li>
                                <li>يمنع محاولة اختراق الموقع أو تعطيل خدماته.</li>
                                <li>يحق للشركة إيقاف حساب أي مستخدم يخالف هذه الشروط.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. إخلاء المسؤولية</h2>
                            <p>المعلومات العقارية المنشورة على الموقع هي لأغراض العرض فقط، وقد تخضع للتغيير دون إشعار مسبق. نحن نسعى لتقديم معلومات دقيقة ولكن لا نضمن خلوها من الأخطاء.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. التعديلات</h2>
                            <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات في هذه الصفحة، ويعتبر استمرارك في استخدام الموقع موافقة عليها.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. اتصل بنا</h2>
                            <p>إذا كان لديك أي استفسارات حول هذه الشروط، يرجى التواصل معنا عبر صفحة "تواصل معنا".</p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default Terms
