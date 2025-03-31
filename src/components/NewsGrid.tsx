
import { useState, useEffect } from 'react';
import { Article, Category } from '@/types/news';
import { fetchArticles } from '@/services/newsService';
import NewsCard from './NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NewsGridProps {
  currentCategory: Category;
}

const NewsGrid = ({ currentCategory }: NewsGridProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');
  
  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchArticles(currentCategory);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadArticles();
  }, [currentCategory]);
  
  const latestArticles = [...articles].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  
  // This would typically use actual view/engagement data
  const popularArticles = [...articles].sort((a, b) => 
    b.title.length - a.title.length
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="latest" value={activeTab} onValueChange={(value) => setActiveTab(value as 'latest' | 'popular')}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">News Feed</h2>
          <TabsList>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="latest" className="mt-0">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-64 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="popular" className="mt-0">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-64 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsGrid;
