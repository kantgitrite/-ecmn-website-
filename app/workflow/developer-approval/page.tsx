"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Eye,
  FileText,
  DollarSign,
  Calendar,
  Users,
  Building2,
  Brain,
  Search,
  Filter,
  TrendingUp,
  MapPin,
  Home,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DeveloperApprovalPage() {
  const [user, setUser] = useState<any>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [approvalComment, setApprovalComment] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const pendingApprovals = [
    {
      id: 1,
      projectName: "Sunset Ridge Phase 2",
      homebuyer: "Johnson Family",
      salesAgent: "Sarah Martinez",
      submittedDate: "2024-01-15",
      status: "pending",
      priority: "high",
      plan: {
        name: "The Monterey",
        sqft: 2450,
        elevation: "Craftsman",
        basePrice: 485000,
        upgrades: 45000,
        totalPrice: 530000,
      },
      lot: {
        number: "12A",
        address: "1234 Sunset Ridge Dr",
        size: "0.25 acres",
        premium: 15000,
      },
      aiAnalysis: {
        riskScore: 15,
        profitMargin: 22,
        marketFit: 94,
        recommendations: [
          "Excellent profit margin for this plan type",
          "High market demand in this price range",
          "Lot size optimal for selected plan",
        ],
        concerns: ["Slight elevation grade may require additional grading"],
      },
      timeline: {
        estimatedStart: "2024-03-01",
        estimatedCompletion: "2024-08-15",
        criticalPath: "Foundation work dependent on soil report",
      },
    },
    {
      id: 2,
      projectName: "Oak Valley Estates",
      homebuyer: "Chen Family",
      salesAgent: "Mike Rodriguez",
      submittedDate: "2024-01-14",
      status: "pending",
      priority: "medium",
      plan: {
        name: "The Sonoma",
        sqft: 3200,
        elevation: "Mediterranean",
        basePrice: 625000,
        upgrades: 75000,
        totalPrice: 700000,
      },
      lot: {
        number: "8B",
        address: "5678 Oak Valley Way",
        size: "0.35 acres",
        premium: 25000,
      },
      aiAnalysis: {
        riskScore: 8,
        profitMargin: 28,
        marketFit: 89,
        recommendations: [
          "Strong profit potential with selected upgrades",
          "Mediterranean style popular in this neighborhood",
          "Lot allows for future pool installation",
        ],
        concerns: [],
      },
      timeline: {
        estimatedStart: "2024-02-15",
        estimatedCompletion: "2024-07-30",
        criticalPath: "Permit approval timeline",
      },
    },
    {
      id: 3,
      projectName: "Pine Creek Commons",
      homebuyer: "Williams Family",
      salesAgent: "Lisa Thompson",
      submittedDate: "2024-01-13",
      status: "approved",
      priority: "low",
      plan: {
        name: "The Napa",
        sqft: 4100,
        elevation: "Modern Luxury",
        basePrice: 825000,
        upgrades: 125000,
        totalPrice: 950000,
      },
      lot: {
        number: "3C",
        address: "9012 Pine Creek Blvd",
        size: "0.5 acres",
        premium: 50000,
      },
      aiAnalysis: {
        riskScore: 5,
        profitMargin: 35,
        marketFit: 92,
        recommendations: [
          "Premium lot justifies luxury plan selection",
          "High-end finishes align with neighborhood standards",
          "Excellent resale potential",
        ],
        concerns: [],
      },
      timeline: {
        estimatedStart: "2024-01-20",
        estimatedCompletion: "2024-09-15",
        criticalPath: "Custom millwork lead times",
      },
    },
  ]

  const filteredProjects = pendingApprovals.filter((project) => {
    const matchesStatus = filterStatus === "all" || project.status === filterStatus
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.homebuyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.plan.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const handleApproval = (projectId: number, action: "approve" | "reject") => {
    const project = pendingApprovals.find((p) => p.id === projectId)
    if (project) {
      toast({
        title: action === "approve" ? "Project Approved" : "Project Rejected",
        description: `${project.projectName} for ${project.homebuyer} has been ${action}d.`,
      })
      setSelectedProject(null)
      setApprovalComment("")
    }
  }

  const stats = [
    { label: "Pending Approvals", value: "8", icon: Clock, color: "text-orange-600" },
    { label: "Approved This Week", value: "12", icon: CheckCircle, color: "text-green-600" },
    { label: "Avg. Approval Time", value: "2.3 days", icon: TrendingUp, color: "text-blue-600" },
    { label: "Revenue Pipeline", value: "$8.2M", icon: DollarSign, color: "text-purple-600" },
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
                <p className="text-xs text-muted-foreground">Developer Approval Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Developer Approval Center</h2>
          <p className="text-gray-600">Review and approve homebuyer selections before production release.</p>
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Search Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Status Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Status Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { id: "all", name: "All Projects", count: pendingApprovals.length },
                  {
                    id: "pending",
                    name: "Pending",
                    count: pendingApprovals.filter((p) => p.status === "pending").length,
                  },
                  {
                    id: "approved",
                    name: "Approved",
                    count: pendingApprovals.filter((p) => p.status === "approved").length,
                  },
                  { id: "rejected", name: "Rejected", count: 0 },
                ].map((status) => (
                  <Button
                    key={status.id}
                    variant={filterStatus === status.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setFilterStatus(status.id)}
                  >
                    <span>{status.name}</span>
                    <Badge variant="secondary">{status.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Review
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Users className="w-4 h-4 mr-2" />
                  Team Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!selectedProject ? (
              /* Projects List */
              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold">{project.projectName}</h3>
                            <Badge
                              variant={
                                project.status === "pending"
                                  ? "secondary"
                                  : project.status === "approved"
                                    ? "default"
                                    : "destructive"
                              }
                              className={
                                project.status === "pending"
                                  ? "bg-orange-100 text-orange-800"
                                  : project.status === "approved"
                                    ? "bg-green-100 text-green-800"
                                    : ""
                              }
                            >
                              {project.status}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={
                                project.priority === "high"
                                  ? "border-red-200 text-red-700"
                                  : project.priority === "medium"
                                    ? "border-yellow-200 text-yellow-700"
                                    : "border-gray-200 text-gray-700"
                              }
                            >
                              {project.priority} priority
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                            <div>
                              <p>
                                <strong>Homebuyer:</strong> {project.homebuyer}
                              </p>
                              <p>
                                <strong>Sales Agent:</strong> {project.salesAgent}
                              </p>
                              <p>
                                <strong>Submitted:</strong> {project.submittedDate}
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong>Plan:</strong> {project.plan.name} ({project.plan.sqft.toLocaleString()} sq ft)
                              </p>
                              <p>
                                <strong>Lot:</strong> {project.lot.number} - {project.lot.address}
                              </p>
                              <p>
                                <strong>Total Price:</strong> ${project.plan.totalPrice.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">
                              ${project.plan.totalPrice.toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground">Total Contract</p>
                          </div>
                          <Button onClick={() => setSelectedProject(project)} size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Review Details
                          </Button>
                        </div>
                      </div>

                      {/* AI Analysis Preview */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-blue-900 flex items-center">
                            <Brain className="w-4 h-4 mr-2" />
                            AI Analysis Summary
                          </h4>
                          <div className="flex space-x-4 text-sm">
                            <span className="text-blue-700">
                              Risk: <strong>{project.aiAnalysis.riskScore}%</strong>
                            </span>
                            <span className="text-blue-700">
                              Profit: <strong>{project.aiAnalysis.profitMargin}%</strong>
                            </span>
                            <span className="text-blue-700">
                              Market Fit: <strong>{project.aiAnalysis.marketFit}%</strong>
                            </span>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-2">
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: `${project.aiAnalysis.riskScore}%` }}
                            ></div>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${project.aiAnalysis.profitMargin}%` }}
                            ></div>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${project.aiAnalysis.marketFit}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Project Detail View */
              <div className="space-y-6">
                {/* Back Button */}
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  ← Back to Projects
                </Button>

                {/* Project Header */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{selectedProject.projectName}</CardTitle>
                        <CardDescription className="text-lg">
                          {selectedProject.homebuyer} - {selectedProject.plan.name}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">
                          ${selectedProject.plan.totalPrice.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground">Total Contract Value</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Detailed Information Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Plan & Lot Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Home className="w-5 h-5 mr-2" />
                        Plan & Lot Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Plan</p>
                          <p className="font-semibold">{selectedProject.plan.name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Square Footage</p>
                          <p className="font-semibold">{selectedProject.plan.sqft.toLocaleString()} sq ft</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Elevation</p>
                          <p className="font-semibold">{selectedProject.plan.elevation}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Lot Size</p>
                          <p className="font-semibold">{selectedProject.lot.size}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Base Price:</span>
                            <span>${selectedProject.plan.basePrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Upgrades:</span>
                            <span>${selectedProject.plan.upgrades.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lot Premium:</span>
                            <span>${selectedProject.lot.premium.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total:</span>
                            <span>${selectedProject.plan.totalPrice.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline & Location */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Timeline & Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Address</p>
                        <p className="font-semibold">{selectedProject.lot.address}</p>
                        <p className="text-sm text-muted-foreground">Lot {selectedProject.lot.number}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Est. Start Date</p>
                          <p className="font-semibold">{selectedProject.timeline.estimatedStart}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Est. Completion</p>
                          <p className="font-semibold">{selectedProject.timeline.estimatedCompletion}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Critical Path</p>
                        <p className="text-sm">{selectedProject.timeline.criticalPath}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Sales Information</p>
                        <p className="text-sm">Agent: {selectedProject.salesAgent}</p>
                        <p className="text-sm">Submitted: {selectedProject.submittedDate}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2" />
                      Comprehensive AI Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Risk Assessment</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-bold text-red-600">
                            {selectedProject.aiAnalysis.riskScore}%
                          </span>
                          <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <div className="w-full bg-red-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${selectedProject.aiAnalysis.riskScore}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-red-700 mt-2">Low risk project</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Profit Margin</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-bold text-green-600">
                            {selectedProject.aiAnalysis.profitMargin}%
                          </span>
                          <TrendingUp className="w-8 h-8 text-green-500" />
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${selectedProject.aiAnalysis.profitMargin}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-green-700 mt-2">Excellent margin</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Market Fit</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-bold text-blue-600">
                            {selectedProject.aiAnalysis.marketFit}%
                          </span>
                          <CheckCircle className="w-8 h-8 text-blue-500" />
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${selectedProject.aiAnalysis.marketFit}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-blue-700 mt-2">Strong market appeal</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-green-900">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                          AI Recommendations
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.aiAnalysis.recommendations.map((rec: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-sm">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-orange-900">
                          <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                          Potential Concerns
                        </h4>
                        {selectedProject.aiAnalysis.concerns.length > 0 ? (
                          <ul className="space-y-2">
                            {selectedProject.aiAnalysis.concerns.map((concern: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                                <span className="text-sm">{concern}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-muted-foreground">No significant concerns identified.</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Approval Actions */}
                {selectedProject.status === "pending" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Approval Decision</CardTitle>
                      <CardDescription>Review the project details and make your approval decision.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Comments (Optional)</label>
                        <Textarea
                          placeholder="Add any comments or conditions for this approval..."
                          value={approvalComment}
                          onChange={(e) => setApprovalComment(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          onClick={() => handleApproval(selectedProject.id, "approve")}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve Project
                        </Button>
                        <Button onClick={() => handleApproval(selectedProject.id, "reject")} variant="destructive">
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject Project
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                          <Clock className="w-4 h-4 mr-2" />
                          Request More Info
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
