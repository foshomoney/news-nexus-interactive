
import { useState, useEffect } from 'react';
import { Article } from '@/types/news';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCategoryInfo } from '@/services/newsService';
import { Link } from 'react-router-dom';

interface NewsCarouselProps {
  articles: Article[];
}

const NewsCarousel = ({ articles }: NewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  if (!articles.length) {
    return null;
  }
  
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
      {/* Carousel items */}
      {articles.map((article, index) => {
        const isActive = index === currentIndex;
        const categoryInfo = getCategoryInfo(article.category);
        
        return (
          <div
            key={article.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image with gradient overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl">
                  <Badge 
                    className={`mb-3 text-sm}`}
                    style={{ backgroundColor: categoryInfo.id === 'ai' ? '#6366f1' : 
                                         categoryInfo.id === 'hardware' ? '#8b5cf6' : 
                                         categoryInfo.id === 'robotics' ? '#ec4899' : 
                                         categoryInfo.id === 'vrar' ? '#f97316' : '#ffffff' }}
                  >
                    {categoryInfo.label}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">
                    {article.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-4">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-300">
                      <span>{article.sourceName}</span>
                      <span className="mx-2">•</span>
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-white text-background hover:bg-gray-200"
                        asChild
                      >
                        <Link to={`/article/${article.id}`}>
                          Read Article
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-white text-white hover:bg-white/10"
                        onClick={() => window.open(article.sourceUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Navigation arrows */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-background/20 border-white/10 backdrop-blur-sm text-white hover:bg-background/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-background/20 border-white/10 backdrop-blur-sm text-white hover:bg-background/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
