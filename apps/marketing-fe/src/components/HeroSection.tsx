import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import TypingAnimation from "@/components/TypingAnimation";
import RealTimeTracking from "@/components/RealTimeTracking";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content - Right side (RTL) */}
          <div className="flex flex-col gap-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border bg-background px-4 py-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-muted-foreground">פלטפורמת ניהול יבוא מבוססת AI</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">CargoNex</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
                <TypingAnimation />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0">
              נהל את כל שרשרת היבוא שלך במקום אחד, בקלות ובאמצעות בינה מלאכותית.
              הפסיקו לבזבז שעות על עבודה ידנית - המערכת החכמה שלנו ממכנת את התהליכים ומעניקה לך שליטה מלאה.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-12 px-8">
                התחל התנסות בחינם
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-12 px-8">
                <Play className="ml-2 h-5 w-5" />
                צפה בדמו
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ללא צורך בכרטיס אשראי • ניסיון 14 יום בחינם • תמיכה במגוון שפות
            </p>
          </div>

          {/* Dashboard Preview - Left side (RTL) */}
          {/* Video Animation - Left side (RTL) */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
                poster="/placeholder-video.jpg"
              >
                <source src="/shipping-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Gradient for better text readability if needed, or just aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Real-Time Container Tracking Section */}
            <div className="mt-8">
              <RealTimeTracking />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-primary/5 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

