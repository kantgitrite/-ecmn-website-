import { type NextRequest, NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(request: NextRequest) {
  try {
    const { apiKey, model = "gpt-4", specText, projectType } = await request.json()

    if (!apiKey || !specText) {
      return NextResponse.json({ error: "API key and specification text are required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai(model, { apiKey }),
      system: `You are an expert construction specification analyzer specializing in California building codes (CBC/CRC), CALGreen, Title 24, seismic requirements, and WUI compliance. Analyze the provided specification and identify:
      1. Key compliance requirements
      2. Potential issues or conflicts
      3. Missing specifications
      4. Recommended best practices
      5. Cost implications`,
      prompt: `Analyze this ${projectType || "residential"} construction specification:

${specText}

Provide a detailed analysis focusing on California building code compliance and construction best practices.`,
      maxTokens: 1500,
    })

    return NextResponse.json({
      success: true,
      analysis: text,
    })
  } catch (error: any) {
    console.error("Spec analysis failed:", error)
    return NextResponse.json(
      {
        error: "Specification analysis failed",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}
