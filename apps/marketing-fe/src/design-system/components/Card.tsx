/**
 * Card Component Library
 * Based on CargoNex UI/UX Documentation
 */

import React from 'react';
import { cn } from '@/lib/utils';

// Base Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'problem' | 'benefit' | 'aiStats' | 'shipment' | 'default';
    children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        const variantStyles = {
            problem: 'w-full md:w-[387px] h-[242px]',
            benefit: 'w-full md:w-[285px] h-[298px]',
            aiStats: 'w-full md:w-[181px] h-[124px]',
            shipment: 'w-full md:w-[259px] h-[74px]',
            default: 'w-full',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-[12px] bg-white shadow-lg border border-gray-200',
                    'transition-all duration-300 hover:shadow-xl',
                    variantStyles[variant],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = 'Card';

// Card Header
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('flex flex-col gap-1.5 p-6', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
CardHeader.displayName = 'CardHeader';

// Card Title
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <h3
                ref={ref}
                className={cn(
                    'text-2xl font-bold leading-tight tracking-tight',
                    className
                )}
                {...props}
            >
                {children}
            </h3>
        );
    }
);
CardTitle.displayName = 'CardTitle';

// Card Description
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn('text-sm text-muted-foreground', className)}
                {...props}
            >
                {children}
            </p>
        );
    }
);
CardDescription.displayName = 'CardDescription';

// Card Content
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
                {children}
            </div>
        );
    }
);
CardContent.displayName = 'CardContent';

// Card Footer
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('flex items-center p-6 pt-0', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
CardFooter.displayName = 'CardFooter';

// Problem Card (specific variant)
interface ProblemCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => {
    return (
        <Card variant="problem" className="p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {icon}
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </Card>
    );
};

// Benefit Card (specific variant)
interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features?: string[];
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
    icon,
    title,
    description,
    features
}) => {
    return (
        <Card variant="benefit" className="p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
                {icon}
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            {features && features.length > 0 && (
                <ul className="flex flex-col gap-2 mt-2">
                    {features.map((feature, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
};

// AI Stats Card (specific variant)
interface AIStatsCardProps {
    value: string;
    label: string;
    trend?: 'up' | 'down' | 'neutral';
}

export const AIStatsCard: React.FC<AIStatsCardProps> = ({ value, label, trend }) => {
    return (
        <Card variant="aiStats" className="p-4 flex flex-col justify-center gap-2">
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">{value}</span>
                {trend && (
                    <span className={cn(
                        'text-sm',
                        trend === 'up' && 'text-green-500',
                        trend === 'down' && 'text-red-500',
                        trend === 'neutral' && 'text-muted-foreground'
                    )}>
                        {trend === 'up' && '↑'}
                        {trend === 'down' && '↓'}
                        {trend === 'neutral' && '→'}
                    </span>
                )}
            </div>
            <p className="text-sm text-muted-foreground">{label}</p>
        </Card>
    );
};

// Shipment Info Card (specific variant)
interface ShipmentCardProps {
    containerNumber: string;
    eta: string;
    status: 'in-transit' | 'arrived' | 'delayed';
    origin: string;
    destination: string;
}

export const ShipmentCard: React.FC<ShipmentCardProps> = ({
    containerNumber,
    eta,
    status,
    origin,
    destination,
}) => {
    const statusColors = {
        'in-transit': 'bg-blue-100 text-blue-700',
        'arrived': 'bg-green-100 text-green-700',
        'delayed': 'bg-red-100 text-red-700',
    };

    return (
        <Card variant="shipment" className="p-4 flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">{containerNumber}</span>
                <span className="text-xs text-muted-foreground">
                    {origin} → {destination}
                </span>
            </div>
            <div className="flex flex-col items-end gap-1">
                <span className={cn('text-xs px-2 py-1 rounded-full', statusColors[status])}>
                    {status}
                </span>
                <span className="text-xs text-muted-foreground">ETA: {eta}</span>
            </div>
        </Card>
    );
};
