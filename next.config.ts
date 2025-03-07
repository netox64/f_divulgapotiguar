import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    "reactStrictMode": true,
    images: {
        domains: ['localhost'],
        loader: 'default',
    },
};

export default nextConfig;
