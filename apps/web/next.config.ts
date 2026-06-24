import path from "path";
import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
