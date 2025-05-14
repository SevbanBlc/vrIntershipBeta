import { StoryPart } from './types';

export const securityStoryParts: StoryPart[] = [
  {
    title: "Siber Güvenlik Uzmanı Deneyimi",
    description: "Şirketin siber güvenlik ekibine katıldın. İlk görevin bir web uygulamasının güvenlik testini yapmak.",
    dimension: "security_intro",
    choices: [
      {
        text: "Otomatik güvenlik tarama araçları kullan",
        consequence: "Hızlı ama yüzeysel bir tarama yapıyorsun.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "security_scan"
      },
      {
        text: "Manuel penetrasyon testi gerçekleştir",
        consequence: "Daha derinlemesine bir analiz yapıyorsun, zaman alıyor ama kapsamlı.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "security_pentest"
      }
    ]
  }
];