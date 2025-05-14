import React from 'react';
import { motion } from 'framer-motion';

interface IntroSectionProps {
  onStart: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onStart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    },
    tap: { scale: 0.95 }
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-center"
    >
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <div className="relative rounded-lg overflow-hidden h-52 w-full max-w-lg mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-md">VRIntership</h1>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Sanal Teknoloji Stajına Hoş Geldin!</h2>
        <p className="text-gray-600 mb-6">
          Teknoloji dünyasında farklı kariyerleri keşfet ve kendi yolunu seç.
          Bu interaktif deneyim, yeteneklerini ve ilgi alanlarını test edecek.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div 
            className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Keşfet</h3>
            <p className="text-gray-700 text-sm">
              Farklı teknoloji kariyerlerini ve iş rollerini keşfet
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Dene</h3>
            <p className="text-gray-700 text-sm">
              Gerçek senaryoları deneyimleyerek becerilerini test et
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Öğren</h3>
            <p className="text-gray-700 text-sm">
              Senin için uygun olan kariyer yolunu keşfet
            </p>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        variants={buttonVariants}
        className="flex justify-center"
      >
        <motion.button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all"
          whileHover="hover"
          whileTap="tap"
        >
          Başla
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;