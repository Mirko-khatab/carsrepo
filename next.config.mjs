/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // (https://i.ibb.co/v3pn1DC/ed6d3871acb8529b462231f02.webp)
        domains: ["assets.algoexpert.io", "images.unsplash.com", "i.ibb.co"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '/**',
            },
        ],
    },


    i18n: {
        locales: ["en", "ar", "ku"],
        defaultLocale: "ku",
        localeDetection: false,
    },
};

export default nextConfig;
