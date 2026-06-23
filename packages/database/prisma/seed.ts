import { PrismaClient, Role } from "@prisma/client";
import { ACHIEVEMENT_DEFINITIONS, calcActivityIntensity } from "@noorjourney/shared";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const ACHIEVEMENT_I18N: Record<
  string,
  { title: { ky: string; ru: string; en: string; ar: string }; description: { ky: string; ru: string; en: string; ar: string } }
> = {
  first_page: {
    title: {
      ky: "Биринчи бет",
      ru: "Первая страница",
      en: "First Page",
      ar: "الصفحة الأولى",
    },
    description: {
      ky: "Биринчи бетти окудыңыз",
      ru: "Вы прочитали первую страницу",
      en: "You read your first page",
      ar: "قرأت صفحتك الأولى",
    },
  },
  streak_7: {
    title: {
      ky: "7 күн streak",
      ru: "Серия 7 дней",
      en: "7 Day Streak",
      ar: "سلسلة 7 أيام",
    },
    description: {
      ky: "7 күн катары окудыңыз",
      ru: "7 дней подряд занимались",
      en: "7 consecutive days of study",
      ar: "7 أيام متتالية من الدراسة",
    },
  },
  streak_30: {
    title: {
      ky: "30 күн streak",
      ru: "Серия 30 дней",
      en: "30 Day Streak",
      ar: "سلسلة 30 يوماً",
    },
    description: {
      ky: "30 күн катары окудыңыз",
      ru: "30 дней подряд занимались",
      en: "30 consecutive days of study",
      ar: "30 يوماً متتالياً من الدراسة",
    },
  },
  pages_100: {
    title: {
      ky: "100 бет",
      ru: "100 страниц",
      en: "100 Pages Read",
      ar: "100 صفحة",
    },
    description: {
      ky: "100 бет окудыңыз",
      ru: "Прочитано 100 страниц",
      en: "100 pages read in total",
      ar: "قرأت 100 صفحة إجمالاً",
    },
  },
  repetitions_500: {
    title: {
      ky: "500 кайталоо",
      ru: "500 повторений",
      en: "500 Repetitions",
      ar: "500 تكرار",
    },
    description: {
      ky: "500 кайталоо жасадыңыз",
      ru: "500 повторений выполнено",
      en: "500 repetitions completed",
      ar: "أكملت 500 تكرار",
    },
  },
  first_audio: {
    title: {
      ky: "Биринчи кыраат",
      ru: "Первая запись",
      en: "First Audio Submission",
      ar: "أول تسجيل صوتي",
    },
    description: {
      ky: "Биринчи аудио кыраатыңызды тапшырдыңыз",
      ru: "Вы отправили первую аудиозапись",
      en: "You submitted your first recitation audio",
      ar: "قدمت أول تسجيل لتلاوتك",
    },
  },
};

