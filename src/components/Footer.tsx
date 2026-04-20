import Link from "next/link";
import { Mail, Phone, MapPin, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--muted)]/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-[var(--color-accent)]" />
              <span className="text-xl font-bold tracking-tight">WebCipta</span>
            </Link>
            <p className="text-sm text-[var(--muted)] max-w-xs">
              Your partner for stunning websites. Specializing in modern, high-performance, AI-enhanced web solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/services#web-design" className="hover:text-[var(--color-accent)] transition-colors">Web Design</Link></li>
              <li><Link href="/services#custom-dev" className="hover:text-[var(--color-accent)] transition-colors">Custom Development</Link></li>
              <li><Link href="/services#seo" className="hover:text-[var(--color-accent)] transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services#ai" className="hover:text-[var(--color-accent)] transition-colors">AI Web Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                <span>123 Innovation Drive, Tech City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <span>hello@webcipta.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--muted)]/20 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} WebCipta Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
