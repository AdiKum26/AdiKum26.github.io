import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ouraNoteImg from "@/assets/ouranote-logo.jpg";
import finderlyImg from "@/assets/finderly-logo.png";

const Projects = () => {
  const projects = [
    {
      title: "OuraNote",
      description: "AI-powered mental health journaling platform",
      image: ouraNoteImg,
      impact: "100+ visits, 30 active users at MVP",
      tech: ["React", "TypeScript", "Firebase", "GPT-4", "Whisper API", "AES Encryption"],
      features: [
        "Real-time sentiment analysis dashboards",
        "Voice-based AI therapist with conversational memory",
        "Cross-platform React Native mobile app",
        "End-to-end encryption for user privacy"
      ],
      github: "https://github.com/AdiKum26",
      demo: "https://www.instagram.com/ouranote/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Finderly",
      description: "AI voice assistant for DIY home repairs",
      image: finderlyImg,
      impact: "5,000+ downloads, rapidly growing",
      tech: ["React Native", "Whisper", "GPT-4", "TTS", "Expo"],
      features: [
        "Real-time conversational AI for hands-free guidance",
        "Context-aware speech recognition pipeline",
        "Step-by-step repair instructions",
        "Voice-activated tool recommendations"
      ],
      demo: "https://apps.apple.com/us/app/finderly/id6737346286",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      title: "Seekr",
      description: "AI Research & Career Agent for UW students",
      image: null,
      impact: "Top project at DubHacks 2025",
      tech: ["AWS Bedrock", "Lambda", "DynamoDB", "React", "TypeScript", "Claude-3"],
      features: [
        "Matches students to research labs using semantic search",
        "Auto-generates personalized outreach emails",
        "Real-time data pipelines with AWS services",
        "Autonomous agent architecture"
      ],
      github: "https://github.com/AdiKum26",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Health ML Prediction",
      description: "Hospital cost prediction model",
      image: null,
      impact: "4th place internationally, 93.4% accuracy",
      tech: ["Python", "CatBoost", "Pandas", "NumPy", "Tableau"],
      features: [
        "Analyzed 1.8M+ NY SPARCS medical records",
        "Advanced feature engineering",
        "Interactive Tableau visualizations",
        "Real-world healthcare impact"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "LITSWAP",
      description: "Book donation platform for underprivileged communities",
      image: null,
      impact: "3,300+ books donated",
      tech: ["Google Sites", "HTML", "CSS", "JavaScript"],
      features: [
        "Community-driven book exchange",
        "School partnership integrations",
        "Donation tracking system",
        "Impact analytics dashboard"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Rainbow Nation Animals",
      description: "NGO website for animal rescue and adoption",
      image: null,
      impact: "1,200+ animals rescued",
      tech: ["WordPress", "PHP", "MySQL"],
      features: [
        "Adoption management system",
        "Volunteer coordination",
        "Donation processing",
        "Success stories showcase"
      ],
      demo: "https://www.rainbownationanimals.org/",
      gradient: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building technology that makes a real difference in people's lives
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Gradient */}
              <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">{project.title[0]}</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
                <div className="text-sm font-semibold text-secondary mt-2">
                  📊 {project.impact}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  {project.github && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.open('https://github.com/AdiKum26', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;