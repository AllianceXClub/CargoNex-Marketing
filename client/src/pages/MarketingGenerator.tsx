import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Sparkles, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { db } from "@/lib/firebase";
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";

export default function MarketingGenerator() {
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string>("IDLE");
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<any>(null);

    const handleGenerate = async () => {
        if (!topic) {
            toast.error("Please enter a topic");
            return;
        }

        setLoading(true);
        setResult(null);
        setStatus("STARTING");
        setProgress(5);

        try {
            // 1. Create a new campaign document in Firestore
            const docRef = await addDoc(collection(db, "campaigns"), {
                topic,
                status: "PENDING",
                createdAt: new Date(),
                progress: 0
            });

            toast.success("Agency activated! Agents are starting research...");

            // 2. Listen for real-time updates
            const unsubscribe = onSnapshot(doc(db, "campaigns", docRef.id), (snapshot) => {
                const data = snapshot.data();
                if (!data) return;

                setStatus(data.status || "PROCESSING");
                setProgress(data.progress || 10);

                if (data.status === "COMPLETED" && data.published_content) {
                    setResult(data.published_content);
                    setLoading(false);
                    toast.success("Campaign completed successfully!");
                    unsubscribe();
                } else if (data.status === "ERROR") {
                    setLoading(false);
                    toast.error(`Error: ${data.error}`);
                    unsubscribe();
                }
            });

        } catch (error: any) {
            console.error("Error starting campaign:", error);
            toast.error(error.message);
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard");
    };

    return (
        <div className="container mx-auto py-10 px-4 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                    Autonomous AI Agency
                </h1>
                <p className="text-muted-foreground">
                    Deploy a squad of AI agents to research, draft, and publish marketing content.
                </p>
            </div>

            <Card className="mb-8 border-blue-100 shadow-lg">
                <CardHeader>
                    <CardTitle>Start New Campaign</CardTitle>
                    <CardDescription>
                        Enter a topic and watch the agents work in real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="topic">Campaign Topic</Label>
                        <div className="flex gap-2">
                            <Input
                                id="topic"
                                placeholder="e.g., Sustainable Logistics Trends 2025"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="text-lg"
                                disabled={loading}
                            />
                            <Button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white min-w-[140px]"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        {status === "RESEARCHING" ? "Researching..." :
                                            status === "DRAFTING" ? "Drafting..." :
                                                status === "PUBLISHING" ? "Finalizing..." :
                                                    "Working..."}
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Deploy Agents
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    {loading && (
                        <div className="space-y-2 mt-4">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Status: <span className="font-semibold text-blue-600">{status}</span></span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 transition-all duration-500 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {result && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-2 text-green-600 font-medium bg-green-50 p-3 rounded-lg border border-green-100">
                        <CheckCircle2 className="h-5 w-5" />
                        Campaign generated successfully!
                    </div>

                    <Tabs defaultValue="blog" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="blog">Blog Post</TabsTrigger>
                            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                            <TabsTrigger value="twitter">Twitter</TabsTrigger>
                        </TabsList>

                        <TabsContent value="blog">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle>{result.blog?.title || "Blog Post"}</CardTitle>
                                        <CardDescription>Blog Content</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(`# ${result.blog?.title}\n\n${result.blog?.content}`)}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
                                        {result.blog?.content}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="linkedin">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle>LinkedIn Post</CardTitle>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.linkedin_post)}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="whitespace-pre-wrap font-sans text-sm p-4 bg-gray-50 dark:bg-gray-800 rounded-md border">
                                        {result.linkedin_post}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="twitter">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle>Twitter Thread</CardTitle>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.twitter_thread?.join("\n\n"))}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {result.twitter_thread?.map((tweet: string, index: number) => (
                                        <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                                            <div className="font-bold text-xs text-blue-600 mb-1">Tweet {index + 1}</div>
                                            <p className="text-sm">{tweet}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            )}
        </div>
    );
}
