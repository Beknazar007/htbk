export type DailyAyah = {
  id: number;
  surah: number;
  surahName: { ar: string; en: string };
  ayahStart: number;
  ayahEnd: number;
  textAr: string;
  translation: { ky: string; ru: string; en: string };
};

export const DAILY_AYAHS: DailyAyah[] = [
  {
    id: 1,
    surah: 1,
    surahName: { ar: "الفاتحة", en: "Al-Fatihah" },
    ayahStart: 1,
    ayahEnd: 7,
    textAr: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: {
      ky: "Аллахтын аты менен (баштайм), Улуу ырайымдуу, Чексиз мээримдүү Аллахтын.",
      ru: "Во имя Аллаха, Милостивого, Милосердного.",
      en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    },
  },
  {
    id: 2,
    surah: 2,
    surahName: { ar: "البقرة", en: "Al-Baqarah" },
    ayahStart: 286,
    ayahEnd: 286,
    textAr: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: {
      ky: "Аллах эч бир жанга мүмкүнчүлүгүнөн ашкан жүктү жүктөбөйт.",
      ru: "Аллах не возлагает на душу сверх её возможностей.",
      en: "Allah does not burden a soul beyond that it can bear.",
    },
  },
  {
    id: 3,
    surah: 94,
    surahName: { ar: "الشرح", en: "Ash-Sharh" },
    ayahStart: 5,
    ayahEnd: 6,
    textAr: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: {
      ky: "Албетте, кыйынчылык менен бирге жеңилдик бар.",
      ru: "Воистину, за трудностью наступает облегчение.",
      en: "Indeed, with hardship comes ease.",
    },
  },
  {
    id: 4,
    surah: 3,
    surahName: { ar: "آل عمران", en: "Ali 'Imran" },
    ayahStart: 139,
    ayahEnd: 139,
    textAr: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
    translation: {
      ky: "Алслабаштаңдар, капа болбоңдар, эгер ишенимдүүлөр болсоңор, силер жеңишкерсиздер.",
      ru: "Не слабейте и не печальтесь, ведь вы будете выше, если вы верующие.",
      en: "So do not weaken and do not grieve, and you will be superior if you are believers.",
    },
  },
  {
    id: 5,
    surah: 65,
    surahName: { ar: "الطلاق", en: "At-Talaq" },
    ayahStart: 3,
    ayahEnd: 3,
    textAr: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: {
      ky: "Аллахка таянган адамга Аллах өзү жетишет.",
      ru: "А кто уповает на Аллаха — того Он достаточен.",
      en: "And whoever relies upon Allah — then He is sufficient for him.",
    },
  },
  {
    id: 6,
    surah: 20,
    surahName: { ar: "طه", en: "Ta-Ha" },
    ayahStart: 114,
    ayahEnd: 114,
    textAr: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
    translation: {
      ky: "«Ээбим, менин билимимди көбөйт» — деп айт.",
      ru: "И скажи: «Господи! Приумножь мне знание».",
      en: "And say: My Lord, increase me in knowledge.",
    },
  },
  {
    id: 7,
    surah: 13,
    surahName: { ar: "الرعد", en: "Ar-Ra'd" },
    ayahStart: 28,
    ayahEnd: 28,
    textAr: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    translation: {
      ky: "Албетте, Аллахты эскерүү менен жүрөктөр тынчтыкка батышат.",
      ru: "Воистину, сердца обретают покой в поминании Аллаха.",
      en: "Unquestionably, by the remembrance of Allah hearts are assured.",
    },
  },
];

export function getDailyAyah(date = new Date()): DailyAyah {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return DAILY_AYAHS[dayOfYear % DAILY_AYAHS.length];
}
