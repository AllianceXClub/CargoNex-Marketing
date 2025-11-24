import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";
import MarketingGenerator from "./pages/MarketingGenerator";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MarketingGenerator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
      <SpeedInsights />
    </>
  );
}

export default App;
