import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { UspSection } from "@/components/sections/UspSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection"
import { WarehousesSection } from "@/components/sections/WarehousesSection"
import { ContactFormSection } from "@/components/sections/ContactFormSection"
import { FooterSection } from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <UspSection />
        <ServicesSection />
        <HowWeWorkSection />
        <WarehousesSection />
        <ContactFormSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default Index
