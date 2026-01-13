import React from 'react'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaRegMessage } from 'react-icons/fa6';

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("جاري الإرسال...");
        const formData = new FormData(event.target);

        formData.append("access_key", "a4e663f1-4194-4fe9-855e-d3ad2440a6b5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            Swal.fire({
                icon: 'success',
                title: 'تم إرسال الرسالة!',
                text: 'شكرًا لتواصلك معنا. سنرد عليك في أقرب وقت.',
                confirmButtonText: 'حسناً',
                background: '#1a1b20',
                color: '#fff',
                confirmButtonColor: '#b2925f'
            });
            event.target.reset();
        } else {
            console.log("خطأ", data);
            Swal.fire({
                icon: 'error',
                title: 'لم يتم إرسال الرسالة',
                text: data.message,
                confirmButtonText: 'حسناً',
                background: '#1a1b20',
                color: '#fff',
                confirmButtonColor: '#b2925f'
            });
            setResult("");
        }
    };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden min-h-[400px]' id='Contact'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-2xl sm:text-4xl font-bold mb-4 text-center'
            >
                تواصل
                <span className='underline underline-offset-4 decoration-1 under font-light text-[var(--brand-gold)]'> معنا</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='text-center text-gray-400 max-w-xl mx-auto mb-12 text-lg'
            >
                نود سماع رأيك! الرجاء تعبئة النموذج أدناه.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className='max-w-3xl mx-auto text-gray-300 pt-8 glass-panel p-10 rounded-[2rem] relative border border-white/10 shadow-2xl'
                onSubmit={onSubmit}
            >
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--brand-gold)]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--brand-gold)]/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Name Field */}
                    <div className='text-right group'>
                        <label className="text-sm font-bold text-[var(--brand-gold)] mb-3 block px-1">الاسم</label>
                        <div className="relative">
                            <input type="text" name="name" required placeholder="الاسم الكريم"
                                className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[var(--brand-gold)]/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-white placeholder-gray-600 pl-12'
                            />
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className='text-right group'>
                        <label className="text-sm font-bold text-[var(--brand-gold)] mb-3 block px-1">الايميل</label>
                        <div className="relative">
                            <input type="email" name="email" required placeholder="example@email.com"
                                className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[var(--brand-gold)]/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-white placeholder-gray-600 pl-12'
                            />
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Phone Field */}
                <div className='mt-8 text-right group'>
                    <label className="text-sm font-bold text-[var(--brand-gold)] mb-3 block px-1">رقم الهاتف</label>
                    <div className="relative">
                        <input type="tel" name="phone" required placeholder="05xxxxxxxx"
                            className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[var(--brand-gold)]/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-white placeholder-gray-600 pl-12'
                        />
                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                    </div>
                </div>

                {/* Message Field */}
                <div className='mt-8 mb-10 text-right group'>
                    <label className="text-sm font-bold text-[var(--brand-gold)] mb-3 block px-1">الرساله</label>
                    <div className="relative">
                        <textarea name="message" id="contact-message" required placeholder="كيف يمكننا مساعدتك؟"
                            className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 h-40 resize-none focus:border-[var(--brand-gold)]/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-white placeholder-gray-600 pl-12'
                        />
                        <FaRegMessage className="absolute left-4 top-6 text-gray-500 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(178,146,95,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className='relative overflow-hidden group bg-gradient-to-r from-[var(--brand-gold)] to-[#d4af37] text-[#27282f] py-4 px-16 rounded-2xl font-bold transition-all duration-500 w-full md:w-auto text-lg'
                >
                    <span className="relative z-10">{result ? result : "إرسال الرسالة"}</span>
                    <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-[45deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                </motion.button>
            </motion.form>
        </div>
    )
}

