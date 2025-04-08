
import { useState, useEffect } from 'react';
import { fetchFeaturedArticles } from '@/services/newsService';
import { Article, Category } from '@/types/news';
import Header from '@/components/Header';
import NewsCarousel from '@/components/NewsCarousel';
import NewsGrid from '@/components/NewsGrid';
import Footer from '@/components/Footer';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Category>('all');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadFeaturedArticles = async () => {
      setLoading(true);
      try {
        // The fetchFeaturedArticles now uses caching for better performance
        const data = await fetchFeaturedArticles();
        setFeaturedArticles(data);
        toast({
          title: "RSS Feeds Loaded",
          description: "Latest articles have been fetched from RSS feeds.",
          duration: 3000,
        });
      } catch (error) {
        console.error('Error fetching featured articles:', error);
        toast({
          title: "Error Loading RSS Feeds",
          description: "There was an issue fetching the latest articles. Using fallback content.",
          variant: "destructive",
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadFeaturedArticles();
  }, []);
  
  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category);
  };
  
  // Enhanced interactive background elements with faster animations
  const BackgroundElements = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
      
      {/* Background shapes with enhanced animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tech-ai/5 blur-3xl animate-pulse-soft" style={{ animationDuration: '5s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-tech-robotics/5 blur-3xl animate-pulse-soft" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-80 h-80 rounded-full bg-tech-hardware/5 blur-3xl animate-pulse-soft" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      
      {/* Additional background shapes */}
      <div className="absolute top-1/6 right-1/5 w-72 h-72 rounded-full bg-tech-vrar/5 blur-3xl animate-pulse-soft" style={{ animationDuration: '7s', animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-1/5 left-1/3 w-60 h-60 rounded-full bg-tech-ai/5 blur-3xl animate-pulse-soft" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}></div>
      
      {/* Animated elements - faster */}
      <div className="absolute top-10 right-1/4 w-4 h-4 rounded-full bg-tech-ai/20 animate-float" style={{ animationDuration: '2s' }}></div>
      <div className="absolute top-1/3 left-10 w-6 h-6 rounded-full bg-tech-hardware/20 animate-float" style={{ animationDuration: '1.8s', animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 rounded-full bg-tech-robotics/20 animate-float" style={{ animationDuration: '1.5s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 left-1/4 w-5 h-5 rounded-full bg-tech-vrar/20 animate-float" style={{ animationDuration: '2.2s', animationDelay: '1.5s' }}></div>
      
      {/* Additional animated particles */}
      <div className="absolute top-1/5 right-1/6 w-3 h-3 rounded-full bg-tech-ai/30 animate-float" style={{ animationDuration: '2.4s', animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-1/6 right-1/3 w-5 h-5 rounded-full bg-tech-hardware/25 animate-float" style={{ animationDuration: '1.9s', animationDelay: '0.8s' }}></div>
      <div className="absolute top-2/5 left-1/5 w-7 h-7 rounded-full bg-tech-robotics/20 animate-float" style={{ animationDuration: '2.1s', animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-2/5 right-1/4 w-4 h-4 rounded-full bg-tech-vrar/25 animate-float" style={{ animationDuration: '2.3s', animationDelay: '0.6s' }}></div>
      
      {/* Rotating elements */}
      <div className="absolute top-1/3 right-1/2 w-40 h-40 border border-tech-ai/10 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-1/2 left-1/4 w-32 h-32 border border-tech-hardware/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundElements />
      
      <Header 
        onCategoryChange={handleCategoryChange} 
        currentCategory={currentCategory}
        isLoading={loading}
      />
      
      <main className="flex-1">
        {/* Featured Articles Carousel */}
        <section className="container mx-auto px-4 pt-8">
          {loading ? (
            <div className="w-full h-[500px] bg-muted/20 animate-pulse-soft rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          ) : (
            <NewsCarousel articles={featuredArticles} />
          )}
        </section>
        
        {/* News Grid */}
        <NewsGrid 
          currentCategory={currentCategory} 
          onLoadingChange={(isLoading) => setLoading(isLoading)} 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
