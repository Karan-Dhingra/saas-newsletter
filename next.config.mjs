/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'media.beehiiv.com'
            },
            {
                hostname: 'img.clerk.com'
            }
        ]
    }
};

export default nextConfig;
