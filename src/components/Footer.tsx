import Link from 'next/link';
import { MessageCircle, Briefcase, Camera, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] overflow-hidden text-[#A1A1AA] py-20 border-t border-muted/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand & Socials */}
        <div className="md:col-span-1 border-r border-[#27272A] pr-8 hidden md:block">
          <div className="mb-6">
            <h2 className="text-3xl font-black font-heading text-white tracking-tight">WebCipta<span className="text-indigo-500">.</span></h2>
          </div>
          <p className="text-sm text-[#A1A1AA] mb-8 leading-relaxed">
            Jasa pembuatan website untuk bisnis, UMKM, dan personal brand. Cepat, rapi, dan terjangkau.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
               <Camera className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-1 md:-ml-4 block md:hidden">
          <div className="mb-6">
            <h2 className="text-3xl font-black font-heading text-white tracking-tight">WebCipta<span className="text-indigo-500">.</span></h2>
          </div>
          <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
            Jasa pembuatan website untuk bisnis, UMKM, dan personal brand. Cepat, rapi, dan terjangkau.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#27272A] flex items-center justify-center hover:border-indigo-500 hover:text-white transition-all">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#27272A] flex items-center justify-center hover:border-indigo-500 hover:text-white transition-all">
              <Briefcase className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#27272A] flex items-center justify-center hover:border-indigo-500 hover:text-white transition-all">
               <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pl-8">
          <h3 className="text-white font-semibold font-heading mb-6 tracking-wide text-sm">Navigasi Utama</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Layanan Website</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Paket & Harga</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 text-[#A1A1AA]">
           <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#27272A]">
             <h3 className="text-white font-semibold font-heading tracking-wide text-sm">Bicara dengan Kami</h3>
             <Link href="/contact" className="text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all">
               Mulai Konsultasi
             </Link>
           </div>
           <ul className="space-y-4 text-sm mt-8">
             <li className="flex items-start gap-4">
               <div className="p-2 rounded-lg bg-[#18181B] border border-[#27272A]"><MapPin className="w-4 h-4 text-white" /></div>
               <span className="mt-1">Cibubur dan sekitarnya<br/>Jawa Barat, Indonesia</span>
             </li>
             <li className="flex items-center gap-4">
               <div className="p-2 rounded-lg bg-[#18181B] border border-[#27272A]"><Phone className="w-4 h-4 text-white" /></div>
               <span>+62 812 3456 7890</span>
             </li>
             <li className="flex items-center gap-4">
               <div className="p-2 rounded-lg bg-[#18181B] border border-[#27272A]"><Mail className="w-4 h-4 text-white" /></div>
               <span>hello@webcipta.com</span>
             </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center text-xs text-[#71717A]">
        <p>&copy; {new Date().getFullYear()} WebCipta. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
