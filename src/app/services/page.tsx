import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Globe, LayoutTemplate, Briefcase, Building2, BookOpen, CalendarCheck, ShoppingBag, Store, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Layanan Pembuatan Website | WebCipta Cibubur',
  description: 'Pilihan layanan pembuatan website di WebCipta. Mulai dari Landing Page Rp550rb untuk bisnis lokal, profil perusahaan, sampai toko online sederhana.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Landing Page",
      desc: "Promosi 1 halaman, fokus pada penjualan langsung sebuah produk, event, atau campaign iklan.",
      features: ["Satu halaman minim klik", "Fokus Call To Action (WA)", "Copywriting terstruktur"]
    },
    {
      icon: <Store className="w-8 h-8 text-accent" />,
      title: "Website Profil Bisnis",
      desc: "Menunjukkan detail jam buka, lokasi Maps, galeri, dan kontak. Cocok untuk kafe, klinik, salon, atau toko lokal.",
      features: ["Integrasi Maps", "Jam Operasional", "Galeri Tempat"]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      title: "Website Portofolio",
      desc: "Bagi desainer, fotografer, kreator, dan freelancer untuk showcase karya agar terlihat profesional.",
      features: ["Layout Grid Estetik", "Lightbox Foto", "Tautan Sosmed"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent" />,
      title: "Company Profile",
      desc: "Perusahaan formal yang butuh mendaftar list klien, history layanan perusahaan, visi misi dll.",
      features: ["Halaman Berjenjang", "Halaman Tentang Kami Khusus", "List Klien"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Blog / Artikel",
      desc: "Website edukasi massal untuk mempromosikan media Anda sendiri atau optimasi traffic organik jangka panjang.",
      features: ["Sistem Mini-CMS Artikel", "Kategorisasi Konten", "SEO Optimized"]
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-accent" />,
      title: "Event & Pendaftaran",
      desc: "Seminar, agenda turnamen, atau lokakarya. Info tiket, rincian susunan acara, dan form kehadiran.",
      features: ["Formulir Pendaftaran", "Jadwal interaktif", "Integrasi Database Cepat"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      title: "Katalog Produk",
      desc: "Tampilkan lusinan hingga ratusan foto produk estetik. Pengguna baru dialihkan ke WhatsApp saat ingin beli.",
      features: ["Katalog tanpa keranjang belanja", "Tombol Tanya Admin WA", "Filter Produk simpel"]
    },
    {
      icon: <Store className="w-8 h-8 text-accent" />,
      title: "Toko Online Sederhana",
      desc: "Punya keranjang belanja ringan. Pembeli mendata alamat secara langsung bagi bisnis produk fisik.",
      features: ["Sistem Keranjang", "Perhitungan Ongkir ringkas", "List Riwayat Transaksi Lokal"]
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Custom Sistem",
      desc: "Tergantung pesanan aplikasi internal, dashboard admin, atau website interaktif butuh logika tinggi.",
      features: ["Supabase Database", "Authentication", "Fullstack NextJS App"]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Pilihan Layanan WebCipta</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tidak perlu bayar fitur mahal jika tak pernah Anda gunakan. Pilih paket website fungsional yang memang menjawab masalah bisnis Anda.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border text-gray-800 border-gray-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="mb-6 bg-white p-3 inline-block rounded-2xl shadow-sm border border-gray-50 group-hover:bg-accent group-hover:text-white transition-colors">
                   {/* We wrap the cloned icon to inherit colors nicely or depend on raw class */}
                   <div className="group-hover:text-white transition-colors">
                     {service.icon}
                   </div>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed min-h-[80px]">
                  {service.desc}
                </p>
                
                <h4 className="text-sm font-bold tracking-wider uppercase text-gray-400 mb-4">Focus Point</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
                >
                  Pesan & Konsultasi <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900">Masih Ragu Website Seperti Apa yang Cocok?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Tenang, bicarakan saja tujuan bisnis Anda, kami yang akan rekomendasikan strukturnya tanpa paksaan.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-colors"
          >
            Ngobrol Santai Dulu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
