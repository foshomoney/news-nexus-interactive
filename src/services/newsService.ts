import { Article, Category, FeedSource } from '../types/news';

// RSS feed sources (with reliable working feeds)
export const feedSources: FeedSource[] = [
  // General Technology News
  {
    id: 'theverge',
    name: 'The Verge',
    url: 'https://www.theverge.com/rss/index.xml',
    category: 'all'
  },
  {
    id: 'wired',
    name: 'Wired',
    url: 'https://www.wired.com/feed/rss',
    category: 'all'
  },
  {
    id: 'techcrunch',
    name: 'TechCrunch',
    url: 'https://techcrunch.com/feed/',
    category: 'all'
  },
  {
    id: 'arstechnica',
    name: 'Ars Technica',
    url: 'https://feeds.arstechnica.com/arstechnica/index',
    category: 'all'
  },
  {
    id: 'cnet',
    name: 'CNET',
    url: 'https://www.cnet.com/rss/news/',
    category: 'all'
  },
  {
    id: 'engadget',
    name: 'Engadget',
    url: 'https://www.engadget.com/rss.xml',
    category: 'all'
  },
  {
    id: 'zdnet',
    name: 'ZDNet',
    url: 'https://www.zdnet.com/news/rss.xml',
    category: 'all'
  },
  {
    id: 'mashable',
    name: 'Mashable',
    url: 'https://mashable.com/feeds/rss/all',
    category: 'all'
  },
  {
    id: 'techradar',
    name: 'TechRadar',
    url: 'https://www.techradar.com/rss',
    category: 'all'
  },
  {
    id: 'gigaom',
    name: 'GigaOM',
    url: 'https://gigaom.com/feed/',
    category: 'all'
  },
  
  // Hardware News
  {
    id: 'tomshardware',
    name: 'Tom\'s Hardware',
    url: 'https://www.tomshardware.com/feeds/all',
    category: 'hardware'
  },
  {
    id: 'anandtech',
    name: 'AnandTech',
    url: 'https://www.anandtech.com/rss/',
    category: 'hardware'
  },
  {
    id: 'pcworld',
    name: 'PCWorld',
    url: 'https://www.pcworld.com/index.rss',
    category: 'hardware'
  },
  {
    id: 'macrumors',
    name: 'MacRumors',
    url: 'https://feeds.macrumors.com/MacRumors-All',
    category: 'hardware'
  },
  {
    id: 'androidauthority',
    name: 'Android Authority',
    url: 'https://www.androidauthority.com/feed/',
    category: 'hardware'
  },
  {
    id: 'digitaltrends',
    name: 'Digital Trends',
    url: 'https://www.digitaltrends.com/feed/',
    category: 'hardware'
  },
  {
    id: 'xda',
    name: 'XDA Developers',
    url: 'https://www.xda-developers.com/feed/',
    category: 'hardware'
  },
  {
    id: '9to5mac',
    name: '9to5Mac',
    url: 'https://9to5mac.com/feed/',
    category: 'hardware'
  },
  {
    id: '9to5google',
    name: '9to5Google',
    url: 'https://9to5google.com/feed/',
    category: 'hardware'
  },
  {
    id: 'gsmarena',
    name: 'GSMArena',
    url: 'https://www.gsmarena.com/rss-news-reviews.php3',
    category: 'hardware'
  },
  {
    id: 'pcgamer',
    name: 'PC Gamer',
    url: 'https://www.pcgamer.com/rss/',
    category: 'hardware'
  },
  {
    id: 'overclockers',
    name: 'Overclockers',
    url: 'https://www.overclockers.com/feed/',
    category: 'hardware'
  },
  
  // AI News
  {
    id: 'venturebeat_ai',
    name: 'VentureBeat AI',
    url: 'https://venturebeat.com/category/ai/feed/',
    category: 'ai'
  },
  {
    id: 'artificialintelligence_mit',
    name: 'MIT AI News',
    url: 'https://news.mit.edu/topic/artificial-intelligence2-rss.xml',
    category: 'ai'
  },
  {
    id: 'openai',
    name: 'OpenAI Blog',
    url: 'https://openai.com/blog/rss/',
    category: 'ai'
  },
  {
    id: 'google_ai',
    name: 'Google AI Blog',
    url: 'http://feeds.feedburner.com/blogspot/gJZg',
    category: 'ai'
  },
  {
    id: 'deeplearning',
    name: 'Deep Learning News',
    url: 'https://www.deeplearning.ai/feed/',
    category: 'ai'
  },
  {
    id: 'kaggle',
    name: 'Kaggle',
    url: 'https://medium.com/feed/kaggle-blog',
    category: 'ai'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    url: 'https://pytorch.org/feed.xml',
    category: 'ai'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    url: 'https://blog.tensorflow.org/feeds/posts/default?alt=rss',
    category: 'ai'
  },
  {
    id: 'microsoft_ai',
    name: 'Microsoft AI Blog',
    url: 'https://blogs.microsoft.com/ai/feed/',
    category: 'ai'
  },
  {
    id: 'ibm_research',
    name: 'IBM Research',
    url: 'https://www.ibm.com/blogs/research/feed/',
    category: 'ai'
  },
  {
    id: 'nvidia_ai',
    name: 'NVIDIA AI Blog',
    url: 'https://blogs.nvidia.com/blog/category/deep-learning/feed/',
    category: 'ai'
  },
  {
    id: 'ml_mastering',
    name: 'Machine Learning Mastery',
    url: 'https://machinelearningmastery.com/feed/',
    category: 'ai'
  },
  {
    id: 'towards_ai',
    name: 'Towards AI',
    url: 'https://pub.towardsai.net/feed',
    category: 'ai'
  },
  
  // Robotics News
  {
    id: 'ieee_spectrum_robotics',
    name: 'IEEE Spectrum Robotics',
    url: 'https://spectrum.ieee.org/rss/robotics',
    category: 'robotics'
  },
  {
    id: 'therobotreport',
    name: 'The Robot Report',
    url: 'https://www.therobotreport.com/feed/',
    category: 'robotics'
  },
  {
    id: 'roboticsandautomationnews',
    name: 'Robotics & Automation News',
    url: 'https://roboticsandautomationnews.com/feed/',
    category: 'robotics'
  },
  {
    id: 'robohub',
    name: 'Robohub',
    url: 'https://robohub.org/feed/',
    category: 'robotics'
  },
  {
    id: 'robots',
    name: 'Robots.net',
    url: 'https://robots.net/feed/',
    category: 'robotics'
  },
  {
    id: 'bostondynamics',
    name: 'Boston Dynamics Blog',
    url: 'https://bostondynamics.com/resources/feed/',
    category: 'robotics'
  },
  {
    id: 'dronelife',
    name: 'DroneLife',
    url: 'https://dronelife.com/feed/',
    category: 'robotics'
  },
  {
    id: 'thedronegirl',
    name: 'The Drone Girl',
    url: 'https://thedronegirl.com/feed/',
    category: 'robotics'
  },
  {
    id: 'universal_robots',
    name: 'Universal Robots Blog',
    url: 'https://blog.universal-robots.com/rss.xml',
    category: 'robotics'
  },
  {
    id: 'robotiq',
    name: 'Robotiq Blog',
    url: 'https://blog.robotiq.com/rss.xml',
    category: 'robotics'
  },
  {
    id: 'nasa_jpl',
    name: 'NASA JPL',
    url: 'https://www.jpl.nasa.gov/rss.xml',
    category: 'robotics'
  },
  {
    id: 'eniyarobotics',
    name: 'Eniya Robotics',
    url: 'https://eniyarobotics.com/feed/',
    category: 'robotics'
  },
  
  // VR/AR News
  {
    id: 'roadtovr',
    name: 'Road to VR',
    url: 'https://www.roadtovr.com/feed/',
    category: 'vrar'
  },
  {
    id: 'uploadvr',
    name: 'UploadVR',
    url: 'https://uploadvr.com/feed/',
    category: 'vrar'
  },
  {
    id: 'vrscout',
    name: 'VRScout',
    url: 'https://vrscout.com/feed/',
    category: 'vrar'
  },
  {
    id: 'arvr_journey',
    name: 'AR/VR Journey',
    url: 'https://arvrjourney.com/feed',
    category: 'vrar'
  },
  {
    id: 'arpost',
    name: 'AR Post',
    url: 'https://arpost.co/feed/',
    category: 'vrar'
  },
  {
    id: 'nextreality',
    name: 'Next Reality',
    url: 'https://next.reality.news/feed/',
    category: 'vrar'
  },
  {
    id: 'vrstudio',
    name: 'VR/AR Studio',
    url: 'https://virtualrealitytimes.com/feed/',
    category: 'vrar'
  },
  {
    id: 'vrgame',
    name: 'VR Game',
    url: 'https://vrgame.jp/feed/',
    category: 'vrar'
  },
  {
    id: 'unity3d',
    name: 'Unity Blog',
    url: 'https://blog.unity.com/feed',
    category: 'vrar'
  },
  {
    id: 'unrealengine',
    name: 'Unreal Engine',
    url: 'https://www.unrealengine.com/en-US/feed',
    category: 'vrar'
  },
  {
    id: 'oculus',
    name: 'Meta Quest Blog',
    url: 'https://www.oculus.com/blog/rss/',
    category: 'vrar'
  },
  {
    id: 'vive',
    name: 'HTC Vive Blog',
    url: 'https://blog.vive.com/us/feed/',
    category: 'vrar'
  },
  {
    id: 'microsoft_mixed_reality',
    name: 'Microsoft Mixed Reality',
    url: 'https://docs.microsoft.com/en-us/windows/mixed-reality/feed.xml',
    category: 'vrar'
  }
];

