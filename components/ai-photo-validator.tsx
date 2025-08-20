"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, CheckCircle, XCircle, Brain } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AIPhotoValidatorProps {
  context: "framing" | "electrical" | "plumbing" | "foundation" | "general"
  onValidationComplete?: (result: any) => void
}

export default function AIPhotoValidator({ context, onValidationComplete }: AIPhotoValidatorProps) {
  const [isValidating, setIsValidating] = useState(false)
  const [validationResult, setValidationResult] = useState<any>(null)
  const [uploadedPhotos, setUploadedPhotos] = useState<any[]>([])
  const { toast } = useToast()

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newPhotos = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        url: URL.createObjectURL(file),
        status: "pending",
      }))
      setUploadedPhotos([...uploadedPhotos, ...newPhotos])
    }
  }

  const validatePhotos = async () => {
    if (uploadedPhotos.length === 0) {
      toast({
        title: "No Photos",
        description: "Please upload photos before validation.",
        variant: "destructive",
      })
      return
    }

    setIsValidating(true)

    // Simulate AI photo validation
    setTimeout(() => {
      const contextValidation = getContextValidation(context)

      const updatedPhotos = uploadedPhotos.map((photo) => ({
        ...photo,
        status: Math.random() > 0.2 ? "passed" : "failed",
        issues: Math.random() > 0.7 ? ["Code compliance issue detected", "Safety concern identified"] : [],
      }))

      const result = {
        overallStatus: updatedPhotos.every((p) => p.status === "passed") ? "passed" : "needs-attention",
        totalPhotos: updatedPhotos.length,
        passedPhotos: updatedPhotos.filter((p) => p.status === "passed").length,
        failedPhotos: updatedPhotos.filter((p) => p.status === "failed").length,
        photos: updatedPhotos,
        aiAnalysis: contextValidation,
        complianceScore: Math.floor(Math.random() * 20) + 80,
        recommendations: [
          "All structural elements appear compliant",
          "Safety protocols being followed",
          "Quality standards met",
          "Documentation complete",
        ],
      }

      setValidationResult(result)
      setUploadedPhotos(updatedPhotos)
      setIsValidating(false)

      if (onValidationComplete) {
        onValidationComplete(result)
      }

      toast({
        title: "Validation Complete",
        description: `${result.passedPhotos}/${result.totalPhotos} photos passed AI validation.`,
      })
    }, 3000)
  }

  const getContextValidation = (context: string) => {
    const validations = {
      framing: {
        checks: ["Structural integrity", "Code compliance", "Safety standards", "Material quality"],
        focus: "Checking wall framing, beam placement, and structural connections",
      },
      electrical: {
        checks: ["Wire routing", "Box placement", "Code compliance", "Safety clearances"],
        focus: "Validating electrical rough-in work and safety protocols",
      },
      plumbing: {
        checks: ["Pipe routing", "Joint integrity", "Code compliance", "Slope verification"],
        focus: "Analyzing plumbing installation and water flow systems",
      },
      foundation: {
        checks: ["Concrete quality", "Rebar placement", "Dimensions", "Curing process"],
        focus: "Evaluating foundation work and structural requirements",
      },
      general: {
        checks: ["Overall quality", "Safety compliance", "Progress tracking", "Documentation"],
        focus: "General construction progress and quality assessment",
      },
    }
    return validations[context as keyof typeof validations] || validations.general
  }

  return (
    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
      <CardHeader>
        <CardTitle className="flex items-center text-purple-900">
          <Camera className="w-5 h-5 mr-2" />
          AI Photo Validation
        </CardTitle>
        <CardDescription className="text-purple-700">
          Computer vision analysis for construction quality and compliance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload Section */}
        <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 text-center">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
            id="photo-upload"
          />
          <label htmlFor="photo-upload" className="cursor-pointer">
            <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-purple-700 font-medium">Upload Construction Photos</p>
            <p className="text-purple-600 text-sm">Click to select multiple images</p>
          </label>
        </div>

        {/* Uploaded Photos */}
        {uploadedPhotos.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-900">Uploaded Photos ({uploadedPhotos.length})</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {uploadedPhotos.map((photo) => (
                <div key={photo.id} className="relative bg-white rounded-lg border p-2">
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.name}
                    className="w-full h-20 object-cover rounded"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-600 truncate">{photo.name}</p>
                    {photo.status === "passed" && <CheckCircle className="w-4 h-4 text-green-500" />}
                    {photo.status === "failed" && <XCircle className="w-4 h-4 text-red-500" />}
                    {photo.status === "pending" && <div className="w-4 h-4 bg-gray-300 rounded-full" />}
                  </div>
                  {photo.issues && photo.issues.length > 0 && (
                    <div className="mt-1">
                      {photo.issues.map((issue: string, index: number) => (
                        <p key={index} className="text-xs text-red-600">
                          {issue}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Validation Button */}
        <Button
          onClick={validatePhotos}
          disabled={isValidating || uploadedPhotos.length === 0}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {isValidating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              AI Analyzing Photos...
            </>
          ) : (
            <>
              <Brain className="w-4 h-4 mr-2" />
              Validate with AI
            </>
          )}
        </Button>

        {/* Validation Results */}
        {validationResult && (
          <div className="space-y-4 bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">Validation Results</h4>
              <Badge
                className={
                  validationResult.overallStatus === "passed"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }
              >
                {validationResult.overallStatus === "passed" ? "All Clear" : "Needs Attention"}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-600">{validationResult.passedPhotos}</p>
                <p className="text-sm text-gray-600">Passed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{validationResult.failedPhotos}</p>
                <p className="text-sm text-gray-600">Failed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{validationResult.complianceScore}%</p>
                <p className="text-sm text-gray-600">Compliance</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">AI Analysis Focus</h5>
                <p className="text-sm text-gray-700">{validationResult.aiAnalysis.focus}</p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">Validation Checks</h5>
                <div className="flex flex-wrap gap-2">
                  {validationResult.aiAnalysis.checks.map((check: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {check}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">AI Recommendations</h5>
                <ul className="space-y-1">
                  {validationResult.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
