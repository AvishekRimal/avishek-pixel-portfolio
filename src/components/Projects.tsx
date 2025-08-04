import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'A comprehensive ERP system for managing business processes, including finance, HR, and supply chain.',
      image: '/placeholder.svg',
      // liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
      // githubUrl: 'https://github.com/avishekrimal/ecommerce-dashboard',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
      features: [ 'Dashboard Analytics', 'User Management', 'Inventory Tracking'],
      category: 'Frontend'
    },
    // {
    //   title: 'Weather App Pro',
    //   description: 'A modern weather application with location-based forecasts, interactive maps, and personalized weather alerts.',
    //   image: '/placeholder.svg',
    //   liveUrl: 'https://weather-app-pro-demo.vercel.app',
    //   githubUrl: 'https://github.com/avishekrimal/weather-app-pro',
    //   techStack: ['Next.js', 'TypeScript', 'OpenWeather API', 'Mapbox', 'Framer Motion'],
    //   features: ['Location-based Forecasts', 'Interactive Maps', 'Weather Alerts'],
    //   category: 'Frontend'
    // },
    // {
    //   title: 'Task Management System',
    //   description: 'A collaborative task management platform with drag-and-drop functionality, team collaboration, and progress tracking.',
    //   image: '/placeholder.svg',
    //   liveUrl: 'https://task-manager-demo.vercel.app',
    //   githubUrl: 'https://github.com/avishekrimal/task-management',
    //   techStack: ['React', 'Redux Toolkit', 'DnD Kit', 'Firebase', 'Material-UI'],
    //   features: ['Drag & Drop', 'Team Collaboration', 'Progress Tracking'],
    //   category: 'Full Stack'
    // },
    {
      title: 'Portfolio Website Builder',
      description: 'A no-code solution for creating beautiful portfolio websites with customizable templates and themes.',
      image: '/placeholder.svg',
      liveUrl: 'https://portfolio-builder-demo.vercel.app',
      githubUrl: 'https://github.com/avishekrimal/portfolio-builder',
      techStack: [ 'Next.js', 'Tailwind CSS', ],
      features: ['Drag & Drop Builder', 'Custom Templates', 'Export Options'],
      category: 'Frontend'
    },
    {
      title: 'Inventory Management System',
      description: 'A robust inventory management application for tracking stock levels, orders, and suppliers with real-time updates.',
      image: '/placeholder.svg',
      // liveUrl: 'https://lms-demo.vercel.app',
      // githubUrl: 'https://github.com/avishekrimal/learning-management',
      techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Material-UI'],
      features: ['Real-time Stock Updates', 'Order Management', 'Supplier Tracking'],
      category: 'Frontend'
    },
    // {
    //   title: 'Cryptocurrency Tracker',
    //   description: 'A real-time cryptocurrency tracking application with portfolio management and price alerts.',
    //   image: '/placeholder.svg',
    //   liveUrl: 'https://crypto-tracker-demo.vercel.app',
    //   githubUrl: 'https://github.com/avishekrimal/crypto-tracker',
    //   techStack: ['React', 'TypeScript', 'CoinGecko API', 'Chart.js', 'LocalStorage'],
    //   features: ['Real-time Prices', 'Portfolio Tracking', 'Price Alerts'],
    //   category: 'Frontend'
    // }
  ];

  const categoryIcons = {
    'Frontend': Zap,
    'Full Stack': Users,
    'Mobile': Calendar
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with 
            cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Zap;
            
            return (
              <Card 
                key={project.title}
                className="card-glass card-hover group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 h-48 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      <IconComponent className="w-16 h-16" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <Button 
                          size="sm" 
                          className="btn-hero"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} className="text-xs bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex space-x-3 w-full">
                    {/* <Button 
                      className="flex-1 btn-hero"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button> */}
                    {/* <Button 
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button> */}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="btn-outline px-8 py-4"
            onClick={() => window.open('https://github.com/avishekrimal', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;