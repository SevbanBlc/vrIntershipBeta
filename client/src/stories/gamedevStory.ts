import { StoryPart } from './types';

export const gamedevStoryParts: StoryPart[] = [
  {
    title: "Oyun Geliştirici Deneyimi",
    description: "Şirketin oyun geliştirme ekibine katıldın. İlk görevin basit bir oyun prototipi geliştirmek.",
    dimension: "gamedev_intro",
    choices: [
      {
        text: "Unity ile 3D oyun geliştir",
        consequence: "Modern oyun motoruna hakimiyetini gösteriyorsun.",
        score: { analysis: 4, communication: 3 },
        nextDimension: "gamedev_unity"
      },
      {
        text: "2D piksel sanatı oyunu geliştir",
        consequence: "Temel oyun geliştirme becerilerini gösteriyorsun.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "gamedev_2d"
      }
    ]
  }
];