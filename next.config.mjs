/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "img.clerk.com"],
    },
    typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
