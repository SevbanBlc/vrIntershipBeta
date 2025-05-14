import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface UserData {
  name: string;
  age: number;
}

interface UserInfoFormProps {
  userData: UserData;
  onUpdateUserData: (userData: UserData) => void;
  onSubmit: () => void;
  step: 'name' | 'age';
}

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ 
  userData, 
  onUpdateUserData, 
  onSubmit,
  step
}) => {
  const [formData, setFormData] = useState<UserData>(userData);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'name' && !formData.name.trim()) {
      setError('Lütfen adınızı girin');
      return;
    }
    
    if (step === 'age') {
      if (!formData.age) {
        setError('Lütfen yaşınızı girin');
        return;
      }
      
      if (formData.age < 16 || formData.age > 100) {
        setError('Yaşınız 16 ile 100 arasında olmalıdır');
        return;
      }
    }
    
    setError(null);
    onUpdateUserData(formData);
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'age') {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    setError(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0 }
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

  const titleText = step === 'name' 
    ? 'Adınızı Girin' 
    : 'Yaşınızı Girin';
  
  const instructionText = step === 'name'
    ? 'Sanal staj deneyiminize başlamak için adınızı girin.'
    : 'Yaşınızı girin, bu bilgi kariyerinizdeki öneriler için kullanılacak.';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="relative h-40 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="font-bold text-3xl text-white text-center drop-shadow-md"
            variants={itemVariants}
          >
            {titleText}
          </motion.h1>
        </div>
      </div>
      
      <div className="p-6">
        <motion.p 
          className="text-gray-600 mb-8 text-center"
          variants={itemVariants}
        >
          {instructionText}
        </motion.p>
        
        <form onSubmit={handleSubmit}>
          {step === 'name' && (
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Adınızı girin"
                autoFocus
              />
            </motion.div>
          )}
          
          {step === 'age' && (
            <motion.div variants={itemVariants}>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Yaşınız
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Yaşınızı girin"
                min="16"
                max="100"
                autoFocus
              />
            </motion.div>
          )}
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-sm text-red-600"
            >
              {error}
            </motion.div>
          )}
          
          <motion.div 
            className="flex justify-center mt-8" 
            variants={buttonVariants}
          >
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300"
              whileHover="hover"
              whileTap="tap"
            >
              {step === 'name' ? 'Devam Et' : 'Tamamla'}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};