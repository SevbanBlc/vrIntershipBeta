export interface Question {
  id: number;
  text: string;
  answers: { text: string; score: { [key in keyof Scores]?: number } }[];
}

export interface Scores {
  communication: number;
  analysis: number;
  teamwork: number;
  innovation: number;
  technical: number;
  teamOrientation: number;
  analyticalMind: number;
  innovationDrive: number;
  frontend: number;
  backend: number;
  siber: number;
  datascience: number;
  devops: number;
  gamedev: number;
}

export const commonQuestions: Question[] = [
  {
    id: 1,
    text: 'Ekip ile nasıl çalışırsınız?',
    answers: [
      { text: 'Yalnız çalışırım', score: { teamOrientation: 3, communication: 3 } },
      { text: 'İletişim kurarım', score: { teamOrientation: 12, communication: 12 } },
      { text: 'Liderlik ederim', score: { teamOrientation: 25, communication: 25 } },
    ],
  },
  {
    id: 2,
    text: 'Sorunları nasıl çözersiniz?',
    answers: [
      { text: 'Basit çözüm ararım', score: { analyticalMind: 3, analysis: 3 } },
      { text: 'Analiz ederim', score: { analyticalMind: 12, analysis: 12 } },
      { text: 'Yenilikçi çözüm bulurum', score: { analyticalMind: 25, analysis: 25 } },
    ],
  },
  {
    id: 3,
    text: 'Yeni teknolojiyi nasıl öğrenirsiniz?',
    answers: [
      { text: 'Zorunda kalırsam öğrenirim', score: { technical: 3, analyticalMind: 3 } },
      { text: 'Kaynakları kullanırım', score: { technical: 12, analyticalMind: 12 } },
      { text: 'Hızla uygularım', score: { technical: 25, analyticalMind: 25 } },
    ],
  },
  {
    id: 4,
    text: 'Yenilikçi fikirler ne kadar önemli?',
    answers: [
      { text: 'Pek önemli değil', score: { innovationDrive: 3, innovation: 3 } },
      { text: 'Bazen önemli', score: { innovationDrive: 12, innovation: 12 } },
      { text: 'Çok önemli', score: { innovationDrive: 25, innovation: 25 } },
    ],
  },
  {
    id: 5,
    text: 'Hata yaptığınızda ne yaparsınız?',
    answers: [
      { text: 'Düzeltmeye çalışırım', score: { analyticalMind: 3, communication: 3 } },
      { text: 'Analiz ederim', score: { analyticalMind: 12, communication: 12 } },
      { text: 'Hızla önlerim', score: { analyticalMind: 25, communication: 25 } },
    ],
  },
  {
    id: 6,
    text: 'Anlaşmazlıkta ne yaparsınız?',
    answers: [
      { text: 'Müdahale etmem', score: { teamOrientation: 3, communication: 3 } },
      { text: 'Uzlaştırırım', score: { teamOrientation: 12, communication: 12 } },
      { text: 'Çözüm yönetirim', score: { teamOrientation: 25, communication: 25 } },
    ],
  },
  {
    id: 7,
    text: 'Zaman yönetimi ne kadar önemli?',
    answers: [
      { text: 'Pek önemli değil', score: { analyticalMind: 3, analysis: 3 } },
      { text: 'Bazen önemli', score: { analyticalMind: 12, analysis: 12 } },
      { text: 'Çok önemli', score: { analyticalMind: 25, analysis: 25 } },
    ],
  },
  {
    id: 8,
    text: 'Kullanıcı deneyimi önemli mi?',
    answers: [
      { text: 'Pek önemli değil', score: { innovationDrive: 3, communication: 3, frontend: 3 } },
      { text: 'Bazen önemli', score: { innovationDrive: 12, communication: 12, frontend: 12 } },
      { text: 'Çok önemli', score: { innovationDrive: 25, communication: 25, frontend: 25 } },
    ],
  },
  {
    id: 9,
    text: 'Kod yazarken hata ayıklamayı nasıl yaparsınız?',
    answers: [
      { text: 'Kaçınırım', score: { technical: 3, analyticalMind: 3 } },
      { text: 'Sistematik bulurum', score: { technical: 12, analyticalMind: 12 } },
      { text: 'Hızla düzeltirim', score: { technical: 25, analyticalMind: 25 } },
    ],
  },
  {
    id: 10,
    text: 'Proje önceliklerini nasıl belirlersiniz?',
    answers: [
      { text: 'Rastgele seçerim', score: { analyticalMind: 3, analysis: 3 } },
      { text: 'Plan yaparım', score: { analyticalMind: 12, analysis: 12 } },
      { text: 'Stratejik belirlerim', score: { analyticalMind: 25, analysis: 25 } },
    ],
  },
];

