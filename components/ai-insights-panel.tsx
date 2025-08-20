"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Lightbulb, Target, BarChart3 } from "lucide-react"

interface AIInsightsPanelProps {
  context: "land-acquisition" | "plan-selection" | "developer-approval" | "construction-schedule" | "general"
  data?: any
}

export default function AIInsightsPanel({ context, data }: AIInsightsPanelProps) {
  const [insights, setInsights] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const generateInsights = async () => {
    setIsAnalyzing(true)

    // Simulate AI analysis based on context
    setTimeout(() => {
      let contextInsights

      switch (context) {
        case "land-acquisition":
          contextInsights = {
            riskScore: 15,
            opportunityScore: 87,
            recommendations: [
              "Excellent location for residential development",
              "Soil conditions suitable for standard foundations",
              "Market demand strong in this price range",
              "Consider environmental impact assessment",
            ],
            risks: ["Potential wetland area requires survey", "Traffic impact study may be needed"],
            marketAnalysis: {
              demandTrend: "increasing",
              priceAppreciation: "+12% annually",
              competitorActivity: "moderate",
            },
          }
          break
        case "plan-selection":
          contextInsights = {
            marketFit: 94,
            profitPotential: 78,
            recommendations: [
              "High demand for this plan type in target market",
              "Optimal size for lot characteristics",
              "Strong resale potential based on comparables",
              "Consider premium upgrade packages",
            ],
            customizations: [
              "Extended covered patio (+$15K value)",
              "Upgraded kitchen package (+$25K value)",
              "Smart home integration (+$8K value)",
            ],
            timeline: "6-8 months typical construction",
          }
          break
        case "developer-approval":
          contextInsights = {
            approvalProbability: 92,
            profitMargin: 24,
            recommendations: [
              "Strong financial projections",
              "Compliant with all zoning requirements",
              "Market conditions favorable",
              "Resource allocation optimized",
            ],
            concerns: ["Monitor material cost fluctuations", "Weather delays possible in Q2"],
            timeline: "Approval expected within 3-5 days",
          }
          break
        case "construction-schedule":
          contextInsights = {
            efficiency: 89,
            riskLevel: 12,
            recommendations: [
              "Schedule optimization can save 8 days",
              "Resource conflicts resolved",
              "Weather contingencies in place",
              "Critical path analysis complete",
            ],
            optimizations: [
              "Parallel MEP installation saves 5 days",
              "Early material delivery reduces delays",
              "Weekend crew scheduling available",
            ],
            predictedCompletion: "On schedule with 95% confidence",
          }
          break
        default:
          contextInsights = {
            overallHealth: 85,
            recommendations: [
              "Project portfolio performing well",
              "AI systems operating optimally",
              "Team productivity above average",
              "Quality metrics exceeding targets",
            ],
          }
      }

      setInsights(contextInsights)
      setIsAnalyzing(false)
    }, 2000)
  }

  useEffect(() => {
    if (data) {
      generateInsights()
    }
  }, [data, context])

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-900">
          <Brain className="w-5 h-5 mr-2" />
          AI Insights & Recommendations
        </CardTitle>
        <CardDescription className="text-blue-700">AI-powered analysis and optimization suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        {!insights ? (
          <div className="text-center py-6">
            <Button onClick={generateInsights} disabled={isAnalyzing} className="bg-blue-600 hover:bg-blue-700">
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  Generate AI Insights
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {insights.riskScore && (
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <span className="text-2xl font-bold text-orange-600">{insights.riskScore}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Risk Level</p>
                </div>
              )}
              {insights.opportunityScore && (
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <Target className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-600">{insights.opportunityScore}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Opportunity</p>
                </div>
              )}
              {insights.marketFit && (
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl font-bold text-blue-600">{insights.marketFit}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Market Fit</p>
                </div>
              )}
              {insights.profitPotential && (
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <span className="text-2xl font-bold text-purple-600">{insights.profitPotential}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Profit Potential</p>
                </div>
              )}
              {insights.efficiency && (
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-600">{insights.efficiency}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Efficiency</p>
                </div>
              )}
              {insights.approvalProbability && (
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-600">{insights.approvalProbability}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Approval Probability</p>
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                AI Recommendations
              </h4>
              <ul className="space-y-2">
                {insights.recommendations?.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Context-specific sections */}
            {insights.risks && insights.risks.length > 0 && (
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Risk Factors
                </h4>
                <ul className="space-y-2">
                  {insights.risks.map((risk: string, index: number) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {insights.customizations && (
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-900 mb-3">Suggested Customizations</h4>
                <ul className="space-y-2">
                  {insights.customizations.map((custom: string, index: number) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{custom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {insights.optimizations && (
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-purple-900 mb-3">Optimization Opportunities</h4>
                <ul className="space-y-2">
                  {insights.optimizations.map((opt: string, index: number) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Market Analysis */}
            {insights.marketAnalysis && (
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-gray-900 mb-3">Market Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="font-medium">Demand Trend</p>
                    <Badge className="bg-green-100 text-green-800 capitalize">
                      {insights.marketAnalysis.demandTrend}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium">Price Appreciation</p>
                    <p className="text-green-600 font-semibold">{insights.marketAnalysis.priceAppreciation}</p>
                  </div>
                  <div>
                    <p className="font-medium">Competition</p>
                    <Badge className="bg-blue-100 text-blue-800 capitalize">
                      {insights.marketAnalysis.competitorActivity}
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Prediction */}
            {(insights.timeline || insights.predictedCompletion) && (
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-gray-900 mb-2">Timeline Prediction</h4>
                <p className="text-sm text-gray-700">{insights.timeline || insights.predictedCompletion}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
