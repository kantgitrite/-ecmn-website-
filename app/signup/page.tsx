"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Loader2, Eye, EyeOff, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "builder",
    plan: "professional",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const roles = [
    { value: "builder", label: "Builder/GC", desc: "General contractor or home builder" },
    { value: "superintendent", label: "Superintendent", desc: "Project manager and site supervisor" },
    { value: "trade", label: "Trade Contractor", desc: "Specialized trade contractor" },
    { value: "inspector", label: "Inspector", desc: "Building inspector or quality control" },
    { value: "supplier", label: "Supplier", desc: "Material supplier or vendor" },
  ]

  const plans = [
    { value: "starter", label: "Starter", price: "$299", desc: "Perfect for small builders" },
    { value: "professional", label: "Professional", price: "$599", desc: "Most popular choice" },
    { value: "enterprise", label: "Enterprise", price: "$999", desc: "For large operations" },
  ]

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Account Created",
          description: "Welcome to EOC AI! Please check your email to verify your account.",
        })
        // Redirect to login
        window.location.href = "/login"
      } else {
        toast({
          title: "Signup Failed",
          description: data.message || "Failed to create account",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Signup Error",
        description: "An error occurred during signup",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/images/eoc-logo.png" alt="EOC AI Logo" width={80} height={80} className="rounded-lg" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Join EOC AI</h1>
          <p className="text-gray-600 mt-2">Start your construction management journey</p>
        </div>

        <Card className="bg-white shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">Choose your plan and get started in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@construction.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Smith Construction LLC"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="space-y-3">
                <Label>Your Role</Label>
                <div className="grid md:grid-cols-2 gap-2">
                  {roles.map((role) => (
                    <div
                      key={role.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        formData.role === role.value
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setFormData({ ...formData, role: role.value })}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{role.label}</p>
                          <p className="text-xs text-muted-foreground">{role.desc}</p>
                        </div>
                        {formData.role === role.value && <Check className="h-4 w-4 text-primary" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-3">
                <Label>Choose Your Plan</Label>
                <div className="grid md:grid-cols-3 gap-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.value}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.plan === plan.value
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setFormData({ ...formData, plan: plan.value })}
                    >
                      <div className="text-center">
                        <p className="font-semibold">{plan.label}</p>
                        <p className="text-2xl font-bold text-primary my-2">{plan.price}</p>
                        <p className="text-xs text-muted-foreground">{plan.desc}</p>
                        {formData.plan === plan.value && <Badge className="mt-2">Selected</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  `Create Account - ${plans.find((p) => p.value === formData.plan)?.price}/home`
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">© 2024 Edgeofcali Media Network LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
