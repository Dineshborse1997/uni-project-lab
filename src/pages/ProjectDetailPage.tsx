import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Share, Download, Eye, Clock, Users, Star, CheckCircle } from "lucide-react";

const ProjectDetailPage = () => {
  const { id } = useParams();

  // Mock project data - in real app, this would come from API
  const project = {
    id: 1,
    title: "E-commerce Platform with Payment Integration",
    category: "Web Development",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "JWT"],
    difficulty: "Advanced",
    price: "₹3,500",
    duration: "2-3 weeks",
    abstract: "A comprehensive e-commerce solution built with modern web technologies. This project includes user authentication, product catalog management, shopping cart functionality, and secure payment processing using Stripe API. The system features both customer and admin interfaces with responsive design.",
    fullDescription: "This full-stack e-commerce platform demonstrates advanced web development concepts including RESTful API design, database management, user authentication, and payment gateway integration. The project showcases industry-standard practices for building scalable web applications.",
    features: [
      "User Registration & Authentication (JWT)",
      "Product Catalog with Search & Filtering",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing (Stripe)",
      "Order Management System",
      "Admin Dashboard",
      "Responsive Design",
      "Email Notifications",
      "Inventory Management",
      "Analytics Dashboard"
    ],
    systemRequirements: [
      "Node.js 16+ and npm",
      "MongoDB database",
      "Stripe API keys",
      "Email service (SendGrid/NodeMailer)",
      "Web browser (Chrome, Firefox, Safari)"
    ],
    deliverables: [
      "Complete source code with comments",
      "Database schema and setup scripts",
      "Installation and configuration guide",
      "User manual and API documentation",
      "Demo video and screenshots",
      "Project presentation slides"
    ],
    screenshots: [
      "Homepage with product showcase",
      "Product catalog with filters",
      "Shopping cart interface",
      "Checkout and payment flow",
      "Admin dashboard",
      "User profile management"
    ],
    likes: 45,
    views: 1200,
    rating: 4.8,
    reviews: 23
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="tech">{project.category}</Badge>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                {project.abstract}
              </p>
              
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>{project.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>{project.likes} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>{project.rating} ({project.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="gradient-card shadow-xl border-0">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{project.price}</div>
                    <p className="text-muted-foreground">One-time purchase</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full" size="lg" variant="gradient">
                      Purchase Project
                    </Button>
                    <Button className="w-full" variant="outline">
                      Request Demo
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 inline mr-1" />
                    30-day money-back guarantee
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Screenshots Section */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Screenshots & Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-8 text-center border-2 border-dashed border-muted-foreground/20">
                        <div className="text-muted-foreground mb-2">
                          <Eye className="h-8 w-8 mx-auto" />
                        </div>
                        <p className="text-sm font-medium">{screenshot}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      View Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Tech Stack */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Requirements */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>System Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.systemRequirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What You Get */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>What You Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get This Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get complete source code, documentation, and implementation support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Purchase Now - {project.price}
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Request Custom Version
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;