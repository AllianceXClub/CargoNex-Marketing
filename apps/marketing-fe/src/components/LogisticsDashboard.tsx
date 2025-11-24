import { TruckIcon, Package, Ship, Plane, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "משלוחים פעילים",
    value: "24",
    subtext: "+3 השבוע",
    icon: Package,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "בדרך לנמל",
    value: "8",
    subtext: "ממוצע 12 ימים",
    icon: Ship,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "הגיעו החודש",
    value: "15",
    subtext: "ממוצע 18 ימים",
    icon: CheckCircle,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

const shipments = [
  {
    id: "CNTR-12345",
    status: "בדרך לנמל",
    origin: "שנחאי, סין",
    destination: "נמל אשדוד",
    etd: "05.06.2024",
    eta: "15.06.2024",
    progress: 75,
    statusColor: "bg-red-100 text-red-700",
    progressColor: "bg-red-500",
    icon: AlertCircle,
    iconColor: "text-red-500",
    transportIcon: Ship,
  },
  {
    id: "CNTR-12346",
    status: "בהכנה",
    origin: "גואנגז'ו, סין",
    destination: "נמל חיפה",
    etd: "18.06.2024",
    eta: "22.06.2024",
    progress: 30,
    statusColor: "bg-orange-100 text-orange-700",
    progressColor: "bg-orange-500",
    icon: Clock,
    iconColor: "text-orange-500",
    transportIcon: Ship,
  },
  {
    id: "AIR-7891",
    status: "טיסה",
    origin: "הונג קונג",
    destination: "נתב\"ג",
    etd: "20.06.2024",
    eta: "21.06.2024",
    progress: 60,
    statusColor: "bg-blue-100 text-blue-700",
    progressColor: "bg-blue-500",
    icon: Plane,
    iconColor: "text-blue-500",
    transportIcon: Plane,
  },
  {
    id: "CNTR-12347",
    status: "הגיע לנמל",
    origin: "שנזן, סין",
    destination: "נמל אשדוד",
    etd: "28.05.2024",
    eta: "05.06.2024",
    progress: 95,
    statusColor: "bg-green-100 text-green-700",
    progressColor: "bg-green-500",
    icon: CheckCircle,
    iconColor: "text-green-500",
    transportIcon: Ship,
  },
];

export default function LogisticsDashboard() {
  return (
    <div className="w-full max-w-2xl">
      <Card className="overflow-hidden border-2 shadow-2xl">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-3 md:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TruckIcon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-bold text-sm md:text-base">מעקב לוגיסטי - משלוחים</span>
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

          {/* Shipments List */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4">משלוחים במעקב</h3>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="space-y-3 md:space-y-4">
                  {shipments.map((shipment, index) => {
                    const StatusIcon = shipment.icon;
                    const TransportIcon = shipment.transportIcon;
                    return (
                      <div key={index} className="border-b border-border pb-3 md:pb-4 last:border-none">
                        <div className="flex justify-between items-start md:items-center mb-2 gap-2">
                          <div className="flex items-start md:items-center gap-2 flex-wrap flex-1 min-w-0">
                            <TransportIcon className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0 mt-0.5 md:mt-0" />
                            <div className="flex flex-col gap-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-sm md:text-base">{shipment.id}</span>
                                <span className={`${shipment.statusColor} px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap`}>
                                  {shipment.status}
                                </span>
                              </div>
                              <div className="text-xs md:text-sm text-muted-foreground">
                                <span className="truncate">{shipment.origin}</span>
                                <span className="mx-1">←</span>
                                <span className="truncate">{shipment.destination}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="text-left hidden md:block">
                              <div className="text-xs text-muted-foreground">ETD / ETA</div>
                              <div className="font-medium text-sm whitespace-nowrap">{shipment.etd} - {shipment.eta}</div>
                            </div>
                            <StatusIcon className={`h-4 w-4 md:h-5 md:w-5 ${shipment.iconColor}`} />
                          </div>
                        </div>
                        <div className="w-full h-1 md:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${shipment.progressColor} transition-all duration-500`}
                            style={{ width: `${shipment.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 md:hidden">
                          ETD: {shipment.etd} | ETA: {shipment.eta}
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

