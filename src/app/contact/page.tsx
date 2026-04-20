import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak Konsultasi | WebCipta Cibubur",
  description: "Ada pertanyaan? Ingin mulai buat website? Hubungi WebCipta, agency website dengan harga terjangkau di Cibubur.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Header Section */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground font-heading">
            Punya Rencana Bikin <span className="text-[var(--color-accent)]">Website?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Mari konsultasi awal dengan santai. Tanyakan saja apa pun, tim kami siap mengarahkan solusi terbaik sesuai budget bisnis Anda.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6 font-heading">Hubungi WebCipta</h2>
                <p className="text-muted text-lg mb-8">
                  Apakah Anda sudah punya desain spesifik, atau baru mematangkan ide awal? Tinggalkan pesan, developer kami yang akan merespons langsung.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Lokasi Operasional</h4>
                    <p className="text-muted">Cibubur dan sekitarnya<br/>Jawa Barat, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Kami</h4>
                    <p className="text-muted">halo@webcipta.com<br/>Terespons 1x24 jam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Nomor Telepon / WA</h4>
                    <p className="text-muted">+62 811 XXXX XXXX<br/>Hanya chat WA (Aktif)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Jam Kerja</h4>
                    <p className="text-muted">Senin - Jumat: 09:00 - 17:00<br/>Sabtu - Minggu: Fleksibel</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 bg-muted/20 rounded-2xl overflow-hidden border border-muted/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sid!4v1684307406282!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form Component */}
            <div className="bg-muted/5 p-8 md:p-10 rounded-3xl border border-muted/20 shadow-xl shadow-black/5">
              <h3 className="text-2xl font-bold mb-6 font-heading">Kirimkan Deskripsi Kebutuhan Anda</h3>
              <ContactForm />
              
              <div className="mt-10 pt-8 border-t border-muted/20 text-center space-y-4">
                <h4 className="font-semibold text-lg">Atau butuh ngobrol via Chat?</h4>
                <p className="text-muted text-sm">Klik di bawah untuk langsung terhubung ke WhatsApp developer kami.</p>
                <a href="#" className="inline-block w-full sm:w-auto px-8 py-3 bg-green-500 text-white hover:bg-green-600 font-bold rounded-xl transition shadow border border-green-600/50">
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
