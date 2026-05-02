import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "./pages/hero"
import { Reveal } from "@/components/animations/Reveal"
import { Features } from "./pages/feature"
import { HowItWorks } from "./pages/how-it-works"
import { CodeExample } from "./pages/before-and-after"
import { Benefits } from "./pages/benefits"
import { Footer } from "@/components/landing/footer"

export function Main() {
  return (

    <>
      {/* navbar */}
      <Navbar />
      <main>
        {/* Contenido */}
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <Features />
        </Reveal>

        <Reveal>
          <HowItWorks />
        </Reveal>

        <Reveal>
          <CodeExample />
        </Reveal>

        <Reveal>
          <Benefits />
        </Reveal>
      </main>


      <Footer />
    </>



  )
}