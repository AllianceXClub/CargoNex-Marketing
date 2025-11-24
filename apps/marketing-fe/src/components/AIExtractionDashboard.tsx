import { Sparkles, FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "מסמכים היום",
    value: "47",
    subtext: "+23% מאתמול",
    icon: FileText,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    label: "זמן עיבוד ממוצע",
    value: "2.3s",
    subtext: "שיפור של 40%",
    icon: Clock,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "דיוק ממוצע",
    value: "98.7%",
    subtext: "מבוסס על 1000+ מסמכים",
    icon: CheckCircle2,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

const documents = [
  {
    id: "INV-2024-1234",
    type: "חשבונית",
    supplier: "Tech Imports Ltd",
    status: "הושלם",
    processingTime: "1.8s",
    accuracy: "99.2%",
    statusColor: "bg-green-100 text-green-700",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  {
    id: "BL-2024-5678",
    type: "שטר מטען",
    supplier: "Global Logistics",
    status: "בעיבוד",
    processingTime: "2.1s",
    accuracy: "97.8%",
    statusColor: "bg-blue-100 text-blue-700",
    icon: Clock,
    iconColor: "text-blue-500",
  },
  {
    id: "PO-2024-9012",
    type: "הצעת מחיר",
    supplier: "Eastern Electronics",
    status: "הושלם",
    processingTime: "2.5s",
    accuracy: "98.5%",
    statusColor: "bg-green-100 text-green-700",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  {
    id: "INV-2024-3456",
    type: "חשבונית",
    supplier: "Asia Trading Co",
    status: "דורש בדיקה",
    processingTime: "3.2s",
    accuracy: "92.1%",
    statusColor: "bg-orange-100 text-orange-700",
    icon: AlertCircle,
    iconColor: "text-orange-500",
  },
];

export default function AIExtractionDashboard() {
  return (
    <div className="w-full max-w-2xl">
      <Card className="overflow-hidden border-2 shadow-2xl">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-3 md:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-bold text-sm md:text-base">מנוע AI - עיבוד מסמכים</span>
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

          {/* Documents List */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4">מסמכים אחרונים שעובדו</h3>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="space-y-3 md:space-y-4">
                  {documents.map((doc, index) => {
                    const Icon = doc.icon;
                    return (
                      <div key={index} className="border-b border-border pb-3 md:pb-4 last:border-none">
                        <div className="flex justify-between items-start md:items-center gap-2 mb-2">
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-sm md:text-base">{doc.id}</span>
                              <span className={`${doc.statusColor} px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap`}>
                                {doc.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground flex-wrap">
                              <span>{doc.type}</span>
                              <span>•</span>
                              <span className="truncate">{doc.supplier}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="text-left hidden md:block">
                              <div className="text-xs text-muted-foreground">זמן עיבוד</div>
                              <div className="font-medium text-sm">{doc.processingTime}</div>
                            </div>
                            <div className="text-left">
                              <div className="text-xs text-muted-foreground">דיוק</div>
                              <div className="font-bold text-sm md:text-base">{doc.accuracy}</div>
                            </div>
                            <Icon className={`h-4 w-4 md:h-5 md:w-5 ${doc.iconColor}`} />
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

