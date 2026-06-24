import os from "node:os";

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
  return candidates[0]?.address ?? "127.0.0.1";
}

const ip = getLanIp();
const port = process.env.PORT ?? "3000";

console.log("");
console.log("=== Сайтты телефондон текшерүү ===");
console.log("");
console.log("1) Бир Wi-Fi түйүнүндө (тез):");
console.log(`   http://${ip}:${port}`);
console.log("");
console.log("2) Интернет аркылуу (ар кайсы жерден):");
console.log("   npm run share:public");
console.log("   же Vercel: https://vercel.com → Import GitHub repo");
console.log("");
console.log("Телефондо Chrome/Safari ачып, шилтемени жөнөтүңүз.");
console.log("");
