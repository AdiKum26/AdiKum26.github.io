import { Code2, Wrench, Lightbulb, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Swift", "SQL", "C", "HTML/CSS", "MATLAB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frameworks & Tools",
      icon: Wrench,
      skills: ["React", "React Native", "Node.js", "Express", "Firebase", "AWS (Bedrock, Lambda, Glue)", "PyTorch", "Azure OpenAI", "Expo"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Data & ML",
      icon: TrendingUp,
      skills: ["Scikit-learn", "Pandas", "NumPy", "CatBoost", "Tableau", "Power BI", "SQL", "ETL Pipelines"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Soft Skills",
      icon: Lightbulb,
      skills: ["Leadership", "Problem Solving", "Communication", "Growth Mindset", "Team Collaboration", "Public Speaking"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A versatile toolkit for building end-to-end solutions
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "3.87", label: "GPA (Dean's List)" },
            { number: "5K+", label: "App Downloads" },
            { number: "200K+", label: "Records Analyzed" },
            { number: "93.4%", label: "ML Model Accuracy" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;