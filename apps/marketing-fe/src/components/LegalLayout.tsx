import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
    children: React.ReactNode;
    title: string;
    lastUpdated: string;
}

export default function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container py-12 md:py-16 max-w-4xl">
                <div className="space-y-6">
                    <div className="border-b pb-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h1>
                        <p className="text-muted-foreground">עדכון אחרון: {lastUpdated}</p>
                    </div>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
