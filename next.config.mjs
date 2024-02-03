/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/json-server",
      },
    ];
  },
};

export default nextConfig;
