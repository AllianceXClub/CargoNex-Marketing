import { Button } from "@/components/ui/button";
import { APP_TITLE } from "@/const";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Right side (RTL) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">TF</span>
            </div>
            <span className="text-xl" style={{ color: '#0d0d0d', fontFamily: 'Poppins', fontWeight: 400 }}>
              TradeFlow
            </span>
          </div>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            תכונות
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            איך זה עובד
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            תמחור
          </a>
          <a
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            צור קשר
          </a>
          <a
            href="/dashboard"
            className="text-sm font-medium text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live Ops
          </a>
        </nav>

        {/* CTA Buttons - Left side (RTL) */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            התחבר
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            התנסות בחינם
          </Button>
        </div>
      </div>
    </header>
  );
}

