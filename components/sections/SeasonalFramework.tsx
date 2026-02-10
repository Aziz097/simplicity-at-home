'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonTab {
    id: Season;
    label: string;
    color: string;
    image: string;
    title: string;
    description: string;
    rituals: string[];
}

const seasons: SeasonTab[] = [
    {
        id: 'spring',
        label: 'Spring',
        color: 'var(--color-spring-green)',
        image: ('/spring.png'),
        title: 'Cleansing & Renewal',
        description: 'As nature awakens, we clear away the heaviness of winter. Focus on deep cleaning, organizing, and welcoming fresh energy into your home.',
        rituals: ['Morning Air Ventilation', 'Decluttering Wardrobe', 'Fresh Flower Arrangements']
    },
    {
        id: 'summer',
        label: 'Summer',
        color: 'var(--color-summer-blue)',
        image: ('/summer.png'),
        title: 'Coolness & Flow',
        description: 'Create a sanctuary from the heat. Embrace breathable fabrics, minimalist arrangements, and rituals that promote air circulation and mental clarity.',
        rituals: ['Using Linen Textiles', 'Coldbrew Tea Rituals', 'Wind Chime Meditation']
    },
    {
        id: 'autumn',
        label: 'Autumn',
        color: 'var(--color-autumn-orange)',
        image: ('/autumn.png'),
        title: 'Warmth & Gathering',
        description: 'As days shorten, we turn inward. Prepare your home for cozy gatherings, layering textures, and celebrating the harvest with warm, earthy tones.',
        rituals: ['Candle Lighting at Dusk', 'Seasonal Soup Recipes', 'Dried Flower Displays']
    },
    {
        id: 'winter',
        label: 'Winter',
        color: 'var(--color-winter-gray)',
        image: ('/winter.png'),
        title: 'Rest & Reflection',
        description: 'The season of deep rest. Transform your home into a cocoon of comfort with soft lighting, warm baths, and quiet corners for reading and reflection.',
        rituals: ['Yuzu Bath Ritual', 'Hot Pot Dining', 'Journaling by Lamplight']
    },
];

export function SeasonalFramework() {
    const [activeSeason, setActiveSeason] = useState<Season>('spring');

    return (
        <Section background="cream" id="framework" className="min-h-[80vh] flex flex-col justify-center py-20">
            <Container>
                <div className="text-center mb-12 space-y-4">
                    <Text variant="small" className="text-[var(--color-gold-muted)] uppercase tracking-widest font-bold">
                        The Methodology
                    </Text>
                    <Heading as="h2" className="text-4xl md:text-5xl">
                        The Four Seasons Framework
                    </Heading>
                    <Text variant="lead" className="max-w-2xl mx-auto">
                        Align your home and habits with the natural rhythms of the year to find effortless balance.
                    </Text>
                </div>

                {/* Season Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {seasons.map((season) => (
                        <button
                            key={season.id}
                            onClick={() => setActiveSeason(season.id)}
                            className={cn(
                                'relative px-6 py-3 rounded-full font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-muted)]',
                                activeSeason === season.id
                                    ? 'text-[var(--color-cream-silk)] shadow-lg scale-105'
                                    : 'bg-white text-[var(--color-text-dark)] hover:bg-[var(--color-cream-silk)] hover:scale-105 border border-[var(--color-indigo-deep)]/10'
                            )}
                            style={{
                                backgroundColor: activeSeason === season.id ? season.color : undefined
                            }}
                            aria-pressed={activeSeason === season.id}
                        >
                            {season.label}
                            {activeSeason === season.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-full bg-black/5 -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Panel - Using CSS Grid for stacking instead of full absolute positioning to allow height growth */}
                <div className="max-w-4xl mx-auto relative grid grid-cols-1">
                    <AnimatePresence mode="wait">
                        {seasons.map((season) => (
                            activeSeason === season.id && (
                                <motion.div
                                    key={season.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="col-start-1 row-start-1 w-full"
                                >
                                    <Card className="min-h-[400px] md:min-h-[350px] bg-white border-none shadow-2xl overflow-hidden grid md:grid-cols-2">
                                        {/* Visual Side */}
                                        <div className="h-48 md:h-auto min-h-[200px] relative overflow-hidden flex items-center justify-center">
                                            {/* Background Image */}
                                            <Image
                                                src={season.image}
                                                alt={season.label}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />

                                            {/* Overlay for text readability */}
                                            <div
                                                className="absolute inset-0 z-10 opacity-60 mix-blend-multiply"
                                                style={{ backgroundColor: season.color }}
                                            />

                                            {/* Content */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-center relative z-20 text-white"
                                            >
                                                <span className="text-6xl md:text-8xl font-[var(--font-zen)] opacity-40 block mb-2">
                                                    {season.label.charAt(0)}
                                                </span>
                                                <span className="text-lg font-medium tracking-[0.2em] uppercase border-t border-white/30 pt-4 inline-block">
                                                    {season.label}
                                                </span>
                                            </motion.div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <Heading as="h3" className="text-3xl mb-4" style={{ color: season.color }}>
                                                {season.title}
                                            </Heading>
                                            <Text className="mb-8 text-[var(--color-text-dark)]/80 leading-relaxed">
                                                {season.description}
                                            </Text>

                                            <div>
                                                <Text variant="small" className="text-[var(--color-text-dark)]/40 uppercase tracking-widest mb-3 block">
                                                    Key Rituals
                                                </Text>
                                                <ul className="space-y-2">
                                                    {season.rituals.map((ritual, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.3 + (idx * 0.1) }}
                                                            className="flex items-center gap-3 text-[var(--color-text-dark)]"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: season.color }} />
                                                            {ritual}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </Container>
        </Section>
    );
}
