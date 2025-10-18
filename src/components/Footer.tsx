import { Instagram, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const instagramPosts = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-neutral-charcoal via-neutral-black to-neutral-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary-red/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-luxury-gold/5 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-red/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img 
                  src="/logo-2.png" 
                  alt="Tabouni Steak House Logo" 
                  className="w-12 h-12 object-contain" 
                />
              </motion.div>
              <span className="text-2xl font-bold font-serif text-luxury-gradient">TABOUNI</span>
              <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" />
            </motion.div>
            <p className="text-neutral-offwhite/80 leading-relaxed mb-6 font-light">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-luxury-gradient font-serif">{t('footer.links.title')}</h3>
            <ul className="space-y-3">
              {[t('nav.about'), t('nav.menu'), t('nav.gallery'), t('nav.reservations'), t('nav.contact')].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-offwhite/80 hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>


          {/* Instagram */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-luxury-gradient font-serif">{t('footer.instagram.title')}</h3>
            <div className="grid grid-cols-3 gap-3">
              {instagramPosts.map((post, index) => (
                <motion.a
                  key={index}
                  href="https://www.instagram.com/tabounisteakhouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl aspect-square luxury-shadow hover:shadow-luxury-red transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-neutral-offwhite/60 text-sm font-light"
              whileHover={{ scale: 1.02 }}
            >
              &copy; {new Date().getFullYear()} Tabouni Steak House. {t('footer.copyright')}
            </motion.p>
            <div className="flex gap-8 text-sm">
              {[t('footer.privacy'), t('footer.terms')].map((link, index) => (
                <motion.a 
                  key={link}
                  href="#" 
                  className="text-neutral-offwhite/60 hover:text-luxury-gold transition-colors duration-300 font-light"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
