"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Building2,
  CheckCircle,
  LogOut,
  Zap,
  Clock,
  MapPin,
  Truck,
  Camera,
  FileText,
  Package,
  Wrench,
} from "lucide-react"
import Image from "next/image"

export default function TradeContractorDashboard() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      setUser({
        name: "Sarah Wilson",
        email: "sarah.wilson@electricpro.com",
        role: "trade-contractor",
        company: "ElectricPro Contractors",
        trade: "Electrical",
        plan: "contractor",
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

  const myJobs = [
    {
      id: 1,
      project: "Sunset Ridge #12",
      address: "1234 Sunset Ridge Dr",
      phase: "Electrical Rough-In",
      startDate: "2024-04-08",
      endDate: "2024-04-19",
      progress: 45,
      status: "in-progress",
      priority: "high",
      superintendent: "Mike Johnson",
      tasks: ["Panel installation", "Rough wiring", "Outlet boxes"],
    },
    {
      id: 2,
      project: "Oak Valley #8",
      address: "5678 Oak Valley Way",
      phase: "Electrical Rough-In",
      startDate: "2024-04-15",
      endDate: "2024-04-26",
      progress: 0,
      status: "scheduled",
      priority: "medium",
      superintendent: "Lisa Chen",
      tasks: ["Service panel", "Branch circuits", "Low voltage"],
    },
  ]

  const materialNeeds = [
    {
      item: "12 AWG Romex Wire",
      quantity: "500 ft",
      project: "Sunset Ridge #12",
      needed: "Tomorrow",
      status: "ordered",
    },
    { item: "Outlet Boxes", quantity: "24 units", project: "Sunset Ridge #12", needed: "Today", status: "urgent" },
    { item: "Circuit Breakers", quantity: "8 units", project: "Oak Valley #8", needed: "Next Week", status: "pending" },
  ]

  const stats = [
    { label: "Active Jobs", value: "2", icon: Building2, color: "text-blue-600" },
    { label: "Completed Tasks", value: "8", icon: CheckCircle, color: "text-green-600" },
    { label: "Pending Materials", value: "3", icon: Package, color: "text-orange-600" },
    { label: "This Week Hours", value: "32", icon: Clock, color: "text-purple-600" },
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
                <p className="text-xs text-muted-foreground">Trade Contractor Portal</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-yellow-100 text-yellow-800">
                <Zap className="w-3 h-3 mr-1" />
                {user?.trade}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome, {user?.name}!</h2>
          <p className="text-gray-600">Your electrical contractor dashboard and job management.</p>
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
          {/* My Jobs */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="w-5 h-5 mr-2" />
                My Current Jobs
              </CardTitle>
              <CardDescription>Active electrical projects and schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {myJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{job.project}</h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.address}
                        </p>
                        <p className="text-sm text-muted-foreground">Phase: {job.phase}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          className={
                            job.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : job.status === "scheduled"
                                ? "bg-gray-100 text-gray-800"
                                : job.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                          }
                        >
                          {job.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {job.startDate} - {job.endDate}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{job.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Tasks:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.tasks.map((task, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Superintendent:</p>
                        <p className="text-sm text-muted-foreground">{job.superintendent}</p>
                        <div className="mt-2 space-x-2">
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Camera className="w-4 h-4 mr-1" />
                            Photos
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <FileText className="w-4 h-4 mr-1" />
                            Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Material Needs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Material Needs
              </CardTitle>
              <CardDescription>Upcoming material requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {materialNeeds.map((material, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{material.item}</h4>
                      <Badge
                        className={
                          material.status === "urgent"
                            ? "bg-red-100 text-red-800"
                            : material.status === "ordered"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {material.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Qty: {material.quantity}</p>
                    <p className="text-xs text-muted-foreground mb-1">Project: {material.project}</p>
                    <p className="text-xs font-medium">Needed: {material.needed}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" size="sm">
                <Truck className="w-4 h-4 mr-2" />
                Request Materials
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <Clock className="h-6 w-6" />
              <span>Log Hours</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Camera className="h-6 w-6" />
              <span>Upload Photos</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Package className="h-6 w-6" />
              <span>Material Request</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <FileText className="h-6 w-6" />
              <span>Daily Report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
