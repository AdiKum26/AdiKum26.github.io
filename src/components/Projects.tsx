import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import ouraNoteImg from "@/assets/ouranote-logo.jpg";
import finderlyImg from "@/assets/Finderly.png";
import rainbowNationAnimalsImg from "@/assets/rainbow-nation.png";
import litswapImg from "@/assets/LITSWAP.png";
import healthMlPredictionImg from "@/assets/dubstech.png";
import seekrImg from "@/assets/aws.jpg";
import techfestPresentationImg from "@/assets/techfest-presentation.jpg";
import travelAgentProductImg from "@/assets/travel-agent-product.png";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: "ouranote",
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
    github: "https://github.com/OuraNote/mental-health-app",
    demo: "https://www.instagram.com/ouranote/",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "finderly",
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
    demo: "https://finderlyfix.com/",
    gradient: "from-white to-white"
  },
  {
    id: "seekr",
    title: "Seekr",
    description: "AI Research & Career Agent for UW students",
    image: seekrImg,
    impact: "Top project at DubHacks 2025",
    tech: ["AWS Bedrock", "Lambda", "DynamoDB", "React", "TypeScript", "Claude-3"],
    features: [
      "Matches students to research labs using semantic search",
      "Auto-generates personalized outreach emails",
      "Real-time data pipelines with AWS services",
      "Autonomous agent architecture"
    ],
    github: "https://github.com/AdiKum26/Seekr",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "travel-agent",
    title: "Travel AI Agent",
    description: "End-to-end production-style AI travel assistant",
    image: travelAgentProductImg,
    impact: "Presented at Techfest IIT Bombay 2025",
    tech: ["Next.js", "TypeScript", "Antigravity", "Firebase"],
    features: [
      "Agent logic developed using Antigravity",
      "Real-time recommendations & booking logic",
      "Clean, responsive UI for production use",
      "Presented to industry experts at IIT Bombay"
    ],
    github: "https://github.com/AdiKum26/TravelAgent",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "health-ml",
    title: "DubsTech Health ML Prediction",
    description: "ML Hospital cost prediction model",
    image: healthMlPredictionImg,
    impact: "4th place internationally, 93.4% accuracy",
    tech: ["Python", "CatBoost", "Pandas", "NumPy", "Tableau"],
    features: [
      "Analyzed 1.8M+ NY SPARCS medical records",
      "Advanced feature engineering",
      "Interactive Tableau visualizations",
      "Real-world healthcare impact"
    ],
    github: "https://github.com/AdiKum26/DubsTech-Health-ML-2025",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "litswap",
    title: "LITSWAP",
    description: "Book donation platform for underprivileged communities",
    image: litswapImg,
    impact: "3,300+ books donated",
    tech: ["Google Sites", "HTML", "CSS", "JavaScript"],
    features: [
      "Community-driven book exchange",
      "School partnership integrations",
      "Donation tracking system",
      "Impact analytics dashboard"
    ],
    demo: "https://sites.google.com/view/litswapbooks/home?fbclid=PAZXh0bgNhZW0CMTEAAad7MEeG0-kZXJTJHvETGkPbkOAdm1b3q6qwUsRqRNEO3B9DjUoi6HBtq-S4OA_aem_d4TXALCIHixQMOXtVC8yrQ",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: "rainbow-nation",
    title: "Rainbow Nation Animals",
    description: "NGO website for animal rescue and adoption",
    image: rainbowNationAnimalsImg,
    impact: "1,200+ animals rescued",
    tech: ["WordPress", "PHP", "MySQL"],
    features: [
      "Adoption management system",
      "Volunteer coordination",
      "Donation processing",
      "Success stories showcase"
    ],
    demo: "https://rainbownationanimals.wordpress.com/",
    gradient: "from-yellow-500 to-red-500"
  }
];

const INITIALLY_VISIBLE = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.05 });

  const visibleProjects = showAll ? projects : projects.slice(0, INITIALLY_VISIBLE);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building technology that makes a real difference in people's lives
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More / Less toggle */}
        <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <><ChevronUp className="mr-2 h-5 w-5" /> Show Less</>
            ) : (
              <><ChevronDown className="mr-2 h-5 w-5" /> Show All {projects.length} Projects</>
            )}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.open('https://github.com/AdiKum26', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

type Project = typeof projects[0];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <Card
      ref={ref}
      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Project Image/Gradient */}
      <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
            project.id === "finderly" ? "object-contain p-8" : "object-cover"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
        <div className="text-sm font-semibold text-secondary mt-2">📊 {project.impact}</div>
      </CardHeader>

      <CardContent className="flex flex-col space-y-4 flex-grow">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1 text-sm text-muted-foreground flex-grow">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-6 mt-auto">
          {project.github && (
            <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open(project.github, '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {project.demo && (
            <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => window.open(project.demo, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;