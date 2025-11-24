import { Grid3x3, Clock, CheckCircle, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Grid3x3,
    title: "מערכת אחת במקום אינספור קבצי אקסל",
    description:
      "כל המידע – הצעות מחיר, הזמנות, משלוחים – מרוכז בלוח בקרה אחד עם שליפה נתונים מהירה ומדויקת.",
  },
  {
    icon: Clock,
    title: "קיצור זמן עבודה ב-2/3",
    description:
      "אין יותר הקלדת ידנית מייגעת. המערכת שולפת את כל הנתונים מהמסמכים ישירות להזמנה או לדוח – בלחיצת כפתור.",
  },
  {
    icon: CheckCircle,
    title: "דיוק וניהול סיכונים",
    description:
      "כל מסמך (PDF, תמונה, שטר מטען, חשבונית) הופך למידע דיגיטלי אמין. פחות טעויות אנוש, יותר שקיפות ובקרה.",
  },
  {
    icon: Lightbulb,
    title: "קבלת החלטות מהירה",
    description:
      "דוחות ניפוים והתראות הכנות ועוזרים לך לעשות מלאה בזמן אמת על כל תהליך היבוא.",
  },
];

export default function BusinessBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            היתרונות העסקיים
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            TRADE FLOW מביאה לך חיסכון בזמן ובעלויות, שקיפות מלאה בתהליכי היבוא, ויכולת לקבל
            החלטות מהירה ומבוססת נתונים.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold leading-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

