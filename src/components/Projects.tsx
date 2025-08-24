import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Pumori (Banking Software)",
      description: "A modern frontend for Pumori, a core banking solution widely used in Nepal. Designed to enhance banking operations and improve user experience.",
      image: "/pumori-banner.webp", // Make sure 'pumori.webp' is in your /public folder
      // liveUrl: 'https://pumori-frontend-demo.vercel.app', // Uncomment and replace if available
      // githubUrl: 'https://github.com/avishekrimal/pumori-frontend', // Uncomment and replace if available
      techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "REST API"],
      features: ["Customer Account Management", "Transaction History", "Loan & Deposit Module"],
      category: "Frontend",
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "A comprehensive ERP system for managing business processes, including finance, HR, and supply chain.",
      image: "/erp.webp", // Assuming 'erp.webp' is in your /public folder
      // liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
      // githubUrl: 'https://github.com/avishekrimal/ecommerce-dashboard',
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
      features: ["Dashboard Analytics", "User Management", "Inventory Tracking"],
      category: "Frontend",
    },
    {
      title: "Portfolio Website Builder",
      description: "A no-code solution for creating beautiful portfolio websites with customizable templates and themes.",
      image: "/image.png", // Assuming 'image.png' is in your /public folder
      // liveUrl: 'https://portfolio-builder-demo.vercel.app',
      // githubUrl: 'https://github.com/avishekrimal/portfolio-builder',
      techStack: ["Next.js", "Tailwind CSS"],
      features: ["Drag & Drop Builder", "Custom Templates", "Export Options"],
      category: "Frontend",
    },
    {
      title: "Inventory Management System",
      description: "A robust inventory management application for tracking stock levels, orders, and suppliers with real-time updates.",
      image: "/inv.jpg", // Assuming 'inv.jpg' is in your /public folder
      // liveUrl: 'https://lms-demo.vercel.app',
      // githubUrl: 'https://github.com/avishekrimal/learning-management',
      techStack: ["React", "TypeScript", "Redux Toolkit", "Firebase", "Material-UI"],
      features: ["Real-time Stock Updates", "Order Management", "Supplier Tracking"],
      category: "Frontend",
    },
    {
      title: "Intelligent Student Planner",
      description: "A full-stack planner to help students organize tasks, schedules, and notes, complete with an interactive calendar and a productivity dashboard.",
      image: "/studentplanner.png",
      // liveUrl: 'YOUR_DEPLOYED_URL_HERE',
      // githubUrl: 'https://github.com/avishekrimal/student-planner',
      techStack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn/UI", "Recharts"],
      features: ["Secure User Authentication", "Advanced Task Management", "Interactive Calendar", "Productivity Dashboard", "Automated Email Reminders", "Rich Text Notes"],
      category: "Full Stack",
    },
  ];

  const categoryIcons = {
    Frontend: Zap,
    "Full Stack": Users,
    Mobile: Calendar,
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A showcase of my recent work, featuring modern web applications built with cutting-edge technologies and best practices.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Zap;

            return (
              <Card key={project.title} className="card-glass card-hover group animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="p-0">
                  {/* --- MODIFIED SECTION FOR STANDARD REACT --- */}
                  <div className="relative overflow-hidden rounded-t-lg h-48">
                    {/* Use a standard <img> tag */}
                    <img
                      src={project.image}
                      alt={project.title}
                      // These classes make the image fill the container correctly
                      className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* This div is the hover overlay, it sits on top of the image */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">{/* Buttons are still here but commented out */}</div>
                    </div>
                  </div>
                  {/* --- END OF MODIFIED SECTION --- */}
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

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
                  <div className="flex space-x-3 w-full">{/* Footer buttons are still here but commented out */}</div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          {/* <Button 
            variant="outline" 
            size="lg"
            className="btn-outline px-8 py-4"
            onClick={() => window.open('https://github.com/avishekrimal', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
