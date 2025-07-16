import { Link } from "react-router-dom";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const skills = [
    "UI Design",
    "UX Design",
    "NLP",
    "Python",
    "Figma",
    "TensorFlow",
    "Deep Learning",
    "Machine Learning",
    "Wireframing & Prototyping",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-48 pb-8 px-4 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold font-poppins text-glow mb-4">
                Sarbojeet Soe Mondal
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
                UI/UX Designer & Machine Learning Engineer
              </h2>
              <p className="text-m text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Crafting smart, data-driven digital products with intuitive design and machine learning systems. Available for freelance work and full-time opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/ui-ux">
                  <Button className="btn-primary w-full sm:w-auto glow-effect">View UI/UX Portfolio</Button>
                </Link>
                <Link to="/data-ml">
                  <Button className="btn-secondary w-full sm:w-auto glow-effect">View Data & ML Projects</Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <a href="https://linkedin.com/in/sarbojeet-soe-mondal-data-scientist" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Sarbo-2004/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-60 sm:w-80 h-60 sm:h-80 rounded-full overflow-hidden neon-border glow-effect mx-auto lg:mx-0">
                  <img src={profileImage} alt="Sarbojeet Mondal" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card px-6 py-3 rounded-2xl neon-border glow-effect">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse glow-effect"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-poppins mb-8 text-glow">About Me</h2>
              <p className="text-m text-muted-foreground leading-relaxed mb-6">
                I'm Sarbojeet, passionate about designing intuitive interfaces and building machine learning systems. With expertise in both UI/UX design and data science, I bridge the gap between beautiful user experiences and intelligent backend systems.
              </p>
              <p className="text-m text-muted-foreground leading-relaxed mb-8">
                Available for freelance UI/UX work and open to full-time opportunities in Data Science and AI. Let's create something amazing together.
              </p>
              <div className="flex items-center space-x-4 glow-effect">
                <Mail className="text-primary" size={20} />
                <span className="text-muted-foreground">sarbojeet.aug.04@gmail.com</span>
              </div>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold font-poppins mb-8 items-center justify-center text-center text-glow">Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={skill} className="skill-badge text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-card/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4 text-glow">Let's Work Together</h2>
            <p className="text-m text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Get in touch and let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card p-6 rounded-xl hover:bg-card/50 transition-all ">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-medium text-lg mb-1">Email Me</h3>
                  <p className="text-muted-foreground truncate">sarbojeet.aug.04@gmail.com</p>
                  <a 
                    href="mailto:sarbojeet.aug.04@gmail.com" 
                    className="inline-block mt-3 text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Send Message <span>→</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl hover:bg-card/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-medium text-lg mb-1">Call Me</h3>
                  <p className="text-muted-foreground truncate">+91 8967171690</p>
                  <a 
                    href="tel:+918967171690" 
                    className="inline-block mt-3 text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Call Now <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or connect with me on</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/sarbojeet-soe-mondal-data-scientist" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-primary/10 transition-colors glow-effect"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-muted-foreground hover:text-primary" size={20} />
              </a>
              <a 
                href="https://github.com/Sarbo-2004/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-primary/10 transition-colors glow-effect"
                aria-label="GitHub"
              >
                <Github className="text-muted-foreground hover:text-primary" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm glow-effect">© {new Date().getFullYear()} Sarbojeet Mondal. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/in/sarbojeet-soe-mondal-data-scientist" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Sarbo-2004/" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;