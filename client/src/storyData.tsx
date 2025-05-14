export interface Choice {
  text: string;
  score: { [key: string]: number };
  consequence: string;
  nextDimension?: string | null;
}

export interface StoryPart {
  title: string;
  description: string;
  image: string;
  choices: Choice[];
}

 export const backendStoryParts: StoryPart[] = [
  {
    title: "backend",
    description: "Tech şirketinde backend stajyeri olarak ilk günündesiniz. Ödeme API’si yoğun saatlerde yavaşlıyor ve kullanıcılar şikayetçi. Ekibin senden bu sorunu araştırmanı bekliyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000", // Ofis ortamı
    choices: [
      {
        text: "Sistem mimarisini analiz ederek darboğazları bulmaya çalışırım.",
        score: { analysis: 10 },
        consequence: "Sistemin genel yapısını kavrıyorsun ama detaylar eksik kalıyor.",
        nextDimension: "part2A",
      },
      {
        text: "Veritabanı loglarını inceleyerek yavaş sorguları tespit ederim.",
        score: { technical: 10 },
        consequence: "Derin bir içgörü kazanıyorsun ve performansın anahtarını buluyorsun.",
        nextDimension: "part2B",
      },
      {
        text: "API endpoint’lerini test ederek gecikmeleri gözlemlerim.",
        score: { creativity: 5 },
        consequence: "Yüzeydeki sorunları fark ediyorsun ama kök nedenler belirsiz.",
        nextDimension: "part2C",
      },
    ],
  },
  {
    title: "part2A",
    description: "Mimariyi analiz ettin, ancak performans sorunu devam ediyor. Şimdi bir hata fark ediyorsun: Ödeme kayıtları eksik. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1555066930-93e3f0e6e639?q=80&w=1000", // Kod analizi
    choices: [
      {
        text: "Otomatik testler yazarak hatayı izole ederim.",
        score: { technical: 10 },
        consequence: "Testler bir race condition buluyor, sorunu çözmek için bir adım öndesin.",
        nextDimension: "part3A1",
      },
      {
        text: "Ekiple debug oturumu yaparım.",
        score: { communication: 10 },
        consequence: "Ekip çalışmasıyla hatanın önbellek sorunundan kaynaklandığını keşfediyorsun.",
        nextDimension: "part3A2",
      },
      {
        text: "Kodu manuel olarak analiz ederim.",
        score: { analysis: 10 },
        consequence: "Bir doğrulama hatası buluyorsun ama tam çözüm için daha fazla çaba lazım.",
        nextDimension: "part3A3",
      },
    ],
  },
  {
    title: "part2B",
    description: "Log analizlerin başarılı oldu, yavaş sorguları optimize ettin. Ancak şimdi bir veri tutarsızlığı var. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Veri analizi
    choices: [
      {
        text: "Eşleşme algoritmasını refactor ederim.",
        score: { analysis: 10 },
        consequence: "Kod sadeleşiyor ve performans artıyor, takdir alıyorsun.",
        nextDimension: "part3B1",
      },
      {
        text: "Zincir verisi için önbellek katmanı eklerim.",
        score: { technical: 10 },
        consequence: "İlk başta işe yarıyor ama veri kaymaları ortaya çıkıyor.",
        nextDimension: "part3B2",
      },
      {
        text: "Reorg senaryoları için test case üretirim.",
        score: { creativity: 10 },
        consequence: "Sistemsel bir çözüm buluyorsun ve ekibin dikkatini çekiyorsun.",
        nextDimension: "part3B3",
      },
    ],
  },
  {
    title: "part2C",
    description: "Endpoint testlerin yüzeysel sorunları gösterdi, ancak sistem hala kararsız. Loglama ile devam etmelisin. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1581094794329-c811c8c6c9f6?q=80&w=1000", // Teknik çalışma
    choices: [
      {
        text: "Loglamayı genişletirim.",
        score: { technical: 5 },
        consequence: "Veri boğulması yaşıyorsun, anlamlı içgörü çıkarmak zorlaşıyor.",
        nextDimension: "part3C1",
      },
      {
        text: "Dinamik timeout ayarlarım.",
        score: { creativity: 10 },
        consequence: "Sistem daha stabil hale geliyor ama performans düşüyor.",
        nextDimension: "part3C2",
      },
      {
        text: "Eski notlara bakarım.",
        score: { analysis: 10 },
        consequence: "Geçmiş bir bug’ı buluyorsun ve çözüme yaklaşıyorsun.",
        nextDimension: "part3C3",
      },
    ],
  },
  {
    title: "part3A1",
    description: "Testler sayesinde race condition’u buldun, ancak çözüm için ekiple çalışman gerekebilir. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Ekip çalışması
    choices: [
      {
        text: "Ekiple çözüm planlarım.",
        score: { communication: 10 },
        consequence: "Sorun çözülüyor, ekibin güvenini kazanıyorsun.",
        nextDimension: "part4A",
      },
      {
        text: "Kendi başıma düzeltirim.",
        score: { technical: 10 },
        consequence: "Hızlıca çözebiliyorsun ama küçük bir hata kalıyor.",
        nextDimension: "part4A",
      },
    ],
  },
  {
    title: "part3A2",
    description: "Önbellek sorununun farkına vardın, ancak bir danışman desteği alabilirsin. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000", // Danışman görüşmesi
    choices: [
      {
        text: "Dış danışmandan yardım alırım.",
        score: { analysis: 10 },
        consequence: "Danışman yapısal bir hata buluyor, çözüm netleşiyor.",
        nextDimension: "part4A",
      },
      {
        text: "Kendim çözüm üretirim.",
        score: { technical: 10 },
        consequence: "Kısmi bir çözüm buluyorsun ama eksikler kalıyor.",
        nextDimension: "part4A",
      },
    ],
  },
  {
    title: "part3A3",
    description: "Doğrulama hatasını buldun, ancak sistem hala kararsız. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000", // Kod hata ayıklama
    choices: [
      {
        text: "Test case ile hatayı doğrulama.",
        score: { technical: 10 },
        consequence: "Sorun kesinleşiyor ve çözüm için hazır oluyorsun.",
        nextDimension: "part4A",
      },
      {
        text: "Ekiple tartışırım.",
        score: { communication: 10 },
        consequence: "Ekip desteğiyle hatayı çözüyorsun ama zaman kaybediyorsun.",
        nextDimension: "part4A",
      },
    ],
  },
  {
    title: "part3B1",
    description: "Refactor başarılı oldu, şimdi bir hackathon liderliği teklifi aldın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // Hackathon
    choices: [
      {
        text: "Kabul ederim.",
        score: { creativity: 10 },
        consequence: "Liderlik becerilerin gelişiyor ve güven tazeliyorsun.",
        nextDimension: "part4B",
      },
      {
        text: "Reddedip mevcut işe odaklanırım.",
        score: { technical: 10 },
        consequence: "Derinleşiyorsun ve teknik bilgin artıyor.",
        nextDimension: "part4B",
      },
    ],
  },
  {
    title: "part3B2",
    description: "Önbellek katmanı veri kaymalarına yol açtı, bir izleme scripti yazdın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", // Kod yazma
    choices: [
      {
        text: "Scripti optimize ederim.",
        score: { technical: 10 },
        consequence: "Hatalar kontrol altına alınıyor ve takdir görüyorsun.",
        nextDimension: "part4B",
      },
      {
        text: "Ekiple paylaşıp destek alırım.",
        score: { communication: 10 },
        consequence: "Ekip desteğiyle sorun çözülüyor ama zaman alıyor.",
        nextDimension: "part4B",
      },
    ],
  },
  {
    title: "part3B3",
    description: "Test case’ler Leo’nun ilgisini çekti, bir mikro servis projesi teklif edildi. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Proje planlama
    choices: [
      {
        text: "Kabul ederim.",
        score: { creativity: 10 },
        consequence: "Yeni bir sorumluluk alıyorsun ve büyüme fırsatı yakalıyorsun.",
        nextDimension: "part4B",
      },
      {
        text: "Reddedip mevcut görevde kalırım.",
        score: { technical: 10 },
        consequence: "Mevcut sistemde derinleşiyorsun.",
        nextDimension: "part4B",
      },
    ],
  },
  {
    title: "part3C1",
    description: "Loglar boğucu hale geldi, bir aile üyesinin vefat haberi aldın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000", // Hüzünlü an
    choices: [
      {
        text: "Memlekete gidip dinlenirim.",
        score: { creativity: 5 },
        consequence: "Dinlenirken yeni bir fikir buluyorsun.",
        nextDimension: "part4C",
      },
      {
        text: "Çalışmaya devam ederim.",
        score: { technical: 5 },
        consequence: "Yorgunluktan verimsizleşiyorsun.",
        nextDimension: "part4C",
      },
    ],
  },
  {
    title: "part3C2",
    description: "Timeout ayarları sistemi stabilize etti, ama vefat haberi moralini bozdu. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Uçak yolculuğu
    choices: [
      {
        text: "Uçakta çalışırım.",
        score: { technical: 5 },
        consequence: "Yorgunluktan hata yapıyorsun.",
        nextDimension: "part4C",
      },
      {
        text: "Dinlenirim.",
        score: { creativity: 10 },
        consequence: "Zihnin açılıyor ve yeni bir fikirle dönüyorsun.",
        nextDimension: "part4C",
      },
    ],
  },
  {
    title: "part3C3",
    description: "Eski notlarla hatayı düzelttin, ama vefat haberiyle yıkıldın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000", // Hüzünlü an
    choices: [
      {
        text: "Memlekete gidip toparlanırım.",
        score: { creativity: 10 },
        consequence: "Dinlenirken bir algoritma fikri aklına geliyor.",
        nextDimension: "part4C",
      },
      {
        text: "Çalışmaya devam ederim.",
        score: { technical: 5 },
        consequence: "Yorgunluktan verimsizleşiyorsun.",
        nextDimension: "part4C",
      },
    ],
  },
  {
    title: "part4A",
    description: "Sorun çözüldü, ancak yorgunluk hissediyorsun. Leo sana ara vermeni önerdi. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000", // Doğa gezisi
    choices: [
      {
        text: "Tatile çıkarım.",
        score: { creativity: 10 },
        consequence: "Dinlenirken bir çözüm fikri buluyorsun.",
        nextDimension: "part5A",
      },
      {
        text: "Çalışmaya devam ederim.",
        score: { technical: 10 },
        consequence: "Yeni bir bug buluyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyalarımı not ederim.",
        score: { analysis: 10 },
        consequence: "Notların ekibin ilgisini çekiyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part4B",
    description: "Projen başarıyla ilerliyor, bir hackathon veya derinleşme seçimi sunuyorlar. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // Hackathon
    choices: [
      {
        text: "Hackathon’a liderlik ederim.",
        score: { creativity: 10 },
        consequence: "Liderlik becerilerin gelişiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Mevcut işte derinleşirim.",
        score: { technical: 10 },
        consequence: "Teknik bilgin artıyor.",
        nextDimension: "part5B",
      },
    ],
  },
  {
    title: "part4C",
    description: "Memlekete gittin, uçakta dinlenmeyi veya çalışmayı seçebilirsin. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Uçak içi
    choices: [
      {
        text: "Çalışırım.",
        score: { technical: 5 },
        consequence: "Yorgunluktan hata yapıyorsun.",
        nextDimension: "part5A",
      },
      {
        text: "Dinlenirim.",
        score: { creativity: 10 },
        consequence: "Yeni bir fikirle dönüyorsun.",
        nextDimension: "part5B",
      },
    ],
  },
  {
    title: "part5A",
    description: "Dinlenirken çocukluk anılarından bir ödeme algoritması fikri buldun. Bunu test ediyorsun.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000", // İlham anı
    choices: [
      {
        text: "Fikri CTO’ya sunarım.",
        score: { communication: 10 },
        consequence: "CTO ilgileniyor, liderlik teklifi alıyorsun.",
        nextDimension: "part6A",
      },
      {
        text: "Kendi başıma geliştiririm.",
        score: { technical: 10 },
        consequence: "Sistemde yeni bir optimizasyon yapıyorsun.",
        nextDimension: "part6B",
      },
    ],
  },
  {
    title: "part5B",
    description: "Bir bug buldun ve düzeltmen gerekiyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000", // Hata ayıklama
    choices: [
      {
        text: "Bug’u düzeltip ekibe sunarım.",
        score: { technical: 10 },
        consequence: "Ekip seni takdir ediyor, mentörlük önerisi alıyorsun.",
        nextDimension: "part6C",
      },
      {
        text: "Derinlemesine analiz yaparım.",
        score: { analysis: 10 },
        consequence: "Sistemde yeni bir çözüm geliştiriyorsun.",
        nextDimension: "part6B",
      },
    ],
  },
  {
    title: "part5C",
    description: "Rüyalarından esinlenen notların hackathon sunumu için seçildi. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // Sunum
    choices: [
      {
        text: "Sunumu kabul ederim.",
        score: { creativity: 10 },
        consequence: "Sunum başarılı oluyor, liderlik yolu açılıyor.",
        nextDimension: "part6A",
      },
      {
        text: "Notları geliştirip ekibe sunarım.",
        score: { communication: 10 },
        consequence: "Ekip desteğiyle yeni bir proje başlıyor.",
        nextDimension: "part6C",
      },
    ],
  },
  {
    title: "part6A",
    description: "CTO yardımcısı olarak bir teklif aldın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Liderlik
    choices: [
      {
        text: "Kabul ederim.",
        score: { communication: 10 },
        consequence: "Takımı büyütüyorsun, global vizyon kazanıyorsun.",
        nextDimension: "part7A",
      },
      {
        text: "Reddedip kod yazmaya devam ederim.",
        score: { technical: 10 },
        consequence: "Teknik derinliğin artıyor.",
        nextDimension: "part7B",
      },
    ],
  },
  {
    title: "part6B",
    description: "Yeni optimizasyonlar geliştirdin, ekibin seni örnek alıyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Teknik uzman
    choices: [
      {
        text: "Mentörlük yaparım.",
        score: { communication: 10 },
        consequence: "Yeni stajyerlere rehber oluyorsun.",
        nextDimension: "part7C",
      },
      {
        text: "Kodlamaya odaklanırım.",
        score: { technical: 10 },
        consequence: "Zincir üstü sistemlerde ustalaşıyorsun.",
        nextDimension: "part7B",
      },
    ],
  },
  {
    title: "part6C",
    description: "Mentörlük veya derinleşme seçimi sunuyorlar. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Ekip eğitimi
    choices: [
      {
        text: "Mentörlük yaparım.",
        score: { communication: 10 },
        consequence: "Stajyerlere rehber oluyorsun, döngü tamamlanıyor.",
        nextDimension: "part7C",
      },
      {
        text: "Teknik derinleşirim.",
        score: { technical: 10 },
        consequence: "Sistem mimarisi üzerinde uzmanlaşıyorsun.",
        nextDimension: "part7B",
      },
    ],
  },
  {
    title: "part7A",
    description: "Takımı büyüttün, global açılım için vizyon çiziyorsun. Ne hissediyorsun?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Global lider
    choices: [
      {
        text: "Motivasyonum artıyor, devam ederim.",
        score: { communication: 10 },
        consequence: "Şirketi global lider yapıyorsun, konferanslarda konuşmacı oluyorsun.",
        nextDimension: "part8A",
      },
    ],
  },
  {
    title: "part7B",
    description: "Teknik derinliğinle sistemleri şekillendiriyorsun. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Teknik ustalık
    choices: [
      {
        text: "Kodlamaya devam ederim.",
        score: { technical: 10 },
        consequence: "Yeni bir optimizasyon geliştiriyorsun, adın duyuluyor.",
        nextDimension: "part8B",
      },
    ],
  },
  {
    title: "part7C",
    description: "Stajyerlere rehber oldun, notların rehber olarak kullanılıyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Mentörlük
    choices: [
      {
        text: "Rehberliğimi genişletirim.",
        score: { communication: 10 },
        consequence: "Yeni nesil stajyerlerin mimarı oluyorsun.",
        nextDimension: "part8C",
      },
    ],
  },
  {
    title: "part8A",
    description: "Şirketi global lider yaptın, konferanslarda konuşmacısın. Yolun sonu mu?",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // Konferans
    choices: [
      {
        text: "Evet, bu bir başarı hikayesi.",
        score: { creativity: 10 },
        consequence: "Etkili bir lider olarak miras bırakıyorsun.",
        nextDimension: null,
      },
    ],
  },
  {
    title: "part8B",
    description: "Yeni optimizasyonun adınla anılıyor, sessiz bir ustasın. Ne hissediyorsun?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Teknik ustalık
    choices: [
      {
        text: "Tatmin oldum, bu benim mirasım.",
        score: { technical: 10 },
        consequence: "Takım seni örnek alıyor, sessiz bir efsane oluyorsun.",
        nextDimension: null,
      },
    ],
  },
  {
    title: "part8C",
    description: "Stajyerlerin rehberinle büyüyor, bir mimar oldun. Ne hissediyorsun?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Mentörlük mirası
    choices: [
      {
        text: "Gurur duyuyorum, döngü tamamlandı.",
        score: { communication: 10 },
        consequence: "Yol göstericiliğinle yeni nesillere ilham veriyorsun.",
        nextDimension: null,
      },
    ],
  },
];
export const frontendStoryParts: StoryPart[] = [
  {
    title: "frontend",
    description: "Bugün ilk günün. Slate’te frontend stajına başladın. Kahveni aldın, bilgisayarın başında bekliyorsun. Slack kanallarına eklenmişsin, e-postanda ilk görev var. Zoom oryantasyonu 10:00’da başlıyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // Ofis ortamı
    choices: [
      {
        text: "Slack’te tanışma mesajı at.",
        score: { communication: 10 },
        consequence: "UX tasarımcısı Sophia’dan yanıt geliyor, birlikte çalışacağınızı öğreniyorsun.",
        nextDimension: "part2A",
      },
      {
        text: "Zoom linkini test et, kamera-mikrofonu kontrol et.",
        score: { technical: 10 },
        consequence: "Toplantıya hazırlıklı giriyorsun, görevde teknik detaylara hakim başlıyorsun.",
        nextDimension: "part2B",
      },
      {
        text: "Görev dosyasını aç, önceden anlamaya çalış.",
        score: { analysis: 10 },
        consequence: "Göreve hızlı dalıyorsun, tasarımı ve API'yi incelemeden kodlamaya başlıyorsun.",
        nextDimension: "part2C",
      },
    ],
  },
  {
    title: "part2A",
    description: "Slack’te tanışma mesajı attın. Sophia seninle iletişime geçti ve görevi birlikte yapacağınızı söyledi. Sana Figma linkini gönderdi. Tasarım net ama detaylı. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1555066930-93e3f0e6e639?q=80&w=1000", // Tasarım inceleme
    choices: [
      {
        text: "Figma’yı dikkatlice incele.",
        score: { analysis: 10 },
        consequence: "Tasarım sistemine hâkim olarak kodlamaya başlıyorsun, detaylara verdiğin önem takdir ediliyor.",
        nextDimension: "part3A",
      },
      {
        text: "Sophia’ya birkaç şey sor.",
        score: { communication: 10 },
        consequence: "Sorduğun sorulara kısıtlı yanıt alıyorsun, kendi başına öğrenmen bekleniyor.",
        nextDimension: "part3B",
      },
      {
        text: "Hemen kodlamaya başla.",
        score: { creativity: 5 },
        consequence: "Hızlıca başladığın kod, tasarım kurallarına uymuyor ve geri dönmen isteniyor.",
        nextDimension: "part3C",
      },
    ],
  },
  {
    title: "part2B",
    description: "Zoom hazırlığını yaptın, toplantı sorunsuz geçti. Görevin teknik detaylarını öğrendin: içerik yükleme bileşeni geliştirilecek. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Teknik hazırlık
    choices: [
      {
        text: "Görevi dikkatlice oku, edge-case’leri not al.",
        score: { analysis: 10 },
        consequence: "Dokümanlara hâkim olarak kodlamaya başlıyorsun, detaycı yaklaşım seni öne çıkarıyor.",
        nextDimension: "part3A",
      },
      {
        text: "Projeyi localde ayağa kaldır, kodları tanı.",
        score: { technical: 10 },
        consequence: "Kod ortamına hızlıca adapte oluyorsun, ama eksik veri fark ediyorsun.",
        nextDimension: "part3D",
      },
      {
        text: "Slack’te ‘nereden başlasam?’ diye sor.",
        score: { communication: 5 },
        consequence: "Yardım istiyorsun ama ekip senden daha fazla araştırma bekliyor.",
        nextDimension: "part3B",
      },
    ],
  },
  {
    title: "part2C",
    description: "Görev mailini açtın, dökümanlara göz attın ama hemen kodlamaya başladın. Henüz Storybook’a ya da tasarım sistemine bakmadın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000", // Kodlama
    choices: [
      {
        text: "Storybook’tan örneklere bak.",
        score: { analysis: 10 },
        consequence: "Mevcut bileşenleri inceleyerek sistemle uyumlu bir iş çıkarıyorsun.",
        nextDimension: "part3A",
      },
      {
        text: "Kodlamaya devam et.",
        score: { creativity: 5 },
        consequence: "Kodun çalışıyor ama tasarım kurallarına uymuyor, geri dönüş alıyorsun.",
        nextDimension: "part3C",
      },
      {
        text: "UX ekibine danış.",
        score: { communication: 10 },
        consequence: "UX ekibi kısa ve net cevaplar veriyor, senden araştırma bekleniyor.",
        nextDimension: "part3B",
      },
    ],
  },
  {
    title: "part3A",
    description: "Figma ve tasarım sistemini detaylı inceledin. Sophia seni övüyor, çünkü kodun hem işlevsel hem uyumlu. Ama testte bir sorun: responsive yapı bozuluyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Ekip çalışması
    choices: [
      {
        text: "Breakpoints sistemini araştır.",
        score: { analysis: 10 },
        consequence: "Sorunu sistematik çözüyorsun, takım içinde teknik saygı kazanıyorsun.",
        nextDimension: "part4A",
      },
      {
        text: "CSS’i elle düzelt.",
        score: { technical: 5 },
        consequence: "Görüntü düzeliyor ama kod kalitesi düşüyor, eleştiri alıyorsun.",
        nextDimension: "part4B",
      },
      {
        text: "Sophia’ya danış.",
        score: { communication: 10 },
        consequence: "İyi niyetli bir iletişim kuruyorsun, ama bağımsız çalışman gerektiği hatırlatılıyor.",
        nextDimension: "part4C",
      },
    ],
  },
  {
    title: "part3B",
    description: "Sophia sana yardım ediyor ama doğrudan cevaplar yerine kaynak gösteriyor. Slate kültüründe yardım istemek doğal, ama önce araştırmak bekleniyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000", // Danışmanlık
    choices: [
      {
        text: "“Nasıl araştıracağımı bilmiyorum.” diye dürüst ol.",
        score: { communication: 10 },
        consequence: "Ekip seni anlıyor ama bağımsızlık kazanman gerektiği hatırlatılıyor.",
        nextDimension: "part4C",
      },
      {
        text: "Dökümanları okuyarak kendin öğrenmeye çalış.",
        score: { analysis: 10 },
        consequence: "Araştırarak çözüm buluyorsun, teknik olarak öne çıkıyorsun.",
        nextDimension: "part4A",
      },
      {
        text: "Başka bir stajyere yaz.",
        score: { teamwork: 10 },
        consequence: "Yardım alıyorsun, görev bitiyor ama özgüvenin tam oturmuyor.",
        nextDimension: "part4D",
      },
    ],
  },
  {
    title: "part3C",
    description: "Tasarım kurallarını göz ardı ederek kodladın. Sophia’dan şu mesaj geliyor: ‘Kod çalışıyor ama stil rehberine uymamış. Elimizde hazır bileşenler var.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000", // Hata geri bildirimi
    choices: [
      {
        text: "Özür dile, bileşeni stil kurallarına uygun olarak yeniden yaz.",
        score: { creativity: 10 },
        consequence: "Olgunlukla hatanı düzeltiyorsun, ekip güveni artıyor.",
        nextDimension: "part4A",
      },
      {
        text: "“Bu kadar detay fark edilmez” diyerek savun.",
        score: { communication: -5 },
        consequence: "Tasarım kurallarını küçümsüyorsun, görevin başkasına devrediliyor.",
        nextDimension: "part4E",
      },
      {
        text: "Hazır bileşeni bulup değiştir.",
        score: { technical: 5 },
        consequence: "Hızlıca düzeltme yapıyorsun ama gelişim yerine geçici çözüm kullanıyorsun.",
        nextDimension: "part4D",
      },
    ],
  },
  {
    title: "part3D",
    description: "Projeyi localde ayağa kaldırdın. API’den gelen veri eksik, template_type boş dönüyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Kod analizi
    choices: [
      {
        text: "Backend kanalına mesaj at.",
        score: { communication: 10 },
        consequence: "Doğrudan iletişim kurarak ekipten takdir topluyorsun.",
        nextDimension: "part4C",
      },
      {
        text: "Mock veri ile çalış.",
        score: { creativity: 10 },
        consequence: "Sorunu geçici mock ile çözüp süreci aksatmadan ilerliyorsun.",
        nextDimension: "part4F",
      },
      {
        text: "Task altına not bırakıp ilerle.",
        score: { analysis: 5 },
        consequence: "Notunu bırakıyorsun ama geri dönüş beklediğin kadar hızlı gelmiyor.",
        nextDimension: "part4D",
      },
    ],
  },
  {
    title: "part4A",
    description: "Breakpoints dokümantasyonunu açtın. Slate’in kendi responsive sistemini çözdün ve kodunu baştan düzenledin. Artık bileşen her çözünürlükte düzgün çalışıyor. Mentorun Alex yorum bırakıyor: ‘Tasarım sistemiyle bu kadar uyumlu bir çözüm görmek çok iyi.’ Ama tam rahatladığın sırada yeni bir görev geliyor: ‘Dark mode destekli bir bileşen tasarla.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Teknik başarı
    choices: [
      {
        text: "Yeni bileşeni sıfırdan yaz.",
        score: { technical: 10 },
        consequence: "Yeni bileşeni kurallar olmadan yazıyorsun, testte sorunlar çıkıyor.",
        nextDimension: "part5A",
      },
      {
        text: "Önce Slate’in mevcut dark mode yapısını incele.",
        score: { analysis: 10 },
        consequence: "Sistemi önce analiz ediyorsun, dark mode’u doğru entegre ediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Sophia’dan stil ipuçları iste.",
        score: { communication: 10 },
        consequence: "Sophia ile birlikte tasarım geliştiriyorsunuz, ekip içi bağ güçleniyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part4B",
    description: "CSS’i elle düzenledin, görünüm düzeldi. Ama Alex’in PR yorumları can sıkıcı: ‘Bu çözüm sürdürülebilir değil. Stil sistemine uygun değil.’ Bir karar vermelisin: çözümü savunacak mısın, yoksa baştan mı yazacaksın?",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000", // Kod düzenleme
    choices: [
      {
        text: "PR’ı kapat, bileşeni baştan refactor et.",
        score: { technical: 10 },
        consequence: "Yeniden yazarken sistemi öğreniyorsun, kalıcı gelişim sağlıyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Slack’te ‘neden böyle yaptığını’ açıklayıp savun.",
        score: { communication: -5 },
        consequence: "Ekibe karşı savunmacı yaklaşıyorsun, özgüvenin sorgulanıyor.",
        nextDimension: "part5E",
      },
      {
        text: "Sophia’ya danış, birlikte bir çözüm üretin.",
        score: { teamwork: 10 },
        consequence: "Ortak çalışma çözüm getiriyor, ekip desteği kazanıyorsun.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part4C",
    description: "Eksik veri sorununu fark ettin ve backend ekibiyle açıkça paylaştın. Yanıt kısa sürede geldi: sistemde geçici bir hata varmış, seni bilgilendirdiler. Hızlıca çözüm sağlandı. Sophia özelden yazıyor: ‘Sorunu böyle net aktarman çok profesyonelceydi.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000", // İletişim
    choices: [
      {
        text: "Slack’te açıkça teşekkür edip güncellemeyi paylaşırsın.",
        score: { communication: 10 },
        consequence: "Ekip senin iletişim tarzını fark ediyor, işbirliği artıyor.",
        nextDimension: "part5C",
      },
      {
        text: "Öğrendiklerini bir Notion sayfasına yazarsın.",
        score: { analysis: 10 },
        consequence: "Yazdıkların küçük rehbere dönüşüyor, şirket içi kaynakta adın geçiyor.",
        nextDimension: "part5F",
      },
      {
        text: "Backend ekibinden biriyle teknik üzerine sohbet başlatırsın.",
        score: { teamwork: 10 },
        consequence: "Yeni teknik bağlar kuruyorsun, gelecekteki görevler sana yöneliyor.",
        nextDimension: "part5D",
      },
    ],
  },
  {
    title: "part4D",
    description: "Diğer bir stajyer ya da ekipten yardım aldın. Kod tamamlandı, iş bitti. Ama bu seni düşündürüyor. Acaba kendi başına çözemez miydin? Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Ekip desteği
    choices: [
      {
        text: "Kodun her satırını tekrar analiz et.",
        score: { analysis: 10 },
        consequence: "Derinlemesine anlıyorsun, teknik becerin artıyor.",
        nextDimension: "part5A",
      },
      {
        text: "Mentoruna dürüstçe yaz: ‘Gelişimime katkı olacak yorumlar istiyorum.’",
        score: { communication: 10 },
        consequence: "Güçlü bir öz farkındalık gösteriyorsun, mentor seni yakından izliyor.",
        nextDimension: "part5E",
      },
      {
        text: "“Yeni bir görev var mı?” diye istek yap.",
        score: { creativity: 5 },
        consequence: "Yeni görevler alıyorsun, ama hâlâ biraz dış destekle ilerliyorsun.",
        nextDimension: "part5D",
      },
    ],
  },
  {
    title: "part4E",
    description: "Tasarım uyarılarına karşılık verdin: ‘Ama kullanıcı fark etmez ki…’ Sophia’dan yanıt gelmiyor. PR geri çevriliyor. Bir sessizlik oluyor. Sana doğrudan görev verilmiyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000", // Sessizlik
    choices: [
      {
        text: "Özür dileyip kodu yeniden yaz.",
        score: { creativity: 10 },
        consequence: "Hatanı kabul ediyorsun, saygı görüyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Slack’te kendini açıklamaya çalış.",
        score: { communication: -5 },
        consequence: "Açıklaman kötü etki bırakıyor, savunmada kalıyorsun.",
        nextDimension: "part5E",
      },
      {
        text: "Sessizce diğer göreve geç, konuşmamayı seç.",
        score: { analysis: 5 },
        consequence: "Ekipten kopuyorsun, izole hissediyorsun.",
        nextDimension: "part5G",
      },
    ],
  },
  {
    title: "part4F",
    description: "Eksik veri olmasına rağmen mock data ile süreci aksatmadan ilerlettin. Testler geçti, bileşen tamamlandı. Mentorun: ‘İşte buna çözüm odaklılık denir.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Çözüm odaklılık
    choices: [
      {
        text: "Mock datasını gerçek veriye entegre etmeyi teklif et.",
        score: { technical: 10 },
        consequence: "Teknik çözümün kalıcı oluyor, backend seni tanıyor.",
        nextDimension: "part5D",
      },
      {
        text: "Diğer stajyerlerle paylaş, örnek gösterilsin.",
        score: { communication: 10 },
        consequence: "Takım seni örnek gösteriyor, sosyal etkileyiciliğin artıyor.",
        nextDimension: "part5C",
      },
      {
        text: "Bu bileşeni Slate bloguna yazmak ister misin?",
        score: { creativity: 10 },
        consequence: "Yazarlık yolun başlıyor, içerik üreticisi olarak da fark yaratıyorsun.",
        nextDimension: "part5F",
      },
    ],
  },
  {
    title: "part5A",
    description: "Bileşenin her satırını tekrar gözden geçiriyorsun. Breakpoints, prop yapısı, context hook’ları… Bu sefer sadece ‘çalışsın’ değil, ‘anlayarak yazılsın’ diyorsun. Kodun sadece düzgün değil, okunabilir ve taş gibi sağlam. Mentorun Slack’te yazıyor: ‘Yazdığın bileşen referans oldu. İzin verirsen yeni başlayanlara örnek olarak göstereceğim.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Teknik derinlik
    choices: [
      {
        text: "Ek dökümantasyon hazırlamayı teklif et.",
        score: { analysis: 10 },
        consequence: "Dokümantasyon, şirket içinde küçük bir rehbere dönüşüyor.",
        nextDimension: "part6A",
      },
      {
        text: "Kod üzerinden mini bir sunum yapmayı öner.",
        score: { communication: 10 },
        consequence: "Teknik anlatım yapıyorsun, stajyerden takım oyuncusuna geçiyorsun.",
        nextDimension: "part6B",
      },
      {
        text: "İş çıkışı biraz kafa dağıtmaya çık.",
        score: { creativity: 10 },
        consequence: "Bir kahvehaneye gidip Inter–PSG maçını izliyorsun; nefes almak sana iyi geliyor.",
        nextDimension: "part6C",
      },
    ],
  },
  {
    title: "part5B",
    description: "Kodu baştan yazıyorsun. Bu sefer kuralları biliyorsun, bileşen sistemini anladın. Her şey daha hızlı ve temiz ilerliyor. Sophia, kodu gördüğünde sadece ‘👏👏👏’ yazıyor. Bu seni gülümsetiyor. Çünkü şimdi fark ediyorsun: ‘İlk yazdığım şey çalışıyordu, bu ise anlaşılır.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Refactor
    choices: [
      {
        text: "Diğer stajyere kodun mantığını anlat.",
        score: { communication: 10 },
        consequence: "Bilgiyi paylaşıyorsun, teknik liderlik gelişiyor.",
        nextDimension: "part6B",
      },
      {
        text: "Slate tasarım ekibine küçük bir iyileştirme öner.",
        score: { creativity: 10 },
        consequence: "UX ile ilk defa yenilikçi bir öneri paylaşıyorsun.",
        nextDimension: "part6D",
      },
      {
        text: "Kendine bir ödül ver, dışarı çık.",
        score: { creativity: 10 },
        consequence: "Dinlenmek için dışarı çıkıyorsun, bir maç akşamına karışıyorsun.",
        nextDimension: "part6C",
      },
    ],
  },
  {
    title: "part5C",
    description: "Sophia’yla birlikte ilerledin, bazen onun uyarılarına kulak verdin, bazen kendin yol gösterdin. Stajyerliğin ‘tek başına başarı’ değil, ‘takımda denge’ olduğunu fark ettin. Ekibin sosyal Slack kanalına davet ediliyorsun. Bir kahve, bir maç ve biraz da muhabbet zamanı. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Ekip bağları
    choices: [
      {
        text: "Takımın birlikte gittiği kafeye sen de git.",
        score: { teamwork: 10 },
        consequence: "Takımla maça gidiyorsun, Inter–PSG efsanesi seni bekliyor.",
        nextDimension: "part6C",
      },
      {
        text: "Diğer frontend’lerle mini bir kod paylaşımı organize et.",
        score: { communication: 10 },
        consequence: "Teknik içeriğin ekibe katkı sağlıyor, kendini geliştiriyorsun.",
        nextDimension: "part6B",
      },
      {
        text: "Mentora mesaj at: ‘Stajda sonraki seviyeye geçmeye hazırım.’",
        score: { creativity: 10 },
        consequence: "Mentorun sana küçük bir proje öneriyor.",
        nextDimension: "part6A",
      },
    ],
  },
  {
    title: "part5D",
    description: "Sürekli yardım alarak yürüdün, şimdi ilk kez mentorun sana soruyor: ‘Bu görevi sen seç. Kodla, anlat, test et. Her şeyi sen planla.’ Küçük bir dashboard ekranı: filtre, listeleme, durum renkleri. Zor değil, ama senin ilk ‘uçtan uca’ görevin. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", // Dashboard tasarımı
    choices: [
      {
        text: "Dashboard’u mobil uyumlu yap.",
        score: { technical: 10 },
        consequence: "Mobilde çalışan demo beğeniliyor, staj sonrası konuşulmaya başlıyorsun.",
        nextDimension: "part6E",
      },
      {
        text: "Test senaryoları yazmaya odaklan.",
        score: { analysis: 10 },
        consequence: "Kod kalitesiyle dikkat çekiyorsun, backend bile ilgileniyor.",
        nextDimension: "part6F",
      },
      {
        text: "Koddan sonra tasarım belgesi çıkar.",
        score: { creativity: 10 },
        consequence: "UX ve teknik belgeleme arasında köprü kuruyorsun.",
        nextDimension: "part6D",
      },
    ],
  },
  {
    title: "part5E",
    description: "Savunma yaptın, biraz agresif oldun. Slack daha sessiz senin için. Görev gelmiyor ama oradasın. Bekliyorsun. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000", // Sessizlik
    choices: [
      {
        text: "Mentorundan açık geri bildirim iste.",
        score: { communication: 10 },
        consequence: "Mentorunla bire bir görüşüyorsun, tekrar güven kuruyorsun.",
        nextDimension: "part6D",
      },
      {
        text: "Bir özür mesajı yaz, geçmişe sünger çek.",
        score: { creativity: 10 },
        consequence: "Ekip seni yeniden içeri alıyor, sıcaklık geri geliyor.",
        nextDimension: "part6B",
      },
      {
        text: "Sadece izlemeye devam et.",
        score: { analysis: 5 },
        consequence: "Sessizlik devam ediyor, görünmezleşiyorsun.",
        nextDimension: "part6G",
      },
    ],
  },
  {
    title: "part5F",
    description: "Mock verilerle yaptığın çözümü bir blog yazısına döktün. Alex linki paylaşıyor: ‘Bu kadar net anlatım, bu kadar basit çözüm! 👏’ İçerik üretmek sana iyi geldi. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Blog yazımı
    choices: [
      {
        text: "Teknik blog yazmaya devam et.",
        score: { creativity: 10 },
        consequence: "Yazılar düzenli hale geliyor, Slate blogunda adın geçiyor.",
        nextDimension: "part6F",
      },
      {
        text: "Yazıdan sonra bir mini sunum hazırla.",
        score: { communication: 10 },
        consequence: "Sunumla beraber iletişim becerin fark ediliyor.",
        nextDimension: "part6B",
      },
      {
        text: "Takıma yazının içinde teşekkür et.",
        score: { teamwork: 10 },
        consequence: "Takım senin adıyla gurur duyuyor, rehberlerde adın var.",
        nextDimension: "part6A",
      },
    ],
  },
  {
    title: "part5G",
    description: "İzledin ama dahil olmadın. Kimseyi kırmadın ama bağ da kurmadın. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // İzolasyon
    choices: [
      {
        text: "Son hafta yaklaşırken bir Slack mesajı at.",
        score: { communication: 5 },
        consequence: "Geç de olsa etkileşime giriyorsun, ilgi görüyorsun.",
        nextDimension: "part6B",
      },
      {
        text: "Staj bitmeden bir kod paylaşımı yap.",
        score: { technical: 5 },
        consequence: "Teknik mesajın görünürlük sağlıyor.",
        nextDimension: "part6F",
      },
      {
        text: "Sessizce bitmesini bekle.",
        score: { analysis: 5 },
        consequence: "Bitince kimse seni hatırlamıyor.",
        nextDimension: "part6G",
      },
    ],
  },
  {
    title: "part6A",
    description: "Dark mode entegrasyonu yapmadan önce Slate’in sistemini çözdün. Stil sistemindeki ölçekler, renk değişim kuralları, dark-light switch gibi yapılar artık sende. Kodun sonunda sadece çalışan değil, okunabilir, sistem dostu bir bileşen çıktı. ‘Bu küçük bileşeni tasarım sistemi için referans bile yapabiliriz.’ — Alex. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", // Teknik takdir
    choices: [
      {
        text: "Bileşeni anlatan bir yazı hazırla.",
        score: { analysis: 10 },
        consequence: "Yazın ekip içi kaynaklara giriyor, teknik yazıcı olarak fark yaratıyorsun.",
        nextDimension: "part7A",
      },
      {
        text: "Takım içi mini bir sunum planla.",
        score: { communication: 10 },
        consequence: "Sunumda teknik konuyu sade anlatman, iletişim becerini gösteriyor.",
        nextDimension: "part7B",
      },
    ],
  },
  {
    title: "part6B",
    description: "Yazdığın kodu, nasıl tasarladığını ve neden böyle yaptığını paylaştın. Takım seni daha iyi tanıdı. Sophia: ‘Senin yazdıkların ekibe ışık tutuyor.’ Mentorun: ‘Staj sonunda senin gibi anlatan biriyle devam etmeyi isteriz.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Paylaşım gücü
    choices: [
      {
        text: "Blog yazmak için içerik oluşturmaya başla.",
        score: { creativity: 10 },
        consequence: "Teknik blogun Slate blogunda yayınlanıyor.",
        nextDimension: "part7A",
      },
      {
        text: "Üniversite topluluğunda bir sunum yap.",
        score: { communication: 10 },
        consequence: "Kendi okul topluluğunda ‘remote staj’ deneyimi anlatıyorsun.",
        nextDimension: "part7C",
      },
    ],
  },
  {
    title: "part6C",
    description: "Kahvehaneye giriyorsun. Duvarlarda eski futbol formaları. Televizyonda Inter–PSG maçı var. Gerçekte daha oynanmadı ama burada herkes sonucu biliyor gibi. ‘Sen Slate’ten miydin? Gel buraya.’ Birkaç ekip arkadaşı orada. Koddan uzak, tempodan uzak 90 dakika. Inter son dakikada 2–1 kazandı. Ama senin için galibiyet: dengede bir gelişim. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Maç keyfi
    choices: [
      {
        text: "Sophia’ya maç hakkında mesaj at.",
        score: { communication: 10 },
        consequence: "Sophia seninle bağ kuruyor, bir sonraki tasarım görevini sana veriyor.",
        nextDimension: "part7B",
      },
      {
        text: "Takım Slack’ine ‘bugünün kahvesi ve maçı çok iyiydi’ yaz.",
        score: { teamwork: 10 },
        consequence: "Sosyal kanal canlanıyor, ekip içinde tanınan biri oluyorsun.",
        nextDimension: "part7C",
      },
    ],
  },
  {
    title: "part6D",
    description: "Savunmalarının ardından ilk kez sessizce bir mesaj attın: ‘Şirket için daha iyi katkı sunmam için yapabileceğim bir şey var mı?’ Alex’ten cevap geldi: ‘Hadi gel. Son hafta birlikte bir şey çalışalım.’ Küçük bir Slack bot tasarımı üzerinde birlikte çalışıyorsunuz. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Yeniden bağlanma
    choices: [
      {
        text: "Bot’u herkese tanıtan bir video hazırla.",
        score: { creativity: 10 },
        consequence: "Tanıtım becerin dikkat çekiyor, staj bitmeden teklif sinyali alıyorsun.",
        nextDimension: "part7A",
      },
      {
        text: "Kod yapısını Github Wiki’ye dök.",
        score: { analysis: 10 },
        consequence: "Teknik belgeleme konusundaki yeteneğin takdir ediliyor.",
        nextDimension: "part7B",
      },
    ],
  },
  {
    title: "part6E",
    description: "Dashboard’u sadece çalışır değil, mobil uyumlu da yaptın. Sophia test etti ve şunu yazdı: ‘Bu, içerik ekibine demo göstereceğimiz ilk bileşen olabilir.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", // Mobil uyum
    choices: [
      {
        text: "Mobil davranış için blog yaz.",
        score: { creativity: 10 },
        consequence: "Slate blogunda yazın yayınlanıyor, adın teknik içerik tarafında geçiyor.",
        nextDimension: "part7F",
      },
      {
        text: "Tasarım ekibiyle mini bir QA süreci yönet.",
        score: { communication: 10 },
        consequence: "QA ile ortak çalışma beğeni topluyor.",
        nextDimension: "part7G",
      },
    ],
  },
  {
    title: "part6F",
    description: "Kodunun test kapsamı tam. Edge-case’ler, hata mesajları, loading durumu... Hepsi var. Backend kanalından birisi mesaj atıyor: ‘Senin bileşenin test mantığını referans aldım.’ Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Test kalitesi
    choices: [
      {
        text: "Test prensipleri için rehber oluştur.",
        score: { analysis: 10 },
        consequence: "Slate test dokümanlarına adın giriyor.",
        nextDimension: "part7F",
      },
      {
        text: "Bu test yapısını içeren bir video çek.",
        score: { communication: 10 },
        consequence: "Video takım içinde yayılıyor, fark edilmen artıyor.",
        nextDimension: "part7G",
      },
    ],
  },
  {
    title: "part6G",
    description: "Hiçbir şey yapmadın. Ne mesaj attın, ne paylaşım yaptın. Son günler, ofis trafiğinin uzağında geçti. Maalesef, bu güvensizlik hissi senin için herhangi bir geri bildirim ya da davet getirmedi. ‘Hani o stajyer çocuk?’ demeye bile gerek olmadı.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Sessizlik
    choices: [],
  },
  {
    title: "part7A",
    description: "Artık sadece bir stajyer değilsin. Slate’in blogunda yazın yayınlanmış, dokümanlarında adın var. Senior geliştiriciler senin yaptıklarına atıfta bulunuyor. ‘Yazdıkların uzun süre takımda kalacak gibi.’",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Teknik takdir
    choices: [],
  },
  {
    title: "part7B",
    description: "Yazdıkların, konuşmaların, teknik sunumların sayesinde ekip seni ‘takım oyuncusu’ olarak tanımlıyor. Sophia son görevini sana atıyor: Slate Editor’ün ön izlemesini yeniden tasarlamak. ‘Bunu yaparsan stajdan fazlasını alırsın.’",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Bağlantı ustası
    choices: [],
  },
  {
    title: "part7C",
    description: "Stajda yaşadıklarını okul kulübüne anlattın. Zoom ekranında 50 kişi, ‘remote staj nasıldı?’ diye soruyor. Sen cevap verirken fark ediyorsun: Yalnızca kod yazmadın, büyüdün.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // İçten gelişim
    choices: [],
  },
  {
    title: "part7D",
    description: "Bu bölümlerde farklı çıkışlar oldu. Kimi için teknik takdir, kimi için sosyal bağ, kimi için sessizlik. Ama artık son gün geldi.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Çeşitli çıkışlar
    choices: [],
  },
  {
    title: "part7F",
    description: "Slate blogunda yazın yayınlanıyor, adın teknik içerik tarafında geçiyor.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Blog başarısı
    choices: [],
  },
  {
    title: "part7G",
    description: "QA ile ortak çalışma beğeni topluyor.",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Ekip işbirliği
    choices: [],
  },
  {
    title: "part8",
    description: "Zoom ekranında Sophia, Alex ve HR bağlı. Gülümseyerek bakıyorlar: ‘Seninle sadece kod değil, fikir, iletişim ve öğrenme tarzı konuştuk.’ ‘Slate olarak sana resmi bir iş teklifinde bulunmak istiyoruz.’ Senin çabasın, hata yapman, yardım istemen, sormaktan çekinmeden büyümen seni buraya getirdi. SON: ‘Stajdan Kariyere’",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", // İş teklifi
    choices: [],
  },
];

export const siberStoryParts: StoryPart[] = [
  {
    title: "siber",
    description: "İlk gün. Heyecanlısın, fakat biraz da gergin. ABC Güvenlik Şirketi'nde siber güvenlik stajyerisin. Slack kanalına girdiğinde, teknik liderden bir mesaj dikkatini çekiyor: 'Bu hafta, şirketin web uygulamasını güvenlik testlerine alacağız. İlk görevin, uygulamanın açıklarını manuel ve otomatik testlerle tespit etmek.' Henüz güvenlik testlerine dair çok tecrübeli değilsin, ancak araçları kullanmayı biliyorsun. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000", // Güvenlik ortamı
    choices: [
      {
        text: "Otomatik güvenlik tarama araçları kullan.",
        score: { technical: 10 },
        consequence: "Hızlıca genel bir tarama yapıyorsun. Kısa süre içinde bulgular alıyorsun, ama daha derin açıkları kaçırman olası.",
        nextDimension: "part2A",
      },
      {
        text: "Manuel penetrasyon testi başlat.",
        score: { analysis: 10 },
        consequence: "Daha dikkatli ve derinlemesine bir inceleme yapıyorsun. Bu, çok daha zaman alıyor ama güvenlik açıklarını daha iyi tespit ediyorsun.",
        nextDimension: "part2B",
      },
      {
        text: "Güvenlik duvarı yapılandırmalarını gözden geçir.",
        score: { creativity: 5 },
        consequence: "İlk bakışta yapı doğru görünüyor, ancak bazı küçük hatalar fark ediyorsun. Ancak bu hataların sisteme etkisini anlamakta zorlanıyorsun.",
        nextDimension: "part2C",
      },
    ],
  },
  {
    title: "part2A",
    description: "Otomatik araçlarla tespit ettiğin açıklar çözülmüş gibi görünüyor. Ancak daha derin bir sorun var. Sistem bazı anlarda hatalı tepki veriyor. Ekip lideri: 'Neden böyle bir durum oluyor?' Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1594126699788-1c2b5c62a7b2?q=80&w=1000", // Sistem analizi
    choices: [
      {
        text: "Logları detaylı incele.",
        score: { analysis: 10 },
        consequence: "Loglardan bazı anomaliler fark ediyorsun. Bu, sorunun kaynağı hakkında daha net bir fikir veriyor.",
        nextDimension: "part3A1",
      },
      {
        text: "Firewall ve proxy yapılandırmalarını gözden geçir.",
        score: { technical: 10 },
        consequence: "Bir yapılandırma hatası buluyorsun, ancak bu değişiklik sistemde beklenmedik hatalara yol açıyor.",
        nextDimension: "part3A2",
      },
      {
        text: "Zafiyet taramalarını tekrarla.",
        score: { creativity: 5 },
        consequence: "Yeni bir tarama başlattığında, bazı yeni açıklar tespit ediyorsun ama daha karmaşık sorunları kaçırıyorsun.",
        nextDimension: "part3A3",
      },
    ],
  },
  {
    title: "part2B",
    description: "Manuel penetrasyon testin, bazı kritik güvenlik açıklarını gün yüzüne çıkarıyor. Ancak bazı açıklar sistemin içine daha derin yerleşmiş. Ekip lideri: 'Veritabanı şifrelerinin zayıf olduğu görülüyor. Bunun üzerine ne düşünüyorsun?' Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1581094794329-c811c8c6c9f6?q=80&w=1000", // Derin analiz
    choices: [
      {
        text: "Şifre güvenliği için yeni bir algoritma öner.",
        score: { technical: 10 },
        consequence: "Şifreleme sisteminin zayıf olduğunu fark ediyorsun. Daha güçlü bir şifreleme önerisi sunarak dikkat çekiyorsun.",
        nextDimension: "part3B1",
      },
      {
        text: "Veritabanı erişim izinlerini kısıtla.",
        score: { analysis: 10 },
        consequence: "Veritabanı erişim izinlerini sınırladığında, uygulama işlevselliğinde bazı sorunlar ortaya çıkıyor.",
        nextDimension: "part3B2",
      },
      {
        text: "Yeni bir güvenlik testi başlat.",
        score: { creativity: 10 },
        consequence: "Yeni testlerle daha derin bir analiz yapıyorsun ve gizli açıkları buluyorsun.",
        nextDimension: "part3B3",
      },
    ],
  },
  {
    title: "part2C",
    description: "Yüzeysel testlerin bazı hataları ortaya çıkarıyor, ancak sistemdeki temel güvenlik problemlerini hala tespit edemiyorsun. Ekip lideri: 'Sistemde hala bir sorun var. Neden çözemedik?' Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", // Sorun analizi
    choices: [
      {
        text: "Eski güvenlik notlarına bak.",
        score: { analysis: 10 },
        consequence: "Eski bir stajyerin bıraktığı notlarda, benzer bir problem bulunuyor. Bu, sorunun kaynağını bulmanı sağlıyor.",
        nextDimension: "part3C1",
      },
      {
        text: "Sistemin daha eski sürümleriyle karşılaştırma yap.",
        score: { technical: 10 },
        consequence: "Eski sürümlerde daha önce tespit edilen bir güvenlik açığının hala var olduğunu keşfediyorsun.",
        nextDimension: "part3C2",
      },
      {
        text: "Yeni bir güvenlik analizi yazılımı kur.",
        score: { creativity: 10 },
        consequence: "Yeni yazılım sistemdeki açıkları çok daha hızlı tespit ediyor. Ancak bazen yanlış alarm veriyor.",
        nextDimension: "part3C3",
      },
    ],
  },
  {
    title: "part3A1",
    description: "Logları detaylı inceledin ve bazı anomaliler fark ettin. Bu, sorunun kaynağı hakkında daha net bir fikir veriyor. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3A2",
    description: "Firewall ve proxy yapılandırmalarını gözden geçirdin ve bir yapılandırma hatası buldun. Ancak bu değişiklik sistemde beklenmedik hatalara yol açıyor. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3A3",
    description: "Zafiyet taramalarını tekrarladın ve bazı yeni açıklar tespit ettin, ama daha karmaşık sorunları kaçırdın. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3B1",
    description: "Şifre güvenliği için yeni bir algoritma önerdin ve şifreleme sisteminin zayıf olduğunu fark ettin. Daha güçlü bir şifreleme önerisi sunarak dikkat çekiyorsun. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3B2",
    description: "Veritabanı erişim izinlerini kısıtladın ve uygulama işlevselliğinde bazı sorunlar ortaya çıktı. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3B3",
    description: "Yeni bir güvenlik testi başlattın ve daha derin bir analizle gizli açıkları buldun. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3C1",
    description: "Eski güvenlik notlarına baktın ve eski bir stajyerin bıraktığı notlarda benzer bir problem buldun. Bu, sorunun kaynağını bulmanı sağlıyor. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3C2",
    description: "Sistemin eski sürümleriyle karşılaştırma yaptın ve daha önce tespit edilen bir güvenlik açığının hala var olduğunu keşfettin. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part3C3",
    description: "Yeni bir güvenlik analizi yazılımı kurdun ve sistemdeki açıkları çok daha hızlı tespit ettin. Ancak bazen yanlış alarm veriyor. Ama süreçte ciddi şekilde yoruluyorsun. Gece rüyanda bile kod görmeye başladın. Sabah, ekip liderinden gelen mesaj seni durduruyor: 'Biraz ara vermek ister misin? Git dolaş kafanı topla.'",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", // Yorulma
    choices: [
      {
        text: "Tatile çık, biraz uzaklaş.",
        score: { creativity: 10 },
        consequence: "Dinleniyorsun, uzaklaştıkça bazı çözümler zihninde netleşiyor.",
        nextDimension: "part5A",
      },
      {
        text: "Devam et, kendini kanıtlamaya odaklan.",
        score: { technical: 10 },
        consequence: "Kendini zorluyorsun, sistemde yeni bir bug daha keşfediyorsun.",
        nextDimension: "part5B",
      },
      {
        text: "Rüyandaki sistem sorunlarını yazıya dök.",
        score: { analysis: 10 },
        consequence: "Yazdığın döküman ekip liderinin ilgisini çekiyor. Seni hackathon sunumuna öneriyor.",
        nextDimension: "part5C",
      },
    ],
  },
  {
    title: "part5A",
    description: "Tatil sırasında yaşadığın bir anıdan ilham alıyorsun. Çocukken oynadığın bir oyun, backend sistemde yeni bir eşleşme algoritması fikri veriyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // İlham
    choices: [
      {
        text: "Fikri ekip liderine sun.",
        score: { communication: 10 },
        consequence: "Ekip lideri fikri beğeniyor ve seni bir prototip geliştirmeye yönlendiriyor.",
        nextDimension: "part6A",
      },
      {
        text: "Kendi başıma prototip geliştir.",
        score: { technical: 10 },
        consequence: "Prototip başarılı oluyor, ancak ekip desteği olmadan eksik kalıyor.",
        nextDimension: "part6A",
      },
    ],
  },
  {
    title: "part5B",
    description: "Devam ettikçe sistemde kritik bir bug’u yakalıyorsun. Ekip lideri: 'Bunu bizim yerimize sen düzeltir misin?' Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Bug düzeltme
    choices: [
      {
        text: "Bug’u analiz edip düzelt.",
        score: { analysis: 10 },
        consequence: "Bug’u çözüyorsun ve ekip liderinden takdir alıyorsun.",
        nextDimension: "part6A",
      },
      {
        text: "Ekip liderinden yardım iste.",
        score: { teamwork: 10 },
        consequence: "Birlikte bug’u çözüyorsunuz, ancak liderlik geliştirmen gerekiyor.",
        nextDimension: "part6A",
      },
    ],
  },
  {
    title: "part5C",
    description: "Yazıya döktüğün senaryolar CTO’ya kadar ulaşıyor. Seni hackathon sunumuna çağırıyorlar. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Sunum
    choices: [
      {
        text: "Sunuma hazırlan ve katıl.",
        score: { communication: 10 },
        consequence: "Sunum başarılı oluyor ve seni yeni projelere davet ediyorlar.",
        nextDimension: "part6A",
      },
      {
        text: "Sunumu ekiple birlikte hazırla.",
        score: { teamwork: 10 },
        consequence: "Ekip çalışmasıyla sunum etkileyici oluyor, liderlik potansiyelin fark ediliyor.",
        nextDimension: "part6A",
      },
    ],
  },
  {
    title: "part6A",
    description: "Geliştirdiğin eşleşme algoritması sisteme nefes aldırıyor. Ekip lideri bir seçim sunuyor: 'Yolun açık. İster bizim senior ekibe geç, ister teknik liderliğe hazırlan.' Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Kariyer seçimi
    choices: [
      {
        text: "Teknik liderliğe hazırlan.",
        score: { leadership: 10 },
        consequence: "Takımı büyütüyorsun, roadmap belirliyorsun.",
        nextDimension: "part7A",
      },
      {
        text: "Senior yazılımcı olarak kal.",
        score: { technical: 10 },
        consequence: "Teknik derinliğin artıyor. Reorg problemlerine çözüm üretiyorsun.",
        nextDimension: "part7B",
      },
      {
        text: "Yeni gelen stajyerlerin eğitimiyle ilgilen.",
        score: { communication: 10 },
        consequence: "Yeni stajyerlere eğitim veriyorsun. İlk baştaki hatalarını onlara aktarıyorsun.",
        nextDimension: "part7C",
      },
    ],
  },
  {
    title: "part7A",
    description: "Artık roadmap çiziyorsun. Ekip seni destekliyor. Ürünler daha stabil. Ekip lideri: 'Bizi yurtdışına açacak vizyonu sen kuracaksın.' Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Liderlik
    choices: [
      {
        text: "Takımını büyütmek ve yurtdışına açılacak stratejileri belirlemek.",
        score: { leadership: 10 },
        consequence: "Takımını büyütüyorsun ve yeni pazarlara açılacak vizyonu kuruyorsun.",
        nextDimension: "part8A",
      },
      {
        text: "Ekipteki mevcut projelerin teknik derinliğini artırmak.",
        score: { technical: 10 },
        consequence: "Projelerin teknik derinliğini geliştiriyor ve daha verimli sistemler yaratıyorsun.",
        nextDimension: "part8B",
      },
      {
        text: "Yeni gelen stajyerlere mentörlük yapmak ve onları eğitmek.",
        score: { communication: 10 },
        consequence: "Yeni gelen stajyerlere rehberlik ediyorsun, onlara hatalarını gösteriyor ve onlardan da çok şey öğreniyorsun.",
        nextDimension: "part8C",
      },
    ],
  },
  {
    title: "part7B",
    description: "Aurory’nin zincir üstü altyapısı senin kodlarınla şekilleniyor. Seni kimse konuşmuyor, ama herkes takdir ediyor. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Teknik ustalık
    choices: [
      {
        text: "Yeni altyapılar için daha gelişmiş optimizasyonlar sağlamak.",
        score: { technical: 10 },
        consequence: "Yeni optimizasyonlarla projeyi daha hızlı ve verimli hale getiriyorsun.",
        nextDimension: "part8B",
      },
      {
        text: "Aurory’nin güvenlik sistemini daha da güçlendirmek.",
        score: { analysis: 10 },
        consequence: "Güvenlik seviyesini çok daha üst düzeye taşıyor, sistemdeki zayıf noktaları tamamen ortadan kaldırıyorsun.",
        nextDimension: "part8B",
      },
      {
        text: "Ekipteki diğer mühendislerle işbirliği yaparak büyük projelerde liderlik yapmak.",
        score: { leadership: 10 },
        consequence: "Büyük projelere liderlik ediyorsun ve ekibin için önemli bir teknik lider haline geliyorsun.",
        nextDimension: "part8B",
      },
    ],
  },
  {
    title: "part7C",
    description: "Yeni gelen stajyerler senin not defterini kullanıyor. Döngü tamamlanıyor. Artık rehbersin. Ne yaparsın?",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Mentörlük
    choices: [
      {
        text: "Yeni bir eğitim programı oluştur ve diğer stajyerlerin yeteneklerini geliştir.",
        score: { communication: 10 },
        consequence: "Eğitim programı sayesinde yeni stajyerlerin daha hızlı adapte olmasını sağlıyorsun.",
        nextDimension: "part8C",
      },
      {
        text: "Kendi teknik araştırma projelerini yönet ve takımı daha ileriye taşı.",
        score: { technical: 10 },
        consequence: "Yeni projeler yönetiyorsun ve takım seni teknik anlamda örnek alıyor.",
        nextDimension: "part8C",
      },
      {
        text: "Yeni stajyerlerin kendi projeleri üzerinde çalışmasına rehberlik et.",
        score: { leadership: 10 },
        consequence: "Stajyerlerin projelerini başarıyla tamamlıyor ve sen de onların büyümelerini sağlıyorsun.",
        nextDimension: "part8C",
      },
    ],
  },
  {
    title: "part8A",
    description: "Aurory’nin teknik lideri olarak oyun altyapısını global hale getiriyorsun. Dünyanın dört bir yanından gelen mühendisler seni örnek alıyor. Konferanslarda konuşmalar yapıyorsun ve teknoloji dünyasında adından söz ettiriyorsun. Artık tüm projelerde liderlik ediyorsun.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000", // Global liderlik
    choices: [
      {
        text: "Teknik liderlik rollerini genişlet ve global vizyonu güçlendir.",
        score: { leadership: 10 },
        consequence: "Teknik lider olarak globalde tanınan bir uzman oldun ve şirketin teknoloji vizyonunu şekillendiren kişi oldun. Tüm ekip senin stratejilerinle çalışıyor ve başarılarının meyvelerini alıyor. Sen artık bir global CTO’sun!",
        nextDimension: null,
      },
    ],
  },
  {
    title: "part8B",
    description: "Hala kod yazıyorsun. Zincir üstü sistemlerde yeni bir optimizasyon senin adını taşıyor. Takım seni örnek alıyor. Belki konuşulmuyorsun ama yaptığın her işte iz bırakan bir yazılımcısın. Gece gündüz kod yazıyor ve her gün yeni bir teknik derinlik keşfediyorsun.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000", // Sessiz usta
    choices: [
      {
        text: "Kodlamaya devam et ve yeni optimizasyonlar geliştir.",
        score: { technical: 10 },
        consequence: "İşinin sessiz ustası oldun. Herkes senin adını saygıyla anıyor, ancak sen sadece kod yazmaya devam ediyorsun. Yeni optimizasyonlar ile ekipteki herkesin daha verimli çalışmasını sağlıyorsun. Sen, takımın sessiz ustasısın!",
        nextDimension: null,
      },
    ],
  },
  {
    title: "part8C",
    description: "Yeni gelenler artık senin dökümanlarınla başlıyor. Bir stajyer olarak başladığın yerin mimarlarından biri oldun. Bugün, yeni nesil stajyerlerin gelişimine rehberlik ediyorsun. Onlara sadece teknik bilgiyi değil, aynı zamanda başarısızlıkların ve hataların üstesinden nasıl gelebileceklerini de öğretiyorsun.",
    image: "https://images.unsplash.com/photo-1506784928027-7e2a8a9ec503?q=80&w=1000", // Yol gösterici
    choices: [
      {
        text: "Rehberlik yapmayı sürdür ve yeni nesil için eğitim materyalleri geliştir.",
        score: { communication: 10 },
        consequence: "Artık bir lider ve rehbersin. Yeni gelenler senin tecrübelerinden faydalanıyor ve senin izinden gidiyor. Stajyer olarak başladığın yolda, şimdi kendi bilgi ve tecrübelerini aktarıyor, bu döngüyü tamamlıyorsun. Sen artık bir yol göstericisin!",
        nextDimension: null,
      },
    ],
  },
];
export const storyData: StoryPart[] = [  
  ...backendStoryParts,
  ...frontendStoryParts,
  ...siberStoryParts
];