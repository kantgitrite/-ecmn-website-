import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Demo authentication - in production, this would validate against a database
    const demoUsers = [
      {
        email: "admin@edgeofcali.com",
        password: "admin123",
        name: "Admin User",
        role: "admin",
        company: "Edgeofcali Media Network LLC",
        plan: "enterprise",
        isAdmin: true,
      },
      {
        email: "builder@demo.com",
        password: "builder123",
        name: "John Builder",
        role: "builder",
        company: "Demo Construction LLC",
        plan: "professional",
        isAdmin: false,
      },
    ]

    const user = demoUsers.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    // In production, you would:
    // 1. Hash and compare passwords
    // 2. Generate JWT tokens
    // 3. Set secure HTTP-only cookies
    // 4. Store session in database

    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      message: "Login successful",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
