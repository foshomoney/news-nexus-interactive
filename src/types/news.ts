
export type Category = 'ai' | 'hardware' | 'robotics' | 'vrar' | 'all';

export type CategoryInfo = {
  id: Category;
  label: string;
  color: string;
  description: string;
};

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  publishDate: string;
  category: Category;
}

export interface FeedSource {
  id: string;
  name: string;
  url: string;
  category: Category;
}
