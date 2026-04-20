import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Globe, Briefcase, Building2, BookOpen, CalendarCheck, ShoppingBag, Store, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Layanan Pembuatan Website | WebCipta Cibubur',
  description: 'Pilihan layanan pembuatan website di WebCipta. Mulai dari Landing Page Rp550rb untuk bisnis lokal, profil perusahaan, sampai toko online sederhana.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Landing Page",
      desc: "Promosi 1 halaman, fokus pada penjualan langsung sebuah produk, event, atau campaign iklan.",
      features: ["Satu halaman minim klik", "Fokus Call To Action (WA)", "Copywriting terstruktur"]
    },
    {
      icon: <Store className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Website Profil Bisnis",
      desc: "Menunjukkan detail jam buka, lokasi Maps, galeri, dan kontak. Cocok untuk kafe, klinik, salon, atau toko lokal.",
      features: ["Integrasi Maps", "Jam Operasional", "Galeri Tempat"]
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Website Portofolio",
      desc: "Bagi desainer, fotografer, kreator, dan freelancer untuk showcase karya agar terlihat profesional.",
      features: ["Layout Grid Estetik", "Lightbox Foto", "Tautan Sosmed"]
    },
    {
      icon: <Building2 className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Company Profile",
      desc: "Perusahaan formal yang butuh mendaftar list klien, history layanan perusahaan, visi misi dll.",
      features: ["Halaman Berjenjang", "Halaman Tentang Kami Khusus", "List Klien"]
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Blog / Artikel",
      desc: "Website edukasi massal untuk mempromosikan media Anda sendiri atau optimasi traffic organik jangka panjang.",
      features: ["Sistem Mini-CMS Artikel", "Kategorisasi Konten", "SEO Optimized"]
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Event & Pendaftaran",
      desc: "Seminar, agenda turnamen, atau lokakarya. Info tiket, rincian susunan acara, dan form kehadiran.",
      features: ["Formulir Pendaftaran", "Jadwal interaktif", "Integrasi Database Cepat"]
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Katalog Produk",
      desc: "Tampilkan lusinan hingga ratusan foto produk estetik. Pengguna baru dialihkan ke WhatsApp saat ingin beli.",
      features: ["Katalog tanpa keranjang belanja", "Tombol Tanya Admin WA", "Filter Produk simpel"]
    },
    {
      icon: <Store className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Toko Online Sederhana",
      desc: "Punya keranjang belanja ringan. Pembeli mendata alamat secara langsung bagi bisnis produk fisik.",
      features: ["Sistem Keranjang", "Perhitungan Ongkir ringkas", "List Riwayat Transaksi Lokal"]
    },
    {
      icon: <Code className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Custom Sistem",
      desc: "Tergantung pesanan aplikasi internal, dashboard admin, atau website interaktif butuh logika tinggi.",
      features: ["Supabase Database", "Authentication", "Fullstack NextJS App"]
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-background)] selection:bg-indigo-100">
      
      {/* Header Section - Minimalist */}
      <section className="bg-[#FCFCFC] border-b border-gray-100 pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-indigo-50/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4 block">Katalog Solusi</span>
          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-8 text-[#18181A]">Pilihan Layanan WebCipta</h1>
          <p className="text-xl text-[#52525B] leading-relaxed">
            Tidak perlu bayar fitur mahal jika tak pernah Anda gunakan. Pilih paket website fungsional yang memang menjawab masalah bisnis Anda.
          </p>
        </div>
      </section>

      {/* Services Directory - Elegant horizontal/top borders layout */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col border-t border-gray-200 pt-8 group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-[#FCFCFC] border border-gray-100 rounded-xl group-hover:border-indigo-200 transition-colors">
                     {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#18181A] tracking-tight">{service.title}</h3>
                </div>
                
                <p className="text-[#52525B] mb-8 leading-relaxed text-[15px] min-h-[70px]">
                  {service.desc}
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4">Focus Point</h4>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                        <span className="text-[#18181A] text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-indigo-900 transition-colors border-b border-transparent hover:border-indigo-900 pb-0.5"
                  >
                    Pesan & Konsultasi <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA Section */}
      <section className="py-24 bg-[#18181A] text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white tracking-tight">Masih Ragu Website Seperti Apa?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Tenang, bicarakan saja tujuan bisnis Anda, kami yang akan rekomendasikan strukturnya.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#18181A] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Ngobrol Santai Dulu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
