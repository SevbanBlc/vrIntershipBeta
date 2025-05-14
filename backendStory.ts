import { StoryPart } from './types';

export const backendStoryParts: StoryPart[] = [
  {
    title: "Backend Geliştirici Deneyimi",
    description: "Şirketin backend ekibine katıldın. İlk görevin yeni bir API geliştirmek.",
    dimension: "backend_intro",
    choices: [
      {
        text: "Node.js ile hızlı bir API geliştir",
        consequence: "Modern JavaScript ekosisteminde çalışıyorsun.",
        score: { analysis: 4, communication: 3 },
        nextDimension: "backend_nodejs"
      },
      {
        text: "Java Spring Boot ile kurumsal bir API geliştir",
        consequence: "Kurumsal düzeyde sağlam bir altyapı oluşturuyorsun.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "backend_java"
      }
    ]
  }
];