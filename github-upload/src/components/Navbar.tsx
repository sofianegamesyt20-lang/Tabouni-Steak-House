import { useState, useEffect } from 'react';
import { Menu, X, Utensils, Crown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.reservations'), href: '#reservations' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "#DC0000",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      x: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-luxury py-4' 
            : 'bg-transparent py-6'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img 
                src="/assets/logo-2.png" 
                alt="Tabouni Steak House Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl md:text-2xl font-bold font-serif transition-colors duration-300 ${
                isScrolled ? 'text-primary-red' : 'text-white'
              }`}>
                TABOUNI
              </span>
              <span className={`text-xs sm:text-sm md:text-base font-bold font-serif transition-colors duration-300 ${
                isScrolled ? 'text-primary-red' : 'text-white'
              }`}>
                STEAK HOUSE
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
                  isScrolled ? 'text-neutral-charcoal' : 'text-white'
                }`}
                variants={linkVariants}
                custom={index}
                whileHover="hover"
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {navLinks.slice(0, 3).map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group text-sm ${
                  isScrolled ? 'text-neutral-charcoal' : 'text-white'
                }`}
                variants={linkVariants}
                custom={index}
                whileHover="hover"
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 relative p-2 ${
              isScrolled ? 'text-primary-red' : 'text-white'
            }`}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gradient-to-br from-primary-red via-primary-dark to-neutral-black md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 relative px-4">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Menu items */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl sm:text-3xl font-serif hover:text-luxury-gold transition-colors duration-300 relative group text-center"
                  variants={mobileLinkVariants}
                  custom={index}
                  whileHover="hover"
                >
                  {link.name}
                  <motion.div
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-luxury-gold"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Language Switcher for Mobile */}
              <div className="mt-8">
                <LanguageSwitcher />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-10 left-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-8 h-8 text-luxury-gold/30" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-luxury-gold/30" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}