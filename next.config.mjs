/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nécessaire pour éviter des erreurs avec GitHub Pages
  },
  basePath: "/mon-repo", // Remplace par le nom de ton repo GitHub
  assetPrefix: "/mon-repo/",
  reactStrictMode: true,
};

export default nextConfig;
