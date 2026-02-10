import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { YUMIKO_CREDENTIALS } from '@/constants';

export function Introduction() {
    return (
        <Section id="introduction" background="cream">
            <Container className="max-w-4xl">
                <div className="grid gap-12 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px] items-start">
                    <div className="space-y-6 animate-slide-up">
                        <Text variant="small" className="text-[var(--color-gold-muted)] uppercase tracking-widest font-bold">
                            About the Author
                        </Text>

                        <Heading as="h2" className="text-3xl md:text-4xl">
                            &quot;We need to create a space that brings us back to ourselves.&quot;
                        </Heading>

                        <div className="space-y-4 text-[var(--color-text-dark)]/80 text-lg leading-relaxed">
                            <Text>
                                Japanese rituals, recipes, and arrangements for a calm and meaningful life.
                                From {YUMIKO_CREDENTIALS.name}, founder of the internationally celebrated lifestyle brand Fog Linen Work, comes a book that guides you to create a home that is a sanctuary.
                            </Text>

                            <Text>
                                Simplicity at Home is not just a book about minimalism; it is an invitation to observe the seasons, cherish the objects we use daily, and find beauty in the ordinary. Through her own home in Tokyo, Yumiko shares the practices that ground her amidst a busy life.
                            </Text>

                            <Text>
                                Whether it&apos;s preparing a simple meal using seasonal ingredients, mending a beloved garment with sashiko stitching, or arranging flowers from the garden, these acts are more than chores—they are rituals of care.
                            </Text>
                        </div>

                        <div className="pt-4 border-t border-[var(--color-indigo-deep)]/10">
                            <Text className="font-[var(--font-zen)] font-bold text-[var(--color-indigo-deep)]">
                                {YUMIKO_CREDENTIALS.name}
                            </Text>
                            <Text variant="muted">
                                {YUMIKO_CREDENTIALS.title}
                            </Text>
                        </div>
                    </div>

                    <div className="relative mx-auto w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden border-4 border-white shadow-lg rotate-3 transition-transform hover:rotate-0 duration-500">
                        <Image
                            src="/author.jpg"
                            alt={YUMIKO_CREDENTIALS.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, 300px"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
