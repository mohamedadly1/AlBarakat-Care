 "use client"
import Image from "next/image"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import { HeroVideoSection } from "@/components/hero-video-section"
import { HearingNewsCarousel } from "@/components/hearing-news-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EditableText } from "@/components/editable-text"
// --- FIX: Added Award and CheckCircle here ---
import { Ear, Heart, Shield, Users, ArrowRight, CheckCircle2, Award, CheckCircle } from "lucide-react"
// ---------------------------------------------
import { productCategories, brands, products } from "@/lib/hearing-data"
import { getStoredProducts, getSiteContent, getStoredBrands, addBrand, deleteBrand } from "@/lib/content-store"
import { useEffect, useState } from "react"
import { useAdminMode } from "@/lib/admin-mode-context"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PerfectSoundSection } from "@/components/perfect-sound-section"
const featuredProducts = [
  {
    id: "pure-ric",
    name: "Signia Pure RIC",
    slug: "pure-ric",
    image: "/images/product-showcase-1.jpg",
    description: "Our smallest, invisible-in-canal solution for discreet daily wear.",
  },
  {
    id: "styletto",
    name: "Signia Styletto Slim RIC",
    slug: "styletto-slim-ric",
    image: "/images/product-showcase-2.jpg",
    description: "Rechargeable, sleek design with enhanced natural sound processing.",
  },
  {
    id: "motion",
    name: "Signia Motion",
    slug: "motion",
    image: "/images/product-showcase-3.jpg",
    description: "Ultra-slim, award-winning design with motion sensor technology.",
  },
  {
    id: "insio",
    name: "Signia Insio Custom",
    slug: "insio-custom",
    image: "/images/Insio-IX_IIC_black_pair_side_1920x1080.webp",
    description: "Custom-made hearing aids designed for comfort and performance.",
  },
  {
    id: "silk",
    name: "Signia Silk",
    slug: "silk",
    image: "/images/product-showcase-5.jpg",
    description: "Instant-fit, discreet hearing aids with natural sound quality.",
  },
  {
    id: "intuis",
    name: "Intuis 4",
    slug: "motion",
    image: "/images/product-showcase-6.jpg",
    description: "Reliable and easy-to-use hearing solution with durable design.",
  },
]

export default function HomePage() {
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [allBrands, setAllBrands] = useState<any[]>([])
  const [content, setContent] = useState(getSiteContent())
  const { isAdminMode } = useAdminMode()
  const [showAddBrandDialog, setShowAddBrandDialog] = useState(false)
  const [newBrand, setNewBrand] = useState({ name: "", description: "", logo: "" })

  useEffect(() => {
    const storedProducts = getStoredProducts()
    const mergedProducts = storedProducts.length > 0 ? storedProducts : products
    setAllProducts(mergedProducts)

    const storedBrands = getStoredBrands()
    const mergedBrands = storedBrands.length > 0 ? storedBrands : brands
    setAllBrands(mergedBrands)

    setContent(getSiteContent())

    const handleStorageChange = () => {
      setContent(getSiteContent())
    }

    const handleContentUpdate = () => {
      window.location.reload()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("contentUpdated", handleContentUpdate)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("contentUpdated", handleContentUpdate)
    }
  }, [])

  const handleAddBrand = () => {
    if (newBrand.name && newBrand.description) {
      addBrand({
        id: Date.now().toString(),
        name: newBrand.name,
        description: newBrand.description,
        logo: newBrand.logo || "/placeholder.svg",
      })
      setNewBrand({ name: "", description: "", logo: "" })
      setShowAddBrandDialog(false)
      // Refresh brands
      const storedBrands = getStoredBrands()
      const mergedBrands = storedBrands.length > 0 ? storedBrands : brands  
      setAllBrands(mergedBrands)
    }
  }

  const handleDeleteBrand = (brandId: string) => {
    if (confirm("Are you sure you want to delete this brand?")) {
      deleteBrand(brandId)
      // Refresh brands
      const storedBrands = getStoredBrands()
      const mergedBrands = storedBrands.length > 0 ? storedBrands : brands
      setAllBrands(mergedBrands)
    }
  }

  // Always use canonical Signia product data from hearing-data to keep images/names in sync with product pages
  const featuredSigniaIds = ["pure-ric-1", "styletto-1", "motion-1", "insio-1", "silk-1", "intuis-1"]
  const featuredSigniaProducts = featuredSigniaIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => Boolean(p))

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />
      <HeroVideoSection />

      {/* Perfect Sound Section */}
      <PerfectSoundSection />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl animate-fade-in-up">
              <EditableText contentKey="home.whyChoose.title" defaultValue="Why Choose Al-Barakat?" as="span" />
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              <EditableText
                contentKey="home.whyChoose.subtitle"
                defaultValue="Experience the difference with our comprehensive hearing care solutions"
                as="span"
                multiline
              />
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Ear className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card1Title" defaultValue="Expert Audiologists" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card1Description"
                    defaultValue="Certified professionals with years of experience in hearing care"
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up animation-delay-100 cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-secondary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card2Title" defaultValue="Trustworthy Solutions" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card2Description"
                    defaultValue="We offer reliable and effective hearing solutions backed by scientific research."
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up animation-delay-200 cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <Heart className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card3Title" defaultValue="Customer Satisfaction" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card3Description"
                    defaultValue="Our goal is to ensure you are completely satisfied with our services."
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up animation-delay-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Users className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card4Title" defaultValue="Community Support" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card4Description"
                    defaultValue="Join our community of satisfied patients and share your hearing journey."
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
   {/* Products Section */}
   <section className="bg-muted/50 py-16 md:py-24">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Our Complete Hearing Solutions Range
      </h2>
      <p className="text-lg text-muted-foreground">
        Explore our comprehensive range of six featured devices, accessories, and maintenance kits.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {featuredProducts.map((product, index) => (
    <Card
      key={product.id}
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="mb-4 text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <Button asChild variant="link" className="p-0 text-primary group/btn">
          <Link href={`/products/hearing-aid-brands/signia/${product.slug}`}>
            See More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  ))}
