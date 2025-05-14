import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Shield } from 'lucide-react';

interface CareerPathSelectionProps {
  onSelect: (path: string) => void;
}

const careerPaths = [
  {
    id: 'frontend',
    title: 'Frontend Geliştirici',
    description: 'Kullanıcı arayüzleri ve web uygulamaları geliştirme',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'backend',
    title: 'Backend Geliştirici',
    description: 'Sunucu tarafı sistemler ve API geliştirme',
    icon: Server,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'security',
    title: 'Siber Güvenlik Uzmanı',
    description: 'Sistem güvenliği ve güvenlik testleri',
    icon: Shield,
    color: 'from-red-500 to-pink-500'
  }
];

export const CareerPathSelection: React.FC<CareerPathSelectionProps> = ({ onSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const handlePathSelect = (pathId: string) => {
    onSelect(pathId); // Doğrudan onSelect çağırılır, test ekranına geçilir
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Hangi alanda uzmanlaşmak istiyorsun?
        </h2>
        <p className="text-gray-600">
          İlgilendiğin teknoloji alanını seç ve yeteneklerini test et
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {careerPaths.map((path) => (
          <motion.div
            key={path.id}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handlePathSelect(path.id)}
            className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 hover:border-gray-200 transition-all`}
          >
            <div className={`h-2 bg-gradient-to-r ${path.color}`} />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${path.color} text-white`}>
                  <path.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{path.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{path.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};