import { Code, Zap, MessageCircle, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const strengths = [
    {
      icon: Palette,
      title: 'Creativity',
      description: 'Bringing innovative and visually appealing designs to life with attention to detail.'
    },
    {
      icon: Code,
      title: 'Responsiveness',
      description: 'Building adaptive interfaces that work seamlessly across all devices and screen sizes.'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Delivering high-performance applications with optimized code and fast loading times.'
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Clear and effective collaboration with teams and stakeholders throughout the development process.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-semibold">
                Passionate Frontend Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Avishek Rimal, a dedicated frontend developer with a passion for creating 
                exceptional user experiences. My journey in web development started with curiosity 
                about how websites work, and it has evolved into a deep love for crafting interactive, 
                accessible, and performant web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern JavaScript frameworks like React and Next.js, combined with 
                the utility-first approach of Tailwind CSS. My goal is to bridge the gap between 
                design and development, ensuring that every pixel serves a purpose and every 
                interaction feels natural.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and staying updated with the ever-evolving landscape of web development.
              </p>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card 
                key={strength.title} 
                className="card-glass card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <strength.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{strength.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;