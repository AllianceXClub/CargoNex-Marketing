import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Activity,
    Globe,
    Cpu,
    Zap,
    AlertCircle,
    CheckCircle2,
    TrendingUp,
    Ship,
    Truck,
    Plane
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

// Mock Data for Charts (keeping this for visual flair as we don't have historical metrics yet)
const performanceData = [
    { time: '08:00', efficiency: 65, tasks: 120 },
    { time: '09:00', efficiency: 72, tasks: 145 },
    { time: '10:00', efficiency: 85, tasks: 180 },
    { time: '11:00', efficiency: 82, tasks: 190 },
    { time: '12:00', efficiency: 90, tasks: 210 },
    { time: '13:00', efficiency: 88, tasks: 195 },
    { time: '14:00', efficiency: 94, tasks: 230 },
];

export default function AgentDashboard() {
    const [logs, setLogs] = useState<any[]>([]);
    const [activeCampaigns, setActiveCampaigns] = useState(0);
    const [completedCampaigns, setCompletedCampaigns] = useState(0);

    useEffect(() => {
        // Listen to the last 10 campaigns
        const q = query(collection(db, "campaigns"), orderBy("createdAt", "desc"), limit(10));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newLogs: any[] = [];
            let activeCount = 0;
            let completedCount = 0;

            snapshot.forEach((doc) => {
                const data = doc.data();

                // Count stats
                if (['RESEARCHING', 'DRAFTING', 'PUBLISHING', 'PENDING'].includes(data.status)) {
                    activeCount++;
                }
                if (data.status === 'COMPLETED') {
                    completedCount++;
                }

                // Create a log entry for the feed
                let agentName = "System";
                let action = "Campaign Update";
                let statusColor = "info";

                if (data.status === 'RESEARCHING') {
                    agentName = "Strategist Agent";
                    action = "Analyzing Trends";
                    statusColor = "info";
                } else if (data.status === 'DRAFTING') {
                    agentName = "Creator Agent";
                    action = "Drafting Content";
                    statusColor = "warning"; // busy
                } else if (data.status === 'PUBLISHING') {
                    agentName = "Publisher Agent";
                    action = "Finalizing Assets";
                    statusColor = "warning";
                } else if (data.status === 'COMPLETED') {
                    agentName = "Publisher Agent";
                    action = "Campaign Ready";
                    statusColor = "success";
                } else if (data.status === 'ERROR') {
                    agentName = "System Alert";
                    action = "Error Detected";
                    statusColor = "error";
                }

                newLogs.push({
                    id: doc.id,
                    agent: agentName,
                    action: action,
                    reason: `Topic: ${data.topic}`,
                    time: data.createdAt?.toDate().toLocaleTimeString() || "Just now",
                    status: statusColor,
                    rawStatus: data.status
                });
            });

            setLogs(newLogs);
            setActiveCampaigns(activeCount);
            setCompletedCampaigns(prev => Math.max(prev, completedCount)); // Simple increment simulation
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        <Cpu className="h-8 w-8 text-primary" />
                        Cargonex Operations Core
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Real-time visualization of AI agent activities and global logistics optimization.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/5 text-primary animate-pulse">
                        <Activity className="w-3 h-3 mr-2" />
                        System Live
                    </Badge>
                    <Button variant="default">Generate Report</Button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* KPI Cards */}
                <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                            <Cpu className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{activeCampaigns}</div>
                            <p className="text-xs text-muted-foreground">Agents currently working</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tasks Processed</CardTitle>
                            <Zap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{completedCampaigns}</div>
                            <p className="text-xs text-muted-foreground">Completed today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Global Efficiency</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">94.2%</div>
                            <p className="text-xs text-muted-foreground">+4.1% optimization rate</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Alerts</CardTitle>
                            <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground">System healthy</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Live Map Visualization (Placeholder for now) */}
                <div className="md:col-span-8">
                    <Card className="h-[500px] flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5" />
                                Global Logistics Map
                            </CardTitle>
                            <CardDescription>Real-time tracking of shipments and agent interventions</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 bg-muted/20 relative overflow-hidden rounded-md m-4 border border-dashed border-border">
                            {/* Abstract Map Visualization */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                <div className="w-[80%] h-[80%] border-2 border-primary rounded-full animate-[spin_20s_linear_infinite]" />
                                <div className="w-[60%] h-[60%] border border-primary rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="w-[40%] h-[40%] border border-primary rounded-full animate-[spin_10s_linear_infinite]" />
                            </div>

                            {/* Moving Nodes */}
                            <div className="absolute top-1/4 left-1/4 p-2 bg-background/80 backdrop-blur border rounded shadow-sm animate-bounce">
                                <Ship className="h-6 w-6 text-blue-500" />
                                <span className="text-[10px] font-bold">Ship-A1</span>
                            </div>
                            <div className="absolute bottom-1/3 right-1/3 p-2 bg-background/80 backdrop-blur border rounded shadow-sm animate-pulse">
                                <Plane className="h-6 w-6 text-purple-500" />
                                <span className="text-[10px] font-bold">Air-X9</span>
                            </div>
                            <div className="absolute top-1/2 right-1/4 p-2 bg-background/80 backdrop-blur border rounded shadow-sm">
                                <Truck className="h-6 w-6 text-green-500" />
                                <span className="text-[10px] font-bold">Truck-B2</span>
                            </div>

                            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/90 p-2 rounded border">
                                Map Visualization Mode: <span className="font-bold text-primary">LIVE</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Live Activity Feed */}
                <div className="md:col-span-4">
                    <Card className="h-[500px] flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Activity className="h-5 w-5" />
                                Agent Activity Feed
                            </CardTitle>
                            <CardDescription>Live decision log</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 p-0">
                            <ScrollArea className="h-[400px] px-4">
                                <div className="space-y-4">
                                    {logs.length === 0 && (
                                        <div className="text-center text-muted-foreground py-10">
                                            No active agents. Start a campaign to see activity.
                                        </div>
                                    )}
                                    {logs.map((log) => (
                                        <div key={log.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
                                            <div className={`mt-1 p-1 rounded-full ${log.status === 'success' ? 'bg-green-100 text-green-600' :
                                                    log.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                                                        log.status === 'error' ? 'bg-red-100 text-red-600' :
                                                            'bg-blue-100 text-blue-600'
                                                }`}>
                                                {log.status === 'success' ? <CheckCircle2 className="h-3 w-3" /> :
                                                    log.status === 'warning' ? <Zap className="h-3 w-3" /> :
                                                        log.status === 'error' ? <AlertCircle className="h-3 w-3" /> :
                                                            <Activity className="h-3 w-3" />}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">{log.agent}</p>
                                                <p className="text-xs text-muted-foreground">{log.action}</p>
                                                <p className="text-[10px] text-muted-foreground/70">{log.reason}</p>
                                            </div>
                                            <div className="ml-auto text-[10px] text-muted-foreground">{log.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

                {/* Performance Chart */}
                <div className="md:col-span-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>System Performance</CardTitle>
                            <CardDescription>Efficiency metrics over the last 6 hours</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={performanceData}>
                                    <defs>
                                        <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ea3b39" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#ea3b39" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="time" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="efficiency" stroke="#ea3b39" fillOpacity={1} fill="url(#colorEfficiency)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
