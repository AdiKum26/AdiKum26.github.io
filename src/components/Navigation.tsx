import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sectionIds = ["about", "projects", "experience", "skills", "achievements", "contact"];
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleNavClick = (id: string, isPage: boolean = false) => {
    if (isPage) {
      navigate(`/${id}`);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== '/') {
        navigate(`/#${id}`);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Certifications", id: "certifications", isPage: true },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
        : "bg-white/10 backdrop-blur-md border-b border-white/20"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-display text-2xl font-bold hover:scale-105 transition-transform ${isScrolled
              ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              : "text-white drop-shadow-lg"
              }`}
          >
            AK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !link.isPage && activeSection === link.id;
              return (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => handleNavClick(link.id, link.isPage)}
                  className={`text-base font-medium transition-all px-4 rounded-lg relative ${isScrolled
                    ? isActive
                      ? "text-primary bg-primary/10 after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                    : isActive
                      ? "text-white bg-white/20 after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-white after:rounded-full"
                      : "text-white/90 hover:bg-white/20 hover:text-white drop-shadow-sm"
                    }`}
                >
                  {link.label}
                </Button>
              );
            })}
          </div>

          {/* Right side: Dark Mode + Resume */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className={`p-2.5 rounded-lg transition-all duration-300 ${isScrolled
                ? "hover:bg-muted text-foreground"
                : "hover:bg-white/20 text-white"
                }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Button
              onClick={() => window.open(`${import.meta.env.BASE_URL}Aditya%20Kumar%20Resume.pdf`, '_blank')}
              className={`h-11 px-6 font-semibold rounded-lg shadow-lg transition-all ${isScrolled
                ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                : "bg-white text-primary hover:bg-white/90 hover:shadow-xl"
                }`}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-lg transition-colors ${isScrolled
                ? "hover:bg-muted text-foreground"
                : "hover:bg-white/20 text-white"
                }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled
                ? "hover:bg-muted text-foreground"
                : "hover:bg-white/20 text-white"
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden pb-6 space-y-2 border-t pt-4 ${isScrolled
            ? "border-border/50"
            : "border-white/20"
            }`}>
            {navLinks.map((link) => {
              const isActive = !link.isPage && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.isPage)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${isScrolled
                    ? isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "hover:bg-primary/10 hover:text-primary text-foreground"
                    : isActive
                      ? "bg-white/20 text-white font-semibold"
                      : "hover:bg-white/20 hover:text-white text-white/90"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
            <Button
              onClick={() => {
                window.open(`${import.meta.env.BASE_URL}Aditya%20Kumar%20Resume.pdf`, '_blank');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full mt-4 font-semibold ${isScrolled
                ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                : "bg-white text-primary hover:bg-white/90"
                }`}
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