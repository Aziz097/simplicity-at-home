'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react'; // Replaced emoticon with Icon
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

// Types
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "When you feel stressed, what environment calms you down?",
        options: [
            { label: "A bright, airy room with open windows", season: "spring" },
            { label: "A cool, shady spot near water", season: "summer" },
            { label: "A cozy nook with warm blankets", season: "autumn" },
            { label: "A quiet, minimalist space with soft light", season: "winter" },
        ]
    },
    {
        id: 2,
        question: "What is your biggest struggle with your home right now?",
        options: [
            { label: "Too much clutter, need a fresh start", season: "spring" },
            { label: "Feels stagnant and heavy", season: "summer" },
            { label: "Lacks warmth and personality", season: "autumn" },
            { label: "Doesn't feel restful enough", season: "winter" },
        ]
    },
    {
        id: 3,
        question: "What is your ideal morning ritual?",
        options: [
            { label: "Opening windows and cleaning", season: "spring" },
            { label: "Cold water and meditation", season: "summer" },
            { label: "Hot tea and reading", season: "autumn" },
            { label: "Visualization and silence", season: "winter" },
        ]
    }
];

export function HomeVibeQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Season[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleAnswer = (season: string) => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        const newAnswers = [...answers, season as Season];
        setAnswers(newAnswers);

        setTimeout(() => {
            if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setIsTransitioning(false);
            } else {
                setShowResult(true);
                setIsTransitioning(false);
            }
        }, 400); // Wait for exit animation
    };

    // Simple logic to determine dominant season
    const getResult = () => {
        const counts = answers.reduce((acc, season) => {
            acc[season] = (acc[season] || 0) + 1;
            return acc;
        }, {} as Record<Season, number>);

        // Sort by count desc
        return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as Season;
    };

    const result = showResult ? getResult() : 'spring';

    // Result content map
    const resultContent = {
        spring: { title: "Spring Energy", desc: "You need a fresh start. Focus on decluttering and cleansing rituals." },
        summer: { title: "Summer Flow", desc: "You seek clarity. Focus on air circulation and simplified arrangements." },
        autumn: { title: "Autumn Warmth", desc: "You crave connection. Focus on creating cozy gathering spaces." },
        winter: { title: "Winter Rest", desc: "You need deep restoration. Focus on creating a sanctuary for sleep." },
    };

    return (
        <Section background="indigo" id="quiz" className="min-h-[70vh] flex items-center py-20">
            <Container className="max-w-2xl">
                <div className="text-center mb-10">
                    <Text variant="small" className="text-[var(--color-gold-muted)] uppercase tracking-widest font-bold">
                        Personalized Insight
                    </Text>
                    <Heading as="h2" className="text-[var(--color-cream-silk)] mb-2">
                        Discover Your Home's Season
                    </Heading>
                    <Text className="text-[var(--color-cream-silk)]/60">
                        Take this quick 3-question quiz to find your ideal balance.
                    </Text>
                </div>

                <div className="relative bg-[var(--color-cream-silk)] rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {!showResult ? (
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                {/* Progress Bar */}
                                <div className="w-full bg-[var(--color-indigo-deep)]/10 h-1.5 rounded-full mb-8">
                                    <motion.div
                                        className="h-full bg-[var(--color-gold-muted)] rounded-full"
                                        initial={{ width: `${(currentQuestion / QUIZ_QUESTIONS.length) * 100}%` }}
                                        animate={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>

                                <Heading as="h3" className="text-2xl mb-8 text-[var(--color-indigo-deep)]">
                                    {QUIZ_QUESTIONS[currentQuestion].question}
                                </Heading>

                                <div className="grid gap-3">
                                    {QUIZ_QUESTIONS[currentQuestion].options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(opt.season)}
                                            className="w-full text-left px-6 py-4 rounded-lg bg-white border border-[var(--color-indigo-deep)]/10 hover:border-[var(--color-gold-muted)] hover:bg-[var(--color-indigo-deep)]/5 transition-all duration-200 group flex items-center justify-between"
                                        >
                                            <span className="font-medium text-[var(--color-text-dark)] group-hover:text-[var(--color-indigo-deep)]">{opt.label}</span>
                                            <span className="opacity-0 group-hover:opacity-100 text-[var(--color-gold-muted)]">→</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-6 flex flex-col items-center"
                            >
                                <div className="inline-flex items-center justify-center p-4 rounded-full bg-[var(--color-gold-muted)]/10 mb-2">
                                    <Sparkles className="text-[var(--color-gold-muted)] w-8 h-8" />
                                </div>
                                <Heading as="h3" className="text-3xl text-[var(--color-indigo-deep)]">
                                    Your Home Season is {resultContent[result].title}
                                </Heading>
                                <Text className="text-lg text-[var(--color-text-dark)]/80 max-w-md mx-auto">
                                    {resultContent[result].desc}
                                </Text>
                                <div className="pt-6">
                                    <Button
                                        as="a"
                                        href="#final-cta"
                                        size="lg"
                                        className="bg-[var(--color-gold-muted)] text-[var(--color-indigo-deep)] font-bold px-8"
                                    >
                                        Get Your {resultContent[result].title} Plan
                                    </Button>
                                </div>
                                <button
                                    onClick={() => {
                                        setShowResult(false);
                                        setCurrentQuestion(0);
                                        setAnswers([]);
                                    }}
                                    className="text-sm text-[var(--color-text-dark)]/40 hover:text-[var(--color-indigo-deep)] underline decoration-dotted"
                                >
                                    Retake Quiz
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </Section>
    );
}
