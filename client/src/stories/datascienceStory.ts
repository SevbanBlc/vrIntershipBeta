import { StoryPart } from '../types';

export const datascienceStoryParts: StoryPart[] = [
  {
    title: "Veri Laboratuvarı",
    description: "Veri bilimi ekibinin bulunduğu laboratuvara giriyorsun. Her yer ekranlar, grafikler ve istatistiklerle dolu. Takım lideri seni karşılayarak, 'Hoş geldin! Bugün seninle birlikte çalışacağız ve gerçek veriler üzerinde analiz yapacağız' diyor.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
    dimension: "data_lab",
    choices: [
      {
        text: "Veri analizi araçlarını incelemek istiyorum",
        consequence: "Teknik becerilerini gösterirsin.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "tool_selection"
      },
      {
        text: "Ekip üyeleriyle tanışmak istiyorum",
        consequence: "İletişim becerilerini geliştirirsin.",
        score: { analysis: 2, communication: 5 },
        nextDimension: "team_interaction"
      }
    ]
  },
  {
    title: "Araç Seçimi",
    description: "Veri analizi için hangi araçları tercih edeceğini düşünüyorsun. Takım lideri farklı seçenekler olduğunu belirtiyor.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=1000",
    dimension: "tool_selection",
    choices: [
      {
        text: "Python ve popüler kütüphaneleri kullan",
        consequence: "Esnek ve güçlü bir analiz ortamı seçersin.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "first_analysis"
      },
      {
        text: "R ile istatistiksel analiz yap",
        consequence: "İstatistiksel analizler için özelleşmiş bir dil seçersin.",
        score: { analysis: 4, communication: 2 },
        nextDimension: "first_analysis"
      },
      {
        text: "SQL ile veri sorgulama yap",
        consequence: "Veritabanı odaklı bir yaklaşım seçersin.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "first_analysis"
      }
    ]
  },
  {
    title: "Ekip Etkileşimi",
    description: "Veri bilimi ekibiyle tanışıyorsun. Farklı uzmanlık alanlarından gelen profesyoneller var: veri mühendisleri, veri analistleri, makine öğrenimi uzmanları ve istatistikçiler.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    dimension: "team_interaction",
    choices: [
      {
        text: "Herkesin uzmanlık alanı hakkında sorular sor",
        consequence: "Ekibin çalışma dinamiklerini daha iyi anlarsın.",
        score: { analysis: 3, communication: 5 },
        nextDimension: "first_analysis"
      },
      {
        text: "Kendi deneyimlerinden bahset",
        consequence: "Kendini tanıtırsın ama çok konuşarak ilk izlenimde yorucu olabilirsin.",
        score: { analysis: 2, communication: 3 },
        nextDimension: "first_analysis"
      }
    ]
  },
  {
    title: "İlk Analiz Görevi",
    description: "Takım lideri sana ilk görevini veriyor: 'Önümüzdeki e-ticaret platformumuzun kullanıcı davranışlarını analiz edip, müşteri segmentasyonu yapmamız gerekiyor. Verileri işleyip anlamlı içgörüler çıkarabilir misin?'",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80&w=1000",
    dimension: "first_analysis",
    choices: [
      {
        text: "Veri temizleme ve keşifsel analiz ile başla",
        consequence: "Metodolojik ve titiz bir yaklaşım sergiliyorsun.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "data_cleaning"
      },
      {
        text: "Hızlıca görselleştirmeler oluştur",
        consequence: "Görsel analiz becerilerini gösteriyorsun ama veri kalitesini gözden kaçırabilirsin.",
        score: { analysis: 3, communication: 4 },
        nextDimension: "visualization"
      },
      {
        text: "Doğrudan müşteri segmentasyonu için kümeleme algoritmaları dene",
        consequence: "Sonuç odaklı çalışıyorsun ama önemli veri hazırlık adımlarını atlıyorsun.",
        score: { analysis: 2, communication: 2 },
        nextDimension: "model_choice"
      }
    ]
  },
  {
    title: "Veri Temizleme",
    description: "Verileri incelediğinde birçok eksik değer, aykırı değer ve format sorunları olduğunu fark ediyorsun. Temizleme işlemi zaman alacak ama gerekli.",
    image: "https://images.unsplash.com/photo-1563674923-215069c3fbb6?auto=format&fit=crop&q=80&w=1000",
    dimension: "data_cleaning",
    choices: [
      {
        text: "Detaylı temizleme işlemi yap",
        consequence: "Titiz çalışman sonraki analizlerinin güvenilirliğini artırıyor.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "feature_engineering"
      },
      {
        text: "Temel temizleme ile yetin",
        consequence: "Zaman kazanıyorsun ama bazı sorunlar gözden kaçabilir.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "feature_engineering"
      }
    ]
  },
  {
    title: "Veri Görselleştirme",
    description: "Veri setini görselleştirmek için çalışıyorsun. Nasıl bir görselleştirme yaklaşımı izleyeceksin?",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    dimension: "visualization",
    choices: [
      {
        text: "İnteraktif dashboard oluştur",
        consequence: "Görsel sunumun çok beğeniliyor, ancak daha çok zaman harcadın.",
        score: { analysis: 4, communication: 5 },
        nextDimension: "feature_engineering"
      },
      {
        text: "Statik ama detaylı grafikler hazırla",
        consequence: "Etkili ve hızlı bir görselleştirme yapıyorsun.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "feature_engineering"
      }
    ]
  },
  {
    title: "Özellik Mühendisliği",
    description: "Verilerden daha anlamlı özellikler çıkarman gerekiyor. Müşteri davranışlarını daha iyi modellemek için hangi yaklaşımı kullanacaksın?",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000",
    dimension: "feature_engineering",
    choices: [
      {
        text: "Otomatik özellik çıkarımı kullan",
        consequence: "Hızlı sonuç alıyorsun ama özellikler üzerinde kontrolün az.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "model_choice"
      },
      {
        text: "Manuel olarak alan bilgisine dayanarak özellikler oluştur",
        consequence: "Daha anlamlı ve yorumlanabilir özellikler elde ediyorsun.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "model_choice"
      }
    ]
  },
  {
    title: "Model Seçimi",
    description: "Verileri analiz ettin ve şimdi bir makine öğrenimi modeli seçmen gerekiyor. Hangi yaklaşımı tercih edeceksin?",
    image: "https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&q=80&w=1000",
    dimension: "model_choice",
    choices: [
      {
        text: "K-Means kümeleme algoritması kullan",
        consequence: "Klasik ve anlaşılır bir yöntem seçiyorsun.",
        score: { analysis: 4, communication: 3 },
        nextDimension: "model_evaluation"
      },
      {
        text: "Hiyerarşik kümeleme yöntemini kullan",
        consequence: "Daha karmaşık ama detaylı bir analiz sunuyorsun.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "model_evaluation"
      },
      {
        text: "DBSCAN gibi yoğunluk tabanlı bir algoritma kullan",
        consequence: "Karmaşık veri kümeleri için uygun bir seçim yapıyorsun.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "model_evaluation"
      }
    ]
  },
  {
    title: "Model Değerlendirme",
    description: "Modelinin performansını değerlendirme zamanı geldi. Farklı küme sayıları ve parametrelerle denemeler yapıyorsun.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1000",
    dimension: "model_evaluation",
    choices: [
      {
        text: "Silhouette skoru gibi metrikler kullan",
        consequence: "Kantitatif bir değerlendirme yapıyorsun.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "presentation"
      },
      {
        text: "Görsel değerlendirme yap",
        consequence: "Kümelerin yorumlanabilirliğine odaklanıyorsun.",
        score: { analysis: 3, communication: 4 },
        nextDimension: "presentation"
      }
    ]
  },
  {
    title: "Sonuçların Sunumu",
    description: "Analizlerini tamamladın ve şimdi bulgularını ekibe sunma zamanı. Takım lideri ve diğer ekip üyeleri seni dinliyor.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000",
    dimension: "presentation",
    choices: [
      {
        text: "Teknik detaylara odaklanan bir sunum yap",
        consequence: "Analitik becerilerini gösteriyorsun ama herkes anlamayabilir.",
        score: { analysis: 5, communication: 2 },
        nextDimension: "feedback"
      },
      {
        text: "İş etkisine odaklanan bir sunum yap",
        consequence: "Herkesin anlayabileceği, sonuç odaklı bir sunum yapıyorsun.",
        score: { analysis: 3, communication: 5 },
        nextDimension: "feedback"
      },
      {
        text: "Hem teknik detayları hem iş etkisini dengeleyen bir sunum yap",
        consequence: "Kapsamlı ve dengeli bir yaklaşım sergiliyorsun.",
        score: { analysis: 4, communication: 4 },
        nextDimension: "feedback"
      }
    ]
  },
  {
    title: "Geri Bildirim",
    description: "Sunumunun ardından takım lideri geri bildirim veriyor: 'Analiz yaklaşımın ve bulduğun müşteri segmentleri çok değerli. Peki bundan sonra ne yapacağız?'",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80&w=1000",
    dimension: "feedback",
    choices: [
      {
        text: "Segmentlere özel pazarlama stratejileri öner",
        consequence: "İş odaklı düşünce yapın takdir ediliyor.",
        score: { analysis: 3, communication: 5 },
        nextDimension: "project_continuation"
      },
      {
        text: "Daha fazla veri toplama ve analiz için önerilerde bulun",
        consequence: "Analitik derinliğini gösteriyorsun.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "project_continuation"
      }
    ]
  },
  {
    title: "Projenin Devamı",
    description: "Takım lideri projenin başarısından etkilenmiş görünüyor ve sana yeni bir teklif sunuyor: 'Bu müşteri segmentasyonu projesi için bir makine öğrenmesi modeli geliştirebilir ve bunu sürekli güncelleyen bir sistem kurabilir misin?'",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000",
    dimension: "project_continuation",
    choices: [
      {
        text: "Hevesle kabul et ve proje planı öner",
        consequence: "İnisiyatif alarak liderlik özelliklerini gösteriyorsun.",
        score: { analysis: 4, communication: 5 },
        nextDimension: "success"
      },
      {
        text: "Yardım isteyerek kabul et",
        consequence: "Takım çalışmasına değer verdiğini gösteriyorsun.",
        score: { analysis: 3, communication: 4 },
        nextDimension: "success"
      }
    ]
  }
];
