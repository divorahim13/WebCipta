import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, Cpu, Check } from "lucide-react";

export const metadata = {
  title: "Harga Layanan",
  description: "Transparansi harga jasa pembuatan website WebCipta. Mulai dari Rp550.000 untuk Landing Page.",
};

const pricingPackages = [
  { title: "Landing Page", price: "550.000", suffix: "" },
  { title: "Website Portofolio", price: "900.000", suffix: "" },
  { title: "Website Profil Bisnis", price: "1.200.000", suffix: "" },
  { title: "Website Event / Pendaftaran", price: "1.300.000", suffix: "" },
  { title: "Website Company Profile", price: "1.500.000", suffix: "" },
  { title: "Website Blog / Artikel", price: "1.800.000", suffix: "" },
  { title: "Website Katalog Produk", price: "1.800.000", suffix: "" },
  { title: "Website Toko Online Sederhana", price: "2.800.000", suffix: "" },
  { title: "Website Custom / Sistem Sederhana", price: "3.500.000", suffix: "" },
  { title: "Maintenance / Update Website", price: "200.000", suffix: " per bulan" }
];

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-secondary-bg)] rounded-full blur-3xl opacity-50 -z-10 translate-x-1/4"></div>

        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Investasi. <br/>
              <span className="text-[var(--color-highlight)]">Tanpa Ambigu.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#52525B] leading-relaxed font-light mt-12 max-w-2xl">
              Model agensi usang memaksa Anda membayar mahal demi menyewa seluruh sistem operasional mereka. Di WebCipta, Anda mendapatkan struktur rancangan harga yang jelas, proporsional, dan terukur murni berdasarkan kebutuhan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Pricing Overview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-16">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mt-2 mb-4">Skala Biaya</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A]">Pilihan Paket Dasar</h3>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pricingPackages.map((pkg, idx) => (
                 <div key={idx} className="p-8 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-[#FCFBF9] group">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                       <span>Pilihan {String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h4 className="font-bold font-heading text-lg text-[#18181A] mb-8 group-hover:text-[var(--color-highlight)] transition-colors">{pkg.title}</h4>
                    <div>
                       <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">Mulai Dari</div>
                       <div className="flex items-end gap-1">
                          <span className="text-lg font-bold text-[#18181A] mb-1">Rp</span>
                          <span className="text-3xl font-black font-heading tracking-tight text-[#18181A]">{pkg.price}</span>
                          {pkg.suffix && <span className="text-sm text-[#94A3B8] font-medium mb-1">{pkg.suffix}</span>}
                       </div>
                    </div>
                 </div>
              ))}
           </div>

           {/* Core Exclusions & Customization Note */}
           <div className="max-w-4xl mx-auto bg-[#F8FAFC] border border-gray-200 p-8 md:p-10 text-[14px]">
              <h4 className="font-bold text-[#18181A] mb-4 uppercase tracking-wider text-[11px]">Catatan Penting</h4>
              <ul className="space-y-3 text-[#52525B] font-light">
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)] shrink-0 mt-1.5"></div>
                   <span>Biaya domain .com / .id menyesuaikan harga pasar (*registrar*).</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)] shrink-0 mt-1.5"></div>
                   <span>Penambahan halaman ekstra menyesuaikan tingkat kompleksitas.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)] shrink-0 mt-1.5"></div>
                   <span>Fitur keamanan *custom* atau kebutuhan manajemen *database* dihitung terpisah.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)] shrink-0 mt-1.5"></div>
                   <span className="font-medium text-[#18181A]">Harga final selalu didiskusikan transparan mengikuti arah dan kebutuhan proyek Anda.</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Educational Block: Kenapa Harga Berbeda */}
      <section className="py-24 bg-[#FCFBF9] border-t border-gray-200/80">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
             
             <div>
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm">
                 <ShieldAlert className="w-5 h-5 text-[#18181A]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Kenapa Harga Bisa Berbeda?</h3>
               <p className="text-[#52525B] leading-relaxed font-light text-[15px] mb-6">
                 Biaya jasa pembuatan website sangat fluktuatif karena melibatkan banyak elemen custom: dari jumlah benturan tampilan halaman, kebutuhan interaktif logika fitur, sinkronisasi platform lain, hingga kerumitan arsitektur data.
               </p>
               <p className="text-[#52525B] leading-relaxed font-light text-[15px]">
                 WebCipta berdiri di misi efisiensi. Kami akan mengevaluasi kebutuhan Anda lalu memberikan saran teknologi *paling masuk akal secukupnya*. Kami lebih menganjurkan iterasi pengembangan berkelanjutan dibandingkan meminta Anda membayar mahal di muka untuk fitur yang belum tentu terpakai.
               </p>
             </div>

             <div>
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm">
                 <Cpu className="w-5 h-5 text-[#18181A]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Kapan Cukup Vercel, Kapan Perlu Tambah Supabase/VPS?</h3>
               <p className="text-[#52525B] leading-relaxed font-light text-[15px] mb-6">
                 Banyak klien terjebak menyewa Server Mandiri jutaan rupiah padahal tidak digunakan optimal. Panduan kami:
               </p>
               <ul className="space-y-4">
                  <li className="flex gap-3 items-start border-b border-gray-200 pb-3">
                     <span className="text-[var(--color-highlight)] font-bold text-lg leading-none mt-0.5">•</span>
                     <div>
                       <strong className="text-[#18181A] text-[14px]">Cukup Pakai Vercel (Gratis Server)</strong>
                       <p className="text-[#52525B] text-[13px] font-light mt-1">Sangat ideal untuk *Landing Page*, Web Profil B2B, atau Portofolio. Kencang dan efisien.</p>
                     </div>
                  </li>
                  <li className="flex gap-3 items-start border-b border-gray-200 pb-3">
                     <span className="text-[var(--color-highlight)] font-bold text-lg leading-none mt-0.5">•</span>
                     <div>
                       <strong className="text-[#18181A] text-[14px]">Vercel + Supabase (Database Terskalakan)</strong>
                       <p className="text-[#52525B] text-[13px] font-light mt-1">Jika website membutuhkan panel administrasi untuk pembaruan blog dan manajemen data konten rutin.</p>
                     </div>
                  </li>
                  <li className="flex gap-3 items-start pb-3">
                     <span className="text-[var(--color-highlight)] font-bold text-lg leading-none mt-0.5">•</span>
                     <div>
                       <strong className="text-[#18181A] text-[14px]">Sewa VPS Mandiri</strong>
                       <p className="text-[#52525B] text-[13px] font-light mt-1">Diutamakan untuk logika infrastruktur kompleks (*Enterprise* atau *Custom Platform*).</p>
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
