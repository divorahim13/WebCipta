import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Tanya Jawab & Kontak",
  description: "Hubungi WebCipta untuk memulai diskusi mengenai kebutuhan website, pembuatan landing page, dan konsultasi SEO.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-secondary-bg)] -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black font-heading text-[#18181A] mb-8 tracking-tight leading-tight">
              Akses Langsung ke<br/>
              <span className="text-[var(--color-accent)]">Tim Pengembang.</span>
            </h1>
            <p className="text-lg text-[#52525B] mb-12 font-light leading-relaxed">
              Kirimkan brief proyek Anda atau sekadar bertanya. Kami usahakan merespon dalam waktu maksimal 24 jam dengan estimasi harga dan jadwal transparan.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 border border-gray-200 bg-[#F8FAFC] flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-[#18181A]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-[#18181A]">Alamat Email</h3>
                  <a href="mailto:halo@webcipta.com" className="text-[#52525B] hover:text-[var(--color-accent)] transition-colors">
                    halo@webcipta.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 border border-gray-200 bg-[#F8FAFC] flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-[#18181A]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-[#18181A]">Telepon / WhatsApp</h3>
                  <a href="https://wa.me/62811xxxx" target="_blank" rel="noreferrer" className="text-[#52525B] hover:text-[var(--color-accent)] transition-colors">
                    +62 811 XXXX XXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#0F172A] text-white shadow-lg">
                <div className="w-10 h-10 border border-[#334155] bg-[#1E293B] flex items-center justify-center shrink-0">
                   <MapPin className="w-5 h-5 text-[var(--color-highlight)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Area Operasional</h3>
                  <p className="text-[#94A3B8]">
                    Berpusat di Cibubur.<br/>
                    Remote ke seluruh Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Component */}
          <div className="bg-white lg:mt-32">
            <h2 className="text-2xl font-bold font-heading text-[#18181A] mb-8">Sapa Kami Secara Digital</h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
