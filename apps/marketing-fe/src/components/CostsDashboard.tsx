import { DollarSign, TrendingDown, TrendingUp, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "עלות ממוצעת",
    value: "$8,450",
    subtext: "לכל הזמנה",
    icon: DollarSign,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "חיסכון החודש",
    value: "$12,300",
    subtext: "בהשוואה לחודש שעבר",
    icon: TrendingDown,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    label: "פריטים פעילים",
    value: "156",
    subtext: "בחישוב עלויות",
    icon: Package,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const orders = [
  {
    id: "PO-2024-056",
    product: "מחשבים ניידים - Dell Latitude",
    quantity: 50,
    productCost: "$25,000",
    shipping: "$1,200",
    customs: "$3,500",
    vat: "$5,019",
    landedCost: "$34,719",
    unitCost: "$694.38",
    profit: "+15%",
    profitColor: "text-green-600",
  },
  {
    id: "PO-2024-055",
    product: "אוזניות Bluetooth",
    quantity: 200,
    productCost: "$4,000",
    shipping: "$450",
    customs: "$580",
    vat: "$855",
    landedCost: "$5,885",
    unitCost: "$29.43",
    profit: "+22%",
    profitColor: "text-green-600",
  },
  {
    id: "PO-2024-054",
    product: "מסכים 27 אינץ'",
    quantity: 30,
    productCost: "$6,000",
    shipping: "$800",
    customs: "$950",
    vat: "$1,327",
    landedCost: "$9,077",
    unitCost: "$302.57",
    profit: "+8%",
    profitColor: "text-orange-600",
  },
];

export default function CostsDashboard() {
  return (
    <div className="w-full max-w-2xl">
      <Card className="overflow-hidden border-2 shadow-2xl">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-3 md:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-bold text-sm md:text-base">חישוב Landed Cost</span>
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
                    <span className="text-xs text-muted-foreground">{stat.subtext}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Orders Cost Breakdown */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4">פירוט עלויות הזמנות</h3>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="space-y-4 md:space-y-6">
                  {orders.map((order, index) => (
                    <div key={index} className="border-b border-border pb-4 md:pb-6 last:border-none">
                      {/* Order Header */}
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm md:text-base mb-1">{order.id}</div>
                          <div className="text-xs md:text-sm text-muted-foreground truncate">
                            {order.product} ({order.quantity} יח')
                          </div>
                        </div>
                        <div className="text-left shrink-0">
                          <div className="text-xs text-muted-foreground">רווחיות</div>
                          <div className={`font-bold text-sm md:text-base ${order.profitColor}`}>
                            {order.profit}
                          </div>
                        </div>
                      </div>

                      {/* Cost Breakdown Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-3">
                        <div className="bg-gray-50 p-2 rounded">
                          <div className="text-[10px] md:text-xs text-muted-foreground mb-0.5">מחיר מוצר</div>
                          <div className="font-medium text-xs md:text-sm">{order.productCost}</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <div className="text-[10px] md:text-xs text-muted-foreground mb-0.5">משלוח</div>
                          <div className="font-medium text-xs md:text-sm">{order.shipping}</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <div className="text-[10px] md:text-xs text-muted-foreground mb-0.5">מכס</div>
                          <div className="font-medium text-xs md:text-sm">{order.customs}</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <div className="text-[10px] md:text-xs text-muted-foreground mb-0.5">מע"ם</div>
                          <div className="font-medium text-xs md:text-sm">{order.vat}</div>
                        </div>
                        <div className="bg-primary/10 p-2 rounded col-span-2 md:col-span-1">
                          <div className="text-[10px] md:text-xs text-primary mb-0.5">עלות סופית</div>
                          <div className="font-bold text-xs md:text-sm text-primary">{order.landedCost}</div>
                        </div>
                      </div>

                      {/* Unit Cost */}
                      <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                        <span className="text-xs md:text-sm font-medium">עלות ליחידה:</span>
                        <span className="text-sm md:text-base font-bold text-blue-600">{order.unitCost}</span>
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

