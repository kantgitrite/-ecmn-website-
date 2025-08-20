"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Building2,
  Users,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Settings,
  LogOut,
  Crown,
  Brain,
  Camera,
  Shield,
  MapPin,
  Home,
  FileCheck,
  Clock,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AIInsightsPanel from "@/components/ai-insights-panel"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Load user data from localStorage (in production, this would be from secure session)
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Demo user data
      setUser({
        name: "Admin User",
        email: "admin@edgeofcali.com",
        role: "admin",
        company: "Edgeofcali Media Network LLC",
        plan: "enterprise",
        isAdmin: true,
      })
      localStorage.setItem(
        "eoc-user",
        JSON.stringify({
          name: "Admin User",
          email: "admin@edgeofcali.com",
          role: "admin",
          company: "Edgeofcali Media Network LLC",
          plan: "enterprise",
          isAdmin: true,
        }),
      )
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("eoc-user")
    localStorage.removeItem("eoc-ai-config")
    localStorage.removeItem("eoc-ai-api-key")
    window.location.href = "/login"
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const stats = [
    { label: "Active Projects", value: "12", icon: Building2, color: "text-blue-600" },
    { label: "Team Members", value: "48", icon: Users, color: "text-green-600" },
    { label: "Completed Tasks", value: "234", icon: CheckCircle, color: "text-emerald-600" },
    { label: "Pending Inspections", value: "8", icon: AlertTriangle, color: "text-orange-600" },
  ]

  const recentActivity = [
    { action: "Photo validation completed", project: "Sunset Ridge #12", time: "2 hours ago" },
    { action: "Schedule updated", project: "Oak Valley #8", time: "4 hours ago" },
    { action: "Inspection passed", project: "Pine Creek #15", time: "6 hours ago" },
    { action: "AI compliance check", project: "Maple Heights #3", time: "8 hours ago" },
  ]

  const roleDashboards = [
    {
      role: "Superintendent",
      description: "Field operations and crew management",
      href: "/dashboard/superintendent",
      icon: Building2,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      role: "Trade Contractor",
      description: "Job-specific tasks and materials",
      href: "/dashboard/trade-contractor",
      icon: Settings,
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
    {
      role: "Sales Agent",
      description: "Lead management and customer relations",
      href: "/dashboard/sales-agent",
      icon: Users,
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      role: "Inspector",
      description: "Compliance tracking and inspections",
      href: "/dashboard/inspector",
      icon: Shield,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/images/eoc-logo.png" alt="EOC AI Logo" width={40} height={40} className="rounded-lg mr-3" />
              <div>
                <h1 className="text-xl font-bold font-serif">EOC AI</h1>
                <p className="text-xs text-muted-foreground">Construction Management</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {user?.isAdmin && (
                <Badge className="bg-yellow-100 text-yellow-800">
                  <Crown className="w-3 h-3 mr-1" />
                  Admin Access
                </Badge>
              )}
              <Link href="/ai-management">
                <Button variant="outline" size="sm">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Management
                </Button>
              </Link>
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.company}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-gray-600">Here's what's happening with your construction projects today.</p>
        </div>

        {/* Admin Notice */}
        {user?.isAdmin && (
          <Card className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Crown className="h-8 w-8 text-yellow-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900">Administrator Access</h3>
                  <p className="text-yellow-700">
                    You have full access to all EOC AI features with no restrictions. All AI capabilities, unlimited
                    projects, and complete system control.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* AI Insights Panel */}
        <div className="mb-8">
          <AIInsightsPanel context="general" data={{ projectCount: 12, teamSize: 48 }} />
        </div>

        {/* Role-Based Dashboards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Role-Based Dashboards</CardTitle>
            <CardDescription>Access specialized dashboards for different team roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roleDashboards.map((dashboard) => (
                <Link key={dashboard.role} href={dashboard.href}>
                  <Card className={`cursor-pointer transition-all hover:shadow-md ${dashboard.color}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <dashboard.icon className="h-6 w-6" />
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold mb-1">{dashboard.role}</h3>
                      <p className="text-xs">{dashboard.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Features Status */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>AI Features Status</CardTitle>
              <CardDescription>Your AI-powered construction management tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Brain className="mr-3 h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Spec Analysis</p>
                      <p className="text-sm text-green-700">AI-powered code compliance</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Camera className="mr-3 h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Photo Validation</p>
                      <p className="text-sm text-green-700">Computer vision QA</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Code Compliance</p>
                      <p className="text-sm text-green-700">CBC/CRC validation</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Smart Scheduling</p>
                      <p className="text-sm text-green-700">OR-Tools optimization</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">API Usage This Month</p>
                    <p className="text-sm text-muted-foreground">$127 of $500 budget used</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">25%</p>
                    <p className="text-sm text-muted-foreground">Budget used</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.project}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-5 gap-4">
            <Link href="/workflow/land-acquisition">
              <Button className="h-20 flex-col space-y-2 w-full">
                <MapPin className="h-6 w-6" />
                <span>Land Acquisition</span>
              </Button>
            </Link>
            <Link href="/workflow/plan-selection">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full bg-transparent">
                <Home className="h-6 w-6" />
                <span>Plan Selection</span>
              </Button>
            </Link>
            <Link href="/workflow/developer-approval">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full bg-transparent">
                <FileCheck className="h-6 w-6" />
                <span>Developer Approval</span>
              </Button>
            </Link>
            <Link href="/workflow/construction-schedule">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full bg-transparent">
                <Clock className="h-6 w-6" />
                <span>Construction Schedule</span>
              </Button>
            </Link>
            <Link href="/#configuration">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full bg-transparent">
                <Settings className="h-6 w-6" />
                <span>API Settings</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
