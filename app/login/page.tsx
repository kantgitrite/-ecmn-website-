import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="/images/eoc-logo.png"
              alt="Edgeofcali Media Network LLC"
              width={64}
              height={64}
              className="rounded-lg"
            />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold font-serif">Welcome to EOC AI</CardTitle>
            <CardDescription className="mt-2">Sign in to access your construction management dashboard</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@company.com" defaultValue="admin@edgeofcali.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" defaultValue="admin123" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Link href="/dashboard">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Sign In
              </Button>
            </Link>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Demo Credentials</span>
            </div>
          </div>

          <div className="space-y-2 text-sm bg-muted/50 p-4 rounded-lg">
            <p className="font-semibold">Quick Login Options:</p>
            <div className="space-y-1 text-muted-foreground">
              <p>Admin: admin@edgeofcali.com / admin123</p>
              <p>Builder: builder@example.com / builder123</p>
              <p>Superintendent: super@example.com / super123</p>
            </div>
          </div>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
