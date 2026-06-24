import os from "node:os";

const PUBLIC_SITE_URL =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://nurdunovkurmanbek-ai.github.io/Hyundai-Kyrgyzstan-Commercial";

/** Docker/WSL/Hyper-V virtual adapters — not reachable from a phone on Wi‑Fi */
const VIRTUAL_PREFIXES = [
  "127.",
  "169.254.",
  "172.17.",
  "172.18.",
  "172.19.",
  "172.20.",
  "172.21.",
  "172.22.",
  "172.23.",
  "172.24.",
  "172.25.",
  "172.26.",
  "172.27.",
  "172.28.",
  "172.29.",
  "172.30.",
  "172.31.",
];

function isVirtualIp(address) {
  return VIRTUAL_PREFIXES.some((prefix) => address.startsWith(prefix));
}

function getLanIp() {
  const candidates = [];
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] ?? []) {
      if (net.family === "IPv4" && !net.internal && !isVirtualIp(net.address)) {
        candidates.push({ name, address: net.address });
      }
    }
  }
  const wifi = candidates.find(({ name }) =>
    /wi-?fi|wlan|wireless/i.test(name),
  );
  if (wifi) return wifi.address;
  const ethernet = candidates.find(({ name }) =>
    /ethernet|eth|en\d/i.test(name),
  );
  if (ethernet) return ethernet.address;
  return candidates[0]?.address ?? null;
}

const port = process.env.PORT ?? "3000";
const lanIp = getLanIp();

console.log("");
console.log("=== WhatsApp / Telegram үчүн шилтеме ===");
console.log("");

if (PUBLIC_SITE_URL) {
  console.log("✅ Жөнөтүңүз (бардык жерде иштейт):");
  console.log(`   ${PUBLIC_SITE_URL}`);
  console.log("");
} else {
  console.log("❌ Азыр онлайн шилтеме жок!");
  console.log("");
  console.log("   WhatsApp/Telegram'га ЖӨНӨТПӨҢҮЗ:");
  console.log("   • localhost:3000");
  console.log("   • 192.168.x.x:3000");
  console.log("   • trycloudflare.com / loca.lt");
  console.log("   • htbk.kg (сайт азыр ошол доменде жок)");
  console.log("");
  console.log("✅ Бир жолу деплой кылыңыз:");
  console.log("   https://vercel.com/new");
  console.log("   Репо: Hyundai-Kyrgyzstan-Commercial");
  console.log("   Root Directory: apps/web");
  console.log("");
  console.log("   Deploy бүткөндөн кийин чыккан https://....vercel.app");
  console.log("   шилтемесин жөнөтүңүз.");
  console.log("");
}

if (lanIp) {
  console.log("--- Тек компьютер иштеп турганда (убактылуу) ---");
  console.log(`   http://${lanIp}:${port}  (бир Wi-Fi гана)`);
  console.log(`   npm run share:public     (убактылуу туннель)`);
  console.log("");
}
