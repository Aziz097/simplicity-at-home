import { ShieldCheck, Star } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';

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
    }
];

export function TrustGuarantee() {
    return (
        <Section background="indigo" id="guarantee">
            <Container className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Guarantee Side */}
                <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center p-4 bg-[var(--color-gold-muted)]/20 rounded-full mb-4">
                        <ShieldCheck className="w-12 h-12 text-[var(--color-gold-muted)]" />
                    </div>
                    <Heading as="h2" className="text-[var(--color-cream-silk)]">
                        30-Day Money-Back Guarantee
                    </Heading>
                    <Text className="text-[var(--color-cream-silk)]/80 text-lg">
                        We are confident that *Simplicity at Home* will inspire you. If you don't feel a shift in your perspective within 30 days, simply email us for a full refund. No questions asked.
                    </Text>
                </div>

                {/* Testimonials Side */}
                <div className="grid gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <Card key={i} className="bg-[var(--color-cream-silk)]/5 border-white/10 text-[var(--color-cream-silk)] hover:bg-[var(--color-cream-silk)]/10">
                            <CardHeader className="pb-2">
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-[var(--color-gold-muted)] text-[var(--color-gold-muted)]" />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Text className="text-[var(--color-cream-silk)] italic mb-4">"{t.text}"</Text>
                                <div>
                                    <Text className="font-bold text-[var(--color-cream-silk)]">{t.author}</Text>
                                    <Text variant="small" className="text-[var(--color-cream-silk)]/60">{t.role}</Text>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
