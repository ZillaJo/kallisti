"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Menu, User, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion } from "framer-motion";
import logoImg from "../../assets/images/img8.png";

const navLinks = [
  { label: "Accueil", href: "/#home", sectionId: "home" },
  { label: "À propos", href: "/about", sectionId: "about" },
  { label: "Services", href: "/services", sectionId: "services" },
  { label: "Projects", href: "/projects", sectionId: "projects" },
];

const sectionIds = ["home", "about", "services", "realisations"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";
  const activeSection = useScrollSpy(sectionIds, 140);

  const isActive = (link: any) => {
    // Cas 1 : landing page → scroll spy
    if (isLanding && link.sectionId) {
      return activeSection === link.sectionId;
    }

    // Cas 2 : pages internes → URL
    return location.pathname === link.href;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* ================= MOBILE MENU ================= */}
      <Dialog open={open} onClose={setOpen} className="relative lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

        <DialogPanel className="fixed top-0 right-0 z-10 w-[90%] max-w-sm sm:w-[75%] h-fit bg-gray-100 p-5 rounded-b-2xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] transition-transform duration-300">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm font-semibold tracking-wide">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-200 transition"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-5 text-sm sm:text-base">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.96 }}
                className={`font-medium transition ${
                  isActive(link)
                    ? "text-yellow-700"
                    : "text-black/90 hover:text-yellow-700"
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <div className="my-4 h-px bg-gray-300/60" />

            <a
              href="#login"
              className="flex items-center justify-center gap-2 rounded-full border border-yellow-700 px-4 py-2 text-sm font-medium text-yellow-700 hover:bg-yellow-700 hover:text-white transition"
            >
              <User className="size-4" />
              Espace client
            </a>

            <a
              href="/#contact"
              className="rounded-full bg-yellow-700 py-3 text-center text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Contactez-nous
            </a>
          </nav>
        </DialogPanel>
      </Dialog>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center rounded-b-2xl bg-white px-3 sm:px-4 shadow-[0_8px_20px_rgba(241,131,13,0.35)]">
          {/* Logo */}
          <a href="/#home" className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="Logo"
              className="h-9 sm:h-11 md:h-14 w-auto"
            />
            <div className="ml-2 flex flex-col">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-700">
                KALLISTI
              </h1>
              <p className="text-[0.6rem] text-gray-500">
                Think outside the box
              </p>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`relative text-sm font-medium transition ${
                    isActive(link)
                      ? "text-yellow-700 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-yellow-700"
                      : "text-black/90 hover:text-yellow-700"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            <a
              href="#login"
              className="flex items-center gap-2 rounded-full border border-yellow-700 px-4 py-1.5 text-sm font-medium text-yellow-700 hover:text-black/90 transition"
            >
              <User className="size-4" />
              Espace client
            </a>

            <a
              href="/#contact"
              className="rounded-full bg-yellow-700 px-4 py-2 text-sm font-medium text-white hover:bg-black/90 transition"
            >
              Contactez-nous
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="ml-auto rounded-md p-2 text-gray-600 hover:bg-gray-200 transition lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
