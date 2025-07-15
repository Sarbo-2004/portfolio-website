import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";

const UIUXPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "Complete UI/UX redesign for a fashion e-commerce platform with focus on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Mobile Design", "E-commerce", "User Research"],
      caseStudyLink: "#",
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      description: "Modern dashboard design for financial data visualization with real-time analytics and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Dashboard", "FinTech", "Data Visualization"],
      caseStudyLink: "#",
    },
    {
      id: 3,
      title: "Healthcare Platform",
      description: "Patient management system with focus on accessibility and ease of use for healthcare professionals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Healthcare", "Accessibility", "Web App"],
      caseStudyLink: "#",
    },
  ];

  const testimonials = [
    {
      quote: "Sarbojeet delivered exceptional UI/UX work that exceeded our expectations. His attention to detail and user-centered approach made all the difference.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
    },
    {
      quote: "Working with Sarbojeet was a pleasure. He understood our vision and translated it into beautiful, functional designs.",
      author: "Mike Chen",
      role: "Startup Founder",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-glow mb-6">
              UI/UX Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting intuitive digital experiences that delight users and drive business results
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden neon-border card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.caseStudyLink}
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span className="text-sm font-medium">View Case Study</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="bg-card rounded-2xl p-8 neon-border animate-fade-in">
            <h2 className="text-3xl font-bold font-poppins text-center mb-12">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <blockquote className="text-lg text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UIUXPortfolio;