"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Utensils,
  Phone,
  Mail,
  MapPin,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Tv,
  Coffee,
  Snowflake,
} from "lucide-react";
import Image from "next/image";

type SlideState = number;
type SlideSetter = React.Dispatch<React.SetStateAction<SlideState>>;

const BlissGangaPage = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideState>(0);
  const [currentRoomSlide, setCurrentRoomSlide] = useState<SlideState>(0);
  const [currentDiningSlide, setCurrentDiningSlide] = useState<SlideState>(0);

  const heroImages = [
    "/images/blissganga1.jpg",
    "/images/blissganga2.jpg",
    "/images/blissganga3.jpg",
  ];

  const roomImages = [
    { src: "/images/room1.jpg", title: "Deluxe Room" },
    { src: "/images/room2.jpg", title: "Super Deluxe Room" },
    { src: "/images/room3.jpg", title: "Family Room" },
  ];

  const diningImages = [
    { src: "/images/dining1.jpg", title: "Multi-Cuisine Restaurant" },
    { src: "/images/dining2.jpg", title: "Rooftop Cafe" },
    { src: "/images/dining3.jpg", title: "In-room Dining" },
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
            Bliss Ganga Hotel & Restaurant
          </h1>
          <p className="font-comfortaaLight text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Experience the serenity of Rishikesh with our premium accommodations
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
              Welcome to Bliss Ganga Hotel & Restaurant
            </h2>
            <p className="font-comfortaaLight text-gray-600 text-lg leading-relaxed">
              Located in the heart of Rishikesh, Bliss Ganga Hotel & Restaurant
              offers a perfect blend of modern amenities and traditional
              hospitality. With stunning views of the Ganges and the surrounding
              mountains, our hotel provides a serene retreat for both leisure
              and spiritual seekers.
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
              Total Rooms: 20 | Floors: 3 | River View Rooms Available
            </p>
          </div>
        </div>
      </section>

      {/* Food & Beverage Section with Cuisine Slider */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Dining Experience
          </h2>
          <div className="relative mb-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentDiningSlide * 100}%)`,
                }}
              >
                {diningImages.map((dining, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="relative h-64 sm:h-80 md:h-96">
                          <Image
                            src={dining.src}
                            alt={dining.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-comfortaaBold text-xl text-center">
                            {dining.title}
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
                  currentDiningSlide,
                  setCurrentDiningSlide,
                  diningImages.length
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
                  currentDiningSlide,
                  setCurrentDiningSlide,
                  diningImages.length
                )
              }
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-primary hover:bg-primary/20 bg-white/80 rounded-full shadow-md"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Utensils className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Multi-Cuisine Restaurant
                </h3>
                <ul className="font-comfortaaLight text-gray-600">
                  <li>Breakfast: 07:00 AM to 10:30 AM</li>
                  <li>Lunch: 12:30 PM to 03:00 PM</li>
                  <li>Dinner: 07:00 PM to 10:30 PM</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Coffee className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-4">
                  Rooftop Cafe
                </h3>
                <p className="font-comfortaaLight text-gray-600">
                  Enjoy breathtaking views of the Ganges while sipping on your
                  favorite beverages.
                </p>
                <p className="font-comfortaaLight text-gray-600 mt-2">
                  Open: 10:00 AM to 10:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Facilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "24-Hour Front Desk",
              "Free Wi-Fi",
              "Air Conditioning",
              "Restaurant",
              "Room Service",
              "Laundry Service",
              "Currency Exchange",
              "Tour Desk",
              "Yoga Classes",
              "Meditation Sessions",
              "Parking",
              "Airport Shuttle (Paid)",
              "Housekeeping",
              "Luggage Storage",
              "Doctor on Call",
              "Travel Assistance",
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

      {/* Room Amenities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Room Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Wifi className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-2">Free Wi-Fi</h3>
                <p className="font-comfortaaLight text-gray-600">
                  Stay connected with high-speed internet access
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Tv className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-2">
                  Flat-screen TV
                </h3>
                <p className="font-comfortaaLight text-gray-600">
                  Enjoy your favorite shows on our HD televisions
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Snowflake className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-2">
                  Air Conditioning
                </h3>
                <p className="font-comfortaaLight text-gray-600">
                  Stay cool and comfortable in all seasons
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <Coffee className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-comfortaaBold text-xl mb-2">
                  Tea/Coffee Maker
                </h3>
                <p className="font-comfortaaLight text-gray-600">
                  Enjoy complimentary beverages in your room
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-comfortaaBold text-3xl mb-8 text-center text-gray-900">
            Nearby Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Triveni Ghat",
                distance: "0.5 km",
                description:
                  "A sacred bathing spot and place for evening Ganga Aarti ceremony.",
              },
              {
                title: "Laxman Jhula",
                distance: "2 km",
                description:
                  "Famous suspension bridge across the Ganges with panoramic views.",
              },
              {
                title: "Ram Jhula",
                distance: "3 km",
                description:
                  "Another iconic bridge connecting Sivananda Nagar to Swargashram.",
              },
              {
                title: "Parmarth Niketan",
                distance: "1.5 km",
                description:
                  "Largest ashram in Rishikesh, known for its daily Ganga Aarti.",
              },
              {
                title: "Beatles Ashram",
                distance: "4 km",
                description:
                  "Former ashram where The Beatles stayed, now an eco-friendly attraction.",
              },
            ].map((attraction, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <h3 className="font-comfortaaBold text-xl mb-2">
                    {attraction.title}
                  </h3>
                  <p className="font-comfortaaMedium text-primary mb-2">
                    {attraction.distance}
                  </p>
                  <p className="font-comfortaaLight text-gray-600">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
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
                    Laxman Jhula Road, Near Triveni Ghat, Rishikesh, Uttarakhand
                    249201
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-2" />
                  <p className="font-comfortaaLight text-gray-600">
                    +91 135 2430200
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-2" />
                  <p className="font-comfortaaLight text-gray-600">
                    info@blissgangahotel.com
                  </p>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-primary mr-2" />
                  <a
                    href="https://www.blissgangahotel.com"
                    className="font-comfortaaLight text-primary hover:underline"
                  >
                    www.blissgangahotel.com
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123456789!2d78.31234567890123!3d30.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzM0LjQiTiA3OMKwMTgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
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

export default BlissGangaPage;
