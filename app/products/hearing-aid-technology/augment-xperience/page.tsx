import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Augment Xperience Technology | Al-Barakat",
  description: "Enhanced hearing technology with augmented speech recognition and clarity.",
}

export default function AugmentXperiencePage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Augment Xperience</h1>
            <p className="text-lg text-muted-foreground">
              Enhanced technology designed to augment your natural hearing capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Enhanced Hearing Technology</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Speech Enhancement</h3>
                <p className="text-muted-foreground mb-4">
                  Our Augment Xperience technology prioritizes and enhances speech signals.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Advanced speech extraction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Clarity enhancement</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Multi-speaker detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Noise Management</h3>
                <p className="text-muted-foreground mb-4">
                  Sophisticated noise reduction while preserving natural sound quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Selective noise reduction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Environment-aware processing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Balanced sound preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="mb-8 text-3xl font-bold">Key Advantages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Superior Clarity</h3>
                <p className="text-muted-foreground">
                  Enhanced speech recognition provides exceptional clarity in conversations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Noise Suppression</h3>
                <p className="text-muted-foreground">
                  Effectively reduces background noise while keeping speech crisp and clear.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Natural Sound</h3>
                <p className="text-muted-foreground">
                  Preserves the natural quality of sound while augmenting frequencies you need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Advanced Features</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Binaural Processing</h3>
                <p className="text-muted-foreground">
                  Synchronized processing between both ears provides natural localization and stereo imaging.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Frequency Shaping</h3>
                <p className="text-muted-foreground">
                  Precise frequency adjustment targets your specific hearing loss patterns.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Real-time Adaptation</h3>
                <p className="text-muted-foreground">
                  Continuously adjusts settings to optimize hearing in changing environments.
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
              <h2 className="mb-4 text-3xl font-bold">Try Augment Xperience Today</h2>
              <p className="mb-6 text-lg opacity-90">
                Experience the difference enhanced technology makes in your daily conversations.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Schedule Your Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
