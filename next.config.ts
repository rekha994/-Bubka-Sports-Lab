import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Design assets are served from ImageKit. */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/t9fldaz6d/**",
      },
    ],
  },
};

export default nextConfig;
