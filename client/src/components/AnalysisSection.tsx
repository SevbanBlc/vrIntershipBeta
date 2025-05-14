import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scores } from '../types';
import { commonQuestions, careerQuestions } from '../questions';

interface CareerSuggestion {
  id: string;
  title: string;
  description: string;
  skillWeights: { [K in keyof Scores]?: number };
  personalityWeights: { teamOrientation?: number; analyticalMind?: number; creativityDrive?: number };
  requiredSkills: string[];
  growthAreas: string[];
}

interface AnalysisSectionProps {
  scores: Scores;
  selectedPath: string;
  answers: { questionId: number; answer: string }[];
  onContinue: (newPath?: string) => void;
}

const careerPaths: CareerSuggestion[] = [
  {
    id: 'frontend',
    title: 'Frontend Geliştirici',
    description: 'Kullanıcı arayüzleri ve web uygulamaları geliştirme.',
    skillWeights: { communication: 0.2, analysis: 0.1, teamwork: 0.1, creativity: 0.3, technical: 0.3 },
    personalityWeights: { teamOrientation: 0.2, analyticalMind: 0.2, creativityDrive: 0.6 },
    requiredSkills: ['React', 'CSS', 'JavaScript', 'UI/UX'],
    growthAreas: ['TypeScript', 'Performance Optimizasyonu'],
  },
  {
    id: 'backend',
    title: 'Backend Geliştirici',
    description: 'Sunucu tarafı sistemler ve API geliştirme.',
    skillWeights: { communication: 0.1, analysis: 0.3, teamwork: 0.2, creativity: 0.1, technical: 0.3 },
    personalityWeights: { teamOrientation: 0.3, analyticalMind: 0.5, creativityDrive: 0.2 },
    requiredSkills: ['Node.js', 'Express', 'SQL', 'API Tasarımı'],
    growthAreas: ['Microservices', 'Docker'],
  },
  {
    id: 'siber',
    title: 'Siber Güvenlik Uzmanı',
    description: 'Sistem güvenliği ve güvenlik testleri.',
    skillWeights: { communication: 0.2, analysis: 0.4, teamwork: 0.1, creativity: 0.1, technical: 0.2 },
    personalityWeights: { teamOrientation: 0.1, analyticalMind: 0.8, creativityDrive: 0.1 },
    requiredSkills: ['Ağ Güvenliği', 'Penetrasyon Testi', 'Kriptografi'],
    growthAreas: ['Etik Hacking', 'Güvenlik Otomasyonu'],
  },
  {
    id: 'datascience',
    title: 'Veri Bilimci',
    description: 'Veri analizi, makine öğrenimi modelleri geliştirme ve iş öngörüleri çıkarma.',
    skillWeights: { communication: 0.2, analysis: 0.4, teamwork: 0.1, creativity: 0.2, technical: 0.1 },
    personalityWeights: { teamOrientation: 0.2, analyticalMind: 0.7, creativityDrive: 0.1 },
    requiredSkills: ['Python', 'R', 'SQL', 'Makine Öğrenimi'],
    growthAreas: ['Derin Öğrenme', 'Büyük Veri Teknolojileri'],
  },
  {
    id: 'devops',
    title: 'DevOps Mühendisi',
    description: 'Süreç otomasyonu, altyapı yönetimi ve sürekli entegrasyon/dağıtım sistemleri kurma.',
    skillWeights: { communication: 0.2, analysis: 0.2, teamwork: 0.3, creativity: 0.1, technical: 0.2 },
    personalityWeights: { teamOrientation: 0.4, analyticalMind: 0.4, creativityDrive: 0.2 },
    requiredSkills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    growthAreas: ['Infrastructure as Code', 'Güvenlik Otomasyonu'],
  },
  {
    id: 'gamedev',
    title: 'Oyun Geliştirici',
    description: 'Video oyunları tasarlayıp geliştirme, grafik ve oynanış mekanikleri oluşturma.',
    skillWeights: { communication: 0.1, analysis: 0.1, teamwork: 0.2, creativity: 0.4, technical: 0.2 },
    personalityWeights: { teamOrientation: 0.3, analyticalMind: 0.2, creativityDrive: 0.5 },
    requiredSkills: ['Unity', 'C#', '3D Modelleme', 'Oyun Fiziği'],
    growthAreas: ['Sanal Gerçeklik', 'Çok Oyunculu Sistemler'],
  },
];

const MAX_PERSONALITY_SCORE = 100;
const MAX_CAREER_SCORE = 100;
const SCORE_MULTIPLIER = 1.5;
const MINIMUM_PERCENTAGE = 30;
const MAXIMUM_PERCENTAGE = 95;

