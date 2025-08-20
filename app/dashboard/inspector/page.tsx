"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Calendar, CheckCircle, LogOut, Eye, Clock, MapPin, Camera, FileText, Shield, XCircle } from "lucide-react"
import Image from "next/image"

export default function InspectorDashboard() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      setUser({
        name: "David Rodriguez",
        email: "david.rodriguez@cityinspections.gov",
        role: "inspector",
        company: "City Building Department",
        plan: "inspector",
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

  const scheduledInspections = [
    {
      id: 1,
      project: "Sunset Ridge #12",
      address: "1234 Sunset Ridge Dr",
      type: "Framing Inspection",
      date: "2024-04-18",
      time: "9:00 AM",
      status: "scheduled",
      contractor: "ElectricPro Contractors",
      superintendent: "Mike Johnson",
    },
    {
      id: 2,
      project: "Oak Valley #8",
      address: "5678 Oak Valley Way",
      type: "Foundation Inspection",
      date: "2024-04-18",
      time: "11:30 AM",
      status: "scheduled",
      contractor: "Foundation Masters",
      superintendent: "Lisa Chen",
    },
    {
      id: 3,
      project: "Pine Creek #15",
      address: "9012 Pine Creek Blvd",
      type: "Final Inspection",
      date: "2024-04-18",
      time: "2:00 PM",
      status: "scheduled",
      contractor: "Premium Builders",
      superintendent: "Tom Wilson",
    },
  ]

  const recentInspections = [
    {
      id: 1,
      project: "Maple Heights #3",
      type: "Electrical Rough-In",
      date: "2024-04-17",
      result: "passed",
      notes: "All work meets code requirements",
    },
    {
      id: 2,
      project: "Cedar Grove #7",
      type: "Plumbing Rough-In",
      date: "2024-04-17",
      result: "failed",
      notes: "Vent pipe installation needs correction",
    },
    {
      id: 3,
      project: "Willow Park #5",
      type: "Insulation",
      date: "2024-04-16",
      result: "passed",
      notes: "Proper R-value achieved throughout",
    },
  ]

  const stats = [
    { label: "Today's Inspections", value: "3", icon: Calendar, color: "text-blue-600" },
    { label: "This Week Passed", value: "18", icon: CheckCircle, color: "text-green-600" },
    { label: "This Week Failed", value: "2", icon: XCircle, color: "text-red-600" },
    { label: "Pending Reports", value: "1", icon: FileText, color: "text-orange-600" },
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
                <p className="text-xs text-muted-foreground">Inspector Portal</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-800">
                <Shield className="w-3 h-3 mr-1" />
                Inspector
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
          <p className="text-gray-600">Your inspection schedule and compliance tracking dashboard.</p>
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
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Today's Inspection Schedule
              </CardTitle>
              <CardDescription>Scheduled inspections for April 18, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledInspections.map((inspection) => (
                  <div key={inspection.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{inspection.type}</h3>
                        <p className="text-sm text-muted-foreground">{inspection.project}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {inspection.address}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{inspection.time}</p>
                        <Badge className="bg-blue-100 text-blue-800">{inspection.status}</Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>
                          <strong>Contractor:</strong> {inspection.contractor}
                        </p>
                        <p>
                          <strong>Superintendent:</strong> {inspection.superintendent}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Eye className="w-4 h-4 mr-1" />
                          Details
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <MapPin className="w-4 h-4 mr-1" />
                          Navigate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Inspections */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Recent Inspections
              </CardTitle>
              <CardDescription>Latest inspection results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInspections.map((inspection) => (
                  <div key={inspection.id} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{inspection.project}</h4>
                      <Badge
                        className={
                          inspection.result === "passed"
                            ? "bg-green-100 text-green-800"
                            : inspection.result === "failed"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {inspection.result}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{inspection.type}</p>
                    <p className="text-xs text-muted-foreground mb-2">{inspection.date}</p>
                    <p className="text-xs">{inspection.notes}</p>
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
            <Button className="h-20 flex-col space-y-2">
              <CheckCircle className="h-6 w-6" />
              <span>Pass Inspection</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <XCircle className="h-6 w-6" />
              <span>Fail Inspection</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Camera className="h-6 w-6" />
              <span>Take Photos</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <FileText className="h-6 w-6" />
              <span>Generate Report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
