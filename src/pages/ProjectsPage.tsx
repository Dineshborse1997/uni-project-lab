import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Eye, Heart, Code, Smartphone, Brain, Cloud, Wifi, Database } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform with Payment Integration",
      category: "Web Development",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      difficulty: "Advanced",
      abstract: "A complete e-commerce solution with user authentication, product catalog, shopping cart, and secure payment processing using Stripe API.",
      icon: Code,
      likes: 45,
      views: 1200,
      price: "₹3,500"
    },
    {
      id: 2,
      title: "Fitness Tracking Mobile App",
      category: "Mobile Apps",
      techStack: ["React Native", "Firebase", "Redux"],
      difficulty: "Intermediate",
      abstract: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      icon: Smartphone,
      likes: 38,
      views: 890,
      price: "₹2,800"
    },
    {
      id: 3,
      title: "Customer Churn Prediction System",
      category: "AI/ML",
      techStack: ["Python", "Scikit-learn", "Pandas", "Flask"],
      difficulty: "Advanced",
      abstract: "Machine learning model to predict customer churn using various algorithms and deployed as a web service.",
      icon: Brain,
      likes: 52,
      views: 1450,
      price: "₹4,200"
    },
    {
      id: 4,
      title: "Microservices Architecture with Docker",
      category: "Cloud/DevOps",
      techStack: ["Docker", "Kubernetes", "Node.js", "MySQL"],
      difficulty: "Expert",
      abstract: "Scalable microservices architecture with containerization, API gateway, and automated deployment pipelines.",
      icon: Cloud,
      likes: 29,
      views: 780,
      price: "₹5,000"
    },
    {
      id: 5,
      title: "Smart Home Automation System",
      category: "IoT",
      techStack: ["Arduino", "Raspberry Pi", "MQTT", "React"],
      difficulty: "Intermediate",
      abstract: "IoT-based home automation system with sensor integration, remote control, and real-time monitoring dashboard.",
      icon: Wifi,
      likes: 41,
      views: 1100,
      price: "₹3,200"
    },
    {
      id: 6,
      title: "Hospital Management System",
      category: "Web Development",
      techStack: ["Django", "PostgreSQL", "Bootstrap", "Chart.js"],
      difficulty: "Intermediate",
      abstract: "Comprehensive hospital management system with patient records, appointment scheduling, and inventory management.",
      icon: Database,
      likes: 35,
      views: 950,
      price: "₹3,800"
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Apps", label: "Mobile Apps" },
    { value: "AI/ML", label: "AI/ML" },
    { value: "Cloud/DevOps", label: "Cloud/DevOps" },
    { value: "IoT", label: "IoT" },
  ];

  const technologies = [
    { value: "all", label: "All Technologies" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "React Native", label: "React Native" },
    { value: "Django", label: "Django" },
  ];

  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
    { value: "Expert", label: "Expert" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesTech = selectedTech === "all" || project.techStack.includes(selectedTech);
      const matchesDifficulty = difficultyFilter === "all" || project.difficulty === difficultyFilter;
      
      return matchesSearch && matchesCategory && matchesTech && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedTech, difficultyFilter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Catalog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of ready-made final year projects
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects by title, technology, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 pl-12 text-base bg-white/95 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filters:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  {technologies.map(tech => (
                    <SelectItem key={tech.value} value={tech.value}>
                      {tech.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="gradient-card shadow-card card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="tech">{project.category}</Badge>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {project.abstract}
                  </CardDescription>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-primary">{project.price}</div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button asChild variant="default" className="flex-1">
                      <Link to={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No projects found matching your criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedTech("all");
                  setDifficultyFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;