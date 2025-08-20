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
  LogOut,
  Hammer,
  Clock,
  Phone,
  Camera,
  FileText,
  CloudRain,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuperintendentDashboard() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      setUser({
        name: "Mike Johnson",
        email: "mike.johnson@edgeofcali.com",
        role: "superintendent",
        company: "Edgeofcali Media Network LLC",
        plan: "professional",
        projects: ["Sunset Ridge #12", "Oak Valley #8", "Pine Creek #15"],
      })
    }
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
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const todaysTasks = [
    {
      id: 1,
      project: "Sunset Ridge #12",
      task: "Framing inspection",
      time: "9:00 AM",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      project: "Oak Valley #8",
      task: "Electrical rough-in start",
      time: "10:30 AM",
      status: "scheduled",
      priority: "medium",
    },
    {
      id: 3,
      project: "Pine Creek #15",
      task: "Foundation pour",
      time: "2:00 PM",
      status: "in-progress",
      priority: "high",
    },
    {
      id: 4,
      project: "Sunset Ridge #12",
      task: "Material delivery coordination",
      time: "4:00 PM",
      status: "scheduled",
      priority: "low",
    },
  ]

  const crewStatus = [
    { crew: "Framing Crew A", project: "Sunset Ridge #12", status: "on-site", members: 4, lead: "Carlos Martinez" },
    { crew: "Foundation Team", project: "Pine Creek #15", status: "on-site", members: 3, lead: "David Kim" },
    { crew: "Electrical Team 1", project: "Oak Valley #8", status: "scheduled", members: 2, lead: "Sarah Wilson" },
    { crew: "Plumbing Team A", project: "Sunset Ridge #12", status: "delayed", members: 2, lead: "Tom Rodriguez" },
  ]

  const stats = [
    { label: "Active Projects", value: "3", icon: Building2, color: "text-blue-600" },
    { label: "Crews On-Site", value: "2", icon: Users, color: "text-green-600" },
    { label: "Today's Tasks", value: "4", icon: CheckCircle, color: "text-emerald-600" },
    { label: "Pending Issues", value: "1", icon: AlertTriangle, color: "text-orange-600" },
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
                <p className="text-xs text-muted-foreground">Superintendent Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">
                <Hammer className="w-3 h-3 mr-1" />
                Superintendent
              </Badge>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Good morning, {user?.name}!</h2>
          <p className="text-gray-600">Here's your construction site overview for today.</p>
        </div>

        {/* Weather Alert */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CloudRain className="h-6 w-6 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-orange-900">Weather Alert</h3>
                  <p className="text-orange-700">Rain expected 2-4 PM. Consider rescheduling outdoor concrete work.</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-transparent">
                View Forecast
              </Button>
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
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your tasks and inspections for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm font-medium">{task.time}</p>
                        <div
                          className={`w-3 h-3 rounded-full mx-auto mt-1 ${
                            task.status === "completed"
                              ? "bg-green-500"
                              : task.status === "in-progress"
                                ? "bg-blue-500"
                                : task.status === "pending"
                                  ? "bg-orange-500"
                                  : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <div>
                        <h3 className="font-semibold">{task.task}</h3>
                        <p className="text-sm text-muted-foreground">{task.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {task.priority}
                      </Badge>
                      <Badge
                        className={
                          task.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : task.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : task.status === "pending"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-gray-100 text-gray-800"
                        }
                      >
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crew Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Crew Status
              </CardTitle>
              <CardDescription>Current crew locations and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crewStatus.map((crew, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{crew.crew}</h4>
                      <Badge
                        className={
                          crew.status === "on-site"
                            ? "bg-green-100 text-green-800"
                            : crew.status === "scheduled"
                              ? "bg-blue-100 text-blue-800"
                              : crew.status === "delayed"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                        }
                      >
                        {crew.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{crew.project}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span>Lead: {crew.lead}</span>
                      <span>{crew.members} members</span>
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
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/workflow/construction-schedule">
              <Button className="h-20 flex-col space-y-2 w-full">
                <Calendar className="h-6 w-6" />
                <span>View Schedule</span>
              </Button>
            </Link>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Camera className="h-6 w-6" />
              <span>Photo Upload</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <FileText className="h-6 w-6" />
              <span>Daily Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Phone className="h-6 w-6" />
              <span>Contact Crews</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
