import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Integrated Xperience Technology | Al-Barakat",
  description: "Experience seamless integrated technology for natural, personalized hearing.",
}

export default function IntegratedXperiencePage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Integrated Xperience</h1>
            <p className="text-lg text-muted-foreground">
              Advanced integrated technology that seamlessly adapts to your lifestyle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Technology Overview</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Integrated Design</h3>
                <p className="text-muted-foreground mb-4">
                  Our Integrated Xperience technology seamlessly combines multiple advanced features into one cohesive
                  platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Unified processing system</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Adaptive sound management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Automatic environment detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Smart Features</h3>
                <p className="text-muted-foreground mb-4">
                  Experience hearing aids that learn and adapt to your preferences automatically.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Machine learning algorithms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Personal hearing profile</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Continuous optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="mb-8 text-3xl font-bold">Key Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Natural Sound</h3>
                <p className="text-muted-foreground">
                  Advanced processing delivers natural, crystal-clear audio in all situations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Smart Adaptation</h3>
                <p className="text-muted-foreground">
                  Automatically adjusts to changing environments for optimal hearing performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Personalization</h3>
                <p className="text-muted-foreground">
                  Learns your preferences and customizes settings to match your unique hearing needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Technology Features</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Adaptive Directionality</h3>
                <p className="text-muted-foreground">
                  Intelligently focuses on speech from your conversation partner while reducing background noise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Wind Noise Reduction</h3>
                <p className="text-muted-foreground">
                  Advanced algorithms specifically target and reduce wind noise for outdoor comfort.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Feedback Management</h3>
                <p className="text-muted-foreground">
                  Eliminates whistling and feedback while maintaining clear, natural sound.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience Integrated Xperience</h2>
              <p className="mb-6 text-lg opacity-90">
                Discover how seamless technology can improve your hearing and life.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Schedule Demo</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
