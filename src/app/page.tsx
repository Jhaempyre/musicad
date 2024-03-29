import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses"
import StickyScrollRevealDemo from "./components/WhyToChooseUs"
import MusicSchoolTestimonials from "@/app/components/TestimonialCards";
import UpcomingWebinars from "@/app/components/UpcomingWebinars"
import Instructors from "@/app/components/Instructors"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <h1 className="fixed top-0 center text-4xl ">जय सिया राम</h1>
       <HeroSection />
        <FeaturedCourses />
        <StickyScrollRevealDemo/>
        <MusicSchoolTestimonials />  
        <UpcomingWebinars />  
        <Instructors/>    
        <Footer/>
    </main>
  );
}