// RSS feed cache implementation
interface CacheItem {
  data: Article[];
  timestamp: number;
}

// Cache expiration time in milliseconds (5 minutes)
const CACHE_EXPIRATION = 5 * 60 * 1000;

// In-memory cache object
const rssCache: Record<string, CacheItem> = {};

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

// Function to parse RSS feeds with more reliable CORS proxies
export const fetchRssFeeds = async (category: Category = 'all'): Promise<Article[]> => {
  try {
    // Check cache first
    const cacheKey = `rss-${category}`;
    const cachedData = rssCache[cacheKey];
    
    // Return cached data if it's still valid (reduced cache time to 2 minutes for testing)
    const REDUCED_CACHE_TIME = 2 * 60 * 1000;
    if (cachedData && (Date.now() - cachedData.timestamp) < REDUCED_CACHE_TIME) {
      console.log('Using cached RSS feeds for category:', category);
      return cachedData.data;
    }
    
    // If not in cache or expired, fetch from sources
    console.log('Fetching fresh RSS feeds for category:', category);
    
    // Array of CORS proxies to try if one fails
    const corsProxies = [
      'https://api.allorigins.win/raw?url=',
      'https://corsproxy.io/?',
      'https://cors-anywhere.herokuapp.com/'
    ];
    
    // Determine which feeds to fetch based on category
    const feedsToFetch = category === 'all' 
      ? feedSources 
      : feedSources.filter(feed => feed.category === category || feed.category === 'all');
    
    // Shuffle the feeds to randomize which ones we fetch
    const shuffledFeeds = shuffleArray(feedsToFetch);
    
    // Limit to 8 feeds for more content without overloading
    const limitedFeeds = shuffledFeeds.slice(0, 8);
    
    console.log('Fetching RSS feeds:', limitedFeeds.map(f => f.name));
    
    // Fetch feeds concurrently with timeout and retry logic
    const feedPromises = limitedFeeds.map(async (feed) => {
      // Try each proxy in order until one works
      for (const corsProxy of corsProxies) {
        try {
          // Add timeout to avoid hanging requests (even faster)
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout (faster)
          
          const response = await fetch(`${corsProxy}${encodeURIComponent(feed.url)}`, {
            signal: controller.signal,
            // Add cache control headers
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          });
          
          clearTimeout(timeoutId);
          
          if (!response.ok) {
            console.error(`Failed to fetch ${feed.name} with ${corsProxy}: ${response.status}`);
            continue; // Try next proxy
          }
          
          const xmlText = await response.text();
          
          // Parse XML safely
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
          
          // Check if parsing failed
          const parserError = xmlDoc.querySelector('parsererror');
          if (parserError) {
            console.error(`XML parsing error for ${feed.name}:`, parserError.textContent);
            continue; // Try next proxy
          }
          
          // Extract items (may vary depending on RSS format)
          const items = Array.from(xmlDoc.querySelectorAll('item'));
          
          if (items.length === 0) {
            // Try alternate tag names used in some feeds
            const entries = Array.from(xmlDoc.querySelectorAll('entry'));
            if (entries.length > 0) {
              return parseAtomEntries(entries, feed);
            }
            console.warn(`No items found in ${feed.name} feed`);
            continue; // Try next proxy
          }
          
          return parseRssItems(items, feed);
          
        } catch (error) {
          console.error(`Error fetching RSS feed for ${feed.name} with ${corsProxy}:`, error);
          // Continue to try next proxy
        }
      }
      
      // If all proxies failed, return empty array
      console.error(`All proxies failed for ${feed.name}`);
      return [];
    });
    
    // Wait for all feeds to be fetched and parsed
    const allArticles = await Promise.all(feedPromises);
    
    // Flatten array and sort by publish date (newest first)
    const results = allArticles
      .flat()
      .filter(article => article.title && article.title.trim() !== '') // Filter out empty titles
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 24); // Increased to 24 articles for more content
      
    // Store in cache
    rssCache[cacheKey] = {
      data: results,
      timestamp: Date.now()
    };
    
    return results;
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    // Fall back to mock articles
    return fetchArticles(category);
  }
};

