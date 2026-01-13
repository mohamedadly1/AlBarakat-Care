 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Zap, 
  Bluetooth, 
  Fingerprint, 
  Smartphone, 
  BatteryCharging, 
  Volume2,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"

export default function InsioCustomPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl tracking-tight text-primary">
            Signia Insio Charge&Go AX
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tailor-made for your ears only. The Insio Charge&Go AX is the first custom-built hearing aid with <strong>contactless charging</strong> and premium <strong>Bluetooth connectivity</strong>, providing a discreet, high-tech solution for your unique anatomy.
          </p>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Your Exact Anatomy</h2>
              <p className="text-muted-foreground mb-6">
                Every Insio AX is custom-molded to fit the unique shape of your ear canal. This precise fit ensures maximum comfort and allows the hearing aid to sit discreetly while delivering sound directly into the ear for a natural auditory experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Fingerprint className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Custom-Engineered Design</h4>
                    <p className="text-xs text-muted-foreground">Hand-crafted shells designed from a 3D impression of your ear.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Volume2 className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Augmented Focus™ Technology</h4>
                    <p className="text-xs text-muted-foreground">Dual-processors separate speech from background noise for superior clarity.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg"><Link href="/booking">Get Your Custom Impression</Link></Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/images/Desktop-Charger-Insio-AX_open_LED-off_1920x1080.webp" 
                alt="Signia Insio Charge&Go AX Custom ITE" 
                className="w-full max-w-md mx-auto drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Technology Features Grid */}
      <section className="bg-muted/30 py-12 md:py-20 border-y">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Small in Size, Big on Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 space-y-4">
                <BatteryCharging className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-bold">Contactless Charging</h3>
                <p className="text-sm text-muted-foreground">Simply place the Insio AX in the charger without worrying about precise contact points. It's the ultimate in ease-of-use.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Bluetooth className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-bold">Android & iOS Streaming</h3>
                <p className="text-sm text-muted-foreground">Enjoy direct streaming for phone calls and high-quality music directly into your custom-fitted devices.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Zap className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-bold">InstantFit Performance</h3>
                <p className="text-sm text-muted-foreground">The AX platform handles complex acoustic environments instantly, letting you follow conversations in noisy restaurants with ease.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deep Detail Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <img 
                src="/images/Insio-IX_woman-holding-hearing-aid_circle_montage_1000x1000.jpg" 
                alt="Insio AX ITC Model" 
                className="w-full max-w-xs mx-auto drop-shadow-xl" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Unrivaled Convenience</h2>
              <ul className="space-y-4">
                {[
                  "All-day battery life on a single charge",
                  "Available in ITE (In-the-Ear) and ITC (In-the-Canal) styles",
                  "Signia Assistant AI within the app for 24/7 support",
                  "Discreet color options to match skin tones or style preferences"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-4">
                <div className="flex flex-col items-center">
                   <Smartphone className="h-8 w-8 text-primary mb-1" />
                   <span className="text-[10px] uppercase font-bold">App Control</span>
                </div>
                <div className="flex flex-col items-center">
                   <ShieldCheck className="h-8 w-8 text-primary mb-1" />
                   <span className="text-[10px] uppercase font-bold">IP Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Experience the Comfort of a Custom Fit</h2>
              <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
                Visit our specialists in Riyadh, Jeddah, or across KSA to have your 3D ear impressions taken for the Signia Insio AX.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="font-bold">
                  <Link href="/booking">Book Your Free Impression</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors">
                  <Link href="/contact">Inquire About Colors</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. Your trusted partner for Signia Custom Hearing Solutions.</p>
        </div>
      </footer>
    </div>
  )
}