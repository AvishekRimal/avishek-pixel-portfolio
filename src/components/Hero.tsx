import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/IMG-e6207925ce66c978c009ffb5391966a3-V.jpg';

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AvishekRimalCV.pdf';
    link.download = 'AvishekRimalCV.pdf';
    link.click();
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Avishek Rimal</span>
                {/* SEO Trick: Visually hidden text for search engines to index the alternate spelling */}
                <span className="sr-only"> (Abhishek Rimal)</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Frontend Developer & UI/UX Specialist
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
               I am Avishek Rimal, a Frontend Developer based in Kathmandu, Nepal. I specialize in crafting visually stunning and highly functional web applications. With a passion for design and a keen eye for detail, I create seamless user experiences that captivate and engage. My expertise lies in HTML, CSS, JavaScript, React, and Next.js, allowing me to bring innovative ideas to life. Whether it's building responsive interfaces or optimizing performance, I am dedicated to delivering exceptional results that exceed expectations.  
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={downloadCV}
                className="btn-hero px-8 py-6 text-lg font-semibold"
                aria-label="Download Avishek Rimal's CV"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline px-8 py-6 text-lg font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/avishekrimal" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Avishek Rimal GitHub"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/avishek-rimal-67a63a22b/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Avishek Rimal LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:avishek.rimal2002@gmail.com"
                title="Email Abhishek Rimal"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative animate-slide-up lg:animate-fade-in">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-float"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-[var(--shadow-glow)]">
                <img
                  src={profilePhoto}
                  /* Optimized Alt Text for both spellings */
                  alt="Avishek Rimal (Abhishek Rimal) - Professional Frontend Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;