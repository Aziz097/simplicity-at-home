'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-muted)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[var(--color-indigo-deep)] text-[var(--color-cream-silk)] hover:opacity-90',
    secondary: 'bg-[var(--color-gold-muted)] text-[var(--color-indigo-deep)] hover:opacity-90',
    outline: 'border border-[var(--color-indigo-deep)] bg-transparent text-[var(--color-indigo-deep)] hover:bg-[var(--color-indigo-deep)] hover:text-[var(--color-cream-silk)]',
    ghost: 'hover:bg-[var(--color-indigo-deep)]/10 hover:text-[var(--color-indigo-deep)]',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-9 rounded-md px-3',
    md: 'h-11 rounded-md px-8',
    lg: 'h-14 rounded-md px-10 text-base',
    icon: 'h-10 w-10',
};

// Button as <button>
interface ButtonAsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button';
    asChild?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: never;
}

// Button as <a>
interface ButtonAsAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    as: 'a';
    asChild?: never;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
    const { variant = 'primary', size = 'md', className, ...rest } = props;
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (props.as === 'a') {
        const { as: _, variant: _v, size: _s, ...anchorProps } = rest as ButtonAsAnchor;
        return (
            <a className={classes} {...anchorProps}>
                {anchorProps.children}
            </a>
        );
    }

    const { as: _, asChild, variant: _v, size: _s, ...buttonProps } = rest as ButtonAsButton;
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={classes} {...buttonProps}>
            {buttonProps.children}
        </Comp>
    );
}
