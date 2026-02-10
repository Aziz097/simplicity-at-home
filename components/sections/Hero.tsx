'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { SashikoPatternDivider } from '@/components/ui/SashikoPatternDivider';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[var(--color-indigo-deep)] overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
            {/* Background Texture (CSS Generated Linen) */}
            <div
                className="absolute inset-0 z-0 opacity-10 mix-blend-soft-light pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 4px),
                        repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 4px)
                    `
                }}
            />

            {/* Fallback pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'url(/sashiko-pattern.svg)',
                    backgroundSize: '60px 60px',
                    backgroundRepeat: 'repeat'
                }}
            />

            <Container className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Column - Left on Desktop, Top on Mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 text-center md:text-left order-1"
                    >
                        <div className="space-y-6">
                            <Heading as="h1" className="text-[var(--color-cream-silk)] text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light">
                                Create a Sanctuary of Simplicity
                            </Heading>
                            <Text className="text-[var(--color-cream-silk)]/90 text-xl md:text-2xl font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                                Discover timeless Japanese rituals, recipes, and arrangements to cultivate calm in your everyday life.
                            </Text>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                            <Button
                                as="a"
                                href="#final-cta"
                                size="lg"
                                className="text-lg px-8 h-14 bg-[var(--color-gold-muted)] hover:bg-[var(--color-gold-muted)]/90 text-[var(--color-indigo-deep)] font-bold shadow-xl shadow-[var(--color-gold-muted)]/20"
                            >
                                Start Your Journey
                            </Button>
                            <Button
                                as="a"
                                href="#framework"
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 h-14 border-[var(--color-cream-silk)]/30 text-[var(--color-cream-silk)] hover:bg-[var(--color-cream-silk)] hover:text-[var(--color-indigo-deep)]"
                            >
                                Explore the Book
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image Column - Right on Desktop, Bottom on Mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative order-2 mx-auto w-full max-w-[400px] md:max-w-none"
                    >
                        <div className="relative aspect-[3/4] md:aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                            {/* Gradient Overlay for visible text contrast if needed, mostly for aesthetics */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-indigo-deep)]/20 to-transparent z-10 pointer-events-none mix-blend-multiply" />

                            <Image
                                src="/book_cover.webp"
                                alt="Simplicity at Home Book Cover"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Decorative elements behind image */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-gold-muted)]/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[var(--color-cream-silk)]/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </Container>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2">
                <SashikoPatternDivider variant="light" />
            </div>
        </section>
    );
}
