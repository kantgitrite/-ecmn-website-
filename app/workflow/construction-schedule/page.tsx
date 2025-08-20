"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Calendar,
  AlertTriangle,
  CheckCircle,
  Play,
  Brain,
  Wrench,
  Hammer,
  Zap,
  Droplets,
  Paintbrush,
  Home,
  Shield,
  Eye,
  Filter,
  Building2,
  TrendingUp,
  CloudRain,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConstructionSchedulePage() {
  const [user, setUser] = useState<any>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [viewMode, setViewMode] = useState<"timeline" | "gantt" | "calendar">("timeline")
  const [filterPhase, setFilterPhase] = useState("all")
  const [isOptimizing, setIsOptimizing] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const projects = [
    {
      id: 1,
      name: "Sunset Ridge #12",
      address: "1234 Sunset Ridge Dr",
      plan: "The Monterey",
      startDate: "2024-03-01",
      endDate: "2024-08-15",
      progress: 35,
      status: "in-progress",
      superintendent: "Mike Johnson",
      phases: [
        {
          id: 1,
          name: "Site Preparation",
          icon: Wrench,
          startDate: "2024-03-01",
          endDate: "2024-03-08",
          duration: 7,
          progress: 100,
          status: "completed",
          dependencies: [],
          crew: "Site Crew A",
          tasks: ["Excavation", "Utility marking", "Soil compaction"],
        },
        {
          id: 2,
          name: "Foundation",
          icon: Hammer,
          startDate: "2024-03-09",
          endDate: "2024-03-22",
          duration: 14,
          progress: 100,
          status: "completed",
          dependencies: [1],
          crew: "Foundation Crew",
          tasks: ["Footings", "Stem walls", "Slab pour", "Curing"],
        },
        {
          id: 3,
          name: "Framing",
          icon: Home,
          startDate: "2024-03-23",
          endDate: "2024-04-12",
          duration: 21,
          progress: 85,
          status: "in-progress",
          dependencies: [2],
          crew: "Framing Crew A",
          tasks: ["Floor framing", "Wall framing", "Roof framing", "Sheathing"],
        },
        {
          id: 4,
          name: "Electrical Rough-In",
          icon: Zap,
          startDate: "2024-04-08",
          endDate: "2024-04-19",
          duration: 12,
          progress: 45,
          status: "in-progress",
          dependencies: [3],
          crew: "Electrical Team 1",
          tasks: ["Panel installation", "Rough wiring", "Outlet boxes"],
        },
        {
          id: 5,
          name: "Plumbing Rough-In",
          icon: Droplets,
          startDate: "2024-04-08",
          endDate: "2024-04-22",
          duration: 15,
          progress: 30,
          status: "in-progress",
          dependencies: [3],
          crew: "Plumbing Team A",
          tasks: ["Supply lines", "Drain lines", "Vent installation"],
        },
        {
          id: 6,
          name: "HVAC Installation",
          icon: Wrench,
          startDate: "2024-04-15",
          endDate: "2024-04-29",
          duration: 15,
          progress: 0,
          status: "scheduled",
          dependencies: [3],
          crew: "HVAC Team 1",
          tasks: ["Ductwork", "Unit installation", "Connections"],
        },
        {
          id: 7,
          name: "Insulation",
          icon: Shield,
          startDate: "2024-04-30",
          endDate: "2024-05-06",
          duration: 7,
          progress: 0,
          status: "scheduled",
          dependencies: [4, 5, 6],
          crew: "Insulation Crew",
          tasks: ["Wall insulation", "Attic insulation", "Vapor barrier"],
        },
        {
          id: 8,
          name: "Drywall",
          icon: Paintbrush,
          startDate: "2024-05-07",
          endDate: "2024-05-21",
          duration: 15,
          progress: 0,
          status: "scheduled",
          dependencies: [7],
          crew: "Drywall Team A",
          tasks: ["Hanging", "Taping", "Texturing", "Priming"],
        },
        {
          id: 9,
          name: "Interior Finishes",
          icon: Paintbrush,
          startDate: "2024-05-22",
          endDate: "2024-07-15",
          duration: 55,
          progress: 0,
          status: "scheduled",
          dependencies: [8],
          crew: "Finish Crew",
          tasks: ["Flooring", "Cabinets", "Countertops", "Paint", "Trim"],
        },
        {
          id: 10,
          name: "Final Inspections",
          icon: Eye,
          startDate: "2024-07-16",
          endDate: "2024-08-15",
          duration: 30,
          progress: 0,
          status: "scheduled",
          dependencies: [9],
          crew: "QA Team",
          tasks: ["Final walkthrough", "Punch list", "Certificate of occupancy"],
        },
      ],
    },
  ]

  const handleOptimizeSchedule = async () => {
    setIsOptimizing(true)

    // Simulate AI optimization
    setTimeout(() => {
      setIsOptimizing(false)
      toast({
        title: "Schedule Optimized",
        description: "AI has optimized the schedule, saving 8 days and reducing resource conflicts.",
      })
    }, 3000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "scheduled":
        return "bg-gray-100 text-gray-800"
      case "delayed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const currentProject = projects[0] // For demo, using first project

  const stats = [
    { label: "Active Projects", value: "12", icon: Building2, color: "text-blue-600" },
    { label: "On Schedule", value: "9", icon: CheckCircle, color: "text-green-600" },
    { label: "Behind Schedule", value: "2", icon: AlertTriangle, color: "text-orange-600" },
    { label: "Avg. Completion", value: "87%", icon: TrendingUp, color: "text-purple-600" },
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
                <p className="text-xs text-muted-foreground">Construction Scheduling</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Construction Schedule Management</h2>
          <p className="text-gray-600">AI-powered scheduling and progress tracking for all construction phases.</p>
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
          {/* Controls Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Project</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">{currentProject.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentProject.address}</p>
                    <p className="text-sm text-muted-foreground">Plan: {currentProject.plan}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{currentProject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${currentProject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p>
                      <strong>Superintendent:</strong> {currentProject.superintendent}
                    </p>
                    <p>
                      <strong>Timeline:</strong> {currentProject.startDate} - {currentProject.endDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Optimization */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleOptimizeSchedule}
                  disabled={isOptimizing}
                  className="w-full bg-transparent"
                  variant="outline"
                >
                  {isOptimizing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Optimize Schedule
                    </>
                  )}
                </Button>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-900 text-sm mb-2">Current Insights</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Weather delay risk: 15%</li>
                    <li>• Resource conflicts: 2 detected</li>
                    <li>• Critical path: On track</li>
                    <li>• Potential savings: 8 days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* View Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">View Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    { id: "timeline", name: "Timeline View" },
                    { id: "gantt", name: "Gantt Chart" },
                    { id: "calendar", name: "Calendar View" },
                  ].map((view) => (
                    <Button
                      key={view.id}
                      variant={viewMode === view.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setViewMode(view.id as any)}
                    >
                      {view.name}
                    </Button>
                  ))}
                </div>

                <div className="pt-3 border-t">
                  <label className="text-sm font-medium">Filter by Phase</label>
                  <select
                    value={filterPhase}
                    onChange={(e) => setFilterPhase(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md text-sm"
                  >
                    <option value="all">All Phases</option>
                    <option value="in-progress">In Progress</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Weather Alert */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <CloudRain className="w-5 h-5 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-orange-900">Weather Alert</h4>
                </div>
                <p className="text-sm text-orange-700">Rain expected Thu-Fri. Outdoor work may be delayed.</p>
                <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                  View Forecast
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Schedule Content */}
          <div className="lg:col-span-3">
            {/* Timeline View */}
            {viewMode === "timeline" && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Construction Timeline - {currentProject.name}</CardTitle>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentProject.phases
                      .filter((phase) => filterPhase === "all" || phase.status === filterPhase)
                      .map((phase, index) => (
                        <div key={phase.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  phase.status === "completed"
                                    ? "bg-green-100"
                                    : phase.status === "in-progress"
                                      ? "bg-blue-100"
                                      : "bg-gray-100"
                                }`}
                              >
                                <phase.icon
                                  className={`w-5 h-5 ${
                                    phase.status === "completed"
                                      ? "text-green-600"
                                      : phase.status === "in-progress"
                                        ? "text-blue-600"
                                        : "text-gray-600"
                                  }`}
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold">{phase.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {phase.startDate} - {phase.endDate} ({phase.duration} days)
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge className={getStatusColor(phase.status)}>{phase.status}</Badge>
                              <div className="text-right">
                                <p className="text-sm font-medium">{phase.progress}%</p>
                                <p className="text-xs text-muted-foreground">{phase.crew}</p>
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  phase.status === "completed"
                                    ? "bg-green-500"
                                    : phase.status === "in-progress"
                                      ? "bg-blue-500"
                                      : "bg-gray-400"
                                }`}
                                style={{ width: `${phase.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Tasks */}
                          <div className="grid md:grid-cols-2 gap-2">
                            {phase.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center text-sm">
                                <div
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    phase.status === "completed"
                                      ? "bg-green-500"
                                      : phase.status === "in-progress"
                                        ? "bg-blue-500"
                                        : "bg-gray-400"
                                  }`}
                                ></div>
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>

                          {/* Dependencies */}
                          {phase.dependencies.length > 0 && (
                            <div className="mt-3 pt-3 border-t">
                              <p className="text-xs text-muted-foreground">
                                <strong>Dependencies:</strong> Phase{" "}
                                {phase.dependencies.map((dep) => `#${dep}`).join(", ")}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Gantt Chart View */}
            {viewMode === "gantt" && (
              <Card>
                <CardHeader>
                  <CardTitle>Gantt Chart - {currentProject.name}</CardTitle>
                  <CardDescription>Visual timeline with dependencies and critical path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-8 rounded-lg text-center">
                    <Calendar className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Interactive Gantt Chart</h3>
                    <p className="text-blue-700 mb-4">
                      Advanced Gantt chart with drag-and-drop scheduling, dependency visualization, and critical path
                      analysis.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Play className="w-4 h-4 mr-2" />
                      Launch Gantt View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Calendar View */}
            {viewMode === "calendar" && (
              <Card>
                <CardHeader>
                  <CardTitle>Calendar View - {currentProject.name}</CardTitle>
                  <CardDescription>Monthly calendar with milestones and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-8 rounded-lg text-center">
                    <Calendar className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Project Calendar</h3>
                    <p className="text-green-700 mb-4">
                      Monthly and weekly calendar views with milestone tracking, inspection dates, and team scheduling.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Open Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Critical Path Analysis */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Critical Path Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Critical Tasks</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Foundation completion</li>
                      <li>• Framing inspection</li>
                      <li>• Electrical rough-in</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Resource Conflicts</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Electrical & Plumbing overlap</li>
                      <li>• Crane availability conflict</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Optimization Opportunities</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Parallel MEP installation</li>
                      <li>• Early material delivery</li>
                      <li>• Weekend crew scheduling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
