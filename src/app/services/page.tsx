import Link from "next/link";
import { MoveRight, Monitor, Search, HandHeart, Briefcase } from "lucide-react";

export const metadata = {
  title: "Layanan Website",
  description: "Cakupan layanan dan kemampuan teknis WebCipta membantu bisnis lokal berkembang.",
};

const domainExpertiseCategories = [
  {
    title: "Profil Perusahaan (Company Profile)",
    description: "Merupakan wajah digital entitas B2B. Dirancang untuk menanamkan kredibilitas kepada mitra bisnis, inverstor, dan prospek besar.",
    features: ["Halaman 'Mengenai Kami' yang kuat", "Skema Warna Kepercayaan", "Formulir Kontak Responsif", "Bagian Sejarah & Tim"],
  },
  {
    title: "Etalase Bisnis Lokal & Jasa",
    description: "Untuk klinik, restoran, konsultan, atau agensi UMKM. Berpusat pada konversi pengunjung menjadi pelanggan lokal nyata.",
    features: ["Integrasi Maps/Lokasi", "Tombol Klik-Untuk-WA", "Galeri Kualitas Tinggi", "Testimoni & Review"],
  },
  {
    title: "Personal Branding & Portofolio",
    description: "Desain sangat personal untuk seniman, pengacara, fotografer, maupun freelancer elite yang harus tampil berbeda.",
    features: ["Estetika Asimetris/Unik", "Showcase Resolusi Tinggi", "Integrasi Media Sosial", "Blog Mini Tersertakan"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden">
        {/* Deep grid background layer */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[var(--color-secondary-bg)] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Kapabilitas <br/>
              <span className="text-[var(--color-highlight)]">Pengembangan.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#52525B] leading-relaxed font-light mt-12 max-w-2xl">
              Kami tidak membangun portal berita 1000 halaman atau sistem e-commerce raksasa. Kami sangat mahir membangun "Website Representasi" berkinerja tinggi untuk brand Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Style List Instead of Cards */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16 border-b border-[#1C1B1A] pb-4">
             <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#18181A] uppercase">Fokus Resolusi</h2>
          </div>

          <div className="space-y-0">
            {domainExpertiseCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="group grid md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 border-b border-gray-100 hover:bg-[#F9F9FB] transition-colors -mx-6 px-6 relative"
              >
                {/* Subtle side indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--color-highlight)] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300"></div>
                
                <div className="md:col-span-1 hidden md:block">
                  <div className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mt-2">0{idx + 1}</div>
                </div>
                
                <div className="md:col-span-5">
                  <h3 className="text-2xl lg:text-3xl font-bold font-heading text-[#18181A] leading-tight mb-4">
                    {cat.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-gray-300 hidden md:block mt-8"></div>
                </div>
                
                <div className="md:col-span-6">
                  <p className="text-[15px] text-[#52525B] leading-relaxed mb-8 font-light">
                    {cat.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                    {cat.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[13px] text-[#1C1B1A] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)] shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standar Inklusi - Layered Panel Contrast */}
      <section className="py-24 bg-[var(--color-secondary-bg)] shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-4">Protokol Bawaan</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-[#18181A]">
              Pondasi Tanpa<br/>Biaya Ekstra.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 md:p-12 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-8">
                <Search className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-4 text-[#18181A]">Technical SEO</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">
                *Meta tags*, *Open Graph* (agar pratinjau link WA rapi), peta situs (sitemap), dan pemampatan gambar otomatis langsung dari kerangka Next.js bawaan.
              </p>
            </div>

            <div className="bg-white p-10 md:p-12 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-8">
                <Monitor className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-4 text-[#18181A]">Mobile-First Responsiveness</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">
                Bukan sekadar mengecilkan tampilan PC. Kami menata ulang antarmuka (huruf, jarak, urutan tombol) khusus agar pengalaman pengguna nyaman di layar *smartphone*.
              </p>
            </div>

            <div className="bg-white p-10 md:p-12 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-8">
                <Briefcase className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-4 text-[#18181A]">Dukungan Lepas Landas</h4>
              <p className="text-[14px] text-[#52525B] leading-relaxed font-light">
                Revisi pasca-launching untuk bagian teks/warna dan panduan manajemen domain/hosting di bulan pertama memastikan bisnis Anda bisa *"Take Off"* tanpa hambatan teknis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Deep Solid CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        {/* Noise/Texture element (fake map / line art) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">
             Kuat di Spesialisasi.
           </h2>
           <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-12 font-light">
             Punya proyek yang tak terklasifikasi? Mari bahas batasannya.
           </p>
           <Link href="/contact" className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.1em] text-[13px] text-white hover:text-[var(--color-highlight)] transition-colors group">
             <span className="border-b border-white group-hover:border-[var(--color-highlight)] pb-1 transition-colors">Diskusikan Kebutuhan</span>
             <MoveRight className="w-4 h-4" />
           </Link>
        </div>
      </section>
    </>
  );
}
