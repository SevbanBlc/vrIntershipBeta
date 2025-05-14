import React from 'react';
import { motion } from 'framer-motion';

interface ResultSectionProps {
  success: boolean;
  onRestart: () => void;
  selectedCareer?: string;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ success, onRestart, selectedCareer }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  const careerSpecificSkills = {
    'Frontend Geliştirici': {
      learned: ['UI/UX Tasarım', 'React Bileşenleri', 'Responsive Tasarım'],
      toImprove: ['State Yönetimi', 'Performans Optimizasyonu', 'Cross-browser Uyumluluk']
    },
    'Backend Geliştirici': {
      learned: ['API Tasarımı', 'Veritabanı Yönetimi', 'Sunucu Mimarisi'],
      toImprove: ['Mikroservis Mimarisi', 'Ölçeklenebilirlik', 'Güvenlik Protokolleri']
    },
    'Veri Bilimci': {
      learned: ['Veri Analizi', 'İstatistiksel Modelleme', 'Python ile Veri İşleme'],
      toImprove: ['Derin Öğrenme', 'Büyük Veri Teknolojileri', 'Model Optimizasyonu']
    },
    'DevOps Mühendisi': {
      learned: ['CI/CD Pipeline', 'Konteynerizasyon', 'Altyapı Yönetimi'],
      toImprove: ['Kubernetes Orchestration', 'Güvenlik Otomasyonu', 'Monitoring']
    },
    'Güvenlik Uzmanı': {
      learned: ['Güvenlik Testleri', 'Risk Analizi', 'Güvenlik Protokolleri'],
      toImprove: ['Tehdit Modellemesi', 'Güvenlik Otomasyonu', 'Sızma Testi']
    }
  };

  const careerSkills = selectedCareer ? careerSpecificSkills[selectedCareer as keyof typeof careerSpecificSkills] : null;

  const successContent = {
    title: "Tebrikler! Stajı Başarıyla Tamamladın!",
    description: `Senin gösterdiğin liderlik becerileri, teknik bilgi ve problem çözme yeteneği sayesinde projeler başarıyla tamamlandı.\n\nBu kariyerde ilerlemek için iyi bir başlangıç yaptın ve şirket sana tam zamanlı bir pozisyon teklif etmeye karar verdi.`,
    image: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?q=80&w=1000",
    color: "from-green-600 to-emerald-600"
  };

  const failureContent = {
    title: "Staj Beklentileri Karşılayamadı",
    description: `Maalesef bu staj sürecinde zorluklar yaşadın. Beklentileri karşılamakta ve ekip ile iletişim kurmakta zorluk çektin.\n\nAncak bu bir son değil, bu deneyimden öğrenecek çok şey var. Kendini geliştirmen gereken alanları belirle ve daha iyi bir kariyer yolu için hazırlan.`,
    image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1000",
    color: "from-red-600 to-orange-600"
  };

  const content = success ? successContent : failureContent;

  const renderSkillList = (skills: string[], color: string, icon: JSX.Element) => (
    <ul className={`space-y-2 text-${color}-700`}>
      {skills.map((skill, index) => (
        <li key={index} className="flex items-start">
          <span className={`w-6 h-6 flex items-center justify-center rounded-full bg-${color}-100 mr-2`}>
            {icon}
          </span>
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <div className={`absolute inset-0 bg-gradient-to-r ${content.color}`}></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${content.image})` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="font-bold text-2xl md:text-3xl text-white text-center drop-shadow-md px-6"
            variants={itemVariants}
          >
            {content.title}
          </motion.h1>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col bg-white">
        <motion.div
          className="prose prose-sm md:prose-base max-w-none mb-6 text-gray-700"
          variants={itemVariants}
        >
          <p className="whitespace-pre-line">{content.description}</p>
        </motion.div>

        {careerSkills && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {success && (
              <motion.div
                variants={itemVariants}
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <h3 className="text-green-800 font-semibold mb-3">✅ Kazandığın Beceriler</h3>
                {renderSkillList(careerSkills.learned, 'green', (
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ))}
              </motion.div>
            )}

            {!success && (
              <motion.div
                variants={itemVariants}
                className="p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <h3 className="text-red-800 font-semibold mb-3">❌ Geliştirilmesi Gereken Alanlar</h3>
                {renderSkillList(careerSkills.toImprove, 'red', (
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.59 3z" />
                  </svg>
                ))}
              </motion.div>
            )}
          </div>
        )}

        <motion.div variants={buttonVariants} className="flex justify-center mt-auto">
          <motion.button
            onClick={onRestart}
            whileHover="hover"
            whileTap="tap"
            className={`py-3 px-8 rounded-lg text-white font-medium shadow-md transition ring-2 ring-offset-2 ring-${success ? 'purple' : 'blue'}-300 bg-gradient-to-r ${
              success ? 'from-purple-600 to-indigo-600' : 'from-blue-600 to-indigo-600'
            }`}
          >
            Başa Dön ve Tekrar Dene
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
