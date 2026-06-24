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

## Онлайн сайт (WhatsApp / Telegram)

**Онлайн шилтеме:**
https://nurdunovkurmanbek-ai.github.io/Hyundai-Kyrgyzstan-Commercial/

Бул шилтемени WhatsApp/Telegram'га жөнөтүңүз — баары ачат.

Жаңы push кылынгандан кийин GitHub Actions автоматтык жаңырат (~2 мүн).

### Vercel (альтернатива)

1. **https://vercel.com/new**
2. Репо: **Hyundai-Kyrgyzstan-Commercial**, Root: `apps/web`

## Башкаларга жөнөтүп текшертүү (убактылуу)

### Вариант A — Интернет шилтеме (WhatsApp аркылуу)

1. [vercel.com](https://vercel.com) катталыңыз
2. **Add New → Project** → GitHub: `Hyundai-Kyrgyzstan-Commercial`
3. **Root Directory:** `apps/web` тандаңыз
4. Deploy басыңыз → `https://....vercel.app` шилтемесин WhatsAppка жөнөтүңүз

### Вариант B — Бир Wi-Fi (үйдө/офисте)

```bash
npm run dev
npm run share
```

Чыгкан `http://192.168.x.x:3000` шилтемесин телефонго жөнөтүңүз (компьютер менен телефон бир Wi-Fiда болушу керек).

### Вариант C — Убактылуу публичный шилтеме

```bash
npm run dev
npm run share:public
```

Терминалда чыккан `https://....loca.lt` шилтемесин жөнөтүңүз.

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
