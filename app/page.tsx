import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Users,
  Calendar,
  Brain,
  Shield,
  DollarSign,
  Zap,
  CheckCircle,
  Camera,
  MapPin,
  Clock,
  AlertTriangle,
  Smartphone,
  CreditCard,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ApiConfiguration } from "@/components/api-configuration"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/eoc-logo.png"
                alt="Edgeofcali Media Network LLC"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary font-serif">EOC AI</h1>
                <p className="text-xs text-muted-foreground">Edgeofcali Media Network LLC</p>
              </div>
              <Badge variant="secondary">PRD v1.0</Badge>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors">
                Overview
              </a>
              <a href="#examples" className="text-muted-foreground hover:text-primary transition-colors">
                Software Examples
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#configuration" className="text-muted-foreground hover:text-primary transition-colors">
                Configuration
              </a>
              <a href="#architecture" className="text-muted-foreground hover:text-primary transition-colors">
                Architecture
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute top-4 right-4 flex space-x-3">
          <Link href="/login">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-white text-blue-900 hover:bg-gray-100">Get Started</Button>
          </Link>
        </div>

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/eoc-logo.png"
              alt="EOC AI Logo"
              width={120}
              height={120}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">EOC AI</h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">Construction Management Platform</p>
          <p className="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
            AI-powered scheduling, compliance checking, and field management for professional home builders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg bg-transparent"
              >
                Sign In
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            By <strong>Edgeofcali Media Network LLC</strong>
          </p>
        </div>
      </section>

      <section id="examples" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 font-serif">Software Interface Examples</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            See how homebuilders interact with EOC AI in real construction scenarios - from AI scheduling to field
            quality control.
          </p>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="dashboard">AI Dashboard</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Field App</TabsTrigger>
              <TabsTrigger value="compliance">Compliance Check</TabsTrigger>
              <TabsTrigger value="scheduling">Smart Scheduling</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-3 h-6 w-6 text-primary" />
                    AI Construction Dashboard - Project Overview
                  </CardTitle>
                  <CardDescription>
                    Real-time project status with AI-powered insights and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-background border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Active Projects</span>
                          <span className="text-2xl font-bold text-green-600">12</span>
                        </div>
                        <Building2 className="h-8 w-8 text-green-500" />
                      </CardContent>
                    </Card>
                    <Card className="bg-background border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">On Schedule</span>
                          <span className="text-2xl font-bold text-blue-600">89%</span>
                        </div>
                        <Clock className="h-8 w-8 text-blue-500" />
                      </CardContent>
                    </Card>
                    <Card className="bg-background border-l-4 border-l-orange-500">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">AI Alerts</span>
                          <span className="text-2xl font-bold text-orange-600">3</span>
                        </div>
                        <AlertTriangle className="h-8 w-8 text-orange-500" />
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-lg">AI Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-900">Schedule Optimization Available</p>
                          <p className="text-sm text-blue-700">
                            Lot 47: Move electrical rough-in 2 days earlier to avoid weather delays. Estimated 3-day
                            schedule improvement.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-green-900">Inspection Ready</p>
                          <p className="text-sm text-green-700">
                            Lot 23: All framing checklist items completed. AI confidence: 94%. Ready for inspection
                            request.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-orange-900">Potential Issue Detected</p>
                          <p className="text-sm text-orange-700">
                            Lot 15: Fire blocking photos show potential CBC violation. Recommend trade contractor review
                            before inspection.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="mr-3 h-6 w-6 text-primary" />
                    Mobile Field App - Trade Contractor View
                  </CardTitle>
                  <CardDescription>How electricians, plumbers, and framers use EOC AI on-site</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <MapPin className="mr-2 h-5 w-5 text-primary" />
                          Today's Tasks - Lot 47
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <p className="font-medium text-green-900">Electrical Rough-In</p>
                            <p className="text-sm text-green-700">Kitchen & Living Room</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">In Progress</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">Panel Installation</p>
                            <p className="text-sm text-muted-foreground">Main electrical panel</p>
                          </div>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">Final Connections</p>
                            <p className="text-sm text-muted-foreground">GFCI outlets & switches</p>
                          </div>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Camera className="mr-2 h-5 w-5 text-primary" />
                          AI Photo Validation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">Tap to capture evidence photo</p>
                          <Button size="sm" className="bg-primary">
                            <Camera className="mr-2 h-4 w-4" />
                            Take Photo
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Wire gauge compliance</span>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Proper grounding</span>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Code labeling</span>
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                          </div>
                        </div>
                        <Button className="w-full bg-primary">Submit for AI Review</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-primary" />
                    California Building Code Compliance Dashboard
                  </CardTitle>
                  <CardDescription>
                    AI-powered compliance checking for CBC, CALGreen, Title 24, and seismic requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg">Compliance Status - Lot 23</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">CBC Structural</span>
                              <span className="text-sm text-green-600">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">CALGreen Energy</span>
                              <span className="text-sm text-green-600">88%</span>
                            </div>
                            <Progress value={88} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">Title 24 Efficiency</span>
                              <span className="text-sm text-orange-600">72%</span>
                            </div>
                            <Progress value={72} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">Seismic Requirements</span>
                              <span className="text-sm text-green-600">100%</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg">AI Compliance Alerts</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg border-l-4 border-l-red-500">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-red-900">Title 24 Issue</p>
                              <p className="text-sm text-red-700">
                                Window U-factor exceeds 0.30 requirement. Recommend double-pane low-E windows.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-l-yellow-500">
                          <div className="flex items-start space-x-2">
                            <Clock className="h-4 w-4 text-yellow-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-yellow-900">Inspection Due</p>
                              <p className="text-sm text-yellow-700">
                                CALGreen water efficiency inspection required within 48 hours.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-green-900">Seismic Approved</p>
                              <p className="text-sm text-green-700">
                                All structural connections meet Zone 4 seismic requirements.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scheduling" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-primary" />
                    AI-Powered Smart Scheduling
                  </CardTitle>
                  <CardDescription>
                    Constraint-solving optimization with Google OR-Tools for efficient project timelines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg">Schedule Optimization Results</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-blue-900">Original Timeline</span>
                            <span className="text-blue-700">120 days</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-blue-900">AI Optimized</span>
                            <span className="text-blue-700 font-bold">98 days</span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-blue-200">
                            <span className="text-sm text-blue-600">22 days saved (18% improvement)</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Key Optimizations:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Parallel electrical & plumbing rough-in</li>
                            <li>• Early material delivery coordination</li>
                            <li>• Weather-aware exterior scheduling</li>
                            <li>• Inspector availability integration</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg">Critical Path Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                            <span className="text-sm font-medium text-red-900">Foundation Pour</span>
                            <Badge className="bg-red-100 text-red-800">Critical</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                            <span className="text-sm font-medium text-red-900">Framing Inspection</span>
                            <Badge className="bg-red-100 text-red-800">Critical</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                            <span className="text-sm font-medium text-yellow-900">Electrical Rough</span>
                            <Badge className="bg-yellow-100 text-yellow-800">2-day float</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                            <span className="text-sm font-medium text-green-900">Interior Paint</span>
                            <Badge className="bg-green-100 text-green-800">5-day float</Badge>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium mb-1">Next AI Recommendation:</p>
                          <p className="text-sm text-muted-foreground">
                            Move drywall delivery 3 days earlier to create buffer for critical path activities.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Stakeholders */}
      <section id="overview" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 font-serif">Who We Serve</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { role: "Builder/GC", desc: "Define standards, specs, milestones, budgets", icon: Building2 },
              { role: "Superintendents", desc: "Run day-to-day operations, drive schedules", icon: Users },
              { role: "Trade Contractors", desc: "Receive tasks, upload proofs, request inspections", icon: Zap },
              { role: "Inspectors", desc: "See readiness, evidence, and corrections", icon: CheckCircle },
              { role: "Suppliers", desc: "Expose lead times & delivery windows", icon: Calendar },
              { role: "Homebuyers", desc: "Limited milestone view (optional)", icon: Shield },
            ].map((stakeholder, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background">
                <CardHeader className="pb-3">
                  <stakeholder.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm font-semibold">{stakeholder.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{stakeholder.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Outcomes */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 font-serif">Core Outcomes</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-primary" />
                  Auto-Generated Build Schedules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Intelligent scheduling based on:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Builder templates & critical path analysis
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Live material lead times from suppliers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Crew capacity, inspection calendars, weather buffers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-primary" />
                  AI Code/Spec Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Intelligent assistance featuring:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Convert plans & specs into phase checklists
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Suggest inspection readiness
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Flag likely corrections before inspection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-3 h-6 w-6 text-primary" />
                  Field Evidence Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">AI-powered quality control:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Photo/video uploads with AI checklist validation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Auto-package inspection packs for AHJ
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Detect fire blocking, nail patterns, labeling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-primary" />
                  California Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Comprehensive code compliance:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    CBC/CRC, CALGreen, Title 24 profiles
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Seismic and WUI requirements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Jurisdiction-specific inspection sequences
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MVP Scope */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 font-serif">MVP Scope (3-4 Months)</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Must-Have Features</CardTitle>
                <CardDescription>Core functionality for initial release</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Project setup (community, plans, elevations, options)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Role-based access (builder, trade, supplier)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Template schedule builder + auto-schedule
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Mobile task app with offline mode
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Photo/video evidence + AI checklist scoring
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Supplier portal for lead times & delivery windows
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    "Ready for inspection" packet generation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Simple analytics: days saved, rework avoided, on-time %
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Phase 2 Features</CardTitle>
                <CardDescription>Nice-to-have enhancements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    OCR spec extraction from PDFs
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    RFI assistant for automated responses
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    RFQ system to suppliers
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Punch list AI automation
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Weather integration for scheduling
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Homeowner milestone view
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 font-serif">Technical Architecture</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Mobile:</strong> React Native (iOS/Android)
                </p>
                <p>
                  <strong>Web:</strong> React/Next.js
                </p>
                <p>
                  <strong>Features:</strong> Offline-first, background sync
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>API:</strong> Node (NestJS) or Python (FastAPI)
                </p>
                <p>
                  <strong>Database:</strong> Postgres + Redis
                </p>
                <p>
                  <strong>Storage:</strong> Object storage for media
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">AI Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>LLM:</strong> OpenAI for spec Q&A, checklists
                </p>
                <p>
                  <strong>Vision:</strong> CV models for photo validation
                </p>
                <p>
                  <strong>Scheduling:</strong> Google OR-Tools CP-SAT
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Integrations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Construction:</strong> Procore, Autodesk Build
                </p>
                <p>
                  <strong>Documents:</strong> Bluebeam PDF markups
                </p>
                <p>
                  <strong>Suppliers:</strong> API/EDI feeds
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Access:</strong> RBAC, project & lot scoping
                </p>
                <p>
                  <strong>Auth:</strong> SSO/SAML for enterprise
                </p>
                <p>
                  <strong>Compliance:</strong> Audit logs, data encryption
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Cloud:</strong> AWS (RDS, S3, ECS/EKS)
                </p>
                <p>
                  <strong>Queues:</strong> SQS for AI/solver jobs
                </p>
                <p>
                  <strong>Offline:</strong> WatermelonDB/SQLite sync
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 font-serif">Pricing & Payment</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Professional-grade construction management with AI capabilities. Choose the plan that fits your operation
            scale.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="relative bg-background border-2">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                <CardDescription>Perfect for small builders</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-muted-foreground">/home completed</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Up to 5 active projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Basic AI scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Mobile field app
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Photo evidence collection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Basic compliance checking
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Start with Stripe
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Pay with PayPal
                </Button>
              </CardContent>
            </Card>

            <Card className="relative bg-background border-2 border-primary shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Professional</CardTitle>
                <CardDescription>For growing construction companies</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$599</span>
                  <span className="text-muted-foreground">/home completed</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Up to 25 active projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Advanced AI scheduling with OR-Tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    AI photo validation & QA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Full California code compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Supplier integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Advanced analytics & reporting
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Start with Stripe
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Pay with PayPal
                </Button>
              </CardContent>
            </Card>

            <Card className="relative bg-background border-2">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <CardDescription>For large-scale operations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-muted-foreground">/home completed</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Unlimited projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Custom AI model training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    White-label options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    SSO/SAML integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Custom integrations
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Contact Sales
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto bg-muted/30">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <CreditCard className="mr-3 h-6 w-6 text-primary" />
                Secure Payment Processing
              </CardTitle>
              <CardDescription>Multiple payment options with enterprise-grade security</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
                  Stripe Integration
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Credit/Debit cards (Visa, MasterCard, Amex)</li>
                  <li>• ACH bank transfers</li>
                  <li>• Automated billing per home completion</li>
                  <li>• PCI DSS compliant processing</li>
                  <li>• Real-time payment notifications</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-blue-600" />
                  PayPal Business
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PayPal account payments</li>
                  <li>• PayPal Credit options</li>
                  <li>• International payment support</li>
                  <li>• Buyer protection included</li>
                  <li>• Flexible payment terms</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ApiConfiguration />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image
              src="/images/eoc-logo.png"
              alt="Edgeofcali Media Network LLC"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="text-left">
              <h4 className="text-2xl font-bold font-serif">EOC AI</h4>
              <p className="text-sm text-primary-foreground/80">Edgeofcali Media Network LLC</p>
            </div>
          </div>
          <p className="text-primary-foreground/80 mb-6">
            Revolutionizing residential construction with AI-powered project management
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>Professional Development Platform</span>
            <span>•</span>
            <span>California Building Code Compliant</span>
            <span>•</span>
            <span>AI-Powered Quality Assurance</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
