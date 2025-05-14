import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scores } from '../types';

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  score: Partial<Scores>;
}

interface QuestionSectionProps {
  currentQuestion: number;
  totalQuestions: number;
  question: Question;
  onAnswerSelect: (answer: Answer) => void;
  onFinalResults: (compatibility: number, success: number) => void;
  selectedPath: string; // Yeni prop
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({
  currentQuestion,
  totalQuestions,
  question,
  onAnswerSelect,
  onFinalResults,
  selectedPath
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [compatibility, setCompatibility] = useState(0);
  const [success, setSuccess] = useState(0);
  const [shapeIndex, setShapeIndex] = useState<number | null>(null);

  useEffect(() => {
    if (currentQuestion >= 2) {
      setShapeIndex(currentQuestion - 2);
    } else {
      setShapeIndex(null);
    }
  }, [currentQuestion]);

  const handleAnswerClick = (answer: Answer, index: number) => {
    if (isAnimating || selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setIsAnimating(true);

    setCompatibility(prev => prev + (answer.score.communication || 0));
    setSuccess(prev => prev + (answer.score.analysis || 0));

    setTimeout(() => {
      onAnswerSelect(answer);
      setSelectedAnswer(null);
      setIsAnimating(false);

      if (currentQuestion === totalQuestions - 1) {
        onFinalResults(compatibility, success);
      }
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  const answerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15
      }
    },
    selected: {
      scale: 1.02,
      backgroundColor: "rgba(147, 51, 234, 0.1)",
      borderColor: "rgba(147, 51, 234, 0.5)",
      boxShadow: "0 4px 14px rgba(147, 51, 234, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    initial: { width: '0%' },
    animate: {
      width: `${((currentQuestion) / totalQuestions) * 100}%`,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 60
      }
    }
  };

  const renderShape = () => {
    if (shapeIndex === currentQuestion - 2 && question.id === 12 && selectedPath === 'frontend') { // Yalnızca frontend için
      return (
        <div className="mb-4 flex justify-center">
          <div
            className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white"
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          >
            
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
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
          ></motion.div>
        </div>
      </div>

      <div className="p-6">
        {renderShape()} {/* Şekil yalnızca frontend'de render edilecek */}
        <motion.h2
          className="text-xl font-semibold text-gray-800 mb-6"
          variants={questionVariants}
        >
          {question.text}
        </motion.h2>

        <motion.div
          className="space-y-4"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {question.answers.map((answer, index) => (
            <motion.div
              key={index}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedAnswer === index
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/30'
              }`}
              onClick={() => handleAnswerClick(answer, index)}
              variants={answerVariants}
              animate={selectedAnswer === index ? 'selected' : 'visible'}
              whileHover={selectedAnswer === null ? { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)' } : {}}
              whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {answer.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};