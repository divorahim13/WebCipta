'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Target, Zap, Server, CheckCircle2, Layout, LayoutGrid, Rocket, Quote, Code2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-24 pb-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-2 shadow-lg inline-flex items-center gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              <span className="font-bold tracking-wider">WEBCIPTA</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight font-heading"
          >
            Bikin Website Profesional <br className="hidden md:block"/> untuk Bisnis Anda
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            WebCipta membantu UMKM, bisnis lokal, dan personal brand punya website yang rapi, cepat online, dan terjangkau. Dikerjakan langsung oleh developer, basic SEO sudah termasuk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-accent hover:bg-blue-700 text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Konsultasi Gratis <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full text-lg backdrop-blur-md transition-all duration-300"
            >
              Lihat Layanan
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Section Keunggulan Singkat */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Kenapa Pilih WebCipta?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Solusi nyata tanpa janji berlebihan. Kami berikan website terbaik sesuai kebutuhan Anda.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Zap />, title: "Harga Terjangkau", desc: "Sangat bersahabat untuk bisnis yang baru mau mulai go digital." },
              { icon: <Code2 />, title: "Dikerjakan Developer", desc: "Proses teknis dan optimasi ditangani langsung, bukan di-lempar ke pihak lain." },
              { icon: <Target />, title: "Basic SEO Termasuk", desc: "Website dioptimalkan dari awal agar lebih mudah dikenali mesin pencari Google." },
              { icon: <Users />, title: "Fokus Bisnis Lokal", desc: "Cocok untuk UMKM, personal brand, maupun jasa layanan di daerah Anda." },
              { icon: <Layout />, title: "Terima Beres", desc: "Bisa bantu arahan desain, konfigurasi domain, sampai website siap online." },
              { icon: <Rocket />, title: "Cepat Pakai AI", desc: "Proses riset dan penyusunan struktur dibantu AI, pengerjaan jadi sangat efisien." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Section Tentang Singkat */}
      <section className="py-24 bg-gray-50 px-6 border-y border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6">Tentang WebCipta</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              WebCipta adalah jasa pembuatan website yang fokus membantu bisnis dan personal brand tampil lebih profesional di internet.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dikelola langsung oleh solo developer yang menggabungkan kemampuan kustomisasi coding detail dengan kecerdasan AI. Ini memastikan proses pembuatan jadi lebih efisien, cepat, dan rapi. Pendekatan yang paling pas jika Anda butuh website untuk mulai memvalidasi ide tanpa harus keluar modal jasa agency besar di awal.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
              Kenali Kami Lebih Dekat <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="md:w-1/2 w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-lg relative">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100" />
            <p className="text-xl italic text-gray-700 font-medium leading-relaxed z-10 relative">
              "Fokus kami bukan pada fitur rumit yang jarang dipakai, tapi pada performa tinggi, informasi yang jelas, dan kemudahan klien mengelola bisnisnya dari sebuah website."
            </p>
          </div>
        </div>
      </section>

      {/* 4. Section Layanan Ringkas & 6. Jenis Website */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Website Apa Saja yang Bisa Dibuat?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai kebutuhan website sesuai tujuan bisnis Anda, mulai dari landing page sederhana sampai integrasi custom.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { name: "Landing Page", act: "Promosi 1 halaman, produk, event, atau campaign." },
             { name: "Website Profil Bisnis", act: "Usaha lokal agar terlihat lebih kredibel dan mapan." },
             { name: "Website Portofolio", act: "Desainer, fotografer, kreator, dan freelancer show-case karya." },
             { name: "Company Profile", act: "Perusahaan yang ingin info formal dan daftar proyek rapi." },
             { name: "Blog / Artikel", act: "Edukasi massal, branding media, & membangun aset SEO organik." },
             { name: "Event & Pendaftaran", act: "Seminar, workshop komunitas butuh halaman rincian form absensi." },
             { name: "Katalog Produk", act: "Tampilkan lusinan produk visual sebelum user mengontak admin." },
             { name: "Toko Online Sederhana", act: "Mulai jual barang fisik/digital dengan alur pembelian ringkas." },
             { name: "Custom Sistem", act: "Menyesuaikan kebutuhan fitur khusus atau integrasi dengan API lain." },
           ].map((type, i) => (
             <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
               <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
               <div>
                 <h4 className="font-bold text-gray-900 mb-1">{type.name}</h4>
                 <p className="text-sm text-gray-600">{type.act}</p>
               </div>
             </div>
           ))}
        </div>
        <div className="mt-12 text-center">
            <Link href="/services" className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-colors">
              Lihat Detail Layanan
            </Link>
        </div>
      </section>

      {/* 5. Section Harga Utama */}
      <section className="py-24 bg-blue-50 px-6 border-y border-blue-100">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center mb-10">
            <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">Mulai dari yang Simpel</div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Paket Landing Page</h2>
            <div className="flex justify-center items-end gap-2 mb-4">
              <span className="text-gray-500 font-medium">Mulai dari</span>
              <span className="text-4xl md:text-5xl font-extrabold text-accent">Rp 550rb</span>
            </div>
            <p className="text-gray-600 text-lg">Pilihan pas bagi UMKM promosi usaha, produk, dan campaign tanpa ribet.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10 mx-auto max-w-2xl mb-10">
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> <span>Desain 1 Halaman Responsif</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> <span>Basic SEO Termasuk</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> <span>Bantuan Seting Domain</span></li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> <span>Hosting Super Cepat (Vercel)</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> <span>Integrasi Tombol WhatsApp</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> <span>Berorientasi Konversi Pelanggan</span></li>
            </ul>
          </div>

          <div className="text-center relative z-10">
            <p className="text-sm text-gray-400 italic mb-6">*Biaya domain menyesuaikan ekstensi (cth: .com / .id)</p>
            <Link href="/pricing" className="inline-block px-10 py-5 bg-accent hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1">
              Lihat Detail Harga
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Proses Kerja & 9. Cocok Untuk Siapa */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">Cocok Untuk Siapa Saja?</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Pebisnis UMKM", "Pemilik Toko Lokal", "Penyedia Jasa", "Personal Brand", 
                "Freelancer Lepas", "Toko Online Ringkas", "Event Organizer", "Usaha Baru Go Digital"
              ].map((target, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="font-semibold text-gray-700">{target}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
             <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">Proses Pengerjaan</h2>
             <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-8 pl-8 py-2">
                {[
                  "Konsultasi awal & memetakan apa yang bisnis butuhkan.",
                  "Sepakati jenis website dan harga sesuai fungsional minimal.",
                  "Pengumpulan materi (logo, teks, foto produk, dll).",
                  "Mulai proses pengkodean website (Development).",
                  "Review akhir dan revisi minor sesuai kesepakatan.",
                  "Website berhasil live dan diserahkan!"
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-md">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{step}</p>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 7. VPS vs Vercel Info Box */}
      <section className="py-12 bg-gray-50 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
           <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 items-center shadow-xl">
              <div className="p-4 bg-gray-800 rounded-2xl flex-shrink-0">
                <Server className="w-12 h-12 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Bingung Hosting: Vercel, Supabase, atau VPS?</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Untuk mayoritas landing page atau profil bisnis, **Vercel** gratis, super tangguh, dan sangat cepat. Kalau ada pendataan atau form interaktif, gabungan dengan **Supabase** adalah pilihan termurah. Kami hanya akan merekomendasikan **VPS** mahal jika memang fitur website Anda butuh kontrol server seutuhnya. Tim kami yang akan menganalisa dan memilihkan infrastrukturnya, jadi Anda tidak perlu bingung.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* 10. CTA Penutup */}
      <section className="py-24 bg-white text-gray-900 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Siap Punya Website untuk Bisnis Anda?</h2>
          <p className="text-gray-600 text-xl mb-10">
            Kalau Anda ingin punya website yang simpel, profesional, nyata, dan tidak bikin modal awal terlalu berat, WebCipta siap membantu temukan solusi.
          </p>
          <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white hover:bg-blue-800 font-bold rounded-full text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Hubungi Sekarang <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
