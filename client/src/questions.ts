import { Question } from './types';

export const commonQuestions: Question[] = [
  {
    id: 1,
    text: "Bir problemle karşılaştığında genellikle nasıl bir yaklaşım sergilersin?",
    answers: [
      { 
        text: "Teknik ve analiz odaklı derinlemesine çözüm üretirim", 
        score: { 
          analysis: 20, 
          technical: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi ve farklı fikirler geliştirerek çözüm ararım", 
        score: { 
          creativity: 20, 
          technical: 10, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Ekip arkadaşlarımla işbirliği yaparak karar veririm", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 2,
    text: "Zamanını en verimli nasıl kullanmayı tercih edersin?",
    answers: [
      { 
        text: "Planlı ve organize bir şekilde çalışırım", 
        score: { 
          analysis: 20, 
          technical: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Esnek bir şekilde, ilham geldiğinde çalışırım", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Diğer insanlarla birlikte çalışarak zamanı paylaşırım", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 3,
    text: "Bir projede seni motive eden şey nedir?",
    answers: [
      { 
        text: "Teknik zorlukları aşarak motive olurum", 
        score: { 
          technical: 20, 
          analysis: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi ve özgün fikirler üretmek beni motive eder", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Ekip başarısına katkıda bulunmak beni motive eder", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 4,
    text: "Hata yaptığında nasıl tepki verirsin?",
    answers: [
      { 
        text: "Sorunun kökünü analiz edip öğrenirim", 
        score: { 
          analysis: 20, 
          technical: 15, 
          analyticalMind: 20, 
          siber: 15, 
          backend: 12 
        } 
      },
      { 
        text: "Yeni bir yaklaşım deneyerek hatayı düzeltirim", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Ekip arkadaşlarımdan destek isterim", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 5,
    text: "Bir projede en çok hangi yönünle öne çıkarsın?",
    answers: [
      { 
        text: "Teknik bilgim ve problem çözme yeteneğimle öne çıkarım", 
        score: { 
          technical: 20, 
          analysis: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi düşünce ve yenilikçi fikirlerimle öne çıkarım", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "İletişim yeteneğim ve ekip çalışmam ile öne çıkarım", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 6,
    text: "Bir görevi tamamlamak için neye odaklanırsın?",
    answers: [
      { 
        text: "Doğru ve mantıklı sonuçlara ulaşmaya", 
        score: { 
          analysis: 20, 
          technical: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Eğlenceli ve dikkat çekici bir çıktıya", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Herkesin katkıda bulunduğu bir sürece", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 7,
    text: "Bir ekipte rolün ne olurdu?",
    answers: [
      { 
        text: "Teknik lider veya uzman", 
        score: { 
          technical: 20, 
          analysis: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi fikirlerin öncüsü", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Koordinatör veya destekleyici", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 8,
    text: "Yeni bir beceri öğrenmek seni nasıl motive eder?",
    answers: [
      { 
        text: "Derinlemesine anlamak ve uygulamak", 
        score: { 
          technical: 20, 
          analysis: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi projelerde kullanma şansı", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Ekiple paylaşarak geliştirmek", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 9,
    text: "Bir projede seni en çok zorlayan şey nedir?",
    answers: [
      { 
        text: "Karmaşık teknik sorunlar", 
        score: { 
          technical: 20, 
          analysis: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi bir fikir bulamamak", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Ekip içi iletişim kopuklukları", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
  {
    id: 10,
    text: "Bir projeyi bitirdiğinde nasıl bir hisse kapılırsın?",
    answers: [
      { 
        text: "Her şeyin kusursuz işlediğini görmek", 
        score: { 
          technical: 20, 
          analysis: 15, 
          analyticalMind: 20, 
          backend: 15, 
          siber: 12 
        } 
      },
      { 
        text: "Yenilikçi bir eser ortaya koymak", 
        score: { 
          creativity: 20, 
          creativityDrive: 20, 
          frontend: 15 
        } 
      },
      { 
        text: "Ekip olarak başarıyı paylaşmak", 
        score: { 
          teamwork: 20, 
          communication: 15, 
          teamOrientation: 20, 
          frontend: 10, 
          backend: 10, 
          siber: 10 
        } 
      },
    ]
  },
];

export const careerQuestions: { [key: string]: Question[] } = {
  frontend: [
    {
      id: 11,
      text: 'React Durum Yönetimi: Aşağıdakilerden hangisi React’te bir bileşenin state’ini güncellemek için kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) setState()', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'creativity', 'teamwork'], 
          score: { technical: 25, analysis: 15, creativity: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) updateState()', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) changeState()', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 12,
      text: 'CSS Flexbox ile ilgili: Flex container içinde elemanları yatay hizalamak için hangi property kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) justify-content', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'creativity', 'teamwork'], 
          score: { technical: 25, creativity: 15, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) align-items', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) flex-direction', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 13,
      text: 'Bir web sayfasında performans optimizasyonu için hangi yöntemi kullanırsın?',
      hasAbsoluteCorrect: false,
      answers: [
        { 
          text: 'A) Gereksiz CSS ve JS dosyalarını temizlemek', 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, frontend: 20 } 
        },
        { 
          text: 'B) Görselleri sıkıştırmak', 
          contribution: 0.15,
          focusAreas: ['technical', 'creativity', 'teamwork'], 
          score: { technical: 25, creativity: 15, teamwork: 15, frontend: 20 } 
        },
        { 
          text: 'C) Her şeyi olduğu gibi bırakmak', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 14,
      text: 'HTML5 ile ilgili: Hangi etiket, bir web sayfasında ses dosyalarını gömmek için kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) <audio>', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'creativity', 'teamwork'], 
          score: { technical: 25, creativity: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) <video>', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) <sound>', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 15,
      text: 'JavaScript’te olay dinleyicisi (event listener) eklemek için hangi metod kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) addEventListener()', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) onClick()', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) listenEvent()', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 16,
      text: 'Responsive tasarımda hangi birim en çok tercih edilir?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) rem', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'creativity', 'teamwork'], 
          score: { technical: 25, creativity: 15, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) px', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) em', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 17,
      text: 'Bir CSS dosyasında hangi özellik, bir elementin yuvarlak köşelerini ayarlar?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) border-radius', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'creativity', 'teamwork'], 
          score: { technical: 25, creativity: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) border-style', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) border-width', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 18,
      text: 'React’te bileşenler arası veri paylaşımı için hangi yöntem tercih edilir?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Props', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) State', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) Context', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 19,
      text: 'Bir web sayfasında erişilebilirlik (accessibility) için hangi etiketi kullanırsın?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) <nav>', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'communication', 'teamwork'], 
          score: { technical: 25, communication: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) <div>', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) <span>', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
    {
      id: 20,
      text: 'JavaScript’te bir diziyi sıralamak için hangi metod kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) sort()', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 10, teamwork: 15, frontend: 25 } 
        },
        { 
          text: 'B) order()', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
        { 
          text: 'C) arrange()', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, frontend: 5 } 
        },
      ]
    },
  ],
  backend: [
    {
      id: 11,
      text: 'REST API’lerde GET isteği hangi amaçla kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Veriyi okumak için', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) Veriyi silmek için', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) Veriyi güncellemek için', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 12,
      text: 'Bir veritabanında ilişkisel tablo bağlantısı için hangi anahtar kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Foreign Key', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) Primary Key', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) Unique Key', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 13,
      text: 'Node.js’te bir API endpoint’i oluşturmak için hangi kütüphane tercih edilir?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Express', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 10, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) React', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) MongoDB', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 14,
      text: 'SQL’de verileri filtrelemek için hangi komut kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) WHERE', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) SELECT', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) JOIN', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 15,
      text: 'Bir API’nin güvenliğini artırmak için hangi yöntem kullanılır?',
      hasAbsoluteCorrect: false,
      answers: [
        { 
          text: 'A) Token tabanlı kimlik doğrulama (JWT)', 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 20 } 
        },
        { 
          text: 'B) Açık API bırakmak', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) Sadece şifre kullanmak', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 16,
      text: 'Node.js’te asenkron işlemler için hangi yapı kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Promises', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 10, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) Sync', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) Await', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 17,
      text: 'Veritabanı tasarımı yaparken hangi normalizasyon kuralı uygulanır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) 1. Normal Form (1NF)', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) 2. Normal Form (2NF)', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) 3. Normal Form (3NF)', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 18,
      text: 'Bir API’de hata yönetimi için hangi HTTP status kodu kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) 404', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 10, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) 200', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) 300', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 19,
      text: 'Bir sunucuda ölçeklenebilirlik sağlamak için hangi yöntem kullanılır?',
      hasAbsoluteCorrect: false,
      answers: [
        { 
          text: 'A) Load Balancer kullanmak', 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 20 } 
        },
        { 
          text: 'B) Tek sunucu kullanmak', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) Daha fazla RAM eklemek', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
    {
      id: 20,
      text: 'SQL’de birden fazla tabloyu birleştirmek için hangi komut kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) JOIN', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, backend: 25 } 
        },
        { 
          text: 'B) SELECT', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
        { 
          text: 'C) WHERE', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, backend: 5 } 
        },
      ]
    },
  ],
  siber: [
    {
      id: 11,
      text: 'Bir sistemde güvenlik açığını tespit etmek için hangi yöntem kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Penetrasyon testi', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 20, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) Rastgele tarama', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) Kullanıcı görüşleri', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['communication'], 
          score: { communication: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 12,
      text: 'Bir ağda kimlik avı (phishing) saldırılarını önlemek için hangi yöntem kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Kullanıcı eğitimi ve filtreleme', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'communication', 'teamwork'], 
          score: { technical: 25, communication: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) Şifreyi değiştirmek', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) Hiçbir önlem almamak', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 13,
      text: 'Bir sistemde şifreleme için hangi algoritma yaygın olarak kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) AES', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) MD5', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) SHA-1', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 14,
      text: 'Bir DDoS saldırısını tespit etmek için hangi araç kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Intrusion Detection System (IDS)', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) Firewall', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) VPN', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 15,
      text: 'Bir sistemde yetkisiz erişimi önlemek için hangi protokol kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) OAuth', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) HTTP', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) FTP', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 16,
      text: 'Bir ağda güvenlik duvarı (firewall) neyi amaçlar?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Yetkisiz trafiği engellemek', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) Hızı artırmak', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) Veriyi şifrelemek', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 17,
      text: 'Bir sistemde veri sızıntısını önlemek için hangi yöntem uygulanır?',
      hasAbsoluteCorrect: false,
      answers: [
        { 
          text: 'A) Veri şifreleme ve erişim kontrolü', 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 20 } 
        },
        { 
          text: 'B) Açık bağlantı bırakmak', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) Yedekleme yapmamak', 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 18,
      text: 'Bir ağda kötü amaçlı yazılımı tespit etmek için hangi araç kullanılır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Antivirus yazılımı', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) Firewall', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) Router', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 19,
      text: 'Bir sistemde güvenlik güncellemesi ne zaman yapılmalıdır?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) Yeni bir tehdit tespit edildiğinde', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) Hiç yapılmamalı', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) Yalnızca sistem çöktüğünde', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
    {
      id: 20,
      text: 'Bir ağda izinsiz erişimi engellemek için hangi protokol tercih edilir?',
      hasAbsoluteCorrect: true,
      answers: [
        { 
          text: 'A) HTTPS', 
          isCorrect: true, 
          contribution: 0.15,
          focusAreas: ['technical', 'analysis', 'teamwork'], 
          score: { technical: 25, analysis: 15, teamwork: 15, siber: 25 } 
        },
        { 
          text: 'B) HTTP', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
        { 
          text: 'C) FTP', 
          isCorrect: false, 
          contribution: 0.05,
          focusAreas: ['technical'], 
          score: { technical: 5, siber: 5 } 
        },
      ]
    },
  ],
};
