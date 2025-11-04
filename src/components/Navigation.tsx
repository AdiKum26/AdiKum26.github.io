import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            AK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all px-4 rounded-lg"
              >
                {link.label}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => window.open('/Aditya_Kumar_Resume.pdf', '_blank')}
              className="h-11 px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 font-semibold rounded-lg shadow-lg"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-2 animate-fade-in border-t border-border/50 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                window.open('/Aditya_Kumar_Resume.pdf', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 font-semibold"
            >
              Download Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;