
import { toast } from "@/components/ui/use-toast";

interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

// Default config for PostgreSQL running on Docker
const DEFAULT_CONFIG: DatabaseConfig = {
  host: 'localhost',
  port: 5432,
  database: 'newsdb',
  user: 'postgres',
  password: 'postgres'
};

let dbConfig: DatabaseConfig = DEFAULT_CONFIG;

// Function to test the database connection
export const testDatabaseConnection = async (config: DatabaseConfig = dbConfig): Promise<boolean> => {
  try {
    // In a real implementation, we would connect to the database here
    // Since we're in a browser environment, we'll just simulate this
    // We'd typically use a backend API endpoint to test the connection
    
    console.log('Testing database connection with config:', config);
    
    // Simulate API call to test connection
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For now, just assume connection is successful 
    toast({
      title: "Database Connection Successful",
      description: `Connected to PostgreSQL database '${config.database}' on ${config.host}:${config.port}`,
    });
    
    return true;
  } catch (error) {
    console.error('Error connecting to database:', error);
    
    toast({
      title: "Database Connection Failed",
      description: `Failed to connect to PostgreSQL database: ${error instanceof Error ? error.message : String(error)}`,
      variant: "destructive",
    });
    
    return false;
  }
};

// Function to set the database configuration
export const setDatabaseConfig = (config: Partial<DatabaseConfig>): DatabaseConfig => {
  dbConfig = { ...dbConfig, ...config };
  return dbConfig;
};

// Function to get the database configuration
export const getDatabaseConfig = (): DatabaseConfig => {
  return { ...dbConfig };
};

// To actually use PostgreSQL with this React application,
// we would need:
// 1. A backend API (Node.js, Express, Fastify, etc.) connected to PostgreSQL
// 2. API endpoints for CRUD operations
// 3. Additional database services on the frontend to interact with these endpoints

export interface SavedArticle {
  id: string;
  articleId: string;
  title: string;
  summary: string;
  category: string;
  saveDate: string;
  imageUrl?: string;
  sourceUrl?: string;
  sourceName?: string;
}

// Simulated saved articles storage (would be in PostgreSQL in reality)
const savedArticles: SavedArticle[] = [];

// Function to simulate saving an article to the database
export const saveArticleToDatabase = async (articleId: string, title: string, summary: string, category: string, imageUrl?: string, sourceUrl?: string, sourceName?: string): Promise<boolean> => {
  try {
    // In a real implementation, this would be an API call to save to PostgreSQL
    
    console.log('Saving article to database:', { articleId, title });
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newSavedArticle: SavedArticle = {
      id: `saved-${Date.now()}`,
      articleId,
      title,
      summary,
      category,
      saveDate: new Date().toISOString(),
      imageUrl,
      sourceUrl,
      sourceName
    };
    
    savedArticles.push(newSavedArticle);
    
    toast({
      title: "Article Saved",
      description: "The article has been saved to your database.",
    });
    
    return true;
  } catch (error) {
    console.error('Error saving article to database:', error);
    
    toast({
      title: "Error Saving Article",
      description: `Failed to save the article: ${error instanceof Error ? error.message : String(error)}`,
      variant: "destructive",
    });
    
    return false;
  }
};

// Function to get saved articles from the database
export const getSavedArticles = async (): Promise<SavedArticle[]> => {
  try {
    // In a real implementation, this would be an API call to fetch from PostgreSQL
    
    console.log('Getting saved articles from database');
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return [...savedArticles];
  } catch (error) {
    console.error('Error getting saved articles from database:', error);
    
    toast({
      title: "Error Getting Saved Articles",
      description: `Failed to retrieve saved articles: ${error instanceof Error ? error.message : String(error)}`,
      variant: "destructive",
    });
    
    return [];
  }
};

// Function to delete a saved article from the database
export const deleteSavedArticle = async (id: string): Promise<boolean> => {
  try {
    // In a real implementation, this would be an API call to delete from PostgreSQL
    
    console.log('Deleting saved article from database:', id);
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const index = savedArticles.findIndex(article => article.id === id);
    
    if (index !== -1) {
      savedArticles.splice(index, 1);
      
      toast({
        title: "Article Deleted",
        description: "The article has been removed from your saved articles.",
      });
      
      return true;
    } else {
      toast({
        title: "Article Not Found",
        description: "Could not find the article to delete.",
        variant: "destructive",
      });
      
      return false;
    }
  } catch (error) {
    console.error('Error deleting saved article from database:', error);
    
    toast({
      title: "Error Deleting Article",
      description: `Failed to delete the article: ${error instanceof Error ? error.message : String(error)}`,
      variant: "destructive",
    });
    
    return false;
  }
};
