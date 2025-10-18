import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Crown, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.location.title'),
      details: ['98GJ+RCP', 'Tiaret, Algeria'],
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
    },
    {
      icon: Phone,
      title: t('contact.phone.title'),
      details: ['+213 (46) 123-456', '+213 (46) 765-432'],
      color: 'text-luxury-gold',
      bgColor: 'bg-luxury-gold/10',
    },
    {
      icon: Mail,
      title: t('contact.email.title'),
      details: ['reservations@tabouni.com', 'info@tabouni.com'],
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
    },
  ];

  const hours = [
    { day: t('contact.hours.weekdays'), hours: t('contact.hours.time1') },
    { day: t('contact.hours.weekend'), hours: t('contact.hours.time2') },
    { day: t('contact.hours.sunday'), hours: t('contact.hours.time3') },
  ];

  const socialIcons = [
    { icon: Facebook, color: 'hover:text-blue-600', href: '#' },
    { icon: Instagram, color: 'hover:text-pink-600', href: 'https://www.instagram.com/tabounisteakhouse/' },
    { icon: Twitter, color: 'hover:text-blue-400', href: '#' },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-neutral-offwhite via-luxury-cream to-neutral-offwhite relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-primary-red/5 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-luxury-gold/5 rounded-full"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {[...Array(20)].map((_, i) => (
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
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-6xl font-bold text-neutral-charcoal mb-6 font-serif"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('contact.title')}
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Map */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-neutral-charcoal rounded-2xl overflow-hidden h-full min-h-[500px] relative luxury-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.5!2d1.3167!3d35.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIyJzAwLjEiTiAxwrAxOScwMC4xIkU!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              />
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 luxury-shadow hover:shadow-luxury-red transition-all duration-500 border-2 border-transparent hover:border-primary-red/20 group cursor-pointer`}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className={`${info.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="font-bold text-2xl text-neutral-charcoal mb-3 font-serif group-hover:text-primary-red transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {info.title}
                    </motion.h3>
                    {info.details.map((detail, idx) => (
                      <motion.p 
                        key={idx} 
                        className="text-neutral-charcoal/80 text-lg font-light leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 + idx * 0.05 }}
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Hours */}
            <motion.div
              className="bg-white rounded-2xl p-8 luxury-shadow hover:shadow-luxury-red transition-all duration-500 border-2 border-transparent hover:border-luxury-gold/20 group cursor-pointer"
              variants={cardVariants}
              custom={3}
              whileHover="hover"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="bg-luxury-gold/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Clock className="w-8 h-8 text-luxury-gold" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="font-bold text-2xl text-neutral-charcoal mb-6 font-serif group-hover:text-luxury-gold transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Opening Hours
                  </motion.h3>
                  <div className="space-y-4">
                    {hours.map((schedule, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex justify-between items-center py-2 border-b border-neutral-offwhite/30 last:border-b-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                      >
                        <span className="text-primary-red font-semibold text-lg">{schedule.day}</span>
                        <span className="text-neutral-charcoal/80 font-light text-lg">{schedule.hours}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="bg-white rounded-2xl p-8 luxury-shadow hover:shadow-luxury-red transition-all duration-500 border-2 border-transparent hover:border-primary-red/20 group cursor-pointer"
              variants={cardVariants}
              custom={4}
              whileHover="hover"
            >
              <div className="text-center">
                <motion.h3 
                  className="font-bold text-2xl text-neutral-charcoal mb-6 font-serif group-hover:text-primary-red transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Follow Us
                </motion.h3>
                <div className="flex justify-center gap-6">
                  {socialIcons.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`bg-neutral-offwhite p-4 rounded-xl hover:bg-primary-red hover:text-white text-neutral-charcoal transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + idx * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-8 h-8" />
                    </motion.a>
                  ))}
                </div>
                <motion.div 
                  className="mt-6 flex justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <Sparkles className="w-5 h-5 text-luxury-gold animate-pulse" />
                  <span className="text-neutral-charcoal/70 font-light">Stay connected for exclusive updates</span>
                  <Sparkles className="w-5 h-5 text-luxury-gold animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
