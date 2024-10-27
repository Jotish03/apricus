// types/index.ts
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  hotels: Hotel[];
}

export interface Hotel {
  id: string;
  name: string;
  description?: string;
  locationId: string;
  price: number;
  amenities: string[];
  images: string[];
}

export interface Booking {
  id: string;
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
  fullName: string;
  phoneNo: string;
  email: string;
  locationId: string;
  hotelId: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
}
