import Navigation from "@/components/Navigation";
import { Github, ExternalLink, Code } from "lucide-react";

const DataMLPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis for Customer Reviews",
      description: "Built an NLP model using BERT and SBERT to analyze customer sentiment with 94% accuracy. Deployed on AWS for real-time analysis.",
      techStack: ["Python", "BERT", "SBERT", "PyTorch", "AWS", "Docker"],
      githubLink: "https://github.com/sarbojeet/sentiment-analysis",
      demoLink: "https://colab.research.google.com/drive/sentiment-analysis",
      impact: "Improved customer satisfaction by 23%"
    },
    {
      id: 2,
      title: "Sales Forecasting with XGBoost",
      description: "Developed a machine learning pipeline for sales prediction using XGBoost and feature engineering, achieving RMSE of 12.3.",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Jupyter"],
      githubLink: "https://github.com/sarbojeet/sales-forecasting",
      demoLink: "https://colab.research.google.com/drive/sales-forecast",
      impact: "Reduced forecasting error by 35%"
    },
    {
      id: 3,
      title: "Computer Vision for Medical Imaging",
      description: "Implemented CNN models for detecting anomalies in medical X-rays with 97% precision using TensorFlow and transfer learning.",
      techStack: ["TensorFlow", "Keras", "OpenCV", "Python", "CNN"],
      githubLink: "https://github.com/sarbojeet/medical-cv",
      demoLink: "https://colab.research.google.com/drive/medical-cv",
      impact: "Assisted in 1000+ diagnoses"
    },
    {
      id: 4,
      title: "Recommendation System",
      description: "Built a collaborative filtering recommendation engine for e-commerce platform using matrix factorization and deep learning.",
      techStack: ["Python", "TensorFlow", "Collaborative Filtering", "NumPy"],
      githubLink: "https://github.com/sarbojeet/recommendation-system",
      demoLink: "https://colab.research.google.com/drive/recommendation",
      impact: "Increased user engagement by 40%"
    },
    {
      id: 5,
      title: "Time Series Analysis for Stock Prediction",
      description: "Developed LSTM and ARIMA models for stock price prediction with comprehensive feature engineering and risk analysis.",
      techStack: ["Python", "LSTM", "ARIMA", "Pandas", "Matplotlib"],
      githubLink: "https://github.com/sarbojeet/stock-prediction",
      demoLink: "https://colab.research.google.com/drive/stock-prediction",
      impact: "15% improvement in prediction accuracy"
    },
    {
      id: 6,
      title: "Chatbot with Natural Language Understanding",
      description: "Created an intelligent chatbot using transformers and intent classification for customer service automation.",
      techStack: ["Python", "Transformers", "Rasa", "NLTK", "Flask"],
      githubLink: "https://github.com/sarbojeet/intelligent-chatbot",
      demoLink: "https://colab.research.google.com/drive/chatbot",
      impact: "Reduced support tickets by 60%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-glow mb-6">
              Data Science & ML Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building intelligent systems that learn, predict, and solve complex business problems with data
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-card rounded-2xl p-8 neon-border card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold font-poppins mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="skill-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-6">
                      <p className="text-sm text-primary font-medium">
                        📊 Impact: {project.impact}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm flex items-center space-x-2"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm flex items-center space-x-2"
                      >
                        <Code size={16} />
                        <span>Open in Colab</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center neon-border">
                      <Code size={48} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills & Expertise */}
          <div className="mt-20 bg-card rounded-2xl p-8 neon-border animate-fade-in">
            <h2 className="text-3xl font-bold font-poppins text-center mb-12">
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Machine Learning</h3>
                <div className="space-y-2">
                  {["Scikit-learn", "XGBoost", "Random Forest", "SVM"].map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Deep Learning</h3>
                <div className="space-y-2">
                  {["TensorFlow", "PyTorch", "Keras", "Neural Networks"].map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">NLP</h3>
                <div className="space-y-2">
                  {["BERT", "SBERT", "Transformers", "spaCy"].map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Tools & Cloud</h3>
                <div className="space-y-2">
                  {["AWS", "Docker", "Jupyter", "Git"].map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataMLPortfolio;