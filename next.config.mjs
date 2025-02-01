/** @type {import('next').NextConfig} */

const nextConfig = {
    poweredByHeader: false,
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'behparvar.ir',
          port: '',
          pathname: '/back/custom/img/**',
        },     
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      formats: ['image/avif', 'image/webp']
    },
    // Scss Options
    sassOptions: {
    //   includePaths: [path.join(__dirname, 'styles')],
    },
  
    compiler: {
      styledComponents: true | {
        displayName: true,
        ssr: true,
        fileName: true,
        cssProp: true,
        namespace: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
      },
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config
    },
  };

export default nextConfig;