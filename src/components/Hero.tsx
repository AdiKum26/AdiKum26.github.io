import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/aditya-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-lg tracking-wide">
                👋 Hi, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Aditya Kumar
            </h1>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-4xl font-semibold text-white/90">
                Developer, Innovator & Storyteller
              </h2>
              <p className="text-xl text-white/80 max-w-2xl">
                I build apps that make life better — from mental health to AI tools
              </p>
            </div>
            
            <p className="text-lg text-white/70 max-w-xl">
              CS student at University of Washington, passionate about creating technology that uplifts communities and solves real problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://github.com/AdiKum26', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white shadow-lg backdrop-blur-sm"
                onClick={() => window.open('/Aditya_Kumar_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/AdiKum26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-kumar05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a 
                href="mailto:adikum26@uw.edu"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl animate-glow" />
              <img 
                src={profileImage} 
                alt="Aditya Kumar" 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;