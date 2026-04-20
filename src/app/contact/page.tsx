import ContactForm from "@/components/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Konsultasi & Kontak",
  description: "Bicarakan visi digital brand Anda. Bebas komitmen sebelum kesepakatan.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Buka Jalur <br/>
              <span className="text-[var(--color-highlight)]">Komunikasi.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Split Contact Board */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200">
            
            {/* Context Panel Left */}
            <div className="lg:w-5/12 bg-[#1C1B1A] p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-highlight)] to-transparent"></div>
              
              <div>
                <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-10 block">Prinsip Respons</h2>
                <h3 className="text-3xl font-bold font-heading mb-6 leading-tight">Tak Ada Pertanyaan yang Terlalu Dini.</h3>
                <p className="text-[#94A3B8] leading-relaxed mb-12 font-light text-[15px]">
                  Banyak calon klien menghubungiku hanya bermodalkan gagasan kasar dan catatan coretan tangan. Formulir ini dirancang untuk memulai perbincangan awal yang mendalam, santai, dan tanpa ikatan biaya apapun di depan.
                </p>
                <div className="w-12 h-[1px] bg-[#334155] mb-12"></div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 border border-[#334155] flex items-center justify-center shrink-0 bg-[#0F172A]">
                       <Mail className="w-4 h-4 text-[var(--color-highlight)]" />
                     </div>
                     <div>
                       <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1">E-mail Personal</div>
                       <div className="font-medium text-[#E2E8F0]">hello@webcipta.id</div>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 border border-[#334155] flex items-center justify-center shrink-0 bg-[#0F172A]">
                       <MapPin className="w-4 h-4 text-[var(--color-highlight)]" />
                     </div>
                     <div>
                       <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Wilayah Basis</div>
                       <div className="font-medium text-[#E2E8F0]">Kawasan Cibubur - Jawa Barat</div>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 border border-[#334155] flex items-center justify-center shrink-0 bg-[#0F172A]">
                       <Clock className="w-4 h-4 text-[var(--color-highlight)]" />
                     </div>
                     <div>
                       <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Jendela Respon</div>
                       <div className="font-medium text-[#E2E8F0]">Maksimal 1 x 24 Jam Kerja</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Panel Right */}
            <div className="lg:w-7/12 bg-white p-10 md:p-16 relative">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
