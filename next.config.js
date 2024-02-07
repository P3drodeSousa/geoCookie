/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
  images: {
    domains: [
      "www.elitebeds.ch",
      "ij0p5befru.preview.infomaniak.website",
      "flagcdn.com",
    ],
  },
};

module.exports = nextConfig;
