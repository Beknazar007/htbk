/** Canonical achievement codes — must match DB seed */
export const ACHIEVEMENT_CODES = {
  FIRST_PAGE: "first_page",
  STREAK_7: "streak_7",
  STREAK_30: "streak_30",
  PAGES_100: "pages_100",
  REPETITIONS_500: "repetitions_500",
  FIRST_AUDIO: "first_audio",
} as const;

export type AchievementCode = (typeof ACHIEVEMENT_CODES)[keyof typeof ACHIEVEMENT_CODES];

export type AchievementCriterion = {
  type: "first_page" | "streak" | "pages_total" | "repetitions_total" | "first_audio";
  threshold?: number;
};

export const ACHIEVEMENT_DEFINITIONS: Array<{
  code: AchievementCode;
  category: "MILESTONE" | "STREAK" | "VOLUME" | "SUBMISSION";
  threshold?: number;
  icon: string;
  criterion: AchievementCriterion;
}> = [
  {
    code: ACHIEVEMENT_CODES.FIRST_PAGE,
    category: "MILESTONE",
    icon: "📖",
    criterion: { type: "first_page" },
  },
  {
    code: ACHIEVEMENT_CODES.STREAK_7,
    category: "STREAK",
    threshold: 7,
    icon: "🔥",
    criterion: { type: "streak", threshold: 7 },
  },
  {
    code: ACHIEVEMENT_CODES.STREAK_30,
    category: "STREAK",
    threshold: 30,
    icon: "⭐",
    criterion: { type: "streak", threshold: 30 },
  },
  {
    code: ACHIEVEMENT_CODES.PAGES_100,
    category: "VOLUME",
    threshold: 100,
    icon: "📚",
    criterion: { type: "pages_total", threshold: 100 },
  },
  {
    code: ACHIEVEMENT_CODES.REPETITIONS_500,
    category: "VOLUME",
    threshold: 500,
    icon: "🔁",
    criterion: { type: "repetitions_total", threshold: 500 },
  },
  {
    code: ACHIEVEMENT_CODES.FIRST_AUDIO,
    category: "SUBMISSION",
    icon: "🎙️",
    criterion: { type: "first_audio" },
  },
];

/** GitHub-style heatmap intensity 0–4 */
export function calcActivityIntensity(
  pagesRead: number,
  repetitions: number,
  submissionCount: number
): number {
  const score = pagesRead * 2 + repetitions * 0.05 + submissionCount;
  if (score <= 0) return 0;
  if (score < 2) return 1;
  if (score < 5) return 2;
  if (score < 10) return 3;
  return 4;
}

/** Leaderboard score: weighted activity for rankings & monthly champion */
export function calcRankingScore(input: {
  pagesRead: number;
  repetitions: number;
  activeDays: number;
  currentStreak: number;
}): number {
  return (
    input.pagesRead * 10 +
    input.repetitions * 0.5 +
    input.activeDays * 5 +
    input.currentStreak * 15
  );
}

export function rankingPeriodKey(period: "WEEKLY" | "MONTHLY" | "ALL_TIME", date: Date): string {
  if (period === "ALL_TIME") return "all";
  if (period === "MONTHLY") {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  }
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay());
  const oneJan = new Date(start.getFullYear(), 0, 1);
  const week = Math.ceil(((start.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7);
  return `${start.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Total surahs in the Quran — for journey map */
export const QURAN_SURAH_COUNT = 114;
