import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from "./hooks/use-auth";
import { IntroSection } from "./components/IntroSection";
import { UserInfoForm } from "./components/UserInfoForm";
import { QuestionSection } from "./components/QuestionSection";
import { AnalysisSection } from "./components/AnalysisSection";
import { ResultSection } from "./components/ResultSection";
import { CareerPathSelection } from "./components/CareerPathSelection";
import { Navbar } from "./components/Navbar";
import { commonQuestions, careerQuestions } from "./questions";
import { Step, Answer, UserData, Scores } from "./types";
import { ProtectedRoute } from "./lib/protected-route";
import { AuthProvider } from "./hooks/use-auth";
import AuthPage from "./pages/auth-page";
import supabase from './supabaseClient';
import { StorySection } from "./components/StorySection";
import { storyData } from "./storyData";
import { PsychologistStory } from "./components/PsychologistStory";

// Scores türünü güncelliyoruz, 5 alan olacak
interface Scores {
  communication: number;
  analysis: number;
  technical: number;
  creativity: number;
  teamwork: number;
}

function HomePage() {
  const { user } = useAuth();
  const [selectedPath, setSelectedPath] = useState<string>('frontend');
  const [step, setStep] = useState<Step>('intro');
  const [userData, setUserData] = useState<UserData>({ name: '', age: 0 });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({
    communication: 0,
    analysis: 0,
    technical: 0,
    creativity: 0,
    teamwork: 0
  });
  const [isCompatible, setIsCompatible] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [answers, setAnswers] = useState<{ questionId: number; answer: string }[]>([]);
  const [currentStoryPart, setCurrentStoryPart] = useState<any>(null);
  const [isLoadingProgress, setIsLoadingProgress] = useState(true);

  const pathToStoryMap: { [key: string]: string } = {
    frontend: 'frontend',
    backend: 'backend',
    siber: 'siber',
  };

  // Sadece users tablosundan name ve age bilgilerini çekiyoruz
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setIsLoadingProgress(true);
        console.log('Kullanıcı ID:', user.id);
        try {
          const { data, error, status, statusText } = await supabase
            .from('users')
            .select('name, age')
            .eq('id', user.id);

          console.log('fetchUserData Sorgu sonucu:', { data, error, status, statusText });
          if (error || !data) {
            console.error('fetchUserData Veri yükleme hatası:', error);
            setUserData({ name: '', age: 0 });
          } else if (data.length === 0) {
            console.log('Hiç veri bulunamadı, varsayılan değerler ayarlanıyor');
            setUserData({ name: '', age: 0 });
          } else {
            setUserData({ name: data[0].name || '', age: data[0].age || 0 });
            console.log('Kullanıcı verileri yüklendi:', { name: data[0].name, age: data[0].age });
          }
        } catch (error) {
          console.error('fetchUserData Beklenmeyen hata:', error);
          setUserData({ name: '', age: 0 });
        } finally {
          setIsLoadingProgress(false);
        }
      } else {
        setIsLoadingProgress(false);
      }
    };
    fetchUserData();
  }, [user]);

  useEffect(() => {
    console.log('Güncel step:', step, 'Güncel selectedPath:', selectedPath, 'Scores:', scores);
  }, [step, selectedPath, scores]);

  const handleContinue = (newPath?: string) => {
    if (newPath) {
      setSelectedPath(newPath);
      const storyPath = pathToStoryMap[newPath] || 'frontend';
      startStory(storyPath);
    } else {
      let nextStep: Step = step;
      switch (step) {
        case 'psychologist':
          nextStep = 'questions';
          break;
        case 'analysis':
          const storyPath = pathToStoryMap[selectedPath] || 'frontend';
          startStory(storyPath);
          return;
        case 'story':
        case 'results':
          nextStep = 'results';
          break;
        default:
          nextStep = 'results';
      }
      setStep(nextStep);
    }
    console.log('Devam ediliyor, güncel adım:', step, 'yeni path:', newPath || selectedPath);
  };

  const handleStart = () => {
    setStep('career-selection');
  };

  const handlePathSelect = (path: string) => {
    console.log('handlePathSelect çalışıyor, Seçilen path:', path);
    setSelectedPath(path);
    setStep('psychologist');
  };

  const handleUpdateUserData = (newData: UserData) => {
    setUserData(newData);
  };

  const handleAnswerSelect = (answer: Answer) => {
    const newScores = { ...scores };
    const currentQ = allQuestions[currentQuestion];

    const isCareerQuestion = currentQ.id >= 11 && currentQ.id <= 20;

    if (isCareerQuestion) {
      if (!currentQ.hasAbsoluteCorrect) {
        const contribution = answer.contribution || 0;
        answer.focusAreas.forEach((area) => {
          if (area in newScores) {
            newScores[area as keyof Scores] += contribution * 100;
          }
        });
      } else {
        if (answer.isCorrect) {
          const contribution = answer.contribution || 0;
          answer.focusAreas.forEach((area) => {
            if (area in newScores) {
              newScores[area as keyof Scores] += contribution * 100;
            }
          });
        } else {
          Object.keys(answer.score).forEach((key) => {
            if (key in newScores) {
              newScores[key as keyof Scores] = (newScores[key as keyof Scores] || 0) + answer.score[key];
            }
          });
        }
      }
    } else {
      Object.keys(answer.score).forEach((key) => {
        if (key in newScores) {
          newScores[key as keyof Scores] = (newScores[key as keyof Scores] || 0) + answer.score[key];
        }
      });
    }

    setScores(newScores);

    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion + 1, answer: answer.text }
    ]);

    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleFinalResults = (compatibility: number, success: number) => {
    const compatibilityThreshold = 10;
    const successThreshold = 50;
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    setIsCompatible(compatibility >= compatibilityThreshold);
    setIsSuccessful(totalScore >= successThreshold);
    setStep('analysis');
    console.log('Test tamamlandı! Analiz adımına geçiliyor. Toplam hikaye puanı:', totalScore, 'Cevaplar:', answers, 'Scores:', scores);
  };

  const handleRestart = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setScores({
      communication: 0,
      analysis: 0,
      technical: 0,
      creativity: 0,
      teamwork: 0
    });
    setSelectedPath('frontend');
    setUserData({ name: '', age: 0 });
    setIsCompatible(false);
    setIsSuccessful(false);
    setAnswers([]);
    setCurrentStoryPart(null);
  };

  const isUserDataValid = userData.name !== '' && userData.age > 0;

  const allQuestions = selectedPath
    ? [...commonQuestions, ...(careerQuestions[selectedPath] || [])]
    : [];

  const startStory = (path: string) => {
    console.log("startStory fonksiyonu çalışıyor...");
    console.log("Kullanılan path:", path);
    const initialStory = storyData.find(part => part.title === path);
    console.log("Bulunan hikaye:", initialStory);
    if (initialStory) {
      setCurrentStoryPart(initialStory);
      setStep('story');
      console.log("Hikaye başlatıldı, step: story, currentStoryPart:", initialStory);
    } else {
      console.error("Hikaye bulunamadı! Seçilen path ile eşleşen bir hikaye yok:", path);
      setStep('results');
    }
  };

  const handleStoryChoice = (choice: any) => {
    console.log("handleStoryChoice fonksiyonu çalışıyor, seçilen seçenek:", choice);
    const newScores = { ...scores };

    if (choice && choice.score && typeof choice.score === 'object') {
      Object.entries(choice.score).forEach(([key, value]) => {
        if (key in newScores && typeof value === 'number') {
          newScores[key as keyof Scores] += value;
        } else {
          console.warn(`Geçersiz score verisi: ${key} veya değer: ${value}`);
        }
      });
    } else {
      console.warn("Seçenekte score verisi eksik veya hatalı:", choice);
    }

    setScores(newScores);

    if (choice.nextDimension) {
      const nextPart = storyData.find(part => part.title === choice.nextDimension);
      console.log("Sonraki hikaye kısmı:", nextPart);
      if (nextPart) {
        setCurrentStoryPart(nextPart);
        setStep('story');
      } else {
        setStep('results');
        setCurrentStoryPart(null);
      }
    } else {
      setStep('results');
      setCurrentStoryPart(null);
    }
    console.log("Güncellenen skorlar:", newScores);
  };

  if (isLoadingProgress) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center">
        <div className="text-center text-gray-700">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden max-w-3xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 120 }
          }}
        >
          <AnimatePresence mode="wait">
            {step === 'intro' && (
              <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}>
                <IntroSection onStart={handleStart} />
              </motion.div>
            )}

            {step === 'career-selection' && (
              <motion.div
                key="career-selection"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { type: "spring", damping: 25, stiffness: 120 } }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                <CareerPathSelection onSelect={handlePathSelect} />
              </motion.div>
            )}

            {step === 'psychologist' && (
              <motion.div
                key="psychologist"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 120 
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  x: -20, 
                  transition: { duration: 0.3 } 
                }}
              >
                <PsychologistStory
                  onContinue={() => handleContinue()}
                />
              </motion.div>
            )}

            {step === 'questions' && allQuestions.length > 0 && (
              <motion.div
                key={`question-${currentQuestion}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { type: "spring", damping: 25, stiffness: 120 } }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                <QuestionSection
                  currentQuestion={currentQuestion}
                  totalQuestions={allQuestions.length}
                  question={allQuestions[currentQuestion]}
                  onAnswerSelect={handleAnswerSelect}
                  onFinalResults={handleFinalResults}
                />
              </motion.div>
            )}

            {step === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { type: "spring", damping: 25, stiffness: 120 } }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                <AnalysisSection
                  scores={scores}
                  selectedPath={selectedPath}
                  answers={answers}
                  onContinue={handleContinue}
                />
              </motion.div>
            )}

            {step === 'story' && currentStoryPart && (
              <motion.div
                key="story"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { type: "spring", damping: 25, stiffness: 120 } }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                <StorySection
                  storyPart={currentStoryPart}
                  onChoice={handleStoryChoice}
                />
              </motion.div>
            )}

            {step === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { type: "spring", damping: 25, stiffness: 120 } }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                <ResultSection
                  success={isSuccessful}
                  onRestart={handleRestart}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function AppRoutes() {
  const { user, isLoading } = useAuth();
  const [location, navigate] = useLocation();

  useEffect(() => {
    if (!isLoading && !user && location !== '/auth') {
      navigate('/auth');
    }
  }, [user, isLoading, location, navigate]);

  return (
    <Switch>
      <ProtectedRoute path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
