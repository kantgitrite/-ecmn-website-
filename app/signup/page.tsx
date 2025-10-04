import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function SignupPage() {
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
            <CardTitle className="text-3xl font-bold font-serif">Create Your Account</CardTitle>
            <CardDescription className="mt-2">Start managing your construction projects with AI</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Your Construction Company" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a strong password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Your Role</Label>
              <select id="role" className="w-full p-2 border rounded-md bg-background">
                <option value="builder">Builder/General Contractor</option>
                <option value="superintendent">Superintendent</option>
                <option value="trade">Trade Contractor</option>
                <option value="inspector">Inspector</option>
                <option value="supplier">Supplier</option>
              </select>
            </div>
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="terms" className="mt-1 rounded" />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
            <Link href="/dashboard">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Create Account
              </Button>
            </Link>
          </form>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-semibold">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
