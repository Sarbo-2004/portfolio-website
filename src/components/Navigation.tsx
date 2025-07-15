import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Dribbble } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Profile & Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Sarbojeet Mondal" 
                className="w-10 h-10 rounded-full object-cover neon-border transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
            </div>
            <div>
              <h2 className="font-poppins font-semibold text-foreground">Sarbojeet Mondal</h2>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Available for work</span>
              </div>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/ui-ux" 
              className={`font-medium transition-colors ${
                isActive('/ui-ux') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              UI/UX Portfolio
            </Link>
            <Link 
              to="/data-ml" 
              className={`font-medium transition-colors ${
                isActive('/data-ml') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Data & ML
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/sarbojeet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/sarbojeet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;