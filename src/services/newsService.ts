
import { Article, Category, FeedSource } from '../types/news';

// RSS feed sources
export const feedSources: FeedSource[] = [
  // General Technology News
  {
    id: 'techcrunch',
    name: 'TechCrunch',
    url: 'https://techcrunch.com/feed/',
    category: 'all'
  },
  {
    id: 'techdirt',
    name: 'Techdirt',
    url: 'https://feeds.feedburner.com/techdirt/feed',
    category: 'all'
  },
  {
    id: 'techengage',
    name: 'TechEngage',
    url: 'https://techengage.com/feed',
    category: 'all'
  },
  {
    id: 'techgliding',
    name: 'TechGliding',
    url: 'https://www.techgliding.com/feeds/posts/default?alt=rss',
    category: 'all'
  },
  // Specialized Technology News
  {
    id: 'zdnet',
    name: 'ZDNet',
    url: 'https://www.zdnet.com/news/rss.xml',
    category: 'hardware'
  },
  {
    id: 'androidcentral',
    name: 'Android Central',
    url: 'https://www.androidcentral.com/rss.xml',
    category: 'hardware'
  },
  {
    id: 'macworld',
    name: 'Macworld',
    url: 'https://www.macworld.com/index.rss',
    category: 'hardware'
  },
  {
    id: 'fossbytes',
    name: 'Fossbytes',
    url: 'https://fossbytes.com/feed/?x=1',
    category: 'all'
  },
  // Emerging Technologies
  {
    id: 'siliconangle',
    name: 'SiliconANGLE',
    url: 'https://siliconangle.com/feed/',
    category: 'ai'
  },
  {
    id: 'siliconrepublic',
    name: 'Silicon Republic',
    url: 'https://www.siliconrepublic.com/feed',
    category: 'ai'
  },
  // Higher Education Technology
  {
    id: 'campustechnology',
    name: 'Campus Technology',
    url: 'https://campustechnology.com/rss-feeds/rss-list.aspx',
    category: 'robotics'
  },
  // Other Notable Feeds
  {
    id: 'techwrix',
    name: 'Techwrix',
    url: 'https://techwrix.com/feed',
    category: 'all'
  },
  {
    id: 'wired',
    name: 'Wired',
    url: 'https://www.wired.com/feed/rss',
    category: 'vrar'
  }
];

// Function to shuffle an array randomly
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Mock articles data (as fallback if RSS fetching fails)
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

// Function to parse RSS feeds
export const fetchRssFeeds = async (category: Category = 'all'): Promise<Article[]> => {
  try {
    // Using a more reliable CORS proxy
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    
    // Determine which feeds to fetch based on category
    const feedsToFetch = category === 'all' 
      ? feedSources 
      : feedSources.filter(feed => feed.category === category || feed.category === 'all');
    
    // Shuffle the feeds to randomize which ones we fetch
    const shuffledFeeds = shuffleArray(feedsToFetch);
    
    // Limit to 4 feeds to avoid overwhelming the service
    const limitedFeeds = shuffledFeeds.slice(0, 4);
    
    console.log('Fetching RSS feeds:', limitedFeeds.map(f => f.name));
    
    // Fetch feeds concurrently with timeout
    const feedPromises = limitedFeeds.map(async (feed) => {
      try {
        // Add timeout to avoid hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(`${corsProxy}${encodeURIComponent(feed.url)}`, {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          console.error(`Failed to fetch ${feed.name}: ${response.status}`);
          return [];
        }
        
        const xmlText = await response.text();
        
        // Parse XML safely
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        // Check if parsing failed
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
          console.error(`XML parsing error for ${feed.name}:`, parserError.textContent);
          return [];
        }
        
        // Extract items (may vary depending on RSS format)
        const items = Array.from(xmlDoc.querySelectorAll('item'));
        
        return items.map((item, index) => {
          // Extract content (handling different RSS formats)
          const title = item.querySelector('title')?.textContent || 'Untitled';
          const link = item.querySelector('link')?.textContent || '#';
          
          // Try different content tags that might exist
          let content = 
            item.querySelector('content\\:encoded')?.textContent || 
            item.querySelector('description')?.textContent ||
            item.querySelector('summary')?.textContent || '';
          
          // Clean content - remove CDATA sections if present
          content = content.replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1');
          
          // Extract the first paragraph as summary
          const summary = content
            .replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
            .split('.')[0] + '.'; // Get first sentence
          
          // Try to find image in content
          let imageUrl = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Default image
          
          // Look for media:content or enclosure tags for images
          const mediaContent = item.querySelector('media\\:content, enclosure');
          if (mediaContent && mediaContent.getAttribute('url')) {
            imageUrl = mediaContent.getAttribute('url') || imageUrl;
          } else {
            // Try to extract image from content HTML if exists
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            const img = tempDiv.querySelector('img');
            if (img && img.src) {
              imageUrl = img.src;
            }
          }
          
          // Get published date
          const pubDate = item.querySelector('pubDate')?.textContent || 
                         item.querySelector('dc\\:date')?.textContent || 
                         new Date().toUTCString();
          
          // Format date
          let publishDate;
          try {
            publishDate = new Date(pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
          } catch (e) {
            publishDate = new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
          }
          
          return {
            id: `${feed.id}-${index}`,
            title,
            summary,
            content: sanitizeHtml(content),
            imageUrl,
            sourceUrl: link,
            sourceName: feed.name,
            publishDate,
            category: feed.category as Category
          };
        });
      } catch (error) {
        console.error(`Error fetching RSS feed for ${feed.name}:`, error);
        return [];
      }
    });
    
    // Wait for all feeds to be fetched and parsed
    const allArticles = await Promise.all(feedPromises);
    
    // Flatten array and sort by publish date (newest first)
    return allArticles
      .flat()
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 20); // Limit to 20 articles
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    // Fall back to mock articles
    return fetchArticles(category);
  }
};

