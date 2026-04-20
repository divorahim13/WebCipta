import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export const metadata = {
  title: "Katalog Layanan",
  description: "Cakupan layanan dan kemampuan teknis WebCipta membantu bisnis UMKM dan personal brand lokal berkembang.",
};

const serviceData = [
  {
    id: "01",
    title: "Landing Page",
    desc: "Website 1 halaman untuk promosi jasa, produk, campaign, atau event.",
    target: "UMKM, pemilik jasa, produk sederhana, promosi cepat.",
    includes: ["Desain rapi", "Responsif (Mobile-first)", "Basic SEO", "Tombol WhatsApp / form kontak"],
    setup: "Vercel",
    cta: "Mulai dari landing page dulu"
  },
  {
    id: "02",
    title: "Website Profil Bisnis",
    desc: "Website untuk menampilkan informasi usaha, layanan, lokasi, kontak, dan keunggulan bisnis.",
    target: "Usaha lokal, klinik, toko, jasa, kontraktor, bisnis keluarga.",
    includes: ["Halaman profil", "Daftar layanan", "Kontak", "Info usaha"],
    setup: "Vercel",
    cta: "Buat profil bisnis Anda profesional"
  },
  {
    id: "03",
    title: "Website Portofolio",
    desc: "Website untuk menampilkan karya, pengalaman, dan identitas personal brand secara rapi.",
    target: "Freelancer, kreator, fotografer, desainer, developer, personal brand.",
    includes: ["Halaman profil", "Project showcase", "Kontak / Hiring form"],
    setup: "Vercel",
    cta: "Tampilkan karya lebih meyakinkan"
  },
  {
    id: "04",
    title: "Website Company Profile",
    desc: "Website formal untuk memperkenalkan perusahaan, layanan, proyek, dan informasi kontak.",
    target: "Agency, perusahaan kecil-menengah, vendor, B2B service.",
    includes: ["Struktur hierarki formal", "Halaman layanan", "Proyek unggulan", "Portal kontak"],
    setup: "Vercel / Supabase (jika butuh data dinamis)",
    cta: "Bangun citra perusahaan elite"
  },
  {
    id: "05",
    title: "Website Blog / Artikel",
    desc: "Website yang fokus pada konten, edukasi, artikel, dan optimasi SEO jangka panjang.",
    target: "Personal brand, bisnis edukasi, media kecil, niche affiliate.",
    includes: ["Halaman struktur artikel", "Kategori konten", "Sistem tipografi rapi"],
    setup: "Vercel + CMS / Supabase",
    cta: "Mulai bangun trafik mandiri"
  },
  {
    id: "06",
    title: "Website Event / Pendaftaran",
    desc: "Website untuk seminar, webinar, workshop, pelatihan, atau event komunitas.",
    target: "Event organizer, komunitas, penyelenggara pelatihan.",
    includes: ["Informasi penjadwalan", "Form pendaftaran", "Alur CTA yang jelas"],
    setup: "Vercel / Supabase (untuk rekap database pendaftaran)",
    cta: "Buat event lebih terstruktur online"
  },
  {
    id: "07",
    title: "Website Katalog Produk",
    desc: "Website untuk menampilkan produk online tanpa intervensi checkout kompleks (bisa diarahkan ke WA).",
    target: "Supplier, distributor, toko spesialis, brand etalase.",
    includes: ["Galeri gambar produk", "Kategori direktori", "Tampilan produk individual rapi"],
    setup: "Vercel / Supabase",
    cta: "Tampilkan produk secara profesional"
  },
  {
    id: "08",
    title: "Website Toko Online Sederhana",
    desc: "Website untuk mulai jualan online dengan tampilan profesional dan alur yang terpusat.",
    target: "UMKM, brand artisinal, produk handmade, toko mandiri.",
    includes: ["Halaman detil produk", "Alur pembelian singkat", "Tampilan konversi meyakinkan"],
    setup: "Vercel + Supabase (disesuaikan kebutuhan)",
    cta: "Mulai jualan langsung via website"
  },
  {
    id: "09",
    title: "Website Custom / Sistem Sederhana",
    desc: "Sistem ringan yang membutuhkan fitur perhitungan khusus, filter unik, atau dashboard fungsional.",
    target: "Bisnis yang membutuhkan form kalkulasi, manajemen data ringan, atau logika spesifik.",
    includes: ["Penyesuaian absolut", "Diskusi arsitektur", "Desain custom layer"],
    setup: "Vercel + Supabase / VPS (jika butuh backend kompleks)",
    cta: "Diskusikan kebutuhan arsitektur custom"
  },
  {
    id: "10",
    title: "Maintenance / Update Website",
    desc: "Bantuan pemeliharaan konten, perbaikan minor ekosistem, dan adaptasi performa setelah website online.",
    target: "Klien eksisting yang sibuk dan ingin websitenya tetap terurus secara profesional.",
    includes: ["Update konten ringan", "Audit pencegahan error", "Penyesuaian teks/gambar berkala"],
    setup: "Mengikuti server deployment yang sudah ada",
    cta: "Pastikan aset digital tetap rapi berlari"
  }
];

