
import { Article } from '@/types/news';
import { getCategoryInfo } from '@/services/newsService';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface NewsCardProps {
  article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const categoryInfo = getCategoryInfo(article.category);
  
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
      </div>
      <CardContent className="pt-4 pb-2 flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {article.summary}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between py-2 text-xs text-muted-foreground border-t">
        <span>{article.sourceName}</span>
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
