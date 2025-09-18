import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Code, Smartphone, Brain, Cloud, Wifi, Star, ChevronRight, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HomePage = () => {
  const categories = [
    { 
      name: "Web Development", 
      icon: Code, 
      count: "150+ Projects",
      description: "Full-stack web applications, APIs, and modern frameworks"
    },
    { 
      name: "Mobile Apps", 
      icon: Smartphone, 
      count: "80+ Projects",
      description: "Android, iOS, and cross-platform mobile applications"
    },
    { 
      name: "AI/ML", 
      icon: Brain, 
      count: "60+ Projects",
      description: "Machine learning models, data analysis, and AI solutions"
    },
    { 
      name: "Cloud/DevOps", 
      icon: Cloud, 
      count: "40+ Projects",
      description: "Cloud deployments, containerization, and CI/CD pipelines"
    },
    { 
      name: "IoT Projects", 
      icon: Wifi, 
      count: "50+ Projects",
      description: "Internet of Things devices and smart systems"
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "IIT Delhi",
      text: "The project I got from ProjectHub helped me secure a great placement. The code quality and documentation were excellent!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Rahul Patel",
      university: "VIT Vellore",
      text: "Amazing custom project service. They understood my requirements perfectly and delivered exactly what I needed.",
      rating: 5,
      project: "ML Prediction System"
    },
    {
      name: "Anita Kumar",
      university: "BITS Pilani",
      text: "Great variety of projects and very helpful support team. Made my final year project stress-free!",
      rating: 5,
      project: "Mobile App Development"
    },
  ];

  const features = [
    {
      title: "Ready-Made Projects",
      description: "Browse our extensive collection of completed projects with source code, documentation, and demos.",
      icon: Code
    },
    {
      title: "Custom Development",
      description: "Get a project tailored to your specific requirements and academic guidelines.",
      icon: Users
    },
    {
      title: "Expert Support",
      description: "24/7 technical support from experienced developers to help you understand and implement your project.",
      icon: CheckCircle
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get Ready-Made Final Year Projects for 
              <span className="text-primary-glow"> Engineering & Diploma</span> Students
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Choose from 400+ professionally developed projects or request a custom solution. 
              Complete with source code, documentation, and implementation support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search projects by technology, domain, or keywords..."
                  className="h-14 pl-12 pr-32 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-xl"
                />
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  Search Projects
                </Button>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  Browse Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/request">Request Custom Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ProjectHub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive project solutions to help you excel in your academic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center gradient-card shadow-card card-hover">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Categories</h2>
            <p className="text-xl text-muted-foreground">
              Explore projects across different technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="card-hover gradient-card shadow-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <Badge variant="tech">{category.count}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="gradient" size="lg">
              <Link to="/projects">
                View All Categories
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how our projects helped students achieve their academic goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.university}</CardDescription>
                  <Badge variant="tech" className="w-fit">{testimonial.project}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Final Year Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who have successfully completed their projects with our help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90">
                <Link to="/projects">Browse Projects</Link>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <Link to="/request">Request Custom Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;