# NoorJourney — Архитектура (Premium + Production)

Куран үйрөнүү, жаттоо, revision жана прогресс көзөмөл платформасы.  
Премиум исламдык билим берүү продукту — мектеп башкаруу системасы эмес.

---

## Архитектура катмарлары

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PREMIUM EXPERIENCE LAYER                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────┐  │
│  │ i18n 4тил│ │ Theme    │ │ Islamic UX   │ │ Mobile   │ │ Telegram     │  │
│  │ ky/ru/   │ │ light/   │ │ calendar ·   │ │ first ·  │ │ Mini App     │  │
│  │ en/ar+RTL│ │ dark     │ │ ayah · motiv │ │ PWA      │ │ TWA SDK      │  │
│  └──────────┘ └──────────┘ └──────────────┘ └──────────┘ └──────────────┘  │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼──────────────────────────────────────────┐
│                    GAMIFICATION LAYER                                        │
│  Streaks · Badges · Group Rankings · Monthly Champion · Heatmap · Journey Map│
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼──────────────────────────────────────────┐
│                    LEARNING LAYER (core)                                     │
│  Daily Plans · Submissions · Recitation Review · Progress                    │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼──────────────────────────────────────────┐
│                    ORGANIZATION LAYER                                        │
│  Courses · Groups · Teacher–Student · Parent Links                           │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼──────────────────────────────────────────┐
│                    PLATFORM LAYER                                            │
│  Auth · RBAC · Audit · Admin Analytics                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Продукт архитектурасы

### 1.1 Premium Experience — негизги айырмачылык

Premium катмар аркылуу NoorJourney жөн гана «тапшырма тапшыруу» эмес, **күнүмдүк руханий практика** сезилимин берет. Ар бир ролдун dashboard'унда:

| Виджет | Кайда көрүнөт | Максаты |
|--------|---------------|---------|
| `IslamicDateCard` | Бардык dashboard'дор | Күнүмдүк контекст (Грегориан + Хижри) |
| `DailyAyahCard` | Student, Teacher, Parent | Куран менен байланыш |
| `DailyMotivationCard` | Student, Teacher, Parent | Мотивация жана эскертүү |
| `LanguageSwitcher` | Header (бардык ролдор) | Тил алмаштыруу |
| `ThemeToggle` | Header | Light / Dark / System |
| `MobileShell` | Authenticated layouts | Мобилдик навигация |

**Компонент:** `DashboardPremiumWidgets` — үч виджетти бирге чыгарат.

### 1.2 Домен модулдары

| Модуль | Ролдор | Premium байланышы |
|--------|--------|-------------------|
| Identity | Баары | `users.locale`, Telegram link |
| Curriculum | Admin, Teacher | i18n курстар аталышы (келечек) |
| Cohorts | Teacher | — |
| Planning | Teacher | План тексттери i18n |
| Practice | Student | Мобилдик submit, Telegram |
| Assessment | Teacher | Аудио review (мобилдик queue) |
| Progress | Student, Parent | Dashboard виджеттери |
| Gamification | Student | Streak, badges, heatmap, journey map, rankings |
| Reporting | Parent | Жумалык отчёт + premium cards |
| Governance | Admin | CMS (келечек): ayah/motivation |

### 1.3 Дизайн принциптери

| Принцип | Ишке ашыруу |
|---------|-------------|
| Student-first | Premium виджеттер + план бир экранда |
| Spiritual, not bureaucratic | Аят, хижри дата, жылуу палитра (`cream` / `noor`) |
| Mobile-native | Bottom nav, `100dvh`, safe areas |
| Arabic-first-class | RTL, Amiri шрифт, `start`/`end` Tailwind |
| Telegram-ready | CSP, SDK, theme sync, safe-area padding |

---

## 2. Система архитектурасы

### 2.1 Жогорку деңгээлдеги схема

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Browser    │  │  Telegram    │  │  PWA iOS/    │  │  Tablet      │
│   (web)      │  │  Mini App    │  │  Android     │  │  (teacher)   │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                  │                  │
       └─────────────────┴──────────────────┴──────────────────┘
                                    ▼
              ┌─────────────────────────────────────────┐
              │         Next.js 15 — apps/web            │
              │  ┌───────────────────────────────────┐  │
              │  │ AppProviders (client stack):       │  │
              │  │ Theme → i18n → Telegram → Auth     │  │
              │  └───────────────────────────────────┘  │
              │  App Router (RSC) + /api/v1 REST        │
              │  Middleware: Auth · RBAC · Locale        │
              └─────────────┬───────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────────┐
