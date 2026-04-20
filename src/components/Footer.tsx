import Link from 'next/link';
import { MessageCircle, Briefcase, Camera, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 overflow-hidden text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Socials */}
        <div className="md:col-span-1">
          <div className="bg-white/10 w-max px-4 py-1 rounded-full mb-6">
            <h2 className="text-2xl font-bold font-heading text-white">WebCipta</h2>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We build beautiful & functional websites powered by AI-driven solutions to elevate your business.
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

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full mb-0.5"></span>Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full mb-0.5"></span>About</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full mb-0.5"></span>Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full mb-0.5"></span>Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full mb-0.5"></span>Contact</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full mb-0.5"></span>Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 text-gray-400">
           <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
           <ul className="space-y-6">
             <li className="flex items-start gap-4">
               <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
               <span>123 Innovation Drive, Tech District<br/>Jakarta, Indonesia 12190</span>
             </li>
             <li className="flex items-center gap-4">
               <Phone className="w-6 h-6 text-accent flex-shrink-0" />
               <span>+62 812 3456 7890</span>
             </li>
             <li className="flex items-center gap-4">
               <Mail className="w-6 h-6 text-accent flex-shrink-0" />
               <span>hello@webcipta.com</span>
             </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} WebCipta. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
