import createNextIntlPlugin from 'next-intl/plugin';
import './src/lib/env.mjs';

const withNextIntlConfig = createNextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/website",
  images: {
    unoptimized: true, // Fix image issues since GitHub Pages doesn't support Next.js image optimization
  },
  eslint: {
    dirs: ['.'],
  },
};


export default withNextIntlConfig(nextConfig);
