import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Activity,
    Globe,
    Box,
    Cpu,
    Zap,
    AlertCircle,
    CheckCircle2,
    TrendingUp,
    Ship,
    Truck,
    Plane,
    Anchor
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data for Charts
const performanceData = [
    { time: '08:00', efficiency: 65, tasks: 120 },
    { time: '09:00', efficiency: 72, tasks: 145 },
    { time: '10:00', efficiency: 85, tasks: 180 },
    { time: '11:00', efficiency: 82, tasks: 190 },
    { time: '12:00', efficiency: 90, tasks: 210 },
    { time: '13:00', efficiency: 88, tasks: 195 },
    { time: '14:00', efficiency: 94, tasks: 230 },
];

// Mock Data for Live Feed
const initialLogs = [
    { id: 1, agent: 'RouteOptimizer', action: 'Rerouted Shipment #SH-902', reason: 'Weather Alert: Storm in Atlantic', time: 'Just now', status: 'success' },
    { id: 2, agent: 'CustomsBot', action: 'Clearance Approved', reason: 'Doc #8821 Verified', time: '2 min ago', status: 'success' },
    { id: 3, agent: 'InventoryAI', action: 'Low Stock Alert', reason: 'Warehouse B - SKU-112', time: '5 min ago', status: 'warning' },
    { id: 4, agent: 'LogisticsCore', action: 'New Carrier Assigned', reason: 'Better rate found (-15%)', time: '12 min ago', status: 'info' },
];

export default function AgentDashboard() {
    const [logs, setLogs] = useState(initialLogs);
    const [activeAgents, setActiveAgents] = useState(12);
    const [tasksProcessed, setTasksProcessed] = useState(12450);

    // Simulate live activity
    useEffect(() => {
        const interval = setInterval(() => {
            const actions = [
                { agent: 'RouteOptimizer', action: 'Optimizing Route', reason: 'Traffic congestion detected', status: 'info' },
                { agent: 'CustomsBot', action: 'Document Scan', reason: 'Verifying compliance', status: 'success' },
                { agent: 'PriceWatcher', action: 'Rate Update', reason: 'Market fluctuation detected', status: 'warning' },
            ];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            const newLog = {
                id: Date.now(),
                ...randomAction,
                time: 'Just now'
            };

            setLogs(prev => [newLog, ...prev.slice(0, 9)]);
            setTasksProcessed(prev => prev + Math.floor(Math.random() * 5));
        }, 3000);

        return () => clearInterval(interval);
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
                            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                            <Cpu className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{activeAgents}</div>
                            <p className="text-xs text-muted-foreground">+2 deployed in last hour</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tasks Processed</CardTitle>
                            <Zap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{tasksProcessed.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">+12% from daily average</p>
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
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-muted-foreground">Requires human review</p>
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
                                    {logs.map((log) => (
                                        <div key={log.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
                                            <div className={`mt-1 p-1 rounded-full ${log.status === 'success' ? 'bg-green-100 text-green-600' :
                                                    log.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                                                        'bg-blue-100 text-blue-600'
                                                }`}>
                                                {log.status === 'success' ? <CheckCircle2 className="h-3 w-3" /> :
                                                    log.status === 'warning' ? <AlertCircle className="h-3 w-3" /> :
                                                        <Zap className="h-3 w-3" />}
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
