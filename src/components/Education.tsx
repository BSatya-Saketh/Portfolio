import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "SR University",
      location: "Warangal",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "Aug 2023 – May 2027",
      cgpa: "9.41",
      courses: [
        "Data Structures",
        "Operating Systems", 
        "Discrete Mathematics",
        "Theory of Computation"
      ]
    },
    {
      institution: "Resonance Jr. College",
      location: "Hanamakonda",
      degree: "Intermediate Education, TSBIE",
      duration: "June 2021 – Mar 2023",
      cgpa: "8.61",
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Sanskrit",
        "English"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Academic excellence through rigorous coursework and practical application of knowledge
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground mb-1">{edu.location}</p>
                        <p className="text-lg font-semibold text-foreground mb-3">
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      
                      <div className="text-center lg:text-right">
                        <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                          <div className="text-sm font-medium">CGPA</div>
                          <div className="text-2xl font-bold">{edu.cgpa}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;