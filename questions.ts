import { Question } from './types';

export const questions: Question[] = [
  {
    question: "Bir proje üzerinde çalışırken en çok neye önem verirsin?",
    answers: [
      {
        text: "Detaylara ve teknik mükemmelliğe",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 3,
          backend: 4,
          database: 5,
          security: 5,
          devops: 4,
          gamedev: 4,
          datascience: 5
        }
      },
      {
        text: "Kullanıcı deneyimine ve tasarıma",
        score: {
          analysis: 3,
          communication: 4,
          frontend: 5,
          backend: 2,
          database: 1,
          security: 2,
          devops: 2,
          gamedev: 5,
          datascience: 3
        }
      },
      {
        text: "Proje yönetimine ve iş birliğine",
        score: {
          analysis: 2,
          communication: 5,
          frontend: 3,
          backend: 3,
          database: 2,
          security: 3,
          devops: 5,
          gamedev: 3,
          datascience: 2
        }
      },
      {
        text: "Performans ve optimizasyona",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 4,
          backend: 5,
          database: 5,
          security: 4,
          devops: 5,
          gamedev: 4,
          datascience: 4
        }
      }
    ]
  },
  {
    question: "Takım içi bir anlaşmazlık durumunda genellikle nasıl davranırsın?",
    answers: [
      {
        text: "Verilerle ve mantıkla konuşur, objektif kalmaya çalışırım",
        score: {
          analysis: 5,
          communication: 3,
          frontend: 3,
          backend: 4,
          database: 5,
          security: 4,
          devops: 3,
          gamedev: 2,
          datascience: 5
        }
      },
      {
        text: "Herkesin görüşünü dinler ve ortak nokta bulmaya çalışırım",
        score: {
          analysis: 3,
          communication: 5,
          frontend: 4,
          backend: 3,
          database: 2,
          security: 3,
          devops: 4,
          gamedev: 4,
          datascience: 3
        }
      },
      {
        text: "Kendi deneyimlerime dayanarak en doğru seçeneği savunurum",
        score: {
          analysis: 4,
          communication: 2,
          frontend: 3,
          backend: 4,
          database: 3,
          security: 4,
          devops: 4,
          gamedev: 3,
          datascience: 3
        }
      },
      {
        text: "Sorunu çözecek yenilikçi fikirler önermeye çalışırım",
        score: {
          analysis: 4,
          communication: 4,
          frontend: 5,
          backend: 3,
          database: 3,
          security: 3,
          devops: 5,
          gamedev: 5,
          datascience: 4
        }
      }
    ]
  },
  {
    question: "Boş zamanlarında genellikle ne yaparsın?",
    answers: [
      {
        text: "Yeni teknolojiler ve araçlar hakkında araştırma yaparım",
        score: {
          analysis: 4,
          communication: 2,
          frontend: 4,
          backend: 4,
          database: 3,
          security: 5,
          devops: 5,
          gamedev: 3,
          datascience: 4
        }
      },
      {
        text: "Video oyunları oynar veya film/dizi izlerim",
        score: {
          analysis: 2,
          communication: 3,
          frontend: 3,
          backend: 2,
          database: 1,
          security: 2,
          devops: 2,
          gamedev: 5,
          datascience: 2
        }
      },
      {
        text: "Kitap okurum veya müzik dinlerim",
        score: {
          analysis: 4,
          communication: 3,
          frontend: 3,
          backend: 3,
          database: 2,
          security: 2,
          devops: 2,
          gamedev: 3,
          datascience: 3
        }
      },
      {
        text: "Arkadaşlarımla zaman geçiririm",
        score: {
          analysis: 1,
          communication: 5,
          frontend: 3,
          backend: 2,
          database: 1,
          security: 1,
          devops: 2,
          gamedev: 3,
          datascience: 2
        }
      },
      {
        text: "Kod yazarak kişisel projeler geliştiririm",
        score: {
          analysis: 5,
          communication: 1,
          frontend: 5,
          backend: 5,
          database: 4,
          security: 4,
          devops: 4,
          gamedev: 4,
          datascience: 5
        }
      }
    ]
  },
  {
    question: "Bir problem ile karşılaştığında genellikle nasıl yaklaşırsın?",
    answers: [
      {
        text: "Sorunu parçalara ayırır ve sistematik olarak çözmeye çalışırım",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 3,
          backend: 5,
          database: 5,
          security: 5,
          devops: 4,
          gamedev: 3,
          datascience: 5
        }
      },
      {
        text: "Yaratıcı çözümler bulmak için beyin fırtınası yaparım",
        score: {
          analysis: 3,
          communication: 4,
          frontend: 5,
          backend: 3,
          database: 2,
          security: 3,
          devops: 3,
          gamedev: 5,
          datascience: 3
        }
      },
      {
        text: "Başkalarından yardım ve görüş alırım",
        score: {
          analysis: 2,
          communication: 5,
          frontend: 3,
          backend: 2,
          database: 2,
          security: 2,
          devops: 3,
          gamedev: 3,
          datascience: 3
        }
      },
      {
        text: "Benzer sorunları nasıl çözdüğüme dair geçmiş deneyimlerime bakarım",
        score: {
          analysis: 4,
          communication: 3,
          frontend: 4,
          backend: 4,
          database: 4,
          security: 4,
          devops: 4,
          gamedev: 4,
          datascience: 4
        }
      }
    ]
  },
  {
    question: "Hangisini yapmaktan daha çok keyif alırsın?",
    answers: [
      {
        text: "Görsel arayüzler tasarlamak ve geliştirmek",
        score: {
          analysis: 2,
          communication: 3,
          frontend: 5,
          backend: 1,
          database: 1,
          security: 1,
          devops: 1,
          gamedev: 4,
          datascience: 2
        }
      },
      {
        text: "Sistemlerin arka planını ve altyapısını kurmak",
        score: {
          analysis: 4,
          communication: 2,
          frontend: 2,
          backend: 5,
          database: 3,
          security: 3,
          devops: 5,
          gamedev: 3,
          datascience: 2
        }
      },
      {
        text: "Verileri analiz etmek ve anlamlandırmak",
        score: {
          analysis: 5,
          communication: 3,
          frontend: 1,
          backend: 2,
          database: 5,
          security: 2,
          devops: 2,
          gamedev: 2,
          datascience: 5
        }
      },
      {
        text: "Güvenlik açıklarını tespit etmek ve çözmek",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 1,
          backend: 3,
          database: 3,
          security: 5,
          devops: 2,
          gamedev: 1,
          datascience: 2
        }
      },
      {
        text: "Oyun mekanikleri ve etkileşimli sistemler geliştirmek",
        score: {
          analysis: 3,
          communication: 2,
          frontend: 3,
          backend: 3,
          database: 1,
          security: 1,
          devops: 1,
          gamedev: 5,
          datascience: 1
        }
      }
    ]
  },
  {
    question: "Çalışma ortamında en çok neye değer verirsin?",
    answers: [
      {
        text: "Bağımsızlık ve esnek çalışma saatleri",
        score: {
          analysis: 3,
          communication: 2,
          frontend: 4,
          backend: 3,
          database: 3,
          security: 4,
          devops: 3,
          gamedev: 3,
          datascience: 4
        }
      },
      {
        text: "İş birliği ve ekip çalışması",
        score: {
          analysis: 2,
          communication: 5,
          frontend: 3,
          backend: 3,
          database: 2,
          security: 3,
          devops: 4,
          gamedev: 5,
          datascience: 3
        }
      },
      {
        text: "Kariyerimde ilerleme ve kendimi geliştirme fırsatları",
        score: {
          analysis: 4,
          communication: 3,
          frontend: 4,
          backend: 4,
          database: 4,
          security: 4,
          devops: 4,
          gamedev: 4,
          datascience: 4
        }
      },
      {
        text: "Teknik mükemmellik ve yüksek kalite standartları",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 3,
          backend: 5,
          database: 5,
          security: 5,
          devops: 5,
          gamedev: 3,
          datascience: 5
        }
      }
    ]
  },
  {
    question: "Aşağıdaki ifadelerden hangisi seni en iyi tanımlar?",
    answers: [
      {
        text: "Detaycı ve analitik biriyim",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 2,
          backend: 4,
          database: 5,
          security: 5,
          devops: 3,
          gamedev: 2,
          datascience: 5
        }
      },
      {
        text: "Yaratıcı ve yenilikçi biriyim",
        score: {
          analysis: 3,
          communication: 3,
          frontend: 5,
          backend: 2,
          database: 1,
          security: 2,
          devops: 2,
          gamedev: 5,
          datascience: 3
        }
      },
      {
        text: "Pratik ve çözüm odaklı biriyim",
        score: {
          analysis: 4,
          communication: 3,
          frontend: 3,
          backend: 4,
          database: 3,
          security: 3,
          devops: 5,
          gamedev: 3,
          datascience: 3
        }
      },
      {
        text: "İletişimi güçlü ve sosyal biriyim",
        score: {
          analysis: 1,
          communication: 5,
          frontend: 3,
          backend: 2,
          database: 1,
          security: 2,
          devops: 3,
          gamedev: 2,
          datascience: 2
        }
      }
    ]
  },
  {
    question: "Bir projeyi tamamladıktan sonra en çok neyi görmek istersin?",
    answers: [
      {
        text: "Ürünün kullanıcılar tarafından beğenilmesi",
        score: {
          analysis: 2,
          communication: 4,
          frontend: 5,
          backend: 3,
          database: 2,
          security: 2,
          devops: 3,
          gamedev: 5,
          datascience: 3
        }
      },
      {
        text: "Kodun temiz, verimli ve sürdürülebilir olması",
        score: {
          analysis: 5,
          communication: 2,
          frontend: 3,
          backend: 5,
          database: 4,
          security: 4,
          devops: 4,
          gamedev: 3,
          datascience: 3
        }
      },
      {
        text: "Sistemi geliştiren bir takımın parçası olmak",
        score: {
          analysis: 2,
          communication: 5,
          frontend: 3,
          backend: 3,
          database: 2,
          security: 2,
          devops: 4,
          gamedev: 4,
          datascience: 3
        }
      },
      {
        text: "Karmaşık sorunlara etkili çözümler sunmuş olmak",
        score: {
          analysis: 5,
          communication: 3,
          frontend: 3,
          backend: 4,
          database: 5,
          security: 5,
          devops: 3,
          gamedev: 3,
          datascience: 5
        }
      }
    ]
  },
  {
    question: "Yeni bir teknoloji öğrenirken genellikle nasıl yaklaşırsın?",
    answers: [
      {
        text: "Resmi dokümantasyonu okur ve adım adım öğrenirim",
        score: {
          analysis: 4,
          communication: 2,
          frontend: 3,
          backend: 4,
          database: 4,
          security: 4,
          devops: 3,
          gamedev: 2,
          datascience: 4
        }
      },
      {
        text: "Pratik yaparak ve deneme-yanılma yöntemiyle öğrenirim",
        score: {
          analysis: 3,
          communication: 3,
          frontend: 5,
          backend: 3,
          database: 3,
          security: 3,
          devops: 4,
          gamedev: 5,
          datascience: 3
        }
      },
      {
        text: "Online kurslar ve eğitim videoları izlerim",
        score: {
          analysis: 3,
          communication: 3,
          frontend: 4,
          backend: 3,
          database: 3,
          security: 3,
          devops: 3,
          gamedev: 3,
          datascience: 3
        }
      },
      {
        text: "Topluluk forumlarına katılır ve başkalarıyla bilgi paylaşırım",
        score: {
          analysis: 2,
          communication: 5,
          frontend: 3,
          backend: 2,
          database: 2,
          security: 3,
          devops: 3,
          gamedev: 3,
          datascience: 2
        }
      }
    ]
  },
  {
    question: "Hangisi senin için daha önemlidir?",
    answers: [
      {
        text: "Teknik bilgi ve uzmanlık",
        score: {
          analysis: 5,
          communication: 1,
          frontend: 3,
          backend: 5,
          database: 5,
          security: 5,
          devops: 4,
          gamedev: 3,
          datascience: 5
        }
      },
      {
        text: "İletişim ve kişilerarası beceriler",
        score: {
          analysis: 1,
          communication: 5,
          frontend: 3,
          backend: 2,
          database: 1,
          security: 2,
          devops: 3,
          gamedev: 3,
          datascience: 2
        }
      },
      {
        text: "Problem çözme ve yaratıcı düşünme",
        score: {
          analysis: 4,
          communication: 3,
          frontend: 4,
          backend: 4,
          database: 3,
          security: 4,
          devops: 3,
          gamedev: 5,
          datascience: 4
        }
      },
      {
        text: "Organizasyon ve zaman yönetimi",
        score: {
          analysis: 3,
          communication: 4,
          frontend: 3,
          backend: 3,
          database: 3,
          security: 2,
          devops: 5,
          gamedev: 2,
          datascience: 3
        }
      }
    ]
  }
];