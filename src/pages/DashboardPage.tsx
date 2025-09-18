import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Eye, Download, Settings, Plus, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Mock data - would come from API in real app
  const savedProjects = [
    {
      id: 1,
      title: "E-commerce Platform with Payment Integration",
      category: "Web Development",
      price: "₹3,500",
      savedAt: "2024-01-15",
      status: "saved"
    },
    {
      id: 2,
      title: "Customer Churn Prediction System",
      category: "AI/ML",
      price: "₹4,200",
      savedAt: "2024-01-10",
      status: "saved"
    }
  ];

  const requestedProjects = [
    {
      id: 1,
      title: "Custom Hospital Management System",
      domain: "Web Development",
      technology: "React + Node.js",
      submittedAt: "2024-01-20",
      status: "in_review",
      estimatedPrice: "₹8,000"
    },
    {
      id: 2,
      title: "IoT Smart Agriculture System",
      domain: "IoT",
      technology: "Arduino + React",
      submittedAt: "2024-01-18",
      status: "approved",
      estimatedPrice: "₹6,500"
    },
    {
      id: 3,
      title: "Mobile Expense Tracker",
      domain: "Mobile Apps",
      technology: "React Native",
      submittedAt: "2024-01-12",
      status: "completed",
      estimatedPrice: "₹4,000"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_review":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="w-3 h-3 mr-1" />In Review</Badge>;
      case "approved":
        return <Badge variant="success"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case "completed":
        return <Badge variant="tech"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-600 border-orange-600"><AlertCircle className="w-3 h-3 mr-1" />Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-xl text-white/90">
                Manage your projects and track your progress
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/projects">
                  <Plus className="w-4 h-4 mr-2" />
                  Browse Projects
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/request">
                  Request Custom
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="saved" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="saved">Saved Projects ({savedProjects.length})</TabsTrigger>
                  <TabsTrigger value="requested">Requested Projects ({requestedProjects.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="saved" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Your Saved Projects</h2>
                    <p className="text-muted-foreground mb-6">
                      Projects you've saved for later consideration
                    </p>
                  </div>

                  {savedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {savedProjects.map((project) => (
                        <Card key={project.id} className="gradient-card shadow-card card-hover">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <Badge variant="tech">{project.category}</Badge>
                              <Button variant="ghost" size="sm">
                                <Heart className="w-4 h-4 fill-current text-red-500" />
                              </Button>
                            </div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription>
                              Saved on {new Date(project.savedAt).toLocaleDateString()}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold text-primary">{project.price}</div>
                              <div className="flex gap-2">
                                <Button asChild variant="outline" size="sm">
                                  <Link to={`/projects/${project.id}`}>
                                    <Eye className="w-4 h-4 mr-1" />
                                    View
                                  </Link>
                                </Button>
                                <Button variant="default" size="sm">
                                  <Download className="w-4 h-4 mr-1" />
                                  Purchase
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="gradient-card shadow-card text-center py-12">
                      <CardContent>
                        <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No Saved Projects</h3>
                        <p className="text-muted-foreground mb-4">
                          Start exploring our project catalog and save projects you're interested in
                        </p>
                        <Button asChild variant="gradient">
                          <Link to="/projects">Browse Projects</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="requested" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Your Custom Requests</h2>
                    <p className="text-muted-foreground mb-6">
                      Track the status of your custom project requests
                    </p>
                  </div>

                  {requestedProjects.length > 0 ? (
                    <div className="space-y-4">
                      {requestedProjects.map((request) => (
                        <Card key={request.id} className="gradient-card shadow-card">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-lg">{request.title}</CardTitle>
                                <CardDescription>
                                  {request.domain} • {request.technology}
                                </CardDescription>
                              </div>
                              {getStatusBadge(request.status)}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Submitted</p>
                                <p className="font-medium">{new Date(request.submittedAt).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Estimated Price</p>
                                <p className="font-medium text-primary">{request.estimatedPrice}</p>
                              </div>
                              <div className="flex items-end">
                                {request.status === "completed" && (
                                  <Button variant="gradient" size="sm">
                                    <Download className="w-4 h-4 mr-1" />
                                    Download
                                  </Button>
                                )}
                                {request.status === "approved" && (
                                  <Button variant="default" size="sm">
                                    Proceed to Payment
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="gradient-card shadow-card text-center py-12">
                      <CardContent>
                        <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No Custom Requests</h3>
                        <p className="text-muted-foreground mb-4">
                          Request a custom project tailored to your specific requirements
                        </p>
                        <Button asChild variant="gradient">
                          <Link to="/request">Request Custom Project</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Account Type</p>
                      <Badge variant="tech" className="capitalize">{user.role}</Badge>
                    </div>
                    <div className="pt-3 space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Settings className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saved Projects</span>
                      <span className="font-medium">{savedProjects.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Custom Requests</span>
                      <span className="font-medium">{requestedProjects.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completed</span>
                      <span className="font-medium">
                        {requestedProjects.filter(r => r.status === "completed").length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link to="/projects">
                      <Eye className="w-4 h-4 mr-2" />
                      Browse All Projects
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link to="/request">
                      <Plus className="w-4 h-4 mr-2" />
                      New Custom Request
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;