import { CreditCard, DollarSign, AlertTriangle, CheckCircle2, Clock, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "תשלומים החודש",
    value: "$42,500",
    subtext: "8 תשלומים",
    icon: DollarSign,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "יתרה לתשלום",
    value: "$28,300",
    subtext: "5 תשלומים ממתינים",
    icon: Clock,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "באיחור",
    value: "$5,200",
    subtext: "2 תשלומים",
    icon: AlertTriangle,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
];

const payments = [
  {
    id: "PAY-2024-1234",
    supplier: "Tech Imports Ltd",
    invoice: "INV-2024-056",
    amount: "$12,450",
    dueDate: "25.06.2024",
    status: "ממתין",
    daysLeft: 5,
    statusColor: "bg-orange-100 text-orange-700",
    icon: Clock,
    iconColor: "text-orange-500",
  },
  {
    id: "PAY-2024-1233",
    supplier: "Global Supplies Co",
    invoice: "INV-2024-055",
    amount: "$8,320",
    dueDate: "15.06.2024",
    status: "באיחור",
    daysLeft: -5,
    statusColor: "bg-red-100 text-red-700",
    icon: XCircle,
    iconColor: "text-red-500",
  },
  {
    id: "PAY-2024-1232",
    supplier: "Eastern Electronics",
    invoice: "INV-2024-054",
    amount: "$15,780",
    dueDate: "10.06.2024",
    status: "שולם",
    daysLeft: 0,
    statusColor: "bg-green-100 text-green-700",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  {
    id: "PAY-2024-1231",
    supplier: "Asia Trading Co",
    invoice: "INV-2024-053",
    amount: "$9,650",
    dueDate: "30.06.2024",
    status: "ממתין",
    daysLeft: 10,
    statusColor: "bg-blue-100 text-blue-700",
    icon: Clock,
    iconColor: "text-blue-500",
  },
  {
    id: "PAY-2024-1230",
    supplier: "Import Solutions Ltd",
    invoice: "INV-2024-052",
    amount: "$6,890",
    dueDate: "05.06.2024",
    status: "שולם",
    daysLeft: 0,
    statusColor: "bg-green-100 text-green-700",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
];

export default function PaymentsDashboard() {
  return (
    <div className="w-full max-w-2xl">
      <Card className="overflow-hidden border-2 shadow-2xl">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-3 md:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-bold text-sm md:text-base">ניהול תשלומים</span>
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

          {/* Payments List */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4">תשלומים קרובים</h3>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="space-y-3 md:space-y-4">
                  {payments.map((payment, index) => {
                    const Icon = payment.icon;
                    return (
                      <div key={index} className="border-b border-border pb-3 md:pb-4 last:border-none">
                        <div className="flex justify-between items-start md:items-center gap-2 mb-2">
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-sm md:text-base">{payment.id}</span>
                              <span className={`${payment.statusColor} px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap`}>
                                {payment.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                              <span className="truncate">{payment.supplier}</span>
                              <span>•</span>
                              <span>{payment.invoice}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="text-left">
                              <div className="text-xs text-muted-foreground">תאריך פירעון</div>
                              <div className="font-medium text-sm whitespace-nowrap">{payment.dueDate}</div>
                              {payment.daysLeft > 0 && (
                                <div className="text-xs text-blue-600">עוד {payment.daysLeft} ימים</div>
                              )}
                              {payment.daysLeft < 0 && (
                                <div className="text-xs text-red-600">איחור {Math.abs(payment.daysLeft)} ימים</div>
                              )}
                            </div>
                            <div className="text-left">
                              <div className="text-xs text-muted-foreground">סכום</div>
                              <div className="font-bold text-sm md:text-base">{payment.amount}</div>
                            </div>
                            <Icon className={`h-4 w-4 md:h-5 md:w-5 ${payment.iconColor}`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

