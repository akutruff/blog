const basePath = process.env.NODE_ENV === 'production'
    ? '/blog'
    : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath,
    // images: {
    //     loader: 'akamai',
    //     // path: `${basePath}/_next/image`,
    //     path: '',
    // }
    assetPrefix: `${basePath}/assets`
}

module.exports = nextConfig