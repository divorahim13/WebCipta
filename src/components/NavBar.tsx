"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-white/95 backdrop-blur-md border-gray-100 py-2 shadow-sm" : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold font-heading tracking-tight text-[#18181A]">WebCipta<span className="text-[var(--color-highlight)]">.</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-[#52525B]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors relative after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:bg-[#18181A] after:transition-all hover:text-[#18181A] hover:after:w-full ${
                isActive(link.href) ? "text-[#18181A] after:w-full" : "after:w-0"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link href="/contact" className="ml-2">
            <Button size="sm" className="font-bold tracking-widest uppercase">Mulai Proyek</Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-[#18181A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-full shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.href) ? "text-[var(--color-highlight)]" : "text-[#18181A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Mulai Proyek</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
