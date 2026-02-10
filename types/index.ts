export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
}

export interface FeatureItem {
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
}
