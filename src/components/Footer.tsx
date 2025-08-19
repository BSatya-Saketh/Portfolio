import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Satya Saketh Bollepally</h3>
          <p className="text-background/80 mb-6 max-w-md mx-auto">
            Computer Science Student passionate about Machine Learning, IoT, and innovative technology solutions.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:b.satyasaketh@gmail.com" 
              className="text-background/80 hover:text-background transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/SatyaSaketh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/Satya-Saketh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Satya Saketh • © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;