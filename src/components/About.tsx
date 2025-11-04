import { Award, Heart, Code2, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Ubuntu",
      description: "I am because we are — technology should serve humanity"
    },
    {
      icon: Sparkles,
      title: "Resilience",
      description: "From losing my father to thriving at UW — growth through adversity"
    },
    {
      icon: Code2,
      title: "Innovation",
      description: "Building AI solutions that solve real-world problems"
    },
    {
      icon: Award,
      title: "Impact",
      description: "3,300+ books donated, 1,200+ animals rescued, lives changed"
    }
  ];

  const timeline = [
    { year: "2005", event: "Born in India" },
    { year: "2009", event: "Moved to South Africa" },
    { year: "2020", event: "Lost my father, found purpose in coding" },
    { year: "2022", event: "Breakthrough Junior Challenge Regional Champion" },
    { year: "2023", event: "Top 1% student in South Africa" },
    { year: "2024", event: "Direct admit to UW Computer Science" },
    { year: "2025", event: "Building OuraNote & Finderly, changing lives" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
          <p>
            I was born in India, raised in South Africa, and now call Seattle home. My journey has been shaped by 
            <span className="text-foreground font-semibold"> Ubuntu </span>
            — the belief that "I am because we are."
          </p>
          
          <p>
            In 2020, I lost my father. That moment taught me that life is fragile, but purpose is forever. 
            I channeled my grief into coding, determined to build technology that uplifts others the way 
            I wish I could have been uplifted.
          </p>

          <p>
            At an all-boys school in Johannesburg, I learned discipline and humility, graduating in the 
            <span className="text-foreground font-semibold"> top 1% of students in South Africa</span>. 
            I won the Breakthrough Junior Challenge regional championship, earning recognition on national television. 
            But the real breakthrough was realizing that my skills could serve something bigger than myself.
          </p>

          <p>
            Today, at the University of Washington, I'm building 
            <span className="text-foreground font-semibold"> OuraNote </span>
            — an AI mental health journaling app — and 
            <span className="text-foreground font-semibold"> Finderly </span>
            — a voice assistant for home repairs. I've helped donate 3,300+ books and rescue 1,200+ animals through 
            NGO websites I built.
          </p>

          <p className="text-foreground font-semibold text-xl pt-4">
            I don't just code. I create with compassion.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-[var(--gradient-card)] border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">My Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 animate-fade-in-up ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-4 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                      <div className="text-foreground">{item.event}</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-lg" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;