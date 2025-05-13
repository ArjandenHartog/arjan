import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Als je site op een subpad wordt gehost, bijvoorbeeld www.voorbeeld.nl/arjan/
  // dan moet je dit aanpassen naar jouw specifieke pad
  // basePath: '/arjan',
  /* config options here */
};

export default nextConfig;
