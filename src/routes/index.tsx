import AnalyticsDashboard from '@/components/landing/analytics-dashboard'
import ApiShowcaseSection from '@/components/landing/api-showcase-section'
import FeaturesSection from '@/components/landing/features-section'
import HeroSection from '@/components/landing/hero-section'
import PricingSection from '@/components/landing/pricing-section'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import "@/styles/theme.css"

const HomePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-(--background) text-(--foreground)">

      {/* Global Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-15 h-125 w-225 -translate-x-1/2 rounded-full bg-(--primary)/15 blur-[140px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <AnalyticsDashboard />
        <ApiShowcaseSection />
        <PricingSection />
      </main>

      <Footer />
    </div>

  )
}

export default HomePage