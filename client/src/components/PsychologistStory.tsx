import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from './ui/Typewriter';

interface UserData {
  name: string;
  age: number;
}

interface PsychologistStoryProps {
  onContinue: () => void;
  userData: UserData;
}

export const PsychologistStory: React.FC<PsychologistStoryProps> = ({ onContinue, userData }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  // Adım ilerletme mantığı
  useEffect(() => {
    if (activeStep === 0) {
      const timer = setTimeout(() => setActiveStep(1), 4000);
      return () => clearTimeout(timer);
    }
    if (activeStep === 1) {
      const timer = setTimeout(() => setActiveStep(2), 4000);
      return () => clearTimeout(timer);
    }
    if (activeStep === 2) {
      const timer = setTimeout(() => setActiveStep(3), 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const dialogueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
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

  // userData yoksa veya name boşsa hata göster
  if (!userData || !userData.name) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-red-500">Kullanıcı verisi yüklenemedi.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="font-bold text-3xl text-white text-center drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Dr. Bimlo'nun Ofisi
          </motion.h1>
        </div>
      </div>
      
      <div className="p-8">
        <motion.div 
          className="flex space-x-4 mb-6"
          variants={dialogueVariants}
        >
          <div className="flex-shrink-0">
            <motion.div 
              className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img src="https://images.unsplash.com/flagged/photo-1573603867114-76112e1d7a23?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Bimlo" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="flex-grow bg-gray-100 rounded-2xl p-4 relative">
            <Typewriter 
              text={`Merhaba ${userData.name}, ben Dr. Bimlo! Teknoloji kariyerleri konusunda uzmanlaşmış bir psikologum.`}
              delay={30}
              onComplete={handleTypingComplete}
            />
          </div>
        </motion.div>
        
        <AnimatePresence>
          {activeStep >= 1 && (
            <motion.div 
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key="dialogue-2"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/flagged/photo-1573603867114-76112e1d7a23?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Bimlo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-grow bg-gray-100 rounded-2xl p-4">
                <Typewriter 
                  text="Bugün seni daha iyi tanıyıp, hangi teknoloji kariyerinin sana uygun olduğunu keşfedeceğiz."
                  delay={25}
                />
              </div>
            </motion.div>
          )}
          
          {activeStep >= 2 && (
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key="dialogue-3"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/flagged/photo-1573603867114-76112e1d7a23?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Bimlo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-grow bg-gray-100 rounded-2xl p-4">
                <Typewriter 
                  text="Sana bazı sorular soracağım. Lütfen seni en iyi yansıtan cevapları seç."
                  delay={25}
                />
              </div>
            </motion.div>
          )}
          
          {activeStep >= 3 && (
            <motion.div 
              className="flex justify-center mt-8"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              key="continue-button"
            >
              <motion.button
                onClick={onContinue}
                className="bg-purple-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                whileHover="hover"
                whileTap="tap"
              >
                Devam Et
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
