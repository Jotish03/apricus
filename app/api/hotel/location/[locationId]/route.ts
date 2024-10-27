// app/api/hotels/location/[locationId]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleSuccess, handleError } from "@/lib/api-helpers";

export async function GET(
  request: Request,
  { params }: { params: { locationId: string } }
) {
  try {
    const hotels = await prisma.hotel.findMany({
      where: {
        locationId: params.locationId,
      },
      include: {
        location: true,
      },
    });

    return handleSuccess(hotels);
  } catch (error) {
    return handleError(error);
  }
}
