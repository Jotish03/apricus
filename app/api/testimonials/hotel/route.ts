// app/api/testimonials/hotel/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const hotels = await prisma.hotel.findMany({
      select: {
        id: true,
        name: true,
        location: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            Testimonial: true,
          },
        },
      },
    });

    return NextResponse.json(hotels);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
