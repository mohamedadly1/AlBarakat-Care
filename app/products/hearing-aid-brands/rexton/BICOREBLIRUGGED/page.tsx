import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from 'lucide-react';export const metadata = {
  title: "Bi-Core RIC R/R Li - Rexton Hearing Aids | Al-Barakat",
  description: "Discover Rexton Bi-Core RIC - receiver-in-canal with dual-core processing and rechargeable options.",
}
 


 
export default function BiCoreRICPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
  
 



    
         <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience Rexton Innovation</h2>
              <p className="mb-6 text-lg opacity-90">
                Discover the difference dual-core technology makes. Schedule your consultation.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>


      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>
        </div>
      </footer>
    </div>
  )
}
