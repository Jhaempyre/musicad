import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses"
import StickyScrollRevealDemo from "./components/WhyToChooseUs"
import MusicSchoolTestimonials from "@/app/components/TestimonialCards";
import UpcomingWebinars from "@/app/components/UpcomingWebinars"
import Instructors from "@/app/components/Instructors"
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <Navbar />

        {children}</body>
    </html>
  );
}
