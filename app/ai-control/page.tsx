"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Brain,
  Camera,
  Calendar,
  Shield,
  FileText,
  Zap,
  Settings,
  ArrowLeft,
  Send,
  Upload,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AIControlCenter() {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your EOC AI assistant. I can help you with schedule optimization, compliance checking, photo validation, and construction insights. What would you like to know?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    setChatMessages([
      ...chatMessages,
      { role: "user", content: inputMessage },
      {
        role: "assistant",
        content:
          "I've analyzed your request. Based on current project data, I recommend optimizing the electrical rough-in schedule for Lot 47 to avoid upcoming weather delays. This could save approximately 3 days on the critical path.",
      },
    ])
    setInputMessage("")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-border"></div>
              <Image
                src="/images/eoc-logo.png"
                alt="Edgeofcali Media Network LLC"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-lg font-bold text-primary font-serif flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  AI Control Center
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                AI Active
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configure
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Status Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">AI Models Active</span>
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-900">4</p>
              <p className="text-xs text-blue-700 mt-1">All systems operational</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-900">Accuracy Rate</span>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-900">94%</p>
              <p className="text-xs text-green-700 mt-1">Above 90% target</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">API Calls Today</span>
                <BarChart3 className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-900">847</p>
              <p className="text-xs text-purple-700 mt-1">$12.50 cost</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-orange-900">Recommendations</span>
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-orange-900">12</p>
              <p className="text-xs text-orange-700 mt-1">3 high priority</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* AI Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  AI Assistant Chat
                </CardTitle>
                <CardDescription>
                  Ask questions about your projects, get recommendations, and analyze construction data
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-muted/30 rounded-lg">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border shadow-sm"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex items-center mb-2">
                            <Brain className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-xs font-semibold text-primary">EOC AI Assistant</span>
                          </div>
                        )}
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask AI about schedules, compliance, photos, or get recommendations..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-primary">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("What projects need schedule optimization?")}
                  >
                    Schedule Optimization
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("Check compliance status for all projects")}
                  >
                    Compliance Check
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setInputMessage("Analyze recent photo uploads")}>
                    Photo Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Tools Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick AI Tools</CardTitle>
                <CardDescription>Access AI features directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="mr-2 h-4 w-4 text-green-600" />
                  Optimize Schedule
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Camera className="mr-2 h-4 w-4 text-blue-600" />
                  Validate Photos
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Shield className="mr-2 h-4 w-4 text-purple-600" />
                  Check Compliance
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileText className="mr-2 h-4 w-4 text-orange-600" />
                  Analyze Specs
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm">OpenAI Model</Label>
                  <select className="w-full mt-1 p-2 border rounded-md bg-background text-sm">
                    <option>GPT-4 (Current)</option>
                    <option>GPT-4 Turbo</option>
                    <option>GPT-3.5 Turbo</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm">AI Confidence Threshold</Label>
                  <Input type="number" defaultValue="85" className="mt-1" />
                  <p className="text-xs text-muted-foreground mt-1">Minimum confidence for auto-approval</p>
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Auto-Optimization</Label>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <Button className="w-full" size="sm">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Features Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="schedule">Schedule AI</TabsTrigger>
              <TabsTrigger value="photo">Photo AI</TabsTrigger>
              <TabsTrigger value="compliance">Compliance AI</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="schedule" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-green-600" />
                    AI Schedule Optimization
                  </CardTitle>
                  <CardDescription>
                    Intelligent scheduling using constraint solving and critical path analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Optimization Opportunities</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-blue-800">Lot 47 - Electrical</span>
                            <Badge className="bg-blue-100 text-blue-800">3 days</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-blue-800">Lot 23 - Plumbing</span>
                            <Badge className="bg-blue-100 text-blue-800">2 days</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-blue-800">Lot 15 - Framing</span>
                            <Badge className="bg-blue-100 text-blue-800">1 day</Badge>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-blue-600" size="sm">
                          Apply All Optimizations
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Recent Optimizations</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm text-green-800">Lot 42 - Saved 4 days</p>
                              <p className="text-xs text-green-700">Applied 2 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm text-green-800">Lot 38 - Saved 2 days</p>
                              <p className="text-xs text-green-700">Applied yesterday</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Analyze Custom Schedule</Label>
                    <div className="flex space-x-2">
                      <Input placeholder="Enter lot number or project name" />
                      <Button className="bg-primary">
                        <Brain className="mr-2 h-4 w-4" />
                        Analyze
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photo" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="mr-2 h-5 w-5 text-blue-600" />
                    AI Photo Validation
                  </CardTitle>
                  <CardDescription>
                    Computer vision analysis for quality control and compliance checking
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload photos for AI validation and compliance checking
                    </p>
                    <Button className="bg-primary">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photos
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-900 mb-3">Recent Validations</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-green-800">Electrical rough-in</span>
                            <Badge className="bg-green-100 text-green-800">Passed</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-green-800">Framing inspection</span>
                            <Badge className="bg-green-100 text-green-800">Passed</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-green-800">Foundation pour</span>
                            <Badge className="bg-green-100 text-green-800">Passed</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50 border-orange-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-orange-900 mb-3">Needs Review</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-orange-800">Fire blocking - Lot 15</span>
                            <Badge className="bg-orange-100 text-orange-800">Review</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-orange-800">Plumbing labels - Lot 23</span>
                            <Badge className="bg-orange-100 text-orange-800">Review</Badge>
                          </div>
                        </div>
                        <Button className="w-full mt-3 bg-orange-600" size="sm">
                          Review All
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-purple-600" />
                    AI Compliance Checking
                  </CardTitle>
                  <CardDescription>
                    Automated California building code compliance analysis and validation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4 text-center">
                        <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-green-900">95%</p>
                        <p className="text-sm text-green-800">CBC/CRC Compliance</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-yellow-50 border-yellow-200">
                      <CardContent className="p-4 text-center">
                        <Shield className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-yellow-900">72%</p>
                        <p className="text-sm text-yellow-800">Title 24 Efficiency</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4 text-center">
                        <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-blue-900">88%</p>
                        <p className="text-sm text-blue-800">CALGreen Energy</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Compliance Issues
                      </h4>
                      <div className="space-y-2">
                        <div className="p-2 bg-white rounded border-l-4 border-l-red-500">
                          <p className="text-sm font-medium text-red-900">Title 24 - Window U-factor</p>
                          <p className="text-xs text-red-700">Lot 23: Exceeds 0.30 requirement</p>
                        </div>
                        <div className="p-2 bg-white rounded border-l-4 border-l-red-500">
                          <p className="text-sm font-medium text-red-900">CBC - Fire Blocking</p>
                          <p className="text-xs text-red-700">Lot 15: Potential violation detected</p>
                        </div>
                      </div>
                      <Button className="w-full mt-3 bg-red-600" size="sm">
                        Generate Compliance Report
                      </Button>
                    </CardContent>
                  </Card>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Check Specific Compliance</Label>
                    <div className="flex space-x-2">
                      <select className="flex-1 p-2 border rounded-md bg-background text-sm">
                        <option>CBC Structural</option>
                        <option>CALGreen Energy</option>
                        <option>Title 24 Efficiency</option>
                        <option>Seismic Requirements</option>
                        <option>WUI Standards</option>
                      </select>
                      <Button className="bg-primary">
                        <Brain className="mr-2 h-4 w-4" />
                        Check
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-indigo-600" />
                    AI Insights & Analytics
                  </CardTitle>
                  <CardDescription>Data-driven insights and predictive analytics for your projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Cost Savings</h4>
                        <p className="text-3xl font-bold text-green-900">$127,450</p>
                        <p className="text-sm text-green-700 mt-1">From AI optimizations this month</p>
                        <div className="mt-3 space-y-1 text-xs text-green-800">
                          <p>• Schedule optimization: $89,200</p>
                          <p>• Rework prevention: $28,100</p>
                          <p>• Material waste reduction: $10,150</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Time Savings</h4>
                        <p className="text-3xl font-bold text-blue-900">216 days</p>
                        <p className="text-sm text-blue-700 mt-1">Across all active projects</p>
                        <div className="mt-3 space-y-1 text-xs text-blue-800">
                          <p>• Average per project: 18 days</p>
                          <p>• Schedule efficiency: +22%</p>
                          <p>• On-time completion: 89%</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-900 mb-3">Predictive Insights</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-purple-900">Project completion rate trending up</p>
                            <p className="text-xs text-purple-700">
                              Based on current pace, expect 15% improvement in Q2
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Brain className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-purple-900">Weather impact prediction</p>
                            <p className="text-xs text-purple-700">
                              Rain forecast next week may affect 3 exterior projects
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-purple-900">Resource optimization opportunity</p>
                            <p className="text-xs text-purple-700">
                              Reallocate crew from Lot 42 to Lot 47 for 2-day improvement
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
