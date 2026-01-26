"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Menu, User, X } from "lucide-react";
import logoImg from "../../assets/images/img8.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

        <DialogPanel
          className="fixed inset-y-0 right-0 h-[70%] w-[60%] max-w-xs bg-gray-100 p-4 z-10 rounded-b-2xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] transition-transform duration-300"
        >
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <span className="text-base font-semibold tracking-wide">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-6 text-base">
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-indigo-600"
            >
              Projects
            </a>

            <div className="my-4 h-px bg-gray-200" />

            {/* Espace client (mobile) */}
            <a
              href="#"
              className=" flex items-center gap-2 rounded-full border border-current px-4 py-1.5 text-sm font-medium text-yellow-700 transition-colors duration-200 hover:text-indigo-600
              "
            >
              <User className="size-4" />
              Espace client
            </a>

            <a
              href="#"
              className=" mt-2rounded-full bg-yellow-700py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-700 "
            >
              Contact us
            </a>
          </nav>
        </DialogPanel>
      </Dialog>

      {/* Desktop Navbar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex h-15 items-center rounded-b-2xl bg-white px-4 shadow-[0_8px_20px_rgba(241,131,13,0.35)]
          "
        >
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="#">
              <img
                src={logoImg}
                alt="Logo"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </a>

            <div className="ml-2 flex flex-col justify-center">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-700">
                KALLISTI
              </h1>
              <p className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] text-gray-500">
                Think outside the box
              </p>
            </div>
          </div>

          {/* Center menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-10">
              <a
                href="#"
                className="text-sm font-medium text-black/90 hover:text-yellow-700"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-black/90 hover:text-yellow-700"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium text-black/90 hover:text-yellow-700"
              >
                Services
              </a> <a
                href="#"
                className="text-sm font-medium text-black/90 hover:text-yellow-700"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-current px-4 py-1.5   text-sm font-medium text-yellow-700  transition-colors duration-200  hover:text-black/90 "
            >
              <User className="size-4" />
              Espace client
            </a>

            <a
              href="#"
              className="rounded-full bg-yellow-700 px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              Contact us
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="ml-auto rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
