import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak Konsultasi | WebCipta Cibubur",
  description: "Ada pertanyaan? Ingin mulai buat website? Hubungi WebCipta, agency website dengan harga terjangkau di Cibubur.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-24 selection:bg-indigo-100">
      
      {/* Header Section */}
      <section className="bg-[#FCFCFC] pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-end">
          <div className="md:w-3/5">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Mulai Diskusi</span>
             <h1 className="text-4xl md:text-6xl font-black font-heading text-[#18181A] tracking-tight leading-[1.1]">
               Punya Rencana <br/>Bikin <span className="text-[var(--color-accent)]">Website?</span>
             </h1>
          </div>
          <div className="md:w-2/5 pb-2">
            <p className="text-[#52525B] text-lg leading-relaxed">
              Mari konsultasi awal dengan santai. Tanyakan saja apa pun, tim kami siap mengarahkan solusi terbaik sesuai budget Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Contact Details & Info */}
            <div className="lg:w-5/12 space-y-16">
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-[#18181A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 font-heading text-lg tracking-tight">Lokasi Operasional</h4>
                    <p className="text-[#52525B] leading-relaxed">Cibubur dan sekitarnya<br/>Jawa Barat, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-[#18181A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 font-heading text-lg tracking-tight">Email Beranda</h4>
                    <p className="text-[#52525B] leading-relaxed">halo@webcipta.com<br/><span className="text-sm text-gray-400">Terespons 1x24 jam</span></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-[#18181A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 font-heading text-lg tracking-tight">Telepon / WhatsApp</h4>
                    <p className="text-[#52525B] leading-relaxed">+62 811 XXXX XXXX<br/><span className="text-sm text-gray-400">Hanya Chat WA (Aktif Penuh)</span></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-[#18181A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 font-heading text-lg tracking-tight">Jam Kerja</h4>
                    <p className="text-[#52525B] leading-relaxed">Senin - Jumat: 09:00 - 17:00<br/><span className="text-sm text-gray-400">Sabtu - Minggu: Fleksibel</span></p>
                  </div>
                </div>
              </div>

              {/* Minimal Map Overlay */}
              <div className="w-full h-48 bg-gray-50 border border-gray-200 flex items-center justify-center relative overflow-hidden grayscale contrast-125 rounded-2xl">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d126907.03964126209!2d106.81938531238914!3d-6.381335359437996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6994cfb159fced%3A0xc6cb14df6307ec32!2sCibubur%2C%20Kec.%20Ciracas%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) opacity(70%)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-7/12">
              <div className="bg-[#FCFCFC] p-8 md:p-12 border border-gray-200">
                <h3 className="text-2xl font-bold mb-8 font-heading text-[#18181A] tracking-tight">Kirimkan Deskripsi Kebutuhan Anda</h3>
                <ContactForm />
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                     <div>
                        <h4 className="font-bold text-[#18181A] font-heading tracking-tight mb-1">Butuh Ngobrol Langsung?</h4>
                        <p className="text-[#52525B] text-sm hidden sm:block">Tim kami siap merespons cepat via Chat.</p>
                     </div>
                     <a href="#" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white border border-[#18181A] text-[#18181A] hover:bg-[#18181A] hover:text-white font-bold transition-colors text-sm">
                       Chat WhatsApp
                     </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
