/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/shop",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
