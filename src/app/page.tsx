import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Monitor, Code, Zap, Search, LayoutTemplate, MessageSquare, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--color-secondary-bg)] -z-10"></div>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Typography Left */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 shadow-sm text-xs font-bold uppercase tracking-widest text-[#52525B] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)] animate-pulse"></span>
                Tersedia untuk proyek baru
              </div>
              <h1 className="text-5xl md:text-6xl font-black font-heading text-[#18181A] leading-[1.1] tracking-tight mb-8">
                Bukan Sekadar <span className="text-[#94A3B8] font-medium italic">Template</span>. <br/>
                Karya <span className="text-[var(--color-accent)]">Bespoke</span><br/>
                Untuk Bisnis Anda.
              </h1>
              <p className="text-lg text-[#52525B] mb-10 leading-relaxed font-light">
                WebCipta adalah studio independen di Cibubur yang berfokus membangun website premium, berkinerja tinggi, dan teroptimasi SEO untuk UMKM & Personal Brand. Tanpa biaya agensi raksasa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-[var(--color-accent)]/10">Mulai Konsultasi</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Lihat Layanan</Button>
                </Link>
              </div>
            </div>

            {/* Browser Mockup Right */}
            <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto perspective-[1000px]">
              {/* Decorative elements behind */}
              <div className="absolute -inset-1 blur-2xl bg-gradient-to-tr from-[var(--color-highlight)]/20 to-[var(--color-accent)]/20 -z-10 rounded-full"></div>
              
              <div className="bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                {/* Browser Header */}
                <div className="bg-[#F8FAFC] px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
                  </div>
                  <div className="mx-auto w-2/3 h-5 rounded bg-white border border-gray-100 shadow-sm hidden sm:block"></div>
                </div>
                {/* Browser Content Wireframe */}
                <div className="p-6 md:p-8 bg-white aspect-[4/3] flex flex-col gap-6">
                  {/* Hero Wireframe */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                    <div className="flex gap-3">
                      <div className="w-8 h-2 bg-gray-100 rounded"></div>
                      <div className="w-8 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="w-3/4 h-10 md:h-12 bg-[#F1F5F9] rounded-sm mb-2"></div>
                  <div className="w-1/2 h-6 md:h-8 bg-[#F1F5F9] rounded-sm mb-6"></div>
                  <div className="w-full max-w-sm flex gap-3 mb-6 flex-wrap">
                     <div className="w-24 h-8 bg-[var(--color-accent)]/10 rounded-sm"></div>
                     <div className="w-24 h-8 bg-gray-100 rounded-sm"></div>
                  </div>
                  
                  {/* Grid Wireframe */}
                  <div className="grid grid-cols-3 gap-4 mt-auto">
                    <div className="h-20 bg-gray-50 border border-gray-100 rounded flex flex-col p-3 gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                      <div className="w-1/2 h-2 bg-gray-200 mt-auto rounded"></div>
                    </div>
                    <div className="h-20 bg-gray-50 border border-gray-100 rounded flex flex-col p-3 gap-2">
                       <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                      <div className="w-1/2 h-2 bg-gray-200 mt-auto rounded"></div>
                    </div>
                    <div className="h-20 bg-gray-50 border border-gray-100 rounded flex flex-col p-3 gap-2">
                       <div className="w-6 h-6 rounded-full bg-[var(--color-highlight)]/20"></div>
                      <div className="w-1/2 h-2 bg-gray-200 mt-auto rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan (Trust Section Asymmetric Design) */}
      <section className="py-24 bg-white border-t border-[var(--color-secondary-bg)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase mb-4">Filosofi Kami</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] leading-tight mb-6">
                Lebih dari Sekadar Membangun Website, Kami Membangun Nilai.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-8">
                Banyak pemilik bisnis kecil terjebak dengan "template murahan" atau "agensi mahal". WebCipta hadir sebagai jalan tengah: kualitas bespoke dengan harga yang rasional, dikerjakan langsung oleh ahlinya.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] hover:text-[#18181A] transition-colors">
                Baca Cerita Kami <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 bg-[#F8FAFC] border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm border border-gray-100 mb-6 text-[#18181A]">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3">Estetika Premium</h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">Setiap website dirancang dengan prinsip desain tipografi dan spasi yang cermat, memastikan hirarki visual sekelas brand multinasional.</p>
                </div>
                <div className="p-8 bg-[#F8FAFC] border border-gray-100 shadow-sm sm:mt-12">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm border border-gray-100 mb-6 text-[#18181A]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3">Efisiensi AI</h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">Kami memanfaatkan alat pemrograman modern dan AI untuk memangkas waktu kerja, sehingga biaya operasional turun dan harga tetap terjangkau untuk Anda.</p>
                </div>
                <div className="p-8 bg-[var(--color-accent)] text-white shadow-lg lg:-mt-6">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mb-6 text-white">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3">Optimasi SEO Inklusif</h4>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">Website yang indah tidak ada gunanya tanpa pengunjung. Struktur dasar SEO sudah ditanamkan dari baris kode pertama.</p>
                </div>
                <div className="p-8 bg-[#F8FAFC] border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm border border-gray-100 mb-6 text-[#18181A]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-3">Komunikasi Langsung</h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">Tanpa account manager atau birokrasi berbelit. Anda berbicara langsung dengan developer yang membangun proyek Anda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process: Visual Timeline over Text List */}
      <section className="py-24 bg-[var(--color-secondary-bg)] border-t border-gray-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase mb-4">Cara Kerja Berbeda</h2>
             <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] mb-6">
               Proses Transparan, Tanpa Kejutan.
             </h3>
             <p className="text-[#52525B] leading-relaxed">
               Lupakan proses tak berujung. Sistem kerja kami dirancang linear untuk menjamin peluncuran tepat waktu dengan hasil memuaskan.
             </p>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gray-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
              {[
                { step: "01", title: "Discovery", desc: "Sesi diskusi mendalam memahami visi, warna brand, dan target audiens bisnis Anda." },
                { step: "02", title: "Arsitektur", desc: "Merancang wireframe, copywriting, dan struktur navigasi sebelum menyentuh kode." },
                { step: "03", title: "Development", desc: "Pembangunan sistem menggunakan Next.js dan styling kustom yang disempurnakan." },
                { step: "04", title: "Handover", desc: "Testing responsivitas, migrasi domain, dan serah terima kunci digital kepada Anda." },
              ].map((item, index) => (
                <div key={index} className="relative z-10 flex flex-col md:items-center md:text-center">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-lg font-heading text-[var(--color-accent)] shadow-sm mb-6 shrink-0">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-3 text-[#18181A]">{item.title}</h4>
                  <p className="text-sm text-[#52525B] leading-relaxed max-w-[280px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting & Value Section */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 leading-tight">Berhenti Membayar Biaya Perpanjangan Tahunan Yang Berlebihan.</h2>
              <p className="text-[#94A3B8] leading-relaxed mb-10">
                Salah satu keuntungan terbesar menggunakan teknologi modern (Vercel/Netlify) adalah biaya hosting yang bisa ditekan hingga nyaris <strong>Gratis</strong> untuk website statis/company profile. Anda hanya perlu memperpanjang domain.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-1 rounded bg-white/10 shrink-0 mt-0.5"><Check className="w-4 h-4 text-[var(--color-highlight)]" /></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Hosting Vercel</h4>
                    <p className="text-sm text-[#94A3B8]">Cloud hosting kelas dunia, cepat, dengan SSL gratis selamanya.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-1 rounded bg-white/10 shrink-0 mt-0.5"><Check className="w-4 h-4 text-[var(--color-highlight)]" /></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Kepemilikan Penuh</h4>
                    <p className="text-sm text-[#94A3B8]">Anda mendapatkan akses source code penuh via GitHub.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1E293B] p-8 md:p-10 border border-[#334155] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 bg-white/[0.02] transform rotate-45 translate-x-12 -translate-y-12"></div>
              <div className="flex justify-between items-end border-b border-[#334155] pb-6 mb-6">
                <div>
                  <h4 className="font-heading font-bold text-xl text-white mb-1">One-Time Fee</h4>
                  <p className="text-[var(--color-highlight)] text-sm font-bold uppercase tracking-widest">Tidak ada biaya tersembunyi</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-[#94A3B8] mb-1 block">Mulai dari</span>
                  <span className="text-4xl font-black font-heading tracking-tight">Rp550<span className="text-lg font-medium text-[#94A3B8]">k</span></span>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
                Pilihan investasi cerdas untuk pelaku usaha. Sudah termasuk desain 3 halaman standar, copywriting dasar, integrasi Maps & WhatsApp.
              </p>
              <Link href="/pricing" className="group flex items-center justify-between w-full p-4 bg-white text-[#0F172A] font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
                Lihat Detail Paket
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-[#18181A] mb-8 leading-tight">
            Siap Mengubah Kehadiran Digital Anda?
          </h2>
          <p className="text-lg text-[#52525B] mb-10 max-w-2xl mx-auto font-light">
            Mari diskusikan kebutuhan website Anda hari ini. Konsultasi pertama murni diskusi tanpa ikatan komitmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Mulai Konsultasi</Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract giant typography in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black font-heading text-gray-50 opacity-50 whitespace-nowrap -z-10 select-none pointer-events-none">
          WEBCIPTA
        </div>
      </section>
    </>
  );
}
