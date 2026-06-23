# Hyundai-Kyrgyzstan-Commercial

# NoorJourney ☪

Куран окуу, жаттоо, revision жана прогресс көзөмөл платформасы.

## Технологиялар

- **Next.js 15** + TypeScript
- **Prisma** + PostgreSQL
- **NextAuth** (credentials)
- **Tailwind CSS**
- **Turborepo** monorepo

## Талаптар

- Node.js 20+
- npm 10+

Node.js орнотуу: [https://nodejs.org](https://nodejs.org)

## Орнотуу

### 1. Environment

```bash
cp .env.example .env
```

`.env` файлында `AUTH_SECRET` өзгөртүңүз:

```bash
# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }) -as [byte[]])
```

### 2. Dependencies

```bash
npm install
```

### 3. Database setup

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### 4. Иштетүү

```bash
npm run dev
```

Браузерде ачыңыз: [http://localhost:3000](http://localhost:3000)

### Production (PostgreSQL)

```bash
docker compose -f docker/docker-compose.yml up -d
```

`packages/database/prisma/schema.prisma` ичиндеги `provider` ны `postgresql` кылып, `DATABASE_URL` өзгөртүңүз.

## Демо аккаунттар

| Роль | Email | Сырсөз |
|------|-------|--------|
| Админ | admin@noorjourney.kg | password123 |
| Устаз | ustaz@noorjourney.kg | password123 |
| Окуучу | student@noorjourney.kg | password123 |
| Ата-эне | parent@noorjourney.kg | password123 |

## Структура

```
noorjourney/
├── apps/web/          # Next.js колдонмо
├── packages/
│   ├── database/      # Prisma schema
│   └── shared/        # Types, validators
└── docker/            # PostgreSQL + Redis
```

## MVP функциялар

- ✅ 4 роль (Admin, Teacher, Student, Parent)
- ✅ Auth + RBAC
- ✅ Күнүмдүк план
- ✅ Тапшыруу + streak
- ✅ Мугалим текшерүүсү
- ✅ Жетишкендиктер
- ✅ Админ статистика
- ✅ Ата-эне панели

## Premium функциялар

- ✅ **4 тил**: кыргызча, орусча, англисче, арабча (RTL)
- ✅ **Исламдык календарь**: грегориан + хижри даталар
- ✅ **Күнүмдүк аят** жана **мотивация** карточкалары
- ✅ **Dark / Light** режим
- ✅ **Mobile-first**: төмөнкү навигация, safe areas
- ✅ **Telegram Mini App** даярдыгы (`/telegram`)

Толук архитектура: [docs/architecture.md](docs/architecture.md)
