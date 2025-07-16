import Navigation from "@/components/Navigation";
import { ExternalLink, Github, Figma, ArrowRight, Mail, Linkedin } from "lucide-react";

const UIUXPortfolio = () => {
  const projects = [
  {
    id: 1,
    title: "Lawyer Consultancy Website",
    description: "Designed and developed a responsive, SEO-friendly consultancy site for a law firm.",
    image: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Web", "Figma", "Client Project"],
    caseStudyLink: "https://samplewebsiterajandasgupta.vercel.app/",
  },
  {
    id: 2,
    title: "Blood Donation App UI",
    description: "Redesigned a blood donation app interface with improved navigation and accessibility.",
    image: "https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Mobile", "Figma", "Healthcare", "Client Project"],
    caseStudyLink: "https://drive.google.com/drive/folders/16gAHs9nH068lmwcOO1qUgslCzwcHjyk9?usp=drive_link",
  },
  {
    id: 3,
    title: "Giftzai Chatbot UI",
    description: "Designed a chatbot interface for personalized gift recommendations, enhancing interaction speed.",
    image: "https://plus.unsplash.com/premium_photo-1661331935029-a5ed25ea608b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lmdHN8ZW58MHx8MHx8fDA%3D",
    tags: ["Web", "Figma", "Chatbot", "Client Project"],
    caseStudyLink: "https://drive.google.com/file/d/1gyiDRdaBhQ9BVyNnOOL2z6dLv6pyZQlN/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Infosec Society Website UI",
    description: "Designed a community website for InfoSec Society showcasing events and resources.",
    image: "https://cdn.pixabay.com/photo/2020/08/20/05/23/neon-5502633_1280.jpg",
    tags: ["Web", "Figma", "Community", "Client Project"],
    caseStudyLink: "https://drive.google.com/drive/folders/1KoTvbzg_Oh0BH1XISXg-nJw7Vrb4X4-R?usp=drive_link",
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
  quote: "Very professional and good designing. Sarbojeet kept it simple and sober while meeting all our requirements.",
  author: "Rajan Dasgupta",
  role: "Lawyer",
  avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    // {
    //   quote: "He transformed our complex requirements into an intuitive interface that our customers love. The onboarding completion rate improved by 45%.",
    //   author: "Michael Chen",
    //   role: "CEO at FinStart",
    //   avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    // },
    // {
    //   quote: "Working with Sarbojeet was seamless. His designs reduced our support tickets by 28% and improved task completion times.",
    //   author: "David Wilson",
    //   role: "UX Manager at HealthPlus",
    //   avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    // }
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
                      See Design <ExternalLink size={14} className="ml-1.5" />
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