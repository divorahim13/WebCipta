import Link from "next/link";
import Image from "next/image";
import { MoveRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Harga Layanan WebCipta | Transparan & Tanpa Biaya Tersembunyi",
  description: "Harga jasa pembuatan website WebCipta yang transparan. Landing Page mulai Rp550.000. Tidak ada biaya tersembunyi — semua dikomunikasikan sejak awal.",
};

const pricingPackages = [
  {
    id: "01",
    title: "Landing Page",
    price: "550.000",
    duration: "3–5 hari kerja",
    icon: "/icons/services/svc-landing.svg",
    color: "bg-[#F0FDF4]",
    highlight: true,
    tag: "Terpopuler",
    short: "1 halaman, langsung konversi",
    includes: [
      "Desain custom responsif",
      "Basic SEO on-page",
      "Tombol WhatsApp",
      "Form kontak",
      "Hosting gratis (Vercel)",
    ],
  },
  {
    id: "02",
    title: "Website Portofolio",
    price: "900.000",
    duration: "3–5 hari kerja",
    icon: "/icons/services/svc-portfolio.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Personal brand & showcase karya",
    includes: [
      "Halaman profil & bio",
      "Galeri / showcase project",
      "Halaman kontak",
      "Integrasi media sosial",
      "Hosting gratis (Vercel)",
    ],
  },
  {
    id: "03",
    title: "Website Profil Bisnis",
    price: "1.200.000",
    duration: "5–7 hari kerja",
    icon: "/icons/services/svc-profil.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Tampilan usaha yang profesional",
    includes: [
      "Profil usaha + layanan",
      "Kontak, lokasi & jam operasional",
      "Tombol WhatsApp & Google Maps",
      "Desain mobile-first",
      "Hosting gratis (Vercel)",
    ],
  },
  {
    id: "04",
    title: "Website Event",
    price: "1.300.000",
    duration: "4–6 hari kerja",
    icon: "/icons/services/svc-event.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Info event + pendaftaran online",
    includes: [
      "Halaman informasi event",
      "Form pendaftaran",
      "Database peserta (opsional)",
      "Countdown timer",
      "CTA yang terarah",
    ],
  },
  {
    id: "05",
    title: "Website Company Profile",
    price: "1.500.000",
    duration: "7–10 hari kerja",
    icon: "/icons/services/svc-company.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Representasi digital perusahaan",
    includes: [
      "Profil & visi misi perusahaan",
      "Halaman layanan & project",
      "Portal kontak & inquiry",
      "Desain formal & profesional",
      "Hosting gratis (Vercel)",
    ],
  },
  {
    id: "06",
    title: "Website Blog / Artikel",
    price: "1.800.000",
    duration: "7–10 hari kerja",
    icon: "/icons/services/svc-blog.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Konten & trafik organik jangka panjang",
    includes: [
      "Sistem artikel + kategori",
      "Struktur SEO-friendly",
      "CMS ringan (opsional)",
      "Tipografi nyaman dibaca",
      "Optimasi kecepatan",
    ],
  },
  {
    id: "07",
    title: "Website Katalog Produk",
    price: "1.800.000",
    duration: "7–10 hari kerja",
    icon: "/icons/services/svc-catalog.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Tampilkan produk tanpa kerumitan",
    includes: [
      "Halaman & kategori produk",
      "Galeri gambar produk",
      "Order via WhatsApp",
      "Filter & pencarian produk",
      "Mobile-friendly",
    ],
  },
  {
    id: "08",
    title: "Website Toko Online",
    price: "2.800.000",
    duration: "10–14 hari kerja",
    icon: "/icons/services/svc-toko.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Toko mandiri, tidak bergantung marketplace",
    includes: [
      "Halaman produk detail",
      "Keranjang belanja",
      "Manajemen produk (database)",
      "Integrasi WhatsApp order",
      "Vercel + Supabase",
    ],
  },
  {
    id: "09",
    title: "Website Custom / Sistem",
    price: "3.500.000",
    duration: "Disesuaikan",
    icon: "/icons/services/svc-custom.svg",
    color: "bg-[#F8FAFC]",
    highlight: false,
    tag: "Custom",
    short: "Fitur khusus sesuai kebutuhan bisnis",
    includes: [
      "Analisis & diskusi kebutuhan",
      "Pengembangan fitur custom",
      "Integrasi API & sistem lain",
      "Testing & QA",
      "Dokumentasi & handover",
    ],
  },
  {
    id: "10",
    title: "Maintenance & Update",
    price: "200.000",
    duration: "Per bulan",
    icon: "/icons/services/svc-maintenance.svg",
    color: "bg-white",
    highlight: false,
    tag: "",
    short: "Website tetap terurus tanpa repot",
    includes: [
      "Update konten teks & gambar",
      "Bug fix & perbaikan minor",
      "Monitoring performa",
      "Backup berkala",
      "Laporan kondisi website",
    ],
  },
];

