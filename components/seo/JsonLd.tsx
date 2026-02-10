import { SITE_CONFIG, PRICING, YUMIKO_CREDENTIALS } from '@/constants';

export function JsonLd() {
    const bookSchema = {
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: SITE_CONFIG.name,
        author: {
            '@type': 'Person',
            name: YUMIKO_CREDENTIALS.name,
            jobTitle: YUMIKO_CREDENTIALS.title,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Simplicity at Home',
            url: SITE_CONFIG.url,
        },
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        inLanguage: 'en',
        bookFormat: 'https://schema.org/EBook',
        numberOfPages: 320,
        genre: ['Japanese Lifestyle', 'Home Organization', 'Mindful Living'],
        image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
        offers: {
            '@type': 'Offer',
            price: PRICING.sale.toString(),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: SITE_CONFIG.url,
        },
        review: {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sarah J.' },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
            },
            reviewBody: 'I never realized how much my home environment was affecting my mood until I read this. The Seasonal Framework is a game changer.',
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.shortName,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        potentialAction: {
            '@type': 'ReadAction',
            target: SITE_CONFIG.url,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
