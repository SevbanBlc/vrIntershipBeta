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
    text: 'Bir projede ekip arkadaşlarınızla nasıl çalışırsınız?',
    answers: [
      { text: 'Kendi başıma çalışmayı tercih ederim', score: { teamOrientation: 3, communication: 3 } },
      { text: 'Gerekirse iletişim kurarım', score: { teamOrientation: 6, communication: 6 } },
      { text: 'Ekip arkadaşlarımla düzenli iletişim kurarım', score: { teamOrientation: 12, communication: 12 } },
      { text: 'Ekip çalışmasına öncülük ederim', score: { teamOrientation: 18, communication: 18 } },
      { text: 'Herkesi motive ederek liderlik ederim', score: { teamOrientation: 25, communication: 25 } },
    ],
  },
  {
    id: 2,
    text: 'Karmaşık bir sorunu çözmek için nasıl bir yaklaşım izlersiniz?',
    answers: [
      { text: 'Sorunu görmezden gelir, geçmesini beklerim', score: { analyticalMind: 3, analysis: 3 } },
      { text: 'Temel bir çözüm ararım', score: { analyticalMind: 6, analysis: 6 } },
      { text: 'Sorunu parçalara ayırıp analiz ederim', score: { analyticalMind: 12, analysis: 12 } },
      { text: 'Detaylı bir plan yapar, sistematik çözerim', score: { analyticalMind: 18, analysis: 18 } },
      { text: 'Yenilikçi ve analitik bir çözüm bulurum', score: { analyticalMind: 25, analysis: 25 } },
    ],
  },
  {
    id: 3,
    text: 'Yeni bir teknoloji öğrenirken nasıl bir yol izlersiniz?',
    answers: [
      { text: 'Öğrenmekten kaçınırım', score: { technical: 3, analyticalMind: 3 } },
      { text: 'Zorunda kalırsam öğrenirim', score: { technical: 6, analyticalMind: 6 } },
      { text: 'Temel kaynaklardan öğrenmeye çalışırım', score: { technical: 12, analyticalMind: 12 } },
      { text: 'Kapsamlı bir öğrenme planı yaparım', score: { technical: 18, analyticalMind: 18 } },
      { text: 'Hızla öğrenir, projelerde uygularım', score: { technical: 25, analyticalMind: 25 } },
    ],
  },
  {
    id: 4,
    text: 'Bir projede yenilikçi fikirler üretmek sizin için ne kadar önemli?',
    answers: [
      { text: 'Hiç önemli değil', score: { innovationDrive: 3, innovation: 3 } },
      { text: 'Pek önemli değil', score: { innovationDrive: 6, innovation: 6 } },
      { text: 'Bazen önemlidir', score: { innovationDrive: 12, innovation: 12 } },
      { text: 'Çok önemlidir', score: { innovationDrive: 18, innovation: 18 } },
      { text: 'Her zaman önceliklidir', score: { innovationDrive: 25, innovation: 25 } },
    ],
  },
  {
    id: 5,
    text: 'Bir hata yaptığınızda nasıl tepki verirsiniz?',
    answers: [
      { text: 'Hatayı görmezden gelirim', score: { analyticalMind: 3, communication: 3 } },
      { text: 'Hatayı düzeltmeye çalışırım', score: { analyticalMind: 6, communication: 6 } },
      { text: 'Hatayı analiz eder, öğrenirim', score: { analyticalMind: 12, communication: 12 } },
      { text: 'Ekip ile paylaşır, çözüm bulurum', score: { analyticalMind: 18, communication: 18 } },
      { text: 'Hızla düzeltir, tekrarını önlerim', score: { analyticalMind: 25, communication: 25 } },
    ],
  },
  {
    id: 6,
    text: 'Ekip içinde anlaşmazlık olduğunda ne yaparsınız?',
    answers: [
      { text: 'Karışmam, kendi halletsinler', score: { teamOrientation: 3, communication: 3 } },
      { text: 'Gerekirse müdahale ederim', score: { teamOrientation: 6, communication: 6 } },
      { text: 'Tarafları dinler, uzlaştırırım', score: { teamOrientation: 12, communication: 12 } },
      { text: 'Ortak bir çözüm bulurum', score: { teamOrientation: 18, communication: 18 } },
      { text: 'Liderlik eder, çözümü yönetirim', score: { teamOrientation: 25, communication: 25 } },
    ],
  },
  {
    id: 7,
    text: 'Zaman yönetimi sizin için ne kadar önemli?',
    answers: [
      { text: 'Hiç önemli değil', score: { analyticalMind: 3, analysis: 3 } },
      { text: 'Pek önemli değil', score: { analyticalMind: 6, analysis: 6 } },
      { text: 'Bazen önemlidir', score: { analyticalMind: 12, analysis: 12 } },
      { text: 'Çok önemlidir', score: { analyticalMind: 18, analysis: 18 } },
      { text: 'Her zaman önceliklidir', score: { analyticalMind: 25, analysis: 25 } },
    ],
  },
  {
    id: 8,
    text: 'Bir projede görsel estetik ne kadar önemlidir?',
    answers: [
      { text: 'Hiç önemli değil', score: { innovationDrive: 3, innovation: 3, frontend: 3 } },
      { text: 'Pek önemli değil', score: { innovationDrive: 6, innovation: 6, frontend: 6 } },
      { text: 'Bazen önemlidir', score: { innovationDrive: 12, innovation: 12, frontend: 12 } },
      { text: 'Çok önemlidir', score: { innovationDrive: 18, innovation: 18, frontend: 18 } },
      { text: 'Her zaman önceliklidir', score: { innovationDrive: 25, innovation: 25, frontend: 25 } },
    ],
  },
  {
    id: 9,
    text: 'Kod yazarken hata ayıklamayı nasıl yaparsınız?',
    answers: [
      { text: 'Hata ayıklamaktan kaçınırım', score: { technical: 3, analyticalMind: 3 } },
      { text: 'Temel yöntemlerle yaparım', score: { technical: 6, analyticalMind: 6 } },
      { text: 'Hataları sistematik bulurum', score: { technical: 12, analyticalMind: 12 } },
      { text: 'Araçlar ve testlerle yaparım', score: { technical: 18, analyticalMind: 18 } },
      { text: 'Hızla bulur, optimize ederim', score: { technical: 25, analyticalMind: 25 } },
    ],
  },
  {
    id: 10,
    text: 'Bir projede kullanıcı deneyimi ne kadar önemlidir?',
    answers: [
      { text: 'Hiç önemli değil', score: { innovationDrive: 3, communication: 3, frontend: 3 } },
      { text: 'Pek önemli değil', score: { innovationDrive: 6, communication: 6, frontend: 6 } },
      { text: 'Bazen önemlidir', score: { innovationDrive: 12, communication: 12, frontend: 12 } },
      { text: 'Çok önemlidir', score: { innovationDrive: 18, communication: 18, frontend: 18 } },
      { text: 'Her zaman önceliklidir', score: { innovationDrive: 25, communication: 25, frontend: 25 } },
    ],
  },
];

