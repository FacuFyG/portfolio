import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/ui/WorkExperience";
import { FaHome } from "react-icons/fa";

export default function Home() {

 

  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={[
        {name: 'Home', link: '/'}, 
        {name:'Projects', link:'#project'},
        {name:'Experience', link:'#Experience'},
        {name:'About', link:'#about'},
        {name:'Contact', link:'#contact'}
      ]}/>
      <Hero/>
      <Projects/>
      <WorkExperience/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}

