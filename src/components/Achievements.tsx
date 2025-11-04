import { Award, Trophy, Star, Users } from "lucide-react";
import breakthroughImg from "@/assets/breakthrough-challenge.png";
import mitImg from "@/assets/mit-workshop.png";
import dubhacksImg from "@/assets/dubhacks-2025.png";

const Achievements = () => {
  const achievements = [
    {
      title: "Breakthrough Junior Challenge",
      subtitle: "Regional Champion - National Recognition",
      description: "Won regional championship and appeared on national television in South Africa explaining quantum entanglement to millions of viewers.",
      image: breakthroughImg,
      link: "https://www.youtube.com/watch?v=Qt1YY8Agudo",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Top 1% Student in South Africa",
      subtitle: "Academic Excellence Award",
      description: "Graduated among the top 1% of students nationally, demonstrating exceptional discipline and academic achievement.",
      icon: Award,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "MIT Africa Innovation Workshop",
      subtitle: "Selected Participant",
      description: "Chosen to participate in exclusive MIT innovation workshop focused on entrepreneurship and technology in Africa.",
      image: mitImg,
      icon: Star,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "DubHacks 2025",
      subtitle: "Top Project Recognition",
      description: "Built Seekr, an AI research agent that won recognition for innovation in AWS AI track, helping UW students find research opportunities.",
      image: dubhacksImg,
      icon: Users,
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "DubsTech Health ML Hackathon",
      subtitle: "4th Place Internationally",
      description: "Achieved 4th place globally with 93.4% accuracy CatBoost model predicting hospital discharge costs from 1.8M+ records.",
      icon: Trophy,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Dean's List - All Quarters",
      subtitle: "University of Washington",
      description: "Maintained 3.87 GPA while pursuing Computer Science direct admit program at one of the top CS schools in the world.",
      icon: Award,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for innovation, leadership, and academic excellence
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => achievement.link && window.open(achievement.link, '_blank')}
              >
                {/* Image or Gradient Background */}
                {achievement.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className={`h-48 bg-gradient-to-br ${achievement.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-20 w-20 text-white/20" />
                    </div>
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary">
                      {achievement.subtitle}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Impact Numbers */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Creating Real Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "3,300+",
                label: "Books Donated",
                description: "Through LITSWAP NGO platform"
              },
              {
                number: "1,200+",
                label: "Animals Rescued",
                description: "Via Rainbow Nation Animals website"
              },
              {
                number: "100+",
                label: "Students Helped",
                description: "Through leadership & mentorship"
              }
            ].map((impact, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-[var(--gradient-card)] border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {impact.number}
                </div>
                <div className="text-lg font-bold mb-2">
                  {impact.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;