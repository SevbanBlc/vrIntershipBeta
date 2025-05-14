import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageUrl: string;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ imageUrl }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    if (ref.current) {
      setElementTop(ref.current.offsetTop);
    }
  }, [ref]);

  const y = useTransform(scrollY, [elementTop - 500, elementTop + 500], [0, -100]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y }}
      >
        <div 
          className="w-full h-[120%] bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;