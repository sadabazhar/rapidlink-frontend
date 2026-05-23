import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import "@/styles/theme.css"

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-(--background) text-(--foreground)">
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          RapidLink Landing Page
        </h1>
      </main>

      <Footer />
    </div>

  )
}

export default HomePage