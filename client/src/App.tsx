import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import WhatsAppButton from "./components/WhatsAppButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AgentDashboard from "./pages/AgentDashboard";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfUse from "./pages/legal/TermsOfUse";
import CookiePolicy from "./pages/legal/CookiePolicy";
import BlogIndex from "./pages/blog/BlogIndex";
import AiImportGuide2026 from "./pages/blog/posts/AiImportGuide2026";
import MarketingGenerator from "./pages/MarketingGenerator";
import DesignSystemShowcase from "./pages/DesignSystemShowcase";
import DesignSystemTest from "./pages/DesignSystemTest";
import TestPage from "./pages/TestPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MarketingGenerator} />
      <Route path="/home" component={Home} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/dashboard"} component={AgentDashboard} />
      <Route path={"/marketing-generator"} component={MarketingGenerator} />
      <Route path={"/legal/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/legal/terms-of-use"} component={TermsOfUse} />
      <Route path={"/legal/cookie-policy"} component={CookiePolicy} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/how-importers-israel-prepare-2026-ai-guide"} component={AiImportGuide2026} />
      <Route path={"/design-system"} component={DesignSystemShowcase} />
      <Route path={"/design-system-test"} component={DesignSystemTest} />
      <Route path={"/test"} component={TestPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          <Toaster />
          <WhatsAppButton />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
