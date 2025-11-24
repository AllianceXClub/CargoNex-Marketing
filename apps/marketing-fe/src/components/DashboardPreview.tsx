import { Users, CreditCard, Package, ShoppingCart, TrendingUp, AlertCircle, Bell, Settings, LayoutDashboard, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "ספקים פעילים",
    value: "16",
    subtext: "+2 חודשים",
    icon: Users,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "תשלומים קרובים",
    value: "₪42,500",
    subtext: "החודש הבא",
    icon: CreditCard,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "משלוחים בדרך",
    value: "8",
    subtext: "3 השבוע",
    icon: Package,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "הזמנות פעילות",
    value: "24",
    subtext: "+12%",
    icon: ShoppingCart,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    trend: true,
  },
];

const shipments = [
  {
    id: "CNTR-12345",
    status: "בדרך",
    eta: "15.06.2024",
    progress: 75,
    statusColor: "bg-red-100 text-red-700",
    progressColor: "bg-red-500",
    icon: AlertCircle,
    iconColor: "text-red-500",
  },
  {
    id: "CNTR-12346",
    status: "בהכנה",
    eta: "22.06.2024",
    progress: 30,
    statusColor: "bg-orange-100 text-orange-700",
    progressColor: "bg-orange-500",
    icon: AlertCircle,
    iconColor: "text-orange-500",
  },
];

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="overflow-hidden border-2 shadow-2xl">
        {/* Header - Changed to brand pink/red color */}
        <div className="bg-primary text-primary-foreground p-3 md:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-bold text-sm md:text-base lg:text-lg">TRADE FLOW לוח בקרה</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Bell className="h-3 w-3 md:h-4 md:w-4" />
            </button>
            <button className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Settings className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        </div>

        <CardContent className="p-3 md:p-4 lg:p-6">
          {/* Stats Grid - Improved mobile responsiveness */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-2 md:p-3">
                    <div className="flex justify-between items-start gap-1 mb-1 md:mb-2">
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-[10px] md:text-xs text-muted-foreground mb-0.5 md:mb-1 truncate">
                          {stat.label}
                        </span>
                        <span className="text-base md:text-xl lg:text-2xl font-bold truncate">
                          {stat.value}
                        </span>
                      </div>
                      <div className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 ${stat.bgColor} rounded-full flex items-center justify-center shrink-0`}>
                        <Icon className={`h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 ${stat.iconColor}`} />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {stat.trend && (
                        <span className="text-[10px] md:text-xs text-green-600 flex items-center gap-0.5">
                          <TrendingUp className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        </span>
                      )}
                      <span className="text-[10px] md:text-xs text-muted-foreground truncate">
                        {stat.subtext}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Shipments Section */}
          <div>
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h3 className="font-bold text-sm md:text-base lg:text-lg">משלוחים במעקב</h3>
              <button className="text-primary text-xs md:text-sm font-medium hover:underline flex items-center gap-1">
                <span>הצג הכל</span>
                <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>

            {/* Shipment List */}
            <div className="space-y-3 md:space-y-4">
              {shipments.map((shipment, index) => {
                const Icon = shipment.icon;
                return (
                  <div key={index} className="border-b border-border pb-3 md:pb-4 last:border-none">
                    <div className="flex justify-between items-start md:items-center mb-2 gap-2">
                      <div className="flex items-start md:items-center gap-2 flex-wrap flex-1 min-w-0">
                        <span className={`${shipment.statusColor} px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap`}>
                          {shipment.status}
                        </span>
                        <span className="text-[10px] md:text-xs text-muted-foreground truncate">
                          הגעה משוערת: {shipment.eta}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                        <span className="font-medium text-xs md:text-sm">{shipment.id}</span>
                        <Icon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${shipment.iconColor}`} />
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1 md:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${shipment.progressColor} transition-all duration-500`}
                        style={{ width: `${shipment.progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

