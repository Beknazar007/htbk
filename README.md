# Hyundai-Kyrgyzstan-Commercial

Hyundai Mighty коммерциялык унаалар сайты — Кыргызстан.

## Технологиялар

- **Next.js 15** + TypeScript
- **Tailwind CSS**
- Кыргызча / орусча (KY / RU)

## Орнотуу

```bash
npm install
cd apps/web
npm run dev
```

Браузерде: [http://localhost:3000](http://localhost:3000)

## Production

```bash
npm run build
npm run start
```

## Негизги барактар

| Барак | Маршрут |
|-------|---------|
| Башкы бет | `/` |
| Запчасти | `/parts` |
| Сервис | `/service` |
| Автопарк | `/fleet` |
| Контакты | `/contacts` |

## Структура

```
├── apps/web/              # Next.js сайт
│   ├── app/(site)/        # Барактар
│   ├── components/kuma/   # UI компоненттери
│   └── lib/kuma/          # Маалымат жана котормолор
└── package.json
```
