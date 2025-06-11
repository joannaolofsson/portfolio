import type { NextConfig } from "next";

const nextConfig = {
  webpack: (config:any) => {
    config.cache = false; // 💥 disable cache
    return config;
  },
};

module.exports = nextConfig;

