import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Arah Harga",
  description: "Transparansi harga untuk jasa desain dan pemrograman WebCipta. Tanpa biaya tersembunyi.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden">
        {/* Deep visual texture */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-secondary-bg)] rounded-full blur-3xl opacity-50 -z-10 translate-x-1/4"></div>

        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Satu Angka. <br/>
              <span className="text-[var(--color-highlight)]">Tanpa Ambigu.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#52525B] leading-relaxed font-light mt-12 max-w-2xl">
              Model bisnis yang tidak adil memaksa Anda membayar mahal demi menyewa seluruh sistem agensi. Di WebCipta, Anda cukup menyewa satu *developer* andal.
            </p>
          </div>
        </div>
      </section>

      {/* The Mega Offer Block */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl">

          <div className="bg-[#1C1B1A] rounded-[2px] shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-highlight)] rounded-full blur-[100px] opacity-10"></div>
            
            {/* The Price Focus */}
            <div className="md:w-5/12 bg-[#0F172A] p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#334155] relative z-10">
              <div className="inline-block px-3 py-1 bg-[#1E293B] border border-[#334155] text-[10px] font-bold text-white uppercase tracking-widest mb-8 w-max">
                Nilai Awal
              </div>
              <div className="flex items-start gap-1 mb-4">
                <span className="text-2xl font-bold text-[#94A3B8] mt-1">Rp</span>
                <span className="text-6xl md:text-[80px] font-black font-heading tracking-tighter text-white leading-none">550<span className="text-3xl text-[#94A3B8]">k</span></span>
              </div>
              <p className="text-[#94A3B8] font-light text-[15px] mb-8 leading-relaxed">
                Pembayaran satu kali untuk pengembangan dasar. Bukan langganan bulanan.
              </p>
              <Link href="/contact" className="w-full">
                 <button className="w-full h-14 bg-white text-[#0F172A] font-bold text-[13px] uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                   Mulai Proyek Ini
                 </button>
              </Link>
            </div>

            {/* The Inclusions Focus */}
            <div className="md:w-7/12 p-10 md:p-14 bg-[#1C1B1A] relative z-10">
               <h3 className="text-xl font-bold font-heading text-white mb-8 border-b border-[#334155] pb-4">Lingkup Pekerjaan Utama</h3>
               <ul className="space-y-4 mb-10">
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 rounded-full bg-[#334155] flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-[var(--color-highlight)]" />
                   </div>
                   <span className="text-[14px] text-[#E2E8F0] leading-relaxed">Desain 3 halaman estetik responsif.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 rounded-full bg-[#334155] flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-[var(--color-highlight)]" />
                   </div>
                   <span className="text-[14px] text-[#E2E8F0] leading-relaxed">Pengembangan spesifik (Next.js & Tailwind). Bukan WordPress/Wix.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 rounded-full bg-[#334155] flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-[var(--color-highlight)]" />
                   </div>
                   <span className="text-[14px] text-[#E2E8F0] leading-relaxed">Formulir kontak terhubung langsung ke e-mail bisnis/WhatsApp.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 rounded-full bg-[#334155] flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-[var(--color-highlight)]" />
                   </div>
                   <span className="text-[14px] text-[#E2E8F0] leading-relaxed">Dukungan teknis migrasi domain dan deploy server gratis (Edge Node).</span>
                 </li>
               </ul>

               <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#64748B] uppercase mb-4">Hal Tambahan (Opsional)</h3>
               <ul className="space-y-3">
                 <li className="flex items-start gap-3">
                   <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-[1px]">
                     <span className="w-[1px] h-3 bg-gray-600 rotate-45 absolute"></span>
                     <span className="w-[1px] h-3 bg-gray-600 -rotate-45 absolute"></span>
                   </div>
                   <span className="text-[13px] text-[#94A3B8]">Domain Premium (.com / .id) + Rp150-250k / Tahun</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-[1px]">
                     <span className="w-[1px] h-3 bg-gray-600 rotate-45 absolute"></span>
                     <span className="w-[1px] h-3 bg-gray-600 -rotate-45 absolute"></span>
                   </div>
                   <span className="text-[13px] text-[#94A3B8]">Ekstra Halaman Desain (Custom)</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Assurance / Trust Signals */}
      <section className="py-24 bg-[#FCFBF9] border-t border-gray-200/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-4">Sistem Operasional</h2>
              <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Lupakan Biaya Server Bulanan.</h3>
              <p className="text-[#52525B] leading-relaxed font-light text-[15px]">
                Situs profil sederhana umumnya tidak membutuhkan server "dedicated" senilai jutaan rupiah. Kami mengarahkan sistem situs Anda untuk di-host di layanan Edge Network skala global, yang menyediakan tingkat *hobby-tier gratis seumur hidup*.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-4">Transparansi Kepemilikan</h2>
              <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Akses Repo Sepenuhnya.</h3>
              <p className="text-[#52525B] leading-relaxed font-light text-[15px]">
                Anda tidak akan pernah ditahan. Seluruh *source code* dikirimkan kepada Anda. Anda memegang kontrol Github/Server Anda. Jika Anda ingin pindah atau menugaskan developer lain ke depannya, kode 100% milik Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
