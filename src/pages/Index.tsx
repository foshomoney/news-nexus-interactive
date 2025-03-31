
import { useState, useEffect } from 'react';
import { fetchFeaturedArticles } from '@/services/newsService';
import { Article, Category } from '@/types/news';
import Header from '@/components/Header';
import NewsCarousel from '@/components/NewsCarousel';
import NewsGrid from '@/components/NewsGrid';
import Footer from '@/components/Footer';

const Index = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Category>('all');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadFeaturedArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchFeaturedArticles();
        setFeaturedArticles(data);
      } catch (error) {
        console.error('Error fetching featured articles:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadFeaturedArticles();
  }, []);
  
  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category);
  };
  
  // Interactive background elements
  const BackgroundElements = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
      
      {/* Background shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tech-ai/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-tech-robotics/5 blur-3xl"></div>
      <div className="absolute top-2/3 left-1/2 w-80 h-80 rounded-full bg-tech-hardware/5 blur-3xl"></div>
      
      {/* Animated elements */}
      <div className="absolute top-10 right-1/4 w-4 h-4 rounded-full bg-tech-ai/20 animate-float"></div>
      <div className="absolute top-1/3 left-10 w-6 h-6 rounded-full bg-tech-hardware/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 rounded-full bg-tech-robotics/20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 left-1/4 w-5 h-5 rounded-full bg-tech-vrar/20 animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundElements />
      
      <Header 
        onCategoryChange={handleCategoryChange} 
        currentCategory={currentCategory} 
      />
      
      <main className="flex-1">
        {/* Featured Articles Carousel */}
        <section className="container mx-auto px-4 pt-8">
          {loading ? (
            <div className="w-full h-[500px] bg-muted animate-pulse rounded-xl"></div>
          ) : (
            <NewsCarousel articles={featuredArticles} />
          )}
        </section>
        
        {/* News Grid */}
        <NewsGrid currentCategory={currentCategory} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
