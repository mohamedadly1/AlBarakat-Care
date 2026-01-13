"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Volume2, Check } from "lucide-react"

export default function TinnitusSolutionsPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Tinnitus Solutions</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions to manage and relieve tinnitus symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* About Tinnitus */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Understanding Tinnitus</h2>
              <p className="mb-4 text-muted-foreground">
                Tinnitus is the perception of sound (ringing, buzzing, hissing) when no external sound is present. It
                affects millions of people worldwide and can vary greatly in severity and impact.
              </p>
              <p className="text-muted-foreground">
                Our advanced tinnitus solutions are designed to help manage symptoms and improve quality of life.
              </p>
            </div>
            <div className="flex items-center">
              <Volume2 className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-t bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Our Tinnitus Management Solutions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Tinnitus Therapy Features",
                description: "Built-in sound generators in hearing aids provide soothing background sounds.",
              },
              {
                title: "Sound Masking",
                description: "Customizable noise patterns to mask tinnitus perception.",
              },
              {
                title: "Counseling Support",
                description: "Professional guidance to help manage and cope with tinnitus.",
              },
              {
                title: "Lifestyle Management",
                description: "Practical strategies and techniques to reduce tinnitus impact.",
              },
            ].map((solution, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Get Relief Today</h2>
              <p className="mb-6 text-lg opacity-90">
                Consult with our hearing care specialists about tinnitus solutions tailored to your needs.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all duration-300 hover:scale-105">
                <Link href="/booking">Schedule Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
