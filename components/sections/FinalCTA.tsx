'use client';

import { Check, Download, CreditCard } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { LINKS, PRICING, BONUS_OFFER } from '@/constants';

export function FinalCTA() {
    return (
        <Section background="cream" id="final-cta" className="relative overflow-hidden py-20 pb-32">
            <Container className="relative z-10 max-w-4xl text-center space-y-10">
                <div className="space-y-4">
                    <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl">
                        Ready to Create Your Sanctuary?
                    </Heading>
                    <Text className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Join thousands of others who have transformed their homes into a source of calm and inspiration.
                    </Text>
                </div>

                <Card className="bg-white border-[var(--color-indigo-deep)]/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto transform transition-transform hover:scale-[1.01]">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Price & Guarantee Column */}
                        <div className="flex-1 space-y-6 w-full text-center md:text-left">
                            <div className="space-y-2">
                                <Text variant="small" className="text-[var(--color-gold-muted)] font-bold uppercase tracking-wider">
                                    Complete Collection
                                </Text>
                                <div className="flex items-baseline justify-center md:justify-start gap-3">
                                    <span className="text-5xl md:text-6xl font-[var(--font-zen)] text-[var(--color-indigo-deep)] font-bold">
                                        {PRICING.currency}{PRICING.sale}
                                    </span>
                                    <span className="text-2xl text-[var(--color-indigo-deep)]/40 line-through">
                                        {PRICING.currency}{PRICING.regular}
                                    </span>
                                </div>
                            </div>

                            <Text className="text-[var(--color-text-dark)]/70 text-sm">
                                Includes 320+ pages of inspiration, seasonal recipes, DIY guides, and digital bonuses.
                            </Text>

                            <div className="flex flex-col gap-3 pt-2">
                                <Button
                                    as="a"
                                    href={LINKS.lynk}
                                    size="lg"
                                    className="w-full text-base md:text-lg h-14 bg-[var(--color-indigo-deep)] text-[var(--color-cream-silk)] hover:bg-[var(--color-indigo-deep)]/90 font-bold shadow-lg"
                                >
                                    Get Your Copy
                                </Button>
                                <Text className="text-xs text-center text-[var(--color-text-dark)]/50 pt-2">
                                    30-Day Money-Back Guarantee
                                </Text>
                            </div>
                        </div>

                        {/* Feature List Column */}
                        <div className="flex-1 w-full border-t md:border-t-0 md:border-l border-[var(--color-indigo-deep)]/10 pt-8 md:pt-0 md:pl-12">
                            <ul className="space-y-4 text-left">
                                {[
                                    'Digital eBook (PDF, EPUB, MOBI)',
                                    'Seasonal Recipes & Rituals',
                                    'DIY Home Arrangement Guides',
                                    'Printable Checklists',
                                    `Bonus: ${BONUS_OFFER.name}`
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-[var(--color-spring-green)]/20 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-[var(--color-indigo-deep)]" />
                                        </div>
                                        <span className="text-[var(--color-text-dark)]/90 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>

                <div className="flex justify-center gap-8 text-[var(--color-text-dark)]/40 pt-8">
                    <div className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-semibold">Instant Download</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-semibold">Secure Payment</span>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
