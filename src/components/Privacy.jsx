import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen bg-[#111] text-gray-300 font-sans' dir="rtl">


            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--brand-gold)] text-center">سياسة الخصوصية</h1>
                    <p className="text-gray-400 mb-12 text-center leading-relaxed">
                        آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
                    </p>

                    <div className="space-y-8 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. جمع المعلومات</h2>
                            <p>نقوم بجمع بعض المعلومات الشخصية عند استخدامك للموقع، مثل الاسم والبريد الإلكتروني عند تعبئة نماذج التواصل، وذلك لتقديم أفضل خدمة ممكنة.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. استخدام المعلومات</h2>
                            <ul className="list-disc list-inside space-y-2 mr-4 text-gray-400">
                                <li>لتحسين تجربة المستخدم على الموقع.</li>
                                <li>للتواصل معك بخصوص استفساراتك أو مشاريعنا الجديدة.</li>
                                <li>لإرسال النشرات البريدية (في حال الاشتراك).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. حماية البيانات</h2>
                            <p>نحن نتخذ كافة التدابير الأمنية المناسبة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفشاء.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. ملفات تعريف الارتباط (Cookies)</h2>
                            <p>قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك وتخصيص المحتوى وفقًا لاهتماماتك.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. مشاركة المعلومات</h2>
                            <p>نحن لا نبيع أو نؤجر معلوماتك الشخصية لأي طرف ثالث. قد نشارك المعلومات فقط مع الشركاء الموثوقين الذين يساعدوننا في تشغيل الموقع، شريطة التزامهم بالسرية.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. حقوقك</h2>
                            <p>يحق لك في أي وقت طلب تعديل أو حذف بياناتك الشخصية المسجلة لدينا عن طريق التواصل معنا.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy
