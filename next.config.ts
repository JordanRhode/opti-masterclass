import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'custom',
    loaderFile: './lib/image/loader.ts',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *.optimizely.com",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/preview',
        destination: '/api/draft',
        permanent: true,
      },
      {
        source: '/preview/:path*',
        destination: '/api/draft:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
