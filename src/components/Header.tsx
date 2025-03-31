
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Category, CategoryInfo } from '@/types/news';
import { getCategoryInfo } from '@/services/newsService';
import { 
  Brain, 
  Cpu, 
  BotIcon, 
  VrHeadset, 
  ChevronDown, 
  Menu, 
  X, 
  Search 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onCategoryChange: (category: Category) => void;
  currentCategory: Category;
}

const Header = ({ onCategoryChange, currentCategory }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories: { category: Category; label: string; icon: JSX.Element }[] = [
    { category: 'ai', label: 'AI', icon: <Brain className="h-4 w-4" /> },
    { category: 'hardware', label: 'Hardware', icon: <Cpu className="h-4 w-4" /> },
    { category: 'robotics', label: 'Robotics', icon: <BotIcon className="h-4 w-4" /> },
    { category: 'vrar', label: 'VR/AR', icon: <VrHeadset className="h-4 w-4" /> },
  ];

  const categoryInfo: CategoryInfo = getCategoryInfo(currentCategory);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="tech-gradient h-1"></div>
      <div className="interactive-bg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent tech-gradient">
                TechNexus
              </h1>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              <Button 
                variant="ghost" 
                className={currentCategory === 'all' ? 'bg-muted text-white' : 'text-muted-foreground'} 
                onClick={() => onCategoryChange('all')}
              >
                All News
              </Button>
              
              {categories.map(({ category, label, icon }) => (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`flex items-center ${currentCategory === category ? 'bg-muted text-white' : 'text-muted-foreground'}`}
                    >
                      <span className="flex items-center">
                        {icon}
                        <span className="ml-1">{label}</span>
                      </span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => onCategoryChange(category)}>
                      All {label} News
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Latest {label} Developments
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Top {label} Companies
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
              
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 animate-fade-in">
              <Button 
                variant="ghost" 
                className={`w-full justify-start mb-2 ${currentCategory === 'all' ? 'bg-muted' : ''}`}
                onClick={() => {
                  onCategoryChange('all');
                  setMobileMenuOpen(false);
                }}
              >
                All News
              </Button>
              
              {categories.map(({ category, label, icon }) => (
                <Button 
                  key={category}
                  variant="ghost" 
                  className={`w-full justify-start mb-2 ${currentCategory === category ? 'bg-muted' : ''}`}
                  onClick={() => {
                    onCategoryChange(category);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span className="flex items-center">
                    {icon}
                    <span className="ml-2">{label}</span>
                  </span>
                </Button>
              ))}
              
              <Button variant="ghost" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </nav>
          )}
        </div>
      </div>
      
      {/* Category header */}
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold">
            {categoryInfo.label}
          </h2>
          <p className="text-sm text-muted-foreground">
            {categoryInfo.description}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
