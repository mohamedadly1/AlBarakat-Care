"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function RextonTypesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <MainNavigation />
{/* --- PAGE TITLE --- */}
<section className="bg-white py-10 border-b">
  <div className="container mx-auto max-w-7xl px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
      TYPES OF <br />
      <span className="text-primary">HEARING AIDS</span>
    </h1>
  </div>
</section>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#f8f9fa] py-20 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-primary font-bold tracking-widest text-sm uppercase">Right for me?</h2>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Types of Hearing Aids</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Hearing aids have evolved greatly over the last 50+ years. While all of them will help improve your hearing quality, there are differences between each type. Figuring out which type is best for you ends up being a matter of personal preference of look and performance.
              </p>
            </div>
            <div className="relative h-[350px] w-full">
              <Image src="/images/Reach_product-range_black-bg_1600x1067.webp" alt="Rexton Collection" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO CHOOSE SECTION --- */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">How to choose a hearing aid type</h2>
              <p className="text-slate-600 text-lg">
                There are three main factors that go into choosing the right hearing aid type for you: 
                <strong> hearing loss, ear anatomy, and your specific hearing needs.</strong>
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Hearing Loss", text: "Hearing loss ranges from mild (having trouble with certain frequencies) to profound (can barely hear any sound). Some hearing aid types are more appropriate to specific levels of hearing loss." },
                  { title: "Ear Anatomy", text: "Each ear is unique, just like our fingerprint. Some types of hearing aids might fit better than the others, and those specificities are important drivers when choosing the type of device to wear." },
                  { title: "Hearing Needs", text: "Hearing needs have no linear relation with hearing thresholds. That means each individual has its own needs regardless of how the hearing loss looks. A hearing care professional needs to access those needs in order to address the most suitable features from different hearing aid technologies." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-1 bg-primary h-auto"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-900 block mb-1">{item.title}</strong>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden">
              <Image src="/images/Rexton_HCP-Jackie_explaining-hearing-aid_1600x1067.webp" alt="Professional Consultation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: RIC --- */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">BEHIND-THE-EAR (BTE) HEARING AIDS
              </h2>
              <p className="text-lg text-slate-600">
                RIC hearing aids are the most popular type today. They are smaller and more discreet than traditional BTE aids. The receiver sits directly in the ear canal, connected by a thin wire, delivering a very natural sound quality.
              </p>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-bold rounded">MILD TO SEVERE LOSS</span>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/Rexton_Reach_Rugged_Black_800x800.webp" alt="RIC Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      
      {/* --- SECTION 2: BTE --- */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">RECEIVER-IN-THE-CANAL (RIC) HEARING AIDS
              </h2>
              <p className="text-lg text-slate-600">
                These devices house all electrical components behind the ear. Sound is delivered through a tube into a custom earmold. They are the most powerful and durable devices available.
              </p>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-bold rounded">MILD TO PROFOUND LOSS</span>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/Rexton_Reach_R-Li_single-Black_bg_800x800.webp" alt="BTE Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: INSTANT FIT --- */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">INSTANT-FIT HEARING AIDS
              </h2>
              <p className="text-lg text-slate-600">
                Ready-to-wear immediately. These use soft, flexible sleeves to adapt to your ear canal without needing a custom impression, combining the benefits of a custom fit with immediate availability.
              </p>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-bold rounded">QUICK FITTING</span>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/Reach-iX-CIC-Li_pair_800x800.webp" alt="Instant Fit Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

   

      {/* --- SECTION 5: CUSTOM CIC --- */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">CUSTOM CIC & IIC
              </h2>
              <p className="text-lg text-slate-600">
                Molded to fit deep inside your ear canal. Only a small removal string is visible, making it a very discreet choice for those concerned about appearance.
              </p>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/Reach_Custom_IIC-CIC_Black_1600x1067.webp" alt="CIC Custom Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CUSTOM IIC --- */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">CUSTOM ITE & ITC
              </h2>
              <p className="text-lg text-slate-600">
                The smallest custom style available. It sits past the second bend of the ear canal, making it virtually invisible to anyone around you.
              </p>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/Reach_Custom_ITC-ITE_Black_1600x1067.webp" alt="IIC Custom Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-slate-900 text-white py-24 text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to find your perfect fit?</h2>
          <p className="text-xl text-slate-400 mb-10">Consult with our specialists to see which of these types fits your anatomy and lifestyle.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 h-14 text-lg">
            <Link href="/booking">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 text-sm border-t">
        <p>© 2024 Al Barakat Hearing Centers. Partnering with Rexton.</p>
      </footer>
    </div>
  )
}