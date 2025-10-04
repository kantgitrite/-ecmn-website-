import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Brain, Calendar, Shield, Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg" />
              <span className="text-xl font-semibold">EOC AI</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 text-sm font-medium">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-32 sm:py-40 lg:py-48 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative">
          <Badge variant="secondary" className="mb-8 bg-muted/50 text-foreground border-border/50 text-sm px-4 py-1.5">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            AI for Construction Teams
          </Badge>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance leading-[1.1]">
            AI for teams building <span className="text-muted-foreground">the future</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Empower your construction team to create at the speed of thought, while ensuring compliance remains at the
            forefront.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base font-medium"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-border/50 hover:bg-muted/50 bg-transparent text-base font-medium"
            >
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">No credit card required • 14-day free trial</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { metric: "22 days", label: "saved per project" },
              { metric: "94%", label: "AI accuracy rate" },
              { metric: "3x faster", label: "inspection readiness" },
              { metric: "100%", label: "California code coverage" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-3 text-foreground">{stat.metric}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">Everything you need to build faster</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI-powered tools that transform how construction teams work
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description:
                  "AI-powered constraint solving with Google OR-Tools. Optimize timelines based on crew capacity, material lead times, and weather.",
              },
              {
                icon: Brain,
                title: "AI Code Assistant",
                description:
                  "Instant answers on CBC, CALGreen, Title 24, and seismic requirements. Convert specs into actionable checklists automatically.",
              },
              {
                icon: Shield,
                title: "Compliance Automation",
                description:
                  "Real-time validation against California building codes. Catch issues before inspection with AI-powered photo analysis.",
              },
              {
                icon: Zap,
                title: "Field Evidence Collection",
                description:
                  "Mobile-first photo and video capture with offline support. AI validates work against checklists in real-time.",
              },
              {
                icon: CheckCircle,
                title: "Inspection Readiness",
                description:
                  "Auto-generate inspection packets with all required documentation. Know you're ready before you call the inspector.",
              },
              {
                icon: Building2,
                title: "Project Intelligence",
                description:
                  "Track progress across all lots with AI-powered insights. Identify bottlenecks and optimize resource allocation.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border/40 hover:border-border/60 transition-all hover:bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="py-32 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">Built for every stakeholder</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From builders to trade contractors, everyone gets the tools they need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Builders & GCs",
                description: "Define standards, manage budgets, track progress across all projects",
                icon: Building2,
              },
              {
                role: "Superintendents",
                description: "Run day-to-day operations, coordinate trades, drive schedules",
                icon: Zap,
              },
              {
                role: "Trade Contractors",
                description: "Receive tasks, upload evidence, request inspections seamlessly",
                icon: CheckCircle,
              },
              {
                role: "Inspectors",
                description: "Review readiness, access evidence, track corrections efficiently",
                icon: Shield,
              },
              {
                role: "Suppliers",
                description: "Share lead times, coordinate deliveries, integrate with schedules",
                icon: Calendar,
              },
              {
                role: "Homebuyers",
                description: "Track milestone progress with optional transparency portal",
                icon: Brain,
              },
            ].map((stakeholder, index) => (
              <Card key={index} className="bg-card/50 border-border/40 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <stakeholder.icon className="h-10 w-10 mb-4 text-foreground" />
                  <CardTitle className="text-xl font-semibold">{stakeholder.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">{stakeholder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pay per home completed. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$299",
                description: "Perfect for small builders",
                features: [
                  "Up to 5 active projects",
                  "Basic AI scheduling",
                  "Mobile field app",
                  "Photo evidence collection",
                  "Basic compliance checking",
                ],
                cta: "Start Free Trial",
                popular: false,
              },
              {
                name: "Professional",
                price: "$599",
                description: "For growing companies",
                features: [
                  "Up to 25 active projects",
                  "Advanced AI scheduling",
                  "AI photo validation",
                  "Full California compliance",
                  "Supplier integration",
                  "Advanced analytics",
                ],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$999",
                description: "For large-scale operations",
                features: [
                  "Unlimited projects",
                  "Custom AI training",
                  "White-label options",
                  "SSO/SAML integration",
                  "Dedicated support",
                  "Custom integrations",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card/50 backdrop-blur-sm ${
                  plan.popular ? "border-foreground/20 shadow-xl" : "border-border/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-foreground text-background font-medium">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-semibold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">{plan.description}</CardDescription>
                  <div className="mt-8">
                    <span className="text-6xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-lg">/home</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full h-11 text-base font-medium ${
                      plan.popular
                        ? "bg-foreground hover:bg-foreground/90 text-background"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-balance">Ready to build smarter?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join forward-thinking builders using AI to deliver projects faster and with higher quality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base font-medium"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-border/50 hover:bg-muted/50 bg-transparent text-base font-medium"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg" />
              <div>
                <div className="text-lg font-semibold">EOC AI</div>
                <div className="text-sm text-muted-foreground">Edgeofcali Media Network LLC</div>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#platform" className="hover:text-foreground transition-colors">
                Platform
              </a>
              <a href="#pricing" className="hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Documentation
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2025 Edgeofcali Media Network LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
