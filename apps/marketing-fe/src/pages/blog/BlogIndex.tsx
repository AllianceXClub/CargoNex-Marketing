import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogIndex() {
    const posts = [
        {
            id: "how-importers-israel-prepare-2026-ai-guide",
            title: "כיצד יבואנים בישראל צריכים להיערך ל-2026: מדריך לשילוב AI בניהול יבוא",
            excerpt: "שנת 2026 מסתמנת כשנת מפנה עבור ענף היבוא בישראל. גלו כיצד בינה מלאכותית יכולה לעזור לכם להתמודד עם אתגרי השעה ולהפוך אותם להזדמנויות.",
            date: "17 בנובמבר 2025",
            readTime: "8 דקות קריאה",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            category: "מדריכים"
        }
        // More posts can be added here later
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container py-12 md:py-16">
                <div className="flex flex-col items-center text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">הבלוג של CargoNex</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        תובנות, מדריכים וחדשות על עולם היבוא, הלוגיסטיקה והבינה המלאכותית.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {post.date}
                                    </span>
                                </div>
                                <CardTitle className="line-clamp-2 leading-tight">
                                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription className="line-clamp-3 mt-2">
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto pt-0">
                                <Link href={`/blog/${post.id}`}>
                                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent hover:text-primary">
                                        קרא עוד
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <div className="mr-auto flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    {post.readTime}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
