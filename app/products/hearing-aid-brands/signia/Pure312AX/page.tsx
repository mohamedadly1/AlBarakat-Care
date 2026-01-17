"use client"

import { useState } from "react"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react"

export default function PureRICPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Features updated based on Pure 312 AX and your latest screenshots
  const features = [
    {
      img: "/images/axx1.webp",
      title: "Augmented Xperience",
     },
    {
      img: "/images/axx2.webp",
      title: "Auto EchoShield",
     },
    {
      img: "/images/axx3.webp",
      title: "Own Voice Processing 2.0",
     },
    {
      img: "/images/axx4.webp", 
      title: "Augmented Speech Understanding",
     },
    {
      img: "/images/axx5.webp", 
      title: "Immersive Soundscape",
     },
    {
      img: "/images/axx6.webp", 
      title: "AX Soundscape Processing",
     }
  ];
  const nextSlide = () => setCurrentIndex((prev) => (prev === 0 ? 3 : 0));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? 3 : 0));
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* Hero Section - Pure 312 AX Branding */}
      <section className="relative min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ban33.webp" 
            alt="Be Brilliant with Pure 312 AX" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay: Darker on the right to make white text pop */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2">
            {/* Left side empty to push content to the right */}
            <div className="hidden md:block"></div>

            {/* Right side content: Aligned to the right */}
            <div className="flex flex-col justify-center items-start md:items-end md:text-right space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
                  Brilliant hearing, <br />
                  <span className="font-bold">tiny hearing aids</span>
                </h1>
              </div>
              
              <div className="pt-2">
                <p className="text-xl md:text-2xl text-white font-medium opacity-90">
                  Be Brilliant™ with Pure 312 AX
                </p>
              </div>

              <div className="pt-8">
                <Button 
                  size="lg" 
                  asChild 
                   className="rounded-full px-12 py-7 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-none shadow-2xl transition-transform hover:scale-105"
                >
                  <Link href="/booking">Discover Pure 312 AX</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Placeholder for the next section to show transition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <p className="text-slate-500 uppercase tracking-widest font-bold">Signia Technology</p>
        </div>
      </section>

      {/* AX Technology Highlights (Screenshot 8) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
            Augmented Xperience (AX)
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Despite their small size, Pure 312 AX hearing aids feature our leading 
            <strong> Augmented Xperience</strong> hearing technology. 95% of participants reported 
            being satisfied with AX technology in a recent study.
          </p>
        </div>
      </section>

      {/* Color Availability Section (Screenshot 11) */}
      <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/images/cvb.png" alt="Pure 312 AX Black" className="w-full max-w-sm drop-shadow-2xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Pure 312 AX</h2>
              <p className="text-lg text-slate-600">
                Packed with all the high-tech features you need, such as Bluetooth streaming 
                and advanced tinnitus therapies.
              </p>
              <div>
                <p className="font-bold mb-4">Available colors:</p>
                <div className="flex gap-3">
                  {/* Color Swatches */}
                  {['#1a1a1a', '#6d6e71', '#d1d2d4', '#e6e7e8', '#f1f2f2'].map((color, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border border-slate-300 shadow-sm" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Features Carousel (Updated for AX Content) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-slate-900">Key Features</h2>
          
          <div className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-700">
              {features.slice(currentIndex, currentIndex + 3).map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-6 animate-in fade-in duration-700">
                  <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-slate-50 shadow-xl">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                 </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-10">
            <button onClick={prevSlide} className="p-4 rounded-full bg-slate-50 hover:bg-white shadow-md transition-all">
              <ChevronLeft className="h-8 w-8 text-[#E30613]" />
            </button>
            <div className="flex gap-3">
              <div className={`h-3 w-3 rounded-full transition-all ${currentIndex === 0 ? 'bg-[#E30613] scale-125' : 'bg-slate-300'}`} />
              <div className={`h-3 w-3 rounded-full transition-all ${currentIndex === 3 ? 'bg-[#E30613] scale-125' : 'bg-slate-300'}`} />
            </div>
            <button onClick={nextSlide} className="p-4 rounded-full bg-slate-50 hover:bg-white shadow-md transition-all">
              <ChevronRight className="h-8 w-8 text-[#E30613]" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Guide Section (Screenshot 10) */}
      <section className="py-20 bg-slate-900 text-white">
  <div className="container mx-auto max-w-7xl px-4">
    <h2 className="text-3xl font-bold mb-12">How to handle Pure 312 AX</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "How to turn Pure 312 AX on and off",
          videoId: "09ih1BUFYIw?si=phBeqr0DWJDfqmV-", // Example Signia ID
        },
        {
          title: "How to exchange the battery",
          videoId: "6c9UQvx0jJU?si=DaLnJSzSDOV6xMoo", // Example Signia ID
        },
        {
          title: "How to connect to the app",
          videoId: "6c9UQvx0jJU?si=FkWrFCipw7TVdwE8", // Example Signia ID
        },
        {
          title: "How to use CallControl",
          videoId: "vzMHT5AQwM8?si=4pvP-8I2fCUw6kFJ", // Replace with your specific CallControl ID
        },
      ].map((video, i) => (
        <div key={i} className="space-y-4">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm font-semibold text-slate-300 px-1 leading-snug">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <footer className="bg-white border-t py-12 text-center text-slate-500">
        <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>
      </footer>
    </div>
  )
}