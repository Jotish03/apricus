// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create locations
  const locations = [
    { name: "Benaulim South Goa", slug: "benaulim-south-goa" },
    { name: "Colva Goa", slug: "colva-goa" },
    { name: "Anjuna", slug: "anjuna" },
    { name: "Porvorim", slug: "porvorim" },
    { name: "Rishikesh Uttarakhand", slug: "rishikesh-uttarakhand" },
    { name: "Mussoorie Uttarakhand", slug: "mussoorie-uttarakhand" },
  ];

  for (const location of locations) {
    const createdLocation = await prisma.location.create({
      data: location,
    });

    // Create hotels for each location
    await prisma.hotel.createMany({
      data: [
        {
          name: `Luxury Hotel ${location.name}`,
          description: "5-star luxury hotel with ocean view",
          locationId: createdLocation.id,
          price: 299.99,
          amenities: ["Pool", "Spa", "Restaurant", "Beach Access"],
          images: ["/hotel1.jpg", "/hotel2.jpg"],
        },
        {
          name: `Boutique Hotel ${location.name}`,
          description: "Charming boutique hotel in the heart of the city",
          locationId: createdLocation.id,
          price: 199.99,
          amenities: ["Restaurant", "Bar", "Fitness Center"],
          images: ["/hotel3.jpg", "/hotel4.jpg"],
        },
      ],
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
