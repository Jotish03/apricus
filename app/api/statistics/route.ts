import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Contact statistics
    const totalContacts = await prisma.contact.count();
    const lastMonthContacts = await prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const lastWeekContacts = await prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
    });

    // Calculate contact percentage change (comparing last month to previous month)
    const twoMonthsAgoContacts = await prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
          lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const contactPercentageChange =
      twoMonthsAgoContacts === 0
        ? 0
        : Math.round(
            ((lastMonthContacts - twoMonthsAgoContacts) /
              twoMonthsAgoContacts) *
              100
          );

    // Booking statistics
    const totalBookings = await prisma.booking.count();
    const confirmedBookings = await prisma.booking.count({
      where: { status: "CONFIRMED" },
    });
    const pendingBookings = await prisma.booking.count({
      where: { status: "PENDING" },
    });

    // Calculate booking percentage change (comparing this month to last month)
    const lastMonthBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const twoMonthsAgoBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
          lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const bookingPercentageChange =
      twoMonthsAgoBookings === 0
        ? 0
        : Math.round(
            ((lastMonthBookings - twoMonthsAgoBookings) /
              twoMonthsAgoBookings) *
              100
          );

    // Location statistics
    const totalLocations = await prisma.location.count();
    const lastMonthLocations = await prisma.location.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const twoMonthsAgoLocations = await prisma.location.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
          lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const locationPercentageChange =
      twoMonthsAgoLocations === 0
        ? 0
        : Math.round(
            ((lastMonthLocations - twoMonthsAgoLocations) /
              twoMonthsAgoLocations) *
              100
          );

    // Hotel statistics
    const totalHotels = await prisma.hotel.count();
    const lastMonthHotels = await prisma.hotel.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const twoMonthsAgoHotels = await prisma.hotel.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
          lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
    const hotelPercentageChange =
      twoMonthsAgoHotels === 0
        ? 0
        : Math.round(
            ((lastMonthHotels - twoMonthsAgoHotels) / twoMonthsAgoHotels) * 100
          );

    return NextResponse.json({
      contacts: {
        total: totalContacts,
        lastMonth: lastMonthContacts,
        lastWeek: lastWeekContacts,
        percentageChange: contactPercentageChange,
      },
      bookings: {
        total: totalBookings,
        confirmed: confirmedBookings,
        pending: pendingBookings,
        percentageChange: bookingPercentageChange,
      },
      locations: {
        total: totalLocations,
        percentageChange: locationPercentageChange,
      },
      hotels: {
        total: totalHotels,
        percentageChange: hotelPercentageChange,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard statistics:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard statistics" },
      { status: 500 }
    );
  }
}
