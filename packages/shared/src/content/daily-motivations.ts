import type { Locale } from "../locales";

export type DailyMotivation = {
  id: number;
  icon: string;
  message: Record<Locale, string>;
  source?: string;
};

export const DAILY_MOTIVATIONS: DailyMotivation[] = [
  {
    id: 1,
    icon: "🌙",
    message: {
      ky: "Куран — жүрөктүн дарысы. Бүгүн жаңы аят жаттаңыз.",
      ru: "Коран — лекарство для сердца. Выучите сегодня новый аят.",
      en: "The Quran is healing for the heart. Memorize a new ayah today.",
      ar: "القرآن شفاء للقلوب. احفظ آية جديدة اليوم.",
    },
    source: "Исламдык мотивация",
  },
  {
    id: 2,
    icon: "📿",
    message: {
      ky: "Туруктуу окуу — жеңиштин ачкычы. Бүгүн 10 мүнөт Куран окуңуз.",
      ru: "Постоянство в чтении — ключ к успеху. Прочитайте Коран 10 минут сегодня.",
      en: "Consistency in reading is the key to success. Read Quran for 10 minutes today.",
      ar: "المواظبة على القراءة مفتاح النجاح. اقرأ القرآن عشر دقائق اليوم.",
    },
  },
  {
    id: 3,
    icon: "✨",
    message: {
      ky: "Ар бир кайталоо — жакшы амал. Аллах кабыл кылсын!",
      ru: "Каждое повторение — доброе дело. Да примет Аллах!",
      en: "Every repetition is a good deed. May Allah accept it!",
      ar: "كل تكرار حسنة. تقبل الله!",
    },
  },
  {
    id: 4,
    icon: "🤲",
    message: {
      ky: "Дароо окуудан мурун: «Бисмиллях» деп баштаңыз.",
      ru: "Перед чтением скажите: «Бисмиллях».",
      en: "Before reading, begin with: Bismillah.",
      ar: "قبل القراءة قل: بسم الله.",
    },
  },
  {
    id: 5,
    icon: "🔥",
    message: {
      ky: "Streak үзүлбөсүн! Бүгүн кеминде бир бет окуңуз.",
      ru: "Не прерывайте серию! Прочитайте хотя бы одну страницу сегодня.",
      en: "Keep your streak alive! Read at least one page today.",
      ar: "حافظ على سلسلتك! اقرأ صفحة واحدة على الأقل اليوم.",
    },
  },
  {
    id: 6,
    icon: "💎",
    message: {
      ky: "Хафиз болуу — эң улуу сыйлыктардын бири.",
      ru: "Быть хафизом — одна из величайших наград.",
      en: "Becoming a hafiz is among the greatest honors.",
      ar: "أن تكون حافظاً من أعظم الشرفات.",
    },
  },
  {
    id: 7,
    icon: "🌅",
    message: {
      ky: "Эртең мененки Куран — бүткүл күнгө баракат.",
      ru: "Утреннее чтение Корана — баракат на весь день.",
      en: "Morning Quran recitation brings barakah for the whole day.",
      ar: "قراءة القرآن في الصباح بركة ليومك كله.",
    },
  },
];

export function getDailyMotivation(date = new Date()): DailyMotivation {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return DAILY_MOTIVATIONS[dayOfYear % DAILY_MOTIVATIONS.length];
}
