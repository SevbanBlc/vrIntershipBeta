import React from 'react';
import { motion } from 'framer-motion';

interface ChoiceCardProps {
  text: string;
  isSelected?: boolean;
  onClick: () => void;
  delay?: number;
}

export const ChoiceCard: React.FC<ChoiceCardProps> = ({ 
  text, 
  isSelected = false, 
  onClick,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full cursor-pointer p-4 rounded-lg transition-colors ${
        isSelected 
          ? 'bg-primary-100 border-2 border-primary-500' 
          : 'bg-white border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
      }`}
    >
      <div className="flex items-center">
        {isSelected && (
          <div className="mr-3 flex-shrink-0">
            <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}
        <div className="text-gray-800">
          {text}
        </div>
      </div>
    </motion.div>
  );
};

export default ChoiceCard;