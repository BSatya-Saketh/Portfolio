import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Award, Cpu, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Java", "Python"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "PyTorch", "TensorFlow", "Dash"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Oracle", "JDBC", "GitHub", "Git Version Control"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Networking & Systems",
      icon: <Network className="w-6 h-6" />,
      skills: ["Java Sockets", "Multi-threading", "System Architecture", "IoT Protocols"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Certifications",
      icon: <Award className="w-6 h-6" />,
      skills: ["C Programming (NPTEL, IIT Kanpur)", "Data Analysis (IBM)"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const expertise = [
    { name: "Machine Learning", level: 90 },
    { name: "Python Programming", level: 95 },
    { name: "Data Structures & Algorithms", level: 88 },
    { name: "IoT Architecture", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "Teaching & Mentoring", level: 92 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning multiple programming languages, frameworks, 
            and cutting-edge technologies in ML, IoT, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Expertise Levels</h3>
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;