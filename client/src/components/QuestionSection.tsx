import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  score: Partial<Scores>;
}

interface Scores {
  communication: number;
  analysis: number;
  teamwork: number;
  innovation: number;
  technical: number;
  teamOrientation: number;
  analyticalMind: number;
  innovationDrive: number;
  frontend: number;
  backend: number;
  siber: number;
  datascience: number;
  devops: number;
  gamedev: number;
}

interface QuestionSectionProps {
  currentQuestion: number;
  totalQuestions: number;
  question: Question;
  onAnswerSelect: (answer: Answer) => void;
  onFinalResults: (scores: Scores) => void;
  selectedPath: string;
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({
  currentQuestion,
  totalQuestions,
  question,
  onAnswerSelect,
  onFinalResults,
  selectedPath,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scores, setScores] = useState<Scores>({
    communication: 0,
    analysis: 0,
    teamwork: 0,
    innovation: 0,
    technical: 0,
    teamOrientation: 0,
    analyticalMind: 0,
    innovationDrive: 0,
    frontend: 0,
    backend: 0,
    siber: 0,
    datascience: 0,
    devops: 0,
    gamedev: 0,
  });

  const shapeIndex = useMemo(() => {
    return currentQuestion >= 2 ? currentQuestion - 2 : null;
  }, [currentQuestion]);

  const handleAnswerClick = (answer: Answer, index: number) => {
    if (isAnimating || selectedAnswer !== null) {
      console.warn('Tıklama engellendi: Animasyon veya seçim aktif');
      return;
    }

    console.log(`Soru ${question.id} için cevap seçildi: ${answer.text}`, answer.score);

    setSelectedAnswer(index);
    setIsAnimating(true);

    setScores((prev) => {
      const newScores = { ...prev };
      Object.entries(answer.score).forEach(([key, value]) => {
        newScores[key as keyof Scores] = (newScores[key as keyof Scores] || 0) + (value || 0);
      });
      return newScores;
    });

    setTimeout(() => {
      onAnswerSelect(answer);
      setSelectedAnswer(null);
      setIsAnimating(false);

      if (currentQuestion === totalQuestions - 1) {
        console.log('Sonuçlar hesaplandı:', scores);
        onFinalResults(scores);
      }
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 200 },
    },
  };

  const answerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15 },
    },
    selected: {
      scale: 1.02,
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      borderColor: 'rgba(147, 51, 234, 0.5)',
      boxShadow: '0 4px 14px rgba(147, 51, 234, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const progressVariants = {
    initial: { width: '0%' },
    animate: {
      width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
      transition: { type: 'spring', damping: 30, stiffness: 60 },
    },
  };

  const renderShape = () => {
    if (shapeIndex === currentQuestion - 2 && question.id >= 11 && question.id <= 20) {
      const shapeContent = selectedPath.charAt(0).toUpperCase();
      return (
        <div className="mb-4 flex justify-center">
          <div
            className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white"
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          >
            {shapeContent}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
      <div className="relative h-40 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="font-bold text-3xl text-white text-center drop-shadow-md"
            variants={questionVariants}
          >
            Kariyerini Keşfet
          </motion.h1>
        </div>
      </div>

      <div className="px-6 pt-4">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
          <span>İlerleme</span>
          <span>{currentQuestion + 1} / {totalQuestions}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-purple-600"
            initial="initial"
            animate="animate"
            variants={progressVariants}
          />
        </div>
      </div>

      <div className="p-6">
        {renderShape()}
        <motion.h2 className="text-xl font-semibold text-gray-800 mb-6" variants={questionVariants}>
          {question.text}
        </motion.h2>

        <motion.div className="space-y-4" exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          {question.answers.map((answer, index) => (
            <motion.div
              key={`${question.id}-${index}`}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedAnswer === index
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/30'
              }`}
              onClick={() => handleAnswerClick(answer, index)}
              variants={answerVariants}
              animate={selectedAnswer === index ? 'selected' : 'visible'}
              whileHover={
                selectedAnswer === null
                  ? { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)' }
                  : {}
              }
              whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {answer.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
