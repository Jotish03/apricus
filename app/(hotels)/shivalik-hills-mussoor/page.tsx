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
  Gamepad,
  Waves,
} from "lucide-react";
import Image from "next/image";

type SlideState = number;
type SlideSetter = React.Dispatch<React.SetStateAction<SlideState>>;

const ShivalikHillsMussoorieComponent = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideState>(0);
  const [currentRoomSlide, setCurrentRoomSlide] = useState<SlideState>(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState<SlideState>(0);

  const heroImages = ["/0389815740.jpg", "/1.jpg", "/2.jpg"];

  const roomImages = [
    { src: "/11.jpg", title: "Executive Rooms" },
    { src: "/22.jpg", title: "Premium Rooms" },
    { src: "/33.jpg", title: "Family Rooms" },
  ];

  const galleryImages = [
    "/4.jpg",
    "/1.jpg",
    "/11.jpg",
    "/2.jpg",
    "/3198411ccd.jpg",
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
            SHIVALIK HILLS MUSSOORIE
          </h1>
          <p className="font-comfortaaLight text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Experience luxury and comfort in the heart of Mussoorie
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
              Welcome to SHIVALIK HILLS MUSSOORIE
            </h2>
            <p className="font-comfortaaLight text-gray-600 text-lg leading-relaxed">
              Shivalik Mussoorie Hills is a comfortable accommodation in
              Mussoorie situated close to Mall Road (0.5 km). As a value added
              service, guests can avail of complimentary Wi-Fi and breakfast
              during their stay. The Hotel has well-maintained and comfortable
              rooms.
            </p>
            <p className="font-comfortaaLight text-gray-600 text-lg leading-relaxed mt-4">
              Each room is equipped with conveniences like tea-coffee maker,
              wake-up call, drinking water and attached bathroom with hot and
              cold water. Shivalik Mussoorie Hills provides various facilities
              that include Room service, car rental, medical assistance and
              power back-up. Travel desk and front desk are also offered for the
              convenience of the guests.
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
              Executive Rooms: 25 | Premium Rooms: 18 | Family Rooms: 03
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Waves className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Swimming Pool
                </h3>
                <p className="font-comfortaaLight text-gray-600">
                  Dive into our stunning outdoor swimming pool, where you can
                  enjoy a refreshing swim or lounge by the poolside with a
                  cocktail in hand.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Gamepad className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-4">Game Zone</h3>
                <p className="font-comfortaaLight text-gray-600">
                  Explore our exciting Game Zone, equipped with the latest
                  gaming consoles, arcade games, and activities for guests of
                  all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Free Parking",
              "BBQ Facilities",
              "24-Hour Security",
              "24-Hour Front Desk",
              "Beauty Salon",
              "Body Treatment",
              "Boutique",
              "Free Newspaper",
              "Board Room",
              "Catering Services",
              "High-speed WIFI",
              "Laundry Service",
              "Dry Cleaning",
              "Airport Shuttle",
              "Housekeeping",
              "Massage Services",
              "Outdoor Pool",
              "Restaurant",
              "Halal Food",
              "Pool Snack Bar",
              "Transportation",
              "Wedding Services",
              "Phone Service",
              "Video Security",
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="font-comfortaaLight text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
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
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                          />
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

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <p className="font-comfortaaLight text-gray-600">
                    Madanpur Bora Chhoi Ramnagar, 244715 Rāmnagar, India
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-2" />
                  <p className="font-comfortaaLight text-gray-600">
                    Mob: 8956593947 | Landline: 8788981627
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-2" />
                  <p className="font-comfortaaLight text-gray-600">
                    crs@apricushotels.com
                  </p>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-primary mr-2" />
                  <a
                    href="https://apricushotels.com"
                    className="font-comfortaaLight text-primary hover:underline"
                  >
                    https://apricushotels.com
                  </a>
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

      {/* Full-width Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.8738404035926!2d78.06857661511744!3d30.45596508174133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d0cfa61610fb%3A0x7ce2d6f826a49d9d!2sShivalik%20Hills%20Mussoorie!5e0!3m2!1sen!2sin!4v1624183020784!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ShivalikHillsMussoorieComponent;
