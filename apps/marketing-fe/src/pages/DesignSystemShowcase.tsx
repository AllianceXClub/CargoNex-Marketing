import React from 'react';
import {
    Button,
    LoginButton,
    FreeTrialButton,
    StartTrialButton,
    WatchDemoButton,
    SearchButton,
    WhatsAppButton,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    ProblemCard,
    BenefitCard,
    AIStatsCard,
    ShipmentCard,
} from '@/design-system';
import {
    FileText,
    Clock,
    AlertTriangle,
    CheckCircle,
    Zap,
    Shield,
    ArrowLeft,
    Play,
    Search,
    MessageCircle
} from 'lucide-react';

export default function DesignSystemShowcase() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 h-[65px] backdrop-blur bg-background/60 border-b">
                <div className="container h-full flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">CargoNex</div>
                    <nav className="hidden md:flex gap-6 text-sm">
                        <a href="#" className="text-muted-foreground hover:text-foreground">תכונות</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground">מחירים</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground">אודות</a>
                    </nav>
                    <div className="flex gap-3">
                        <LoginButton>התחבר</LoginButton>
                        <FreeTrialButton>נסה בחינם</FreeTrialButton>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
                <div className="container">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm mb-6">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-muted-foreground">Design System Showcase</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                            <span className="text-foreground">CargoNex</span>
                            <br />
                            <span className="text-primary">Design System</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            מערכת עיצוב מלאה המבוססת על ניתוח UI/UX של האתר הרשמי
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <StartTrialButton>
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                התחל התנסות בחינם
                            </StartTrialButton>
                            <WatchDemoButton>
                                <Play className="ml-2 h-5 w-5" />
                                צפה בדמו
                            </WatchDemoButton>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            ללא צורך בכרטיס אשראי • ניסיון 14 יום בחינם • תמיכה במגוון שפות
                        </p>
                    </div>
                </div>
            </section>

            {/* Buttons Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Button Components</h2>

                    <div className="space-y-8">
                        {/* Button Variants */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Variants</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary Button</Button>
                                <Button variant="secondary">Secondary Button</Button>
                                <Button variant="outline">Outline Button</Button>
                                <Button variant="ghost">Ghost Button</Button>
                                <Button variant="whatsapp">
                                    <MessageCircle className="ml-2 h-5 w-5" />
                                    WhatsApp
                                </Button>
                            </div>
                        </div>

                        {/* Button Sizes */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Sizes</h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button size="sm">Small (32px)</Button>
                                <Button size="md">Medium (40px)</Button>
                                <Button size="lg">Large (48px)</Button>
                            </div>
                        </div>

                        {/* Specific Buttons */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Specific Buttons (Documented Sizes)</h3>
                            <div className="flex flex-wrap gap-4">
                                <LoginButton>התחבר (64×32)</LoginButton>
                                <FreeTrialButton>נסה בחינם (107×32)</FreeTrialButton>
                                <StartTrialButton>התחל התנסות (218×48)</StartTrialButton>
                                <WatchDemoButton>צפה בדמו (128×48)</WatchDemoButton>
                                <SearchButton>
                                    <Search className="h-5 w-5" />
                                </SearchButton>
                            </div>
                        </div>

                        {/* Button States */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">States</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button>Normal</Button>
                                <Button disabled>Disabled</Button>
                                <Button className="hover:scale-95">Hover Me</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Cards Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4 text-center">Problem Cards (387×242px)</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        Based on documented specifications
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProblemCard
                            icon={<FileText className="w-6 h-6" />}
                            title="ניהול מסמכים מורכב"
                            description="קשיים בניהול וארגון מסמכי יבוא, חוסר שקיפות ומעקב ידני שגוזל זמן יקר"
                        />
                        <ProblemCard
                            icon={<Clock className="w-6 h-6" />}
                            title="חוסר שקיפות"
                            description="קושי במעקב אחר סטטוס משלוחים בזמן אמת ותקשורת לא יעילה עם ספקים"
                        />
                        <ProblemCard
                            icon={<AlertTriangle className="w-6 h-6" />}
                            title="טעויות ידניות"
                            description="שגיאות בהזנת נתונים ידנית וחוסר אוטומציה בתהליכים חוזרים"
                        />
                    </div>
                </div>
            </section>

            {/* Benefit Cards Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4 text-center">Benefit Cards (285×298px)</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        With feature lists
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <BenefitCard
                            icon={<CheckCircle className="w-6 h-6" />}
                            title="אוטומציה מלאה"
                            description="ניהול אוטומטי של כל תהליכי היבוא"
                            features={[
                                "זיהוי אוטומטי של מסמכים",
                                "מעקב בזמן אמת",
                                "התראות חכמות"
                            ]}
                        />
                        <BenefitCard
                            icon={<Zap className="w-6 h-6" />}
                            title="חיסכון בזמן"
                            description="הפחתה של עד 80% בזמן עיבוד"
                            features={[
                                "עיבוד מסמכים מיידי",
                                "דוחות אוטומטיים",
                                "אינטגרציה עם מערכות"
                            ]}
                        />
                        <BenefitCard
                            icon={<Shield className="w-6 h-6" />}
                            title="אבטחה מלאה"
                            description="הגנה מקסימלית על המידע שלך"
                            features={[
                                "הצפנה מתקדמת",
                                "גיבויים אוטומטיים",
                                "תאימות לתקנים"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* AI Stats Cards Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4 text-center">AI Stats Cards (181×124px)</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        Compact statistics display
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <AIStatsCard value="95%" label="דיוק בזיהוי מסמכים" trend="up" />
                        <AIStatsCard value="80%" label="חיסכון בזמן עיבוד" trend="up" />
                        <AIStatsCard value="24/7" label="זמינות המערכת" trend="neutral" />
                        <AIStatsCard value="500+" label="לקוחות מרוצים" trend="up" />
                    </div>
                </div>
            </section>

            {/* Shipment Cards Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4 text-center">Shipment Cards (259×74px)</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        Container tracking information
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <ShipmentCard
                            containerNumber="MSCU1234567"
                            eta="2025-11-25"
                            status="in-transit"
                            origin="Shanghai"
                            destination="Ashdod"
                        />
                        <ShipmentCard
                            containerNumber="HLCU9876543"
                            eta="2025-11-22"
                            status="arrived"
                            origin="Hamburg"
                            destination="Haifa"
                        />
                        <ShipmentCard
                            containerNumber="CMAU5555555"
                            eta="2025-11-28"
                            status="delayed"
                            origin="Singapore"
                            destination="Ashdod"
                        />
                    </div>
                </div>
            </section>

            {/* Generic Cards Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Generic Card Components</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card with Header</CardTitle>
                                <CardDescription>This is a card description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Card content goes here. You can put any content inside.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-2">Simple Card</h3>
                            <p className="text-sm text-muted-foreground">
                                A simple card with custom padding and content.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Color Palette Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Color Palette</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-primary mb-2"></div>
                            <p className="text-sm font-semibold">Primary</p>
                            <p className="text-xs text-muted-foreground">#EA3B39</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-[#25D366] mb-2"></div>
                            <p className="text-sm font-semibold">WhatsApp</p>
                            <p className="text-xs text-muted-foreground">#25D366</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-foreground mb-2"></div>
                            <p className="text-sm font-semibold">Text</p>
                            <p className="text-xs text-muted-foreground">oklch(0.235...)</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-muted-foreground mb-2"></div>
                            <p className="text-sm font-semibold">Muted</p>
                            <p className="text-xs text-muted-foreground">oklch(0.552...)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Typography Scale</h2>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <div>
                            <h1 className="text-5xl font-bold mb-2">H1 Heading (48px)</h1>
                            <p className="text-sm text-muted-foreground">Font: 48px / Weight: 700 / Line Height: 48px</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-2">H2 Heading (40px)</h2>
                            <p className="text-sm text-muted-foreground">Font: 40px / Weight: 700 / Line Height: 44px</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">H3 Heading (24px)</h3>
                            <p className="text-sm text-muted-foreground">Font: 24px / Weight: 700 / Line Height: 32px</p>
                        </div>
                        <div>
                            <p className="text-base mb-2">Body Text (16px)</p>
                            <p className="text-sm text-muted-foreground">Font: 16px / Weight: 400 / Line Height: 24px</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-foreground text-background">
                <div className="container text-center">
                    <h3 className="text-2xl font-bold mb-4">CargoNex Design System</h3>
                    <p className="text-sm opacity-80 mb-4">
                        Based on UI/UX analysis of cargonex.io
                    </p>
                    <p className="text-xs opacity-60">
                        Version 1.0.0 • Created: 2025-11-21
                    </p>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <WhatsAppButton>
                <MessageCircle className="h-6 w-6" />
            </WhatsAppButton>
        </div>
    );
}
