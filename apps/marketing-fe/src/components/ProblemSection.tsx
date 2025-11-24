import { Clock, AlertTriangle, CloudOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "בזבוז זמן עצום",
    description: "שעות של הקלדה ידנית של נתונים ממסמכים למערכות ומעקב אחר מיילים אינסופיים",
  },
  {
    icon: AlertTriangle,
    title: "טעויות יקרות",
    description: "טעות אחת בהקלדת סכום או תאריך עלולה לעלות אלפי שקלים ולגרום לעיכובים",
  },
  {
    icon: CloudOff,
    title: "חוסר שליטה ונראות",
    description: "קשה לדעת איפה כל משלוח נמצא, מה ה-ETA המעודכן ומה העלות האמיתית",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            ניהול יבוא מרגיש כמו כאוס?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            נתונים מפוזרים בין מיילים, טעויות יקרות וחוסר שליטה מוחלט. אנחנו מכירים את זה.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
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

