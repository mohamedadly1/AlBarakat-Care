 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Zap, 
  BatteryCharging, 
  Bluetooth, 
  Activity, 
  Waves, 
  Mic2,
  Ear,
  ShieldCheck
} from "lucide-react"

export default function MotionPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl tracking-tight text-primary">
            Signia Motion Charge&Go X
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Revolutionary BTE hearing aids that move with you. Whether you have mild, severe, or profound hearing loss, the Motion X range combines sleek design with the ultimate in rechargeable power and connectivity.
          </p>
        </div>
      </section>

      {/* Product Range Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">The Power of Choice</h2>
              <p className="text-muted-foreground">
                The Motion Charge&Go X family offers a model for every need. Built on the <strong>Signia Xperience</strong> platform, these devices use world-first acoustic-motion sensors to adapt to your movement.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded h-fit"><Ear className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Motion Charge&Go P X</h4>
                    <p className="text-xs text-muted-foreground">Powerful and rechargeable for severe hearing loss.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded h-fit"><Zap className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Motion Charge&Go SP X</h4>
                    <p className="text-xs text-muted-foreground">The world's first rechargeable Super Power BTE.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/Motion_CnG_SP_X_pair_Dark_Champagne_1920x1080.webp" 
                alt="Signia Motion Charge&Go X Family" 
                className="w-full max-w-md mx-auto drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Technical Highlights */}
      <section className="bg-muted/30 py-12 md:py-20 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Motion X is Different</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Equipped with Dynamic Soundscape Processing, it allows you to hear clearly in every situation, even while you are jogging or walking.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 text-center space-y-4">
                <Activity className="h-10 w-10 text-secondary mx-auto" />
                <h3 className="font-bold">Acoustic-Motion Sensors</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">The only hearing aids that know when you are moving, ensuring the sound adjusts perfectly to your active lifestyle.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 text-center space-y-4">
                <BatteryCharging className="h-10 w-10 text-secondary mx-auto" />
                <h3 className="font-bold">61 Hours of Run-time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">The Super Power (SP) model offers the longest runtime on a single charge in the industry—over two full days of use.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-8 text-center space-y-4">
                <Mic2 className="h-10 w-10 text-secondary mx-auto" />
                <h3 className="font-bold">OVP™ (Own Voice Processing)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Provides the most natural-sounding own voice for maximum wearer acceptance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/Motion CnG_X_in_charger_1920x1080.webp" 
                alt="Motion Charge&Go X Charger" 
                className="w-full max-w-xs mx-auto" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Uncompromising Connectivity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Bluetooth className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Direct Streaming</h5>
                    <p className="text-xs text-muted-foreground">Phone calls, music, and TV audio straight to your ears.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Reliable Durability</h5>
                    <p className="text-xs text-muted-foreground">Robust housing with IP68 rating against moisture and dust.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Waves className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">TeleCare Ready</h5>
                    <p className="text-xs text-muted-foreground">Remote support and fine-tuning from our experts anywhere in KSA.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Super Power</h5>
                    <p className="text-xs text-muted-foreground">Up to 82dB gain for those with profound hearing needs.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Button size="lg" asChild className="w-full sm:w-auto"><Link href="/booking">Book a Motion X Trial</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-primary text-primary-foreground border-none overflow-hidden">
            <CardContent className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold">Ready to Move Without Limits?</h2>
                <p className="opacity-90 max-w-xl">Visit Al Barakat Hearing Centers in Riyadh, Jeddah, or Dammam to experience the world's most powerful rechargeable BTE.</p>
              </div>
              <Button asChild size="lg" variant="secondary" className="font-bold whitespace-nowrap">
                <Link href="/contact">Consult a Specialist</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. Official Signia Technology Partner.</p>
        </div>
      </footer>
    </div>
  )
}