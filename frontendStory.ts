import { StoryPart } from './types';

export const frontendStoryParts: StoryPart[] = [
  {
    title: "Frontend Geliştirici Deneyimi",
    description: "Şirketin frontend ekibine katıldın. İlk olarak ekip lideri sana yeni bir web uygulaması için kullanıcı arayüzü geliştirme görevi veriyor.",
    dimension: "frontend_intro",
    choices: [
      {
        text: "React ile modern bir UI tasarla",
        consequence: "Modern teknolojilere olan hakimiyetini gösteriyorsun.",
        score: { analysis: 4, communication: 3 },
        nextDimension: "frontend_design"
      },
      {
        text: "Vanilla JavaScript ile basit bir UI oluştur",
        consequence: "Temellere olan hakimiyetini gösteriyorsun ama daha fazla iş yapman gerekiyor.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "frontend_javascript"
      }
    ]
  }
];