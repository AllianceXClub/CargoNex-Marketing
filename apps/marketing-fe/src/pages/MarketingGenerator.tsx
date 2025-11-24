import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Sparkles, Copy } from "lucide-react";
import { toast } from "sonner";

export default function MarketingGenerator() {
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleGenerate = async () => {
        if (!topic) {
            toast.error("Please enter a topic");
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/generate-marketing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to generate");
            }

            setResult(data);
            toast.success("Marketing materials generated successfully!");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
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
                    AI Marketing Generator
                </h1>
                <p className="text-muted-foreground">
                    Automated research and multi-modal content creation powered by Gemini 1.5 Pro
                </p>
            </div>

            <Card className="mb-8 border-blue-100 shadow-lg">
                <CardHeader>
                    <CardTitle>Generate New Campaign</CardTitle>
                    <CardDescription>
                        Enter a topic (e.g., "Supply Chain Resilience", "AI in Logistics") and let the AI do the research.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="topic">Topic / Keyword</Label>
                        <div className="flex gap-2">
                            <Input
                                id="topic"
                                placeholder="Enter a topic..."
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="text-lg"
                            />
                            <Button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Researching...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {result && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="bg-slate-50 dark:bg-slate-900 border-l-4 border-l-blue-500">
                        <CardHeader>
                            <CardTitle className="text-xl">Research Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-relaxed">{result.research_summary}</p>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="blog" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="blog">Blog Post</TabsTrigger>
                            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                            <TabsTrigger value="twitter">Twitter</TabsTrigger>
                            <TabsTrigger value="audio">Audio Script</TabsTrigger>
                            <TabsTrigger value="video">Video Script</TabsTrigger>
                        </TabsList>

                        <TabsContent value="blog">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle>{result.blog_title}</CardTitle>
                                        <CardDescription>Blog Content</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(`# ${result.blog_title}\n\n${result.blog_content}`)}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
                                        {result.blog_content}
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
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.twitter_thread.join("\n\n"))}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {result.twitter_thread.map((tweet: string, index: number) => (
                                        <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                                            <div className="font-bold text-xs text-blue-600 mb-1">Tweet {index + 1}</div>
                                            <p className="text-sm">{tweet}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="audio">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle>Audio Overview Script</CardTitle>
                                        <CardDescription>Podcast-style dialogue (NotebookLM style)</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.audio_script)}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="whitespace-pre-wrap font-mono text-sm p-4 bg-slate-100 dark:bg-slate-800 rounded-md border">
                                        {result.audio_script}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="video">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle>Video Production Script</CardTitle>
                                        <CardDescription>Scene-by-scene breakdown for video generation</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.video_script)}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="whitespace-pre-wrap font-mono text-sm p-4 bg-slate-100 dark:bg-slate-800 rounded-md border">
                                        {result.video_script}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            )}
        </div>
    );
}
