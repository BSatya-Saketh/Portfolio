import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "b.satyasaketh@gmail.com",
      href: "mailto:b.satyasaketh@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9515754999",
      href: "tel:+919515754999",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "SatyaSaketh",
      href: "https://github.com/SatyaSaketh",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "in/Satya-Saketh",
      href: "https://linkedin.com/in/Satya-Saketh",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Warangal, Telangana, India",
      href: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always interested in discussing new opportunities, innovative projects, 
            or collaborations in technology and research. Let's connect!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{contact.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">What I'm Looking For</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Internship opportunities in Machine Learning and Software Development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Research collaborations in IoT Architecture and Federated Learning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Open source project contributions and technical discussions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Teaching and mentoring opportunities in programming</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-subtle rounded-lg p-6 text-center">
                    <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">Let's Connect!</h4>
                    <p className="text-muted-foreground mb-6">
                      I prefer direct communication through email or LinkedIn for more personal and detailed conversations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="hero" size="lg" asChild>
                        <a href="mailto:b.satyasaketh@gmail.com">
                          <Mail className="w-5 h-5 mr-2" />
                          Email Me
                        </a>
                      </Button>
                      <Button variant="accent" size="lg" asChild>
                        <a href="https://linkedin.com/in/Satya-Saketh" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">Quick Response Time</h4>
                    <p className="text-muted-foreground text-sm">
                      I typically respond to emails within 24 hours during weekdays. 
                      For urgent matters, feel free to reach out via phone or LinkedIn.
                    </p>
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

export default Contact;