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

## Онлайн деплой (WhatsApp / Telegram үчүн)

**Маанилүү:** `localhost`, `192.168.x.x`, `trycloudflare.com` шилтемелерин жөнөтпөңүз — алар иштебейт.

### 1-март: Vercel (сунушталат, акысыз)

1. Ачыңыз: **https://vercel.com/new**
2. GitHub менен катталыңыз
3. Репо: **Hyundai-Kyrgyzstan-Commercial**
4. **Root Directory:** `apps/web`
5. **Deploy** басыңыз
6. Чыккан шилтемени жөнөтүңүз: `https://hyundai-....vercel.app`

Бул шилтеме телефондо, WhatsAppта, Telegramда иштейт.

Deploy кийин Vercel → Settings → Environment Variables:
`NEXT_PUBLIC_APP_URL` = `https://сиздин-vercel-url.vercel.app`

### Шилтемени текшерүү

```bash
PUBLIC_SITE_URL=https://сиздин-сайт.vercel.app npm run share
```

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
