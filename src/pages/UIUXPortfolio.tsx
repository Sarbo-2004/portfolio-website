import Navigation from "@/components/Navigation";
import { ExternalLink, Github, Figma, ArrowRight, Mail, Linkedin } from "lucide-react";

const UIUXPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce App",
      description: "Redesigned shopping experience increasing conversions by 32%",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Mobile", "Figma", "UX Research"],
      caseStudyLink: "#",
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description: "Personalized workout app with 92% user satisfaction",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["iOS", "User Testing", "Prototyping"],
      caseStudyLink: "#",
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "Data visualization platform for investment analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Web", "Data Viz", "Responsive"],
      caseStudyLink: "#",
    },
    {
      id: 4,
      title: "Medical Portal",
      description: "Secure patient management system for clinics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Healthcare", "WCAG", "Web App"],
      caseStudyLink: "#",
    }
  ];

  const processSteps = [
    {
      title: "Discover",
      description: "Research & analysis",
      icon: <Figma size={16} className="text-primary" />
    },
    {
      title: "Define",
      description: "Requirements & flows",
      icon: <Figma size={16} className="text-primary" />
    },
    {
      title: "Design",
      description: "Mockups & prototypes",
      icon: <Figma size={16} className="text-primary" />
    },
    {
      title: "Deliver",
      description: "Testing & handoff",
      icon: <Figma size={16} className="text-primary" />
    }
  ];

  const testimonials = [
    {
      quote: "Sarbojeet's redesign increased our conversion rate by 32% while improving our NPS score. His attention to detail is exceptional.",
      author: "Sarah Johnson",
      role: "Product Lead at TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "He transformed our complex requirements into an intuitive interface that our customers love. The onboarding completion rate improved by 45%.",
      author: "Michael Chen",
      role: "CEO at FinStart",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Working with Sarbojeet was seamless. His designs reduced our support tickets by 28% and improved task completion times.",
      author: "David Wilson",
      role: "UX Manager at HealthPlus",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="mt-24 pt-16 pb-12 px-4 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-14 text-center">
          <h1 className="text-4xl font-bold font-poppins mb-3 text-glow">
            Web & <span className="text-primary">App Designer</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I design intuitive digital experiences that solve real user problems and drive business growth
          </p>
          <div className="flex gap-3 justify-center">
            <a href="#work" className="btn-primary text-sm px-4 py-2">
              View Projects
            </a>
            <a href="#contact" className="btn-outline text-sm px-4 py-2">
              Contact Me
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mb-16">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Selected Work</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div key={project.id} className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <a href={project.caseStudyLink} className="text-white text-sm font-medium flex items-center">
                      Case Study <ExternalLink size={14} className="ml-1.5" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1.5">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Design Approach</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-card p-4 rounded-lg border border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Client Feedback</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card p-5 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-card rounded-xl p-6 md:p-8 border border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-3">Let's Build Something Great</h2>
            <p className="text-muted-foreground mb-6">
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="mailto:sarbojeet.aug.04@gmail.com" 
                className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm"
              >
                <Mail size={16} className="mr-2" />
                Get in Touch
              </a>
              <a 
                href="https://linkedin.com/in/sarbojeet-soe-mondal-data-scientist"
                target="_blank"
                className="btn-outline inline-flex items-center justify-center px-5 py-2.5 text-sm"
              >
                <Linkedin size={16} className="mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-3 sm:mb-0">
            © {new Date().getFullYear()} Sarbojeet Mondal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/Sarbo-2004/" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/sarbojeet-soe-mondal-data-scientist" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UIUXPortfolio;