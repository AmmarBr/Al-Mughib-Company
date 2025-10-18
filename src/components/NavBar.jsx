import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.direction = "rtl";  // اتجاه الصفحة يمين لليسار
    } else {
      document.body.style.overflow = "auto";
      document.body.style.direction = "ltr";  // ترجع للاتجاه الافتراضي عند إغلاق القائمة
    }
  }, [isMenuOpen]);

  return (
    <div className="absolute top-0 right-0 w-full z-10" dir="rtl">
      <div className="text-lg font-bold flex justify-between items-center text-[#b2925f] px-8 md:px-20 lg:px-32 mx-auto h-20 py-2">
        {/* حجم اللوجو يملأ ارتفاع النافبار دون زيادة ارتفاعه */}
         <img src={assets.logo_dark} alt="شعار الشركة" className="h-44 w-auto" />
        <ul className="hidden md:flex items-center">
          <li className="mx-4">
            <a href="#Header" className="hover:text-[#27282f] cursor-pointer">
              الرئيسية
            </a>
          </li>
          <li className="mx-4">
            <a href="#About" className="hover:text-[#27282f] cursor-pointer">
              من نحن
            </a>
          </li>
          <li className="mx-4">
            <a href="#Projects" className="hover:text-[#27282f] cursor-pointer">
              المشاريع
            </a>
          </li>
          <li className="mx-4">
            <a href="#Testimonials" className="hover:text-[#27282f] cursor-pointer">
              آراء العملاء
            </a>
          </li>
        </ul>
        <button className="hidden md:block text-sm py-2 px-8 rounded-full cursor-pointer bg-[#b2925f] text-[#27282f] hover:bg-[#b2925fa2] transition duration-300">
          ابدأ الآن
        </button>
        {/* أيقونة القائمة على الموبايل */}
        <img
          src={assets.menu_icon}
          alt="قائمة"
          className="md:hidden cursor-pointer w-7"
          onClick={handleMenuToggle}
        />
      </div>

      {/* قائمة الموبايل */}
      {isMenuOpen && (
        <div
          className="absolute top-0 right-0 w-full h-screen bg-black opacity-95 z-10 animate__animated animate__backInRight transition-all duration-1000"
          dir="rtl"
        >
          <div className="flex justify-start p-4 absolute top-4 left-4">
            <button
              className="text-white text-lg font-semibold flex justify-center items-center w-full"
              onClick={handleCloseMenu}
            >
              <IoClose className="text-white w-8 h-8" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="text-white text-lg font-semibold my-4">
              <a
                href="#Header"
                className="hover:text-[#27282f] cursor-pointer"
                onClick={handleCloseMenu}
              >
                الرئيسية
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a
                href="#About"
                className="hover:text-[#27282f] cursor-pointer"
                onClick={handleCloseMenu}
              >
                من نحن
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a
                href="#Projects"
                className="hover:text-[#27282f] cursor-pointer"
                onClick={handleCloseMenu}
              >
                المشاريع
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a
                href="#Testimonials"
                className="hover:text-[#27282f] cursor-pointer"
                onClick={handleCloseMenu}
              >
                آراء العملاء
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a
                href="#Contact"
                className="hover:text-[#27282f] cursor-pointer"
                onClick={handleCloseMenu}
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
