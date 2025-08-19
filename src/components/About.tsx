import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    "Computer Science & Engineering Student",
    "Machine Learning Enthusiast", 
    "IoT Architecture Specialist",
    "Teaching Assistant Experience",
    "Full-Stack Developer"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about technology and innovation, I'm pursuing Computer Science & Engineering 
            while actively working on cutting-edge projects in ML, IoT, and web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently pursuing my Bachelor's in Computer Science & Engineering at SR University, Warangal, 
                    I maintain an impressive CGPA of 9.41 while actively engaging in practical learning experiences.
                  </p>
                  <p>
                    My passion for teaching led me to work as a Teaching Assistant at Bites and Bytes Programming Institute, 
                    where I helped students master programming concepts in C, Python, and Java, and guided them through 
                    complex Data Structures and Algorithms topics.
                  </p>
                  <p>
                    I'm particularly fascinated by the intersection of Machine Learning and IoT technologies, 
                    which is evident in my project work ranging from energy-efficient dance floors to 
                    federated learning architectures for IoT systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Key Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">What Drives Me</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Creating innovative solutions that bridge theoretical knowledge with real-world applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Continuous learning and staying updated with emerging technologies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Helping others learn and grow through teaching and mentorship</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;