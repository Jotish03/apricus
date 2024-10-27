"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSidebarPage = pathname.startsWith("/apricus-admin");

  return (
    <>
      {!isSidebarPage && <Navbar />}
      {children}
      {!isSidebarPage && <Footer />}
    </>
  );
}
