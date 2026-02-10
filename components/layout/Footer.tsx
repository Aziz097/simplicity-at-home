import { Container } from '@/components/layout/Container';
import { Text } from '@/components/ui/Typography';
import { Instagram } from 'lucide-react';
import { LINKS } from '@/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-indigo-deep)] text-[var(--color-cream-silk)] border-t border-[var(--color-cream-silk)]/10 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left space-y-2">
                        <Text className="text-[var(--color-cream-silk)] font-[var(--font-zen)] font-bold text-lg">
                            Simplicity at Home
                        </Text>
                        <Text variant="muted" className="text-[var(--color-cream-silk)]/60 text-sm">
                            &copy; {currentYear} Yumiko Sekine. All rights reserved.
                        </Text>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://foglinenwork.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-cream-silk)]/60 hover:text-[var(--color-gold-muted)] transition-colors text-sm font-[var(--font-inter)]"
                        >
                            Fog Linen Work
                        </a>
                        <a
                            href={LINKS.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-cream-silk)]/60 hover:text-[var(--color-gold-muted)] transition-colors"
                            aria-label="Follow us on Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
