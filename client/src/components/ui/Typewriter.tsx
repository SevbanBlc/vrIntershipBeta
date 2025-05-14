import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, delay, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <div className="text-gray-800">{displayedText}</div>;
};