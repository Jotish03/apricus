"use client";
import React, { useState, useEffect } from "react";
import Adventure from "@/components/adventure";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import PlacesSlider from "@/components/placesslider";
import RoomCards from "@/components/room-cards";
import Services from "@/components/services";
import ApricusLoading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  // Show loading screen while isLoading is true
  if (isLoading) {
    return <ApricusLoading />;
  }

  // Show main content after loading
  return (
    <main>
      <Hero />
      <Services />
      <Experience />
      <Adventure />
      <PlacesSlider />
      <RoomCards />
    </main>
  );
}