export const careerQuestions: { [key: string]: Question[] } = {
  frontend: [
    {
      id: 11,
      text: 'React’ta durum yönetimi için ne kullanılır?',
      answers: [
        { text: 'useState', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'localStorage', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Redux Saga', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 12,
      text: 'CSS Flexbox’un amacı nedir?',
      answers: [
        { text: 'Esnek düzen', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'Animasyon', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'API isteği', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 13,
      text: 'JavaScript’te event bubbling nedir?',
      answers: [
        { text: 'Olay yayılması', score: { frontend: 25, technical: 25, analysis: 15 } },
        { text: 'Olay silinmesi', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Olay şifreleme', score: { frontend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 14,
      text: 'Web performansını nasıl artırırsınız?',
      answers: [
        { text: 'Resim optimizasyonu', score: { frontend: 25, technical: 25, analysis: 15 } },
        { text: 'Fazla animasyon', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Tek yükleme', score: { frontend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 15,
      text: 'Responsive tasarım için ne kullanılır?',
      answers: [
        { text: 'Media queries', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'Sabit genişlik', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Veritabanı sorgusu', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 16,
      text: 'Web erişilebilirliği neden önemli?',
      answers: [
        { text: 'Herkes kullanabilsin', score: { frontend: 25, technical: 25, communication: 15 } },
        { text: 'Hızlı yükleme', score: { frontend: 5, technical: 5, communication: 3 } },
        { text: 'Veritabanı güvenliği', score: { frontend: 5, technical: 5, communication: 3 } },
      ],
    },
    {
      id: 17,
      text: 'TypeScript’in avantajı nedir?',
      answers: [
        { text: 'Tip kontrolü', score: { frontend: 25, technical: 25, analysis: 15 } },
        { text: 'Hızlı yürütme', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Az kod yazımı', score: { frontend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 18,
      text: 'React’ta veri aktarımı için ne kullanılır?',
      answers: [
        { text: 'Props ve Context', score: { frontend: 25, technical: 25, teamwork: 15 } },
        { text: 'SQL sorguları', score: { frontend: 5, technical: 5, teamwork: 3 } },
        { text: 'CSS sınıfları', score: { frontend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 19,
      text: 'UI/UX’te kullanıcı yolculuğu nedir?',
      answers: [
        { text: 'Etkileşim haritası', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'Şifreleme yöntemi', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Veritabanı erişimi', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 20,
      text: 'State yönetimi için popüler araç nedir?',
      answers: [
        { text: 'Redux veya Zustand', score: { frontend: 25, technical: 25, teamwork: 15 } },
        { text: 'MySQL', score: { frontend: 5, technical: 5, teamwork: 3 } },
        { text: 'Docker', score: { frontend: 5, technical: 5, teamwork: 3 } },
      ],
    },
  ],
  backend: [
    {
      id: 11,
      text: 'REST API’de GET ne için kullanılır?',
      answers: [
        { text: 'Veri okuma', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veri güncelleme', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Veri silme', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 12,
      text: 'Node.js’de Express ne için kullanılır?',
      answers: [
        { text: 'API oluşturma', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veritabanı yönetimi', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Frontend render', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 13,
      text: 'SQL’de JOIN ne yapar?',
      answers: [
        { text: 'Tablo birleştirme', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'Tablo silme', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Veri güncelleme', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 14,
      text: 'API güvenliği için ne kullanılır?',
      answers: [
        { text: 'JWT ve OAuth', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'CSS şifreleme', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'HTML sanitization', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 15,
      text: 'Mikroservislerin avantajı nedir?',
      answers: [
        { text: 'Bağımsız dağıtım', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Daha az kod', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Hızlı frontend', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 16,
      text: 'Backend hata yönetimi için ne kullanılır?',
      answers: [
        { text: 'Try-catch', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'CSS hata kodları', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Frontend validasyon', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 17,
      text: 'Docker’ın amacı nedir?',
      answers: [
        { text: 'Konteynerize etme', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veritabanı yedekleme', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Frontend animasyon', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 18,
      text: 'NoSQL’in SQL’den farkı nedir?',
      answers: [
        { text: 'Esnek şema', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'Az veri saklama', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Yavaş sorgulama', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 19,
      text: 'API rate limiting ne için kullanılır?',
      answers: [
        { text: 'Aşırı istek önleme', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'Veri şifreleme', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend hızlandırma', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 20,
      text: 'CI/CD’nin rolü nedir?',
      answers: [
        { text: 'Otomatik test ve dağıtım', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veri görselleştirme', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Arayüz tasarımı', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
  ],
  siber: [
    {
      id: 11,
      text: 'Penetrasyon testi ne için yapılır?',
      answers: [
        { text: 'Açık tespiti', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanı yedekleme', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Arayüz testi', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 12,
      text: 'SQL Injection nedir?',
      answers: [
        { text: 'Zararlı sorgu', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'CSS enjeksiyonu', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Render hatası', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 13,
      text: 'Ağ güvenliği için ne kullanılır?',
      answers: [
        { text: 'SIEM sistemleri', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'CSS framework’leri', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'HTML şablonları', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 14,
      text: 'DDoS saldırısının amacı nedir?',
      answers: [
        { text: 'Sistem erişilemezliği', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veri şifreleme', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Sayfa hızlandırma', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 15,
      text: 'Etik hacking’in amacı nedir?',
      answers: [
        { text: 'Açık düzeltme', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Sistem çökertme', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Veri çalma', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 16,
      text: 'Firewall’un görevi nedir?',
      answers: [
        { text: 'Trafik filtreleme', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Sayfa hızlandırma', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Veri şifreleme', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 17,
      text: 'Kriptografide public key ne için?',
      answers: [
        { text: 'Şifreleme ve doğrulama', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanı yedekleme', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Arayüz tasarımı', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 18,
      text: 'Zero-day açığı nedir?',
      answers: [
        { text: 'Yamalanmamış açık', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Yedekleme hatası', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Render sorunu', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 19,
      text: 'Log analizi ne için yapılır?',
      answers: [
        { text: 'Güvenlik olayı tespiti', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Arayüz tasarımı', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Veritabanı şifreleme', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 20,
      text: 'Phishing nedir?',
      answers: [
        { text: 'Sahte mesajla bilgi çalma', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanı optimizasyonu', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Sayfa tasarımı', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
  ],
};
