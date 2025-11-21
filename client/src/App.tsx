import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/sonner";
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
    </>
  );
}

export default App;
