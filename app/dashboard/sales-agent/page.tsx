"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Users,
  Calendar,
  CheckCircle,
  LogOut,
  Phone,
  Mail,
  DollarSign,
  TrendingUp,
  Home,
  Eye,
  MessageSquare,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SalesAgentDashboard() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      setUser({
        name: "Sarah Martinez",
        email: "sarah.martinez@edgeofcali.com",
        role: "sales-agent",
        company: "Edgeofcali Media Network LLC",
        plan: "professional",
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

  const leads = [
    {
      id: 1,
      name: "Johnson Family",
      email: "johnson@email.com",
      phone: "(555) 123-4567",
      status: "hot",
      interest: "The Monterey",
      budget: "$500K-600K",
      lastContact: "2 days ago",
      nextAction: "Schedule lot visit",
    },
    {
      id: 2,
      name: "Chen Family",
      email: "chen@email.com",
      phone: "(555) 234-5678",
      status: "warm",
      interest: "The Sonoma",
      budget: "$600K-700K",
      lastContact: "1 week ago",
      nextAction: "Follow up on financing",
    },
    {
      id: 3,
      name: "Williams Family",
      email: "williams@email.com",
      phone: "(555) 345-6789",
      status: "contract",
      interest: "The Napa",
      budget: "$800K+",
      lastContact: "Today",
      nextAction: "Contract review meeting",
    },
  ]

  const activeContracts = [
    {
      id: 1,
      client: "Johnson Family",
      plan: "The Monterey",
      lot: "12A Sunset Ridge",
      value: "$530,000",
      status: "pending-approval",
      submitted: "2024-01-15",
    },
    {
      id: 2,
      client: "Chen Family",
      plan: "The Sonoma",
      lot: "8B Oak Valley",
      value: "$700,000",
      status: "approved",
      submitted: "2024-01-14",
    },
  ]

  const stats = [
    { label: "Active Leads", value: "12", icon: Users, color: "text-blue-600" },
    { label: "This Month Sales", value: "$2.1M", icon: DollarSign, color: "text-green-600" },
    { label: "Pending Contracts", value: "3", icon: CheckCircle, color: "text-orange-600" },
    { label: "Conversion Rate", value: "24%", icon: TrendingUp, color: "text-purple-600" },
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
                <p className="text-xs text-muted-foreground">Sales Agent Portal</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <Star className="w-3 h-3 mr-1" />
                Sales Agent
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
          <p className="text-gray-600">Your sales dashboard and customer management center.</p>
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
          {/* Active Leads */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Active Leads
              </CardTitle>
              <CardDescription>Your current prospects and follow-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leads.map((lead) => (
                  <div key={lead.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{lead.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          <Mail className="w-4 h-4 inline mr-1" />
                          {lead.email}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 inline mr-1" />
                          {lead.phone}
                        </p>
                      </div>
                      <Badge
                        className={
                          lead.status === "hot"
                            ? "bg-red-100 text-red-800"
                            : lead.status === "warm"
                              ? "bg-yellow-100 text-yellow-800"
                              : lead.status === "contract"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                        }
                      >
                        {lead.status}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>
                          <strong>Interest:</strong> {lead.interest}
                        </p>
                        <p>
                          <strong>Budget:</strong> {lead.budget}
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Last Contact:</strong> {lead.lastContact}
                        </p>
                        <p>
                          <strong>Next Action:</strong> {lead.nextAction}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Note
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Contracts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Active Contracts
              </CardTitle>
              <CardDescription>Pending and approved contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeContracts.map((contract) => (
                  <div key={contract.id} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{contract.client}</h4>
                      <Badge
                        className={
                          contract.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : contract.status === "pending-approval"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {contract.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {contract.plan} - {contract.lot}
                    </p>
                    <p className="text-sm font-medium text-green-600 mb-1">{contract.value}</p>
                    <p className="text-xs text-muted-foreground">Submitted: {contract.submitted}</p>
                    <Button size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
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
              <Users className="h-6 w-6" />
              <span>Add Lead</span>
            </Button>
            <Link href="/workflow/plan-selection">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full bg-transparent">
                <Home className="h-6 w-6" />
                <span>Show Plans</span>
              </Button>
            </Link>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Calendar className="h-6 w-6" />
              <span>Schedule Tour</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <TrendingUp className="h-6 w-6" />
              <span>Sales Report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
