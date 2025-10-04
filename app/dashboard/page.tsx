"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Calendar,
  Brain,
  Shield,
  Camera,
  Clock,
  AlertTriangle,
  CheckCircle,
  Users,
  Settings,
  LogOut,
  BarChart3,
  FileText,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/eoc-logo.png"
                alt="Edgeofcali Media Network LLC"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-primary font-serif">EOC AI</h1>
                <p className="text-xs text-muted-foreground">Construction Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Admin</Badge>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2 font-serif">Welcome Back, Admin</h2>
          <p className="text-muted-foreground">Here's what's happening with your construction projects today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-900">Active Projects</span>
                <Building2 className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-900">12</p>
              <p className="text-xs text-green-700 mt-1">3 starting this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">On Schedule</span>
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-900">89%</p>
              <p className="text-xs text-blue-700 mt-1">Above target of 85%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-orange-900">AI Alerts</span>
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-orange-900">3</p>
              <p className="text-xs text-orange-700 mt-1">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">AI Accuracy</span>
                <Brain className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-900">94%</p>
              <p className="text-xs text-purple-700 mt-1">Quality score</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/ai-control">
            <Card className="hover:shadow-lg transition-all cursor-pointer border-2 border-primary/20 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Brain className="h-10 w-10 text-primary" />
                  <Badge className="bg-primary">CORE</Badge>
                </div>
                <CardTitle className="text-xl mt-4">AI Control Center</CardTitle>
                <CardDescription>
                  Manage all AI features, analyze projects, and get intelligent recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary">Open AI Control</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/projects">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Building2 className="h-10 w-10 text-blue-600" />
                <CardTitle className="text-xl mt-4">Projects</CardTitle>
                <CardDescription>View and manage all construction projects, lots, and communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active</span>
                    <span className="font-semibold">12 projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-semibold">47 homes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/schedule">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Calendar className="h-10 w-10 text-green-600" />
                <CardTitle className="text-xl mt-4">Smart Scheduling</CardTitle>
                <CardDescription>
                  AI-powered construction schedules with optimization and critical path analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Time Saved</span>
                    <span className="font-semibold text-green-600">18 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Optimization Rate</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/compliance">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Shield className="h-10 w-10 text-purple-600" />
                <CardTitle className="text-xl mt-4">Compliance</CardTitle>
                <CardDescription>
                  California building code compliance tracking and AI-powered validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">CBC/CRC</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      95%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Title 24</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      72%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/field-app">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Camera className="h-10 w-10 text-orange-600" />
                <CardTitle className="text-xl mt-4">Field Evidence</CardTitle>
                <CardDescription>
                  Photo/video collection with AI validation and inspection packet generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Photos Today</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AI Validated</span>
                    <span className="font-semibold text-green-600">119</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/analytics">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-indigo-600" />
                <CardTitle className="text-xl mt-4">Analytics</CardTitle>
                <CardDescription>
                  Performance metrics, cost savings, and AI insights across all projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cost Savings</span>
                    <span className="font-semibold text-green-600">$127K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Saved</span>
                    <span className="font-semibold text-green-600">216 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* AI Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-3 h-6 w-6 text-primary" />
              AI Recommendations & Alerts
            </CardTitle>
            <CardDescription>Real-time insights and action items from your AI assistant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
              <Brain className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-blue-900">Schedule Optimization Available</p>
                <p className="text-sm text-blue-700 mt-1">
                  Lot 47: Move electrical rough-in 2 days earlier to avoid weather delays. Estimated 3-day schedule
                  improvement.
                </p>
                <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                  Apply Optimization
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-green-900">Inspection Ready</p>
                <p className="text-sm text-green-700 mt-1">
                  Lot 23: All framing checklist items completed. AI confidence: 94%. Ready for inspection request.
                </p>
                <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                  Request Inspection
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border-l-4 border-l-orange-500">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-orange-900">Potential Issue Detected</p>
                <p className="text-sm text-orange-700 mt-1">
                  Lot 15: Fire blocking photos show potential CBC violation. Recommend trade contractor review before
                  inspection.
                </p>
                <Button size="sm" className="mt-2 bg-orange-600 hover:bg-orange-700">
                  Review Issue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3 pb-3 border-b">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Foundation inspection passed - Lot 47</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-3 border-b">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">AI schedule optimization completed - Lot 23</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-3 border-b">
                <div className="h-2 w-2 rounded-full bg-purple-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">127 photos validated by AI - Multiple lots</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New project created - Sunset Ridge Phase 2</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Team Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mike Johnson (Superintendent)</p>
                    <p className="text-xs text-muted-foreground">Updated 3 task statuses</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">1h ago</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ABC Electric (Trade)</p>
                    <p className="text-xs text-muted-foreground">Uploaded 23 photos</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">2h ago</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">City Inspector</p>
                    <p className="text-xs text-muted-foreground">Approved framing inspection</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">3h ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Chen (Sales)</p>
                    <p className="text-xs text-muted-foreground">Added new homebuyer</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">5h ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
