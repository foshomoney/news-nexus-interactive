
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { testDatabaseConnection } from "./services/dbService";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  console.log('App.tsx: App component rendering');
  console.log('App.tsx: NODE_ENV:', process.env.NODE_ENV);
  console.log('App.tsx: Current pathname:', window.location.pathname);
  
  // Test database connection on app load
  useEffect(() => {
    console.log('App.tsx: useEffect running');
    const initDatabase = async () => {
      // Test the database connection with default values
      await testDatabaseConnection();
    };
    
    // Uncomment this line to test database connection on load
    // initDatabase();
  }, []);

  // Get the base name for routing (for GitHub Pages deployment)
  const basename = process.env.NODE_ENV === 'production' ? '/news-nexus-interactive' : '';
  console.log('App.tsx: Using basename:', basename);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/search" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
