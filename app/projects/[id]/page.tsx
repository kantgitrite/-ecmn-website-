"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Calendar, TrendingUp, CheckCircle, Home, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Mock project data
  const project = {
    id: params.id,
    name: "Sunset Ridge Phase 2",
    community: "Sunset Ridge",
    location: "Sacramento, CA",
    totalLots: 24,
    activeLots: 18,
    completedLots: 6,
    status: "active",
    progress: 75,
    startDate: "2024-01-15",
    estimatedCompletion: "2025-06-30",
    superintendent: "Mike Johnson",
  }

  const lots = [
    {
      lotNumber: "47",
      address: "1234 Sunset Ridge Dr",
      plan: "Plan A - 2,450 sq ft",
      elevation: "Craftsman",
      phase: "Rough MEP",
      progress: 65,
      status: "on-track",
      startDate: "2024-09-15",
      estimatedCompletion: "2025-03-20",
      superintendent: "Mike Johnson",
      trades: ["Framing Complete", "Electrical In Progress", "Plumbing In Progress"],
    },
    {
      lotNumber: "48",
      address: "1236 Sunset Ridge Dr",
      plan: "Plan B - 2,850 sq ft",
      elevation: "Modern",
      phase: "Foundation",
      progress: 25,
      status: "on-track",
      startDate: "2024-10-01",
      estimatedCompletion: "2025-04-15",
      superintendent: "Mike Johnson",
      trades: ["Foundation In Progress"],
    },
    {
      lotNumber: "49",
      address: "1238 Sunset Ridge Dr",
      plan: "Plan A - 2,450 sq ft",
      elevation: "Traditional",
      phase: "Framing",
      progress: 45,
      status: "delayed",
      startDate: "2024-09-20",
      estimatedCompletion: "2025-03-25",
      superintendent: "Mike Johnson",
      trades: ["Foundation Complete", "Framing In Progress"],
    },
    {
      lotNumber: "50",
      address: "1240 Sunset Ridge Dr",
      plan: "Plan C - 3,200 sq ft",
      elevation: "Mediterranean",
      phase: "Drywall",
      progress: 80,
      status: "on-track",
      startDate: "2024-08-01",
      estimatedCompletion: "2025-02-10",
      superintendent: "Mike Johnson",
      trades: ["Rough MEP Complete", "Drywall In Progress", "Paint Scheduled"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/projects">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Projects
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
                <h1 className="text-lg font-bold text-primary font-serif">{project.name}</h1>
                <p className="text-xs text-muted-foreground flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {project.location}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Total Lots</span>
                <Home className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-900">{project.totalLots}</p>
              <p className="text-xs text-blue-700 mt-1">{project.activeLots} in progress</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-900">Completed</span>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-900">{project.completedLots}</p>
              <p className="text-xs text-green-700 mt-1">
                {Math.round((project.completedLots / project.totalLots) * 100)}% of total
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">Progress</span>
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-900">{project.progress}%</p>
              <p className="text-xs text-purple-700 mt-1">Overall completion</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-orange-900">Est. Completion</span>
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-lg font-bold text-orange-900">
                {new Date(project.estimatedCompletion).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              </p>
              <p className="text-xs text-orange-700 mt-1">6 months remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="lots" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="lots">Lots</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="lots" className="mt-6">
            <div className="space-y-4">
              {lots.map((lot) => (
                <Link key={lot.lotNumber} href={`/projects/${project.id}/lot/${lot.lotNumber}`}>
                  <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold">Lot {lot.lotNumber}</h3>
                            <Badge
                              className={
                                lot.status === "on-track"
                                  ? "bg-green-100 text-green-800"
                                  : lot.status === "delayed"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {lot.status === "on-track"
                                ? "On Track"
                                : lot.status === "delayed"
                                  ? "Delayed"
                                  : "At Risk"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{lot.address}</p>
                          <p className="text-sm font-medium mt-1">
                            {lot.plan} • {lot.elevation}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-primary">{lot.phase}</p>
                          <p className="text-xs text-muted-foreground mt-1">{lot.progress}% Complete</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              lot.status === "on-track"
                                ? "bg-green-500"
                                : lot.status === "delayed"
                                  ? "bg-red-500"
                                  : "bg-yellow-500"
                            }`}
                            style={{ width: `${lot.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Trade Status */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {lot.trades.map((trade, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {trade}
                          </Badge>
                        ))}
                      </div>

                      {/* Dates */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Started</p>
                          <p className="font-medium">{new Date(lot.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Est. Completion</p>
                          <p className="font-medium">{new Date(lot.estimatedCompletion).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Schedule</CardTitle>
                <CardDescription>Master schedule for all lots in {project.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Project-specific schedule view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Team</CardTitle>
                <CardDescription>Team members and roles for {project.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Team management view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress Reports</CardTitle>
                <CardDescription>Detailed reports and analytics for {project.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reports view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Documents</CardTitle>
                <CardDescription>Plans, specs, and documentation for {project.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Documents view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