async function main() {
  const passwordHash = await bcrypt.hash("password123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@noorjourney.kg" },
    update: {},
    create: {
      email: "admin@noorjourney.kg",
      fullName: "Админ",
      passwordHash,
      locale: "ky",
      roles: { create: { role: Role.ADMIN } },
    },
  });

  const teacher = await prisma.user.upsert({
    where: { email: "ustaz@noorjourney.kg" },
    update: {},
    create: {
      email: "ustaz@noorjourney.kg",
      fullName: "Устаз Ахмад",
      passwordHash,
      locale: "ky",
      roles: { create: { role: Role.TEACHER } },
      teacherProfile: {
        create: {
          bio: "Куран мугалими",
          specialization: "Хифз",
          yearsOfExperience: 10,
        },
      },
    },
  });

  const student = await prisma.user.upsert({
    where: { email: "student@noorjourney.kg" },
    update: {},
    create: {
      email: "student@noorjourney.kg",
      fullName: "Окуучу Али",
      passwordHash,
      locale: "ky",
      roles: { create: { role: Role.STUDENT } },
      studentProfile: { create: { currentLevel: "Баштапкы" } },
      streak: {
        create: {
          currentStreak: 3,
          longestStreak: 7,
          totalActiveDays: 12,
          lastActivityDate: new Date(),
        },
      },
    },
  });

  const parent = await prisma.user.upsert({
    where: { email: "parent@noorjourney.kg" },
    update: {},
    create: {
      email: "parent@noorjourney.kg",
      fullName: "Ата-эне",
      passwordHash,
      locale: "ky",
      roles: { create: { role: Role.PARENT } },
      parentProfile: { create: {} },
    },
  });

  await prisma.parentStudentLink.upsert({
    where: {
      parentId_studentId: { parentId: parent.id, studentId: student.id },
    },
    update: {},
    create: {
      parentId: parent.id,
      studentId: student.id,
      relationship: "ата",
    },
  });

  const course = await prisma.course.upsert({
    where: { id: "seed-course-hifz" },
    update: {},
    create: {
      id: "seed-course-hifz",
      name: "Хифз программасы - 1 деңгээл",
      description: "Куран жаттоо негиздери",
      type: "MEMORIZATION",
      status: "ACTIVE",
      createdById: admin.id,
      modules: {
        create: [
          {
            title: "30-жүз",
            orderIndex: 1,
            quranStartSurah: 78,
            quranStartAyah: 1,
            quranEndSurah: 114,
            quranEndAyah: 6,
          },
        ],
      },
    },
  });

  const group = await prisma.group.upsert({
    where: { inviteCode: "DEMO-GROUP-001" },
    update: {},
    create: {
      name: "Баштапкы топ",
      courseId: course.id,
      teacherId: teacher.id,
      inviteCode: "DEMO-GROUP-001",
      students: {
        create: { studentId: student.id },
      },
    },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existingPlan = await prisma.dailyPlan.findFirst({
    where: { studentId: student.id, planDate: today },
  });

  if (!existingPlan) {
    await prisma.dailyPlan.create({
      data: {
        groupId: group.id,
        studentId: student.id,
        teacherId: teacher.id,
        planDate: today,
        title: "Бүгүнкү план",
        notes: "Тынч көнүл менен окуңуз",
        status: "PUBLISHED",
        items: {
          create: [
            {
              type: "READ",
              surahStart: 1,
              ayahStart: 1,
              surahEnd: 1,
              ayahEnd: 7,
              targetPages: 1,
              targetRepetitions: 3,
              orderIndex: 0,
            },
            {
              type: "MEMORIZE",
              surahStart: 112,
              ayahStart: 1,
              surahEnd: 112,
              ayahEnd: 4,
              targetRepetitions: 10,
              orderIndex: 1,
            },
          ],
        },
      },
    });
  }

  for (const [index, def] of ACHIEVEMENT_DEFINITIONS.entries()) {
    const i18n = ACHIEVEMENT_I18N[def.code];
    await prisma.achievement.upsert({
      where: { code: def.code },
      update: {
        category: def.category,
        threshold: def.threshold ?? null,
        sortOrder: index,
        criteria: def.criterion,
        icon: def.icon,
      },
      create: {
        code: def.code,
        title: i18n.title.ky,
        description: i18n.description.ky,
        icon: def.icon,
        category: def.category,
        threshold: def.threshold ?? null,
        sortOrder: index,
        criteria: def.criterion,
      },
    });
  }

  // Demo heatmap — last 90 days of activity
  for (let i = 0; i < 90; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    if (i % 4 === 0) continue;

    const pages = i % 7 === 0 ? 3 : 1;
    const reps = i % 3 === 0 ? 15 : 5;
    const submissions = 1;

    await prisma.studentActivityDay.upsert({
      where: {
        studentId_activityDate: { studentId: student.id, activityDate: d },
      },
      update: {},
      create: {
        studentId: student.id,
        activityDate: d,
        pagesRead: pages,
        repetitions: reps,
        submissionCount: submissions,
        intensity: calcActivityIntensity(pages, reps, submissions),
      },
    });
  }

  // Demo Quran journey map — first 5 surahs
  const surahStatuses = [
    { surahNumber: 1, status: "MASTERED" as const, ayahsMemorized: 7 },
    { surahNumber: 2, status: "IN_PROGRESS" as const, ayahsMemorized: 45 },
    { surahNumber: 112, status: "MEMORIZED" as const, ayahsMemorized: 4 },
    { surahNumber: 113, status: "MEMORIZED" as const, ayahsMemorized: 5 },
    { surahNumber: 114, status: "MEMORIZED" as const, ayahsMemorized: 6 },
  ];

  for (const s of surahStatuses) {
    await prisma.surahProgress.upsert({
      where: {
        studentId_surahNumber: { studentId: student.id, surahNumber: s.surahNumber },
      },
      update: {},
      create: {
        studentId: student.id,
        surahNumber: s.surahNumber,
        status: s.status,
        ayahsMemorized: s.ayahsMemorized,
        pagesEstimate: s.surahNumber === 2 ? 8 : 0.5,
        lastPracticedAt: new Date(),
        completedAt: s.status === "MASTERED" || s.status === "MEMORIZED" ? new Date() : null,
      },
    });
  }

  const now = new Date();
  const periodKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  await prisma.groupRankingEntry.upsert({
    where: {
      groupId_studentId_period_periodKey: {
        groupId: group.id,
        studentId: student.id,
        period: "MONTHLY",
        periodKey,
      },
    },
    update: {},
    create: {
      groupId: group.id,
      studentId: student.id,
      period: "MONTHLY",
      periodKey,
      rank: 1,
      score: 245,
      pagesRead: 18,
      repetitions: 120,
      activeDays: 12,
      currentStreak: 3,
    },
  });

  await prisma.monthlyChampion.upsert({
    where: {
      groupId_year_month: {
        groupId: group.id,
        year: now.getFullYear(),
        month: now.getMonth() + 1,
      },
    },
    update: {},
    create: {
      groupId: group.id,
      studentId: student.id,
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      score: 245,
      metrics: { pagesRead: 18, repetitions: 120, activeDays: 12, currentStreak: 3 },
    },
  });

  const firstPage = await prisma.achievement.findUnique({ where: { code: "first_page" } });
  if (firstPage) {
    await prisma.userAchievement.upsert({
      where: {
        userId_achievementId: { userId: student.id, achievementId: firstPage.id },
      },
      update: {},
      create: { userId: student.id, achievementId: firstPage.id },
    });
  }

  console.log("✅ Seed ийгиликтүү аяктады");
  console.log("Админ:    admin@noorjourney.kg / password123");
  console.log("Устаз:    ustaz@noorjourney.kg / password123");
  console.log("Окуучу:   student@noorjourney.kg / password123");
  console.log("Ата-эне:  parent@noorjourney.kg / password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
