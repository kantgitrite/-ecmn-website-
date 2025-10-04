"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Home, Calendar, Users, CheckCircle, Clock, Camera, Lock, Unlock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LotDetailPage({ params }: { params: { id: string; lotNumber: string } }) {
  const [selectedPhase, setSelectedPhase] = useState("foundation")

  // Construction phases with detailed tasks
  const phases = [
    {
      id: "land-prep",
      name: "Land Preparation",
      order: 1,
      status: "completed",
      progress: 100,
      startDate: "2024-09-01",
      completionDate: "2024-09-10",
      tasks: [
        {
          id: "survey",
          name: "Site Survey & Staking",
          completed: true,
          assignedTo: "Survey Crew",
          requiresSignIn: true,
        },
        {
          id: "clearing",
          name: "Site Clearing & Grading",
          completed: true,
          assignedTo: "Grading Crew",
          requiresSignIn: true,
        },
        {
          id: "utilities",
          name: "Utility Rough-In",
          completed: true,
          assignedTo: "Utility Crew",
          requiresSignIn: true,
        },
        { id: "erosion", name: "Erosion Control", completed: true, assignedTo: "Grading Crew", requiresSignIn: true },
      ],
      inspections: [{ name: "Grading Inspection", status: "passed", date: "2024-09-10" }],
      restrictedTo: ["admin", "superintendent", "grading-crew"],
    },
    {
      id: "foundation",
      name: "Foundation",
      order: 2,
      status: "completed",
      progress: 100,
      startDate: "2024-09-11",
      completionDate: "2024-09-25",
      tasks: [
        {
          id: "layout",
          name: "Foundation Layout",
          completed: true,
          assignedTo: "Foundation Crew",
          requiresSignIn: true,
        },
        { id: "excavation", name: "Excavation", completed: true, assignedTo: "Excavation Crew", requiresSignIn: true },
        {
          id: "forms",
          name: "Form Installation",
          completed: true,
          assignedTo: "Foundation Crew",
          requiresSignIn: true,
        },
        { id: "rebar", name: "Rebar Placement", completed: true, assignedTo: "Foundation Crew", requiresSignIn: true },
        { id: "pour", name: "Concrete Pour", completed: true, assignedTo: "Concrete Crew", requiresSignIn: true },
        { id: "cure", name: "Curing Period", completed: true, assignedTo: "Foundation Crew", requiresSignIn: false },
      ],
      inspections: [
        { name: "Pre-Pour Inspection", status: "passed", date: "2024-09-20" },
        { name: "Foundation Final", status: "passed", date: "2024-09-25" },
      ],
      restrictedTo: ["admin", "superintendent", "foundation-crew"],
    },
    {
      id: "framing",
      name: "Framing",
      order: 3,
      status: "completed",
      progress: 100,
      startDate: "2024-09-26",
      completionDate: "2024-10-15",
      tasks: [
        { id: "floor", name: "Floor System", completed: true, assignedTo: "Framing Crew", requiresSignIn: true },
        { id: "walls", name: "Wall Framing", completed: true, assignedTo: "Framing Crew", requiresSignIn: true },
        {
          id: "shear",
          name: "Shear Wall Installation",
          completed: true,
          assignedTo: "Framing Crew",
          requiresSignIn: true,
        },
        { id: "roof", name: "Roof Framing", completed: true, assignedTo: "Framing Crew", requiresSignIn: true },
        {
          id: "windows",
          name: "Window/Door Installation",
          completed: true,
          assignedTo: "Framing Crew",
          requiresSignIn: true,
        },
      ],
      inspections: [{ name: "Framing Inspection", status: "passed", date: "2024-10-15" }],
      restrictedTo: ["admin", "superintendent", "framing-crew"],
    },
    {
      id: "rough-mep",
      name: "Rough MEP",
      order: 4,
      status: "in-progress",
      progress: 65,
      startDate: "2024-10-16",
      completionDate: null,
      tasks: [
        {
          id: "electrical",
          name: "Electrical Rough-In",
          completed: true,
          assignedTo: "Electrical Crew",
          requiresSignIn: true,
        },
        {
          id: "plumbing",
          name: "Plumbing Rough-In",
          completed: true,
          assignedTo: "Plumbing Crew",
          requiresSignIn: true,
        },
        { id: "hvac", name: "HVAC Rough-In", completed: false, assignedTo: "HVAC Crew", requiresSignIn: true },
        { id: "fireblock", name: "Fire Blocking", completed: true, assignedTo: "Framing Crew", requiresSignIn: true },
        { id: "insulation", name: "Insulation", completed: false, assignedTo: "Insulation Crew", requiresSignIn: true },
      ],
      inspections: [
        { name: "Electrical Rough", status: "passed", date: "2024-10-25" },
        { name: "Plumbing Rough", status: "passed", date: "2024-10-26" },
        { name: "HVAC Rough", status: "pending", date: null },
      ],
      restrictedTo: ["admin", "superintendent", "electrical-crew", "plumbing-crew", "hvac-crew"],
    },
    {
      id: "drywall",
      name: "Drywall",
      order: 5,
      status: "not-started",
      progress: 0,
      startDate: null,
      completionDate: null,
      tasks: [
        { id: "hang", name: "Drywall Hanging", completed: false, assignedTo: "Drywall Crew", requiresSignIn: true },
        { id: "tape", name: "Taping & Mudding", completed: false, assignedTo: "Drywall Crew", requiresSignIn: true },
        {
          id: "texture",
          name: "Texture Application",
          completed: false,
          assignedTo: "Drywall Crew",
          requiresSignIn: true,
        },
        { id: "sand", name: "Sanding", completed: false, assignedTo: "Drywall Crew", requiresSignIn: true },
      ],
      inspections: [],
      restrictedTo: ["admin", "superintendent", "drywall-crew"],
    },
    {
      id: "interior-finishes",
      name: "Interior Finishes",
      order: 6,
      status: "not-started",
      progress: 0,
      startDate: null,
      completionDate: null,
      tasks: [
        { id: "paint", name: "Interior Paint", completed: false, assignedTo: "Paint Crew", requiresSignIn: true },
        {
          id: "cabinets",
          name: "Cabinet Installation",
          completed: false,
          assignedTo: "Cabinet Crew",
          requiresSignIn: true,
        },
        {
          id: "countertops",
          name: "Countertop Installation",
          completed: false,
          assignedTo: "Countertop Crew",
          requiresSignIn: true,
        },
        {
          id: "flooring",
          name: "Flooring Installation",
          completed: false,
          assignedTo: "Flooring Crew",
          requiresSignIn: true,
        },
        { id: "trim", name: "Trim & Molding", completed: false, assignedTo: "Trim Crew", requiresSignIn: true },
        { id: "doors", name: "Interior Doors", completed: false, assignedTo: "Door Crew", requiresSignIn: true },
      ],
      inspections: [],
      restrictedTo: ["admin", "superintendent", "paint-crew", "cabinet-crew", "flooring-crew"],
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      order: 7,
      status: "not-started",
      progress: 0,
      startDate: null,
      completionDate: null,
      tasks: [
        {
          id: "electrical-finish",
          name: "Electrical Finish",
          completed: false,
          assignedTo: "Electrical Crew",
          requiresSignIn: true,
        },
        {
          id: "plumbing-finish",
          name: "Plumbing Fixtures",
          completed: false,
          assignedTo: "Plumbing Crew",
          requiresSignIn: true,
        },
        { id: "hvac-finish", name: "HVAC Finish", completed: false, assignedTo: "HVAC Crew", requiresSignIn: true },
        {
          id: "appliances",
          name: "Appliance Installation",
          completed: false,
          assignedTo: "Appliance Crew",
          requiresSignIn: true,
        },
      ],
      inspections: [
        { name: "Electrical Final", status: "pending", date: null },
        { name: "Plumbing Final", status: "pending", date: null },
        { name: "HVAC Final", status: "pending", date: null },
      ],
      restrictedTo: ["admin", "superintendent", "electrical-crew", "plumbing-crew", "hvac-crew"],
    },
    {
      id: "exterior",
      name: "Exterior Finishes",
      order: 8,
      status: "not-started",
      progress: 0,
      startDate: null,
      completionDate: null,
      tasks: [
        {
          id: "siding",
          name: "Siding Installation",
          completed: false,
          assignedTo: "Siding Crew",
          requiresSignIn: true,
        },
        { id: "roofing", name: "Roofing", completed: false, assignedTo: "Roofing Crew", requiresSignIn: true },
        {
          id: "gutters",
          name: "Gutters & Downspouts",
          completed: false,
          assignedTo: "Gutter Crew",
          requiresSignIn: true,
        },
        { id: "paint-ext", name: "Exterior Paint", completed: false, assignedTo: "Paint Crew", requiresSignIn: true },
        {
          id: "landscaping",
          name: "Landscaping",
          completed: false,
          assignedTo: "Landscape Crew",
          requiresSignIn: true,
        },
      ],
      inspections: [],
      restrictedTo: ["admin", "superintendent", "siding-crew", "roofing-crew", "landscape-crew"],
    },
    {
      id: "final",
      name: "Final & Closeout",
      order: 9,
      status: "not-started",
      progress: 0,
      startDate: null,
      completionDate: null,
      tasks: [
        { id: "punch", name: "Punch List Items", completed: false, assignedTo: "Multiple Crews", requiresSignIn: true },
        { id: "cleaning", name: "Final Cleaning", completed: false, assignedTo: "Cleaning Crew", requiresSignIn: true },
        {
          id: "walkthrough",
          name: "Final Walkthrough",
          completed: false,
          assignedTo: "Superintendent",
          requiresSignIn: true,
        },
        { id: "co", name: "Certificate of Occupancy", completed: false, assignedTo: "Admin", requiresSignIn: false },
      ],
      inspections: [{ name: "Final Inspection", status: "pending", date: null }],
      restrictedTo: ["admin", "superintendent"],
    },
  ]

  const currentPhase = phases.find((p) => p.id === selectedPhase) || phases[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href={`/projects/${params.id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Project
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
                <h1 className="text-lg font-bold text-primary font-serif">Lot {params.lotNumber}</h1>
                <p className="text-xs text-muted-foreground">1234 Sunset Ridge Dr</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">On Track</Badge>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                Photos
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lot Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Current Phase</span>
                <Home className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-lg font-bold text-blue-900">Rough MEP</p>
              <p className="text-xs text-blue-700 mt-1">Phase 4 of 9</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-900">Overall Progress</span>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-900">65%</p>
              <p className="text-xs text-green-700 mt-1">On schedule</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">Days Elapsed</span>
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-900">45</p>
              <p className="text-xs text-purple-700 mt-1">of 180 total</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-orange-900">Est. Completion</span>
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-lg font-bold text-orange-900">Mar 20</p>
              <p className="text-xs text-orange-700 mt-1">2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Phase Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Construction Timeline</CardTitle>
            <CardDescription>Track progress through all construction phases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPhase === phase.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          phase.status === "completed"
                            ? "bg-green-100"
                            : phase.status === "in-progress"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                        }`}
                      >
                        {phase.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : phase.status === "in-progress" ? (
                          <Clock className="h-5 w-5 text-blue-600" />
                        ) : (
                          <span className="text-sm font-bold text-gray-600">{phase.order}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{phase.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {phase.status === "completed"
                            ? `Completed ${phase.completionDate}`
                            : phase.status === "in-progress"
                              ? `Started ${phase.startDate}`
                              : "Not Started"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          phase.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : phase.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {phase.status === "completed"
                          ? "Complete"
                          : phase.status === "in-progress"
                            ? "In Progress"
                            : "Pending"}
                      </Badge>
                      <p className="text-sm font-semibold mt-1">{phase.progress}%</p>
                    </div>
                  </div>
                  {phase.progress > 0 && phase.progress < 100 && (
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${phase.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phase Details */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{currentPhase.name}</CardTitle>
                <CardDescription>
                  Phase {currentPhase.order} of {phases.length} • {currentPhase.progress}% Complete
                </CardDescription>
              </div>
              <Badge
                className={
                  currentPhase.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : currentPhase.status === "in-progress"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                }
              >
                {currentPhase.status === "completed"
                  ? "Complete"
                  : currentPhase.status === "in-progress"
                    ? "In Progress"
                    : "Not Started"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tasks" className="w-full">
              <TabsList>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="inspections">Inspections</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="access">Access Control</TabsTrigger>
              </TabsList>

              <TabsContent value="tasks" className="mt-6">
                <div className="space-y-3">
                  {currentPhase.tasks.map((task) => (
                    <Card key={task.id} className={task.completed ? "bg-green-50 border-green-200" : ""}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <Checkbox checked={task.completed} disabled className="mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-semibold">{task.name}</h4>
                                {task.requiresSignIn && (
                                  <Badge variant="outline" className="text-xs">
                                    <Lock className="h-3 w-3 mr-1" />
                                    Sign-In Required
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                Assigned to: {task.assignedTo}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {task.requiresSignIn && !task.completed && (
                              <Button size="sm" variant="outline">
                                Sign In
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              <Camera className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="inspections" className="mt-6">
                <div className="space-y-3">
                  {currentPhase.inspections.length > 0 ? (
                    currentPhase.inspections.map((inspection, index) => (
                      <Card
                        key={index}
                        className={
                          inspection.status === "passed"
                            ? "bg-green-50 border-green-200"
                            : inspection.status === "failed"
                              ? "bg-red-50 border-red-200"
                              : ""
                        }
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{inspection.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {inspection.date ? `Completed: ${inspection.date}` : "Not scheduled"}
                              </p>
                            </div>
                            <Badge
                              className={
                                inspection.status === "passed"
                                  ? "bg-green-100 text-green-800"
                                  : inspection.status === "failed"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {inspection.status === "passed"
                                ? "Passed"
                                : inspection.status === "failed"
                                  ? "Failed"
                                  : "Pending"}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-8">No inspections required for this phase</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="photos" className="mt-6">
                <div className="text-center py-8">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No photos uploaded for this phase yet</p>
                  <Button className="bg-primary">
                    <Camera className="h-4 w-4 mr-2" />
                    Upload Photos
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="access" className="mt-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Access Restrictions</h4>
                        <p className="text-sm text-blue-800 mb-3">
                          This phase is restricted to specific roles for security and quality control.
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-blue-900">Authorized Roles:</p>
                          <div className="flex flex-wrap gap-2">
                            {currentPhase.restrictedTo.map((role) => (
                              <Badge key={role} variant="outline" className="bg-white">
                                <Unlock className="h-3 w-3 mr-1" />
                                {role.replace("-", " ").toUpperCase()}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
