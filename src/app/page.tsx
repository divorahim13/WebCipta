import Link from "next/link";
import { ArrowRight, Check, Monitor, Zap, Search, MessageSquare, Briefcase, Code2, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-[var(--background)]">
        {/* Depth & Layers: Subtle grid background */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[var(--color-secondary-bg)] to-transparent rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* Typography Left */}
            <div className="lg:col-span-5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-[10px] font-bold uppercase tracking-[0.15em] text-[#52525B] mb-8 relative">
                <span className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[var(--color-highlight)]"></span>
                Tersedia untuk proyek baru
              </div>
              <h1 className="text-5xl md:text-[64px] font-black font-heading text-[#18181A] leading-[1.05] tracking-tight mb-8">
                Desainer <br/>
                Sekaligus <br/>
                <span className="text-[var(--color-accent)] relative inline-block">
                  Pengembang.
                  <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-[var(--color-highlight)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
                </span>
              </h1>
              <p className="text-lg text-[#52525B] mb-10 leading-relaxed font-light">
                WebCipta adalah studio independen di Cibubur. Kami tidak menggunakan template massal. Kami mendesain visual yang menjalin kepercayaan, dan menulis struktur kode yang mempercepat bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)]">Mulai Konsultasi</Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Lihat Portfolio</Button>
                </Link>
              </div>
            </div>

            {/* Deep "Proof of Work" Mockup Cluster Right */}
            <div className="lg:col-span-7 relative perspective-[1200px] h-[400px] sm:h-[500px]">
              
              {/* Back Mockup (Blurred/Dark) */}
              <div className="absolute top-[10%] right-[10%] w-[80%] h-[80%] bg-[#0F172A] rounded-md border border-gray-800 shadow-2xl transform rotate-y-[-10deg] rotate-z-[2deg] translate-x-12 -translate-z-20 opacity-80 overflow-hidden flex flex-col">
                <div className="h-6 bg-[#1E293B] flex items-center px-3 gap-1.5 border-b border-gray-800 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
                <div className="p-4 flex-1">
                   <div className="w-1/3 h-4 bg-gray-700 rounded mb-4"></div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="h-24 bg-gray-800 rounded"></div>
                     <div className="h-24 bg-gray-800 rounded"></div>
                   </div>
                </div>
              </div>

              {/* Front Mockup (Crisp, High Detail) */}
              <div className="absolute top-[20%] left-0 w-[90%] h-[85%] bg-white rounded-md border border-gray-200/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transform rotate-y-[-4deg] translate-z-10 overflow-hidden flex flex-col overflow-y-hidden">
                <div className="h-8 bg-[#F8FAFC] flex items-center px-4 gap-2 border-b border-gray-100 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="ml-auto w-1/2 h-4 bg-white border border-gray-100 rounded-sm"></div>
                </div>
                {/* Simulated Content */}
                <div className="flex-1 overflow-hidden relative bg-[#FCFBF9]">
                   {/* Header fake */}
                   <div className="flex justify-between items-center p-6 border-b border-gray-100/50">
                     <div className="text-xl font-black tracking-tighter text-[#1C1B1A]">HudBakes<span className="text-[var(--color-highlight)]">.</span></div>
                     <div className="flex gap-4">
                       <div className="w-12 h-2 bg-gray-200 rounded"></div>
                       <div className="w-12 h-2 bg-gray-200 rounded"></div>
                     </div>
                   </div>
                   {/* Hero fake */}
                   <div className="p-8 text-center border-b border-gray-100/50 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50"></div>
                      <div className="w-16 h-4 bg-gray-200 rounded mx-auto mb-6"></div>
                      <div className="w-3/4 h-8 bg-[#1C1B1A] rounded mx-auto mb-3"></div>
                      <div className="w-1/2 h-8 bg-[#1C1B1A] rounded mx-auto mb-8"></div>
                      <div className="flex justify-center gap-3 relative z-10">
                        <div className="w-24 h-8 bg-gray-200 rounded-sm"></div>
                        <div className="w-24 h-8 bg-white border border-gray-200 rounded-sm"></div>
                      </div>
                   </div>
                   {/* List fake */}
                   <div className="p-6 grid grid-cols-3 gap-6">
                      <div className="col-span-1 h-32 bg-gray-100 rounded-sm"></div>
                      <div className="col-span-2 space-y-3">
                         <div className="w-full h-4 bg-gray-100 rounded"></div>
                         <div className="w-5/6 h-4 bg-gray-100 rounded"></div>
                         <div className="w-4/6 h-4 bg-gray-100 rounded"></div>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Element (Badge / Stat) */}
              <div className="absolute bottom-[5%] right-0 bg-white p-4 rounded-sm border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transform translate-z-30 flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center font-black text-lg text-[var(--color-highlight)]">99</div>
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] mb-0.5">Performa</div>
                   <div className="text-sm font-bold text-[#1C1B1A]">Skor Google</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solo Developer Identity Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* The Human Statement */}
            <div className="lg:col-span-4 sticky top-24">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[var(--color-highlight)]"></span>
                Pesan Tim Inti
              </h2>
              <h3 className="text-3xl font-bold font-heading text-[#18181A] leading-tight mb-6">
                Satu Titik Kontak.<br/>Satu Standar Kualitas.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-6 font-light">
                Sebagai agensi pengembang independen (solo developer), saya menghapus kerumitan berlapis antara klien dan eksekutor. Anda berbicara langsung dengan orang yang mendesain, menulis kode, dan meluncurkan proyek Anda.
              </p>
              <div className="mt-8 flex items-center gap-4 pt-8 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#F3F2F0] border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                  <Code2 className="w-5 h-5 text-[#94A3B8]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1C1B1A]">Divo Rahim</div>
                  <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Pendiri & Lead Developer</div>
                </div>
              </div>
            </div>

            {/* The Technical Approach (Asymmetric Grid) */}
            <div className="lg:col-span-8 lg:pl-12 border-l border-gray-100/0 lg:border-gray-100">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                
                <div className="relative group">
                  <div className="w-10 h-10 border border-gray-200 bg-white shadow-sm flex items-center justify-center mb-5 text-[#1C1B1A] group-hover:border-[var(--color-accent)] group-hover:bg-[#F8FAFC] transition-colors">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3 text-[#18181A]">Desain Bespoke</h4>
                  <p className="text-[15px] text-[#52525B] leading-relaxed font-light">
                    Meninggalkan template pasaran. Kami menciptakan ruang bernafas (whitespace), tipografi editorial, dan hierarki visual yang mengangkat nilai estetika brand Anda.
                  </p>
                </div>

                <div className="relative group">
                  <div className="w-10 h-10 border border-gray-200 bg-white shadow-sm flex items-center justify-center mb-5 text-[#1C1B1A] group-hover:border-[var(--color-accent)] group-hover:bg-[#F8FAFC] transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3 text-[#18181A]">Akselerasi AI</h4>
                  <p className="text-[15px] text-[#52525B] leading-relaxed font-light">
                    Kami menggunakan AI sebagai alat cerdas untuk menulis komponen berulang. Efisiensi waktu ini langsung diterjemahkan menjadi harga yang jauh lebih kompetitif untuk klien.
                  </p>
                </div>

                <div className="relative group">
                  <div className="w-10 h-10 border border-[#334155] bg-[#0F172A] shadow-md flex items-center justify-center mb-5 text-white">
                    <Search className="w-4 h-4 text-[var(--color-highlight)]" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3 text-[#18181A]">SEO Mendasar</h4>
                  <p className="text-[15px] text-[#52525B] leading-relaxed font-light">
                    Audien tidak akan peduli seberapa indah situs Anda jika mereka tidak dapat menemukannya. Praktik standar SEO disertakan dari penulisan tag pembuka.
                  </p>
                </div>

                <div className="relative group">
                  <div className="w-10 h-10 border border-gray-200 bg-white shadow-sm flex items-center justify-center mb-5 text-[#1C1B1A] group-hover:border-[var(--color-accent)] group-hover:bg-[#F8FAFC] transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3 text-[#18181A]">Obyektif Konversi</h4>
                  <p className="text-[15px] text-[#52525B] leading-relaxed font-light">
                    Kecantikan harus fungsional. Alur baca, struktur penawaran, dan penempatan tombol ajakan bertindak (CTA) disusun secara logis untuk menghasilkan prospek (leads).
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Crafted Process Timeline */}
      <section className="py-24 bg-[var(--color-secondary-bg)] border-y border-gray-200/80 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-16">
             <div className="max-w-2xl">
               <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-4">SOP Pelaksanaan</h2>
               <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A]">
                 Evolusi Ide Menjadi Realita.
               </h3>
             </div>
             <Link href="/about" className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#52525B] hover:text-[#18181A]">
               Pelajari Lebih <MoveRight className="w-4 h-4" />
             </Link>
          </div>

          <div className="relative">
            {/* The Connected Line */}
            <div className="absolute top-0 bottom-0 left-[19px] md:left-auto md:top-[28px] md:right-0 md:left-[5%] md:h-[1px] md:w-[90%] bg-gray-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10 pl-14 md:pl-0">
              {[
                { step: "01", title: "Discovery", desc: "Sesi kalibrasi memahami arah bisnis dan pemetaan arsitektur konten." },
                { step: "02", title: "Wireframe", desc: "Penyusunan hirarki visual abu-abu. Memastikan struktur informasi logis." },
                { step: "03", title: "Development", desc: "Desain visual ditarik menjadi baris kode interaktif dengan Next.js." },
                { step: "04", title: "Handover", desc: "Instalasi ke peladen (server), uji kecepatan, dan penyerahan kunci." },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Indicator Dot Mobile */}
                  <div className="absolute -left-14 top-1 w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center font-bold text-sm text-[var(--color-accent)] md:hidden">
                    {item.step}
                  </div>
                  
                  {/* Indicator Dot Desktop */}
                  <div className="hidden md:flex w-14 h-14 bg-white border-2 border-gray-200 rounded-full items-center justify-center font-bold text-sm font-heading text-[#1C1B1A] mb-8 mx-auto shadow-sm group-hover:border-[var(--color-accent)] group-hover:bg-[#F8FAFC] transition-colors">
                    {item.step}
                  </div>

                  <div className="md:px-4 md:text-center">
                    <h4 className="text-lg font-bold font-heading mb-2 text-[#18181A]">{item.title}</h4>
                    <p className="text-[14px] text-[#52525B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layered Pricing Representation */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-40"></div>
        
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#0F172A] rounded-[2px] shadow-2xl p-1 md:p-2">
             <div className="grid md:grid-cols-2 bg-[#1E293B] border border-[#334155] rounded-[1px] overflow-hidden">
                
                {/* Tech Value */}
                <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#334155] relative overflow-hidden flex flex-col justify-center">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-highlight)] to-transparent"></div>
                   <h2 className="text-2xl font-bold font-heading text-white mb-4">Investasi Tanpa Beban Tahunan.</h2>
                   <p className="text-[#94A3B8] leading-relaxed mb-8 text-[15px] font-light">
                     Melalui infrastruktur *Edge Network* dari Vercel/Netlify, website bisnis profil Anda bisa menekan biaya perpanjangan server hingga <strong>mendekati gratis</strong>. Kepemilikan kode sepenuhnya berada di tangan Anda.
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-3">
                       <Check className="w-4 h-4 text-[var(--color-highlight)]" />
                       <span className="text-sm text-[#CBD5E1]">SSL & Cloud CDN Global (Gratis)</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <Check className="w-4 h-4 text-[var(--color-highlight)]" />
                       <span className="text-sm text-[#CBD5E1]">Akses Repositori GitHub</span>
                     </li>
                   </ul>
                </div>

                {/* Offer Block */}
                <div className="bg-[#0B1120] p-10 md:p-14 flex flex-col justify-center items-center text-center relative z-10">
                   <div className="mb-4">
                     <span className="inline-block px-3 py-1 border border-[#334155] bg-[#1E293B] text-[10px] font-bold text-white uppercase tracking-widest mb-6">Mulai Dari</span>
                   </div>
                   <div className="flex items-start gap-1 justify-center mb-6">
                     <span className="text-2xl font-bold text-[#94A3B8] mt-1">Rp</span>
                     <span className="text-6xl md:text-7xl font-black font-heading tracking-tighter text-white">550<span className="text-3xl text-[#94A3B8]">k</span></span>
                   </div>
                   <p className="text-xs text-[#64748B] mb-10 leading-relaxed max-w-[200px]">
                     One-Time Payment.<br/>Sudah termasuk desain 3 halaman.
                   </p>
                   <Link href="/pricing" className="w-full">
                     <button className="w-full h-12 bg-white text-[#0F172A] font-bold text-[13px] uppercase tracking-widest hover:bg-gray-200 transition-colors">
                       Lihat Detail Paket
                     </button>
                   </Link>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* Structured CTA */}
      <section className="py-24 bg-[#FCFBF9] border-t border-gray-200/80">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="w-16 h-1 bg-[var(--color-highlight)] mx-auto mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-[#18181A] mb-8 leading-tight">
            Level Baru Untuk Kedigitalan Bisnis Anda.
          </h2>
          <p className="text-lg text-[#52525B] mb-12 font-light">
            Sesi konsultasi pertama kami selalu murni untuk pembedahan strategi tanpa ikatan komitmen finansial.
          </p>
          <Link href="/contact">
            <Button size="lg" className="shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-12">Reservasi Jadwal Konsultasi</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
