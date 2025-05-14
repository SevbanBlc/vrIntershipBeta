import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hikaye verilerinizle uyumlu arayüzler
interface StoryChoice {
  text: string;
  score: { [key: string]: number };
  consequence: string;
  nextDimension?: string | null;
}

interface StoryPart {
  title: string;
  description: string;
  image: string;
  choices: StoryChoice[];
}

interface StorySectionProps {
  storyPart: StoryPart;
  onChoice: (choice: StoryChoice) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ storyPart, onChoice }) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showConsequence, setShowConsequence] = useState(false);
  const [consequence, setConsequence] = useState<string | null>(null);
  const [selectedChoiceData, setSelectedChoiceData] = useState<StoryChoice | null>(null);
  const [readyToContinue, setReadyToContinue] = useState(false);

  // Resmin yüklenip yüklenmediğini kontrol etmek için
  useEffect(() => {
    console.log('Image URL:', storyPart.image);
    const img = new Image();
    img.src = storyPart.image;
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = () => console.log('Image failed to load');
  }, [storyPart.image]);

  const handleChoiceClick = (choice: StoryChoice, index: number) => {
    if (selectedChoice !== null) return; // Çoklu seçim engelle
    setSelectedChoice(index);
    setSelectedChoiceData(choice);

    if (choice.consequence) {
      setConsequence(choice.consequence);
      setShowConsequence(true);
      setTimeout(() => {
        setReadyToContinue(true);
      }, 1000); // Sonuç gösterimi için süre
    } else {
      setReadyToContinue(true); // Sonuç yoksa hemen devam
    }
  };

  const handleContinue = () => {
    if (selectedChoiceData) {
      setShowConsequence(false);
      onChoice(selectedChoiceData); // Üst bileşene seçimi gönder
      // Durumları sıfırla
      setSelectedChoice(null);
      setSelectedChoiceData(null);
      setReadyToContinue(false);
      setConsequence(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 200 } },
  };

  const choiceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15 } },
    selected: {
      scale: 1.03,
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      borderColor: 'rgba(147, 51, 234, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  const consequenceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 300 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 200 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.97 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="flex flex-col h-full"
    >
      {/* Başlık kısmı: Resmi net bir şekilde göstermek için güncellendi */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={storyPart.image}
          
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.log('Image load error:', e)}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <motion.h1
            className="font-bold text-2xl md:text-3xl text-white text-center drop-shadow-md px-4"
            variants={itemVariants}
          >
            
          </motion.h1>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <motion.div className="prose prose-sm md:prose-base max-w-none mb-8 text-gray-700" variants={itemVariants}>
          <p className="whitespace-pre-line">{storyPart.description}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {showConsequence && consequence ? (
            <motion.div
              key="consequence"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={consequenceVariants}
              className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-700"
            >
              <p className="font-medium mb-1">Sonuç:</p>
              <p>{consequence}</p>
            </motion.div>
          ) : (
            !readyToContinue &&
            storyPart.choices && (
              <motion.div key="choices" className="space-y-4" variants={itemVariants}>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Ne yapacaksın?</h3>
                {storyPart.choices.map((choice, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedChoice === index ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => handleChoiceClick(choice, index)}
                    variants={choiceVariants}
                    animate={selectedChoice === index ? 'selected' : 'visible'}
                    whileHover={selectedChoice === null ? { scale: 1.02 } : {}}
                    whileTap={selectedChoice === null ? { scale: 0.98 } : {}}
                  >
                    {choice.text}
                  </motion.div>
                ))}
              </motion.div>
            )
          )}

          {readyToContinue && (
            <motion.div key="continue-button" className="flex justify-center mt-6" initial="hidden" animate="visible" variants={buttonVariants}>
              <motion.button
                onClick={handleContinue}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg"
                whileHover="hover"
                whileTap="tap"
              >
                İlerle
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};