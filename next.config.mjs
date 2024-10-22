/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'achieveee.com',
                // You can also specify the pathname pattern for more control
                pathname: '**', // This allows all paths under this domain
            },
        ],
    },
};

export default nextConfig;
