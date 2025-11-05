import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto link as fallback
    window.location.href = `mailto:adikum26@uw.edu?subject=Message from ${formData.name}&body=${formData.message}`;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Seattle, Washington",
      link: null
    },
    {
      icon: Mail,
      label: "Email",
      value: "adikum26@uw.edu",
      link: "mailto:adikum26@uw.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (206) 290-7706",
      link: "tel:+12062907706"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "AdiKum26",
      link: "https://github.com/AdiKum26",
      color: "hover:bg-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "aditya-kumar05",
      link: "https://www.linkedin.com/in/aditya-kumar05/",
      color: "hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Instagram (OuraNote)",
      value: "@ouranote",
      link: "https://www.instagram.com/ouranote/",
      color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you want to discuss opportunities, collaborate on projects, or just say hi — I'd love to hear from you!
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-semibold">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Connect on Social</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                    >
                      <Icon className="h-5 w-5" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground group-hover:text-white/70 transition-colors">
                          {social.label}
                        </div>
                        <div className="font-semibold text-sm">{social.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Download Resume CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-xl font-bold mb-2">Want to know more?</h3>
              <p className="text-muted-foreground mb-4">
                Download my resume for detailed information about my experience and projects.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => window.open(`${import.meta.env.BASE_URL}Aditya_Kumar_Resume.pdf`, '_blank')}
              >
                <Send className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border-2 border-border hover:shadow-2xl transition-all duration-300">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span>Built with passion using React + Tailwind by Aditya Kumar</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export default Contact;