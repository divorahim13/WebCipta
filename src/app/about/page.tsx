import Link from "next/link";
import { MoveRight, Code2, Users, Rocket, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Tentang Kami",
  description: "Mengenal lebih dekat visi WebCipta sebagai agensi pembuatan website andalan UMKM dan bisnis lokal di Cibubur.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-60"></div>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl pt-8">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Di Balik <span className="text-[var(--color-accent)] relative inline-block">
                 Kode.
                 <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-gray-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#52525B] leading-relaxed font-light mt-12 max-w-2xl">
              Sebuah observasi sederhana: Mayoritas pemilik bisnis kecil terjebak di persimpangan antara solusi yang terlalu murahan (namun lambat), atau terlalu eksklusif (dan sangat mahal).
            </p>
          </div>
        </div>
      </section>

      {/* Deep Layout Structural Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-0 border border-gray-200">
            {/* The Agency Core Problem */}
            <div className="lg:col-span-6 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-[#FCFBF9]">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-10 block">Realita Industri</h2>
              <div className="space-y-8">
                 <div>
                   <h3 className="font-bold font-heading text-xl text-[#18181A] mb-3">Opsi A: Template Menyesatkan</h3>
                   <p className="text-[#52525B] leading-relaxed font-light text-[15px]">Membangun sendiri menggunakan 'Template Builder' gratisan memang tampak mudah. Namun hasil akhirnya seringkali generik, membengkak secara ukuran *file*, dan dikalahkan kompetitor pada sisi kecepatan SEO.</p>
                 </div>
                 <div className="w-8 h-[1px] bg-gray-300"></div>
                 <div>
                   <h3 className="font-bold font-heading text-xl text-[#18181A] mb-3">Opsi B: Agensi Eksklusif</h3>
                   <p className="text-[#52525B] leading-relaxed font-light text-[15px]">Menyewa tim corporate. Memang indah dan sempurna, namun bisnis rintisan serta UMKM tidak memiliki budget senilai puluhan hingga ratusan juta untuk sekadar mendapatkan visibilitas digital dasar.</p>
                 </div>
              </div>
            </div>
            
            {/* The Solo Dev Answer */}
            <div className="lg:col-span-6 p-10 md:p-16 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-secondary-bg)] rounded-bl-full opacity-50"></div>
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-10 block">Format WebCipta</h2>
              <h3 className="text-3xl lg:text-4xl font-bold font-heading text-[#18181A] mb-6 leading-tight">
                Standar Tinggi via Struktur Agensi Minimalis.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-6 font-light">
                Saya mengonsep WebCipta sebagai bentuk pertengahan. Layaknya *Boutique Studio* mandiri, pendekatan saya menghapus *overhead* birokrasi, gaji divisi berlapis, maupun biaya operasional kantor mewah.
              </p>
              <p className="text-[#52525B] leading-relaxed font-light">
                Sebagai gantinya, Anda mendapatkan akses dan komunikasi langsung kepada eksekutor yang membangun, merancang tata letak, serta mengimplementasi algoritme SEO yang biasa dipakai di arsitektur web raksasa (Next.js/React). Kualitas *corporate*, dalam harga rasional.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values Pattern */}
      <section className="py-32 bg-[var(--color-secondary-bg)] border-y border-gray-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-20 border-b border-gray-300/50 pb-10">
             <div className="max-w-2xl">
               <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-4">DNA Pengembangan</h2>
               <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] tracking-tight">
                 Nilai Dasar Eksekusi
               </h3>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-0 relative">
            {/* Vertical grid lines separator trick for lg screens */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-[25%] w-[1px] bg-gray-300"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-300"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-[75%] w-[1px] bg-gray-300"></div>

            <div className="lg:pr-8">
              <div className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center mb-6 shadow-sm">
                 <Rocket className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Kecepatan Mutlak</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Konversi mati pada loading lambat. Setiap kerangka desain dirancang untuk lolos persayaratan *Core Web Vitals*.</p>
            </div>
            
            <div className="lg:px-8">
              <div className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center mb-6 shadow-sm">
                 <ShieldCheck className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Struktur Bersih</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Tidak ada kode yang membengkak karena modifikasi tema. Seluruh sintaks dan tata letak dirancang spesifik.</p>
            </div>
            
            <div className="lg:px-8">
              <div className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center mb-6 shadow-sm">
                 <Users className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Empati Pengguna</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Penekanan pada spasi, navigasi satu jari, serta *readability* yang mencegah pengguna kabur prematur.</p>
            </div>
            
            <div className="lg:pl-8">
              <div className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center mb-6 shadow-sm">
                 <Code2 className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Alat Bantu Cerdas</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Penerapan AI dalam alur kerja digunakan murni untuk memangkas jam operasional koding—diterjemahkan menjadi potongan harga bagi *client*.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro CTA */}
      <section className="py-24 bg-[#18181A] text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-white mb-6">Mulai Transformasi Berkelas.</h2>
          <p className="text-[#A1A1AA] mb-12 leading-relaxed font-light text-[15px]">
            Konsultasikan rancangan website Anda tanpa obligasi atau komitmen apapun. Kami selalu siap mendiskusikan visi bisnis Anda.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.1em] text-[13px] text-white hover:text-[var(--color-highlight)] transition-colors group">
            <span className="border-b border-white group-hover:border-[var(--color-highlight)] pb-1 transition-colors">Booking Sesi Pertemuan</span>
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
