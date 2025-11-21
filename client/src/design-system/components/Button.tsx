/**
 * Button Component Library
 * Based on CargoNex UI/UX Documentation
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = cn(
            'inline-flex items-center justify-center',
            'font-medium transition-all duration-200',
            'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'whitespace-nowrap'
        );

        const variantStyles = {
            primary: cn(
                'bg-primary text-primary-foreground',
                'hover:bg-primary/90 hover:shadow-lg',
                'active:scale-95'
            ),
            secondary: cn(
                'bg-white text-foreground border-2 border-gray-200',
                'hover:bg-gray-50 hover:border-gray-300',
                'active:scale-95'
            ),
            outline: cn(
                'bg-transparent text-foreground border-2 border-input',
                'hover:bg-accent hover:text-accent-foreground',
                'active:scale-95'
            ),
            ghost: cn(
                'bg-transparent text-foreground',
                'hover:bg-accent hover:text-accent-foreground',
                'active:scale-95'
            ),
            whatsapp: cn(
                'bg-[#25D366] text-white',
                'hover:bg-[#20BA5A] hover:shadow-lg',
                'active:scale-95'
            ),
        };

        const sizeStyles = {
            sm: cn(
                'h-8 px-3 text-sm',
                'rounded-[8.4px]',
                'gap-1.5'
            ),
            md: cn(
                'h-10 px-4 text-base',
                'rounded-[8.4px]',
                'gap-2'
            ),
            lg: cn(
                'h-12 px-8 text-lg',
                'rounded-[8.4px]',
                'gap-2'
            ),
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

// Specific button variants from documentation

export const LoginButton: React.FC<Omit<ButtonProps, 'variant' | 'size'>> = (props) => {
    return (
        <Button
            variant="outline"
            size="sm"
            className="w-16 h-8"
            {...props}
        />
    );
};

export const FreeTrialButton: React.FC<Omit<ButtonProps, 'variant' | 'size'>> = (props) => {
    return (
        <Button
            variant="primary"
            size="sm"
            className="w-[107px] h-8"
            {...props}
        />
    );
};

export const StartTrialButton: React.FC<Omit<ButtonProps, 'variant' | 'size'>> = (props) => {
    return (
        <Button
            variant="primary"
            size="lg"
            className="w-full md:w-[218px] h-12 text-lg"
            {...props}
        />
    );
};

export const WatchDemoButton: React.FC<Omit<ButtonProps, 'variant' | 'size'>> = (props) => {
    return (
        <Button
            variant="outline"
            size="lg"
            className="w-full md:w-[128px] h-12 text-lg"
            {...props}
        />
    );
};

export const SearchButton: React.FC<Omit<ButtonProps, 'variant' | 'size'>> = (props) => {
    return (
        <Button
            variant="primary"
            className="w-[88px] h-12 px-4"
            {...props}
        />
    );
};

export const WhatsAppButton: React.FC<Omit<ButtonProps, 'variant'>> = ({ size = 'lg', ...props }) => {
    return (
        <Button
            variant="whatsapp"
            size={size}
            className="fixed bottom-6 left-6 z-50 shadow-2xl hover:scale-110"
            {...props}
        />
    );
};
