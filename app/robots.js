export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/_next/',
            },
        ],
        sitemap: 'https://shahmeerhere.vercel.app/sitemap.xml',
        host: 'https://shahmeerhere.vercel.app',
    };
}
