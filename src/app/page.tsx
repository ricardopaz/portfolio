import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Works from "../components/sections/works";
import Builded from "../components/sections/builded";

export default function Home() {
  return (
    <div className="w-full max-w-[1600px] mb-[200px] min-h-screen px-[150px] mx-auto">
      <Hero />
      <About />
      <Works />
      <Builded />
    </div>
  )
}
