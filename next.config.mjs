/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ntrtbiyiefmemqbcjsad.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",        
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/shop",
        permanent: true,
      },
      {
        source: "/",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
