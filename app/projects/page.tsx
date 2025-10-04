"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Building2,
  Search,
  Plus,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  Settings,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "sunset-ridge-ph2",
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
    },
    {
      id: "oak-valley-estates",
      name: "Oak Valley Estates",
      community: "Oak Valley",
      location: "Roseville, CA",
      totalLots: 36,
      activeLots: 24,
      completedLots: 12,
      status: "active",
      progress: 67,
      startDate: "2023-09-01",
      estimatedCompletion: "2025-08-15",
      superintendent: "Sarah Chen",
    },
    {
      id: "meadow-creek",
      name: "Meadow Creek",
      community: "Meadow Creek",
      location: "Folsom, CA",
      totalLots: 18,
      activeLots: 12,
      completedLots: 6,
      status: "active",
      progress: 56,
      startDate: "2024-03-01",
      estimatedCompletion: "2025-09-30",
      superintendent: "Tom Rodriguez",
    },
    {
      id: "riverside-commons",
      name: "Riverside Commons",
      community: "Riverside",
      location: "Elk Grove, CA",
      totalLots: 42,
      activeLots: 0,
      completedLots: 42,
      status: "completed",
      progress: 100,
      startDate: "2023-01-10",
      estimatedCompletion: "2024-12-20",
      superintendent: "Mike Johnson",
    },
  ]

  const activeProjects = projects.filter((p) => p.status === "active")
  const completedProjects = projects.filter((p) => p.status === "completed")

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
                  <Building2 className="h-5 w-5 mr-2" />
                  Projects
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Total Projects</span>
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-900">{projects.length}</p>
              <p className="text-xs text-blue-700 mt-1">{activeProjects.length} active</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-900">Total Lots</span>
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-900">{projects.reduce((sum, p) => sum + p.totalLots, 0)}</p>
              <p className="text-xs text-green-700 mt-1">
                {projects.reduce((sum, p) => sum + p.activeLots, 0)} in progress
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">Completed</span>
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-900">
                {projects.reduce((sum, p) => sum + p.completedLots, 0)}
              </p>
              <p className="text-xs text-purple-700 mt-1">homes delivered</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-orange-900">Avg Progress</span>
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-orange-900">
                {Math.round(activeProjects.reduce((sum, p) => sum + p.progress, 0) / activeProjects.length)}%
              </p>
              <p className="text-xs text-orange-700 mt-1">across active projects</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects by name, community, or location..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Active Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-serif">Active Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activeProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{project.name}</CardTitle>
                        <CardDescription className="flex items-center text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          {project.location}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Overall Progress</span>
                        <span className="font-semibold">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Lot Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-900">{project.totalLots}</p>
                        <p className="text-xs text-blue-700">Total Lots</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-2xl font-bold text-orange-900">{project.activeLots}</p>
                        <p className="text-xs text-orange-700">In Progress</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-900">{project.completedLots}</p>
                        <p className="text-xs text-green-700">Completed</p>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-2" />
                          Est. Completion
                        </span>
                        <span className="font-medium">
                          {new Date(project.estimatedCompletion).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center">
                          <Users className="h-3 w-3 mr-2" />
                          Superintendent
                        </span>
                        <span className="font-medium">{project.superintendent}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-primary">View Project Details</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 font-serif">Completed Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <Card className="hover:shadow-lg transition-all cursor-pointer opacity-90">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{project.name}</CardTitle>
                          <CardDescription className="flex items-center text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {project.location}
                          </CardDescription>
                        </div>
                        <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-green-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-green-900">{project.completedLots}</p>
                          <p className="text-xs text-green-700">Homes Delivered</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                          <p className="text-sm font-bold text-blue-900">
                            {new Date(project.estimatedCompletion).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-blue-700">Completion Date</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Archive
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
