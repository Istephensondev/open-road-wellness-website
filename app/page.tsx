import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutServices } from "@/components/about-services"
import { Facilities } from "@/components/facilities"
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
        <Facilities />
        <Packages />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
