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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] select-none">
      
      {/* 1. Hero Section - Bespoke Minimalist */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Subtle abstract geometric background instead of generic Unsplash photo */}
        <div className="absolute inset-0 z-0 bg-[#FCFCFC] pointer-events-none">
           <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-white border border-gray-200 text-gray-800 rounded-full px-5 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              Studio Development Independen
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-[#18181A] mb-8 leading-[1.1] font-heading tracking-tight"
          >
            Bikin Website Profesional <br className="hidden md:block"/> untuk Bisnis Anda.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#52525B] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            WebCipta membantu UMKM, bisnis lokal, dan personal brand punya website yang rapi, cepat online, dan terjangkau. Dikerjakan langsung oleh developer, basic SEO sudah termasuk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
          >
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#18181A] text-white font-semibold rounded-xl text-md hover:bg-[#27272A] hover:shadow-lg transition-all duration-300"
            >
              Konsultasi Gratis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-transparent border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold rounded-xl text-md transition-all duration-300"
            >
              Lihat Layanan
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Section Keunggulan - Editorial Bento Layout */}
      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#18181A] tracking-tight mb-4">Kenapa Pilih WebCipta?</h2>
              <p className="text-[#52525B] text-lg">Solusi nyata tanpa janji berlebihan. Kami berikan website terbaik sesuai kebutuhan Anda.</p>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: <Zap />, title: "Harga Terjangkau", desc: "Sangat bersahabat untuk bisnis yang baru mau mulai go digital.", colSpan: "md:col-span-1" },
              { icon: <Code2 />, title: "Dikerjakan Developer", desc: "Proses teknis dan optimasi ditangani langsung, bukan di-lempar ke pihak lain.", colSpan: "md:col-span-2" },
              { icon: <Target />, title: "Basic SEO Termasuk", desc: "Website dioptimalkan dari awal agar lebih mudah dikenali mesin pencari Google.", colSpan: "md:col-span-1" },
              { icon: <Users />, title: "Fokus Bisnis Lokal", desc: "Cocok untuk UMKM, personal brand, maupun jasa layanan di daerah Anda.", colSpan: "md:col-span-1" },
              { icon: <Rocket />, title: "Cepat Pakai AI", desc: "Proses riset dan penyusunan struktur dibantu AI, pengerjaan jadi sangat efisien.", colSpan: "md:col-span-1" },
              { icon: <Layout />, title: "Terima Beres", desc: "Bisa bantu arahan desain, konfigurasi domain, sampai website siap online.", colSpan: "md:col-span-3" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className={`${item.colSpan} bg-[#FCFCFC] border border-gray-200 p-8 rounded-2xl hover:border-gray-300 transition-colors duration-300 group`}>
                <div className="w-10 h-10 text-[var(--color-accent)] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-[#52525B] leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Section Tentang Singkat - Classic split */}
      <section className="py-32 bg-[#FCFCFC] px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-5/12">
             <div className="text-[var(--color-accent)] font-semibold uppercase tracking-widest text-xs mb-4">Tentang Studio</div>
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#18181A] leading-tight mb-8">
               Tentang WebCipta
             </h2>
             <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-1 hover:text-indigo-900 hover:border-indigo-900 transition-colors">
               Kenali Kami Lebih Dekat <ArrowRight className="w-4 h-4 ml-1" />
             </Link>
          </div>
          <div className="md:w-7/12">
            <p className="text-[#52525B] text-xl leading-relaxed mb-8">
              WebCipta adalah jasa pembuatan website yang fokus membantu bisnis dan personal brand tampil lebih profesional di internet.
            </p>
            <p className="text-[#52525B] text-lg leading-relaxed mb-10">
              Dikelola langsung oleh solo developer yang menggabungkan kemampuan kustomisasi coding detail dengan kecerdasan AI. Ini memastikan proses pembuatan jadi lebih efisien, cepat, dan rapi. Pendekatan yang paling pas jika Anda butuh website untuk mulai memvalidasi ide tanpa harus keluar modal jasa agency besar di awal.
            </p>
            
            <div className="pl-6 border-l border-gray-300 relative py-2 mt-12">
              <Quote className="absolute -left-[14px] -top-4 w-6 h-6 text-gray-300 bg-[#FCFCFC]" />
              <p className="text-lg italic text-[#18181A] font-serif leading-relaxed">
                "Fokus kami bukan pada fitur rumit yang jarang dipakai, tapi pada performa tinggi, informasi yang jelas, dan kemudahan klien mengelola bisnisnya dari sebuah website."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Layanan Ringkas & 6. Jenis Website */}
      <section className="py-32 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#18181A] mb-4 tracking-tight">Website Apa Saja yang Bisa Dibuat?</h2>
            <p className="text-[#52525B] max-w-2xl mx-auto text-lg">
              Kami menyediakan berbagai kebutuhan website sesuai tujuan bisnis Anda, mulai dari landing page sederhana sampai integrasi custom.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
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
               <div key={i} className="group cursor-default">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[var(--color-accent)] transition-colors"></div>
                   <h4 className="font-bold text-gray-900">{type.name}</h4>
                 </div>
                 <p className="text-sm text-[#52525B] leading-relaxed pl-4.5">{type.act}</p>
               </div>
             ))}
          </div>
          <div className="mt-20 text-center">
              <Link href="/services" className="inline-block px-8 py-3 bg-white border border-gray-300 hover:border-gray-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
                Lihat Detail Layanan
              </Link>
          </div>
        </div>
      </section>

      {/* 5. Section Harga Utama */}
      <section className="py-32 bg-[#FCFCFC] px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 text-left">
            <div className="inline-flex border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold px-3 py-1 rounded-md text-xs uppercase tracking-widest mb-6">Paket Starter</div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#18181A] mb-4 tracking-tight">Landing Page</h2>
            <p className="text-[#52525B] text-lg mb-8 leading-relaxed">Pilihan pas bagi UMKM promosi usaha, produk, dan campaign tanpa ribet.</p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-[#52525B] font-medium mb-1">Mulai dari</span>
              <span className="text-4xl md:text-5xl font-black text-[#18181A] tracking-tighter">Rp 550<span className="text-2xl text-gray-400">rb</span></span>
            </div>
            <Link href="/pricing" className="inline-flex justify-center w-full md:w-auto px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl text-md transition-all duration-300">
              Lihat Detail Harga
            </Link>
            <p className="text-xs text-gray-400 mt-4">*Biaya domain menyesuaikan ekstensi (cth: .com / .id)</p>
          </div>

          <div className="md:w-1/2 w-full border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
            <ul className="space-y-5">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" /> <span className="text-[#18181A] font-medium">Desain 1 Halaman Responsif</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" /> <span className="text-[#18181A] font-medium">Basic SEO Termasuk</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" /> <span className="text-[#18181A] font-medium">Bantuan Seting Domain</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" /> <span className="text-[#18181A] font-medium">Hosting Super Cepat (Vercel)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" /> <span className="text-[#18181A] font-medium">Integrasi Tombol WhatsApp</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" /> <span className="text-[#18181A] font-medium">Berorientasi Konversi Pelanggan</span></li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* 8. Proses Kerja & 9. Cocok Untuk Siapa */}
      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24">
          
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#18181A] mb-8">Cocok Untuk Siapa Saja?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Pebisnis UMKM", "Pemilik Toko Lokal", "Penyedia Jasa", "Personal Brand", 
                "Freelancer Lepas", "Toko Online Ringkas", "Event Organizer", "Usaha Baru Go Digital"
              ].map((target, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-100">
                  <div className="w-1.5 h-1.5 bg-gray-300"></div>
                  <span className="font-medium text-gray-700 text-sm">{target}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
             <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#18181A] mb-10">Proses Pengerjaan</h2>
             <div className="space-y-8 relative before:absolute before:inset-0 before:-left-3 before:h-full before:w-[1px] before:bg-gray-200 pl-4">
                {[
                  "Konsultasi awal & memetakan apa yang bisnis butuhkan.",
                  "Sepakati jenis website dan harga sesuai fungsional minimal.",
                  "Pengumpulan materi (logo, teks, foto produk, dll).",
                  "Mulai proses pengkodean website (Development).",
                  "Review akhir dan revisi minor sesuai kesepakatan.",
                  "Website berhasil live dan diserahkan!"
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[35px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[var(--color-accent)] flex items-center justify-center">
                    </div>
                    <span className="text-sm font-bold text-gray-400 mb-1 block">Langkah {idx + 1}</span>
                    <p className="text-[#18181A] font-medium">{step}</p>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 7. VPS vs Vercel Info Box */}
      <section className="py-24 bg-[#FCFCFC] px-6">
        <div className="max-w-4xl mx-auto">
           <div className="border border-gray-200 bg-white rounded-xl p-8 md:p-12 text-[#18181A] shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg flex-shrink-0">
                  <Server className="w-8 h-8 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-heading tracking-tight">Bingung Hosting: Vercel, Supabase, atau VPS?</h3>
                  <p className="text-[#52525B] leading-relaxed text-sm md:text-base">
                    Untuk mayoritas landing page atau profil bisnis, <strong className="font-semibold text-gray-900">Vercel</strong> gratis, super tangguh, dan sangat cepat. Kalau ada pendataan atau form interaktif, gabungan dengan <strong className="font-semibold text-gray-900">Supabase</strong> adalah pilihan termurah. Kami hanya akan merekomendasikan <strong className="font-semibold text-gray-900">VPS</strong> mahal jika memang fitur website Anda butuh kontrol server seutuhnya. Tim kami yang akan menganalisa dan memilihkan infrastrukturnya, jadi Anda tidak perlu bingung.
                  </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 10. CTA Penutup */}
      <section className="py-32 bg-white text-[#18181A] px-6 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-heading tracking-tight scale-y-95">Siap Punya Website untuk Bisnis Anda?</h2>
          <p className="text-[#52525B] text-lg md:text-xl mb-12">
            Kalau Anda ingin punya website yang simpel, profesional, nyata, dan tidak bikin modal awal terlalu berat, WebCipta siap membantu temukan solusi.
          </p>
          <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#18181A] text-white hover:bg-[#27272A] font-semibold rounded-xl text-lg shadow-xl transition-all duration-300"
            >
              Hubungi Sekarang <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
