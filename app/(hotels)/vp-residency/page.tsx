"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

type SlideState = number;
type SlideSetter = React.Dispatch<React.SetStateAction<SlideState>>;

const VPResidencyPage = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideState>(0);
  const [currentRoomSlide, setCurrentRoomSlide] = useState<SlideState>(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState<SlideState>(0);

  const heroImages = [
    "/images/vp/vp1.jpeg",
    "/images/vp/vp2.jpeg",
    "/images/vp/vp3.jpeg",
  ];

  const roomImages = [
    { src: "/images/vp/vp4.jpeg", title: "Deluxe Room" },
    { src: "/images/vp/vp5.jpeg", title: "Executive Room" },
    { src: "/images/vp/vp11.jpeg", title: "Premium Room" },
  ];

  const galleryImages = [
    { src: "/images/vp/vp7.jpeg", title: "" },
    { src: "/images/vp/vp8.jpeg", title: "" },
    { src: "/images/vp/vp9.jpeg", title: "" },
    { src: "/images/vp/vp10.jpeg", title: "" },
    { src: "/images/vp/vp6.jpeg", title: "" },
    { src: "/images/vp/vp12.jpeg", title: "" },
  ];

  const nextSlide = (
    current: SlideState,
    setCurrent: SlideSetter,
    length: number
  ) => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = (
    current: SlideState,
    setCurrent: SlideSetter,
    length: number
  ) => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className="font-comfortaaRegular">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[50vh] sm:h-[70vh] md:h-screen">
        <div className="absolute inset-0 bg-primary opacity-70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
        />
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="font-comfortaaBold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
            VP Residency by Apricus
          </h1>
          <p className="font-comfortaaLight text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Experience luxury and comfort in the heart of the city
          </p>
          <Button
            size="lg"
            className="font-comfortaaBold bg-white text-primary hover:bg-white/90"
          >
            Book Now
          </Button>
        </div>
        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center z-20 px-4 sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              prevSlide(currentSlide, setCurrentSlide, heroImages.length)
            }
            className="text-white hover:bg-white/20 bg-black/30 rounded-full mr-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              nextSlide(currentSlide, setCurrentSlide, heroImages.length)
            }
            className="text-white hover:bg-white/20 bg-black/30 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        {/* Desktop Navigation Buttons */}
        <div className="absolute inset-0 items-center justify-between z-20 px-4 hidden sm:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              prevSlide(currentSlide, setCurrentSlide, heroImages.length)
            }
            className="text-white hover:bg-white/20 bg-black/30 rounded-full"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              nextSlide(currentSlide, setCurrentSlide, heroImages.length)
            }
            className="text-white hover:bg-white/20 bg-black/30 rounded-full"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-8 sm:p-10">
            <h2 className="font-comfortaaBold text-3xl mb-6 text-gray-900">
              Welcome to VP Residency
            </h2>
            <p className="font-comfortaaLight text-gray-600 text-lg leading-relaxed">
              VP Residency by Apricus offers a perfect blend of luxury and
              comfort in the bustling heart of the city. With our prime
              location, state-of-the-art amenities, and exceptional service, we
              ensure that your stay is nothing short of extraordinary. Whether
              you&apos;re here for business or leisure, VP Residency is your
              home away from home.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Room Categories Section with Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Our Rooms
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentRoomSlide * 100}%)`,
                }}
              >
                {roomImages.map((room, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="relative h-64 sm:h-80 md:h-96">
                          <Image
                            src={room.src}
                            alt={room.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-comfortaaBold text-xl text-center">
                            {room.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                prevSlide(
                  currentRoomSlide,
                  setCurrentRoomSlide,
                  roomImages.length
                )
              }
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-primary hover:bg-primary/20 bg-white/80 rounded-full shadow-md"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                nextSlide(
                  currentRoomSlide,
                  setCurrentRoomSlide,
                  roomImages.length
                )
              }
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-primary hover:bg-primary/20 bg-white/80 rounded-full shadow-md"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="font-comfortaaLight text-gray-600">
              Total Rooms: 50 | Floors: Ground + 4 | Twin Bed Rooms Available
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Facilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "24-Hour Front Desk",
              "Free Wi-Fi",
              "Restaurant",
              "Room Service",
              "Fitness Center",
              "Business Center",
              "Conference Rooms",
              "Laundry Service",
              "Parking",
              "Airport Shuttle",
              "Concierge Service",
              "Currency Exchange",
            ].map((facility, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="font-comfortaaLight text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Gallery
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentGallerySlide * 100}%)`,
                }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="relative h-64 sm:h-80 md:h-96">
                          <Image
                            src={image.src}
                            alt={image.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-comfortaaBold text-xl text-center">
                            {image.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                prevSlide(
                  currentGallerySlide,
                  setCurrentGallerySlide,
                  galleryImages.length
                )
              }
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-primary hover:bg-primary/20 bg-white/80 rounded-full shadow-md"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                nextSlide(
                  currentGallerySlide,
                  setCurrentGallerySlide,
                  galleryImages.length
                )
              }
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-primary hover:bg-primary/20 bg-white/80 rounded-full shadow-md"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Attractions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Location & Nearby Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Our Location
                </h3>
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <p className="font-comfortaaLight text-gray-600">
                    123 City Center Road, Downtown, Cityville, 12345
                  </p>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.748817188669056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Nearby Attractions
                </h3>
                <ul className="space-y-4">
                  {[
                    { name: "City Center Mall", distance: "0.5 km" },
                    { name: "Central Park", distance: "1 km" },
                    { name: "Museum of Modern Art", distance: "1.5 km" },
                    { name: "Business District", distance: "2 km" },
                    { name: "City Airport", distance: "10 km" },
                  ].map((attraction, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-comfortaaMedium">
                          {attraction.name}
                        </h4>
                        <p className="font-comfortaaLight text-gray-600">
                          {attraction.distance}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-2" />
                    <p className="font-comfortaaLight text-gray-600">
                      +1 (123) 456-7890
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-2" />
                    <p className="font-comfortaaLight text-gray-600">
                      info@vpresidency.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 text-primary mr-2" />
                    <a
                      href="https://www.vpresidency.com"
                      className="font-comfortaaLight text-primary hover:underline"
                    >
                      www.vpresidency.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Send us a message
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-comfortaaMedium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-comfortaaMedium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-comfortaaMedium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPResidencyPage;
