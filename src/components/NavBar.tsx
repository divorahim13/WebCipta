"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-muted/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">WebCipta</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link>
          <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</Link>
          <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">Blog</Link>
          <Link href="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-muted/20 absolute w-full left-0">
          <div className="flex flex-col px-4 py-4 space-y-4 shadow-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-2 py-1 text-sm font-medium hover:text-[var(--color-accent)]">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-2 py-1 text-sm font-medium hover:text-[var(--color-accent)]">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-2 py-1 text-sm font-medium hover:text-[var(--color-accent)]">Services</Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block px-2 py-1 text-sm font-medium hover:text-[var(--color-accent)]">Portfolio</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-2 py-1 text-sm font-medium hover:text-[var(--color-accent)]">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
