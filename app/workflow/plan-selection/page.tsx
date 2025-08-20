"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Home, Ruler, Palette, Brain, Users, CheckCircle, Star, Search, Eye, Building2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PlanSelectionPage() {
  const [user, setUser] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [selectedElevation, setSelectedElevation] = useState<any>(null)
  const [filterCategory, setFilterCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [aiRecommendations, setAiRecommendations] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("eoc-user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const homePlans = [
    {
      id: 1,
      name: "The Monterey",
      category: "single-story",
      sqft: 2450,
      bedrooms: 4,
      bathrooms: 3,
      price: 485000,
      popularity: 95,
      image: "/modern-single-story-home.png",
      features: ["Open Floor Plan", "Master Suite", "3-Car Garage", "Covered Patio"],
      elevations: [
        { id: "A", name: "Craftsman", image: "/craftsman-style-home.png" },
        { id: "B", name: "Modern", image: "/modern-style-home.png" },
        { id: "C", name: "Traditional", image: "/traditional-style-home.png" },
      ],
    },
    {
      id: 2,
      name: "The Sonoma",
      category: "two-story",
      sqft: 3200,
      bedrooms: 5,
      bathrooms: 4,
      price: 625000,
      popularity: 88,
      image: "/elegant-two-story-home.png",
      features: ["Grand Foyer", "Bonus Room", "Walk-in Pantry", "Upstairs Loft"],
      elevations: [
        { id: "A", name: "Mediterranean", image: "/mediterranean-style-home.png" },
        { id: "B", name: "Contemporary", image: "/contemporary-home.png" },
      ],
    },
    {
      id: 3,
      name: "The Napa",
      category: "luxury",
      sqft: 4100,
      bedrooms: 5,
      bathrooms: 5,
      price: 825000,
      popularity: 76,
      image: "/luxury-home-exterior.png",
      features: ["Wine Cellar", "Home Theater", "Chef's Kitchen", "Guest Casita"],
      elevations: [
        { id: "A", name: "Tuscan", image: "/tuscan-luxury-home.png" },
        { id: "B", name: "Modern Luxury", image: "/modern-luxury-home.png" },
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Plans", count: homePlans.length },
    { id: "single-story", name: "Single Story", count: homePlans.filter((p) => p.category === "single-story").length },
    { id: "two-story", name: "Two Story", count: homePlans.filter((p) => p.category === "two-story").length },
    { id: "luxury", name: "Luxury", count: homePlans.filter((p) => p.category === "luxury").length },
  ]

  const filteredPlans = homePlans.filter((plan) => {
    const matchesCategory = filterCategory === "all" || plan.category === filterCategory
    const matchesSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.features.some((feature) => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan)
    setSelectedElevation(null)
    toast({
      title: "Plan Selected",
      description: `${plan.name} has been selected for customization.`,
    })
  }

  const handleElevationSelect = (elevation: any) => {
    setSelectedElevation(elevation)
    toast({
      title: "Elevation Selected",
      description: `${elevation.name} elevation has been selected.`,
    })
  }

  const handleAIRecommendation = async () => {
    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      setAiRecommendations({
        recommendedPlan: homePlans[0],
        reasons: [
          "Optimal size for target demographic in this area",
          "Single-story design popular with 78% of buyers",
          "Price point aligns with local market analysis",
          "High resale value based on comparable sales",
        ],
        marketInsights: {
          demandScore: 92,
          resaleProjection: "+15% over 5 years",
          competitorAnalysis: "Outperforms 85% of similar plans",
        },
        customizations: [
          "Consider upgraded kitchen package for +$25K value",
          "Extended covered patio popular in this climate",
          "Smart home package increases appeal to millennials",
        ],
      })
      setIsAnalyzing(false)
      toast({
        title: "AI Analysis Complete",
        description: "Personalized recommendations are ready.",
      })
    }, 2500)
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
                <p className="text-xs text-muted-foreground">Plan & Elevation Selection</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Home Plan</h2>
          <p className="text-gray-600">
            Choose from our collection of professionally designed home plans and elevations.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Search Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search plans or features..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={filterCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setFilterCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleAIRecommendation}
                  disabled={isAnalyzing}
                  className="w-full bg-transparent"
                  variant="outline"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Get AI Recommendations
                    </>
                  )}
                </Button>

                {aiRecommendations && (
                  <div className="mt-4 space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900 text-sm">Recommended Plan</h4>
                      <p className="text-blue-700 text-sm">{aiRecommendations.recommendedPlan.name}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-xs text-blue-600">
                          Match Score: {aiRecommendations.marketInsights.demandScore}%
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium mb-1">Key Insights:</p>
                      <ul className="space-y-1">
                        {aiRecommendations.reasons.slice(0, 2).map((reason: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2"></div>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Plans Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {filteredPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`cursor-pointer transition-all ${selectedPlan?.id === plan.id ? "ring-2 ring-primary" : ""}`}
                >
                  <div className="relative">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white text-gray-900">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        {plan.popularity}%
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <Button
                        size="sm"
                        variant={selectedPlan?.id === plan.id ? "default" : "outline"}
                        onClick={() => handlePlanSelect(plan)}
                      >
                        {selectedPlan?.id === plan.id ? "Selected" : "Select"}
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Ruler className="w-4 h-4 mr-1" />
                        {plan.sqft.toLocaleString()} sq ft
                      </div>
                      <div className="flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        {plan.bedrooms} bed
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {plan.bathrooms} bath
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-primary">${plan.price.toLocaleString()}</span>
                      <Badge variant="secondary" className="text-xs">
                        {plan.category.replace("-", " ")}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {plan.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {plan.features.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{plan.features.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Elevation Selection */}
            {selectedPlan && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="w-5 h-5 mr-2" />
                    Choose Your Elevation - {selectedPlan.name}
                  </CardTitle>
                  <CardDescription>
                    Select the architectural style that best fits your vision and neighborhood.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedPlan.elevations.map((elevation: any) => (
                      <Card
                        key={elevation.id}
                        className={`cursor-pointer transition-all ${selectedElevation?.id === elevation.id ? "ring-2 ring-primary" : ""}`}
                        onClick={() => handleElevationSelect(elevation)}
                      >
                        <div className="relative">
                          <Image
                            src={elevation.image || "/placeholder.svg"}
                            alt={elevation.name}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-t-lg"
                          />
                          {selectedElevation?.id === elevation.id && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle className="w-6 h-6 text-primary bg-white rounded-full" />
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold">{elevation.name}</h4>
                              <p className="text-sm text-muted-foreground">Elevation {elevation.id}</p>
                            </div>
                            <Button size="sm" variant={selectedElevation?.id === elevation.id ? "default" : "outline"}>
                              {selectedElevation?.id === elevation.id ? "Selected" : "Select"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Selection Summary & Next Steps */}
            {selectedPlan && selectedElevation && (
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">Selection Complete!</h3>
                      <div className="space-y-1 text-green-700">
                        <p>
                          <strong>Plan:</strong> {selectedPlan.name} ({selectedPlan.sqft.toLocaleString()} sq ft)
                        </p>
                        <p>
                          <strong>Elevation:</strong> {selectedElevation.name}
                        </p>
                        <p>
                          <strong>Base Price:</strong> ${selectedPlan.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center space-x-4">
                        <Button className="bg-green-600 hover:bg-green-700">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Proceed to Customization
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                          <Eye className="w-4 h-4 mr-2" />
                          View 3D Model
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-muted-foreground">Estimated Total</p>
                        <p className="text-2xl font-bold text-primary">${selectedPlan.price.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">+ customizations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
