'use client';

import Head from "next/head";
import Hero from "../components/sections/hero";
import Loader from "../components/loader";
import About from "../components/sections/about";
import Works from "../components/sections/works";
import Footer from "../components/sections/footer";
import Contact from "../components/sections/contact";
import OtherProjects from "../components/sections/other-projects";
import HighlightsProjects from "../components/sections/highlight-projects";

export default function Home() { 
  return (
    <div className="w-full max-w-[1600px] min-h-screen px-[150px] max-[1068px]:px-[100px] max-[768px]:px-[50px] max-[480px]:px-[25px] mx-auto">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

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
