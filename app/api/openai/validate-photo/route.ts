import { type NextRequest, NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(request: NextRequest) {
  try {
    const { apiKey, model = "gpt-4", imageUrl, taskDescription, complianceChecks } = await request.json()

    if (!apiKey || !imageUrl || !taskDescription) {
      return NextResponse.json({ error: "API key, image URL, and task description are required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai(model, { apiKey }),
      messages: [
        {
          role: "system",
          content: `You are an expert construction inspector specializing in California building codes. Analyze construction photos for compliance, quality, and completeness. Focus on safety, code compliance, and workmanship quality.`,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyze this construction photo for task: "${taskDescription}"
              
              ${complianceChecks ? `Specific compliance checks needed: ${complianceChecks}` : ""}
              
              Provide:
              1. Quality assessment (Pass/Fail/Needs Review)
              2. Compliance status
              3. Issues identified
              4. Recommendations
              5. Next steps required`,
            },
            {
              type: "image",
              image: imageUrl,
            },
          ],
        },
      ],
      maxTokens: 1000,
    })

    return NextResponse.json({
      success: true,
      validation: text,
    })
  } catch (error: any) {
    console.error("Photo validation failed:", error)
    return NextResponse.json(
      {
        error: "Photo validation failed",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}
