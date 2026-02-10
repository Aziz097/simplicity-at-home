import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center bg-cream-silk text-center">
            <Container>
                <div className="max-w-md mx-auto space-y-6">
                    <Heading as="h1" className="text-6xl md:text-8xl text-indigo-deep/20 font-ten-mincho">
                        404
                    </Heading>
                    <Heading as="h2" className="text-2xl md:text-3xl">
                        Page Not Found
                    </Heading>
                    <Text className="text-lg text-text-dark/70">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </Text>
                    <div className="pt-4">
                        <Button asChild size="lg">
                            <Link href="/">
                                Return Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