export const careerQuestions: { [key: string]: Question[] } = {
  frontend: [
    {
      id: 11,
      text: 'React’ta bir bileşenin durumunu yönetmek için ne kullanılır?',
      answers: [
        { text: 'useState Hook’u', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'setInterval', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'localStorage', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Redux Saga', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 12,
      text: 'CSS’te Flexbox’un temel amacı nedir?',
      answers: [
        { text: 'Esnek düzenler oluşturmak', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'Animasyonlar oluşturmak', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Veritabanı yönetimi', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'API istekleri yapmak', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 13,
      text: 'JavaScript’te “event bubbling” nedir?',
      answers: [
        { text: 'Olayın DOM’da yukarı yayılması', score: { frontend: 25, technical: 25, analysis: 15 } },
        { text: 'Olayın silinmesi', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Olayın tekrarlanması', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Olayın şifrelenmesi', score: { frontend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 14,
      text: 'Bir web sayfasının performansını artırmak için ne yapılır?',
      answers: [
        { text: 'Resimleri optimize etmek ve lazy loading', score: { frontend: 25, technical: 25, analysis: 15 } },
        { text: 'Daha fazla CSS animasyonu eklemek', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Tüm veriyi tek seferde yüklemek', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'API isteklerini artırmak', score: { frontend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 15,
      text: 'UI/UX tasarımında “kullanıcı yolculuğu” nedir?',
      answers: [
        { text: 'Kullanıcının ürünle etkileşim haritası', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'Kullanıcının şifreleme yöntemi', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Kullanıcının veritabanı erişimi', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Kullanıcının kod yazma süreci', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 16,
      text: 'TypeScript’in JavaScript’e göre avantajı nedir?',
      answers: [
        { text: 'Statik tip kontrolü', score: { frontend: 25, technical: 25, analysis: 15 } },
        { text: 'Daha hızlı yürütme', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Daha az kod yazımı', score: { frontend: 5, technical: 5, analysis: 3 } },
        { text: 'Otomatik şifreleme', score: { frontend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 17,
      text: 'Responsive tasarım için ne kullanılır?',
      answers: [
        { text: 'Media queries ve esnek birimler', score: { frontend: 25, technical: 25, innovation: 15 } },
        { text: 'Sadece sabit genişlikler', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'Veritabanı sorguları', score: { frontend: 5, technical: 5, innovation: 3 } },
        { text: 'API endpoint’leri', score: { frontend: 5, technical: 5, innovation: 3 } },
      ],
    },
    {
      id: 18,
      text: 'React’ta bileşenler arası veri aktarımı için ne kullanılır?',
      answers: [
        { text: 'Props ve Context API', score: { frontend: 25, technical: 25, teamwork: 15 } },
        { text: 'SQL sorguları', score: { frontend: 5, technical: 5, teamwork: 3 } },
        { text: 'CSS sınıfları', score: { frontend: 5, technical: 5, teamwork: 3 } },
        { text: 'HTML etiketleri', score: { frontend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 19,
      text: 'Web erişilebilirliği (accessibility) neden önemlidir?',
      answers: [
        { text: 'Herkesin siteyi kullanabilmesi için', score: { frontend: 25, technical: 25, communication: 15 } },
        { text: 'Daha hızlı yükleme için', score: { frontend: 5, technical: 5, communication: 3 } },
        { text: 'Daha az kod yazmak için', score: { frontend: 5, technical: 5, communication: 3 } },
        { text: 'Veritabanı güvenliği için', score: { frontend: 5, technical: 5, communication: 3 } },
      ],
    },
    {
      id: 20,
      text: 'Frontend’de state yönetimi için hangi araç popülerdir?',
      answers: [
        { text: 'Redux veya Zustand', score: { frontend: 25, technical: 25, teamwork: 15 } },
        { text: 'MySQL', score: { frontend: 5, technical: 5, teamwork: 3 } },
        { text: 'Apache Server', score: { frontend: 5, technical: 5, teamwork: 3 } },
        { text: 'Docker', score: { frontend: 5, technical: 5, teamwork: 3 } },
      ],
    },
  ],
  backend: [
    {
      id: 11,
      text: 'REST API’lerde GET isteği ne için kullanılır?',
      answers: [
        { text: 'Veriyi okumak için', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veriyi güncellemek için', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Veriyi silmek için', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Yeni veri oluşturmak için', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 12,
      text: 'Node.js’de Express framework’ü ne için kullanılır?',
      answers: [
        { text: 'Web uygulamaları ve API’ler oluşturmak için', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veritabanı yönetimi için', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Frontend render için', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Makine öğrenimi modelleri için', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 13,
      text: 'SQL’de JOIN işlemi ne yapar?',
      answers: [
        { text: 'Farklı tabloları birleştirir', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'Tabloyu siler', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Yeni tablo oluşturur', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Veriyi günceller', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 14,
      text: 'Bir API’nin güvenliğini artırmak için ne kullanılır?',
      answers: [
        { text: 'JWT ve OAuth', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'CSS şifreleme', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'HTML sanitization', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'XML formatlama', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 15,
      text: 'Mikroservis mimarisinin avantajı nedir?',
      answers: [
        { text: 'Bağımsız dağıtım ve ölçeklendirme', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Daha az kod yazımı', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Daha hızlı frontend render', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Otomatik veritabanı yönetimi', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 16,
      text: 'Docker’ın temel amacı nedir?',
      answers: [
        { text: 'Uygulamaları konteynerize etmek', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veritabanı yedekleme', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Frontend animasyonları', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Makine öğrenimi eğitimi', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 17,
      text: 'NoSQL veritabanlarının SQL’den farkı nedir?',
      answers: [
        { text: 'Esnek şema ve ölçeklendirme', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'Daha az veri saklama', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Yavaş sorgulama', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Sadece küçük projeler için', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 18,
      text: 'API rate limiting ne için kullanılır?',
      answers: [
        { text: 'Aşırı istekleri önlemek', score: { backend: 25, technical: 25, analysis: 15 } },
        { text: 'Veriyi şifrelemek', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend’i hızlandırmak', score: { backend: 5, technical: 5, analysis: 3 } },
        { text: 'Veritabanını yedeklemek', score: { backend: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 19,
      text: 'Backend’de hata yönetimi için ne kullanılır?',
      answers: [
        { text: 'Try-catch ve middleware', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'CSS hata kodları', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'HTML logları', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Frontend validasyon', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
    {
      id: 20,
      text: 'Bir backend projesinde CI/CD’nin rolü nedir?',
      answers: [
        { text: 'Otomatik test ve dağıtım', score: { backend: 25, technical: 25, teamwork: 15 } },
        { text: 'Veri görselleştirme', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Kullanıcı arayüzü tasarımı', score: { backend: 5, technical: 5, teamwork: 3 } },
        { text: 'Veritabanı şifreleme', score: { backend: 5, technical: 5, teamwork: 3 } },
      ],
    },
  ],
  siber: [
    {
      id: 11,
      text: 'Bir sistemde penetrasyon testi ne için yapılır?',
      answers: [
        { text: 'Güvenlik açıklarını tespit etmek', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanını yedeklemek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Kullanıcı arayüzünü test etmek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'API performansını ölçmek', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 12,
      text: 'SQL Injection saldırısı nedir?',
      answers: [
        { text: 'Veritabanına zararlı sorgu enjeksiyonu', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'CSS kod enjeksiyonu', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'JavaScript animasyon hatası', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend render sorunu', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 13,
      text: 'Bir ağın güvenliğini izlemek için ne kullanılır?',
      answers: [
        { text: 'SIEM sistemleri', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'CSS framework’leri', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'HTML şablonları', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend kütüphaneleri', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 14,
      text: 'Kriptografide “public key” ne için kullanılır?',
      answers: [
        { text: 'Veriyi şifrelemek veya doğrulamak', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanını yedeklemek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend render için', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Kullanıcı arayüzü tasarımı', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 15,
      text: 'DDoS saldırısının amacı nedir?',
      answers: [
        { text: 'Sistemi aşırı yükleyerek erişilemez yapmak', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Kullanıcı verilerini şifrelemek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Web sayfasını hızlandırmak', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Veritabanını optimize etmek', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 16,
      text: 'Bir sistemde “zero-day” açığı nedir?',
      answers: [
        { text: 'Bilinen ama yamalanmamış bir açık', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanı yedekleme hatası', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend render sorunu', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Kullanıcı arayüzü hatası', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 17,
      text: 'Etik hacking’in amacı nedir?',
      answers: [
        { text: 'Güvenlik açıklarını tespit edip düzeltmek', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Sistemi çökertmek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Kullanıcı verilerini çalmak', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Web sayfasını yavaşlatmak', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 18,
      text: 'Bir sistemde log analizi ne için yapılır?',
      answers: [
        { text: 'Güvenlik olaylarını tespit etmek', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Kullanıcı arayüzünü tasarlamak', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Veritabanını şifrelemek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Frontend animasyonları oluşturmak', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 19,
      text: 'Firewall’un temel görevi nedir?',
      answers: [
        { text: 'Ağ trafiğini filtrelemek', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Web sayfasını hızlandırmak', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Kullanıcı verilerini şifrelemek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Veritabanını yedeklemek', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
    {
      id: 20,
      text: 'Siber güvenlikte “phishing” nedir?',
      answers: [
        { text: 'Sahte e-posta veya mesajla bilgi çalmak', score: { siber: 25, technical: 25, analysis: 15 } },
        { text: 'Veritabanını optimize etmek', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'Web sayfasını tasarlamak', score: { siber: 5, technical: 5, analysis: 3 } },
        { text: 'API isteklerini artırmak', score: { siber: 5, technical: 5, analysis: 3 } },
      ],
    },
  ],
};
