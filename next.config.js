const basePath = process.env.NODE_ENV === 'production'
    ? '/blog'
    : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath,
    images: {
        loader: 'akamai',
        path: `${basePath}/_next/image`,
    }
}

module.exports = nextConfig