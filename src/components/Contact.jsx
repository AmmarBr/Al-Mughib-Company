import React from 'react'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

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
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-2xl sm:text-4xl font-bold mb-4 text-center'
            >
                تواصل
                <span className='underline underline-offset-4 decoration-1 under font-light text-[var(--brand-gold)]'> معنا</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='text-center text-gray-400 max-w-xl mx-auto mb-12 text-lg'
            >
                نود سماع رأيك! الرجاء تعبئة النموذج أدناه.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className='max-w-2xl mx-auto text-gray-300 pt-8 glass-panel p-8 rounded-2xl relative border border-white/5'
                onSubmit={onSubmit}
            >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--brand-gold)]/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--brand-gold)]/10 rounded-full blur-xl animate-pulse delay-700"></div>

                <div className='flex flex-wrap gap-6'>
                    <div className='w-full md:flex-1 text-right group'>
                        <label className="text-sm font-medium text-[var(--brand-gold)] mb-2 block">الاسم</label>
                        <input type="text" name="name" required placeholder="الاسم الكريم"
                            className='w-full bg-[var(--bg-secondary)]/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-[var(--brand-gold)] focus:bg-[var(--bg-secondary)] focus:outline-none transition-all duration-300 text-white placeholder-gray-600'
                        />
                    </div>
                    <div className='w-full md:flex-1 text-right group'>
                        <label className="text-sm font-medium text-[var(--brand-gold)] mb-2 block">البريد الإلكتروني</label>
                        <input type="email" name="email" required placeholder="example@email.com"
                            className='w-full bg-[var(--bg-secondary)]/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-[var(--brand-gold)] focus:bg-[var(--bg-secondary)] focus:outline-none transition-all duration-300 text-white placeholder-gray-600'
                        />
                    </div>
                </div>
                <div className='my-6 text-right group'>
                    <label className="text-sm font-medium text-[var(--brand-gold)] mb-2 block">الرسالة</label>
                    <textarea name="message" required placeholder="كيف يمكننا مساعدتك؟"
                        className='w-full bg-[var(--bg-secondary)]/50 border border-gray-700 rounded-xl px-4 py-3 h-48 resize-none focus:border-[var(--brand-gold)] focus:bg-[var(--bg-secondary)] focus:outline-none transition-all duration-300 text-white placeholder-gray-600'
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className='bg-gradient-to-r from-[var(--brand-gold)] to-[#d4af37] text-[#27282f] py-3 px-12 rounded-full font-bold hover:shadow-[0_0_20px_rgba(178,146,95,0.4)] transition-all duration-300 w-full md:w-auto'
                >
                    {result ? result : "إرسال الرسالة"}
                </motion.button>
            </motion.form>
        </div>
    )
}
