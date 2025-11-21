import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, FileText, Clock, AlertTriangle, CheckCircle, Zap, Shield, TrendingUp, Search, Menu } from 'lucide-react';
import RealTimeTracking from '@/components/RealTimeTracking';

/**
 * TestPage - Exact replica of cargonex.io based on UI/UX documentation and CSS classes
 * Route: /test
 */
export default function TestPage() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased" dir="rtl">
            {/* Header - 65px height */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[65px]">
                <div className="container flex h-full items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary tracking-tight">CargoNex</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">תכונות</a>
                        <a href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">מחירים</a>
                        <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">אודות</a>
                        <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">צור קשר</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* LoginButton - 64×32px */}
                        <Button
                            variant="ghost"
                            className="h-[32px] w-[64px] text-sm font-medium rounded-[8.4px] px-4"
                        >
                            התחבר
                        </Button>
                        {/* FreeTrialButton - 107×32px */}
                        <Button
                            className="h-[32px] w-[107px] text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8.4px] px-4 shadow-sm"
                        >
                            נסה בחינם
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-28">
                    <div className="container relative z-10">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            {/* Text Content - Right side (RTL) */}
                            <div className="flex flex-col gap-6 text-center lg:text-right">
                                <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-muted-foreground">פלטפורמת ניהול יבוא מבוססת AI</span>
                                </div>

                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    <span className="text-foreground">CargoNex</span>
                                    <br />
                                    <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
                                        אוטומציה חכמה ליבואנים
                                    </span>
                                </h1>

                                <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                    נהל את כל שרשרת היבוא שלך במקום אחד, בקלות ובאמצעות בינה מלאכותית.
                                    הפסיקו לבזבז שעות על עבודה ידנית - המערכת החכמה שלנו ממכנת את התהליכים ומעניקה לך שליטה מלאה.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                                    {/* StartTrialButton - 218×48px */}
                                    <Button
                                        size="lg"
                                        className="h-[48px] w-full sm:w-[218px] bg-primary text-primary-foreground hover:bg-primary/90 text-lg rounded-[8.4px] shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        התחל התנסות בחינם
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                    </Button>
                                    {/* WatchDemoButton - 128×48px */}
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-[48px] w-full sm:w-[128px] text-lg rounded-[8.4px] border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                                    >
                                        <Play className="ml-2 h-5 w-5 fill-current" />
                                        צפה בדמו
                                    </Button>
                                </div>

                                <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center lg:justify-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-primary" /> ללא צורך בכרטיס אשראי
                                    <span className="mx-2">•</span>
                                    <CheckCircle className="h-4 w-4 text-primary" /> ניסיון 14 יום בחינם
                                </p>
                            </div>

                            {/* Video/Image Section - Left side (RTL) */}
                            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
                                <div className="relative rounded-[16px] overflow-hidden shadow-2xl border-4 border-white/20 bg-background">
                                    <div className="aspect-video w-full bg-muted/50 flex items-center justify-center relative overflow-hidden group">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src="/shipping-animation.mp4" type="video/mp4" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                                <p className="text-muted-foreground">Video Placeholder</p>
                                            </div>
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>
                                {/* Decorative blobs */}
                                <div className="absolute -top-12 -right-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse"></div>
                                <div className="absolute -bottom-12 -left-12 h-72 w-72 rounded-full bg-primary/5 blur-3xl -z-10 animate-pulse delay-1000"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                                האתגרים שיבואנים מתמודדים איתם
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                בעיות נפוצות בניהול תהליכי יבוא מסורתיים שמעכבות את הצמיחה שלך
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Problem Card 1 - 387×242px */}
                            <div className="group relative overflow-hidden rounded-[12px] border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 w-full max-w-[387px] h-[242px] mx-auto flex flex-col">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">ניהול מסמכים מורכב</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    קשיים בניהול וארגון מסמכי יבוא, חוסר שקיפות ומעקב ידני שגוזל זמן יקר ויוצר בלאגן.
                                </p>
                            </div>

                            {/* Problem Card 2 */}
                            <div className="group relative overflow-hidden rounded-[12px] border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 w-full max-w-[387px] h-[242px] mx-auto flex flex-col">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">חוסר שקיפות</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    קושי במעקב אחר סטטוס משלוחים בזמן אמת ותקשורת לא יעילה עם ספקים ועמילי מכס.
                                </p>
                            </div>

                            {/* Problem Card 3 */}
                            <div className="group relative overflow-hidden rounded-[12px] border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 w-full max-w-[387px] h-[242px] mx-auto flex flex-col">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <AlertTriangle className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">טעויות ידניות</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    שגיאות בהזנת נתונים ידנית וחוסר אוטומציה בתהליכים חוזרים הגורמים לעיכובים וקנסות.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24 bg-muted/30">
                    <div className="container">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                                הפתרון של CargoNex
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                טכנולוגיית AI מתקדמת לניהול יבוא חכם, יעיל ומדויק
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Benefit Card 1 - 285×298px */}
                            <div className="relative overflow-hidden rounded-[12px] border bg-background p-6 shadow-sm transition-all hover:shadow-lg w-full max-w-[285px] h-[298px] mx-auto flex flex-col">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">אוטומציה מלאה</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    ניהול אוטומטי של כל תהליכי היבוא מקצה לקצה
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>זיהוי אוטומטי של מסמכים</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>מעקב בזמן אמת</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>התראות חכמות</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Benefit Card 2 */}
                            <div className="relative overflow-hidden rounded-[12px] border bg-background p-6 shadow-sm transition-all hover:shadow-lg w-full max-w-[285px] h-[298px] mx-auto flex flex-col">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">חיסכון בזמן</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    הפחתה של עד 80% בזמן עיבוד משלוחים ומסמכים
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>עיבוד מסמכים מיידי</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>דוחות אוטומטיים</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>אינטגרציה עם מערכות</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Benefit Card 3 */}
                            <div className="relative overflow-hidden rounded-[12px] border bg-background p-6 shadow-sm transition-all hover:shadow-lg w-full max-w-[285px] h-[298px] mx-auto flex flex-col">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">אבטחה מלאה</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    הגנה מקסימלית על המידע שלך ותאימות לתקנים
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>הצפנה מתקדמת</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>גיבויים אוטומטיים</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                            <CheckCircle className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>תאימות לתקנים</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Stats Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                                המספרים מדברים בעד עצמם
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                התוצאות שהלקוחות שלנו משיגים באמצעות הפלטפורמה
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {/* AI Stats Card - 181×124px */}
                            <div className="w-full max-w-[181px] h-[124px] mx-auto bg-gradient-to-br from-primary/5 to-transparent rounded-[12px] p-5 border border-primary/10 flex flex-col justify-between hover:border-primary/30 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-primary tracking-tight">95%</span>
                                    <TrendingUp className="w-5 h-5 text-primary/80" />
                                </div>
                                <p className="text-xs font-medium text-muted-foreground">דיוק בזיהוי מסמכים</p>
                            </div>

                            <div className="w-full max-w-[181px] h-[124px] mx-auto bg-gradient-to-br from-primary/5 to-transparent rounded-[12px] p-5 border border-primary/10 flex flex-col justify-between hover:border-primary/30 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-primary tracking-tight">80%</span>
                                    <TrendingUp className="w-5 h-5 text-primary/80" />
                                </div>
                                <p className="text-xs font-medium text-muted-foreground">חיסכון בזמן עיבוד</p>
                            </div>

                            <div className="w-full max-w-[181px] h-[124px] mx-auto bg-gradient-to-br from-primary/5 to-transparent rounded-[12px] p-5 border border-primary/10 flex flex-col justify-between hover:border-primary/30 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-primary tracking-tight">24/7</span>
                                    <Clock className="w-5 h-5 text-primary/80" />
                                </div>
                                <p className="text-xs font-medium text-muted-foreground">זמינות המערכת</p>
                            </div>

                            <div className="w-full max-w-[181px] h-[124px] mx-auto bg-gradient-to-br from-primary/5 to-transparent rounded-[12px] p-5 border border-primary/10 flex flex-col justify-between hover:border-primary/30 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-primary tracking-tight">500+</span>
                                    <TrendingUp className="w-5 h-5 text-primary/80" />
                                </div>
                                <p className="text-xs font-medium text-muted-foreground">לקוחות מרוצים</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Container Tracking Section - Forms & Map */}
                <section className="py-16 md:py-24 bg-muted/30">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                                מעקב מכולות בזמן אמת
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                עקוב אחר המשלוחים שלך בכל רגע נתון עם מפה אינטראקטיבית
                            </p>
                        </div>

                        {/* Search Section - 571×48px input + 88×48px button */}
                        <div className="flex gap-3 justify-center mb-8 max-w-3xl mx-auto px-4">
                            <div className="relative flex-1 max-w-[571px]">
                                <input
                                    type="text"
                                    placeholder="חפש מכולה (לדוגמה: MSCU1234567)..."
                                    className="w-full h-[48px] px-4 pr-12 rounded-[8.4px] border border-input bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                            </div>
                            <Button className="h-[48px] w-[88px] bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8.4px] shadow-sm">
                                <Search className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Map Container - 1094×440px */}
                        <div className="max-w-[1094px] h-[440px] mx-auto bg-background rounded-[16px] shadow-xl border border-border overflow-hidden relative group">
                            {/* Using the RealTimeTracking component which contains the screenshot */}
                            <div className="w-full h-full">
                                <RealTimeTracking />
                            </div>

                            {/* Overlay Shipment Cards - 259×74px - Positioned exactly as in design */}
                            <div className="absolute top-6 right-6 space-y-3 pointer-events-none">
                                {/* These are visual overlays to match the design if the image doesn't have them or to enhance interactivity */}
                                {/* Card 1 */}
                                <div className="w-[259px] h-[74px] bg-white/95 backdrop-blur-sm rounded-[8.4px] shadow-lg p-3 border border-border/50 flex flex-col justify-between pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-foreground">MSCU1234567</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">In Transit</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <p className="text-xs text-muted-foreground">Shanghai → Ashdod</p>
                                        <p className="text-xs font-medium text-primary">ETA: 25/11</p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="w-[259px] h-[74px] bg-white/95 backdrop-blur-sm rounded-[8.4px] shadow-lg p-3 border border-border/50 flex flex-col justify-between pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-foreground">HLCU9876543</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Arrived</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <p className="text-xs text-muted-foreground">Hamburg → Haifa</p>
                                        <p className="text-xs font-medium text-green-600">Delivered</p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="w-[259px] h-[74px] bg-white/95 backdrop-blur-sm rounded-[8.4px] shadow-lg p-3 border border-border/50 flex flex-col justify-between pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-foreground">CMAU5555555</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">Delayed</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <p className="text-xs text-muted-foreground">Singapore → Ashdod</p>
                                        <p className="text-xs font-medium text-orange-600">ETA: +3 Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-12 bg-foreground text-background">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <span className="text-2xl font-bold text-background mb-4 block">CargoNex</span>
                            <p className="text-sm text-muted-foreground max-w-xs">
                                פלטפורמת ניהול יבוא מבוססת AI המאפשרת ליבואנים ועמילי מכס לייעל תהליכים, לחסוך זמן וכסף.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">מוצר</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-background transition-colors">תכונות</a></li>
                                <li><a href="#" className="hover:text-background transition-colors">מחירים</a></li>
                                <li><a href="#" className="hover:text-background transition-colors">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">חברה</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-background transition-colors">אודות</a></li>
                                <li><a href="#" className="hover:text-background transition-colors">בלוג</a></li>
                                <li><a href="#" className="hover:text-background transition-colors">צור קשר</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 text-center text-xs text-muted-foreground">
                        <p>© 2025 CargoNex. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
