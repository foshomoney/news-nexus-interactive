
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchArticleById } from '@/services/newsService';
import { Article } from '@/types/news';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getCategoryInfo } from '@/services/newsService';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadArticle = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const data = await fetchArticleById(id);
        if (data) {
          setArticle(data);
        } else {
          toast({
            title: "Article not found",
            description: "The requested article could not be found.",
            variant: "destructive",
          });
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        toast({
          title: "Error loading article",
          description: "There was a problem loading this article.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadArticle();
  }, [id, navigate]);
  
  // Background elements (same as in Index.tsx for consistency)
  const BackgroundElements = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tech-ai/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-tech-robotics/5 blur-3xl"></div>
      <div className="absolute top-2/3 left-1/2 w-80 h-80 rounded-full bg-tech-hardware/5 blur-3xl"></div>
    </div>
  );
  
  // Function to safely render HTML content
  const renderArticleContent = () => {
    if (!article?.content) return <p className="text-lg">{article?.summary}</p>;
    
    return (
      <div 
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ 
          __html: article.content 
        }} 
      />
    );
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <BackgroundElements />
        <Header currentCategory="all" onCategoryChange={() => {}} isLoading={false} />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-48 mb-6" />
          <Skeleton className="h-64 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-5/6" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!article) {
    return null;
  }
  
  const categoryInfo = getCategoryInfo(article.category);
  
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundElements />
      <Header currentCategory="all" onCategoryChange={() => {}} isLoading={false} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        <Badge 
          className="mb-4"
          style={{ 
            backgroundColor: 
              categoryInfo.id === 'ai' ? '#6366f1' : 
              categoryInfo.id === 'hardware' ? '#8b5cf6' : 
              categoryInfo.id === 'robotics' ? '#ec4899' : 
              categoryInfo.id === 'vrar' ? '#f97316' : '#ffffff' 
          }}
        >
          {categoryInfo.label}
        </Badge>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <span>{article.sourceName}</span>
          <span className="mx-2">•</span>
          <span>{article.publishDate}</span>
          <a 
            href={article.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center hover:text-primary transition-colors"
          >
            Original source <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
        
        {article.imageUrl && (
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = getPlaceholderImage(article.category);
              }}
            />
          </div>
        )}
        
        <div className="prose-container bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
          {renderArticleContent()}
        </div>
        
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to articles
          </Button>
          
          <a 
            href={article.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button>
              Read original <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper function for placeholder images (same as in NewsCard for consistency)
const getPlaceholderImage = (category: string) => {
  switch (category) {
    case 'ai':
      return 'https://images.unsplash.com/photo-1677442135143-6ed0d0fca815';
    case 'hardware':
      return 'https://images.unsplash.com/photo-1591488320449-011701bb6704';
    case 'robotics':
      return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e';
    case 'vrar':
      return 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac';
    default:
      return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b';
  }
};

export default ArticleDetail;
