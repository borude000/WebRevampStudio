import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/layout";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Pages
import Home from "@/pages/home.tsx";
import Services from "@/pages/services.tsx";
import Work from "@/pages/work.tsx";
import WorkDetail from "@/pages/work-detail.tsx";
import About from "@/pages/about.tsx";
import Contact from "@/pages/contact.tsx";
import Privacy from "@/pages/privacy.tsx";
import Terms from "@/pages/terms.tsx";
import NotFound from "@/pages/not-found.tsx";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/work" component={Work} />
        <Route path="/work/:slug" component={WorkDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
