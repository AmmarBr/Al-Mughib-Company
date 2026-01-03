import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (id) => {
    setIsMenuOpen(false); // Close menu if open

    if (isHome) {
      // If on home, scroll to section
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.direction = "rtl";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.direction = "ltr";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#Header", label: "الرئيسية" },
    { href: "#About", label: "من نحن" },
    { href: "#Projects", label: "المشاريع" },
    { href: "#Testimonials", label: "آراء العملاء" }
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-full z-[999] transition-all duration-300 ${isScrolled ? 'glass-panel-dark' : 'bg-transparent'}`}
      dir="rtl"
    >
      <div className="flex justify-between items-center px-8 md:px-20 lg:px-32 mx-auto h-24 w-full">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img src={assets.logo} alt="شعار الشركة" className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navLinks.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.href)}
                className="hover:text-[var(--brand-gold)] transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigation('#Contact')}
            className="text-sm py-3 px-8 rounded-full bg-[var(--brand-gold)] text-[#27282f] hover:bg-white hover:text-[var(--brand-gold)] transition-all duration-300 font-bold shadow-[0_0_15px_rgba(178,146,95,0.4)]"
          >
            ابدأ الآن
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="قائمة"
          className="md:hidden cursor-pointer w-8 h-8 filter invert brightness-0 drop-shadow-md"
          onClick={handleMenuToggle}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#111111] z-[9999] flex flex-col justify-center items-center"
            dir="rtl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/header_img.png')] bg-cover bg-center opacity-10 pointer-events-none grayscale"></div>

            <button
              className="absolute top-6 left-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={handleCloseMenu}
            >
              <IoClose className="w-10 h-10 text-[var(--brand-gold)]" />
            </button>

            <motion.ul
              className="flex flex-col items-center gap-8 relative z-10"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {[...navLinks, { href: "#Contact", label: "تواصل معنا" }].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-2xl font-bold text-white hover:text-[var(--brand-gold)] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 relative z-10"
            >
              <img src={assets.logo} className="w-24 opacity-50 brightness-0 invert" alt="logo" />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
