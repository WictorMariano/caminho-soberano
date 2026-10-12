import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/projeto-nova-economia",
        destination: "/workshop-pne",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
