import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Works from "../components/sections/works";
import Footer from "../components/sections/footer";
import Contact from "../components/sections/contact";
import OtherProjects from "../components/sections/other-projects";
import HighlightsProjects from "../components/sections/highlight-projects";

export default function Home() {
  return (
    <div className="w-full max-w-[1600px] min-h-screen px-[150px] mx-auto">
      <Hero />
      <About />
      <Works />
      <HighlightsProjects />
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  )
}
