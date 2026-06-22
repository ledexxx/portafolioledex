/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "Content-Security-Policy",
        value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
            "font-src 'self' https://fonts.gstatic.com https://api.fontshare.com",
            "img-src 'self' data: blob: https://cdn.simpleicons.org https://www.ledexcorp.site",
            "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com",
            "frame-ancestors 'none'",
        ].join("; "),
    },
];

const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;