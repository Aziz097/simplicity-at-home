import * as React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
}

export function Heading({
    as: Component = 'h2',
    className,
    children,
    ...props
}: HeadingProps) {
    const baseStyles = 'font-[var(--font-zen)] text-[var(--color-indigo-deep)] font-bold';

    const styles = {
        h1: 'text-5xl md:text-6xl lg:text-7xl leading-tight',
        h2: 'text-3xl md:text-4xl lg:text-5xl tracking-tight',
        h3: 'text-2xl md:text-3xl lg:text-4xl',
        h4: 'text-xl md:text-2xl',
        h5: 'text-lg md:text-xl',
        h6: 'text-base md:text-lg',
    };

    return (
        <Component className={cn(baseStyles, styles[Component], className)} {...props}>
            {children}
        </Component>
    );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    variant?: 'default' | 'lead' | 'muted' | 'small' | 'large';
}

export function Text({
    className,
    variant = 'default',
    children,
    ...props
}: TextProps) {
    const baseStyles = 'font-[var(--font-inter)]';

    const styles = {
        default: 'text-base leading-relaxed text-[var(--color-text-dark)]',
        lead: 'text-xl md:text-2xl font-light text-[var(--color-text-dark)]/90',
        muted: 'text-sm text-[var(--color-text-dark)]/60',
        small: 'text-sm font-medium leading-none text-[var(--color-text-dark)]',
        large: 'text-lg font-semibold text-[var(--color-text-dark)]',
    };

    return (
        <p className={cn(baseStyles, styles[variant], className)} {...props}>
            {children}
        </p>
    );
}