// Helper to render the service grid cell
const ServiceBlock = ({ data }: { data: any }) => (
  <div className="bg-white border border-gray-200 p-8 md:p-10 hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
    <div className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-4">{data.id}</div>
    <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">{data.title}</h3>
    <p className="text-[15px] text-[#52525B] leading-relaxed mb-8 font-light h-auto md:h-16">{data.desc}</p>
    
    <div className="space-y-4 mb-8">
       <div>
         <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">Cocok Untuk</div>
         <p className="text-[13px] text-[#18181A] font-medium leading-relaxed">{data.target}</p>
       </div>
       <div>
         <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">Yang Didapat</div>
         <ul className="space-y-1">
           {data.includes.map((inc: string, i: number) => (
             <li key={i} className="flex gap-2 text-[13px] text-[#52525B]">
               <span className="text-[var(--color-highlight)] mt-0.5">•</span>
               {inc}
             </li>
           ))}
         </ul>
       </div>
       <div>
         <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">Setup Teknologi</div>
         <p className="text-[13px] text-[#18181A] font-medium">{data.setup}</p>
       </div>
    </div>

    <div className="pt-6 border-t border-gray-100 mt-auto">
      <Link href="/pricing" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#1C1B1A] hover:text-[var(--color-highlight)] transition-colors group">
         <span className="border-b border-white group-hover:border-[var(--color-highlight)] transition-colors">{data.cta}</span>
         <MoveRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden">
        {/* Deep grid background layer */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Kapabilitas <br/>
              <span className="text-[var(--color-highlight)]">KatalisATOR.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#52525B] leading-relaxed font-light mt-12 max-w-2xl">
              Kami mentranslasikan kebutuhan spesifik bisnis Anda (dari *landing page* hardsell hingga *company profile* korporat) ke dalam wujud digital yang fungsional, terukur, dan elegan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-12 border-b border-[#1C1B1A] pb-4">
             <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#18181A] uppercase">Struktur Kategori Pelaksanaan</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render 1-3 */}
            {serviceData.slice(0, 3).map(s => <ServiceBlock key={s.id} data={s} />)}

            {/* Visual Intercept 1 */}
            <div className="md:col-span-2 lg:col-span-3 py-16 my-8 border-y border-gray-100 relative group">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video bg-[#18181A] rounded-sm overflow-hidden shadow-2xl border border-gray-200">
                    <div className="absolute top-0 left-0 w-full h-8 bg-[#09090B] border-b border-gray-800 flex items-center px-4 z-10 hidden sm:flex">
                      <div className="flex gap-1.5 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      </div>
                    </div>
                     <Image src="/assets/work-1.png" alt="Contoh landing page bisnis spesialis" fill className="object-cover sm:mt-8 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#94A3B8] mb-4">Bukti Implementasi</h3>
                    <h4 className="text-3xl font-bold font-heading text-[#18181A] mb-4">Landing Page Konversi Tinggi</h4>
                    <p className="text-[#52525B] font-light leading-relaxed">Arsitektur halaman tunggal berfokus meminimalkan *bouncing rate* dan langsung menggiring konsumen ke gerbang pendaftaran/WA. Efisien, langsung pada poin nilai utama usaha Anda.</p>
                  </div>
               </div>
            </div>

            {/* Render 4-6 */}
            {serviceData.slice(3, 6).map(s => <ServiceBlock key={s.id} data={s} />)}

            {/* Visual Intercept 2 */}
            <div className="md:col-span-2 lg:col-span-3 py-16 my-8 border-y border-gray-100 relative group">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#94A3B8] mb-4">Bukti Implementasi</h3>
                    <h4 className="text-3xl font-bold font-heading text-[#18181A] mb-4">Company Profile Korporat</h4>
                    <p className="text-[#52525B] font-light leading-relaxed">Website tidak melulu tentang berjualan langsung. Seringkali, kredibilitas B2B divalidasi mutlak dari presentasi digital sebuah *brand*. Tampilan *off-white* formal dan struktur tata letak simetris murni.</p>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-[4/3] bg-white rounded-sm overflow-hidden shadow-xl border border-gray-200">
                    <div className="absolute top-0 left-0 w-full h-8 bg-[#F8FAFC] border-b border-gray-200 flex items-center px-4 z-10 hidden sm:flex">
                      <div className="flex gap-1.5 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                     <Image src="/assets/work-3.png" alt="Contoh web Company Profile B2B" fill className="object-cover sm:mt-8 group-hover:scale-105 transition-transform duration-700" />
                  </div>
               </div>
            </div>

            {/* Render 7-10 */}
            {serviceData.slice(6, 10).map(s => <ServiceBlock key={s.id} data={s} />)}
            
          </div>
        </div>
      </section>

      {/* Visual Break / Deep Solid CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">
             Masih Ragu Memilih?
           </h2>
           <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-12 font-light">
             Tidak perlu khawatir menebak. Ceritakan gambaran kasarnya, dan saya akan merumuskan spesifikasi mana yang tidak mubazir untuk diinvestasikan *budget*-nya hari ini.
           </p>
           <Link href="/contact" className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.1em] text-[13px] text-white hover:text-[var(--color-highlight)] transition-colors group">
             <span className="border-b border-white group-hover:border-[var(--color-highlight)] pb-1 transition-colors">Dapatkan Panduan Gratis</span>
             <MoveRight className="w-4 h-4" />
           </Link>
        </div>
      </section>
    </>
  );
}
