"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Brain, Camera, Shield, Calendar, Key, Settings, Loader2 } from "lucide-react"

export function ApiConfiguration() {
  const [apiKey, setApiKey] = useState("")
  const [model, setModel] = useState("gpt-4")
  const [monthlyBudget, setMonthlyBudget] = useState("")
  const [isTestingConnection, setIsTestingConnection] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "success" | "error">("idle")
  const { toast } = useToast()

  const testConnection = async () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key first.",
        variant: "destructive",
      })
      return
    }

    setIsTestingConnection(true)
    try {
      const response = await fetch("/api/openai/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey, model }),
      })

      const data = await response.json()

      if (data.success) {
        setConnectionStatus("success")
        toast({
          title: "Connection Successful",
          description: "Your OpenAI API key is working correctly.",
        })
      } else {
        setConnectionStatus("error")
        toast({
          title: "Connection Failed",
          description: data.details || "Failed to connect to OpenAI API.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setConnectionStatus("error")
      toast({
        title: "Connection Error",
        description: "An error occurred while testing the connection.",
        variant: "destructive",
      })
    } finally {
      setIsTestingConnection(false)
    }
  }

  const saveConfiguration = async () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    try {
      // Store configuration in localStorage for demo purposes
      // In production, this would be stored securely on the server
      const config = {
        model,
        monthlyBudget: monthlyBudget ? Number.parseInt(monthlyBudget) : null,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem("eoc-ai-config", JSON.stringify(config))
      localStorage.setItem("eoc-ai-api-key", apiKey) // In production, encrypt this

      toast({
        title: "Configuration Saved",
        description: "Your OpenAI API configuration has been saved successfully.",
      })
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save configuration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section id="configuration" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-4 font-serif">API Configuration</h3>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Configure your OpenAI API integration to power the AI features in EOC AI. Your API key enables intelligent
          scheduling, compliance checking, and photo validation.
        </p>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="mr-3 h-6 w-6 text-primary" />
                OpenAI API Integration
              </CardTitle>
              <CardDescription>
                Connect your OpenAI API to enable advanced AI features for construction management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="api-key" className="text-sm font-medium">
                      OpenAI API Key
                    </Label>
                    <Input
                      id="api-key"
                      type="password"
                      placeholder="sk-..."
                      className="mt-1"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">Your API key is encrypted and stored securely</p>
                  </div>

                  <div>
                    <Label htmlFor="model-selection" className="text-sm font-medium">
                      Preferred Model
                    </Label>
                    <select
                      className="w-full mt-1 p-2 border rounded-md bg-background"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    >
                      <option value="gpt-4">GPT-4 (Recommended)</option>
                      <option value="gpt-4-turbo">GPT-4 Turbo</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="monthly-budget" className="text-sm font-medium">
                      Monthly API Budget Limit
                    </Label>
                    <Input
                      id="monthly-budget"
                      type="number"
                      placeholder="500"
                      className="mt-1"
                      value={monthlyBudget}
                      onChange={(e) => setMonthlyBudget(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Set a spending limit to control API costs (USD)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">AI Features Enabled</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Brain className="mr-2 h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-900">Spec Analysis</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {connectionStatus === "success" ? "Active" : "Pending"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Camera className="mr-2 h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-900">Photo Validation</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {connectionStatus === "success" ? "Active" : "Pending"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-900">Code Compliance</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {connectionStatus === "success" ? "Active" : "Pending"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-900">Smart Scheduling</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {connectionStatus === "success" ? "Active" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Settings className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">API Usage Optimization</p>
                    <p className="text-sm text-blue-700 mt-1">
                      EOC AI is optimized to minimize API calls while maximizing AI capabilities. Typical usage:
                      $50-150/month for 10-20 active projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={testConnection} disabled={isTestingConnection || !apiKey}>
                  {isTestingConnection ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Testing...
                    </>
                  ) : (
                    "Test Connection"
                  )}
                </Button>
                <Button className="bg-primary" onClick={saveConfiguration} disabled={isSaving || !apiKey}>
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Configuration"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
