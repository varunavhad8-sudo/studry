"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Portfolio", href: "/#video-testimonials" },
  { name: "Process",   href: "/#process" },
  { name: "About",     href: "/#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? /* Scrolled: white glass nav with border + shadow (no dark-mode blur trick) */
              "bg-white/90 backdrop-blur-md border-b border-surface-border shadow-surface py-4"
            : /* Top: fully transparent, logo+links readable against page */
              "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-[80px] flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 text-2xl font-heading font-black tracking-tighter text-black"
          >
            STUDRY<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button variant="primary" className="py-2 px-6 text-sm">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Hamburger — dark lines on white background */}
          <button
            className="relative z-50 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-textPrimary transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-textPrimary transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-textPrimary transition-transform duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Menu — white background, dark text */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white border-l border-surface-border flex flex-col justify-center items-center shadow-contact"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-heading font-bold text-textPrimary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8"
              >
                <Button variant="primary" className="py-4 px-10 text-lg">
                  Contact Us
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
