import Navigation from "@/components/Navigation";
import { Github, ExternalLink, Laptop, Search,Activity, SearchCheck,FileText, Apple, Cpu, Network,Database, Code, Linkedin, Sparkles } from "lucide-react";

const DataMLPortfolio = () => {
  const projects = [
    {
  id: 1,
  title: "YouTube-Style Personalized Recommendation System",
  description: "Engineered a multi-stage recommendation engine using softmax-based candidate generation and user watch history.",
  techStack: ["Python", "Flask", "TensorFlow", "Softmax", "Amazon Dataset"],
  githubLink: "https://github.com/Sarbo-2004/Personalised-recommendation-feed-system", // Replace if needed
  demoLink: "#", // Update if a live demo is available
  impact: "Delivered personalized top-N recommendations using cold-started watch sessions and deep learning.",
  icon: <Sparkles size={20} className="text-primary" />,
},
    
    {
      id: 2,
      title: "Search Relevance System and Recommendation Engine",
    description: "Built a scalable NLP-powered product search engine combining BM25 and SBERT.",
    techStack: ["Python", "FastAPI", "BM25", "SBERT", "Amazon Dataset"],
    githubLink: "https://github.com/Sarbo-2004/search-relevance-system",
    demoLink: "#",
    impact: "Achieved highly relevant top-5 results ready for LLM query rewriting.",
    icon: <SearchCheck size={20} className="text-primary" />,
    },
    {
      id: 3,
      title: "Laptop Price Prediction & Recommender",
    description: "Developed ML models to predict laptop prices and recommend options using Streamlit.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "FastAPI"],
    githubLink: "https://github.com/Sarbo-2004/Laptop-price-predictor",
    demoLink: "https://laptop-tool.streamlit.app/",
    impact: "Streamlined purchasing decisions through accurate recommendations.",
    icon: <Laptop size={20} className="text-primary" />
    },
    {
      id: 4,
       title: "Freelancer Lead Generation & UI/UX Audit Tool",
    description: "AI-powered tool for freelancers using FastAPI, SerpAPI, Playwright, and Gemini for automated lead scraping and GenAI analysis.",
    techStack: ["Python", "FastAPI", "SerpAPI", "Playwright", "Gemini API"],
    githubLink: "https://github.com/Sarbo-2004/Freelancer_lead_tool",
    demoLink: "#",
    impact: "Boosted outreach efficiency through ML-driven and GEN-AI UI/UX insights.",
    icon: <Search size={20} className="text-primary" />
    },
    {
      id: 5,
      title: "Lung Cancer Classification",
    description: "Built and optimized a CNN model classifying lung cancer images with 94% accuracy.",
    techStack: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    githubLink: "https://github.com/Sarbo-2004/Lung_cancer_Detection",
    demoLink: "#",
    impact: "Demonstrated AI-assisted screening with high diagnostic precision.",
    icon: <Activity size={20} className="text-primary" />
    },
    
    {
      id: 6,
      title: "Resume Personalizer",
    description: "Automated tool that tailors resumes for specific job descriptions using NLP and keyword extraction.",
    techStack: ["Python", "Spacy", "Streamlit", "OpenAI API"],
    githubLink: "https://github.com/Sarbo-2004/AI-HR_assistant/tree/main/resume_personalizer",
    demoLink: "#",
    impact: "Reduced manual resume editing time for job applications.",
    icon: <FileText size={20} className="text-primary" />,
    },
    {
      id: 7,
      title: "Diet Recommendation System",
    description: "AI-driven system that suggests personalized diet plans based on user health profiles.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    githubLink: "https://github.com/Sarbo-2004/Personalized-Diet-recomomendation",
    demoLink: "#",
    impact: "Enhanced health plan personalization with smart recommendations.",
    icon: <Apple size={20} className="text-primary" />,
    }
  ];

  const expertiseCategories = [
    {
      name: "Machine Learning",
      skills: ["Scikit-learn", "XGBoost", "Random Forest", "SVM"],
      icon: <Cpu size={16} className="text-primary" />
    },
    {
      name: "Deep Learning",
      skills: ["TensorFlow", "PyTorch", "Keras", "Neural Networks"],
      icon: <Network size={16} className="text-primary" />
    },
    {
      name: "NLP",
      skills: ["BERT", "SBERT", "Transformers", "spaCy"],
      icon: <Database size={16} className="text-primary" />
    },
    {
      name: "Tools & Cloud",
      skills: ["AWS", "Docker", "Jupyter", "Git"],
      icon: <Code size={16} className="text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-12 px-4 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mt-24 mb-14 text-center">
          <h1 className="text-3xl font-bold font-poppins mb-3 text-glow">
            Data Scientist & <span className="text-primary">ML Engineer</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Building intelligent systems that extract insights and solve complex problems through data
          </p>
          <div className="flex gap-3 justify-center">
            <a href="#work" className="btn-primary text-sm px-4 py-2">
              View Projects
            </a>
            <a href="#expertise" className="btn-outline text-sm px-4 py-2">
              My Expertise
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mb-16">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Data Projects</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      className="btn-outline text-xs px-3 py-1.5 flex items-center"
                    >
                      <Github size={14} className="mr-1.5" />
                      Code
                    </a>
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      className="btn-primary text-xs px-3 py-1.5 flex items-center"
                    >
                      <Code size={14} className="mr-1.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="mb-16">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Technical Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseCategories.map((category) => (
              <div key={category.name} className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-xl p-6 md:p-8 border border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-3">Ready to Leverage Data?</h2>
            <p className="text-muted-foreground mb-6">
              Have a data challenge or want to discuss AI/ML opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="mailto:sarbojeet.aug.04@gmail.com" 
                className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm"
              >
                Get in Touch
              </a>
              <a 
                href="https://linkedin.com/in/sarbojeet-soe-mondal-data-scientist"
                target="_blank"
                className="btn-outline inline-flex items-center justify-center px-5 py-2.5 text-sm"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-3 sm:mb-0">
            © {new Date().getFullYear()} Sarbojeet Mondal
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

export default DataMLPortfolio;