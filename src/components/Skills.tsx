import { Code2, Wrench, Lightbulb, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    id: "languages",
    category: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Swift", "SQL", "C", "HTML/CSS", "MATLAB"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "frameworks",
    category: "Frameworks & Tools",
    icon: Wrench,
    skills: ["React", "React Native", "Node.js", "Express", "Firebase", "AWS (Bedrock, Lambda, Glue)", "PyTorch", "Azure OpenAI", "Expo"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "data-ml",
    category: "Data & ML",
    icon: TrendingUp,
    skills: ["Scikit-learn", "Pandas", "NumPy", "CatBoost", "Tableau", "Power BI", "SQL", "ETL Pipelines"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "soft",
    category: "Soft Skills",
    icon: Lightbulb,
    skills: ["Leadership", "Problem Solving", "Communication", "Growth Mindset", "Team Collaboration", "Public Speaking"],
    color: "from-orange-500 to-red-500"
  }
];

const stats = [
  { id: "gpa", number: "3.83", label: "GPA (Dean's List)" },
  { id: "downloads", number: "5K+", label: "App Downloads" },
  { id: "records", number: "2M+", label: "Records Analyzed" },
  { id: "accuracy", number: "93.4%", label: "ML Model Accuracy" }
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
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
              <SkillCard key={category.id} category={category} Icon={Icon} index={index} />
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type SkillCat = typeof skillCategories[0];

const SkillCard = ({ category, Icon, index }: { category: SkillCat; Icon: React.ElementType; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
        {stat.number}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
    </div>
  );
};

export default Skills;