import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-neutral-black via-neutral-charcoal to-neutral-black flex flex-col items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => {
        setTimeout(onComplete, 1000);
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary-red/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-luxury-gold/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.div 
          className="mb-8"
          variants={logoVariants}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img 
              src="/logo-2.png" 
              alt="Tabouni Steak House Logo" 
              className="w-24 h-24 object-contain mx-auto animate-pulse" 
            />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-bold text-luxury-gradient mb-2 font-serif tracking-wider">
            TABOUNI
          </h1>
          <p className="text-xl text-neutral-offwhite/80 font-light">
            Steak House
          </p>
        </motion.div>

        {/* Loading text */}
        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <p className="text-neutral-offwhite/60 text-sm font-light">
            {t('common.loading')}
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div 
          className="mt-6 w-64 h-1 bg-neutral-offwhite/20 rounded-full overflow-hidden mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-red to-luxury-gold rounded-full origin-left"
            variants={progressVariants}
          />
        </motion.div>

        {/* Loading dots */}
        <motion.div 
          className="flex justify-center gap-2 mt-6"
          variants={itemVariants}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-red rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
