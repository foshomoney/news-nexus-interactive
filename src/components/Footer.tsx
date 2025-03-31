
import { Github, Twitter, Facebook, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TechNexus</h3>
            <p className="text-sm text-muted-foreground">
              Your source for the latest technology news, covering AI, Hardware, Robotics, and VR/AR developments.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Artificial Intelligence</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Hardware</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Robotics</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">VR/AR</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Rss size={20} />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-muted px-3 py-2 text-sm rounded-l-md w-full" 
                />
                <button className="bg-primary text-white px-3 py-2 text-sm rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechNexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
