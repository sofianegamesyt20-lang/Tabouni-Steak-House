import { useState, useEffect, useRef } from 'react';
import { Star, Crown, Sparkles, X, Heart } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  featured: boolean;
  image: string;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: t('menu.category.all'), icon: Star },
    { id: 'steaks', name: t('menu.category.steaks'), icon: 'logo' },
    { id: 'appetizers', name: t('menu.category.appetizers'), icon: Sparkles },
    { id: 'sides', name: t('menu.category.sides'), icon: Star },
    { id: 'desserts', name: t('menu.category.desserts'), icon: Heart },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Wagyu Ribeye',
      description: 'Premium Japanese A5 Wagyu, 16oz, perfectly marbled',
      price: '$125',
      category: 'steaks',
      featured: true,
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Filet Mignon',
      description: 'Tender center-cut, 8oz, wrapped in bacon',
      price: '$58',
      category: 'steaks',
      featured: true,
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'New York Strip',
      description: 'USDA Prime, 14oz, dry-aged 28 days',
      price: '$68',
      category: 'steaks',
      featured: false,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Porterhouse',
      description: 'The king of steaks, 24oz, for two',
      price: '$95',
      category: 'steaks',
      featured: true,
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'Beef Carpaccio',
      description: 'Thinly sliced raw beef, arugula, parmesan, truffle oil',
      price: '$24',
      category: 'appetizers',
      featured: false,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      name: 'Shrimp Cocktail',
      description: 'Jumbo prawns, house cocktail sauce',
      price: '$22',
      category: 'appetizers',
      featured: false,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 7,
      name: 'Truffle Fries',
      description: 'Hand-cut potatoes, parmesan, truffle oil',
      price: '$14',
      category: 'sides',
      featured: false,
      image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 8,
      name: 'Creamed Spinach',
      description: 'Classic preparation with garlic and cream',
      price: '$12',
      category: 'sides',
      featured: false,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 9,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake, molten center, vanilla ice cream',
      price: '$16',
      category: 'desserts',
      featured: false,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-gradient-to-br from-neutral-charcoal via-neutral-black to-neutral-charcoal relative overflow-hidden">
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
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-red/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('menu.title')}
            </motion.h2>
            <motion.div 
              className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent mx-auto mb-6 sm:mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className="text-neutral-offwhite/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('menu.description')}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-500 overflow-hidden text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'text-white'
                  : 'text-neutral-offwhite/70 hover:text-white'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category.id && (
                <motion.div 
                  className="absolute inset-0 luxury-gradient"
                  layoutId="activeCategory"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                {category.icon === 'logo' ? (
                  <img src="/logo-2.png" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                ) : (
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer luxury-shadow hover:shadow-luxury-red transition-all duration-500"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {item.featured && (
                  <motion.div 
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-luxury-gradient text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <img 
                      src="/logo-2.png" 
                      alt="Featured" 
                      className="w-3 h-3 sm:w-4 sm:h-4 object-contain" 
                    />
                    Featured
                  </motion.div>
                )}

                {/* Favorite Button */}
                <motion.button
                  className="absolute top-3 sm:top-4 left-3 sm:left-4 p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart 
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      favorites.includes(item.id) 
                        ? 'text-primary-red fill-current' 
                        : 'text-white'
                    }`} 
                  />
                </motion.button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <motion.h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-charcoal group-hover:text-primary-red transition-colors duration-300 font-serif leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.span 
                    className="text-primary-red font-bold text-lg sm:text-xl font-serif flex-shrink-0 ml-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {item.price}
                  </motion.span>
                </div>
                <p className="text-neutral-charcoal/70 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-neutral-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden luxury-shadow"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
                <motion.button
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                  onClick={() => setSelectedItem(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.button>
              </div>
              <div className="p-4 sm:p-6 md:p-8 max-h-[50vh] overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6 gap-2 sm:gap-0">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-charcoal font-serif leading-tight">{selectedItem.name}</h3>
                  <span className="text-primary-red font-bold text-xl sm:text-2xl md:text-3xl font-serif">{selectedItem.price}</span>
                </div>
                <p className="text-neutral-charcoal/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">{selectedItem.description}</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    className="flex-1 bg-luxury-gradient text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:shadow-luxury-red transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Order
                  </motion.button>
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-red text-primary-red font-semibold rounded-lg sm:rounded-xl hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleFavorite(selectedItem.id)}
                  >
                    <Heart 
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        favorites.includes(selectedItem.id) 
                          ? 'fill-current' 
                          : ''
                      }`} 
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
