import Link from 'next/link';
import { ArrowRight, MessageCircle, Briefcase, Camera, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Brand & Socials Section */}
        <div className="md:col-span-4 lg:col-span-5 pr-0 md:pr-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black font-heading tracking-tight">WebCipta<span className="text-[var(--color-highlight)]">.</span></h2>
          </div>
          <p className="text-[#94A3B8] leading-relaxed mb-10 max-w-sm">
            WebCipta adalah jasa pembuatan website profesional untuk bisnis lokal, UMKM, dan personal brand.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="WhatsApp" className="w-10 h-10 border border-[#334155] rounded flex items-center justify-center hover:border-white hover:bg-white hover:text-[#0F172A] transition-all">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Portfolio" className="w-10 h-10 border border-[#334155] rounded flex items-center justify-center hover:border-white hover:bg-white hover:text-[#0F172A] transition-all">
              <Briefcase className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 border border-[#334155] rounded flex items-center justify-center hover:border-white hover:bg-white hover:text-[#0F172A] transition-all">
               <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 lg:col-span-3">
          <h3 className="font-bold font-heading mb-6 tracking-widest text-xs uppercase text-[#64748B]">Navigasi</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-[#CBD5E1] hover:text-white transition-colors">Beranda</Link></li>
            <li><Link href="/about" className="text-[#CBD5E1] hover:text-white transition-colors">Tentang Kami</Link></li>
            <li><Link href="/services" className="text-[#CBD5E1] hover:text-white transition-colors">Layanan</Link></li>
            <li><Link href="/pricing" className="text-[#CBD5E1] hover:text-white transition-colors">Harga</Link></li>
            <li><Link href="/faq" className="text-[#CBD5E1] hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Status */}
        <div className="md:col-span-5 lg:col-span-4">
           <h3 className="font-bold font-heading mb-6 tracking-widest text-xs uppercase text-[#64748B]">Status & Kontak</h3>
           
           <div className="p-5 border border-[#1E293B] bg-[#0B1120] rounded-sm mb-8">
              <div className="flex items-center gap-3 mb-2">
                 <span className="w-2 h-2 rounded-full bg-[var(--color-highlight)] animate-pulse"></span>
                 <span className="font-semibold text-sm">Menerima Klien Baru</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                 Kapasitas studio tersedia untuk 2 proyek website bulan ini.
              </p>
           </div>

           <ul className="space-y-5 text-sm text-[#CBD5E1]">
             <li className="flex items-start gap-4">
               <MapPin className="w-4 h-4 mt-0.5 text-[#64748B] shrink-0" />
               <span className="leading-relaxed">Cibubur dan sekitarnya<br/>Jawa Barat, Indonesia</span>
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

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
        <p>&copy; {new Date().getFullYear()} WebCipta Studio. Seluruh hak cipta dilindungi.</p>
        <div className="flex gap-6 font-medium">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