const faqs = [
  {
    q: "Apa yang dimaksud 'mulai dari'?",
    a: "Harga yang tertera adalah titik awal untuk proyek standar. Kompleksitas tambahan seperti jumlah halaman, fitur khusus, atau integrasi sistem akan disampaikan secara transparan sebelum pengerjaan dimulai.",
  },
  {
    q: "Apakah ada biaya hosting bulanan?",
    a: "Untuk sebagian besar layanan, kami menggunakan Vercel yang tersedia gratis untuk proyek skala bisnis UMKM. Biaya hosting hanya muncul jika Anda membutuhkan server database (Supabase) atau VPS untuk proyek yang lebih kompleks.",
  },
  {
    q: "Bagaimana dengan biaya domain?",
    a: "Biaya domain (.com ≈ Rp150–180rb/tahun, .id ≈ Rp120–150rb/tahun) tidak termasuk dalam paket dan dibayarkan langsung ke registrar pilihan Anda. Kami bantu proses koneksinya.",
  },
  {
    q: "Berapa lama pengerjaan?",
    a: "Setiap paket memiliki estimasi waktu pengerjaan masing-masing. Durasi dapat berubah tergantung kesiapan materi dari Anda (teks, gambar, logo) dan kompleksitas desain yang diinginkan.",
  },
  {
    q: "Apakah ada revisi?",
    a: "Tentu. Setiap proyek sudah termasuk sesi revisi untuk memastikan hasilnya sesuai ekspektasi Anda. Revisi mayor di luar scope awal akan dikomunikasikan terlebih dahulu.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--color-secondary-bg)] rounded-full blur-3xl opacity-40 -z-10 translate-x-1/3"></div>

        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[var(--color-highlight)] mb-6">
              <span className="w-6 h-px bg-[var(--color-highlight)]"></span>
              Harga Layanan
            </div>
            <h1 className="text-5xl md:text-6xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Harga Jelas. <br />
              <span className="text-[var(--color-highlight)]">Tanpa Kejutan.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#52525B] leading-relaxed font-light max-w-2xl">
              Semua harga disampaikan transparan sejak awal. Tidak ada biaya tersembunyi, tidak ada markup mendadak — hanya investasi yang proporsional dengan kebutuhan bisnis Anda.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                "✓ Harga final disetujui sebelum pengerjaan",
                "✓ Tidak ada biaya tersembunyi",
                "✓ Konsultasi gratis sebelum commit",
              ].map((t) => (
                <span key={t} className="text-[13px] text-[#52525B] font-medium">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-3">10 Paket Tersedia</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A]">Pilih Sesuai Kebutuhan</h3>
            <p className="text-[#52525B] font-light mt-4 max-w-xl mx-auto">Semua estimasi di bawah adalah titik awal — harga final didiskusikan bersama sebelum proyek dimulai.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative border ${pkg.highlight ? "border-[#18181A] shadow-[0_0_0_1px_#18181A]" : "border-gray-200 hover:border-gray-300"} ${pkg.color} transition-all hover:shadow-md flex flex-col group`}
              >
                {pkg.tag && (
                  <div className={`absolute -top-3 left-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 ${pkg.tag === "Terpopuler" ? "bg-[#18181A] text-white" : "bg-[#F8FAFC] text-[#52525B] border border-gray-200"}`}>
                    {pkg.tag}
                  </div>
                )}

                <div className="p-7 pb-5 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#18181A] transition-colors">
                      <Image src={pkg.icon} alt={pkg.title} width={22} height={22} />
                    </div>
                    <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest">{pkg.id}</span>
                  </div>
                  <h4 className="font-bold font-heading text-[17px] text-[#18181A] mb-1.5">{pkg.title}</h4>
                  <p className="text-[12px] text-[#94A3B8] font-medium">{pkg.short}</p>
                </div>

                <div className="p-7 flex flex-col grow">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1.5">Harga Mulai</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-bold text-[#18181A]">Rp</span>
                      <span className="text-3xl font-black font-heading tracking-tight text-[#18181A]">{pkg.price}</span>
                      {pkg.duration === "Per bulan" && (
                        <span className="text-[12px] text-[#94A3B8] font-medium">/bln</span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#94A3B8] mt-1">⏱ {pkg.duration}</div>
                  </div>

                  {/* Includes */}
                  <div className="grow">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-3">Sudah Termasuk</div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-[#52525B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#18181A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-widest transition-all ${pkg.highlight ? "bg-[#18181A] text-white hover:bg-[var(--color-highlight)]" : "border border-[#18181A] text-[#18181A] hover:bg-[#18181A] hover:text-white"}`}
                    >
                      Diskusi Sekarang <MoveRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-[#F8FAFC] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-6">Catatan Penting</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "💡", text: "Biaya domain (.com/.id) tidak termasuk dalam paket — dibayar langsung ke registrar, sekitar Rp120–180rb/tahun." },
              { icon: "📋", text: "Harga final disampaikan setelah diskusi kebutuhan. Tidak ada perubahan harga mendadak di tengah proyek." },
              { icon: "🔧", text: "Fitur tambahan yang tidak ada dalam paket standar akan dikalkulasi dan diinformasikan sebelum dikerjakan." },
              { icon: "💬", text: "Konsultasi awal sepenuhnya gratis — tidak ada kewajiban untuk melanjutkan ke tahap proyek." },
            ].map((note, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200">
                <span className="text-lg shrink-0">{note.icon}</span>
                <p className="text-[13px] text-[#52525B] leading-relaxed font-light">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-3">FAQ</h2>
            <h3 className="text-3xl font-bold font-heading text-[#18181A]">Pertanyaan yang Sering Ditanya</h3>
          </div>

          <div className="space-y-0 divide-y divide-gray-100 border-t border-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7">
                <h4 className="font-bold text-[#18181A] text-[15px] mb-3">{faq.q}</h4>
                <p className="text-[#52525B] text-[14px] leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#18181A]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Masih ragu dengan paket yang cocok?
          </h2>
          <p className="text-[#94A3B8] text-[15px] font-light mb-10 max-w-xl mx-auto">
            Ceritakan kebutuhan bisnis Anda secara singkat — kami yang bantu tentukan mana yang paling tepat dan efisien.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#18181A] px-8 py-4 font-bold text-[12px] uppercase tracking-widest hover:bg-[var(--color-highlight)] hover:text-white transition-colors"
          >
            Konsultasi Gratis Sekarang
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
