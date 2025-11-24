import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            מוכן להפוך את היבוא שלך לפשוט וחכם יותר?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            הצטרף לעסקים שכבר חוסכים זמן, כסף וטעויות יקרות עם TradeFlow AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg h-14 px-8"
            >
              התחל התנסות בחינם עכשיו
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>14 יום ניסיון בחינם</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>תמיכה בעברית</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

