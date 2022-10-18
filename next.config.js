const basePath = process.env.NODE_ENV === 'production'
    ? '/blog'
    : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath,
    assetPrefix: `${basePath}/`
}

module.exports = nextConfig