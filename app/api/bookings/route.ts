import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleSuccess, handleError } from "@/lib/api-helpers";
import { ApiError } from "@/lib/utils";

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        location: true,
        hotel: true,
      },
    });
    return handleSuccess(bookings);
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields (removed children from required fields)
    const requiredFields = [
      "checkIn",
      "checkOut",
      "adults",
      "fullName",
      "phoneNo",
      "email",
      "locationId",
      "hotelId",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new ApiError(400, `${field} is required`);
      }
    }

    // Validate dates
    const checkIn = new Date(body.checkIn);
    const checkOut = new Date(body.checkOut);

    if (isNaN(checkIn.getTime())) {
      throw new ApiError(400, "Invalid check-in date");
    }
    if (isNaN(checkOut.getTime())) {
      throw new ApiError(400, "Invalid check-out date");
    }
    if (checkIn >= checkOut) {
      throw new ApiError(400, "Check-out date must be after check-in date");
    }

    // Validate adults
    if (body.adults < 1) {
      throw new ApiError(400, "At least one adult is required");
    }

    // Validate children if provided
    const children = body.children ?? 0; // Default to 0 if not provided
    if (children < 0) {
      throw new ApiError(400, "Number of children cannot be negative");
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        checkIn,
        checkOut,
        adults: body.adults,
        children, // Use the validated children value
        fullName: body.fullName,
        phoneNo: body.phoneNo,
        email: body.email,
        locationId: body.locationId,
        hotelId: body.hotelId,
        status: "PENDING",
      },
      include: {
        hotel: true,
        location: true,
      },
    });

    return handleSuccess(booking);
  } catch (error) {
    return handleError(error);
  }
}
