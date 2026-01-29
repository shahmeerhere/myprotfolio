export default function sitemap() {
    const baseUrl = 'https://shahmeerhere.vercel.app';

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // If you add sub-pages later, include them here
    ];
}
