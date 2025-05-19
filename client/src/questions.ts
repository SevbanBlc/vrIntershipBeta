import { Question } from './types';

export const commonQuestions: Question[] = [
  {
    id: 1,
    text: "Bir problemle karşılaştığında genellikle nasıl bir yaklaşım sergilersin?",
    answers: [
      {
        text: "Teknik ve analiz odaklı derinlemesine çözüm üretirim",
        score: {
          analyticalMind: 20,
          analysis: 16,
          backend: 20,
          technical: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi ve farklı fikirler geliştirerek çözüm ararım",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Ekip arkadaşlarımla işbirliği yaparak karar veririm",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 2,
    text: "Zamanını en verimli nasıl kullanmayı tercih edersin?",
    answers: [
      {
        text: "Planlı ve organize bir şekilde çalışırım",
        score: {
          analyticalMind: 20,
          analysis: 16,
          backend: 20,
          technical: 16,
          siber: 14,
        },
      },
      {
        text: "Esnek bir şekilde, ilham geldiğinde çalışırım",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Diğer insanlarla birlikte çalışarak zamanı paylaşırım",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 3,
    text: "Bir projede seni motive eden şey nedir?",
    answers: [
      {
        text: "Teknik zorlukları aşarak motive olurum",
        score: {
          technical: 20,
          analyticalMind: 16,
          backend: 20,
          analysis: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi ve özgün fikirler üretmek beni motive eder",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Ekip başarısına katkıda bulunmak beni motive eder",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 4,
    text: "Hata yaptığında nasıl tepki verirsin?",
    answers: [
      {
        text: "Sorunun kökünü analiz edip öğrenirim",
        score: {
          analyticalMind: 20,
          analysis: 16,
          backend: 20,
          technical: 16,
          siber: 14,
        },
      },
      {
        text: "Yeni bir yaklaşım deneyerek hatayı düzeltirim",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Ekip arkadaşlarımdan destek isterim",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 5,
    text: "Bir projede en çok hangi yönünle öne çıkarsın?",
    answers: [
      {
        text: "Teknik bilgim ve problem çözme yeteneğimle öne çıkarım",
        score: {
          technical: 20,
          analyticalMind: 16,
          backend: 20,
          analysis: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi düşünce ve yenilikçi fikirlerimle öne çıkarım",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "İletişim yeteneğim ve ekip çalışmam ile öne çıkarım",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 6,
    text: "Bir görevi tamamlamak için neye odaklanırsın?",
    answers: [
      {
        text: "Doğru ve mantıklı sonuçlara ulaşmaya",
        score: {
          analyticalMind: 20,
          analysis: 16,
          backend: 20,
          technical: 16,
          siber: 14,
        },
      },
      {
        text: "Eğlenceli ve dikkat çekici bir çıktıya",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Herkesin katkıda bulunduğu bir sürece",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 7,
    text: "Bir ekipte rolün ne olurdu?",
    answers: [
      {
        text: "Teknik lider veya uzman",
        score: {
          technical: 20,
          analyticalMind: 16,
          backend: 20,
          analysis: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi fikirlerin öncüsü",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Koordinatör veya destekleyici",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 8,
    text: "Yeni bir beceri öğrenmek seni nasıl motive eder?",
    answers: [
      {
        text: "Derinlemesine anlamak ve uygulamak",
        score: {
          technical: 20,
          analyticalMind: 16,
          backend: 20,
          analysis: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi projelerde kullanma şansı",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Ekiple paylaşarak geliştirmek",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 9,
    text: "Bir projede seni en çok zorlayan şey nedir?",
    answers: [
      {
        text: "Karmaşık teknik sorunlar",
        score: {
          technical: 20,
          analyticalMind: 16,
          backend: 20,
          analysis: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi bir fikir bulamamak",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Ekip içi iletişim kopuklukları",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
  {
    id: 10,
    text: "Bir projeyi bitirdiğinde nasıl bir hisse kapılırsın?",
    answers: [
      {
        text: "Her şeyin kusursuz işlediğini görmek",
        score: {
          technical: 20,
          analyticalMind: 16,
          backend: 20,
          analysis: 16,
          siber: 14,
        },
      },
      {
        text: "Yenilikçi bir eser ortaya koymak",
        score: {
          innovationDrive: 20,
          innovation: 16,
          frontend: 20,
          technical: 14,
        },
      },
      {
        text: "Ekip olarak başarıyı paylaşmak",
        score: {
          teamOrientation: 20,
          teamwork: 16,
          communication: 16,
          backend: 14,
        },
      },
    ],
  },
];

export const careerQuestions: { [key: string]: Question[] } = {
  frontend: [
    {
      id: 11,
      text: "React Durum Yönetimi: Aşağıdakilerden hangisi React’te bir bileşenin state’ini güncellemek için kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) setState()", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis", "innovation"], score: { frontend: 41, technical: 27, analysis: 20 } },
        { text: "B) updateState()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
        { text: "C) changeState()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 12,
      text: "CSS Flexbox ile ilgili: Flex container içinde elemanları yatay hizalamak için hangi property kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) align-items", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
        { text: "B) justify-content", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "innovation"], score: { frontend: 41, technical: 27, innovation: 20 } },
        { text: "C) flex-direction", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
      ],
    },
    {
      id: 13,
      text: "Bir web sayfasında performans optimizasyonu için hangi yöntemi kullanırsın?",
      hasAbsoluteCorrect: false,
      answers: [
        { text: "A) Gereksiz CSS ve JS dosyalarını temizlemek", contribution: 0.15, focusAreas: ["technical", "analysis"], score: { frontend: 41, technical: 27, analysis: 20 } },
        { text: "B) Görselleri sıkıştırmak", contribution: 0.15, focusAreas: ["technical", "innovation"], score: { frontend: 41, technical: 27, innovation: 20 } },
        { text: "C) Her şeyi olduğu gibi bırakmak", contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 14,
      text: "HTML5 ile ilgili: Hangi etiket, bir web sayfasında ses dosyalarını gömmek için kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) <audio>", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "innovation"], score: { frontend: 41, technical: 27, innovation: 20 } },
        { text: "B) <video>", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
        { text: "C) <sound>", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
      ],
    },
    {
      id: 15,
      text: "JavaScript’te olay dinleyicisi (event listener) eklemek için hangi metod kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) addEventListener()", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { frontend: 41, technical: 27, analysis: 20 } },
        { text: "B) onClick()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
        { text: "C) listenEvent()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 16,
      text: "Responsive tasarımda hangi birim en çok tercih edilir?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) px", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
        { text: "B) em", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
        { text: "C) rem", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "innovation"], score: { frontend: 41, technical: 27, innovation: 20 } },
      ],
    },
    {
      id: 17,
      text: "Bir CSS dosyasında hangi özellik, bir elementin yuvarlak köşelerini ayarlar?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) border-radius", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "innovation"], score: { frontend: 41, technical: 27, innovation: 20 } },
        { text: "B) border-style", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
        { text: "C) border-width", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, innovation: 7 } },
      ],
    },
    {
      id: 18,
      text: "React’te bileşenler arası veri paylaşımı için hangi yöntem tercih edilir?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) State", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
        { text: "B) Props", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { frontend: 41, technical: 27, analysis: 20 } },
        { text: "C) Context", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 19,
      text: "Bir web sayfasında erişilebilirlik (accessibility) için hangi etiketi kullanırsın?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) <nav>", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "communication"], score: { frontend: 41, technical: 27, communication: 20 } },
        { text: "B) <div>", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, communication: 7 } },
        { text: "C) <span>", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, communication: 7 } },
      ],
    },
    {
      id: 20,
      text: "JavaScript’te bir diziyi sıralamak için hangi metod kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) order()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
        { text: "B) arrange()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { frontend: 11, technical: 7, analysis: 7 } },
        { text: "C) sort()", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { frontend: 41, technical: 27, analysis: 20 } },
      ],
    },
  ],
  backend: [
    {
      id: 11,
      text: "SQL’de birden fazla tabloyu birleştirmek için hangi anahtar kelime kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) JOIN", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "B) MERGE", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "C) UNION", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 12,
      text: "Bir REST API’sinde kaynak oluşturmak için hangi HTTP metodu kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) GET", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "B) POST", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "C) PUT", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 13,
      text: "Node.js’te modül import etmek için hangi anahtar kelime kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) import", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "B) include", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "C) require", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
      ],
    },
    {
      id: 14,
      text: "Veritabanı performansını artırmak için hangi yöntem kullanılır?",
      hasAbsoluteCorrect: false,
      answers: [
        { text: "A) Index oluşturma", contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "B) Sorguları önbelleğe alma", contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "C) Her sorguyu ayrı ayrı çalıştırma", contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 15,
      text: "Express.js’te bir middleware tanımlamak için hangi metod kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) app.use()", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "B) app.route()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "C) app.middleware()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 16,
      text: "Bir API’nin güvenliğini artırmak için hangi yöntem kullanılır?",
      hasAbsoluteCorrect: false,
      answers: [
        { text: "A) JWT ile kimlik doğrulama", contribution: 0.15, focusAreas: ["technical", "siber"], score: { backend: 41, technical: 27, siber: 20 } },
        { text: "B) HTTPS kullanımı", contribution: 0.15, focusAreas: ["technical", "siber"], score: { backend: 41, technical: 27, siber: 20 } },
        { text: "C) Şifreleri açık metin olarak saklama", contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, siber: 7 } },
      ],
    },
    {
      id: 17,
      text: "SQL’de bir tablodan veri silmek için hangi komut kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) DELETE", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "B) DROP", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "C) REMOVE", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 18,
      text: "MongoDB’de bir koleksiyona veri eklemek için hangi metod kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) addOne()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "B) insertOne()", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "C) saveOne()", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 19,
      text: "Bir backend uygulamasında hata günlüğü (logging) için hangi araç yaygın olarak kullanılır?",
      hasAbsoluteCorrect: false,
      answers: [
        { text: "A) Winston", contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "B) Morgan", contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
        { text: "C) Console.log", contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 20,
      text: "Bir veritabanında birincil anahtar (primary key) ne için kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) Verileri sıralamak", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "B) Verileri şifrelemek", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { backend: 11, technical: 7, analysis: 7 } },
        { text: "C) Her satırı benzersiz şekilde tanımlamak", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "analysis"], score: { backend: 41, technical: 27, analysis: 20 } },
      ],
    },
  ],
  siber: [
    {
      id: 11,
      text: "Bir ağın güvenliğini test etmek için hangi yöntem kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) Penetrasyon testi", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "B) Kod inceleme", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "C) Veritabanı yedekleme", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 12,
      text: "Bir sistemdeki güvenlik açıklarını tespit etmek için hangi araç yaygın olarak kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) Git", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "B) Nmap", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "C) Docker", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 13,
      text: "Şifreleme için hangi algoritma asimetrik şifrelemede yaygın olarak kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) AES", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "B) MD5", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "C) RSA", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
      ],
    },
    {
      id: 14,
      text: "Bir sistemde yetkisiz erişimi önlemek için hangi yöntem kullanılır?",
      hasAbsoluteCorrect: false,
      answers: [
        { text: "A) Çok faktörlü kimlik doğrulama", contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "B) Güvenlik duvarı kullanımı", contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "C) Şifreleri düzenli olarak paylaşma", contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 15,
      text: "SQL enjeksiyon saldırılarını önlemek için hangi yöntem kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) Parametreli sorgular", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "B) Veritabanı şifreleme", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "C) Kullanıcı girişlerini filtreleme", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 16,
      text: "Bir ağda kötü amaçlı trafiği tespit etmek için hangi sistem kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) IDS (Intrusion Detection System)", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "B) VPN", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "C) DNS", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 17,
      text: "Bir sistemdeki güvenlik olaylarını izlemek için hangi araç kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) CMS", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "B) SIEM", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "C) CRM", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 18,
      text: "Phishing saldırılarını önlemek için hangi yöntem etkilidir?",
      hasAbsoluteCorrect: false,
      answers: [
        { text: "A) Kullanıcı eğitimi", contribution: 0.15, focusAreas: ["communication", "siber"], score: { siber: 41, communication: 27, analysis: 20 } },
        { text: "B) E-posta filtreleme", contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "C) Tüm e-postaları engelleme", contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 19,
      text: "Bir sistemde şifrelerin güvenliğini artırmak için hangi yöntem kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) Hashing ve salting", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
        { text: "B) Şifreleri açık metin olarak saklama", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "C) Şifreleri düzenli olarak değiştirme", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
      ],
    },
    {
      id: 20,
      text: "Bir ağdaki cihazların güvenliğini sağlamak için hangi protokol kullanılır?",
      hasAbsoluteCorrect: true,
      answers: [
        { text: "A) FTP", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "B) HTTP", isCorrect: false, contribution: 0.05, focusAreas: ["technical"], score: { siber: 11, technical: 7, analysis: 7 } },
        { text: "C) WPA3", isCorrect: true, contribution: 0.15, focusAreas: ["technical", "siber"], score: { siber: 41, technical: 27, analysis: 20 } },
      ],
    },
  ],
};
