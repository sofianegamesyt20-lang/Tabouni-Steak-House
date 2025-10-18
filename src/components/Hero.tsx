import { ChevronDown, Sparkles, Crown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 40px rgba(220, 0, 0, 0.6)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/assets/Steak-bg-img.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/90 via-neutral-black/80 to-neutral-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-red/5 via-transparent to-primary-red/5"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-red/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Luxury crown icon */}
        <motion.div 
          className="mb-4 sm:mb-6"
          variants={itemVariants}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img 
            src="/assets/logo-2.png" 
            alt="Tabouni Steak House Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mx-auto animate-pulse" 
          />
        </motion.div>

        {/* Main title with luxury effects */}
        <motion.div 
          className="mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-500"
          variants={titleVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-luxury-gradient glow-red mb-3 sm:mb-4 font-serif tracking-wider leading-tight"
            animate={{ 
              textShadow: [
                "0 0 15px rgba(220, 0, 0, 0.4)",
                "0 0 25px rgba(220, 0, 0, 0.6)",
                "0 0 15px rgba(220, 0, 0, 0.4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            TABOUNI
          </motion.h1>
          
          {/* Animated divider */}
          <motion.div 
            className="h-0.5 sm:h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-primary-red to-transparent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* STEAK HOUSE subtitle */}
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif text-luxury-gradient mt-3 sm:mt-4 mb-2 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            STEAK HOUSE
          </motion.h2>
          
          {/* Sparkle effects */}
          <div className="absolute -top-4 -right-4">
            <Sparkles className="w-6 h-6 text-luxury-gold animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -left-4">
            <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-elegant text-white mb-4 sm:mb-6 tracking-wide leading-relaxed px-2"
          variants={itemVariants}
        >
          {t('hero.subtitle')}{' '}
          <span className="text-luxury-gold font-bold">{t('hero.subtitle.highlight')}</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-neutral-offwhite/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl leading-relaxed font-light px-2"
          variants={itemVariants}
        >
          {t('hero.description')}
        </motion.p>

        {/* Action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 w-full max-w-2xl"
          variants={itemVariants}
        >
          <motion.button 
            className="group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 luxury-gradient text-white font-semibold rounded-xl overflow-hidden luxury-shadow-red text-base sm:text-lg tracking-wide w-full sm:w-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('hero.book.table')}
            </span>
            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="absolute inset-0 shimmer"></div>
          </motion.button>

          <motion.button 
            className="group px-6 sm:px-8 md:px-10 py-4 sm:py-5 border-2 border-white text-white font-semibold rounded-xl transition-all duration-500 hover:bg-primary-red hover:border-primary-red hover:scale-105 hover:shadow-luxury-red text-base sm:text-lg tracking-wide glass-morphism w-full sm:w-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('hero.view.menu')}
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="flex flex-col items-center gap-1 sm:gap-2 text-white/70"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wider">SCROLL</span>
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-red" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
