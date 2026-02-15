'use client';

import { useState } from 'react';
import { ShieldCheck, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
    {
        text: "I never realized how much my home environment was affecting my mood until I read this. The Seasonal Framework is a game changer.",
        author: "Sarah J.",
        role: "Interior Designer"
    },
    {
        text: "Finally, a guide that doesn't just tell me to throw things away, but teaches me how to cherish what I have. Beautifully written.",
        author: "Michael T.",
        role: "Architect"
    },
    {
        text: "The Japanese aesthetics combined with practical advice made this a joy to read. My home feels so much lighter now.",
        author: "Elena R.",
        role: "Home Stylist"
    }
];

export function TrustGuarantee() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <Section background="indigo" id="guarantee">
            <Container className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Guarantee Side */}
                <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center p-4 bg-[var(--color-gold-muted)]/20 rounded-full mb-4">
                        <ShieldCheck className="w-12 h-12 text-[var(--color-gold-muted)]" />
                    </div>
                    <Heading as="h2" className="text-[var(--color-cream-silk)] text-[length:var(--font-size-mobile-h2)] md:text-4xl">
                        30-Day Money-Back Guarantee
                    </Heading>
                    <Text className="text-[var(--color-cream-silk)]/80 text-[length:var(--font-size-mobile-body)] md:text-lg">
                        We are confident that *Simplicity at Home* will inspire you. If you don't feel a shift in your perspective within 30 days, simply email us for a full refund. No questions asked.
                    </Text>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <div className="relative overflow-hidden min-h-[300px] md:min-h-[240px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <Card className="bg-[var(--color-cream-silk)]/5 border-white/10 text-[var(--color-cream-silk)] backdrop-blur-sm h-full flex flex-col justify-center p-6 md:p-8">
                                    <div className="absolute top-6 right-6 opacity-10">
                                        <Quote size={48} />
                                    </div>
                                    <CardHeader className="pb-4 p-0 mb-4">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-4 h-4 fill-[var(--color-gold-muted)] text-[var(--color-gold-muted)]" />
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <Text className="text-[var(--color-cream-silk)] italic mb-6 text-lg leading-relaxed">"{TESTIMONIALS[activeIndex].text}"</Text>
                                        <div>
                                            <Text className="font-bold text-[var(--color-cream-silk)] text-lg">{TESTIMONIALS[activeIndex].author}</Text>
                                            <Text variant="small" className="text-[var(--color-cream-silk)]/60 uppercase tracking-wider text-xs">{TESTIMONIALS[activeIndex].role}</Text>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-6 px-2">
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        activeIndex === idx ? "bg-[var(--color-gold-muted)] w-6" : "bg-white/20 hover:bg-white/40"
                                    )}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
