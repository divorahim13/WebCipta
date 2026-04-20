import Link from "next/link";
import Image from "next/image";
import { Check, X, ShieldAlert, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Arah Harga",
  description: "Transparansi harga untuk jasa desain dan pemrograman WebCipta. Tanpa biaya tersembunyi.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden border-b border-gray-200">
        {/* Deep visual texture */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-secondary-bg)] rounded-full blur-3xl opacity-50 -z-10 translate-x-1/4"></div>

        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Investasi. <br/>
              <span className="text-[var(--color-highlight)]">Tanpa Ambigu.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#52525B] leading-relaxed font-light mt-12 max-w-2xl">
              Model bisnis usang memaksa Anda membayar mahal demi menyewa seluruh sistem agensi. Di WebCipta, Anda cukup berinvestasi atas jam kerja satu *developer* andal.
            </p>
          </div>
        </div>
      </section>

      {/* The Mega Offer Block: Landing Page Starter */}
      <section className="py-24 bg-[#1C1B1A] relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          <div className="mb-12">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase block mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#94A3B8]"></span> Paket Awal
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white">Landing Page Starter</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-0 border border-[#334155] rounded-sm overflow-hidden bg-[#0F172A]">
            
            {/* Price and Core Info */}
            <div className="lg:col-span-5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-[#334155] relative overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-highlight)] rounded-full blur-[120px] opacity-10"></div>
               
               <div>
                  <div className="inline-block px-3 py-1 bg-[#1E293B] border border-[#334155] text-[10px] font-bold text-white uppercase tracking-widest mb-8">
                    Mulai Dari
                  </div>
                  <div className="flex items-start gap-1 mb-6">
                    <span className="text-2xl font-bold text-[#94A3B8] mt-1">Rp</span>
                    <span className="text-6xl md:text-[80px] font-black font-heading tracking-tighter text-white leading-none">550<span className="text-3xl text-[#94A3B8]">k</span></span>
                  </div>
                  
                  <div className="mb-10">
                     <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">Cocok Untuk</h4>
                     <p className="text-[15px] text-[#E2E8F0] font-light leading-relaxed">
                       UMKM, pemilik jasa, personal brand, promosi produk spesifik, atau *campaign* sederhana yang butuh konversi cepat.
                     </p>
                  </div>
                  <div className="mb-10">
                     <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">Estimasi Pengerjaan</h4>
                     <p className="text-[15px] text-[#E2E8F0] font-light leading-relaxed">
                       3-5 hari kerja (menyesuaikan kecepatan revisi dan ketersediaan materi konten dari klien).
                     </p>
                  </div>
               </div>

               <Link href="/contact" className="w-full mt-4 relative z-20">
                  <button className="w-full h-14 bg-white text-[#0F172A] font-bold text-[13px] uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Konsultasi Paket Ini
                  </button>
               </Link>
            </div>

            {/* Inclusions and Visual Proof */}
            <div className="lg:col-span-7 bg-[#18181A] flex flex-col">
               <div className="p-10 md:p-14 border-b border-[#334155] grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-highlight)] mb-4">Yang Termasuk</h4>
                    <ul className="space-y-4">
                      {["1 halaman website (Landing Page)", "Desain rapi dan responsif", "Basic SEO sudah termasuk", "Tombol WhatsApp / Form kontak", "Bantuan setting domain", "Hosting menggunakan Vercel (Gratis sejuta request)", "Website siap online"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[var(--color-highlight)] shrink-0 mt-0.5" />
                          <span className="text-[14px] text-[#CBD5E1] font-light leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-4">Belum Termasuk</h4>
                    <ul className="space-y-4">
                      {["Biaya pembelian domain (.com / .id)", "Fitur custom tambahan interaktif", "Halaman ekstra (Profile, Layanan terpisah)", "Sistem backend kompleks / Database khusus"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                          <span className="text-[14px] text-[#94A3B8] font-light leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
               
               {/* Visual Proof of the starter package */}
               <div className="p-10 md:p-14 flex-1 flex flex-col justify-center items-center relative overflow-hidden bg-[#0F172A]">
                 <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E\")"}}></div>
                 <div className="relative w-full max-w-[400px] aspect-[16/9] shadow-2xl border border-gray-800 rounded-sm overflow-hidden z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-4 bg-[#18181A] border-b border-gray-800 flex items-center px-2 z-10">
                      <div className="flex gap-1 opacity-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                      </div>
                    </div>
                    <Image 
                      src="/assets/work-starter.png" 
                      alt="Output Landing page starter murah berkualitas" 
                      fill 
                      className="object-cover mt-4 grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                 </div>
                 <p className="text-[11px] uppercase tracking-widest text-[#64748B] mt-6 text-center italic font-medium z-10">
                   Visualisasi Output Starter (Fokus Konversi Simpel)
                 </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-24 bg-white border-b border-gray-200">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
               <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mt-2 mb-4">Sistem Ekskalasi</h2>
               <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A]">Kebutuhan Lebih Rinci.</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-10 border border-gray-200 bg-[#FCFBF9] hover:border-[#18181A] transition-colors">
                  <h4 className="font-bold font-heading text-lg text-[#18181A] mb-3">Website Bisnis / Company Profile</h4>
                  <p className="text-[14px] text-[#52525B] leading-relaxed font-light mb-8">Membutuhkan beberapa halaman terpisah (Profile, Layanan, Kontak, Sejarah), dengan navigasi utuh.</p>
                  <div className="w-[30px] h-[2px] bg-[var(--color-highlight)] mb-4"></div>
                  <div className="text-[12px] font-bold text-[#18181A] uppercase tracking-wider">Harga Menyesuaikan</div>
               </div>

               <div className="p-10 border border-gray-200 bg-[#FCFBF9] hover:border-[#18181A] transition-colors">
                  <h4 className="font-bold font-heading text-lg text-[#18181A] mb-3">Website Katalog / Blog Utama</h4>
                  <p className="text-[14px] text-[#52525B] leading-relaxed font-light mb-8">Membutuhkan sistem manajemen konten (CMS) agar Anda bisa menambah artikel atau foto produk mandiri.</p>
                  <div className="w-[30px] h-[2px] bg-[var(--color-highlight)] mb-4"></div>
                  <div className="text-[12px] font-bold text-[#18181A] uppercase tracking-wider">Harga Menyesuaikan</div>
               </div>

               <div className="p-10 border border-gray-200 bg-[#FCFBF9] hover:border-[#18181A] transition-colors">
                  <h4 className="font-bold font-heading text-lg text-[#18181A] mb-3">Website Custom / Sistem Ringan</h4>
                  <p className="text-[14px] text-[#52525B] leading-relaxed font-light mb-8">Sistem form mutakhir, integrasi perhitungan harga otomatis, hingga dasbor database mini internal.</p>
                  <div className="w-[30px] h-[2px] bg-[var(--color-highlight)] mb-4"></div>
                  <div className="text-[12px] font-bold text-[#18181A] uppercase tracking-wider">Harga Disesuaikan Diskusi</div>
               </div>
            </div>
         </div>
      </section>

      {/* Educational Block: Kenapa Harga Berbeda */}
      <section className="py-24 bg-[#FCFBF9] relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
             
             {/* Component 1 */}
             <div>
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm">
                 <ShieldAlert className="w-5 h-5 text-[#18181A]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Kenapa Harga Bisa Berbeda?</h3>
               <p className="text-[#52525B] leading-relaxed font-light text-[15px] mb-6">
                 Harga website bisa sangat fluktuatif (berbeda) tergantung dari detail seperti: jumlah halaman, kebutuhan animasi fitur, kebutuhan sistem interaktif, integrasi eksternal, atau tingkat kompleksitas arsitektur backend.
               </p>
               <p className="text-[#52525B] leading-relaxed font-light text-[15px]">
                 WebCipta berdiri di misi efisiensi. Saya selaku eksekutor akan merekomendasikan setup yang *paling sesuai dan secukupnya* agar hasil akhir maksimal secara visual namun biaya tidak membengkak di awal. Saya menganjurkan pengembangan bertahap, bukan bayar mahal sekaligus.
               </p>
             </div>

             {/* Component 2 */}
             <div>
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm">
                 <Cpu className="w-5 h-5 text-[#18181A]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Kapan Cukup Vercel, Kapan Perlu Tambah Supabase/VPS?</h3>
               <p className="text-[#52525B] leading-relaxed font-light text-[15px] mb-6">
                 Banyak klien terjebak menyewa VPS (Server Mandiri) jutaan rupiah padahal tidak butuh. Di WebCipta, ini paduannya:
               </p>
               <ul className="space-y-4">
                  <li className="flex gap-3 items-start border-b border-gray-200 pb-3">
                     <span className="text-[var(--color-highlight)] font-bold text-lg leading-none mt-0.5">•</span>
                     <div>
                       <strong className="text-[#18181A] text-[14px]">Cukup Pakai Vercel (Gratis Server)</strong>
                       <p className="text-[#52525B] text-[13px] font-light mt-1">Sangat pas untuk Landing Page, Web Profil, Portofolio. Cepat dan aman.</p>
                     </div>
                  </li>
                  <li className="flex gap-3 items-start border-b border-gray-200 pb-3">
                     <span className="text-[var(--color-highlight)] font-bold text-lg leading-none mt-0.5">•</span>
                     <div>
                       <strong className="text-[#18181A] text-[14px]">Vercel + Supabase (Database Terskalakan)</strong>
                       <p className="text-[#52525B] text-[13px] font-light mt-1">Jika web butuh data dinamis, dashboard login, list produk atau input form berat.</p>
                     </div>
                  </li>
                  <li className="flex gap-3 items-start pb-3">
                     <span className="text-[var(--color-highlight)] font-bold text-lg leading-none mt-0.5">•</span>
                     <div>
                       <strong className="text-[#18181A] text-[14px]">Sewa VPS Mandiri</strong>
                       <p className="text-[#52525B] text-[13px] font-light mt-1">Hanya direkomendasikan jika sistem membutuhkan manajemen file masif, kontrol lalu lintas super padat, atau logika backend super kompleks (*Enterprise/Custom*).</p>
                     </div>
                  </li>
               </ul>
             </div>

          </div>
        </div>
      </section>

    </>
  );
}