│ @noorjourney│    │ @noorjourney│    │ PostgreSQL 16   │
│ /shared     │    │ /database   │    │ (+ Redis prod)  │
│ i18n·content│    │ Prisma      │    │ S3/R2 audio     │
│ calendar    │    └─────────────┘    └─────────────────┘
└─────────────┘
```

### 2.2 Provider стеки (client)

Ирет маанилүү — ар бир провайдер кийинкиге контекст берет:

```
ThemeProvider (next-themes)
  └── I18nProvider (locale + dir)
        └── TelegramProvider (TWA SDK + theme sync)
              └── AuthProvider (NextAuth session)
```

| Provider | Файл | Милдети |
|----------|------|---------|
| `ThemeProvider` | `components/providers/theme-provider.tsx` | `class`-based dark mode |
| `I18nProvider` | `components/providers/i18n-provider.tsx` | `lang`, `dir`, cookie, API sync |
| `TelegramProvider` | `components/providers/telegram-provider.tsx` | SDK init, expand, colors |
| `AuthProvider` | `components/providers/session-provider.tsx` | Session context |

**Root layout:** `app/layout.tsx` — SSR `lang`/`dir`, Inter + Amiri шрифттер, Telegram script.

### 2.3 Технология стеки

| Катмар | Технология |
|--------|------------|
| Frontend | Next.js 15, React 19, Tailwind CSS |
| Auth | NextAuth v5 (Credentials + Telegram initData) |
| API | REST `/api/v1/*` |
| ORM | Prisma |
| DB | SQLite (dev) → PostgreSQL (prod) |
| i18n | JSON dictionaries + `t()` helper |
| Theme | `next-themes` + CSS variables |
| Telegram | `@twa-dev/sdk` + fallback script |
| Monorepo | Turborepo |

---

## 3. Premium Feature #1 — Көп тил (i18n)

### 3.1 Колдоо көрсөтүлгөн тилдер

| Тил | Код | RTL | Шрифт | Intl locale |
|-----|-----|-----|-------|-------------|
| Кыргызча | `ky` | Жок | Inter | `ky-KG` |
| Русский | `ru` | Жок | Inter | `ru-RU` |
| English | `en` | Жок | Inter | `en-US` |
| العربية | `ar` | **Ооба** | Amiri | `ar-SA` |

**Демейки тил:** `ky` (Кыргызстан рыногу)

### 3.2 Архитектура

```
packages/shared/src/
├── locales/
│   ├── ky.json
│   ├── ru.json
│   ├── en.json
│   └── ar.json
├── locales/index.ts      # Locale type, isRtl(), LOCALE_LABELS
└── i18n.ts               # t(locale, key) — type-safe keys
```

### 3.3 RTL колдоо (Араб тили)

| Деңгээл | Ишке ашыруу |
|---------|-------------|
| SSR | `app/layout.tsx` → `html dir={isRtl(locale) ? "rtl" : "ltr"}` |
| Client | `I18nProvider` → `document.documentElement.dir` |
| CSS | Tailwind logical properties: `start`/`end`, `ms`/`me`, `border-e` |
| Шрифт | `.font-arabic` → Amiri; аят тексттери үчүн |
| Компоненттер | `LanguageSwitcher` бардык тилдерди көрсөтөт |

### 3.4 Тил сактоо (persistence)

```
Колдонуучу тил тандайт
    → Cookie: noorjourney_locale (1 жыл)
    → document.lang + document.dir
    → PATCH /api/v1/user/locale (auth болсо users.locale жаңыланат)
    → Кийинки SSR: getServerLocale() cookie же user.locale
```

**API:** `PATCH /api/v1/user/locale` — `{ locale: "ky" | "ru" | "en" | "ar" }`

### 3.5 i18n статусу

| Область | Статус |
|---------|--------|
| Nav, landing, auth | ✅ |
| Student dashboard | ✅ |
| Teacher/Admin/Parent | 🔄 Жарым-жартылай |
| API error messages | 🔄 |
| Admin CMS | ⏳ Келечек |

---

## 4. Premium Feature #2 — Исламдык календарь

### 4.1 Сүрөттөмө

Эки дата бир убакта көрсөтүлөт:
- **Грегориан** — локалдуу формат (ky-KG, ru-RU, en-US, ar-SA)
- **Хижри** — `Intl` исламдык календарь (`u-ca-islamic`, Umm al-Qura)

### 4.2 Архитектура

```
packages/shared/src/calendar.ts
    └── formatDualDate(date, locale) → DualDate
            ├── gregorian (full)
            ├── hijri (full)
            ├── gregorianShort
            └── hijriShort

apps/web/components/islamic/islamic-date-card.tsx
    └── useI18n().locale + formatDualDate(new Date(), locale)
```

**Тышкы API жок** — браузер `Intl.DateTimeFormat` колдонот (тез, акысыз, офлайн).

### 4.3 UI орнотуу

- Student / Teacher / Parent dashboard'дорунун үстүндө
- `DashboardPremiumWidgets` ичинде биринчи карточка
- Dark mode менен ыраатташат (`noor-card`)

---

## 5. Premium Feature #3 — Күнүмдүк аят карточкасы

### 5.1 Сүрөттөмө

Ар күнү бир Куран аяты көрсөтүлөт — араб тексти + котормо (4 тил).

### 5.2 Контент двигатели

```
packages/shared/src/content/daily-ayahs.ts
    └── DailyAyah[] { id, surah, ayah, arabic, translations: { ky, ru, en, ar } }

Ротация: dayOfYear % ayahs.length
```

### 5.3 API

| Метод | Endpoint | Жооп |
|-------|----------|------|
| GET | `/api/v1/daily/ayah?locale=ky` | `{ surah, ayah, arabic, text, reference }` |

**Клиент:** `DailyAyahCard` — fetch же shared content (SSR келечек).

### 5.4 UI

- Араб текст: `.font-arabic`, чоңураак өлчөм
- Сүрө/аят номери: `reference` (мис. «Аль-Фатиха 1:1»)
- RTL режимде араб текст оңдон солго

### 5.5 Келечек (Phase 2)

- `daily_content` DB таблицасы
- Admin CMS: жаңы аят кошуу, ротация башкаруу
- Окуу планы менен байланыш (аят план item'ге шилтеме)

---

## 6. Premium Feature #4 — Күнүмдүк мотивация карточкасы

### 6.1 Сүрөттөмө

Исламдык эскертүүлөр жана мотивациялык билдирүүлөр — ар күнү бирөө.

### 6.2 Контент двигатели

```
packages/shared/src/content/daily-motivations.ts
    └── DailyMotivation[] { id, translations: { ky, ru, en, ar }, source? }

Ротация: dayOfYear % motivations.length
```

### 6.3 API

| Метод | Endpoint | Жооп |
|-------|----------|------|
| GET | `/api/v1/daily/motivation?locale=ru` | `{ text, source? }` |

### 6.4 UI

- `DailyMotivationCard` — иконка + текст + булак (varsa)
- `DailyAyahCard` менен кошо `lg:grid-cols-2` тордо

---

## 7. Premium Feature #5 — Dark / Light Mode

### 7.1 Архитектура

```
next-themes (ThemeProvider)
    └── attribute="class" на <html>
          └── globals.css CSS variables
                ├── :root { --background, --foreground, --card, --border }
                └── .dark { ... }

ThemeToggle: light → dark → system (цикл)
TelegramProvider: WebApp.colorScheme → setTheme() автоматтык
```

### 7.2 Дизайн токендери

| Токен | Light | Dark |
|-------|-------|------|
| Background | `cream-50` (#f9f6ef) | `noor-950` (#042f2e) |
| Card | white | `noor-900/80` |
| Primary | `noor-700` | `noor-600` |
| Border | `noor-100` | `noor-800` |

### 7.3 Компоненттер

Бардык UI `.noor-card`, `.noor-btn`, `.noor-input` dark: варианттары менен.

**PWA:** `manifest.json` + `viewport.themeColor` light/dark үчүн.

---

## 8. Premium Feature #6 — Mobile-First Responsive

### 8.1 Breakpoint стратегиясы

| Breakpoint | Layout | Навигация |
|------------|--------|-----------|
| `< md` (< 768px) | Single column | Bottom tab bar (5 пункт) + hamburger |
| `≥ md` | Sidebar + content | Left sidebar (desktop) |
| All | `min-h-[100dvh]` | Sticky header |

### 8.2 MobileShell архитектурасы

```
MobileShell
├── Desktop: aside (w-64) + main
├── Mobile: sticky header + main + bottom nav (fixed)
├── Slide-over menu (hamburger)
├── Header: LanguageSwitcher + ThemeToggle + user
└── Telegram: safe-area-inset-top padding
```

### 8.3 Touch-first UX

| Элемент | Мобилдик оптимизация |
|---------|---------------------|
| Submit form | Large tap targets, audio record button |
| Review queue | Swipe-friendly cards (келечек) |
| Bottom nav | 5 негизги пункт, active state |
| Cards | `rounded-2xl`, `p-4 sm:p-6` |

### 8.4 PWA

- `public/manifest.json` — standalone, icons, theme
- `appleWebApp.capable` — iOS home screen
- `viewportFit: cover` — notch колдоо
- Offline fallback: ⏳ Phase 2 (daily cards cache)

---

## 9. Premium Feature #7 — Telegram Mini App

### 9.1 Архитектура

```
Telegram Bot (BotFather)
    └── Mini App URL: https://domain.com/telegram
              │
              ▼
app/telegram/page.tsx
    └── Redirect → /login?tg=1 (же dashboard if authed)
              │
              ▼
TelegramProvider
    ├── @twa-dev/sdk import (dynamic)
    ├── WebApp.ready() + expand()
    ├── colorScheme → ThemeProvider sync
    ├── setHeaderColor / setBackgroundColor (noor palette)
    └── initData → POST /api/v1/telegram/auth
```

### 9.2 Коопсуздук

| Чекит | Ишке ашыруу |
|-------|-------------|
| CSP | `frame-ancestors 'self' https://web.telegram.org https://*.telegram.org` |
| Auth | `POST /api/v1/telegram/auth` — initData HMAC (TELEGRAM_BOT_TOKEN) |
| Script | `telegram-web-app.js` async в layout |

### 9.3 UX адаптациясы

| Адаптация | Детал |
|-----------|-------|
| Safe areas | `env(safe-area-inset-top)` header padding |
| Theme | Telegram dark/light → app theme |
| Colors | Header/bg = NoorJourney palette |
| Navigation | Bottom nav иштейт Mini App ичинде |
| Expand | `WebApp.expand()` — толук экран |

### 9.4 Келечек

- [ ] initData → User account linking
- [ ] Telegram Bot push notifications (streak reminder)
- [ ] Deep links: `t.me/bot/app?startapp=plan`

---

## 10. Маалымат базасы дизайны

Негизги схема: `packages/database/prisma/schema.prisma`

### Premium менен байланышкан талаалар

| Модель | Талаа | Максаты |
|--------|-------|---------|
| `User` | `locale` (default: `ky`) | Тил сактоо |
| `User` | `lastActiveAt` | Активдүүлүк |
| ⭐ `DailyContent` | type, locale, body, dayIndex | CMS (келечек) |
| ⭐ `TelegramAccount` | telegramId, userId | Mini App auth |

### Gamification entity'лер ✅

| Модель | Максаты |
|--------|---------|
| `Streak` | Катары окуу күндөрү (`currentStreak`, `longestStreak`, `totalActiveDays`) |
| `Achievement` | Badge аныктамалары (`code`, `category`, `threshold`, `criteria`) |
| `UserAchievement` | Окуучу алган badge'дер |
| `StudentActivityDay` | GitHub-style heatmap (күнүмдүк intensity 0–4) |
| `SurahProgress` | Quran Journey Map (114 сүрө боюнча статус) |
| `GroupRankingEntry` | Топ рейтинги (WEEKLY / MONTHLY / ALL_TIME кэш) |
| `MonthlyChampion` | Айлык чемпион (топ боюнча 1 окуучу) |

### Башка entity'лер

User, UserRole, Group, DailyPlan, PlanItem, Submission, RecitationAudio, Review, ProgressSnapshot, WeeklyReport, Notification, AuditLog.

---

## 11. Gamification архитектурасы

### 11.1 Жалпы схема

```
Тапшыруу / Аудио жүктөө
        │
        ▼
┌───────────────────┐
│ GamificationEngine │  (lib/services/gamification.ts — M4)
└─────────┬─────────┘
          │
    ┌─────┼─────┬──────────┬────────────┬──────────────┐
    ▼     ▼     ▼          ▼            ▼              ▼
 Streak  Activity  Achievement  SurahProgress  GroupRanking
 update   Day      evaluator    updater        recompute
```

### 11.2 Streak системасы

**Эреже:** Окуучу күнүнө **кеминде бир тапшыруу** жиберсе streak сакталат.

| Талаа | Сүрөттөмө |
|-------|-----------|
| `currentStreak` | Учурдагы катар күн саны |
| `longestStreak` | Эң узун серия (рекорд) |
| `lastActivityDate` | Акыркы активдүү күн |
| `streakStartedAt` | Учурдагы серия башталган күн |
| `totalActiveDays` | Бардык убакта активдүү күндөр |

**Логика (submission POST):**
```
lastActivity == бүгүн  → currentStreak өзгөрбөйт
lastActivity == кечээ → currentStreak + 1
башка               → currentStreak = 1, streakStartedAt = бүгүн
longestStreak = max(current, longest)
totalActiveDays + 1 (эгер бүгүн биринчи активдүүлүк болсо)
```

**UI:** Student dashboard stat card, parent view, rankings factor.

### 11.3 Achievement Badges

Аныктамалар: `packages/shared/src/gamification.ts` → `ACHIEVEMENT_DEFINITIONS`

| Code | Badge | Category | Trigger |
|------|-------|----------|---------|
| `first_page` | First Page | MILESTONE | `pagesRead > 0` биринчи тапшыруу |
| `streak_7` | 7 Day Streak | STREAK | `currentStreak >= 7` |
| `streak_30` | 30 Day Streak | STREAK | `currentStreak >= 30` |
| `pages_100` | 100 Pages Read | VOLUME | Жалпы `pagesRead >= 100` |
| `repetitions_500` | 500 Repetitions | VOLUME | Жалпы `repetitionCount >= 500` |
| `first_audio` | First Audio Submission | SUBMISSION | Биринчи `RecitationAudio` |

**DB:** `Achievement.criteria` JSON — `{ type, threshold? }`  
**Evaluator:** тапшыруудан кийин иштейт → `UserAchievement` upsert + `Notification`

### 11.4 Monthly Student Champion

Ар топ үчүн ай сайын **1 чемпион** — эң жогорку `score`.

**Score формуласы** (`calcRankingScore`):
```
score = pagesRead×10 + repetitions×0.5 + activeDays×5 + currentStreak×15
```

**DB:** `MonthlyChampion` — `@@unique([groupId, year, month])`

**Cron (айдын акырында):**
```
Ар активдүү топ үчүн:
  → GroupRankingEntry (MONTHLY) эсептөө
  → rank=1 окуучуну MonthlyChampion каттоо
  → Notification окуучуга + топ чатка (келечек)
```

**UI:** `/student/rankings` — «Бул айдын чемпиону 🏆» banner

### 11.5 Group Rankings

**Колдоо көрсөтүлгөн мезгилдер:** `WEEKLY` | `MONTHLY` | `ALL_TIME`

**DB:** `GroupRankingEntry`
- `periodKey`: `"2026-06"` (айлык), `"2026-W23"` (жумалык), `"all"`
- `rank`, `score`, `pagesRead`, `repetitions`, `activeDays`, `currentStreak`

**Кайра эсептөө:** тапшыруудан кийин async же cron (5 мүн)

**UI:** `/student/rankings` — leaderboard таблицасы, топ 10

**Чектөө:** Рейтинг **топ ичинде гана** (платформа боюнча эмес).

### 11.6 Progress Heatmap (GitHub-style)

**DB:** `StudentActivityDay` — окуучу + күн (unique)

| Талаа | Сүрөттөмө |
|-------|-----------|
| `intensity` | 0–4 (жарыктык деңгээли) |
| `pagesRead` | Күнүмдүк беттер |
| `repetitions` | Күнүмдүк кайталоо |
| `submissionCount` | Тапшыруу саны |

**Intensity** (`calcActivityIntensity`):
```
score = pagesRead×2 + repetitions×0.05 + submissionCount
0 → жок | 1 → аз | 2 → орто | 3 → жакшы | 4 → отлично
```

**UI:** `/student/progress` — 52 жумалык grid, hover tooltip (дата + stats)  
**Компонент:** `components/gamification/activity-heatmap.tsx` ⏳

### 11.7 Quran Journey Map

**DB:** `SurahProgress` — окуучу × сүрө (1–114), `@@unique`

| Status | Мааниси |
|--------|---------|
| `NOT_STARTED` | Али башталган жок |
| `IN_PROGRESS` | Жаттоо/окуу процессинде |
| `MEMORIZED` | Жатталды (мугалим макулдады) |
| `MASTERED` | Чебер деңгээл (revision өттү) |

**Жаңылоо триггерлери:**
- Submission `surahStart`/`surahEnd` → тиешелүү `SurahProgress` жаңылоо
- Review `APPROVED` → status `MEMORIZED` же `MASTERED`

**UI:** `/student/progress` — 114 сүрө интерактивдик карта (grid/timeline)  
**Компонент:** `components/gamification/quran-journey-map.tsx` ⏳  
**Константа:** `QURAN_SURAH_COUNT = 114`

### 11.8 Gamification API (M4)

| Метод | Endpoint | Сүрөттөмө |
|-------|----------|-----------|
| GET | `/api/v1/gamification/streak` | Учурдагы streak |
| GET | `/api/v1/gamification/achievements` | Бардык + алынгандар |
| GET | `/api/v1/gamification/heatmap?year=` | Activity days |
| GET | `/api/v1/gamification/journey` | 114 surah progress |
| GET | `/api/v1/gamification/rankings/groups/:id?period=` | Топ рейтинги |
| GET | `/api/v1/gamification/champions/groups/:id` | Айлык чемпиондор |

### 11.9 Gamification беттери

| Маршрут | Компоненттер | Статус |
|---------|--------------|--------|
| `/student` | Streak stat card | ✅ |
| `/student/achievements` | Badge grid (locked/unlocked) | ✅ |
| `/student/progress` | Heatmap + Journey Map + charts | ⏳ |
| `/student/rankings` | Leaderboard + Monthly Champion | ⏳ |
| `/parent` | Child streak + champion badge | 🔄 |
| `/teacher/groups/[id]` | Group rankings overview | ⏳ |

### 11.10 Gamification папка структурасы

```
packages/shared/src/
└── gamification.ts          # Codes, definitions, score/intensity helpers

apps/web/
├── components/gamification/   # ⏳ UI
│   ├── streak-badge.tsx
│   ├── achievement-grid.tsx
│   ├── activity-heatmap.tsx
│   ├── quran-journey-map.tsx
│   ├── group-leaderboard.tsx
│   └── monthly-champion-banner.tsx
├── lib/services/
│   └── gamification.ts      # ⏳ Engine: streak, achievements, activity day
└── app/api/v1/gamification/ # ⏳ REST endpoints
```

---

## 12. Колдонуучу агымдары (Premium + Gamification)

### 11.1 Окуучу — күнүмдүк цикл

```
Кирүү (Web / Telegram / PWA)
    → Dashboard Premium Widgets:
        IslamicDateCard → DailyAyahCard → DailyMotivationCard
    → Streak + бүгүнкү план preview
    → /student/plan → /student/submit
    → GamificationEngine: streak · activity day · badges
    → Мугалим текшерет → SurahProgress жаңыланат
    → /student/progress (heatmap + journey map)
    → /student/rankings (топ рейтинги + айлык чемпион)
```

### 11.2 Telegram аркылуу кирүү

```
t.me/bot → Mini App ачылат
    → /telegram → TelegramProvider init
    → Theme sync (TG colorScheme)
    → Auth (initData) же /login?tg=1
    → Role dashboard (MobileShell)
```

### 11.3 Тил алмаштыруу

```
LanguageSwitcher → setLocale("ar")
    → html dir="rtl"
    → Бардык t() ключдор арабча
    → Календарь ar-SA форматта
    → Аят котормосу арабча (араб текст өзгөрбөйт)
```

---

## 13. Беттер тизмеси

### Premium виджеттер бар dashboard'дор

| Маршрут | Premium виджеттер | Роль |
|---------|-------------------|------|
| `/student` | ✅ Date + Ayah + Motivation | Student |
| `/teacher` | ✅ Date + Ayah + Motivation | Teacher |
| `/parent` | ✅ Date + Ayah + Motivation | Parent |
| `/admin` | ⏳ Stats focus (виджеттер опционал) | Admin |
| `/` (landing) | ✅ i18n, theme | Public |

### Толук маршруттар

**Public:** `/`, `/login`, `/register`, `/telegram`, `/join/[code]`

**Student:** `/student`, `/plan`, `/submit`, `/submissions`, `/progress`, `/achievements`, `/rankings` ⏳

**Teacher:** `/teacher`, `/groups`, `/groups/[id]` ⏳, `/submissions`, `/plans/new` ⏳

**Admin:** `/admin`, `/users`, `/teachers` ⏳, `/courses` ⏳, `/analytics` ⏳

**Parent:** `/parent`, `/children/[id]` ⏳, `/children/[id]/reports` ⏳

---

## 14. API планы

### Premium API (иштеп жатат ✅)

| Метод | Endpoint | Сүрөттөмө |
|-------|----------|-----------|
| GET | `/api/v1/daily/ayah?locale=` | Күнүмдүк аят |
| GET | `/api/v1/daily/motivation?locale=` | Күнүмдүк мотивация |
| PATCH | `/api/v1/user/locale` | Тил сактоо |
| POST | `/api/v1/telegram/auth` | Telegram initData текшерүү |

### Core API (негизги платформа)

| Метод | Endpoint | Статус |
|-------|----------|--------|
| POST | `/api/v1/auth/register` | ✅ |
| GET | `/api/v1/auth/me` | ✅ |
| GET | `/api/v1/plans/today` | ✅ |
| GET/POST | `/api/v1/submissions` | ✅ |
| GET | `/api/v1/reviews/pending` | ✅ |
| POST | `/api/v1/reviews` | ✅ |
| GET | `/api/v1/admin/stats` | ✅ |

### Gamification API ⏳ M4

| Метод | Endpoint | Статус |
|-------|----------|--------|
| GET | `/api/v1/gamification/streak` | ⏳ |
| GET | `/api/v1/gamification/achievements` | ⏳ |
| GET | `/api/v1/gamification/heatmap` | ⏳ |
| GET | `/api/v1/gamification/journey` | ⏳ |
| GET | `/api/v1/gamification/rankings/groups/:id` | ⏳ |
| GET | `/api/v1/gamification/champions/groups/:id` | ⏳ |

Толук API: groups, courses, parent, uploads — ⏳ M1–M3 фазалар.

---

## 15. Папка структурасы

```
noorjourney/
├── apps/web/
│   ├── app/
│   │   ├── layout.tsx                 # SSR lang/dir, fonts, TG script
│   │   ├── globals.css                # Theme tokens, .font-arabic, safe areas
│   │   ├── (public)/                  # landing, login, register
│   │   ├── student/                   # Student dashboards + pages
│   │   ├── teacher/
│   │   ├── admin/
│   │   ├── parent/
│   │   ├── telegram/                  # Mini App entry
│   │   └── api/
│   │       ├── auth/[...nextauth]/
│   │       └── v1/
│   │           ├── daily/ayah/
│   │           ├── daily/motivation/
│   │           ├── user/locale/
│   │           ├── telegram/auth/
│   │           ├── plans/ · submissions/ · reviews/ · admin/
│   ├── components/
│   │   ├── islamic/                   # ☪ Premium UI
│   │   │   ├── islamic-date-card.tsx
│   │   │   ├── daily-ayah-card.tsx
│   │   │   └── daily-motivation-card.tsx
│   │   ├── layout/                    # 📱 Mobile + i18n + theme
│   │   │   ├── mobile-shell.tsx
│   │   │   ├── language-switcher.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── dashboard-header-widgets.tsx
│   │   ├── providers/                 # Provider stack
│   │   │   ├── app-providers.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── i18n-provider.tsx
│   │   │   ├── telegram-provider.tsx
│   │   │   └── session-provider.tsx
│   │   ├── gamification/              # Streak, heatmap, journey map
│   │   ├── learning/                  # Plan, submit forms
│   │   ├── review/                    # Audio player
│   │   └── ui/
│   ├── lib/
│   │   ├── locale.ts                  # getServerLocale()
│   │   ├── nav.ts                     # Role-based nav (i18n keys)
│   │   ├── rbac.ts
│   │   └── services/gamification.ts   # Engine (M4)
│   ├── middleware.ts
│   └── public/manifest.json           # PWA
│
├── packages/shared/
│   └── src/
│       ├── locales/                   # ky, ru, en, ar JSON
│       ├── content/                   # daily-ayahs, daily-motivations
│       ├── i18n.ts
│       ├── calendar.ts
│       ├── gamification.ts            # Badges, scores, intensity
│       ├── types.ts
│       └── validators.ts
│
├── packages/database/
│   └── prisma/schema.prisma
│
└── docs/
    └── architecture.md                # Бул файл
```

---

## 16. Environment Variables

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
TELEGRAM_BOT_TOKEN=          # Mini App initData HMAC validation
```

---

## 17. Ишке ашыруу статусу

### Premium функциялар

| # | Функция | Статус | Файлдар |
|---|---------|--------|---------|
| 1 | 4 тил + RTL | ✅ Негизги | `locales/`, `i18n-provider.tsx` |
| 2 | Исламдык календарь | ✅ | `calendar.ts`, `islamic-date-card.tsx` |
| 3 | Күнүмдүк аят | ✅ | `daily-ayahs.ts`, API, component |
| 4 | Күнүмдүк мотивация | ✅ | `daily-motivations.ts`, API, component |
| 5 | Dark / Light | ✅ | `theme-provider`, `globals.css` |
| 6 | Mobile-first | ✅ | `mobile-shell.tsx`, PWA manifest |
| 7 | Telegram Mini App | ✅ Даярдык | `telegram-provider`, CSP, `/telegram` |

### Келечек иштер (Premium Phase 2)

- [ ] Толук i18n: admin таблицалары, формалар, API каталар
- [ ] Admin CMS: күнүмдүк аят/мотивация башкаруу
- [ ] Telegram account linking (initData → User)
- [ ] Telegram Bot push (streak эскертүү)
- [ ] PWA offline cache (daily cards)
- [ ] Prayer times widget (опционал)

### Gamification функциялар

| # | Функция | DB | UI/API | Статус |
|---|---------|-----|--------|--------|
| 1 | Streak системасы | ✅ `Streak` | ✅ dashboard | ✅ DB + базалык логика |
| 2 | Achievement badges (6) | ✅ `Achievement` | ✅ `/achievements` | ✅ seed + definitions |
| 3 | Monthly Champion | ✅ `MonthlyChampion` | ⏳ banner | ✅ DB + seed |
| 4 | Group Rankings | ✅ `GroupRankingEntry` | ⏳ `/rankings` | ✅ DB + seed |
| 5 | Progress Heatmap | ✅ `StudentActivityDay` | ⏳ component | ✅ DB + seed |
| 6 | Quran Journey Map | ✅ `SurahProgress` | ⏳ component | ✅ DB + seed |

### Core платформа (M1–M6)

- [ ] M1: PostgreSQL, groups/plans CRUD API
- [ ] M2: Audio upload (S3), full submit→review pipeline
- [ ] M3: Admin users/courses, parent weekly reports
- [ ] M4: Gamification engine + API + UI components
- [ ] M5: Production deploy, monitoring
- [ ] M6: Security audit, load testing

---

## 18. Чечимдер (өзгөрбөйт)

| Суроо | Уруксат |
|-------|---------|
| Аудио storage | S3/R2 (M2) |
| Рейтинг | Топ ичинде гана |
| Ата-эне кирүү | Админ/мугалим байланыштырат |
| Куран маалыматы | Shared package ичинде |
| Демейки тил | `ky` |

---

## Жыйынтык

NoorJourney **эки катмарлуу архитектурага** ээ:

1. **Premium Experience Layer** — 4 тил (RTL), исламдык календарь, күнүмдүк аят/мотивация, dark mode, mobile-first, Telegram Mini App. Бул катмар иштеп жатат жана бардык dashboard'дорго интеграцияланган.

2. **Core Learning Platform** — пландар, тапшыруулар, текшерүү, прогресс, ролдор.

3. **Gamification Layer** — streak, 6 badge, heatmap, Quran journey map, топ рейтинги, айлык чемпион. DB схемасы жана shared definitions даяр; UI/API — M4 фазасында.

Premium + Gamification катмарлары продуктту «мектеп системасынан» айырмалап, **күнүмдүк руханий практика платформасына** айлантат.
