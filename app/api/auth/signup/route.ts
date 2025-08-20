import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, company, role, plan } = await request.json()

    // Basic validation
    if (!name || !email || !password || !company) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // In production, you would:
    // 1. Validate email format and uniqueness
    // 2. Hash the password
    // 3. Store user in database
    // 4. Send verification email
    // 5. Set up payment processing based on plan

    // Demo response - simulate successful account creation
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role,
      company,
      plan,
      isAdmin: false,
      createdAt: new Date().toISOString(),
      verified: false,
    }

    return NextResponse.json({
      success: true,
      user: newUser,
      message: "Account created successfully. Please check your email for verification.",
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
