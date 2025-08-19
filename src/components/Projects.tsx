import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Globe, Brain, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Dance Floor",
      category: "Course Project",
      description: "Led a team in developing an innovative energy conservation solution that converts kinetic energy from dance floor movement into electrical energy to illuminate LED lights using piezoelectricity principles.",
      achievements: [
        "Successfully demonstrated kinetic-to-electric energy conversion",
        "Applied piezoelectricity principles for sustainable lighting",
        "Led team collaboration and project management"
      ],
      technologies: ["Piezoelectricity", "Energy Conversion", "LED Technology", "Team Leadership"],
      icon: <Lightbulb className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Career Guidance Website for Rural Students",
      category: "Web Development",
      description: "Developed a comprehensive platform to help rural students access information about educational streams, career paths, and entrance examinations for higher education opportunities.",
      achievements: [
        "Created user-friendly interface for rural students",
        "Comprehensive database of educational streams after 10th, 12th, and graduation",
        "Included entrance exam information for renowned institutions",
        "Successfully hosted on GitHub Pages"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      link: "https://github.com/SatyaSaketh"
    },
    {
      title: "ML-Based House Price Prediction",
      category: "Machine Learning",
      description: "Built comprehensive predictive models using multiple algorithms to accurately predict house prices with advanced feature engineering and data preprocessing techniques.",
      achievements: [
        "Achieved ~99% accuracy with KNN, Linear, and Logistic Regression",
        "Implemented advanced feature engineering techniques",
        "Applied comprehensive data preprocessing methods",
        "Compared multiple ML algorithms for optimal performance"
      ],
      technologies: ["Python", "Linear Regression", "Logistic Regression", "K-Nearest Neighbors", "Scikit-Learn", "Pandas", "NumPy"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Federated Learning IoT Architecture",
      category: "Advanced Research",
      description: "Developed a prototype implementing anomaly detection using federated learning in a six-layered IoT architecture with custom Transformer and Autoencoder models.",
      achievements: [
        "Designed six-layered IoT Architecture (Edge, Gateway, Fog, Proxy, Cloud, Application)",
        "Implemented homogeneous federated learning integration",
        "Custom architecture using Transformers and Autoencoders",
        "Focused on data preprocessing, attack classification, and XAI with visualization tools"
      ],
      technologies: ["PyTorch", "TensorFlow", "Transformers", "Autoencoders", "IoT", "Federated Learning", "XAI"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of innovative projects spanning energy conservation, web development, 
            machine learning, and cutting-edge IoT architectures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  {project.link && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <a href="https://github.com/SatyaSaketh" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;