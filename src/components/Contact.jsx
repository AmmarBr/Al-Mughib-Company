import React from 'react'
import Swal from 'sweetalert2';

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
                confirmButtonText: 'حسناً'
            });
            event.target.reset();
        } else {
            console.log("خطأ", data);
            Swal.fire({
                icon: 'error',
                title: 'لم يتم إرسال الرسالة',
                text: data.message,
                confirmButtonText: 'حسناً'
            });
            setResult("");
        }
    };
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden min-h-[400px]' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                تواصل
                <span className='underline underline-offset-4 decoration-1 under font-light'> معنا</span>
            </h1>
            <p className='text-center text-gray-500 max-w-xl mx-auto mb-12'>
                نود سماع رأيك! الرجاء تعبئة النموذج أدناه.
            </p>

            <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-right '>
                        الاسم
                        <input type="text" name="name" required
                            className='w-full  border border-gray-300 rounded px-4 py-3 mt-2'
                        />
                    </div>
                    <div className='w-full md:w-1/2 text-right '>
                        البريد الإلكتروني
                        <input type="email" name="email" required
                            className='w-full border border-gray-300 rounded px-4 py-3 mt-2'
                        />
                    </div>
                </div>
                <div className='my-6 text-right '>
                    الرسالة
                    <textarea name="message" required
                        className='w-full border border-gray-300 rounded px-4 py-3 mt-2 mb-4 h-48 resize-none'
                    />
                </div>
                <button type="submit" className='bg-[#b2925f] text-white py-2 px-12 rounded'>
                    {result ? result : "إرسال الرسالة"}
                </button>
            </form>
        </div>
    )
}
