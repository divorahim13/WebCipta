import Link from "next/link";
import Image from "next/image";
import { MoveRight, Code2, Users, Rocket, ShieldCheck, LineChart, MonitorSmartphone, Lock, Webhook } from "lucide-react";

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

      {/* Behind the Scene / Solo Dev Physical Check */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1 relative perspective-[1200px]">
                 <div className="relative aspect-[3/4] bg-[#F8FAFC] border border-gray-200 p-2 shadow-2xl transform rotate-y-[3deg]">
                    <div className="relative w-full h-full overflow-hidden bg-[#18181A]">
                       <Image 
                         src="/assets/workspace.png"
                         alt="Suasana studio pembuatan website minimalis"
                         fill
                         className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                       />
                    </div>
                    {/* Floating Info */}
                    <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white border border-gray-200 shadow-xl p-5 md:p-6 shrink-0 flex gap-4 max-w-xs transform translate-z-20">
                       <div className="w-10 h-10 bg-[var(--color-secondary-bg)] border border-gray-200 rounded flex items-center justify-center shrink-0">
                          <Code2 className="w-4 h-4 text-[#52525B]" />
                       </div>
                       <div>
                          <h5 className="font-bold text-[#1C1B1A] text-sm md:text-base">Fokus Eksekusi</h5>
                          <p className="text-[10px] md:text-[11px] text-[#94A3B8] uppercase tracking-wider font-bold">Tanpa Birokrasi Berbelit</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="md:col-span-1 border-hidden"></div>

              <div className="md:col-span-6 order-1 md:order-2">
                 <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-6 block">Koneksi Manusia</h2>
                 <h3 className="text-3xl lg:text-4xl font-bold font-heading text-[#18181A] mb-8 leading-tight">
                   Tidak Ada Penengah.<br/>Tidak Ada Alasan.
                 </h3>
                 <p className="text-[#52525B] leading-relaxed mb-6 font-light text-lg">
                   Banyak agensi yang memisahkan proses penjualan dan eksekusi teknis sehingga komunikasi menjadi lambat. Saat Anda bekerja sama dengan WebCipta, Anda berbicara langsung dengan tim teknis ahli yang akan merancang visual dan menulis instruksi kode fungsional bisnis Anda.
                 </p>
                 <div className="w-16 h-1 mt-10 mb-8 bg-gray-200"></div>
                 <div className="text-[14px] text-[#94A3B8] italic font-serif">
                   "Kecepatan hadir saat pembuat keputusan dan pelaksana berdiam dalam pikiran yang sama."
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Deep Layout Structural Section */}
      <section className="py-24 bg-[var(--color-secondary-bg)] relative border-t border-gray-200/80">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-0 border border-gray-200 shadow-sm">
            {/* The Agency Core Problem */}
            <div className="lg:col-span-6 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-[#FCFBF9]">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-10 block">Realita Industri</h2>
              <div className="space-y-8">
                 <div>
                   <h3 className="font-bold font-heading text-xl text-[#18181A] mb-3">Opsi A: Template Menyesatkan</h3>
                   <p className="text-[#52525B] leading-relaxed font-light text-[15px]">Membangun sendiri menggunakan layanan massal gratisan memang tampak mudah. Namun hasil akhirnya seringkali generik, performa memuat aplikasi lambat, dan dikalahkan kompetitor pada sisi peringkat pencarian Google.</p>
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
                Standar Premium via Alur Kerja Strategis.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-6 font-light">
                Kami merancang WebCipta sebagai solusi mutakhir. Layaknya sebuah agensi butik mandiri, pendekatan kami menghapus birokrasi, gaji divisi berlapis, maupun penambahan biaya tersembunyi yang berlebihan.
              </p>
              <p className="text-[#52525B] leading-relaxed font-light">
                Sebagai gantinya, Anda mendapatkan akses dan komunikasi langsung dengan eksekutor teknis. Kami merancang desain berkelas, mengimplementasikan standar keamanan, dan menerapkan fondasi performa tinggi secara rasional.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Full Dedicated Section */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-200/60 shadow-inner">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-4 block">Infrastruktur Modern</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] mb-6 leading-tight">
              Teknologi yang Kami Gunakan
            </h3>
            <p className="text-[#52525B] font-light leading-relaxed text-lg">
               WebCipta membangun website dengan teknologi modern yang ringan, cepat, dan relevan untuk kebutuhan bisnis saat ini. Teknologi yang digunakan dipilih agar website tetap nyaman diakses, mudah dikembangkan, dan siap mendukung kebutuhan bisnis secara jangka panjang.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* GROUP A: FRONTEND */}
            <div>
               <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#94A3B8] mb-6 border-b border-gray-200 pb-2">Frontend</h4>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {[
                    { brand: "Next.js", icon: "/icons/tech/nextjs.svg", desc: "untuk website yang cepat, modern, dan stabil" },
                    { brand: "React", icon: "/icons/tech/react.svg", desc: "untuk tampilan website yang interaktif dan fleksibel" },
                    { brand: "Tailwind CSS", icon: "/icons/tech/tailwindcss.svg", desc: "untuk antarmuka yang rapi, ringan, dan konsisten" },
                    { brand: "TypeScript", icon: "/icons/tech/typescript.svg", desc: "untuk pengembangan yang lebih rapi dan scalable" }
                 ].map((t) => (
                    <div key={t.brand} className="bg-white border border-gray-200/80 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all rounded-md group flex flex-col justify-between">
                       <div className="mb-4">
                          <Image src={t.icon} width={28} height={28} alt={t.brand} className="opacity-90" />
                       </div>
                       <div>
                         <h5 className="font-bold text-[#18181A] text-[15px] mb-1.5">{t.brand}</h5>
                         <p className="text-[#52525B] text-[13px] font-light leading-relaxed">{t.desc}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

            {/* GROUP B: BACKEND & DATABASE */}
            <div>
               <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#94A3B8] mb-6 border-b border-gray-200 pb-2">Backend & Database</h4>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {[
                    { brand: "Node.js", icon: "/icons/tech/nodejs.svg", desc: "untuk logika backend dan pengolahan data website" },
                    { brand: "Supabase", icon: "/icons/tech/supabase.svg", desc: "untuk database, autentikasi, dan sistem data dinamis" },
                    { brand: "PostgreSQL", icon: "/icons/tech/postgresql.svg", desc: "untuk database yang stabil dan terstruktur" },
                    { brand: "Prisma", icon: "/icons/tech/prisma.svg", desc: "untuk pengelolaan database yang lebih rapi dan efisien" },
                    { brand: "Authentication", icon: "/icons/ui/key.svg", desc: "untuk sistem login dan keamanan akses pengguna" },
                    { brand: "API Integration", icon: "/icons/ui/plug.svg", desc: "untuk menghubungkan website dengan layanan atau sistem lain" }
                 ].map((t) => (
                    <div key={t.brand} className="bg-white border border-gray-200/80 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all rounded-md group flex items-start gap-5">
                       <div className="shrink-0 mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
                          <Image src={t.icon} width={28} height={28} alt={t.brand} className="opacity-90" />
                       </div>
                       <div>
                         <h5 className="font-bold text-[#18181A] text-[15px] mb-1.5">{t.brand}</h5>
                         <p className="text-[#52525B] text-[13px] font-light leading-relaxed">{t.desc}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

            {/* GROUP C: DEPLOYMENT & WORKFLOW */}
            <div>
               <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#94A3B8] mb-6 border-b border-gray-200 pb-2">Deployment & Workflow</h4>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-cols-5 flex-wrap">
                 {[
                    { brand: "Vercel", icon: "/icons/tech/vercel.svg", desc: "untuk deployment dan hosting modern yang cepat" },
                    { brand: "GitHub", icon: "/icons/tech/github.svg", desc: "untuk pengelolaan source code yang terstruktur" },
                    { brand: "Responsive Design", icon: "/icons/ui/smartphone.svg", desc: "agar website nyaman dibuka di desktop, tablet, dan mobile" },
                    { brand: "Technical SEO", icon: "/icons/ui/search.svg", desc: "agar website lebih siap ditemukan di Google" },
                    { brand: "WhatsApp Integration", icon: "/icons/ui/whatsapp.svg", desc: "untuk memudahkan calon pelanggan menghubungi bisnis" }
                 ].map((t) => (
                    <div key={t.brand} className="bg-white border border-gray-200/80 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all rounded-md group flex flex-col justify-between">
                       <div className="mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                          <Image src={t.icon} width={24} height={24} alt={t.brand} className="opacity-90" />
                       </div>
                       <div>
                         <h5 className="font-bold text-[#18181A] text-[14px] mb-1.5">{t.brand}</h5>
                         <p className="text-[#52525B] text-[12px] font-light leading-relaxed">{t.desc}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

          </div>

          <div className="mt-14 pt-8 border-t border-gray-200/70 text-[14px] text-[#94A3B8] font-light italic">
             Teknologi yang tepat membantu website tetap cepat, rapi, dan lebih siap berkembang sesuai kebutuhan bisnis.
          </div>
        </div>
      </section>

      {/* Values Pattern */}
      <section className="py-32 bg-white border-y border-gray-200/60">
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
            <div className="hidden lg:block absolute top-0 bottom-0 left-[25%] w-[1px] bg-gray-200"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-200"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-[75%] w-[1px] bg-gray-200"></div>

            <div className="lg:pr-8">
              <div className="w-10 h-10 border border-gray-200 bg-[var(--color-secondary-bg)] flex items-center justify-center mb-6 shadow-sm">
                 <Rocket className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Kecepatan Mutlak</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Konversi terhambat jika website memuat terlalu lambat. Anda mendapatkan kecepatan maksimal standar industri modern.</p>
            </div>
            
            <div className="lg:px-8">
              <div className="w-10 h-10 border border-gray-200 bg-[var(--color-secondary-bg)] flex items-center justify-center mb-6 shadow-sm">
                 <ShieldCheck className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Struktur Bersih</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Tidak ada kode yang membengkak. Seluruh sistem dibuat rapi dan mudah dirawat untuk jangka panjang.</p>
            </div>
            
            <div className="lg:px-8">
              <div className="w-10 h-10 border border-gray-200 bg-[var(--color-secondary-bg)] flex items-center justify-center mb-6 shadow-sm">
                 <Users className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Empati Pengguna</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Penekanan pada spasi, panduan sentuhan ukuran memadai, serta membaca nyaman yang mencegah pengunjung kabur.</p>
            </div>
            
            <div className="lg:pl-8">
              <div className="w-10 h-10 border border-gray-200 bg-[var(--color-secondary-bg)] flex items-center justify-center mb-6 shadow-sm">
                 <Code2 className="w-4 h-4 text-[#18181A]" />
              </div>
              <h4 className="font-bold font-heading mb-3 uppercase tracking-wider text-[13px] text-[#18181A]">Efisien & Tepat Guna</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">Seluruh alur dikerjakan secara cermat untuk memangkas jam kerja tanpa mengurangi standar premium pengerjaan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro CTA */}
      <section className="py-24 bg-[#18181A] text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-white mb-6">Mulai Transformasi Berkelas.</h2>
          <p className="text-[#A1A1AA] mb-12 leading-relaxed font-light text-[15px]">
            Konsultasikan rancangan website Anda tanpa obligasi atau komitmen di awal. Kami selalu siap mendiskusikan visi bisnis Anda.
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
