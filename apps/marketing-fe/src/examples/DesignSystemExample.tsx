/**
 * Example: Using the CargoNex Design System
 * 
 * This file demonstrates how to use the new design system components
 * in your application.
 */

import React from 'react';
import {
    Button,
    StartTrialButton,
    WatchDemoButton,
    ProblemCard,
    BenefitCard,
    AIStatsCard,
    tokens
} from '@/design-system';
import { FileText, Clock, AlertTriangle, CheckCircle, Zap, Shield } from 'lucide-react';

/**
 * Example 1: Hero Section with Design System Buttons
 */
export function HeroExample() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 text-center lg:text-right">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border bg-background px-4 py-1.5 text-sm">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-muted-foreground">פלטפורמת ניהול יבוא מבוססת AI</span>
                        </div>

                        {/* Heading - Using documented typography */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-foreground">CargoNex</span>
                            <br />
                            <span className="text-primary">אוטומציה חכמה</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                            נהל את כל שרשרת היבוא שלך במקום אחד, בקלות ובאמצעות בינה מלאכותית.
                        </p>

                        {/* CTA Buttons - Using design system components */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <StartTrialButton>
                                התחל התנסות בחינם
                            </StartTrialButton>
                            <WatchDemoButton>
                                צפה בדמו
                            </WatchDemoButton>
                        </div>

                        {/* Feature list */}
                        <p className="text-sm text-muted-foreground">
                            ללא צורך בכרטיס אשראי • ניסיון 14 יום בחינם • תמיכה במגוון שפות
                        </p>
                    </div>

                    {/* Visual content would go here */}
                    <div className="relative">
                        {/* Your video or image */}
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Example 2: Problem Cards Section
 */
export function ProblemsSection() {
    const problems = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "ניהול מסמכים מורכב",
            description: "קשיים בניהול וארגון מסמכי יבוא, חוסר שקיפות ומעקב ידני"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "חוסר שקיפות",
            description: "קושי במעקב אחר סטטוס משלוחים בזמן אמת ותקשורת לא יעילה"
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "טעויות ידניות",
            description: "שגיאות בהזנת נתונים ידנית וחוסר אוטומציה בתהליכים"
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        האתגרים שיבואנים מתמודדים איתם
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        בעיות נפוצות בניהול תהליכי יבוא מסורתיים
                    </p>
                </div>

                {/* 3-Column Grid - Using documented pattern */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, index) => (
                        <ProblemCard
                            key={index}
                            icon={problem.icon}
                            title={problem.title}
                            description={problem.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Example 3: Benefits Section
 */
export function BenefitsSection() {
    const benefits = [
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "אוטומציה מלאה",
            description: "ניהול אוטומטי של כל תהליכי היבוא",
            features: [
                "זיהוי אוטומטי של מסמכים",
                "מעקב בזמן אמת",
                "התראות חכמות"
            ]
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "חיסכון בזמן",
            description: "הפחתה של עד 80% בזמן עיבוד",
            features: [
                "עיבוד מסמכים מיידי",
                "דוחות אוטומטיים",
                "אינטגרציה עם מערכות קיימות"
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "אבטחה מלאה",
            description: "הגנה מקסימלית על המידע שלך",
            features: [
                "הצפנה מתקדמת",
                "גיבויים אוטומטיים",
                "תאימות לתקנים בינלאומיים"
            ]
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        הפתרון של CargoNex
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        טכנולוגיית AI מתקדמת לניהול יבוא חכם
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            features={benefit.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Example 4: Stats Section
 */
export function StatsSection() {
    const stats = [
        { value: "95%", label: "דיוק בזיהוי מסמכים", trend: "up" as const },
        { value: "80%", label: "חיסכון בזמן עיבוד", trend: "up" as const },
        { value: "24/7", label: "זמינות המערכת", trend: "neutral" as const },
        { value: "500+", label: "לקוחות מרוצים", trend: "up" as const }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        המספרים מדברים בעד עצמם
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <AIStatsCard
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            trend={stat.trend}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Example 5: Using Design Tokens Directly
 */
export function CustomComponent() {
    return (
        <div
            style={{
                padding: tokens.spacing.scale[6],
                borderRadius: tokens.spacing.borderRadius.md,
                backgroundColor: tokens.colors.background.DEFAULT,
                border: `1px solid ${tokens.colors.border}`,
            }}
        >
            <h3
                style={{
                    fontSize: tokens.typography.fontSize.h3.size,
                    fontWeight: tokens.typography.fontSize.h3.weight,
                    lineHeight: tokens.typography.fontSize.h3.lineHeight,
                    color: tokens.colors.text.DEFAULT,
                    marginBottom: tokens.spacing.scale[4],
                }}
            >
                Custom Component
            </h3>
            <p
                style={{
                    fontSize: tokens.typography.fontSize.body.size,
                    lineHeight: tokens.typography.fontSize.body.lineHeight,
                    color: tokens.colors.text.muted,
                }}
            >
                This component uses design tokens directly for styling.
            </p>
        </div>
    );
}

/**
 * Example 6: Complete Page Layout
 */
export function ExamplePage() {
    return (
        <main>
            <HeroExample />
            <ProblemsSection />
            <BenefitsSection />
            <StatsSection />
        </main>
    );
}

export default ExamplePage;
