import { StoryPart } from './types';

export const devopsStoryParts: StoryPart[] = [
  {
    title: "DevOps Mühendisi Deneyimi",
    description: "Şirketin DevOps ekibine katıldın. İlk görevin uygulamanın deployment sürecini iyileştirmek.",
    dimension: "devops_intro",
    choices: [
      {
        text: "CI/CD pipeline'ı otomatikleştir",
        consequence: "Deployment sürecini tamamen otomatikleştiriyorsun.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "devops_cicd"
      },
      {
        text: "Container tabanlı bir deployment stratejisi uygula",
        consequence: "Ölçeklenebilir ve taşınabilir bir altyapı kuruyorsun.",
        score: { analysis: 4, communication: 3 },
        nextDimension: "devops_containers"
      }
    ]
  }
];