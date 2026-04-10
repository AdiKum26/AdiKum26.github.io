import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

// ─── Formspree Configuration ─────────────────────────────────────────────────
// 1. Go to https://formspree.io/ and sign up for free
// 2. Create a new form and use "adikum26@uw.edu" as the target email
// 3. Copy your form ID (looks like "xyzabcde") and replace the value below
// 4. Done — submissions will land directly in your inbox, no backend needed!
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyknblrk";
// ─────────────────────────────────────────────────────────────────────────────

type FormState = "idle" | "sending" | "success" | "error";

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const contactInfo = [
    { id: "location", icon: MapPin, label: "Location", value: "Seattle, Washington", link: null },
    { id: "email", icon: Mail, label: "Email", value: "adikum26@uw.edu", link: "mailto:adikum26@uw.edu" },
  ];

  const socialLinks = [
    { id: "github", icon: Github, label: "GitHub", value: "AdiKum26", link: "https://github.com/AdiKum26", color: "hover:bg-foreground" },
    { id: "linkedin", icon: Linkedin, label: "LinkedIn", value: "aditya-kumar05", link: "https://www.linkedin.com/in/aditya-kumar05/", color: "hover:bg-blue-600" },
    { id: "instagram", icon: Mail, label: "Instagram (OuraNote)", value: "@ouranote", link: "https://www.instagram.com/ouranote/", color: "hover:bg-pink-600" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <div className={`space-y-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.id} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        {info.link ? (
                          <a href={info.link} className="font-semibold hover:text-primary transition-colors">{info.value}</a>
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
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                    >
                      <Icon className="h-5 w-5" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground group-hover:text-white/70 transition-colors">{social.label}</div>
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
              <p className="text-muted-foreground mb-4">Download my resume for detailed information about my experience and projects.</p>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => window.open(`${import.meta.env.BASE_URL}Aditya%20Kumar%20Resume.pdf`, '_blank')}>
                <Send className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {formState === "success" ? (
              /* ── Success State ── */
              <div className="h-full flex flex-col items-center justify-center gap-6 p-12 rounded-2xl bg-card border-2 border-green-500/30 bg-green-500/5 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent! 🎉</h3>
                  <p className="text-muted-foreground">Thanks for reaching out — I'll get back to you within 24 hours.</p>
                </div>
                <Button variant="outline" onClick={() => setFormState("idle")} className="mt-2">
                  Send Another Message
                </Button>
              </div>
            ) : (
              /* ── Form State ── */
              <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border-2 border-border hover:shadow-2xl transition-all duration-300">
                {formState === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">
                      Couldn't send your message. Please email me directly at{" "}
                      <a href="mailto:adikum26@uw.edu" className="underline font-semibold">adikum26@uw.edu</a>
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                  <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-12" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message</label>
                  <Textarea id="message" placeholder="Tell me about your project, opportunity, or just say hi..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} className="resize-none" />
                </div>

                <Button type="submit" size="lg" disabled={formState === "sending"} className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:shadow-lg disabled:opacity-60">
                  <Send className="mr-2 h-5 w-5" />
                  {formState === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span>Built with passion using React + Tailwind by Aditya Kumar</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aditya Kumar. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;