</div>


    <div className="mt-8 text-center">
    
    </div>
  </div>
</section>
      {/* Hearing Test Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center text-primary-foreground">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  <EditableText contentKey="home.hearingTest.title" defaultValue="Free Hearing Test" as="span" />
                </h2>
                <p className="mb-6 text-lg opacity-90">
                  <EditableText
                    contentKey="home.hearingTest.subtitle"
                    defaultValue="Assess your hearing health with our free, quick, and painless test."
                    as="span"
                    multiline
                  />
                </p>
                <ul className="mb-8 inline-flex flex-col gap-2 text-left">
                  <li className="flex items-center gap-2 animate-fade-in-up">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      <EditableText contentKey="home.hearingTest.feature1" defaultValue="Accurate Results" as="span" />
                    </span>
                  </li>
                  <li className="flex items-center gap-2 animate-fade-in-up animation-delay-100">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      <EditableText
                        contentKey="home.hearingTest.feature2"
                        defaultValue="Personalized Recommendations"
                        as="span"
                      />
                    </span>
                  </li>
                  <li className="flex items-center gap-2 animate-fade-in-up animation-delay-200">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      <EditableText contentKey="home.hearingTest.feature3" defaultValue="No Obligation" as="span" />
                    </span>
                  </li>
                </ul>
                <div>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href="/hearing-test">
                      <EditableText contentKey="home.hearingTest.ctaButton" defaultValue="Take Test Now" as="span" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Our Partners */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Partners</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-center text-lg text-muted-foreground">
              At Al Barakat Hearing Centers, we are proud to collaborate with some of the world's leading innovators in hearing technology. Our strategic partnerships reflect our commitment to delivering exceptional care, advanced solutions, and internationally recognized quality to our patients across Saudi Arabia.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full overflow-hidden group">
                    <Image
                      src="Signia_soundwave-logo_1200x630.jpg"
                      alt="Signia hearing aid technology"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">Signia Technology</h4>
                    </div>
                  </div>
                  <div className="p-6">
                  <div className="mb-4 flex justify-center">
                   
                  </div>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">Signia – Global Leader in Hearing Innovation</h3>
                    <p className="text-center text-muted-foreground">
                      As an authorized partner of Signia, we offer access to one of the industry's most advanced hearing aid portfolios. Signia's cutting-edge technologies—such as Integrated Xperience, Augmented Xperience, Own Voice Processing (OVP™), and AI-driven sound processing enable us to provide patients with exceptional clarity, natural sound, and personalized performance in every environment.
                      This partnership ensures our patients benefit from the latest breakthroughs in premium hearing care.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full overflow-hidden group">
                    <Image
                      src="rexton-logo-yellow-2000x1500px.webp"
                      alt="Rexton hearing aid technology"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">Rexton Technology</h4>
                    </div>
                  </div>
                  <div className="p-6">
                  <div className="mb-4 flex justify-center">
                  
                  </div>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                        <Shield className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">Rexton – Trusted, Reliable, and Durable Solutions</h3>
                    <p className="text-center text-muted-foreground">
                      Our collaboration with Rexton allows us to deliver robust, dependable hearing solutions designed for daily performance and long-term reliability. With a strong reputation for durability, ease of use, and value, Rexton devices support individuals seeking effective technology they can trust in any condition.
                      Through this partnership, we ensure every patient receives solutions that balance practicality, quality, and comfort.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-center text-2xl font-bold">A Commitment to Excellence Through Collaboration</h3>
                <p className="mb-4 text-center text-muted-foreground">
                  By partnering with globally recognized leaders in hearing technology, Al Barakat Hearing Centers is able to offer:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">International-quality hearing aids and accessories.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Advanced diagnostic and fitting technologies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Certified service, programming, and maintenance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Continuous updates on the latest global innovations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Enhanced patient outcomes supported by proven technology.</span>
                  </li>
                </ul>
                <p className="mt-4 text-center text-muted-foreground">
                  These partnerships strengthen our ability to deliver comprehensive, high-standard hearing care, ensuring that each patient receives solutions that meet both medical needs and everyday lifestyle expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>






      {/* Hearing News Carousel */}
      <HearingNewsCarousel />

      



      
      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          
          {/* 1. Grid Container: تم إضافة items-start لضمان محاذاة كل الأعمدة للأعلى */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start"> 

            {/* ⬅️ العمود الأول: الشعار والنص الوصفي */}
<div>
    {/* 👈 عنوان وهمي (Invisible) لفرض محاذاة الشعار للأعلى، بنفس ارتفاع عناوين الأعمدة الأخرى */}
    <h4 className="mb-4 text-sm font-semibold invisible">
        <EditableText contentKey="footer.placeholderTitle" defaultValue="Placeholder" as="span" />
    </h4>

    {/* حجم الشعار: h-64 w-64 كما طلبت */}
    <div className="relative h-20 w-60  mb-1 mr-4 ">
        <Image
            src="/images/albarakal-logo (1).png"
            alt="Al-Barakat Hearing Care Center Logo"
            fill
            className="object-contain"
        />
    </div>
              
              {/* النص الوصفي */}
              
            </div>

            {/* العمود الثاني: Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold">
                <EditableText contentKey="footer.quickLinksTitle" defaultValue="Quick Links" as="span" />
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* العمود الثالث: Resources */}
            <div>
              <h4 className="mb-4 text-sm font-semibold">
                <EditableText contentKey="footer.resourcesTitle" defaultValue="Resources" as="span" />
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/hearing-test"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Hearing Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hearing-health"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Hearing Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* العمود الرابع: Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold">
                <EditableText contentKey="footer.contactTitle" defaultValue="Contact" as="span" />
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{content.contact.phone}</li>
                <li>{content.contact.email}</li>
                <li>{content.contact.hours}</li>
              </ul>
            </div>
          </div>
          
          {/* قسم حقوق الطبع والنشر */}
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              <EditableText
                contentKey="footer.copyright"
                defaultValue="© 2025 Al-Barakat Hearing Care Centers. All rights reserved."
                as="span"
              />
            </p>
          </div>
        </div>
      </footer>

      {/* Dialog for Adding Brand */}
      <Dialog open={showAddBrandDialog} onOpenChange={setShowAddBrandDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Brand</DialogTitle>
            <DialogDescription>Add a new trusted brand to your website</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="brandName">Brand Name</Label>
              <Input
                id="brandName"
                value={newBrand.name}
                onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                placeholder="Enter brand name"
              />
            </div>
            <div>
              <Label htmlFor="brandDescription">Description</Label>
              <Textarea
                id="brandDescription"
                value={newBrand.description}
                onChange={(e) => setNewBrand({ ...newBrand, description: e.target.value })}
                placeholder="Enter brand description"
              />
            </div>
            <div>
              <Label htmlFor="brandLogo">Logo URL</Label>
              <Input
                id="brandLogo"
                value={newBrand.logo}
                onChange={(e) => setNewBrand({ ...newBrand, logo: e.target.value })}
                placeholder="Enter logo URL (optional)"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddBrandDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddBrand}>Add Brand</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}