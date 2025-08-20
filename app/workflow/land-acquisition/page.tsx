"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  MapPin,
  FileText,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Brain,
  ArrowRight,
  Upload,
  Eye,
  Users,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandAcquisitionPage() {
  const [user, setUser] = useState<any>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [landData, setLandData] = useState({
    address: "",
    acreage: "",
    price: "",
    zoning: "",
    utilities: "",
    soilReport: "",
    environmentalClearance: "",
    notes: "",
  })
  const [aiAnalysis, setAiAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const steps = [
    { id: 1, title: "Property Details", icon: MapPin, status: "current" },
    { id: 2, title: "Due Diligence", icon: FileText, status: "upcoming" },
    { id: 3, title: "Financial Analysis", icon: DollarSign, status: "upcoming" },
    { id: 4, title: "AI Assessment", icon: Brain, status: "upcoming" },
    { id: 5, title: "Approval", icon: CheckCircle, status: "upcoming" },
  ]

  const handleAIAnalysis = async () => {
    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      setAiAnalysis({
        feasibilityScore: 87,
        recommendations: [
          "Excellent location for residential development",
          "Soil conditions suitable for standard foundations",
          "Utilities readily available - minimal infrastructure cost",
          "Zoning allows for planned density",
          "Market analysis shows strong demand in area",
        ],
        risks: [
          "Potential wetland area in southeast corner - requires survey",
          "Traffic impact study may be required for full buildout",
        ],
        estimatedTimeline: "8-12 months to development ready",
        estimatedCosts: {
          infrastructure: "$450,000",
          permits: "$75,000",
          environmental: "$25,000",
        },
      })
      setIsAnalyzing(false)
      toast({
        title: "AI Analysis Complete",
        description: "Comprehensive land assessment has been generated.",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setLandData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      toast({
        title: "Step Completed",
        description: `Moving to step ${currentStep + 1}`,
      })
    }
  }

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
                <p className="text-xs text-muted-foreground">Land Acquisition Workflow</p>
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
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    step.id <= currentStep ? "bg-primary border-primary text-white" : "border-gray-300 text-gray-500"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${step.id <= currentStep ? "text-primary" : "text-gray-500"}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && <ArrowRight className="w-5 h-5 text-gray-400 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Property Details */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Property Information</CardTitle>
                  <CardDescription>Enter the basic details of the land acquisition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        value={landData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="123 Development Way, City, CA"
                      />
                    </div>
                    <div>
                      <Label htmlFor="acreage">Total Acreage</Label>
                      <Input
                        id="acreage"
                        value={landData.acreage}
                        onChange={(e) => handleInputChange("acreage", e.target.value)}
                        placeholder="25.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Purchase Price</Label>
                      <Input
                        id="price"
                        value={landData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        placeholder="$2,500,000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zoning">Current Zoning</Label>
                      <Input
                        id="zoning"
                        value={landData.zoning}
                        onChange={(e) => handleInputChange("zoning", e.target.value)}
                        placeholder="R-1 Residential"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="utilities">Utility Availability</Label>
                    <Textarea
                      id="utilities"
                      value={landData.utilities}
                      onChange={(e) => handleInputChange("utilities", e.target.value)}
                      placeholder="Water, sewer, electric, gas availability and connection points..."
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: AI Assessment */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Land Assessment</CardTitle>
                  <CardDescription>Comprehensive analysis using EOC AI technology</CardDescription>
                </CardHeader>
                <CardContent>
                  {!aiAnalysis ? (
                    <div className="text-center py-8">
                      <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Ready for AI Analysis</h3>
                      <p className="text-muted-foreground mb-6">
                        Our AI will analyze market conditions, development feasibility, regulatory requirements, and
                        financial projections.
                      </p>
                      <Button onClick={handleAIAnalysis} disabled={isAnalyzing} size="lg">
                        {isAnalyzing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Brain className="w-4 h-4 mr-2" />
                            Start AI Analysis
                          </>
                        )}
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Feasibility Score */}
                      <div className="bg-green-50 p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-green-900">Feasibility Score</h3>
                          <div className="text-3xl font-bold text-green-600">{aiAnalysis.feasibilityScore}/100</div>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-3">
                          <div
                            className="bg-green-600 h-3 rounded-full"
                            style={{ width: `${aiAnalysis.feasibilityScore}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Recommendations */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          AI Recommendations
                        </h3>
                        <ul className="space-y-2">
                          {aiAnalysis.recommendations.map((rec: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-sm">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Risk Assessment */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                          Risk Factors
                        </h3>
                        <ul className="space-y-2">
                          {aiAnalysis.risks.map((risk: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-sm">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Financial Projections */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900">Infrastructure</h4>
                          <p className="text-2xl font-bold text-blue-600">{aiAnalysis.estimatedCosts.infrastructure}</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-900">Permits</h4>
                          <p className="text-2xl font-bold text-purple-600">{aiAnalysis.estimatedCosts.permits}</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-900">Environmental</h4>
                          <p className="text-2xl font-bold text-orange-600">
                            {aiAnalysis.estimatedCosts.environmental}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous Step
              </Button>
              <Button onClick={handleNextStep} disabled={currentStep === 5}>
                {currentStep === 5 ? "Complete" : "Next Step"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Status */}
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Progress</span>
                    <span className="text-sm font-medium">{Math.round((currentStep / 5) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Step {currentStep} of {steps.length}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Access */}
            <Card>
              <CardHeader>
                <CardTitle>Team Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">Sales Team</span>
                    </div>
                    <Badge variant="secondary">View Only</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Development</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Full Access</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="text-sm">Construction</span>
                    </div>
                    <Badge variant="secondary">Pending</Badge>
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
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Documents
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
