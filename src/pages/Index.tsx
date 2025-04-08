
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
  
  // Enhanced interactive background elements with randomized animations
  const BackgroundElements = () => {
    // Generate random background elements
    const generateRandomElements = () => {
      const elements = [];
      
      // Generate gradient orbs
      for (let i = 0; i < 8; i++) {
        const size = Math.floor(Math.random() * 60) + 40; // Random size between 40-100%
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.15 + 0.05; // Random opacity between 0.05-0.2
        const categoryColors = ['tech-ai', 'tech-hardware', 'tech-robotics', 'tech-vrar'];
        const color = categoryColors[Math.floor(Math.random() * categoryColors.length)];
        const duration = Math.floor(Math.random() * 4) + 3; // Random duration between 3-7s
        const delay = Math.random() * 1.5; // Random delay between 0-1.5s
        
        elements.push(
          <div 
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl animate-pulse-soft"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}%`,
              height: `${size}%`,
              backgroundColor: `var(--${color})`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      }
      
      // Generate floating particles
      for (let i = 0; i < 12; i++) {
        const size = Math.floor(Math.random() * 8) + 2; // Random size between 2-10px
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const categoryColors = ['tech-ai', 'tech-hardware', 'tech-robotics', 'tech-vrar'];
        const color = categoryColors[Math.floor(Math.random() * categoryColors.length)];
        const duration = (Math.random() * 1.5) + 1; // Random duration between 1-2.5s
        const delay = Math.random() * 2; // Random delay between 0-2s
        
        elements.push(
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full animate-float"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `var(--${color})`,
              opacity: 0.3,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      }
      
      // Generate rotating rings
      for (let i = 0; i < 4; i++) {
        const size = Math.floor(Math.random() * 30) + 20; // Random size between 20-50vh
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const categoryColors = ['tech-ai', 'tech-hardware', 'tech-robotics', 'tech-vrar'];
        const color = categoryColors[Math.floor(Math.random() * categoryColors.length)];
        const duration = Math.floor(Math.random() * 10) + 10; // Random duration between 10-20s
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        
        elements.push(
          <div 
            key={`ring-${i}`}
            className="absolute border rounded-full animate-rotate-slow"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}vh`,
              height: `${size}vh`,
              borderColor: `var(--${color})`,
              borderWidth: '1px',
              opacity: 0.1,
              animationDuration: `${duration}s`,
              animationDirection: direction
            }}
          />
        );
      }
      
      return elements;
    };
    
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
        {generateRandomElements()}
      </div>
    );
  };
  
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