const calculateMatchPercentage = (
  personalityScores: Scores,
  careerScores: Scores,
  career: CareerSuggestion,
  isPersonality: boolean = false
): number => {
  if (!personalityScores || !careerScores || !career) return MINIMUM_PERCENTAGE;

  let personalityMatch = 0;
  let careerMatch = 0;

  const personalityKeys: (keyof Scores)[] = ['teamOrientation', 'analyticalMind', 'creativityDrive'];
  personalityMatch = personalityKeys.reduce((sum, key) => {
    const value = (personalityScores[key as keyof Scores] || 0) * SCORE_MULTIPLIER;
    const weight = career.personalityWeights[key as keyof typeof career.personalityWeights] || 0;
    return sum + (value / MAX_PERSONALITY_SCORE) * weight * 100;
  }, 0);

  const skillKeys: (keyof Scores)[] = ['communication', 'analysis', 'teamwork', 'creativity', 'technical'];
  careerMatch = skillKeys.reduce((sum, key) => {
    const value = (careerScores[key as keyof Scores] || 0) * SCORE_MULTIPLIER;
    return sum + (value / MAX_CAREER_SCORE) * (career.skillWeights[key] || 0) * 100;
  }, 0) / 5;

  const pathScore = (personalityScores[career.id as keyof Scores] || 0) * SCORE_MULTIPLIER;

  let finalScore: number;
  if (isPersonality) {
    finalScore = (0.7 * personalityMatch) + (0.5 * (pathScore / MAX_PERSONALITY_SCORE) * 100);
  } else {
    finalScore = (0.5 * personalityMatch) + (0.6 * careerMatch) + (0.2 * (pathScore / MAX_PERSONALITY_SCORE) * 100);
  }

  finalScore = Math.max(finalScore, MINIMUM_PERCENTAGE);
  finalScore = Math.min(finalScore, MAXIMUM_PERCENTAGE);
  return Math.round(finalScore);
};

