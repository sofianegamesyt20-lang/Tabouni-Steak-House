import { useEffect, useRef, useState } from 'react';
import { Award, Users, Beef, Crown, Sparkles, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const [counters, setCounters] = useState({ years: 0, guests: 0, cuts: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const { t } = useLanguage();

  useEffect(() => {
    if (isInView) {
      animateCounters();
    }
  }, [isInView]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        years: Math.floor(15 * progress),
        guests: Math.floor(2000 * progress),
        cuts: Math.floor(50 * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const stats = [
    { 
      icon: Award, 
      value: `${counters.years}+`, 
      label: t('about.stats.years'), 
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/20'
    },
    { 
      icon: Users, 
      value: `${counters.guests.toLocaleString()}+`, 
      label: t('about.stats.guests'), 
      color: 'text-luxury-gold',
      bgColor: 'bg-luxury-gold/10',
      borderColor: 'border-luxury-gold/20'
    },
    { 
      icon: Beef, 
      value: `${counters.cuts}+`, 
      label: t('about.stats.cuts'), 
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/20'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-neutral-offwhite via-luxury-cream to-neutral-offwhite relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-red/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-luxury-gold/5 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-red/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="relative">
              <motion.div 
                className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-red to-luxury-gold rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.h2 
                className="text-6xl font-bold text-neutral-charcoal mb-6 font-serif"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('about.title')}
              </motion.h2>
            </div>

            <motion.p 
              className="text-xl text-neutral-charcoal/80 leading-relaxed font-light"
              variants={itemVariants}
            >
              {t('about.description')}
            </motion.p>

            <motion.p 
              className="text-xl text-neutral-charcoal/80 leading-relaxed font-light"
              variants={itemVariants}
            >
              {t('about.quality.description')}
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} luxury-shadow hover:shadow-luxury-red transition-all duration-500 group cursor-pointer`}
                  variants={statVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <motion.div 
                    className="relative inline-block mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`absolute inset-0 rounded-full border-4 ${stat.borderColor} animate-pulse`}></div>
                    <div className={`absolute inset-0 rounded-full border-4 ${stat.color.replace('text-', 'border-')} border-t-transparent animate-spin`} style={{ animationDuration: '3s' }}></div>
                    <stat.icon className={`w-12 h-12 ${stat.color} relative z-10 p-2`} />
                  </motion.div>
                  <motion.div 
                    className={`text-4xl font-bold ${stat.color} mb-2 font-serif`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-neutral-charcoal/70 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="relative group overflow-hidden rounded-2xl luxury-shadow"
                >
                  <img
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Restaurant interior"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="w-6 h-6 text-luxury-gold fill-current" />
                  </div>
                </motion.div>
                
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="relative group overflow-hidden rounded-2xl luxury-shadow"
                >
                  <img
                    src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Premium steak"
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src="/logo-2.png" 
                      alt="Tabouni Logo" 
                      className="w-6 h-6 object-contain" 
                    />
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6 pt-12">
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="relative group overflow-hidden rounded-2xl luxury-shadow"
                >
                  <img
                    src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Chef preparing"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-6 h-6 text-luxury-gold" />
                  </div>
                </motion.div>
                
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="relative group overflow-hidden rounded-2xl luxury-shadow"
                >
                  <img
                    src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fine dining"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Award className="w-6 h-6 text-luxury-gold" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
