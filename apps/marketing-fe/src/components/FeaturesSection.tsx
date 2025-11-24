import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, Tab } from "@heroui/react";
import { Sparkles, TruckIcon, DollarSign, LayoutDashboard, CreditCard } from "lucide-react";
import AdvancedDashboard from "@/components/AdvancedDashboard";
import AIExtractionDashboard from "@/components/AIExtractionDashboard";
import LogisticsDashboard from "@/components/LogisticsDashboard";
import CostsDashboard from "@/components/CostsDashboard";
import PaymentsDashboard from "@/components/PaymentsDashboard";

const features = [
  {
    id: "ai-extraction",
    icon: Sparkles,
    title: "חילוץ נתונים AI",
    shortTitle: "מנוע AI",
    description: "העלה כל מסמך - חשבונית, שטר מטען, הצעת מחיר - והמערכת תחלץ את כל הנתונים אוטומטית תוך שניות.",
    benefits: [
      "חיסכון של עד 80% בזמן עבודה",
      "אפס טעויות הקלדה",
      "תומך בכל סוגי המסמכים",
      "עיבוד מיידי תוך שניות",
    ],
    image: "/features-preview.png",
  },
  {
    id: "logistics",
    icon: TruckIcon,
    title: "מעקב לוגיסטי חכם",
    shortTitle: "לוגיסטיקה",
    description: "ציר זמן ויזואלי לכל משלוח. המערכת מעדכנת אוטומטית את תאריכי היציאה וההגעה על בסיס המסמכים.",
    benefits: [
      "שקיפות מלאה על כל משלוח",
      "עדכונים אוטומטיים של ETA/ETD",
      "התראות על עיכובים",
      "ציר זמן ויזואלי ברור",
    ],
    image: "/dashboard-preview.png",
  },
  {
    id: "landed-cost",
    icon: DollarSign,
    title: "חישוב Landed Cost אוטומטי",
    shortTitle: "עלויות",
    description: "המערכת מחשבת אוטומטית את העלות הכוללת של כל פריט עד הגעתו למחסן, כולל כל העלויות הנלוות.",
    benefits: [
      "חישוב מדויק של עלות סופית",
      "הבנת רווחיות אמיתית",
      "תמחור נכון של מוצרים",
      "ניתוח עלויות מפורט",
    ],
    image: "/features-preview.png",
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "לוח בקרה מקיף",
    shortTitle: "דשבורד",
    description: "מבט-על על כל העסק. כרטיסי סיכום מציגים בזמן אמת את ההזמנות, המשלוחים והתשלומים.",
    benefits: [
      "תמונת מצב בזמן אמת",
      "גרפים ומגמות עסקיות",
      "קבלת החלטות מבוססת נתונים",
      "ממשק אינטואיטיבי וברור",
    ],
    image: "/dashboard-preview.png",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "ניהול תשלומים",
    shortTitle: "תשלומים",
    description: "מעקב אחר כל התשלומים. המערכת מציגה את היתרה לתשלום ומחשבת את סטטוס התשלום.",
    benefits: [
      "שליטה על תזרים מזומנים",
      "מניעת תשלומי כפל",
      "תכנון תשלומים עתידיים",
      "דוחות תשלומים מפורטים",
    ],
    image: "/features-preview.png",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const activeFeature = features.find((f) => f.id === activeTab) || features[0];
  const Icon = activeFeature.icon;

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            הפונקציות המרכזיות שיהפכו את הכאוס לסדר
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TradeFlow AI מקבלת את כל הבעיות שזיהינו, ופותרת אותן באמצעות טכנולוגיה מתקדמת וניתוח חכם
          </p>
        </div>

        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
          dir="rtl"
          classNames={{
            base: "w-full",
            tabList: "flex h-fit items-center justify-center flex-nowrap overflow-x-scroll scrollbar-hide bg-transparent gap-4 md:gap-6 w-full relative rounded-none p-0 border-b border-border/40",
            tab: "max-w-fit px-3 md:px-4 h-12 text-sm md:text-md data-[selected=true]:bg-primary",
            cursor: "hidden",
            tabContent: "group-data-[selected=true]:text-white text-muted-foreground transition-colors",
          }}
        >
          {features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <Tab
                key={feature.id}
                value={feature.id}
                title={
                  <div className="flex items-center gap-2">
                    <FeatureIcon className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="hidden md:block">{feature.shortTitle}</span>
                  </div>
                }
              >
                <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_1fr] items-center mt-8">
                  {/* Text Content - Right side (RTL) */}
                  <div className="space-y-4 md:space-y-6 order-2 lg:order-1 flex flex-col justify-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <p className="text-foreground">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard Component - Left side (RTL) */}
                  <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    {feature.id === "ai-extraction" && <AIExtractionDashboard />}
                    {feature.id === "logistics" && <LogisticsDashboard />}
                    {feature.id === "landed-cost" && <CostsDashboard />}
                    {feature.id === "dashboard" && <AdvancedDashboard />}
                    {feature.id === "payments" && <PaymentsDashboard />}
                  </div>
                </div>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

