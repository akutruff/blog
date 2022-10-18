const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/blog'
  : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: pathPrefix,
    env: {
        pathPrefix
    }
}

module.exports = nextConfig