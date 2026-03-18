import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutServices } from "@/components/about-services"
import { Packages } from "@/components/packages"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AboutServices />
        <Packages />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
