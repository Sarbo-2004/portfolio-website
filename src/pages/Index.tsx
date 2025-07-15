import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Github, Linkedin, Dribbble, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "UI/UX Design",
    "Wireframes & Prototypes", 
    "Machine Learning",
    "NLP",
    "Python",
    "Figma",
    "TensorFlow",
    "Data Science",
    "Deep Learning",
    "React"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold font-poppins text-glow mb-6">
                Sarbojeet Mondal
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
                UI/UX Designer & Machine Learning Engineer
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Crafting smart, data-driven digital products with intuitive design and machine learning systems. 
                Available for freelance work and full-time opportunities.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/ui-ux">
                  <Button className="btn-primary w-full sm:w-auto">
                    View UI/UX Portfolio
                  </Button>
                </Link>
                <Link to="/data-ml">
                  <Button className="btn-secondary w-full sm:w-auto">
                    View Data & ML Projects
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a 
                  href="https://linkedin.com/in/sarbojeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/sarbojeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://dribbble.com/sarbojeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Dribbble size={24} />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden neon-border glow-effect">
                  <img 
                    src={profileImage} 
                    alt="Sarbojeet Mondal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card px-6 py-3 rounded-2xl neon-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
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
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold font-poppins mb-8">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Sarbojeet, passionate about designing intuitive interfaces and building machine learning systems. 
                With expertise in both UI/UX design and data science, I bridge the gap between beautiful user experiences 
                and intelligent backend systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Available for freelance UI/UX work and open to full-time opportunities in Data Science and AI. 
                Let's create something amazing together.
              </p>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={20} />
                <span className="text-muted-foreground">sarbojeet.mondal@email.com</span>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="skill-badge text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your next project? Get in touch and let's discuss how I can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-input border-border rounded-xl resize-none"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="btn-primary flex items-center space-x-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </Button>
                <Button type="button" className="btn-secondary">
                  Schedule a Call
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">sarbojeet.mondal@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins mb-4">Services</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded-xl neon-border">
                    <h4 className="font-medium text-primary">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">Starting at $500/project</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl neon-border">
                    <h4 className="font-medium text-primary">ML Development</h4>
                    <p className="text-sm text-muted-foreground">Hourly or project-based</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Sarbojeet Mondal. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a 
                href="https://linkedin.com/in/sarbojeet" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/sarbojeet" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://dribbble.com/sarbojeet" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
