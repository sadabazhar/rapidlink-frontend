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
    <div className="flex min-h-screen flex-col bg-(--background) text-(--foreground)">
      <Navbar />

      <main>
        <HeroSection/>
        <AnalyticsDashboard/>
        <FeaturesSection/>
        <ApiShowcaseSection />
        <PricingSection/>
      </main>

      <Footer />
    </div>

  )
}

export default HomePage