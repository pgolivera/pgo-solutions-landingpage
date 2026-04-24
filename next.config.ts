import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Generates a static `out/` folder on `next build` — required for S3 deployment.
  // Safe to enable: has no effect on `next dev`, only changes build output.
  output: "export",
};

export default nextConfig;
