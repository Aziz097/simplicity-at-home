import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    background?: 'cream' | 'indigo' | 'gradient' | 'none';
}

export function Section({
    className,
    children,
    background = 'cream',
    ...props
}: SectionProps) {
    const backgrounds = {
        cream: 'bg-[var(--color-cream-silk)] text-[var(--color-text-dark)]',
        indigo: 'bg-[var(--color-indigo-deep)] text-[var(--color-text-light)]',
        gradient: 'bg-gradient-to-b from-[var(--color-cream-silk)] to-[var(--color-indigo-deep)]',
        none: '',
    };

    return (
        <section
            className={cn(
                'py-16 md:py-24 relative overflow-hidden',
                backgrounds[background],
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
