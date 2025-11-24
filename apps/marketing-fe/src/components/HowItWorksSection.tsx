import { Upload, Sparkles, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "העלה מסמך",
    description: "גרור או בחר כל מסמך שקשור ליבוא - הצעת מחיר, חשבונית, שטר מטען",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "ה-AI עושה את הקסם",
    description: "המערכת מנתחת את המסמך, מחלצת את הנתונים ומארגנת אותם עבורך תוך שניות",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "קבל שליטה מלאה",
    description: "כל הנתונים זורמים אוטומטית למקומות הנכונים - הזמנות, ספקים, תשלומים וציר זמן",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            מתחילים לעבוד חכם ב-3 צעדים פשוטים
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            תוך דקות ספורות תתחיל לחסוך זמן ולקבל שליטה מלאה על תהליכי היבוא שלך
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 right-0 left-0 h-0.5 bg-gradient-to-l from-primary/20 via-primary to-primary/20 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-background"
                >
                  <CardContent className="pt-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 right-1/2 translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

