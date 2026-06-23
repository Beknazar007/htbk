import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../../"),
  transpilePackages: ["@noorjourney/database", "@noorjourney/shared"],
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [{ source: "/about", destination: "/brand/about", permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://web.telegram.org https://*.telegram.org",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
