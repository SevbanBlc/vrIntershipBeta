import { StoryPart } from './types';

export const firstDayStoryParts: StoryPart[] = [
  {
    title: "İlk Gün Sabahı",
    description: "Stajının ilk günü için uyanırsın ve heyecanla hazırlanmaya başlarsın. Bu gün senin için önemli bir başlangıç.",
    image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?auto=format&fit=crop&q=80&w=1000",
    dimension: "morning_preparation",
    choices: [
      {
        text: "Erken kalk ve güzel bir kahvaltı hazırla",
        consequence: "Güne enerjik başlarsın.",
        score: { analysis: 3, communication: 2 },
        nextDimension: "office_arrival"
      },
      {
        text: "Son dakikaya kadar uyu, aceleyle hazırlan",
        consequence: "Geç kalma riskiyle stresli bir başlangıç yaparsın.",
        score: { analysis: 1, communication: 1 },
        nextDimension: "late_arrival"
      }
    ]
  },
  {
    title: "Ofise Varış",
    description: "Stajının ilk günü için ofise geldin. Binanın önünde durarak yukarı bakıyorsun. Heyecanlı olduğun kadar gerginsin. Binaya girdiğinde resepsiyonda seni kibar bir görevli karşılıyor.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    dimension: "office_arrival",
    choices: [
      {
        text: "Resepsiyondaki görevliyi selamla",
        consequence: "İlk izlenimin olumlu oluyor.",
        score: { analysis: 2, communication: 5 },
        nextDimension: "reception_interaction"
      },
      {
        text: "Doğrudan asansörlere yönel",
        consequence: "Güvenlik seni durduruyor.",
        score: { analysis: 0, communication: 0 },
        nextDimension: "security_issue"
      }
    ]
  },
  {
    title: "Geç Varış",
    description: "Hazırlanmak için yeterince vakit ayırmadığın için ofise geç kaldın. Aceleyle binaya giriyorsun ve nefes nefese kalmış durumdasın.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=1000",
    dimension: "late_arrival",
    choices: [
      {
        text: "Özür dile ve durumu açıkla",
        consequence: "Samimi özrün kabul ediliyor ama ilk izlenim zedeleniyor.",
        score: { analysis: 2, communication: 3 },
        nextDimension: "reception_interaction"
      },
      {
        text: "Geç kaldığını görmezden gel",
        consequence: "Profesyonellikten uzak bir davranış sergilersin.",
        score: { analysis: 0, communication: 0 },
        nextDimension: "negative_impression"
      }
    ]
  },
  {
    title: "Resepsiyon Görüşmesi",
    description: "Resepsiyon görevlisi sana gülümseyerek 'Hoş geldin! Sen yeni stajyer olmalısın. Biraz bekle, seni departmana götürmesi için birini göndereceğim.' diyor.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1000",
    dimension: "reception_interaction",
    choices: [
      {
        text: "Teşekkür et ve bekle",
        consequence: "Saygılı davranışın takdir görüyor.",
        score: { analysis: 2, communication: 4 },
        nextDimension: "team_introduction"
      },
      {
        text: "Bekleme sırasında telefonunla vakit geçir",
        consequence: "Profesyonel olmayan bir izlenim bırakırsın.",
        score: { analysis: 1, communication: 1 },
        nextDimension: "team_introduction"
      }
    ]
  },
  {
    title: "Güvenlik Sorunu",
    description: "Doğrudan asansörlere yöneldiğinde bir güvenlik görevlisi seni durduruyor. 'Pardon, ziyaretçilerin önce kayıt yaptırması gerekiyor. Lütfen resepsiyona gidebilir misiniz?' diyor.",
    image: "https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&q=80&w=1000",
    dimension: "security_issue",
    choices: [
      {
        text: "Özür dile ve resepsiyona dön",
        consequence: "Hatanı düzeltirsin.",
        score: { analysis: 2, communication: 3 },
        nextDimension: "reception_interaction"
      },
      {
        text: "İtiraz et ve neden durduğunu sorgula",
        consequence: "Gereksiz bir tartışma başlatırsın.",
        score: { analysis: 0, communication: 0 },
        nextDimension: "negative_impression"
      }
    ]
  },
  {
    title: "Olumsuz İzlenim",
    description: "Davranışların nedeniyle yöneticin seni ofisine çağırıyor. 'İlk gün için beklentilerimizin altında bir performans sergilediğini düşünüyorum. Bu konuyu konuşmamız gerekiyor.' diyor.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80&w=1000",
    dimension: "negative_impression",
    choices: [
      {
        text: "Özür dile ve hatalarını kabul et",
        consequence: "İkinci bir şans elde edersin.",
        score: { analysis: 3, communication: 4 },
        nextDimension: "team_introduction"
      },
      {
        text: "Savunmaya geç ve mazeretler üret",
        consequence: "Olumsuz durumu daha da kötüleştirirsin.",
        score: { analysis: 0, communication: 0 },
        nextDimension: "failure"
      }
    ]
  },
  {
    title: "Ekip Tanışması",
    description: "Departmana ulaştığında, ekip lideri seni karşılıyor ve diğer çalışanlarla tanıştırıyor. 'Bugün senin ilk günün, sana projelerimizi ve çalışma sistemimizi göstereceğiz.' diyor.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    dimension: "team_introduction",
    choices: [
      {
        text: "Herkesle aktif şekilde tanış ve sorular sor",
        consequence: "Ekiple hızlıca kaynaşırsın.",
        score: { analysis: 3, communication: 5 },
        nextDimension: "first_task"
      },
      {
        text: "Sessiz kal ve sadece dinle",
        consequence: "İlk günde mesafeli bir izlenim bırakırsın.",
        score: { analysis: 4, communication: 1 },
        nextDimension: "first_task"
      }
    ]
  },
  {
    title: "İlk Görev",
    description: "Ekip lideri sana ilk görevini veriyor: 'Önce seni sistemlerimizle tanıştıralım ve basit bir görev verelim. Bu görev senin yeteneklerini görmemizi sağlayacak.'",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    dimension: "first_task",
    choices: [
      {
        text: "Hevesle görevi kabul et ve hemen başla",
        consequence: "Motivasyonun takdir görüyor.",
        score: { analysis: 4, communication: 3 },
        nextDimension: "task_completion"
      },
      {
        text: "Daha fazla açıklama iste",
        consequence: "Detaylara olan ilgin olumlu karşılanıyor.",
        score: { analysis: 5, communication: 3 },
        nextDimension: "task_completion"
      }
    ]
  },
  {
    title: "Görev Tamamlama",
    description: "İlk görevini tamamladın ve sonuçları ekip liderine gösterme zamanı geldi.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    dimension: "task_completion",
    choices: [
      {
        text: "Ayrıntılı açıklamalarla sunumunu yap",
        consequence: "Analitik yaklaşımın takdir ediliyor.",
        score: { analysis: 5, communication: 4 },
        nextDimension: "day_end"
      },
      {
        text: "Kısaca sonuçları göster",
        consequence: "Öz ve net iletişimin beğeniliyor.",
        score: { analysis: 3, communication: 3 },
        nextDimension: "day_end"
      }
    ]
  },
  {
    title: "Günün Sonu",
    description: "İlk günün sonuna geldin. Ekip lideri yanına gelerek 'Bugün için nasıl hissediyorsun? İlk izlenimlerin neler?' diye soruyor.",
    image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?auto=format&fit=crop&q=80&w=1000",
    dimension: "day_end",
    choices: [
      {
        text: "Heyecanlı olduğunu ve çok şey öğrendiğini paylaş",
        consequence: "Pozitif tutumun beğeni topluyor.",
        score: { analysis: 3, communication: 5 },
        nextDimension: "success"
      },
      {
        text: "Yapıcı geri bildirimler ver",
        consequence: "Profesyonel yaklaşımın takdir ediliyor.",
        score: { analysis: 5, communication: 4 },
        nextDimension: "success"
      }
    ]
  }
];