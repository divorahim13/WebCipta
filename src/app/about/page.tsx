import { Metadata } from 'next';
import { ArrowRight, Code2, Cpu, LineChart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tentang WebCipta | Solo Developer Website Cibubur',
  description: 'Mengenal WebCipta. Solo developer agency yang fokus melayani UMKM, personal brand, dan bisnis lokal Cibubur dengan harga terjangkau.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] selection:bg-indigo-100 pb-20">
      
      {/* Hero Section - Editorial Typographic style */}
      <section className="pt-40 pb-24 px-6 border-b border-gray-100 bg-[#FCFCFC] relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-end">
          <div className="md:w-3/5">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] leading-[1.1] tracking-tight mb-8">
              Di Balik Layar <br/><span className="text-[var(--color-accent)]">WebCipta.</span>
            </h1>
          </div>
          <div className="md:w-2/5 md:pb-3 relative before:absolute before:left-0 before:top-0 before:w-8 before:h-[1px] before:bg-gray-300">
            <p className="text-xl text-[#52525B] leading-relaxed pt-6">
              Membantu bisnis lokal Anda maju ke ranah digital melalui sentuhan website yang terstruktur, personal, dan efisien secara biaya.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Classic Two-Column */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
             <div className="sticky top-24">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Kisah Kami</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] tracking-tight leading-tight">
                  Bukan Agency Besar yang Mahal
                </h2>
             </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose prose-lg text-[#52525B] max-w-none space-y-8">
              <p className="text-2xl leading-relaxed text-[#18181A] font-serif pr-8">
                WebCipta berawal dari keresahan melihat banyaknya pebisnis lokal, UMKM, dan profesional di sekitar Cibubur yang ingin punya website sendiri, tapi tertahan oleh harga jasa agency yang bisa mencapai belasan hingga puluhan juta.
              </p>
              
              <div className="h-[1px] w-full bg-gray-100 my-10"></div>
              
              <p className="leading-relaxed">
                Di sisi lain, memakai pembuat website otomatis (builder) atau CMS yang berat seringkali merepotkan, hasilnya kaku, dan lambat saat diakses.
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#18181A] font-semibold">WebCipta hadir sebagai solo developer agency.</strong> Semua pekerjaan, mulai dari analisis kebutuhan, kustomisasi layout, sampai peluncuran domain diproses langsung oleh satu pihak. Komunikasi lebih lancar tanpa harus lewat banyak divisi perantara.
              </p>
            </div>
            
            {/* Minimalist Graphic Replacement for Stock Photo */}
            <div className="mt-16 w-full h-[300px] border border-gray-100 bg-[#FCFCFC] rounded-2xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
              <div className="text-gray-300 font-mono text-sm tracking-widest">W/C STUDIO COMPOSITION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimalist list approach instead of generic cards */}
      <section className="py-32 bg-white px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#18181A] mb-6 tracking-tight">Nilai Tambah Kami</h2>
            <p className="text-[#52525B] text-lg">
              Prinsip yang dipegang erat untuk memastikan hasil kerja yang profesional, efisien, dan memberikan *return on investment* nyata untuk Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                icon: <Code2 className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Kode Bersih",
                desc: "Website dibangun mandiri (custom-coded), tidak bergantung total pada CMS berat yang memperlambat loading."
              },
              {
                icon: <Cpu className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Ditenagai AI",
                desc: "Memanfaatkan asisten AI untuk memotong waktu development dan riset teks berulang sehingga harga jadi super terjangkau."
              },
              {
                icon: <LineChart className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Orientasi SEO",
                desc: "Dari struktur dokumen sampai kata kunci sudah disesuaikan secara natural agar mudah dibaca oleh Google."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Harga Jujur",
                desc: "Tidak ada biaya layanan bulanan semu. Semua dijabarkan transparan rinci pada penawaran awal."
              }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col border-t border-gray-100 pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 border border-gray-100 rounded-xl bg-gray-50">{value.icon}</div>
                  <h3 className="text-xl font-bold font-heading text-[#18181A]">{value.title}</h3>
                </div>
                <p className="text-[#52525B] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bespoke minimal */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center border border-gray-200 bg-white p-12 md:p-20 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Mulai Proyek</p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-heading tracking-tight text-[#18181A]">Mari Berkolaborasi!</h2>
          <p className="text-xl mb-12 text-[#52525B]">
            Anda punya impian digital, kami yang akan mewujudkannya dalam bentuk barisan kode rapi.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#18181A] text-white font-semibold rounded-xl hover:bg-[#27272A] transition-all shadow-xl"
          >
            Mulai Diskusi <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
