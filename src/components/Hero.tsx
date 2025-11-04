import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/aditya-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm border border-white/20">
                <span className="animate-pulse">👋</span>
                Hi, I'm
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                Aditya<br/>Kumar
              </h1>
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 leading-tight">
                  Developer, Innovator<br/>& Storyteller
                </h2>
                <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                  Building apps that make life better — from mental health to AI tools
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              CS student at University of Washington, passionate about creating technology that uplifts communities and solves real problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg"
                className="h-14 px-8 bg-white text-primary hover:bg-white/90 font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl"
                onClick={() => window.open('https://github.com/AdiKum26', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="h-14 px-8 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white font-semibold text-base shadow-xl backdrop-blur-sm rounded-xl"
                onClick={() => window.open('/Aditya_Kumar_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://github.com/AdiKum26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/30"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-kumar05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:adikum26@uw.edu"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/30"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-glow" />
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Aditya Kumar" 
                  className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/10 ring-offset-8 ring-offset-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;