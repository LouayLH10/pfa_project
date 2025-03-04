/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nécessaire pour éviter des erreurs avec GitHub Pages
  },
  basePath: "/pfa_project", // Remplace par le nom de ton repo GitHub
  assetPrefix: "/pfa_project/",
  reactStrictMode: true,
};

export default nextConfig;
