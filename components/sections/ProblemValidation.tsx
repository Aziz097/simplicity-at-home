import { Brain, Leaf, Calendar } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const PAIN_POINTS = [
    {
        title: "Mental Fatigue",
        icon: Brain,
        description: "Cluttered spaces lead to a cluttered mind. The constant visual noise in your home drains your energy, leaving you feeling overwhelmed and unable to relax after a long day.",
    },
    {
        title: "Disconnected from Nature",
        icon: Leaf,
        description: "Living in a concrete jungle disconnects us from the healing rhythms of nature. We lose touch with the seasons, making time feel monotonous and fleeting.",
    },
    {
        title: "Lack of Rituals",
        icon: Calendar,
        description: "Without meaningful daily rituals, life becomes a series of tasks. You go through the motions but miss the magic in the ordinary moments of everyday life.",
    },
];

export function ProblemValidation() {
    return (
        <Section background="cream" id="problem">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Text variant="small" className="text-[var(--color-gold-muted)] uppercase tracking-widest font-bold">
                        The Pain
                    </Text>
                    <Heading as="h2" className="text-4xl md:text-5xl">
                        Is Your Home a Sanctuary or a Source of Stress?
                    </Heading>
                    <Text variant="lead">
                        In our fast-paced modern lives, our homes often become just another place to manage, rather than a place to restore.
                    </Text>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {PAIN_POINTS.map((point, index) => (
                        <Card key={index} className="border-none shadow-lg bg-white/50 hover:bg-white transition-colors duration-300">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 pt-6 px-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-indigo-deep)]/5 flex items-center justify-center shrink-0">
                                    <point.icon className="w-6 h-6 text-[var(--color-indigo-deep)]" />
                                </div>
                                <CardTitle className="text-xl font-[var(--font-zen)] text-[var(--color-indigo-deep)] text-left">
                                    {point.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-left px-6 pb-6">
                                <Text className="text-[var(--color-text-dark)]/80 text-[length:var(--font-size-mobile-body)] md:text-base">
                                    {point.description}
                                </Text>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
