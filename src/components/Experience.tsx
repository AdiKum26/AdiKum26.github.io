import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AI Vision Technologies (Finderly)",
      role: "AI Software Engineer Intern",
      location: "Austin, Texas (Remote)",
      period: "Oct 2025 - Present",
      achievements: [
        "Developing AI DIY home-repair app with 5,000+ downloads and rapidly growing user base",
        "Building real-time conversational AI assistant (Whisper + GPT + TTS) for hands-free repair guidance",
        "Contributing to Expo React Native codebase with context-aware AI + speech pipelines"
      ],
      color: "from-pink-500 to-orange-500"
    },
    {
      company: "OuraNote",
      role: "Co-founder & AI Software Engineer",
      location: "Remote",
      period: "Feb 2025 - Present",
      achievements: [
        "Built mental-health journaling web app reaching 100+ visits and 30 active users at MVP stage",
        "Engineered full-stack platform using React, TypeScript, Firebase, AES encryption with AI-powered sentiment analysis",
        "Implemented voice-based AI therapist using Whisper + GPT-4o-mini with conversational memory",
        "Built React Native mobile app for App Store launch with cross-platform parity"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "MpiloTech",
      role: "Software Development Intern",
      location: "Johannesburg, South Africa",
      period: "Jul 2025 - Sep 2025",
      achievements: [
        "Improved backend services for Best Buy-style e-commerce mobile app serving 1,000+ active users",
        "Optimized REST API & caching, reducing load times by 40%+"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "WITS University BIS",
      role: "Data Engineering Intern",
      location: "Johannesburg, South Africa",
      period: "Jun 2025 - Jul 2025",
      achievements: [
        "Delivered dashboards analyzing 200K+ course records, enabling faculty to support 50+ students flagged for dropout",
        "Built AWS Glue ETL pipelines and fact/dimension tables, integrating results into Power BI dashboards",
        "Applied SQL, Python, and ML modeling to detect anomalies in fees, grades, and dropout trends"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building impactful solutions across AI, data engineering, and full-stack development
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="relative bg-card border-2 border-border rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/50">
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${exp.color} mb-3`}>
                      <span className="text-sm font-semibold text-white">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className="text-secondary font-bold mt-1">▸</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Leadership & Community
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Startup Club at UW",
                role: "Director of Events",
                description: "Launched official website & ran pitch events with 50+ participants",
                link: "https://startupclubuw.com"
              },
              {
                title: "Barbell Club at UW",
                role: "Officer",
                description: "Organized 10 events & 25 talks, promoting fitness for 100+ students",
                link: "https://www.instagram.com/barbellclubuw/"
              },
              {
                title: "McKinsey Forward Program",
                role: "Learner",
                description: "Selected for global leadership & AI innovation program"
              }
            ].map((leadership, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-[var(--gradient-card)] border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => leadership.link && window.open(leadership.link, '_blank')}
              >
                <h4 className="text-xl font-bold mb-2">{leadership.title}</h4>
                <p className="text-sm font-semibold text-primary mb-3">{leadership.role}</p>
                <p className="text-muted-foreground">{leadership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;