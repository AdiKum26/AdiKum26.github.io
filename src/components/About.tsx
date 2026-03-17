import { Award, Heart, Code2, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, inView } = useInView({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  const values = [
    {
      id: "ubuntu",
      icon: Heart,
      title: "Ubuntu",
      description: "I am because we are — technology should serve humanity"
    },
    {
      id: "resilience",
      icon: Sparkles,
      title: "Resilience",
      description: "From losing my father to thriving at UW — growth through adversity"
    },
    {
      id: "innovation",
      icon: Code2,
      title: "Innovation",
      description: "Building AI solutions that solve real-world problems"
    },
    {
      id: "impact",
      icon: Award,
      title: "Impact",
      description: "3,300+ books donated, 1,200+ animals rescued, lives changed"
    }
  ];

  const timeline = [
    { id: "born", year: "2005", event: "Born in India" },
    { id: "sa", year: "2007", event: "Moved to South Africa" },
    { id: "cricket", year: "2018", event: "Selected for provincial cricket" },
    { id: "father", year: "2021", event: "Lost my father, found purpose in coding" },
    { id: "bjc", year: "2022", event: "Breakthrough Junior Challenge Regional Champion" },
    { id: "top1", year: "2023", event: "Top 1% student in South Africa" },
    { id: "uw", year: "2024", event: "Direct admit to UW Computer Science" },
    { id: "apps", year: "2025", event: "Building OuraNote & Finderly, changing lives" },
    { id: "research", year: "2026", event: "AI Systems Researcher at Paul G. Allen School | Incoming SWE at LinkedIn & Amazon" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionWrapper className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </SectionWrapper>

        {/* Story Section */}
        <SectionWrapper className="max-w-4xl mx-auto mb-20 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            I was born in India, raised in South Africa, and now call Seattle home. My journey has been shaped by
            <span className="text-foreground font-semibold"> Ubuntu </span>
            — the belief that "I am because we are."
          </p>

          <p>
            In 2021, I lost my father. That moment taught me that life is fragile, but purpose is forever.
            I channeled my grief into coding — determined to build technology that uplifts others the way
            I once wished to be uplifted.
          </p>

          <p>
            Growing up, I poured my heart into cricket, playing at both provincial and club level alongside professional athletes.
            The sport taught me focus, teamwork, and the mental toughness to perform under pressure — qualities I now bring into
            every project I build. My passion for fitness and strength training keeps me grounded; I believe discipline in the gym
            mirrors discipline in life and engineering.
          </p>

          <p>
            At an all-boys school in Johannesburg, I learned humility and leadership, graduating in the
            <span className="text-foreground font-semibold"> top 1% of students in South Africa</span>.
            I won the Breakthrough Junior Challenge regional championship, earning recognition on national television.
            But my real breakthrough was realizing that my skills could serve something greater than myself.
          </p>

          <p>
            Today, at the University of Washington, I'm building
            <span className="text-foreground font-semibold"> OuraNote </span>
            — an AI mental health journaling app — and Finderly, an AI DIY app for home repairs.
            I've helped donate over 3,300 books and rescue 1,200+ animals through NGO websites I built.
          </p>

          <p>
            Looking ahead to 2026, I'm honored to be continuing my research in Agentic AI at the
            <span className="text-foreground font-semibold"> Paul G. Allen School </span>
            while preparing for my software engineering roles at
            <span className="text-foreground font-semibold"> LinkedIn and Amazon</span>.
            My goal remains the same: to build systems that aren't just intelligent, but meaningful.
          </p>

          <p className="text-foreground font-semibold text-xl pt-4">
            I don't just code. I create with compassion, discipline, and purpose.
          </p>
        </SectionWrapper>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <SectionWrapper key={value.id}>
                <div
                  className="p-6 rounded-2xl bg-[var(--gradient-card)] border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </SectionWrapper>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h3 className="text-3xl font-bold text-center mb-12">My Journey</h3>
          </SectionWrapper>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <SectionWrapper key={item.id}>
                  <div
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row pl-10 md:pl-0`}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <div className="inline-block p-4 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                        <div className="text-foreground">{item.event}</div>
                      </div>
                    </div>

                    <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-lg flex-shrink-0 absolute md:relative left-0 md:left-auto" />

                    <div className="hidden md:flex flex-1" />
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;