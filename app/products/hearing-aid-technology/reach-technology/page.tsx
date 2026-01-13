import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "REACH Technology | Al-Barakat",
  description: "Innovative REACH Technology for extended hearing range and connectivity.",
}

export default function REACHTechnologyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">REACH Technology</h1>
            <p className="text-lg text-muted-foreground">
              Extended connectivity and range for seamless hearing in any situation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Revolutionary Connectivity</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Extended Range</h3>
                <p className="text-muted-foreground mb-4">
                  REACH Technology provides extended connectivity range for greater flexibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Long-range wireless connection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Stable signal transmission</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Multiple device pairing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Smart Connectivity</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent device management for seamless switching and control.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Automatic device detection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Quick switching between sources</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Priority audio routing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="mb-8 text-3xl font-bold">Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Always Connected</h3>
                <p className="text-muted-foreground">
                  Stay connected to all your devices without losing signal or quality.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Seamless Experience</h3>
                <p className="text-muted-foreground">
                  Smooth, uninterrupted transitions between devices and audio sources.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Full Control</h3>
                <p className="text-muted-foreground">
                  Complete control over all connectivity features through intuitive controls.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Technology Capabilities</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Multi-Point Connectivity</h3>
                <p className="text-muted-foreground">
                  Connect to multiple devices simultaneously for maximum convenience and flexibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Robust Signal</h3>
                <p className="text-muted-foreground">
                  Advanced antenna design ensures strong, reliable signal in any environment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Battery Efficient</h3>
                <p className="text-muted-foreground">
                  Extended connectivity without draining your hearing aid batteries faster.
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
              <h2 className="mb-4 text-3xl font-bold">Experience REACH Technology</h2>
              <p className="mb-6 text-lg opacity-90">Connect seamlessly to all your devices. Schedule a demo today.</p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
