"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  MapPin,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  hotelName: string;
  review: string;
}

const ITEMS_PER_PAGE = 4;

const TestimonialsPage = () => {
  const [rating, setRating] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "John Doe",
      location: "New York, USA",
      rating: 5,
      date: "2024-03-15",
      hotelName: "Apricus Grand Hotel",
      review:
        "An exceptional stay at Apricus. The attention to detail and customer service exceeded all expectations. The rooms were immaculate and the staff went above and beyond to ensure our comfort.",
    },
    {
      id: 2,
      name: "Emma Johnson",
      location: "London, UK",
      rating: 4,
      date: "2024-03-10",
      hotelName: "Apricus Resort & Spa",
      review:
        "Beautiful property with excellent amenities. The spa services were particularly noteworthy. A few minor hiccups with room service, but overall a very pleasant experience.",
    },
    {
      id: 3,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      date: "2024-03-05",
      hotelName: "Apricus Boutique",
      review:
        "A perfect blend of luxury and comfort. The cultural touches and personalized service made our stay truly memorable. Would highly recommend to anyone visiting Singapore.",
    },
    {
      id: 4,
      name: "Sophie Martin",
      location: "Paris, France",
      rating: 5,
      date: "2024-02-28",
      hotelName: "Apricus Grand Hotel",
      review:
        "Magnifique! The epitome of luxury hospitality. From the moment we arrived, we were treated like royalty. The concierge service was particularly outstanding.",
    },
    {
      id: 5,
      name: "David Thompson",
      location: "Sydney, Australia",
      rating: 4,
      date: "2024-02-20",
      hotelName: "Apricus Resort & Spa",
      review:
        "Fantastic beachfront location with stunning views. The infinity pool was a highlight, and the breakfast buffet was exceptional. Looking forward to our next stay!",
    },
  ]);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const paginatedTestimonials = testimonials.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your review!");
  };

  return (
    <div className="font-comfortaaRegular">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="relative z-20 text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center mb-6 bg-white/10 px-4 py-2 rounded-full">
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-comfortaaMedium uppercase tracking-wider text-sm">
              Guest Stories
            </span>
          </div>
          <h1 className="font-comfortaaBold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our Guest Experiences
          </h1>
          <p className="font-comfortaaLight text-xl max-w-2xl mx-auto">
            Discover what makes Apricus Hotels extraordinary through the eyes of
            our guests
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="read" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="read">Read Reviews</TabsTrigger>
            <TabsTrigger value="write">Write a Review</TabsTrigger>
          </TabsList>

          <TabsContent value="read" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-comfortaaBold text-lg">
                              {testimonial.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{testimonial.location}</span>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-500 flex items-center space-x-2">
                          <Building2 className="w-4 h-4" />
                          <span>{testimonial.hotelName}</span>
                        </div>
                        <p className="mt-4 text-gray-600">
                          {testimonial.review}
                        </p>
                        <div className="mt-4 text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(testimonial.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="write">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-comfortaaBold">
                  Share Your Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-comfortaaMedium text-sm">
                        Your Name
                      </label>
                      <Input required placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-comfortaaMedium text-sm">
                        Location
                      </label>
                      <Input required placeholder="City, Country" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-comfortaaMedium text-sm">
                      Select Hotel
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a hotel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grand">
                          Apricus Grand Hotel
                        </SelectItem>
                        <SelectItem value="resort">
                          Apricus Resort & Spa
                        </SelectItem>
                        <SelectItem value="boutique">
                          Apricus Boutique
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-comfortaaMedium text-sm">
                      Rating
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-6 h-6 cursor-pointer transition-colors ${
                            star <= rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => setRating(star)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-comfortaaMedium text-sm">
                      Your Review
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Tell us about your experience..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90"
                  >
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TestimonialsPage;
