 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  User, 
  Clock, 
  Volume2, 
  HeartPulse, 
  Ear, 
  Zap, 
  Brain, 
  Users, 
  CheckCircle2,
  AlertTriangle
} from "lucide-react"

export default function ChildHearingLossPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Hearing Loss in Children
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing plays a vital role in a child’s speech, language, and learning development.
            Even mild hearing loss can affect communication, school performance, and social interaction.
          </p>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            At <strong>Al Barakat Hearing Centers</strong>, we specialize in pediatric hearing care, providing accurate diagnosis, gentle testing methods, 
            and advanced solutions from <strong>Signia</strong> and <strong>Rexton</strong> to help your child hear, speak, and thrive with confidence.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">

            {/* Intro Card */}
            <Card className="border-none shadow-sm bg-secondary/5 hover:bg-secondary/10 transition-colors">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <User className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-lg leading-relaxed">
                  At <strong>Al Barakat Hearing Centers</strong>, we provide:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Accurate pediatric hearing assessments</li>
                    <li>Advanced hearing aid solutions from Signia and Rexton</li>
                    <li>Support to help children hear, speak, and thrive</li>
                  </ul>
                </p>
              </CardContent>
            </Card>

            {/* Why Early Detection Matters */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Why Early Detection Matters</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                <li>Hearing loss can be congenital (at birth) or acquired later</li>
                <li>Children may not recognize or express hearing difficulties</li>
                <li>Early diagnosis is essential to prevent speech delays and learning difficulties</li>
                <li>Experts recommend newborn hearing screening within the first month of life</li>
                <li>Children with risk factors should have regular follow-up tests</li>
              </ul>
            </div>

            {/* Types of Hearing Loss */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Types of Hearing Loss in Children</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Conductive Hearing Loss:</strong> Caused by blockage or infection in the outer/middle ear (often temporary)</li>
                <li><strong>Sensorineural Hearing Loss:</strong> Caused by inner ear or auditory nerve damage (usually permanent)</li>
                <li><strong>Mixed Hearing Loss:</strong> Combination of both</li>
              </ul>
            </div>

            {/* Causes Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Causes of Hearing Loss in Children</h2>

              {[
                {
                  title: "1. Genetic or Congenital Causes",
                  points: [
                    "About half of childhood hearing loss cases are inherited",
                    "Conditions may be present from birth even without family history",
                    "Some babies are born with underdeveloped inner ear structures or genetic conditions affecting hearing"
                  ]
                },
                {
                  title: "2. Infections During Pregnancy or Birth",
                  points: [
                    "Maternal infections (rubella, CMV, toxoplasmosis, syphilis) can affect hearing",
                    "Premature birth, low birth weight, or lack of oxygen (anoxia) during delivery can cause hearing impairment"
                  ]
                },
                {
                  title: "3. Ear Infections (Otitis Media)",
                  points: [
                    "Common in children; fluid behind the eardrum can cause temporary conductive hearing loss",
                    "If untreated, can affect speech and language development"
                  ]
                },
                {
                  title: "4. Noise Exposure",
                  points: [
                    "Loud toys or video games",
                    "Headphones and earbuds at high volume",
                    "Fireworks, concerts, or loud environments"
                  ]
                },
                {
                  title: "5. Illnesses and Medications",
                  points: [
                    "Childhood illnesses like meningitis, measles, or mumps can damage the inner ear",
                    "Certain ototoxic medications may also cause hearing loss"
                  ]
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {item.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recognizing Signs */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Recognizing Signs of Hearing Loss</h2>

              {[
                {
                  title: "In Infants (0–1 year)",
                  points: [
                    "Doesn’t startle at loud noises",
                    "Doesn’t turn toward your voice",
                    "Doesn’t babble by 6 months",
                    "Doesn’t respond to their name"
                  ]
                },
                {
                  title: "In Toddlers (1–3 years)",
                  points: [
                    "Delayed speech or unclear pronunciation",
                    "Doesn’t respond when called from another room",
                    "Turns up the TV volume",
                    "Frequently pulls at or rubs the ears"
                  ]
                },
                {
                  title: "In Older Children",
                  points: [
                    "Struggles to follow instructions",
                    "Complains of ear pain or “buzzing” sounds (tinnitus)",
                    "Performs poorly in school or becomes withdrawn"
                  ]
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {item.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              <p className="text-muted-foreground mt-2">
                If you notice any of these signs, schedule a hearing test as soon as possible.
              </p>
            </div>

            {/* Testing & Treatment */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">How We Test & Treat Children</h2>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">Testing</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Newborn hearing screening (OAE and ABR tests)</li>
                    <li>Visual Reinforcement Audiometry (VRA) for toddlers</li>
                    <li>Play Audiometry for preschool children</li>
                    <li>Tympanometry to check middle ear function</li>
                    <li>All tests are quick, comfortable, and non-invasive</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">Treatment and Management</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Medical Treatment:</strong> Infections, wax, or fluid may be temporary and treatable with medication or minor procedures</li>
                    <li><strong>Hearing Aids for Children:</strong> Pediatric hearing aids from Signia & Rexton designed for:
                      <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Comfort and safety</li>
                        <li>Clear sound processing</li>
                        <li>Connectivity to school devices and smartphones</li>
                        <li>Bright colors and durable materials</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Supporting Children */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center">Supporting Children with Hearing Loss</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Sit closer when speaking and maintain eye contact</li>
                <li>Reduce background noise during conversations</li>
                <li>Encourage use of visual cues and assistive technology</li>
                <li>Celebrate progress and confidence, not just hearing ability</li>
              </ul>
            </div>

            {/* Why Families Trust Al Barakat */}
            <div className="rounded-2xl border p-8 space-y-6">
              <h2 className="text-2xl font-bold">Why Families Trust Al Barakat Hearing Centers</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Early diagnosis and hearing screening</li>
                <li>Customized pediatric hearing aid fittings</li>
                <li>Family counseling and education</li>
                <li>Ongoing monitoring and rehabilitation</li>
                <li>World-class hearing technology from Signia and Rexton with compassionate audiologists</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Help Your Child Hear, Speak, and Thrive</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/hearing-test">Take Free Online Test</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