// Parse RSS items (RSS 2.0 format)
function parseRssItems(items: Element[], feed: FeedSource): Article[] {
  return items.map((item, index) => {
    // Extract content (handling different RSS formats)
    const title = item.querySelector('title')?.textContent?.trim() || 'Untitled';
    const link = item.querySelector('link')?.textContent?.trim() || '#';
    
    // Try different content tags that might exist
    let content = 
      item.querySelector('content\\:encoded')?.textContent || 
      item.querySelector('description')?.textContent ||
      item.querySelector('summary')?.textContent || '';
    
    // Clean content - remove CDATA sections if present
    content = content.replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1');
    
    // Extract the first paragraph as summary, but make it longer
    let summary = '';
    
    if (content) {
      // Try to get a reasonable summary (first 2-3 sentences or 250 chars)
      const textContent = content.replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
      const sentences = textContent.split(/[.!?]+/);
      summary = sentences.slice(0, 3).join('. ').trim();
      
      if (summary.length > 250) {
        summary = summary.substring(0, 250) + '...';
      } else if (summary.length === 0) {
        summary = title; // Use title as fallback
      }
      
      // Ensure it ends with punctuation
      if (!summary.match(/[.!?]$/)) {
        summary += '.';
      }
    }
    
    // Try to find image in content
    let imageUrl = ''; // Default to empty, will set placeholder later if needed
    
    // Look for media:content or enclosure tags for images
    const mediaContent = item.querySelector('media\\:content, enclosure');
    if (mediaContent && mediaContent.getAttribute('url')) {
      imageUrl = mediaContent.getAttribute('url') || '';
    } else if (content) {
      // Try to extract image from content HTML if exists
      const imgRegex = /<img[^>]+src="([^">]+)"/i;
      const imgMatch = content.match(imgRegex);
      if (imgMatch && imgMatch[1]) {
        imageUrl = imgMatch[1];
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
}

// Parse Atom entries (Atom format)
function parseAtomEntries(entries: Element[], feed: FeedSource): Article[] {
  return entries.map((entry, index) => {
    // Extract content
    const title = entry.querySelector('title')?.textContent?.trim() || 'Untitled';
    
    // Get link (Atom uses href attribute)
    let link = '#';
    const linkElement = entry.querySelector('link');
    if (linkElement) {
      link = linkElement.getAttribute('href') || '#';
    }
    
    // Get content
    let content = 
      entry.querySelector('content')?.textContent || 
      entry.querySelector('summary')?.textContent || '';
    
    // Clean content
    content = content.replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1');
    
    // Extract summary
    let summary = '';
    
    if (content) {
      // Try to get a reasonable summary
      const textContent = content.replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
      const sentences = textContent.split(/[.!?]+/);
      summary = sentences.slice(0, 3).join('. ').trim();
      
      if (summary.length > 250) {
        summary = summary.substring(0, 250) + '...';
      } else if (summary.length === 0) {
        summary = title; // Use title as fallback
      }
      
      // Ensure it ends with punctuation
      if (!summary.match(/[.!?]$/)) {
        summary += '.';
      }
    }
    
    // Try to find image
    let imageUrl = '';
    
    // Check for thumbnail
    const mediaGroup = entry.querySelector('media\\:group');
    if (mediaGroup) {
      const mediaThumbnail = mediaGroup.querySelector('media\\:thumbnail');
      if (mediaThumbnail) {
        imageUrl = mediaThumbnail.getAttribute('url') || '';
      }
    } else if (content) {
      // Try to extract image from content
      const imgRegex = /<img[^>]+src="([^">]+)"/i;
      const imgMatch = content.match(imgRegex);
      if (imgMatch && imgMatch[1]) {
        imageUrl = imgMatch[1];
      }
    }
    
    // Get published date
    const published = entry.querySelector('published')?.textContent || 
                     entry.querySelector('updated')?.textContent || 
                     new Date().toUTCString();
    
    // Format date
    let publishDate;
    try {
      publishDate = new Date(published).toLocaleDateString('en-US', {
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
}

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
    .replace(/on\w+="[^"]*"/gi, '')
    // Fix relative URLs for images
    .replace(/src="\/\//g, 'src="https://')
    .replace(/src="\//g, (match, offset, string) => {
      // Try to determine domain from content
      const domainMatch = string.match(/https?:\/\/([^/]+)/);
      if (domainMatch && domainMatch[0]) {
        return `src="${domainMatch[0]}/`;
      }
      return match;
    });
  
  return sanitized;
}

// In a real implementation, this would fetch and parse RSS feeds
export const fetchArticles = async (category: Category = 'all'): Promise<Article[]> => {
  try {
    // Check cache first
    const cacheKey = `articles-${category}`;
    const cachedData = rssCache[cacheKey];
    
    // Return cached data if it's still valid (reduced cache time)
    const REDUCED_CACHE_TIME = 2 * 60 * 1000; // 2 minutes for testing
    if (cachedData && (Date.now() - cachedData.timestamp) < REDUCED_CACHE_TIME) {
      console.log('Using cached articles for category:', category);
      return cachedData.data;
    }
    
    // First try to fetch real RSS feeds
    const rssArticles = await fetchRssFeeds(category);
    
    // If we got articles, cache and return them
    if (rssArticles.length > 0) {
      // Store in cache
      rssCache[cacheKey] = {
        data: rssArticles,
        timestamp: Date.now()
      };
      return rssArticles;
    }
    
    // Otherwise fall back to mock data
    console.log('Falling back to mock articles');
    
    // Simulate API delay (much shorter)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const mockData = category === 'all' ? mockArticles : mockArticles.filter(article => article.category === category);
    
    // Store mock data in cache too
    rssCache[cacheKey] = {
      data: mockData,
      timestamp: Date.now()
    };
    
    return mockData;
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
    // Check cache first
    const cacheKey = 'featured-articles';
    const cachedData = rssCache[cacheKey];
    
    // Return cached data if it's still valid (reduced cache time)
    const REDUCED_CACHE_TIME = 2 * 60 * 1000; // 2 minutes for testing
    if (cachedData && (Date.now() - cachedData.timestamp) < REDUCED_CACHE_TIME) {
      console.log('Using cached featured articles');
      return cachedData.data;
    }
    
    // Try to get real articles first
    const rssArticles = await fetchRssFeeds();
    
    // If we got articles, cache and return 6 featured ones
    if (rssArticles.length > 0) {
      // Only get articles with images for the carousel
      const articlesWithImages = rssArticles.filter(article => article.imageUrl && article.imageUrl !== '');
      
      // If we have enough articles with images, use those
      const featuredArticles = articlesWithImages.length >= 6 
        ? articlesWithImages.slice(0, 6)
        : rssArticles.slice(0, 6);
      
      // Store in cache
      rssCache[cacheKey] = {
        data: featuredArticles,
        timestamp: Date.now()
      };
      
      return featuredArticles;
    }
    
    // Otherwise fall back to mock data
    console.log('Falling back to mock featured articles');
    
    // Simulate API delay (shorter)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Return first 6 articles as featured
    const mockFeatured = mockArticles.slice(0, 6);
    
    // Store in cache
    rssCache[cacheKey] = {
      data: mockFeatured,
      timestamp: Date.now()
    };
    
    return mockFeatured;
  } catch (error) {
    console.error('Error in fetchFeaturedArticles:', error);
    // Final fallback
    return mockArticles.slice(0, 6);
  }
};

export const fetchArticleById = async (id: string): Promise<Article | undefined> => {
  try {
    // Check cache first for all articles (potential optimization)
    const allCacheKeys = Object.keys(rssCache).filter(key => 
      key.startsWith('articles-') || key.startsWith('rss-') || key.startsWith('featured-')
    );
    
    // Look through all cached article collections
    for (const cacheKey of allCacheKeys) {
      const foundArticle = rssCache[cacheKey]?.data?.find(article => article.id === id);
      if (foundArticle) {
        console.log('Found article in cache:', id);
        return foundArticle;
      }
    }
    
    // If not found in cache, first check mock articles
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
