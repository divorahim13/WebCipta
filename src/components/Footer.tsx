"use client";

import Link from 'next/link';
import { MessageCircle, Briefcase, Camera, Mail, Phone, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import FadeUp from './motion/FadeUp';
import StaggerContainer, { StaggerItem } from './motion/StaggerContainer';
import { EASE_OUT } from './motion/variants';

export default function Footer() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.footer
      className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-[#1E293B]"
      initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

        {/* Brand & Socials */}
        <FadeUp className="md:col-span-4 lg:col-span-5 pr-0 md:pr-8">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-black font-heading tracking-tight">
                WebCipta<span className="text-[var(--color-highlight)]">.</span>
              </h2>
            </div>
            <p className="text-[#94A3B8] leading-relaxed mb-10 max-w-sm">
              WebCipta adalah jasa pembuatan website profesional untuk bisnis lokal, UMKM, dan personal brand.
            </p>
            <div className="flex gap-4">
              {[
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Briefcase, label: "Portfolio" },
                { icon: Camera, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 border border-[#334155] rounded flex items-center justify-center text-[#94A3B8]"
                  whileHover={shouldReduce ? {} : {
                    borderColor: "#FFFFFF",
                    backgroundColor: "#FFFFFF",
                    color: "#0F172A",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Quick Links */}
        <FadeUp delay={0.08} className="md:col-span-3 lg:col-span-3">
          <div>
            <h3 className="font-bold font-heading mb-6 tracking-widest text-xs uppercase text-[#64748B]">Navigasi</h3>
            <ul className="space-y-4">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang Kami", href: "/about" },
                { name: "Layanan", href: "/services" },
                { name: "Harga", href: "/pricing" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <motion.div
                    whileHover={shouldReduce ? {} : { x: 4 }}
                    transition={{ duration: 0.15, ease: EASE_OUT }}
                  >
                    <Link
                      href={link.href}
                      className="text-[#CBD5E1] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Contact Status */}
        <FadeUp delay={0.14} className="md:col-span-5 lg:col-span-4">
          <div>
            <h3 className="font-bold font-heading mb-6 tracking-widest text-xs uppercase text-[#64748B]">Status & Kontak</h3>

            <div className="p-5 border border-[#1E293B] bg-[#0B1120] rounded-sm mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-highlight)] animate-pulse" />
                <span className="font-semibold text-sm">Menerima Klien Baru</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Kapasitas studio tersedia untuk 2 proyek website bulan ini.
              </p>
            </div>

            <ul className="space-y-5 text-sm text-[#CBD5E1]">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 mt-0.5 text-[#64748B] shrink-0" />
                <span className="leading-relaxed">Cibubur dan sekitarnya<br />Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-[#64748B] shrink-0" />
                <span>+62 811 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-[#64748B] shrink-0" />
                <span>halo@webcipta.com</span>
              </li>
            </ul>
          </div>
        </FadeUp>

      </div>

      {/* Bottom Bar */}
      <FadeUp delay={0.2} className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#1E293B]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
          <p>&copy; {new Date().getFullYear()} WebCipta Studio. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-6 font-medium">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <motion.div
                key={label}
                whileHover={shouldReduce ? {} : { color: "#FFFFFF" }}
                transition={{ duration: 0.15 }}
              >
                <Link href="#" className="hover:text-white transition-colors">{label}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeUp>
    </motion.footer>
  );
}
