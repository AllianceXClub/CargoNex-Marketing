import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Share2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AiImportGuide2026() {

    // Update page title and meta tags for SEO
    useEffect(() => {
        document.title = "כיצד יבואנים בישראל צריכים להיערך ל-2026 | מדריך AI לניהול יבוא | CargoNex";
        // Note: In a real app with SSR, these would be set on the server. 
        // For client-side, we can only update the document title easily.
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <article className="flex-1">
                {/* Hero Section */}
                <div className="relative bg-muted/30 py-12 md:py-20">
                    <div className="container max-w-4xl">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Link href="/blog" className="hover:text-primary flex items-center gap-1">
                                    <ArrowRight className="h-3 w-3" />
                                    חזרה לבלוג
                                </Link>
                                <span>•</span>
                                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                                    מדריכים
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                                כיצד יבואנים בישראל צריכים להיערך ל-2026: מדריך לשילוב AI בניהול יבוא
                            </h1>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    17 בנובמבר 2025
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    8 דקות קריאה
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container max-w-3xl py-12">
                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="יבואנים ישראלים מתכננים אסטרטגיית יבוא 2026 עם טכנולוגיית AI"
                            className="w-full rounded-xl shadow-lg mb-8"
                        />

                        <p className="lead text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                            שנת 2026 מסתמנת כשנת מפנה עבור ענף היבוא בישראל. שילוב של אתגרים גיאופוליטיים, שינויים רגולטוריים ותחרות גוברת מחייב את היבואנים לאמץ גישות חדשניות כדי לשמור על רווחיות ויעילות. במרכז המהפכה הזו עומדת הבינה המלאכותית (AI), שכבר אינה בגדר מושג עתידני אלא כלי מעשי וחיוני לשיפור כל היבט של שרשרת האספקה.
                        </p>

                        <Separator className="my-8" />

                        <h2>נוף היבוא המשתנה: אתגרים והזדמנויות לשנת 2026</h2>
                        <p>
                            מספר מגמות מפתח מעצבות מחדש את עולם השילוח והיבוא לישראל. ראשית, המצב הביטחוני בים סוף והאיומים במצרי באב אל מנדב מאלצים חברות ספנות להסיט מסלולים, מה שמוביל להתארכות זמני ההפלגה בכ-12 עד 17 ימים ולעלייה של 10% עד 25% בעלויות ההובלה הימית.
                        </p>
                        <p>
                            שנית, הרגולציה הסביבתית האירופית (CBAM), שתיכנס לתוקף מלא ב-2026, תחייב יבואנים לספק הוכחות על פליטת פחמן מופחתת, מה שעלול לייקר סחורות ולעכב שחרור ממכס. לבסוף, הדיגיטציה המואצת של הענף יוצרת פער בין חברות המאמצות טכנולוגיות מתקדמות לבין אלו שנותרות מאחור.
                        </p>

                        <div className="my-8 overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-muted">
                                        <th className="border p-3 text-right">מגמה</th>
                                        <th className="border p-3 text-right">השפעה על זמני הובלה</th>
                                        <th className="border p-3 text-right">השפעה על עלות היבוא</th>
                                        <th className="border p-3 text-right">השלכות לוגיסטיות</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3 font-medium">חסימות ים סוף</td>
                                        <td className="border p-3">תוספת של 12–17 ימים</td>
                                        <td className="border p-3">עלייה של 10%–25%</td>
                                        <td className="border p-3">שינוי מסלולים ואי-ודאות</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">רגולציית CBAM</td>
                                        <td className="border p-3">עיכובים אפשריים במכס</td>
                                        <td className="border p-3">היטלים וקנסות פוטנציאליים</td>
                                        <td className="border p-3">דרישה לשקיפות ואישורים</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">דיגיטציה מואצת</td>
                                        <td className="border p-3">קיצור של עד 48 שעות</td>
                                        <td className="border p-3">חיסכון עקיף בעלויות</td>
                                        <td className="border p-3">צורך בהטמעת מערכות</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-xs text-muted-foreground mt-2 text-center">*מקור: נתונים מעובדים מתוך תחזית שילוח 2026 של United XP</p>
                        </div>

                        <h2>מהפכת הבינה המלאכותית בשרשרת האספקה</h2>
                        <p>
                            בתוך מציאות מורכבת זו, בינה מלאכותית מציעה פתרונות רבי עוצמה. מחקרים עדכניים מראים כי חברות המאמצות AI בניהול שרשרת האספקה משיגות שיפור של 15% בעלויות לוגיסטיקה, הפחתה של 35% ברמות המלאי ושיפור של 65% ברמות השירות.
                        </p>
                        <p>
                            AI אינה עוד כלי לניתוח נתונים בלבד, אלא מערכת המסוגלת לבצע פעולות באופן אוטונומי, ללמוד ולהשתפר. המעבר הוא ממערכות חיזוי (Predictive) למערכות אוטונומיות (Autonomous) שמנהלות תהליכים מקצה לקצה – בדיוק הטכנולוגיה שעומדת בבסיס <strong>CargoNex</strong>.
                        </p>

                        <h2>יישומי AI מעשיים ליבואנים בישראל עם CargoNex</h2>
                        <p>כיצד יכול יבואן ישראלי לרתום את כוחה של הבינה המלאכותית? הנה מספר דוגמאות:</p>

                        <div className="grid gap-6 my-8 not-prose">
                            <div className="bg-card border rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-primary/10 p-1.5 rounded-md text-primary"><CheckCircle2 className="h-5 w-5" /></span>
                                    1. חיזוי ביקוש וניהול מלאי
                                </h3>
                                <p className="text-muted-foreground">
                                    מערכות AI מנתחות נתוני מכירות, מגמות שוק וחגים כדי לספק תחזיות מדויקות. זה מאפשר להפחית מלאי ב-10%-20% תוך הגדלת ההכנסות, ולמנוע חוסרים או עודפים יקרים.
                                </p>
                            </div>

                            <div className="bg-card border rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-primary/10 p-1.5 rounded-md text-primary"><CheckCircle2 className="h-5 w-5" /></span>
                                    2. אוטומציה של מכס
                                </h3>
                                <p className="text-muted-foreground">
                                    מנוע ה-AI קורא ומאמת מסמכים, מסווג מוצרים (HS Code) ומחשב מסים באופן אוטומטי. התוצאה: הפחתה של עד 60% בזמן השחרור וצמצום קנסות.
                                </p>
                            </div>

                            <div className="bg-card border rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-primary/10 p-1.5 rounded-md text-primary"><CheckCircle2 className="h-5 w-5" /></span>
                                    3. אופטימיזציה דינמית של שילוח
                                </h3>
                                <p className="text-muted-foreground">
                                    ניטור בזמן אמת של שרשרת האספקה לזיהוי עיכובים וחישוב מסלולים מחדש. המערכת בוחרת את הספק המשתלם ביותר לכל משלוח באופן אוטומטי.
                                </p>
                            </div>
                        </div>

                        <h2>כיצד מתחילים? תוכנית פעולה לשנת 2026</h2>
                        <ol>
                            <li>
                                <strong>יצירת תשתית נתונים:</strong> הצעד הראשון הוא ריכוז הנתונים העסקיים. פלטפורמה כמו CargoNex עושה זאת אוטומטית על ידי חילוץ נתונים ממסמכים.
                            </li>
                            <li>
                                <strong>התחלה קטנה עם פיילוט:</strong> בחרו תהליך ספציפי וכאוב (כמו עיבוד חשבוניות) והתחילו שם. הצלחה בפרויקט קטן תקל על ההרחבה.
                            </li>
                            <li>
                                <strong>השקעה בהון האנושי:</strong> הכשירו את העובדים לעבוד עם הכלים החדשים ולקבל החלטות מבוססות נתונים.
                            </li>
                        </ol>

                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 my-10 text-center">
                            <h3 className="text-2xl font-bold mb-4">מוכנים להפוך את היבוא שלכם לחכם יותר?</h3>
                            <p className="mb-6 text-lg text-muted-foreground">
                                התחילו התנסות בחינם ב-CargoNex עוד היום ותראו איך בינה מלאכותית יכולה לחסוך לכם זמן, כסף וטעויות יקרות.
                            </p>
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                                התחל התנסות בחינם
                            </Button>
                        </div>

                        <h2>שאלות ותשובות נפוצות (FAQ)</h2>
                        <Accordion type="single" collapsible className="w-full not-prose">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>מהו היתרון המרכזי של שימוש ב-AI לניהול יבוא?</AccordionTrigger>
                                <AccordionContent>
                                    היתרון המרכזי הוא אוטומציה וחיסכון בזמן. AI יכול לבצע משימות שגרתיות כמו עיבוד מסמכים ומעקב משלוחים באופן אוטומטי, מה שמאפשר לעובדים להתמקד במשימות אסטרטגיות יותר ומפחית טעויות אנוש יקרות.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>האם הטמעת מערכת AI היא תהליך מסובך?</AccordionTrigger>
                                <AccordionContent>
                                    לא בהכרח. פלטפורמות מודרניות כמו CargoNex מתוכננות להיות ידידותיות למשתמש. ניתן להתחיל בקטן, עם תהליך אחד, ולהתרחב בהדרגה.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>כיצד AI מסייע בהתמודדות עם שיבושים בשרשרת האספקה?</AccordionTrigger>
                                <AccordionContent>
                                    AI מספק נראות בזמן אמת ויכולות חיזוי. הוא יכול לזהות עיכובים פוטנציאליים מוקדם, להציע מסלולים חלופיים, ולספק הערכות הגעה (ETA) מדויקות יותר.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
