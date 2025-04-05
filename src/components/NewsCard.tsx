
import { Article } from '@/types/news';
import { getCategoryInfo } from '@/services/newsService';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink, Rss } from 'lucide-react';
import { useState } from 'react';

interface NewsCardProps {
  article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const categoryInfo = getCategoryInfo(article.category);
  const [imageError, setImageError] = useState(false);
  
  // Handle image load errors
  const handleImageError = () => {
    setImageError(true);
  };
  
  // Get placeholder image based on category
  const getPlaceholderImage = () => {
    switch (article.category) {
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
  
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageError ? getPlaceholderImage() : article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={handleImageError}
        />
        <Badge 
          className="absolute top-2 left-2"
          style={{ backgroundColor: categoryInfo.id === 'ai' ? '#6366f1' : 
                                 categoryInfo.id === 'hardware' ? '#8b5cf6' : 
                                 categoryInfo.id === 'robotics' ? '#ec4899' : 
                                 categoryInfo.id === 'vrar' ? '#f97316' : '#ffffff' }}
        >
          {categoryInfo.label}
        </Badge>
        <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
          <Rss className="h-4 w-4 text-white" />
        </div>
      </div>
      <CardContent className="pt-4 pb-2 flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {article.summary}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between py-2 text-xs text-muted-foreground border-t">
        <div className="flex flex-col">
          <span className="font-medium">{article.sourceName}</span>
          <span className="text-xs opacity-75">{article.publishDate}</span>
        </div>
        <a 
          href={article.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors"
        >
          Read more <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
