import { type NextRequest, NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(request: NextRequest) {
  try {
    const { apiKey, model = "gpt-4" } = await request.json()

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 400 })
    }

    // Test the API key with a simple request
    const { text } = await generateText({
      model: openai(model, { apiKey }),
      prompt: 'Respond with "API connection successful" if you can read this.',
      maxTokens: 10,
    })

    return NextResponse.json({
      success: true,
      message: "OpenAI API connection successful",
      response: text,
    })
  } catch (error: any) {
    console.error("OpenAI API test failed:", error)
    return NextResponse.json(
      {
        error: "API connection failed",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}
