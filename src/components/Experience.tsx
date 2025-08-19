import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Users, Code } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Practical experience in teaching and mentoring students in programming and computer science concepts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-accent" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Teaching Assistant
                      </h3>
                      <p className="text-xl text-accent font-semibold mb-2">
                        Bites and Bytes Programming Institute
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>April 2024 – July 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Assisted students with C, Python, and Java concepts during weekend mentoring sessions, 
                            providing personalized guidance to improve their programming skills
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Helped explain Data Structures and Algorithms (DSA) topics, breaking down complex concepts 
                            into understandable components for students at various skill levels
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Provided debugging assistance during lab practice sessions, teaching students 
                            systematic approaches to identify and resolve coding issues
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Technologies & Skills Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["C Programming", "Python", "Java", "Data Structures", "Algorithms", "Debugging", "Mentoring", "Problem Solving"].map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-3">Impact & Growth</h4>
                      <p className="text-muted-foreground">
                        This experience enhanced my communication skills and deepened my understanding of 
                        programming fundamentals. Working with students from diverse backgrounds taught me 
                        the importance of adapting teaching methods to different learning styles, while 
                        reinforcing my own technical knowledge through explanation and demonstration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;