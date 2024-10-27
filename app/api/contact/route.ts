// File: /app/api/contact/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contact queries" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
