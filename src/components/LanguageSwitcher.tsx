import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, name: 'English', flag: '/united-states.png' },
    { code: 'fr' as const, name: 'Français', flag: '/france.png' }
  ];

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-sm font-medium">
          <img 
            src={languages.find(lang => lang.code === language)?.flag} 
            alt={`${language.toUpperCase()} flag`}
            className="w-4 h-3 object-cover rounded-sm"
          />
        </span>
        <span className="text-white text-sm font-medium">
          {language.toUpperCase()}
        </span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary-red/10 transition-colors duration-200 ${
                  language === lang.code ? 'bg-primary-red/20 text-primary-red' : 'text-neutral-charcoal'
                }`}
                whileHover={{ x: 5 }}
              >
                <img 
                  src={lang.flag} 
                  alt={`${lang.name} flag`}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs opacity-70">{lang.code.toUpperCase()}</span>
                </div>
                {language === lang.code && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-primary-red rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