// Helper function to sanitize HTML content
function sanitizeHtml(html: string): string {
  // Basic sanitization to prevent most common issues
  let sanitized = html
    // Fix unclosed tags
    .replace(/<(img|br|hr|input|meta|link|param|area|base|col|embed|keygen|source|track|wbr)([^>]*[^\/])>/gi, '<$1$2 />')
    // Remove scripts
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove iframes
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    // Remove style tags
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    // Remove event handlers
    .replace(/on\w+="[^"]*"/gi, '');
  
  return sanitized;
}

// In a real implementation, this would fetch and parse RSS feeds
export const fetchArticles = async (category: Category = 'all'): Promise<Article[]> => {
  try {
    // First try to fetch real RSS feeds
    const rssArticles = await fetchRssFeeds(category);
    
    // If we got articles, return them
    if (rssArticles.length > 0) {
      return rssArticles;
    }
    
    // Otherwise fall back to mock data
    console.log('Falling back to mock articles');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (category === 'all') {
      return mockArticles;
    }
    
    return mockArticles.filter(article => article.category === category);
  } catch (error) {
    console.error('Error in fetchArticles:', error);
    // Final fallback to mock articles
    if (category === 'all') {
      return mockArticles;
    }
    return mockArticles.filter(article => article.category === category);
  }
};

export const fetchFeaturedArticles = async (): Promise<Article[]> => {
  try {
    // Try to get real articles first
    const rssArticles = await fetchRssFeeds();
    
    // If we got articles, return 4 featured ones
    if (rssArticles.length > 0) {
      // Randomize the order to get different featured articles each time
      return shuffleArray(rssArticles).slice(0, 4);
    }
    
    // Otherwise fall back to mock data
    console.log('Falling back to mock featured articles');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Return first 4 articles as featured
    return mockArticles.slice(0, 4);
  } catch (error) {
    console.error('Error in fetchFeaturedArticles:', error);
    // Final fallback
    return mockArticles.slice(0, 4);
  }
};

export const fetchArticleById = async (id: string): Promise<Article | undefined> => {
  try {
    // First try to find the article in our mock articles
    const mockArticle = mockArticles.find(article => article.id === id);
    if (mockArticle) {
      return mockArticle;
    }
    
    // If not found in mock articles, get all articles from RSS feeds
    const allArticles = await fetchRssFeeds('all');
    return allArticles.find(article => article.id === id);
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    // Final fallback to mock articles
    return mockArticles.find(article => article.id === id);
  }
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
