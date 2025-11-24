import { DollarSign, Package, ShoppingCart, TrendingDown, TrendingUp, AlertCircle, CheckCircle, Bell, Settings, LayoutDashboard, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "תשלומים החודש",
    value: "$42,500",
    subtext: "8% החודש שעבר",
    icon: DollarSign,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    trend: "down",
  },
  {
    label: "משלוחים בדרך",
    value: "8",
    subtext: "3 צפויים השבוע",
    icon: Package,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "הזמנות פעילות",
    value: "24",
    subtext: "12% החודש שעבר",
    icon: ShoppingCart,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    trend: "up",
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
  {
    id: "CNTR-12347",
    status: "הגיע לנמל",
    eta: "05.06.2024",
    progress: 90,
    statusColor: "bg-green-100 text-green-700",
    progressColor: "bg-green-500",
    icon: CheckCircle,
    iconColor: "text-green-500",
  },
];

const orders = [
  {
    id: "PO-2024-056",
    date: "01.06.2024",
    supplier: "Tech Imports Ltd",
    amount: "$12,450",
  },
  {
    id: "PO-2024-055",
    date: "28.05.2024",
    supplier: "Global Supplies Co",
    amount: "$8,320",
  },
  {
    id: "PO-2024-054",
    date: "25.05.2024",
    supplier: "Eastern Electronics",
    amount: "$15,780",
  },
];

export default function AdvancedDashboard() {
  return (
    <div className="w-full max-w-2xl">
      <Card className="overflow-hidden border-2 shadow-2xl">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-3 md:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-bold text-sm md:text-base">TRADE FLOW לוח בקרה</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Bell className="h-3 w-3 md:h-4 md:w-4" />
            </button>
            <button className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Settings className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        </div>

        <CardContent className="p-3 md:p-4 lg:p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-xs text-muted-foreground mb-1">{stat.label}</span>
                        <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                      </div>
                      <div className={`w-9 h-9 md:w-10 md:h-10 ${stat.bgColor} rounded-full flex items-center justify-center shrink-0`}>
                        <Icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.iconColor}`} />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {stat.trend === "up" && (
                        <span className="text-xs text-green-600 flex items-center gap-0.5">
                          <TrendingUp className="h-3 w-3" />
                          {stat.subtext}
                        </span>
                      )}
                      {stat.trend === "down" && (
                        <span className="text-xs text-red-600 flex items-center gap-0.5">
                          <TrendingDown className="h-3 w-3" />
                          {stat.subtext}
                        </span>
                      )}
                      {!stat.trend && (
                        <span className="text-xs text-muted-foreground">{stat.subtext}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Shipments Section */}
          <div className="mb-4 md:mb-6">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h3 className="font-bold text-sm md:text-base lg:text-lg">משלוחים קרובים</h3>
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4">
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
                            <span className="text-[10px] md:text-xs text-muted-foreground">
                              הגעה משוערת: {shipment.eta}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                            <span className="font-medium text-xs md:text-sm">{shipment.id}</span>
                            <Icon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${shipment.iconColor}`} />
                          </div>
                        </div>
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
              </CardContent>
            </Card>
          </div>

          {/* Orders Section */}
          <div>
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h3 className="font-bold text-sm md:text-base lg:text-lg">הזמנות אחרונות</h3>
              <button className="text-primary text-xs md:text-sm font-medium hover:underline flex items-center gap-1">
                <span>הצג הכל</span>
                <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="space-y-3 md:space-y-4">
                  {orders.map((order, index) => (
                    <div key={index} className="border-b border-border pb-3 md:pb-4 last:border-none">
                      <div className="flex justify-between items-center gap-4">
                        <div className="min-w-0">
                          <div className="font-medium text-sm md:text-base">{order.id}</div>
                          <div className="text-[10px] md:text-xs text-muted-foreground">{order.date}</div>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="text-muted-foreground text-xs md:text-sm truncate">
                            ספק: {order.supplier}
                          </div>
                          <div className="font-bold text-sm md:text-base">{order.amount}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

