
import Link from "next/link";
import { MoveRight } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ServiceCard from "./ServiceCard";


export const metadata = {
  title: "Layanan WebCipta | Jasa Pembuatan Website Profesional Cibubur",
  description: "Katalog lengkap layanan WebCipta — dari Landing Page, Website Profil Bisnis, Company Profile, Toko Online, hingga sistem custom. Sesuai kebutuhan bisnis Anda.",
};

const serviceData = [
  {
    id: "01",
    icon: "/icons/services/svc-landing.svg",
    title: "Landing Page",
    tag: "Paling Populer",
    desc: "Satu halaman yang dirancang fokus — untuk menangkap perhatian, membangun kepercayaan, dan mendorong calon klien langsung menghubungi Anda.",
    target: "UMKM, pemilik jasa, pelaku usaha baru, promosi produk/event",
    includes: [
      "Desain custom, rapi, dan mobile-first",
      "Basic SEO on-page",
      "Tombol WhatsApp langsung",
      "Form kontak terintegrasi",
      "Deploy ke Vercel (hosting gratis)",
    ],
    setup: "Vercel",
    price: "Mulai Rp 550.000",
    cta: "Mulai dari landing page"
  },
  {
    id: "02",
    icon: "/icons/services/svc-profil.svg",
    title: "Website Profil Bisnis",
    tag: "",
    desc: "Tampilkan usaha Anda secara profesional online — lengkap dengan informasi layanan, lokasi, kontak, dan keunggulan yang meyakinkan calon pelanggan.",
    target: "Toko lokal, klinik, salon, bengkel, jasa kontraktor, bisnis keluarga",
    includes: [
      "Halaman utama + profil usaha",
      "Daftar layanan terstruktur",
      "Kontak, jam operasional, lokasi",
      "Tombol WhatsApp & Google Maps",
      "Desain responsif di semua perangkat",
    ],
    setup: "Vercel",
    price: "Mulai Rp 1.200.000",
    cta: "Tampilkan bisnis Anda"
  },
  {
    id: "03",
    icon: "/icons/services/svc-portfolio.svg",
    title: "Website Portofolio",
    tag: "",
    desc: "Tampilkan karya, pengalaman, dan personal brand Anda dalam satu website yang rapi — agar setiap calon klien atau rekruter langsung terkesan.",
    target: "Freelancer, desainer, fotografer, kreator konten, developer",
    includes: [
      "Halaman profil & bio personal",
      "Galeri / showcase project",
      "Halaman kontak / hiring form",
      "Integrasi media sosial",
      "Desain personal & ekspresif",
    ],
    setup: "Vercel",
    price: "Mulai Rp 900.000",
    cta: "Tampilkan karya Anda"
  },
  {
    id: "04",
    icon: "/icons/services/svc-company.svg",
    title: "Website Company Profile",
    tag: "",
    desc: "Representasi digital perusahaan yang formal, kredibel, dan membangun kepercayaan klien B2B sejak kunjungan pertama.",
    target: "Perusahaan kecil-menengah, agency, vendor, penyedia jasa B2B",
    includes: [
      "Halaman profil & visi misi perusahaan",
      "Portofolio project / klien",
      "Struktur halaman layanan formal",
      "Portal kontak & inquiry",
      "Desain elegan dan profesional",
    ],
    setup: "Vercel atau Vercel + Supabase",
    price: "Mulai Rp 1.500.000",
    cta: "Perkuat citra perusahaan"
  },
  {
    id: "05",
    icon: "/icons/services/svc-event.svg",
    title: "Website Event / Pendaftaran",
    tag: "",
    desc: "Website khusus untuk mengelola informasi event dan pendaftaran peserta secara rapi, terstruktur, dan mudah diakses siapa saja.",
    target: "Event organizer, komunitas, penyelenggara pelatihan & seminar",
    includes: [
      "Halaman info event lengkap",
      "Form pendaftaran online",
      "Database peserta (opsional Supabase)",
      "Countdown timer event",
      "Alur CTA yang jelas dan terarah",
    ],
    setup: "Vercel atau Vercel + Supabase",
    price: "Mulai Rp 1.300.000",
    cta: "Buat event Anda lebih profesional"
  },
  {
    id: "06",
    icon: "/icons/services/svc-blog.svg",
    title: "Website Blog / Artikel",
    tag: "",
    desc: "Bangun otoritas brand Anda lewat konten berkualitas — dan biarkan Google bekerja mendatangkan calon pelanggan secara organik.",
    target: "Personal brand, bisnis edukasi, media kecil, niche content creator",
    includes: [
      "Halaman artikel dengan struktur SEO",
      "Sistem kategori & tag konten",
      "Tampilan tipografi rapi & nyaman dibaca",
      "Integrasi CMS ringan (opsional)",
      "Optimasi performa & kecepatan",
    ],
    setup: "Vercel + Supabase atau CMS ringan",
    price: "Mulai Rp 1.800.000",
    cta: "Mulai bangun trafik organik"
  },
  {
    id: "07",
    icon: "/icons/services/svc-catalog.svg",
    title: "Website Katalog Produk",
    tag: "",
    desc: "Tampilkan semua produk Anda dalam satu katalog digital yang rapi — tanpa kerumitan checkout, cukup arahkan calon pembeli ke WhatsApp.",
    target: "Supplier, distributor, toko spesialis, brand dengan banyak varian produk",
    includes: [
      "Halaman produk individual",
      "Sistem kategori & filter",
      "Tampilan galeri produk profesional",
      "Tombol order via WhatsApp",
      "Load cepat & mobile-friendly",
    ],
    setup: "Vercel atau Vercel + Supabase",
    price: "Mulai Rp 1.800.000",
    cta: "Tampilkan produk lebih profesional"
  },
  {
    id: "08",
    icon: "/icons/services/svc-toko.svg",
    title: "Website Toko Online",
    tag: "",
    desc: "Mulai jualan online dengan toko Anda sendiri — tampilan profesional, alur beli yang sederhana, dan tidak bergantung pada marketplace.",
    target: "UMKM, brand artisanal, produk handmade, pelaku usaha mandiri",
    includes: [
      "Halaman produk dengan detail lengkap",
      "Keranjang belanja sederhana",
      "Integrasi WhatsApp order",
      "Manajemen produk via database",
      "Desain yang membangun kepercayaan pembeli",
    ],
    setup: "Vercel + Supabase",
    price: "Mulai Rp 2.800.000",
    cta: "Buka toko online Anda sendiri"
  },
  {
    id: "09",
    icon: "/icons/services/svc-custom.svg",
    title: "Website Custom / Sistem",
    tag: "",
    desc: "Kebutuhan bisnis Anda unik dan tidak terpenuhi oleh template standar? Kami bangun sesuai alur, logika, dan arsitektur yang Anda butuhkan.",
    target: "Bisnis dengan alur khusus, form kalkulasi, dashboard data, atau logika unik",
    includes: [
      "Analisis kebutuhan & diskusi arsitektur",
      "Pengembangan fitur sesuai spesifikasi",
      "Integrasi API & sistem eksternal",
      "Testing & quality assurance",
      "Dokumentasi & handover teknis",
    ],
    setup: "Vercel + Supabase atau VPS",
    price: "Mulai Rp 3.500.000",
    cta: "Diskusikan kebutuhan custom Anda"
  },
  {
    id: "10",
    icon: "/icons/services/svc-maintenance.svg",
    title: "Maintenance & Update",
    tag: "Opsional",
    desc: "Layanan perawatan fleksibel untuk jangka panjang. Anda bebas melakukan update konten sendiri (gratis) atau menyerahkannya kepada kami agar Anda bisa tetap fokus sepenuhnya pada bisnis.",
    target: "Klien yang ingin website tetap prima tanpa repot teknis",
    includes: [
      "Update konten teks & gambar",
      "Perbaikan minor & bug fix",
      "Monitoring performa dasar",
      "Backup berkala",
      "Bisa dilakukan mandiri atau via jasa kami",
    ],
    setup: "Mengikuti server yang sudah ada",
    price: "Mulai Rp 200.000 / bulan",
    cta: "Jaga website tetap prima"
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <FadeUp inView={false}>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[var(--color-highlight)] mb-6">
                <span className="w-6 h-px bg-[var(--color-highlight)]"></span>
                Katalog Layanan
              </div>
            </FadeUp>
            <FadeUp inView={false} delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
                Website yang Tepat <br />
                <span className="text-[var(--color-highlight)]">untuk Bisnis Anda.</span>
              </h1>
            </FadeUp>
            <FadeUp inView={false} delay={0.2}>
              <p className="text-lg md:text-xl text-[#52525B] leading-relaxed font-light max-w-2xl">
                Dari landing page sederhana hingga sistem custom — setiap layanan dirancang presisi sesuai kebutuhan bisnis, bukan paket generik yang dipaksakan.
              </p>
            </FadeUp>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl">
            {[
              { num: "10", label: "Jenis Layanan" },
              { num: "1–4", label: "Minggu Pengerjaan" },
              { num: "100%", label: "Transparan & Diskusi Langsung" },
            ].map((s) => (
              <div key={s.label} className="border-l border-gray-300 pl-4">
                <div className="text-2xl font-black font-heading text-[#18181A]">{s.num}</div>
                <div className="text-[11px] text-[#94A3B8] font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-5">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#18181A] uppercase">10 Jenis Layanan Tersedia</h2>
            <Link href="/pricing" className="text-[11px] font-bold uppercase tracking-widest text-[#94A3B8] hover:text-[#18181A] transition-colors inline-flex items-center gap-1.5">
              Lihat Harga Lengkap <MoveRight className="w-3 h-3" />
            </Link>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.07}>
            {serviceData.map((s) => (
              <StaggerItem key={s.id}>
                <ServiceCard data={s} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process CTA Band */}
      <section className="py-20 bg-[#18181A]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { step: "01", title: "Konsultasi Gratis", desc: "Ceritakan kebutuhan dan kondisi bisnis Anda. Tanpa biaya, tanpa komitmen." },
              { step: "02", title: "Proposal & Harga", desc: "Kami susun spesifikasi dan estimasi biaya secara transparan dan terperinci." },
              { step: "03", title: "Pengerjaan & Launch", desc: "Website dibangun, direvisi bersama, lalu diluncurkan sesuai tenggat waktu." },
            ].map((p) => (
              <div key={p.step} className="border-l border-[#333] pl-6">
                <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-3">{p.step}</div>
                <h4 className="font-bold text-white text-[15px] mb-2">{p.title}</h4>
                <p className="text-[#94A3B8] text-[13px] font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Belum yakin pilih layanan mana?</h3>
              <p className="text-[#94A3B8] text-[14px] font-light">Ceritakan gambaran kasarnya — kami bantu tentukan yang paling tepat.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-3 bg-white text-[#18181A] px-6 py-3.5 font-bold text-[12px] uppercase tracking-widest hover:bg-[var(--color-highlight)] hover:text-white transition-colors"
            >
              Konsultasi Gratis
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
