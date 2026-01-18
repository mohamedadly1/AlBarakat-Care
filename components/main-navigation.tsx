 "use client"

// 1. Consolidated React Imports
import React, { useState, useEffect } from "react" 
import Image from "next/image"
import Link from "next/link"

// 2. UI Components Imports
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// 3. Consolidated Lucide Icons Imports (Removed duplicates)
import {
  Menu,
  Calendar,
  LogIn,
  Ear,
  Stethoscope,
  Activity,
  TestTube,
  BookOpen,
  HelpCircle,
  Building,
  ChevronRight,
  ChevronDown, // Added for your dropdown
  Home,
  X,
  Zap, 
  Volume2, 
  Grid3x3, 
  Tag, 
  Battery, 
  BellRing, // <--- Add this here
  Mail,
  MessageCircle,
} from "lucide-react"

// 4. Utility and Data Imports
import { cn } from "@/lib/utils"
import { checkAdminAuth } from "@/lib/admin-auth"
import { EditableText } from "@/components/editable-text"
import { getEditableContent } from "@/lib/inline-content-store"
import { ProductsMegaMenu } from "@/components/products-mega-menu"
import { productsMenuStructure } from "@/lib/products-menu-structure"

// New Icon Map for Product Categories in Mobile Sidebar
const categoryIconMap: Record<string, React.ReactNode> = {
  Grid3x3: <Grid3x3 className="h-4 w-4 text-primary" />,
  Tag: <Tag className="h-4 w-4 text-secondary" />,
  Zap: <Zap className="h-4 w-4 text-accent" />,
  Volume2: <Volume2 className="h-4 w-4 text-primary" />,
  Battery: <Battery className="h-4 w-4 text-secondary" />,
}

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [whatsappNumber, setWhatsappNumber] = useState("9668001248882")
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [tinnitusOpen, setTinnitusOpen] = useState(false);
  // States for the new dropdowns
  const [hearingLossOpen, setHearingLossOpen] = useState(false)
  const [expandedMain, setExpandedMain] = useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // Toggle functions
  const toggleMain = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMain(prev => (prev === id ? null : id));
  };

  const toggleCategory = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCategory(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    setIsAdmin(checkAdminAuth())
    setWhatsappNumber(getEditableContent("contact.whatsappNumber", "9668001248882"))

    const handleContentUpdate = () => {
      setWhatsappNumber(getEditableContent("contact.whatsappNumber", "9668001248882"))
    }
    window.addEventListener("contentUpdated", handleContentUpdate)
    return () => window.removeEventListener("contentUpdated", handleContentUpdate)
  }, [])

  const toggleSection = (section: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setExpandedSection((prev) => (prev === section ? null : section))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container mx-auto max-w-7xl flex h-16 items-center px-4">
<Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          {/* Logo container: Fixed non-standard Tailwind classes */}
          <div className="relative h-14 w-32 transition-transform duration-300 group-hover:scale-110"> 
            <Image
              src="/images/albarakal-logo (1).png"
              alt="Al-Barakat Hearing Care Center Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xs font-semibold sm:text-sm md:text-base whitespace-nowrap">
            <EditableText contentKey="nav.brandName" defaultValue="" as="span" />
          </span>
        </Link>
        <NavigationMenu className="hidden xl:flex ml-auto flex-1 justify-center">

          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.hearingHealthMenu" defaultValue="Your Hearing Health" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-6 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none transition-all duration-300 hover:from-primary/30 hover:to-primary/10 hover:shadow-lg focus:shadow-md"
                        href="/hearing-test"
                      >
                        <TestTube className="h-8 w-8 text-primary animate-pulse-subtle" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <EditableText
                            contentKey="nav.freeHearingTestTitle"
                            defaultValue="Free Hearing Test"
                            as="span"
                          />
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          <EditableText
                            contentKey="nav.freeHearingTestDesc"
                            defaultValue="Take our comprehensive online hearing assessment in just 3 minutes"
                            as="span"
                          />
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/hearing-health/how-we-hear"
                    title={<EditableText contentKey="nav.howWeHearTitle" defaultValue="How Hearing Works
                      " as="span" />}
                    icon={
                      <Ear className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.howWeHearDesc"
                      defaultValue="Understanding the hearing process"
                      as="span"
                    />
                  </ListItem>
             {/* Hearing Loss Dropdown Item */}
  <div className="flex flex-col">
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setHearingLossOpen(!hearingLossOpen);
      }}
      className="group flex w-full select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
    >
      <Stethoscope className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
      <div className="flex flex-1 flex-col text-left">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium leading-none">
            <EditableText contentKey="nav.hearingLossTitle" defaultValue="Hearing Loss" as="span" />
          </span>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
              hearingLossOpen ? "rotate-180" : ""
            }`} 
          />
        </div>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">
          <EditableText contentKey="nav.hearingLossDesc" defaultValue="Types, causes, and signs" as="span" />
        </p>
      </div>
    </button>

    {/* Animated Sub-links Area */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        hearingLossOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-secondary/20 pl-4">
        {[
          { href: "/hearing-health/hearing-loss/signs-of-hearing-loss", label: "Signs of hearing loss" },
          { href: "/hearing-health/hearing-loss/causes-of-hearing-loss", label: "Causes of hearing loss" },
          { href: "/hearing-health/hearing-loss/types-of-hearing-loss", label: "Types of hearing loss" },
          { href: "/hearing-health/hearing-loss/hearing-loss-in-adults", label: "Hearing loss in adults" },
          { href: "/hearing-health/hearing-loss/hearing-loss-in-child", label: "Hearing loss in Child" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-secondary hover:translate-x-1 transform"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="flex flex-col">
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setTinnitusOpen(!tinnitusOpen); // Uses the specific tinnitus state
      }}
      className="group flex w-full select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
    >
      {/* BellRing is a great icon for Tinnitus (ringing in the ears) */}
      <BellRing className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
      <div className="flex flex-1 flex-col text-left">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium leading-none">
            <EditableText contentKey="nav.tinnitusTitle" defaultValue="Tinnitus" as="span" />
          </span>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
              tinnitusOpen ? "rotate-180" : ""
            }`} 
          />
        </div>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">
          <EditableText contentKey="nav.tinnitusDesc" defaultValue="Symptoms and relief therapy" as="span" />
        </p>
      </div>
    </button>

    {/* Animated Sub-links Area */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        tinnitusOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-secondary/20 pl-4">
        {[
          { href: "/hearing-health/tinnitus/symptoms-causes", label: "Symptoms and causes" },
          { href: "/hearing-health/tinnitus/tinnitus-therapy", label: "Tinnitus therapy" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-secondary hover:translate-x-1 transform"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>



  
                    <ListItem
                      href="/hearing-health/tinnitus"
                      title={<EditableText contentKey="nav.tinnitusTitle" defaultValue="Understanding Hearing Test" as="span" />}
                      icon={
                        <Activity className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                      }
                    >
                      <EditableText contentKey="nav.tinnitusDesc" defaultValue="Managing ringing in the ears" as="span" />
                    </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <ProductsMegaMenu />

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.companyMenu" defaultValue="Company" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/about"
                    title={<EditableText contentKey="nav.aboutUsTitle" defaultValue="About Us" as="span" />}
                    icon={
                      <Building className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.aboutUsDesc"
                      defaultValue="Learn about our mission, values, and commitment to hearing care"
                      as="span"
                    />
                  </ListItem>
                  <ListItem
                    href="/services"
                    title={<EditableText contentKey="nav.servicesTitle" defaultValue="Services" as="span" />}
                    icon={
                      <Stethoscope className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.servicesDesc"
                      defaultValue="Comprehensive hearing care services by certified audiologists"
                      as="span"
                    />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.contactMenu" defaultValue="Contact" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/contact"
                    title={<EditableText contentKey="nav.contactUsTitle" defaultValue="Contact Us" as="span" />}
                    icon={
                      <Mail className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.contactUsDesc"
                      defaultValue="Visit our contact page for all locations and details"
                      as="span"
                    />
                  </ListItem>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-foreground hover:shadow-md hover:scale-[1.02] focus:bg-primary/10 focus:text-foreground",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                          <div className="text-sm font-medium leading-none">
                            <EditableText contentKey="nav.whatsappTitle" defaultValue="Call Us on WhatsApp" as="span" />
                          </div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          <EditableText
                            contentKey="nav.whatsappDesc"
                            defaultValue="Chat with us directly: "
                            as="span"
                          />
                          <EditableText
                            contentKey="contact.whatsappNumber"
                            defaultValue="+966 800 124 8882"
                            as="span"
                          />
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.resourcesMenu" defaultValue="Resources" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/blog"
                    title={<EditableText contentKey="nav.blogTitle" defaultValue="Blog" as="span" />}
                    icon={
                      <BookOpen className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.blogDesc"
                      defaultValue="Latest news, tips, and insights about hearing health"
                      as="span"
                    />
                  </ListItem>
                  <ListItem
                    href="/faq"
                    title={<EditableText contentKey="nav.faqTitle" defaultValue="FAQ" as="span" />}
                    icon={
                      <HelpCircle className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.faqDesc"
                      defaultValue="Frequently asked questions about hearing aids and care"
                      as="span"
                    />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-1 sm:gap-2 flex-shrink-0">

           {isAdmin ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden lg:flex transition-all duration-300 hover:scale-105"
            >
              <Link href="/admin">
                <LogIn className="mr-1 h-4 w-4" />
                <span className="hidden xl:inline">Admin</span>
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden lg:flex transition-all duration-300 hover:scale-105"
            >
              <Link href="/admin">
                <LogIn className="mr-1 h-4 w-4" />
                <span className="hidden xl:inline">Login</span>
              </Link>
            </Button>
          )}
          <Button asChild size="sm" className="transition-all duration-300 hover:scale-105 whitespace-nowrap">
            <Link href="/booking">
              <Calendar className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              <span className="hidden md:inline">
                <EditableText contentKey="nav.bookAppointmentFull" defaultValue="Book Appointment" as="span" />
              </span>
              <span className="md:hidden text-xs sm:text-sm">
                <EditableText contentKey="nav.bookAppointmentShort" defaultValue="Book" as="span" />
              </span>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-110 flex-shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] p-0 bg-gradient-to-br from-background via-background to-primary/5"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12">
                      <Image
                        src="/images/albarakal-logo (1).png"
                        alt="Al-Barakat Hearing Care Center Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Al-Barakat</h2>
                      <p className="text-xs text-white/80">Hearing Care Centers</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Navigation Content */}
              <nav className="flex flex-col h-[calc(100vh-120px)] overflow-y-auto">
                <div className="p-6 space-y-2">
                  {/* Home Link */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">Home</span>
                  </Link>

                  {/* Hearing Test CTA */}
                  <Link
                    href="/hearing-test"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group animate-pulse-subtle"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/30 group-hover:bg-white/40 transition-colors">
                      <TestTube className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-white block">Free Hearing Test</span>
                      <span className="text-xs text-white/80">Take it now - 3 minutes</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Expandable Sections */}
                  <div className="space-y-2 mt-4">
                    {/* Hearing Health Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={(e) => toggleSection("hearing", e)}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Ear className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Your Hearing Health</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "hearing" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "hearing" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/hearing-health/how-we-hear"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">How Hearing Works
                            </span>
                          </Link>
                          <div className="flex flex-col">
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setHearingLossOpen(!hearingLossOpen);
      }}
      className="group flex w-full select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
    >
                            <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <div className="flex flex-1 flex-col text-left">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium leading-none">
            <EditableText contentKey="nav.hearingLossTitle" defaultValue="Hearing Loss" as="span" />
          </span>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
              hearingLossOpen ? "rotate-180" : ""
            }`} 
          />
        </div>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">
          <EditableText contentKey="nav.hearingLossDesc" defaultValue="Types, causes, and signs" as="span" />
        </p>
      </div>
    </button>

    {/* Animated Sub-links Area */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        hearingLossOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-secondary/20 pl-4">
        {[
          { href: "/hearing-health/hearing-loss/signs-of-hearing-loss", label: "Signs of hearing loss" },
          { href: "/hearing-health/hearing-loss/causes-of-hearing-loss", label: "Causes of hearing loss" },
          { href: "/hearing-health/hearing-loss/types-of-hearing-loss", label: "Types of hearing loss" },
          { href: "/hearing-health/hearing-loss/hearing-loss-in-adults", label: "Hearing loss in adults" },
          { href: "/hearing-health/hearing-loss/hearing-loss-in-child", label: "Hearing loss in Child" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-secondary hover:translate-x-1 transform"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>


  <div className="flex flex-col">
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setTinnitusOpen(!tinnitusOpen); // Uses the specific tinnitus state
      }}
      className="group flex w-full select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
    >
      {/* BellRing is a great icon for Tinnitus (ringing in the ears) */}
      <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />

      <div className="flex flex-1 flex-col text-left">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium leading-none">
            <EditableText contentKey="nav.tinnitusTitle" defaultValue="Tinnitus" as="span" />
          </span>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
              tinnitusOpen ? "rotate-180" : ""
            }`} 
          />
        </div>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">
          <EditableText contentKey="nav.tinnitusDesc" defaultValue="Symptoms and relief therapy" as="span" />
        </p>
      </div>
    </button>

    {/* Animated Sub-links Area */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        tinnitusOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-secondary/20 pl-4">
        {[
          { href: "/hearing-health/tinnitus/symptoms-causes", label: "Symptoms and causes" },
          { href: "/hearing-health/tinnitus/tinnitus-therapy", label: "Tinnitus therapy" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-secondary hover:translate-x-1 transform"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>



  <div className="flex flex-col">
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setTinnitusOpen(!tinnitusOpen); // Uses the specific tinnitus state
      }}
      className="group flex w-full select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
    >
      {/* BellRing is a great icon for Tinnitus (ringing in the ears) */}
      <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
      <div className="flex flex-1 flex-col text-left">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium leading-none">
            <EditableText contentKey="nav.tinnitusTitle" defaultValue="ْUnderStanding Hearing Testing" as="span" />
          </span>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
              tinnitusOpen ? "rotate-180" : ""
            }`} 
          />
        </div>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">
          <EditableText contentKey="nav.tinnitusDesc" defaultValue="" as="span" />
        </p>
      </div>
    </button>

    {/* Animated Sub-links Area */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        tinnitusOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-secondary/20 pl-4">
        {[
          { href: "/hearing-health/tinnitus/", label: "UnderStanding Hearing Testing" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-secondary hover:translate-x-1 transform"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>

 
                          
                        </div>
                        
                      </div>
                    </div>





               {/* Products Section */}
<div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
    <button
      onClick={(e) => toggleMain("products-menu", e)}
      className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
    >
      <div className="flex items-center gap-3">
        <Ear className="h-5 w-5 text-secondary" />
        <span className="font-semibold">Products & Accessories</span>
      </div>
      <ChevronRight
        className={cn(
          "h-5 w-5 text-muted-foreground transition-transform duration-300",
          expandedMain === "products-menu" && "rotate-90"
        )}
      />
    </button>

  <div
    className={cn(
      "overflow-hidden transition-all duration-300 ease-in-out",
      expandedMain === "products-menu" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
    )}
  >
    <div className="p-2 space-y-1 bg-accent/5">
      <h5 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider p-3">
        Categories
      </h5>

      {productsMenuStructure.categories.map((category) => {
        const hasSubItems = category.submenu || category.items;
        const isCategoryExpanded = expandedCategory === category.id;

        if (hasSubItems) {
          return (
            <div key={category.id} className="w-full border-b border-border/20 last:border-b-0">
              <button
                type="button"
                onClick={(e) => toggleCategory(category.id, e)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  {categoryIconMap[category.icon as string] || <div className="h-4 w-4" />}
                  <span className="text-sm font-medium">{category.label}</span>
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-300",
                    isCategoryExpanded && "rotate-90"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isCategoryExpanded
                    ? "max-h-[600px] opacity-100 pointer-events-auto"
                    : "max-h-0 opacity-0 pointer-events-none"
                )}
              >
                <div className="ml-6 p-2 space-y-1 bg-accent/10 rounded-b-lg">
                  {category.submenu?.map((brand) => (
                    <React.Fragment key={brand.id}>
                      <h6 className="text-xs font-semibold pt-2 text-primary/80 ml-1">{brand.label}</h6>
                      {brand.items?.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/30 transition-all duration-200 group"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          <span className="text-xs">{item.label}</span>
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}

                  {category.items?.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/30 transition-all duration-200 group"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="text-xs">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={category.id}
            href={category.href || "/products"}
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              {categoryIconMap[category.icon as string] || <div className="h-4 w-4" />}
              <span className="text-sm font-medium">{category.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</div>
{/* End Products Section */}


                    {/* Company Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={(e) => toggleSection("company", e)}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Building className="h-5 w-5 text-accent" />
                          <span className="font-semibold">Company</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "company" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "company" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">About Us</span>
                          </Link>
                          <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">Services</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={(e) => toggleSection("contact", e)}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Contact</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "contact" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "contact" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-sm">Contact Page</span>
                          </Link>
                          <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <MessageCircle className="h-4 w-4 text-secondary" />
                            <div className="flex-1">
                              <span className="text-sm block">WhatsApp</span>
                              <span className="text-xs text-muted-foreground">+966 800 124 8882</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={(e) => toggleSection("resources", e)}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-secondary" />
                          <span className="font-semibold">Resources</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "resources" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "resources" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/blog"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span className="text-sm">Blog</span>
                          </Link>
                          <Link
                            href="/faq"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <HelpCircle className="h-4 w-4 text-secondary" />
                            <span className="text-sm">FAQ</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-auto p-6 border-t bg-gradient-to-r from-primary/5 to-secondary/5">
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:bg-accent/10 transition-all duration-200"
                  >
                    <LogIn className="h-4 w-4" />
                    <span className="text-sm font-medium">{isAdmin ? "Admin Dashboard" : "Admin Login"}</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// ListItem component with improved hover state colors for better text contrast
const ListItem = ({
  className,
  title,
  children,
  href,
  icon,
  ...props
}: {
  className?: string
  title: React.ReactNode
  children: React.ReactNode
  href: string
  icon?: React.ReactNode
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-foreground hover:shadow-md hover:scale-[1.02] focus:bg-primary/10 focus:text-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}