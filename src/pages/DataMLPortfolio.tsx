import Navigation from "@/components/Navigation";
import { Github, ExternalLink, Code, Cpu, Database, Network, BarChart2, Linkedin } from "lucide-react";

const DataMLPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis",
      description: "Built NLP model using BERT to analyze customer sentiment with 94% accuracy",
      techStack: ["Python", "BERT", "PyTorch", "AWS"],
      githubLink: "#",
      demoLink: "#",
      impact: "Improved customer satisfaction by 23%",
      icon: <Cpu size={20} className="text-primary" />
    },
    {
      id: 2,
      title: "Sales Forecasting",
      description: "XGBoost pipeline for sales prediction with RMSE of 12.3",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
      githubLink: "#",
      demoLink: "#",
      impact: "Reduced forecasting error by 35%",
      icon: <BarChart2 size={20} className="text-primary" />
    },
    {
      id: 3,
      title: "Medical Imaging AI",
      description: "CNN models for detecting anomalies in X-rays with 97% precision",
      techStack: ["TensorFlow", "Keras", "OpenCV"],
      githubLink: "#",
      demoLink: "#",
      impact: "Assisted in 1000+ diagnoses",
      icon: <Cpu size={20} className="text-primary" />
    },
    {
      id: 4,
      title: "Recommendation System",
      description: "Collaborative filtering engine for e-commerce platform",
      techStack: ["Python", "TensorFlow", "NumPy"],
      githubLink: "#",
      demoLink: "#",
      impact: "Increased engagement by 40%",
      icon: <Network size={20} className="text-primary" />
    },
    {
      id: 5,
      title: "Stock Prediction",
      description: "LSTM and ARIMA models for price prediction",
      techStack: ["Python", "LSTM", "ARIMA", "Matplotlib"],
      githubLink: "#",
      demoLink: "#",
      impact: "15% improvement in accuracy",
      icon: <BarChart2 size={20} className="text-primary" />
    },
    {
      id: 6,
      title: "Intelligent Chatbot",
      description: "Transformers-based chatbot for customer service",
      techStack: ["Python", "Transformers", "Rasa", "Flask"],
      githubLink: "#",
      demoLink: "#",
      impact: "Reduced tickets by 60%",
      icon: <Network size={20} className="text-primary" />
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