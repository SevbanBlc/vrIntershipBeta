import { StoryPart } from './types';

export const databaseStoryParts: StoryPart[] = [
  {
    title: "Veritabanı Uzmanı Deneyimi",
    description: "Şirketin veritabanı yönetimi ekibine katıldın. İlk görevin performans sorunlarıyla karşılaşan bir veritabanını optimize etmek.",
    dimension: "database_intro",
    choices: [
      {
        text: "Sorguları optimize et",
        consequence: "Mevcut yapıyı iyileştirerek hızlı sonuç alıyorsun.",
        score: { analysis: 4, communication: 2 },
        nextDimension: "database_optimization"
      },
      {
        text: "Veritabanı şemasını yeniden tasarla",
        consequence: "Kapsamlı bir yaklaşım seçiyorsun, uzun vadeli çözüm sunuyorsun.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "database_schema"
      }
    ]
  }
];