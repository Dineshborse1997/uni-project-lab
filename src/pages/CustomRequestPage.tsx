import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Clock, Users, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CustomRequestPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    university: "",
    degree: "",
    domain: "",
    technology: "",
    deadline: "",
    budget: "",
    requirements: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.email || !formData.requirements) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll review your requirements and get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      studentName: "",
      email: "",
      university: "",
      degree: "",
      domain: "",
      technology: "",
      deadline: "",
      budget: "",
      requirements: ""
    });
  };

  const domains = [
    "Web Development",
    "Mobile App Development",
    "Data Science & Analytics",
    "Machine Learning & AI",
    "Cloud Computing",
    "Internet of Things (IoT)",
    "Blockchain",
    "Cybersecurity",
    "Game Development",
    "DevOps & Automation",
    "Database Management",
    "Other"
  ];

  const technologies = [
    "React.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "C#/.NET",
    "PHP",
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Docker",
    "Other"
  ];

  const budgetRanges = [
    "₹2,000 - ₹5,000",
    "₹5,000 - ₹10,000",
    "₹10,000 - ₹15,000",
    "₹15,000 - ₹25,000",
    "₹25,000+"
  ];

  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored to your specific requirements and academic guidelines"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed delivery within your deadline with regular progress updates"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers and researchers working on your project"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Thorough testing and quality checks before final delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request Custom Project
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get a tailor-made final year project designed specifically for your requirements, 
            academic guidelines, and technology preferences.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center gradient-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Project Request Form</CardTitle>
                    <CardDescription>
                      Provide detailed information about your project requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="studentName">Full Name *</Label>
                          <Input
                            id="studentName"
                            value={formData.studentName}
                            onChange={(e) => handleInputChange("studentName", e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="university">University/College</Label>
                          <Input
                            id="university"
                            value={formData.university}
                            onChange={(e) => handleInputChange("university", e.target.value)}
                            placeholder="Your institution name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="degree">Degree Program</Label>
                          <Input
                            id="degree"
                            value={formData.degree}
                            onChange={(e) => handleInputChange("degree", e.target.value)}
                            placeholder="e.g., B.Tech CSE, MCA, etc."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="domain">Project Domain</Label>
                          <Select value={formData.domain} onValueChange={(value) => handleInputChange("domain", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select domain" />
                            </SelectTrigger>
                            <SelectContent>
                              {domains.map(domain => (
                                <SelectItem key={domain} value={domain}>
                                  {domain}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="technology">Preferred Technology</Label>
                          <Select value={formData.technology} onValueChange={(value) => handleInputChange("technology", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select technology" />
                            </SelectTrigger>
                            <SelectContent>
                              {technologies.map(tech => (
                                <SelectItem key={tech} value={tech}>
                                  {tech}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="deadline">Project Deadline</Label>
                          <Input
                            id="deadline"
                            type="date"
                            value={formData.deadline}
                            onChange={(e) => handleInputChange("deadline", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map(range => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="requirements">Project Requirements *</Label>
                        <Textarea
                          id="requirements"
                          value={formData.requirements}
                          onChange={(e) => handleInputChange("requirements", e.target.value)}
                          placeholder="Describe your project requirements in detail. Include:
- Project objectives and scope
- Key features you want
- Specific academic guidelines to follow
- Any constraints or special requirements
- Expected deliverables"
                          rows={8}
                          required
                        />
                      </div>

                      <Button type="submit" variant="gradient" size="lg" className="w-full">
                        Submit Project Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Process */}
                <Card className="gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle>Our Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Requirement Analysis</h4>
                        <p className="text-sm text-muted-foreground">We analyze your requirements within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Proposal & Quote</h4>
                        <p className="text-sm text-muted-foreground">Detailed project plan and pricing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Development</h4>
                        <p className="text-sm text-muted-foreground">Expert team works on your project</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Delivery & Support</h4>
                        <p className="text-sm text-muted-foreground">Complete project with documentation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* What's Included */}
                <Card className="gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Complete source code",
                        "Database design & setup",
                        "Technical documentation",
                        "Installation guide",
                        "User manual",
                        "Project presentation",
                        "Demo video",
                        "30 days support"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card className="gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about your project requirements? Our team is here to help.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Email:</strong> support@projecthub.com
                      </div>
                      <div>
                        <strong>Phone:</strong> +91 9876543210
                      </div>
                      <div>
                        <strong>Hours:</strong> Mon-Fri 9AM-6PM IST
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomRequestPage;