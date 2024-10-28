"use client";
import React, { useState, useCallback, useEffect, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Home,
  Info,
  BookOpen,
  Handshake,
  Contact,
  Calendar,
  UtensilsCrossed,
} from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  subItems?: { label: string; href: string }[];
};

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenuProps = {
  isOpen: boolean;
  items: readonly { label: string; href: string }[];
  onClose: () => void;
  currentPath: string;
};

// Memoized constant data
const standardNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { label: "About Us", href: "/aboutus", icon: <Info className="w-4 h-4" /> },
  { label: "Blog", href: "/blog", icon: <BookOpen className="w-4 h-4" /> },
  {
    label: "Partner with Us",
    href: "/partner-with-us",
    icon: <Handshake className="w-4 h-4" />,
  },
  {
    label: "Contact",
    href: "/contact-us",
    icon: <Contact className="w-4 h-4" />,
  },
  {
    label: "Events",
    href: "/events",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    label: "Dining",
    href: "/dinings",
    icon: <UtensilsCrossed className="w-4 h-4" />,
  },
];

const dropdownNavStructure = {
  LOCATIONS: [
    { label: "Benaulim South Goa", href: "/locations/benaulim-south-goa" },
    { label: "Varca ", href: "/locations/varca" },
    { label: "Porvorim", href: "/locations/porvorim" },
  ],
  HOTELS: [
    { label: "The Centre Court", href: "/the-centre-court" },
    { label: "Apricus VP residency", href: "/vp-residency" },
  ],
  VILLAS: [
    { label: "Apricus Villa Brisa Marina", href: "/villa/brisa-marina" },
  ],
} as const;

// Memoized ContactHeader component
const ContactHeader = memo(() => (
  <div className="bg-gradient-to-r font-comfortaaBold from-primary/80 to-primary/80 text-white py-2 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="tel:+918956593946"
          className="flex items-center hover:text-white/90 transition-colors"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span className="font-semibold mr-1">CALL:</span>
          <span>+91 8956593946</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:crs@apricushotels.com"
          className="flex items-center hover:text-white/90 transition-colors"
        >
          <Mail className="w-4 h-4 mr-2" />
          <span className="font-semibold mr-1">EMAIL:</span>
          <span>crs@apricushotels.com</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/918956593946"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-white/90 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          <span>WhatsApp Us</span>
        </motion.a>
      </div>
    </div>
  </div>
));

ContactHeader.displayName = "ContactHeader";

// Memoized DropdownMenu component
const DropdownMenu = memo(
  ({ isOpen, items, onClose, currentPath }: DropdownMenuProps) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute font-comfortaaBold top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
        >
          {items.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={`block px-4 py-2 text-sm ${
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-700 hover:bg-primary hover:text-white"
                } transition-colors`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
);

DropdownMenu.displayName = "DropdownMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Debounced scroll handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 0);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Memoized handlers
  const handleMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleDropdownEnter = useCallback((category: string) => {
    setActiveDropdown(category);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const navClasses = `bg-white transition-all duration-300 ${
    scrolled ? "shadow-md" : ""
  }`;

  return (
    <>
      <ContactHeader />
      <header className="sticky top-0 z-50">
        <nav className={navClasses}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="apricus-logo"
                    width={150}
                    height={150}
                    priority
                  />
                </Link>
              </motion.div>

              <div className="hidden lg:flex items-center space-x-1">
                {standardNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href || "#"}
                      className={`flex items-center space-x-1 px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      {item.icon}
                      <span className="ml-1">{item.label}</span>
                    </Link>
                  );
                })}

                {Object.entries(dropdownNavStructure).map(
                  ([category, items]) => (
                    <div
                      key={category}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(category)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button className="flex items-center space-x-1 text-gray-800 hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
                        <span>{category}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <DropdownMenu
                        isOpen={activeDropdown === category}
                        items={items}
                        onClose={handleDropdownLeave}
                        currentPath={pathname}
                      />
                    </div>
                  )
                )}

                <motion.div whileHover={{ scale: 1.05 }} className="ml-2">
                  <Button
                    variant="default"
                    className="bg-primary text-white hover:bg-primary/90 font-medium shadow-md whitespace-nowrap"
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleMenuToggle}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t"
              >
                <div className="px-2 pt-2 pb-3 font-comfortaaBold space-y-1">
                  {standardNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href || "#"}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-gray-800 hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}

                  {Object.entries(dropdownNavStructure).map(
                    ([category, items]) => (
                      <div key={category}>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === category ? null : category
                            )
                          }
                          className="w-full flex items-center justify-between text-gray-800 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                        >
                          <span>{category}</span>
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform ${
                              activeDropdown === category ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === category && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6"
                            >
                              {items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                  <Link
                                    key={item.label}
                                    href={item.href || "#"}
                                    className={`block px-3 py-2 text-sm ${
                                      isActive
                                        ? "text-primary font-medium"
                                        : "text-gray-600 hover:text-primary"
                                    }`}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsOpen(false);
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  )}
                </div>
                <div className="px-4 py-3">
                  <Button
                    variant="default"
                    className="w-full bg-primary text-white hover:bg-primary/90 font-medium shadow-md"
                  >
                    Book Now
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
