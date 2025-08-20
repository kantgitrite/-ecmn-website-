"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Brain,
  Settings,
  BarChart3,
  Zap,
  Shield,
  Camera,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Building2,
  LogOut,
  Activity,
  DollarSign,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AIManagementPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [aiMetrics, setAiMetrics] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Load AI metrics
    setAiMetrics({
      totalRequests: 15420,
      successRate: 98.7,
      avgResponseTime: 1.2,
      costThisMonth: 127,
      budget: 500,
      activeFeatures: 8,
      modelsUsed: ["GPT-4", "GPT-4 Vision", "Claude-3"],
      usage: {
        specAnalysis: 4200,
        photoValidation: 3800,
        scheduleOptimization: 2100,
        complianceCheck: 2900,
        riskAssessment: 2420,
      },
    })
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("eoc-user")
    window.location.href = "/login"
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading AI management...</p>
        </div>
      </div>
    )
  }

  const aiFeatures = [
    {
      name: "Spec Analysis",
      description: "AI-powered building code compliance checking",
      status: "active",
      usage: aiMetrics?.usage.specAnalysis || 0,
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "Photo Validation",
      description: "Computer vision for construction quality assurance",
      status: "active",
      usage: aiMetrics?.usage.photoValidation || 0,
      icon: Camera,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "Schedule Optimization",
      description: "OR-Tools powered construction scheduling",
      status: "active",
      usage: aiMetrics?.usage.scheduleOptimization || 0,
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      name: "Compliance Checking",
      description: "Automated regulatory compliance validation",
      status: "active",
      usage: aiMetrics?.usage.complianceCheck || 0,
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Risk Assessment",
      description: "Predictive risk analysis for projects",
      status: "active",
      usage: aiMetrics?.usage.riskAssessment || 0,
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const stats = [
    {
      label: "Total AI Requests",
      value: aiMetrics?.totalRequests?.toLocaleString() || "0",
      icon: Activity,
      color: "text-blue-600",
    },
    {
      label: "Success Rate",
      value: `${aiMetrics?.successRate || 0}%`,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      label: "Avg Response Time",
      value: `${aiMetrics?.avgResponseTime || 0}s`,
      icon: Zap,
      color: "text-yellow-600",
    },
    {
      label: "Monthly Cost",
      value: `$${aiMetrics?.costThisMonth || 0}`,
      icon: DollarSign,
      color: "text-purple-600",
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
                <p className="text-xs text-muted-foreground">AI Management Center</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                <Brain className="w-3 h-3 mr-1" />
                AI Manager
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.company}</p>
              </div>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Management Center</h2>
          <p className="text-gray-600">Monitor, configure, and optimize your AI-powered construction tools.</p>
        </div>

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
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                AI Features Overview
              </CardTitle>
              <CardDescription>Status and usage of all AI-powered features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${feature.bgColor}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <feature.icon className={`w-6 h-6 mr-3 ${feature.color}`} />
                        <div>
                          <h3 className="font-semibold">{feature.name}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-1">{feature.status}</Badge>
                        <p className="text-sm text-muted-foreground">{feature.usage.toLocaleString()} requests</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white">
                        <Settings className="w-4 h-4 mr-1" />
                        Configure
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white">
                        <BarChart3 className="w-4 h-4 mr-1" />
                        Analytics
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Usage & Budget */}
          <div className="space-y-6">
            {/* Budget Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Budget Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Usage</span>
                      <span>
                        ${aiMetrics?.costThisMonth} / ${aiMetrics?.budget}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${(aiMetrics?.costThisMonth / aiMetrics?.budget) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.round((aiMetrics?.costThisMonth / aiMetrics?.budget) * 100)}% of budget used
                    </p>
                  </div>

                  <div className="pt-3 border-t">
                    <h4 className="font-medium mb-2">Cost Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>GPT-4 API</span>
                        <span>$89</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GPT-4 Vision</span>
                        <span>$28</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Claude-3</span>
                        <span>$10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Success Rate</span>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="font-semibold">{aiMetrics?.successRate}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Avg Response Time</span>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{aiMetrics?.avgResponseTime}s</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Models</span>
                    <div className="flex items-center">
                      <Brain className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="font-semibold">{aiMetrics?.modelsUsed?.length}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2 text-sm">Active Models</h4>
                  <div className="space-y-1">
                    {aiMetrics?.modelsUsed?.map((model: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs mr-1">
                        {model}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure API Keys
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Set Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
