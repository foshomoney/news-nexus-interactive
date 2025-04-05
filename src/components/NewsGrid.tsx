
import { useState, useEffect } from 'react';
import { Article, Category } from '@/types/news';
import { fetchArticles } from '@/services/newsService';
import NewsCard from './NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface NewsGridProps {
  currentCategory: Category;
  onLoadingChange?: (isLoading: boolean) => void;
}

const NewsGrid = ({ currentCategory, onLoadingChange }: NewsGridProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  
  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      if (onLoadingChange) {
        onLoadingChange(true);
      }
      
      try {
        const data = await fetchArticles(currentCategory);
        setArticles(data);
        // Reset to first page when category changes
        setCurrentPage(1);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
        if (onLoadingChange) {
          onLoadingChange(false);
        }
      }
    };
    
    loadArticles();
  }, [currentCategory, onLoadingChange]);
  
  // Sort articles by date (latest first)
  const latestArticles = [...articles].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  
  // This would typically use actual view/engagement data
  // For now, just sort by title length as a proxy for "popularity"
  const popularArticles = [...articles].sort((a, b) => 
    b.title.length - a.title.length
  );
  
  // Get current articles for pagination
  const currentArticles = activeTab === 'latest' 
    ? latestArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage)
    : popularArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);
  
  const totalPages = Math.ceil(
    (activeTab === 'latest' ? latestArticles.length : popularArticles.length) / articlesPerPage
  );
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll back to top when page changes
    window.scrollTo({
      top: document.getElementById('news-grid-top')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8" id="news-grid-top">
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} 
                        className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          onClick={() => handlePageChange(index + 1)}
                          isActive={currentPage === index + 1}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} 
                        className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} 
                        className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          onClick={() => handlePageChange(index + 1)}
                          isActive={currentPage === index + 1}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} 
                        className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsGrid;