function getSkillBadgeColor(index: number): string {
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-yellow-100 text-yellow-800',
    'bg-red-100 text-red-800',
    'bg-indigo-100 text-indigo-800',
    'bg-pink-100 text-pink-800',
  ];
  return colors[index % colors.length];
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({ scores, selectedPath, answers, onContinue }) => {
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  if (!scores || !selectedPath || !answers || answers.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800 font-sans">
        {answers.length === 0 ? "Hata: Test yanıtları eksik. Lütfen testi tamamlayın." : "Hata: Gerekli veriler eksik. Skorlar, seçilen dal veya cevaplar eksik olabilir."}
      </div>
    );
  }

  const selectedPathData = careerPaths.find(path => path.id === selectedPath);
  if (!selectedPathData) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800 font-sans">
        Hata: Seçilen dal bulunamadı. Lütfen geçerli bir dal seçin.
      </div>
    );
  }

  const personalityAnswers = answers.slice(0, 10);
  const careerAnswers = answers.slice(10, 20);

  const personalityScores: Scores = {
    communication: 0, analysis: 0, teamwork: 0, creativity: 0, technical: 0,
    teamOrientation: 0, analyticalMind: 0, creativityDrive: 0,
    frontend: 0, backend: 0, database: 0, security: 0, devops: 0, gamedev: 0, datascience: 0,
  };
  personalityAnswers.forEach((answer, index) => {
    const question = commonQuestions[index];
    if (question && answer.answer) {
      const selectedAnswer = question.answers.find(a => a.text === answer.answer);
      if (selectedAnswer && selectedAnswer.score) {
        Object.entries(selectedAnswer.score).forEach(([key, value]) => {
          personalityScores[key as keyof Scores] += value;
        });
      }
    }
  });

  const careerScores: Scores = {
    communication: 0, analysis: 0, teamwork: 0, creativity: 0, technical: 0,
    teamOrientation: 0, analyticalMind: 0, creativityDrive: 0,
    frontend: 0, backend: 0, database: 0, security: 0, devops: 0, gamedev: 0, datascience: 0,
  };
  careerAnswers.forEach((answer, index) => {
    const questionIndex = index;
    const question = careerQuestions[selectedPath]?.[questionIndex];
    if (question && answer.answer) {
      const selectedAnswer = question.answers.find(a => a.text === answer.answer);
      if (selectedAnswer && selectedAnswer.score) {
        Object.entries(selectedAnswer.score).forEach(([key, value]) => {
          careerScores[key as keyof Scores] += value;
        });
      }
    }
  });

  const selectedMatchPercentage = calculateMatchPercentage(personalityScores, careerScores, selectedPathData, false);
  const suggestedMatches = careerPaths
    .filter(path => path.id !== selectedPath)
    .map(path => ({ path, percentage: calculateMatchPercentage(personalityScores, careerScores, path, true) }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);

  const altDalPuan = (['communication', 'analysis', 'teamwork', 'creativity', 'technical'] as const)
    .reduce((sum, key) => sum + (careerScores[key] || 0) * (selectedPathData.skillWeights[key] || 0), 0) / 10;

  let classification = '';
  if (selectedMatchPercentage >= 70 && altDalPuan >= 7) {
    classification = 'Uyumlu & Başarılı';
  } else if (selectedMatchPercentage >= 70 && altDalPuan < 7) {
    classification = 'Uyumlu & Başarısız';
  } else {
    classification = 'Uyumsuz & Başarısız';
  }

  const areasForImprovement = [];
  if (careerScores.communication < 30) areasForImprovement.push('İletişim');
  if (careerScores.analysis < 30) areasForImprovement.push('Analitik Düşünme');
  if (careerScores.teamwork < 30) areasForImprovement.push('Ekip Çalışması');
  if (careerScores.creativity < 30) areasForImprovement.push('Yenilikçilik');
  if (careerScores.technical < 30) areasForImprovement.push('Teknik Beceriler');

  const handleCareerSelection = (pathId: string, pathTitle: string) => {
    if (['datascience', 'gamedev'].includes(pathId)) {
      setModalMessage(`${pathTitle} beta sürümünde mevcut değildir.`);
      setShowModal(true);
    } else if (pathId === 'devops') {
      setModalMessage('DevOps Mühendisi beta sürümünde mevcut değildir.');
      setShowModal(true);
    } else {
      setSelectedCompany(pathTitle);
      onContinue(pathId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-lg text-gray-800 font-sans"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-bold mb-4 text-center"
      >
        Analiz Sonuçlarınız
      </motion.h2>
      <div className="flex flex-col gap-6">
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Seçtiğiniz Dal: {selectedPathData.title}</h3>
          {areasForImprovement.length > 0 ? (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Geliştirilmesi Gereken Alanlar:</h4>
              <ul className="list-disc list-inside space-y-2 text-red-500">
                {areasForImprovement.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mb-4 text-gray-600">Tebrikler! Geliştirilmesi gereken bir alan bulunmamaktadır.</p>
          )}
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (selectedMatchPercentage * 2.512)}
                  transform="rotate(-90, 50, 50)"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-purple-600 font-bold text-2xl"
                >
                  %{selectedMatchPercentage}
                </text>
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">Hey, yorulmadın mı? Uygulamışsın, şimdi tamam!</p>
          <div className="flex gap-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex-1"
              onClick={() => onContinue()}
            >
              Devam Et
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition flex-1"
              onClick={() => setShowAlternatives(true)}
            >
              Başka Alan Ara
            </button>
          </div>
        </div>

        {showAlternatives && (
          <div className="border border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-center text-gray-800">Sana En Uygun Kariyer Yolları</h4>
            {suggestedMatches.length === 0 ? (
              <p className="text-gray-600 text-center">Uyumlu başka bir alan bulunamadı.</p>
            ) : (
              <div className="space-y-6 mt-4">
                {suggestedMatches.map((match, index) => (
                  <motion.div
                    key={match.path.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className={`bg-white border rounded-xl shadow-sm overflow-hidden cursor-pointer ${
                      selectedCompany === match.path.title ? 'border-purple-500 border-2 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    <div className="md:flex">
                      <div className="p-6 md:flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-800">{match.path.title}</h3>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold text-gray-600">%{match.percentage} Uyumluluk</span>
                          </div>
                        </div>
                        <p className="mt-3 text-gray-600">{match.path.description}</p>
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">Gereken Beceriler:</h4>
                          <div className="flex flex-wrap gap-2">
                            {match.path.requiredSkills.map((skill, skillIndex) => (
                              <span key={skillIndex} className={`text-xs px-2 py-1 rounded-full ${getSkillBadgeColor(skillIndex)}`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">Gelişim Alanları:</h4>
                          <div className="flex flex-wrap gap-2">
                            {match.path.growthAreas.map((area, areaIndex) => (
                              <span key={areaIndex} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-6 md:w-44 flex flex-col items-center justify-end md:border-l md:border-gray-200">
                        <div className="w-full h-24 flex items-center justify-center">
                          <div className="relative w-20 h-20">
                            <svg className="w-20 h-20" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="10"
                                strokeDasharray="282.6"
                                strokeDashoffset={282.6 * (1 - match.percentage / 100)}
                                transform="rotate(-90, 50, 50)"
                              >
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e879f9" />
                                    <stop offset="100%" stopColor="#c026d3" />
                                  </linearGradient>
                                </defs>
                              </circle>
                              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-gray-800 font-bold">
                                %{match.percentage}
                              </text>
                            </svg>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCareerSelection(match.path.id, match.path.title);
                          }}
                          className="w-full py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
                        >
                          Seç ve Devam Et
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-lg p-6 max-w-sm w-full mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Bilgi</h3>
              <p className="text-gray-600 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                Kapat
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};