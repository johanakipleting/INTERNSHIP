import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { NewsSection } from "@/components/sections/news-section"
import { EventsSection } from "@/components/sections/events-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
return (
  <>
    <div className="min-h-screen flex flex-col">
      {/* Header with green background */}
      <div className="bg-green-700">
        <Header />
      </div>
      {/* Main/body with light blue background */}
      <main className="flex-1 bg-orange-50">
        <HeroSection />
        <AboutSection />
        <NewsSection />
        <EventsSection />
        <ContactSection />
      </main>
      {/* Footer with purple background */}
      <div className="bg-purple-900">
        <Footer />
      </div>
    </div>
  </>
)
}
