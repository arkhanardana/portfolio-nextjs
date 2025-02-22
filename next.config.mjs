/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
