import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Programme imagery is served from Sanity's asset CDN.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
