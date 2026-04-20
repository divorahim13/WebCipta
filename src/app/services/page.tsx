import Link from "next/link";
import { ArrowRight, Globe, Layers, Search, RefreshCcw, Smartphone, Zap, Code, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Layanan Website",
  description: "Daftar layanan pembuatan dan pengembangan website dari WebCipta yang berfokus pada kecepatan, SEO, dan konversi.",
};

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Landing Page Bisnis",
      desc: "Halaman konversi tinggi yang dirancang khusus untuk kampanye marketing, peluncuran produk, atau profil utama layanan Anda.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Optimasi SEO Basic",
      desc: "Implementasi struktur tag, meta description, dan hierarki heading yang sesuai dengan standar Google Core Web Vitals.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "Redesign & Modernisasi",
      desc: "Memberikan nafas baru untuk website lama Anda. Kami memperbaiki layout, kecepatan, dan menambahkan responsivitas penuh.",
      icon: <RefreshCcw className="w-5 h-5" />,
    },
    {
      title: "Sistem Manajemen Konten (CMS)",
      desc: "Integrasi headless CMS (seperti Sanity atau Supabase) bagi mereka yang butuh kemudahan mengubah konten secara mandiri.",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "Mobile-First Architecture",
      desc: "Bukan sekadar responsif, tapi benar-benar dirancang dari awal untuk pengalaman native terbaik di layar smartphone.",
      icon: <Smartphone className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black font-heading text-[#18181A] mb-6 tracking-tight leading-tight">
              Keahlian Teknis. <br/>
              Pemahaman Bisnis.
            </h1>
            <p className="text-lg text-[#52525B] leading-relaxed font-light">
              Kami tidak sekadar memasang template. Kami membangun infrastruktur digital yang cepat, aman, dan bekerja otomatis untuk menyaring klien potensial Anda.
            </p>
          </div>
        </div>
      </section>

      {/* The Catalog Layout (Not Cards) */}
      <section className="py-20 bg-[var(--color-secondary-bg)]">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase mb-16 px-4">Direktori Layanan</h2>
            
            <div className="border-t border-gray-300/50">
              {servicesList.map((srv, idx) => (
                <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start py-10 md:py-12 border-b border-gray-300/50 hover:bg-white/50 transition-colors px-4 md:px-8">
                  <div className="md:col-span-1 pt-1 opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all">
                    {srv.icon}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold font-heading text-[#18181A]">{srv.title}</h3>
                  </div>
                  <div className="md:col-span-7 md:pl-8">
                    <p className="text-[#52525B] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-sm font-bold tracking-widest text-[#64748B] uppercase mb-6">Peralatan Bengkel Kami</h2>
                <h3 className="text-3xl font-bold font-heading mb-8 leading-tight">
                  Teknologi Modern,<br/>Untuk Kecepatan Maksimal.
                </h3>
                <p className="text-[#94A3B8] leading-relaxed font-light mb-8 max-w-sm">
                  Berbeda dengan agensi tradisional yang menggunakan platform builder lawas yang berat. Kami menggunakan tumpukan teknologi modern untuk skor kecepatan 99+ di Google Lighthouse.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div>
                   <Code className="w-5 h-5 text-[var(--color-highlight)] mb-4" />
                   <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Next.js & React</h4>
                   <p className="text-[#64748B] text-sm">Standar emas industri modern untuk framework UI yang cepat dan skalabel.</p>
                </div>
                <div>
                   <Zap className="w-5 h-5 text-[var(--color-highlight)] mb-4" />
                   <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Tailwind CSS</h4>
                   <p className="text-[#64748B] text-sm">Sistem styling yang ringan via utility-first class, memangkas overhead pemuatan gaya.</p>
                </div>
                <div>
                   <Shield className="w-5 h-5 text-[var(--color-highlight)] mb-4" />
                   <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Vercel</h4>
                   <p className="text-[#64748B] text-sm">Edge network global memastikan website instan diakses dari Jakarta hingga belahan dunia manapun.</p>
                </div>
                <div>
                   <Headphones className="w-5 h-5 text-[var(--color-highlight)] mb-4" />
                   <h4 className="font-bold text-sm uppercase tracking-wider mb-2">AI Tooling</h4>
                   <p className="text-[#64748B] text-sm">Implementasi cerdas Cursor dan LLM untuk memangkas jam kerja sintaks rutin.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-heading text-[#18181A] mb-8">Punya kebutuhan diluar daftar ini?</h2>
          <p className="text-[#52525B] max-w-xl mx-auto mb-10 leading-relaxed">
            Karena kami tidak menggunakan template kaku, fitur-fitur custom sangat memungkinkan untuk dikerjakan. Ceritakan fitur ide spesifik Anda.
          </p>
          <Link href="/contact">
            <Button size="lg">Ayo Diskusikan Ide Anda</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
