import os from "node:os";

function getLanIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] ?? []) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "127.0.0.1";
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
