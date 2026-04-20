"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { EASE_OUT, EASE_IN_OUT } from "./motion/variants";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Harga", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => pathname === path;

  // Mobile menu animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : -8,
      transition: { duration: 0.15, ease: EASE_IN_OUT },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.22,
        ease: EASE_OUT,
        staggerChildren: shouldReduce ? 0 : 0.05,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduce ? 0 : -6,
      transition: { duration: 0.15, ease: EASE_IN_OUT },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: shouldReduce ? 0 : -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: EASE_OUT } },
    exit: { opacity: 0, x: shouldReduce ? 0 : -4 },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-gray-100 py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.span
            className="text-xl font-bold font-heading tracking-tight text-[#18181A]"
            whileHover={shouldReduce ? {} : { letterSpacing: "-0.025em" }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            WebCipta<span className="text-[var(--color-highlight)]">.</span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-[#52525B]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors duration-200 py-1 hover:text-[#18181A] ${
                isActive(link.href) ? "text-[#18181A]" : ""
              }`}
            >
              {link.name}
              {/* Animated underline — slides in from left on hover, stays when active */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#18181A] rounded-full"
                initial={false}
                animate={{ width: isActive(link.href) ? "100%" : "0%" }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
              />
            </Link>
          ))}

          <Link href="/contact" className="ml-2">
            <Button size="sm" className="font-bold tracking-widest uppercase">
              Mulai Proyek
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden p-2 text-[#18181A] relative"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={shouldReduce ? {} : { scale: 0.92 }}
          transition={{ duration: 0.1 }}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="x"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-gray-100 absolute w-full left-0 top-full shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm font-bold uppercase tracking-wider border-b border-gray-50 last:border-0 transition-colors ${
                      isActive(link.href)
                        ? "text-[var(--color-highlight)]"
                        : "text-[#18181A] hover:text-[var(--color-highlight)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-4 mt-2 border-t border-gray-100">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Mulai Proyek</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
