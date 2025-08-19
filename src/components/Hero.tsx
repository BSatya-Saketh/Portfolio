import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <img 
                src={profileAvatar} 
                alt="Satya Saketh Bollepally" 
                className="w-32 h-32 rounded-full mx-auto lg:mx-0 object-cover shadow-elegant border-4 border-white/20"
              />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Satya Saketh
              <span className="block text-accent-glow">Bollepally</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Computer Science & Engineering Student at SR University, passionate about 
              Machine Learning, IoT Architecture, and Full-Stack Development
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="mailto:b.satyasaketh@gmail.com" 
                className="text-white/80 hover:text-accent-glow transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/SatyaSaketh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent-glow transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/Satya-Saketh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent-glow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="tel:+919515754999" 
                className="text-white/80 hover:text-accent-glow transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-elegant">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-glow">9.41</div>
                  <div className="text-white/80">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-glow">4+</div>
                  <div className="text-white/80">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-glow">4</div>
                  <div className="text-white/80">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-glow">3+</div>
                  <div className="text-white/80">Frameworks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;