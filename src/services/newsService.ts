
import { Article, Category, FeedSource } from '../types/news';

// Mock RSS feed sources
const feedSources: FeedSource[] = [
  {
    id: '1',
    name: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/feed/',
    category: 'ai'
  },
  {
    id: '2',
    name: 'Wired',
    url: 'https://www.wired.com/feed/rss',
    category: 'hardware'
  },
  {
    id: '3',
    name: 'IEEE Spectrum',
    url: 'https://spectrum.ieee.org/rss',
    category: 'robotics'
  },
  {
    id: '4',
    name: 'Road to VR',
    url: 'https://www.roadtovr.com/feed/',
    category: 'vrar'
  }
];

// Mock articles data (in a real app, this would come from RSS feed parsing)
const mockArticles: Article[] = [
  {
    id: '1',
    title: "Google's New AI Model Can Generate Videos from Text",
    summary: "The latest breakthrough from Google's DeepMind can turn text prompts into detailed videos.",
    content: "Google has unveiled a new AI system that can generate high-quality videos from text descriptions, representing a significant advance in generative AI technology.",
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    sourceUrl: 'https://example.com/article1',
    sourceName: 'MIT Technology Review',
    publishDate: '2023-09-15',
    category: 'ai'
  },
  {
    id: '2',
    title: 'The New M3 MacBooks Are Faster Than Ever',
    summary: "Apple's latest chip brings unprecedented performance to their laptop lineup.",
    content: "Apple's new M3 chip delivers up to 40% better performance than the previous generation while maintaining exceptional battery efficiency.",
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    sourceUrl: 'https://example.com/article2',
    sourceName: 'Wired',
    publishDate: '2023-09-14',
    category: 'hardware'
  },
  {
    id: '3',
    title: "Boston Dynamics' Latest Robot Can Navigate Complex Terrain",
    summary: 'The new robot demonstrates unprecedented ability to traverse difficult landscapes.',
    content: 'Boston Dynamics has unveiled a new quadruped robot with enhanced sensors and AI algorithms that allow it to navigate challenging terrain without human assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    sourceUrl: 'https://example.com/article3',
    sourceName: 'IEEE Spectrum',
    publishDate: '2023-09-13',
    category: 'robotics'
  },
  {
    id: '4',
    title: "Meta's Quest 3 Is a Major Leap Forward for Mixed Reality",
    summary: 'The next generation headset brings true mixed reality to consumers.',
    content: "Meta's Quest 3 features breakthrough passthrough technology that enables seamless blending of virtual and real environments, along with enhanced resolution and a more comfortable design.",
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac',
    sourceUrl: 'https://example.com/article4',
    sourceName: 'Road to VR',
    publishDate: '2023-09-12',
    category: 'vrar'
  },
  {
    id: '5',
    title: 'OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities',
    summary: 'The latest version shows significant improvements in logical reasoning and problem-solving.',
    content: 'GPT-5 demonstrates substantially improved logical reasoning and problem-solving capabilities, bringing AI closer to human-like intelligence in complex tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1677442135143-6ed0d0fca815',
    sourceUrl: 'https://example.com/article5',
    sourceName: 'MIT Technology Review',
    publishDate: '2023-09-11',
    category: 'ai'
  },
  {
    id: '6',
    title: 'NVIDIA Unveils Next-Gen RTX 5090 Graphics Card',
    summary: 'The new flagship GPU promises unprecedented performance for gaming and AI.',
    content: "NVIDIA's RTX 5090 offers a 70% performance improvement over previous models, with enhanced ray tracing capabilities and AI-accelerated features.",
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704',
    sourceUrl: 'https://example.com/article6',
    sourceName: 'Wired',
    publishDate: '2023-09-10',
    category: 'hardware'
  },
  {
    id: '7',
    title: 'Researchers Develop Self-Healing Robots',
    summary: 'New materials allow robots to automatically repair damage.',
    content: 'Scientists have created a new class of polymers that enable robots to detect and repair damage to their outer shells, increasing resilience in harsh environments.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    sourceUrl: 'https://example.com/article7',
    sourceName: 'IEEE Spectrum',
    publishDate: '2023-09-09',
    category: 'robotics'
  },
  {
    id: '8',
    title: 'Apple Vision Pro Set to Revolutionize Spatial Computing',
    summary: 'The highly anticipated headset will ship to developers next month.',
    content: "Apple's Vision Pro combines VR and AR in a premium device that aims to create entirely new categories of applications and experiences beyond traditional computing.",
    imageUrl: 'https://images.unsplash.com/photo-1549173772-9b3a0741bcb7',
    sourceUrl: 'https://example.com/article8',
    sourceName: 'Road to VR',
    publishDate: '2023-09-08',
    category: 'vrar'
  }
];

// In a real implementation, this would fetch and parse RSS feeds
export const fetchArticles = async (category: Category = 'all'): Promise<Article[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (category === 'all') {
    return mockArticles;
  }
  
  return mockArticles.filter(article => article.category === category);
};

export const fetchFeaturedArticles = async (): Promise<Article[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return first 4 articles as featured
  return mockArticles.slice(0, 4);
};

export const fetchArticleById = async (id: string): Promise<Article | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return mockArticles.find(article => article.id === id);
};

export const getCategoryInfo = (category: Category) => {
  const categories = {
    ai: {
      id: 'ai' as Category,
      label: 'Artificial Intelligence',
      color: 'text-tech-ai',
      description: 'Latest breakthroughs in AI and machine learning'
    },
    hardware: {
      id: 'hardware' as Category,
      label: 'Hardware',
      color: 'text-tech-hardware',
      description: 'Cutting-edge devices and components'
    },
    robotics: {
      id: 'robotics' as Category,
      label: 'Robotics',
      color: 'text-tech-robotics',
      description: 'Advancements in robotics and automation'
    },
    vrar: {
      id: 'vrar' as Category,
      label: 'VR/AR',
      color: 'text-tech-vrar',
      description: 'Virtual and augmented reality innovations'
    },
    all: {
      id: 'all' as Category,
      label: 'All News',
      color: 'text-white',
      description: 'All technology news'
    }
  };
  
  return categories[category];
};
