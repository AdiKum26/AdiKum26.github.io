import { Award, Trophy, Star, Users, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import breakthroughImg from "@/assets/breakthrough-challenge.png";
import mitImg from "@/assets/mit-workshop.png";
import dubhacksImg from "@/assets/dubhacks-2025.png";
import top1Img from "@/assets/st-davids.png";
import deanListImg from "@/assets/paul-g-allen.jpg";
import dubstechImg from "@/assets/nyc.jpg";

const Achievements = () => {
  const achievements = [
    {
      title: "Breakthrough Junior Challenge",
      subtitle: "Regional Champion - National Recognition",
      description: "Won regional championship and appeared on national television in South Africa explaining quantum entanglement to millions of viewers.",
      image: breakthroughImg,
      link: "https://www.youtube.com/watch?v=B6aHY7g3mEs&list=PLyF3OMOiy3nFJ4NgkvuQya1jRmPzYt-7M&index=3",
      newsLink: "https://www.youtube.com/watch?v=Qt1YY8Agudo",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Top 1% Student in South Africa",
      subtitle: "Dux Scholar at St David's (95% Overall Average)",
      description: "Interviewed at eNCA and featured on the Saturday Star. Ranked in the top 1% nationally for: Further Studies: Mathematics (Standard and Elective combined), Afrikaans, Business Studies, English, Geography, Life Orientation, Mathematics, and Physical Science. Honored with \"IEB Outstanding Achiever\" award.",
      image: top1Img,
      icon: Award,
      gradient: "from-blue-500 to-purple-500",
      buttons: [
        { label: "Instagram", url: "https://www.instagram.com/p/C2R_MuFCN9I/", color: "instagram-gradient" },
        { label: "947", url: "https://www.primediaplus.com/the-best-of-the-best-in-joburg-matrics-2023/", color: "bg-pink-600 hover:bg-pink-700" },
        { label: "eNCA", url: "https://www.youtube.com/watch?v=1puiDv0Bvp8", color: "bg-blue-600 hover:bg-blue-700" },
        { label: "Saturday Star", url: "https://www.news24.com/drum/advice/parenting/something-that-worked-for-me-is-completely-ignoring-my-results-says-matric-with-8-distinctions-20240119", color: "bg-red-600 hover:bg-red-700" }
      ]
    },
    {
      title: "MIT Africa Innovation Workshop",
      subtitle: "Selected Participant",
      description: "Chosen to participate in exclusive MIT innovation workshop focused on entrepreneurship and technology in Africa.",
      image: mitImg,
      icon: Star,
      gradient: "from-red-500 to-pink-500",
      linkedinLink: "https://www.linkedin.com/posts/aditya-kumar05_wow-what-an-amazing-experience-i-was-privileged-activity-7017569563412209664-L0vH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkS1S4BPK4ZGT9aoIF5jHNKFhNyQRK7iPM"
    },
    {
      title: "DubHacks 2025",
      subtitle: "Top Project Recognition",
      description: "Built Seekr, an AI research agent that won recognition for innovation in AWS AI track, helping UW students find research opportunities.",
      image: dubhacksImg,
      icon: Users,
      gradient: "from-purple-500 to-blue-500",
      linkedinLink: "https://www.linkedin.com/posts/aditya-kumar05_i-spent-this-past-weekend-at-dubhacks-2025-activity-7386212240296902657-dbKB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkS1S4BPK4ZGT9aoIF5jHNKFhNyQRK7iPM"
    },
    {
      title: "DubsTech Health ML Hackathon",
      subtitle: "4th Place Internationally",
      description: "Achieved 4th place globally with 93.4% accuracy CatBoost model predicting hospital discharge costs from 1.8M+ records.",
      image: dubstechImg,
      icon: Trophy,
      gradient: "from-green-500 to-teal-500",
      githubLink: "https://github.com/AdiKum26/DubsTech-Health-ML-2025"
    },
    {
      title: "Dean's List - All Quarters",
      subtitle: "University of Washington",
      description: "Maintained 3.87 GPA while pursuing Computer Science direct admit program at one of the top CS schools in the world.",
      image: deanListImg,
      icon: Award,
      gradient: "from-indigo-500 to-purple-500",
      link: "https://registrar.washington.edu/grades/deans-lists/recipients/adl-seattle/"
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
                  className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                {/* Image or Gradient Background */}
                {achievement.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
                        achievement.title === "Top 1% Student in South Africa"
                          ? "object-contain object-center"
                          : achievement.title === "MIT Africa Innovation Workshop"
                          ? "object-cover object-center"
                          : achievement.title === "DubsTech Health ML Hackathon"
                          ? "object-cover object-[center_50%]"
                          : "object-cover object-top"
                      }`}
                    />
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
                <div className="p-6 space-y-3 flex flex-col flex-grow">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary">
                      {achievement.subtitle}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                  {achievement.buttons && achievement.buttons.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {achievement.buttons.map((button, idx) => (
                        <Button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(button.url, '_blank');
                          }}
                          className={`${
                            button.color === "instagram-gradient"
                              ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 shadow-lg hover:shadow-xl"
                              : `${button.color} shadow-md hover:shadow-lg`
                          } text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-all duration-200 hover:scale-105 hover:-translate-y-0.5`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {button.label}
                        </Button>
                      ))}
                    </div>
                  ) : (achievement.link || achievement.newsLink || achievement.linkedinLink || achievement.githubLink) && (
                    <div className={`flex gap-3 mt-4 ${
                      (achievement.link && achievement.newsLink) || (achievement.link && achievement.linkedinLink) || (achievement.newsLink && achievement.linkedinLink) || (achievement.linkedinLink && achievement.githubLink) || (achievement.link && achievement.githubLink)
                        ? 'flex-row'
                        : 'flex-col'
                    }`}>
                      {achievement.link && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(achievement.link, '_blank');
                          }}
                          className={`${
                            achievement.title === "Dean's List - All Quarters"
                              ? "bg-purple-800 hover:bg-purple-900"
                              : "bg-red-600 hover:bg-red-700"
                          } text-white font-semibold ${
                            (achievement.link && achievement.newsLink) || (achievement.link && achievement.linkedinLink) || (achievement.link && achievement.githubLink)
                              ? 'flex-1'
                              : 'w-full'
                          } py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-0.5`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {achievement.title === "Dean's List - All Quarters" ? "View" : "YouTube"}
                        </Button>
                      )}
                      {achievement.newsLink && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(achievement.newsLink, '_blank');
                          }}
                          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold ${
                            (achievement.link && achievement.newsLink) || (achievement.newsLink && achievement.linkedinLink) || (achievement.newsLink && achievement.githubLink)
                              ? 'flex-1'
                              : 'w-full'
                          } py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-0.5`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          eNCA
                        </Button>
                      )}
                      {achievement.linkedinLink && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(achievement.linkedinLink, '_blank');
                          }}
                          className={`bg-[#0077b5] hover:bg-[#005885] text-white font-semibold ${
                            (achievement.link && achievement.linkedinLink) || (achievement.newsLink && achievement.linkedinLink) || (achievement.linkedinLink && achievement.githubLink)
                              ? 'flex-1'
                              : 'w-full'
                          } py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-0.5`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                      )}
                      {achievement.githubLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(achievement.githubLink, '_blank');
                          }}
                          className={`${
                            (achievement.link && achievement.githubLink) || (achievement.linkedinLink && achievement.githubLink) || (achievement.newsLink && achievement.githubLink)
                              ? 'flex-1'
                              : 'w-full'
                          }`}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )}
                    </div>
                  )}
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