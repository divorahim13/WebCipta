import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Monitor, Zap, Search, MessageSquare, Briefcase, Code2, MoveRight, Lock, Webhook, LineChart, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-[var(--background)]">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[var(--color-secondary-bg)] to-transparent rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* Typography Left */}
            <div className="lg:col-span-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-[10px] font-bold uppercase tracking-[0.15em] text-[#52525B] mb-8 relative">
                <span className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[var(--color-highlight)]"></span>
                Tersedia untuk proyek baru
              </div>
              <h1 className="text-5xl md:text-[68px] font-black font-heading text-[#18181A] leading-[1.05] tracking-tight mb-8">
                Website yang Rapi, Cepat, dan Siap Meningkatkan <span className="text-[var(--color-accent)] relative inline-block">Kepercayaan.
                  <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-[var(--color-highlight)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
                </span>
              </h1>
              <p className="text-lg text-[#52525B] mb-10 leading-relaxed font-light">
                WebCipta adalah agensi pembuatan website profesional di Cibubur. Kami merancang website yang tampil meyakinkan, fungsional, dan dioptimalkan untuk menarik pelanggan bisnis lokal Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)]">Mulai Konsultasi</Button>
                </Link>
                <Link href="#portfolio" className="hidden sm:block">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Lihat Hasil Karya</Button>
                </Link>
              </div>
            </div>

            {/* Deep "Proof of Work" Clean Mockup Cluster Right */}
            <div className="lg:col-span-6 relative perspective-[1200px] h-[400px] sm:h-[500px]">
              {/* Back Mockup (Blurred/Dark) */}
              <div className="absolute top-[10%] right-[10%] w-[80%] h-[80%] bg-[#0F172A] rounded-md border border-gray-800 shadow-2xl transform rotate-y-[-10deg] rotate-z-[2deg] translate-x-12 -translate-z-20 opacity-80 overflow-hidden flex flex-col">
                <div className="h-6 bg-[#1E293B] flex items-center px-3 gap-1.5 border-b border-gray-800 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
                <div className="p-4 flex-1">
                   <div className="w-1/3 h-4 bg-gray-700 rounded mb-4"></div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="h-24 bg-gray-800 rounded"></div><div className="h-24 bg-gray-800 rounded"></div>
                   </div>
                </div>
              </div>

              {/* Front Mockup (Crisp, High Detail) */}
              <div className="absolute top-[20%] left-0 w-[95%] h-[85%] bg-white rounded-md border border-gray-200/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transform rotate-y-[-4deg] translate-z-10 overflow-hidden flex flex-col overflow-y-hidden">
                <div className="h-8 bg-[#F8FAFC] flex items-center px-4 gap-2 border-b border-gray-100 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="ml-auto w-1/2 h-4 bg-white border border-gray-100 rounded-sm"></div>
                </div>
                <div className="flex-1 overflow-hidden relative bg-[#FCFBF9]">
                   <div className="flex justify-between items-center p-6 border-b border-gray-100/50">
                     <div className="text-xl font-black tracking-tighter text-[#1C1B1A]">HudBakes<span className="text-[var(--color-highlight)]">.</span></div>
                     <div className="flex gap-4"><div className="w-12 h-2 bg-gray-200 rounded"></div><div className="w-12 h-2 bg-gray-200 rounded"></div></div>
                   </div>
                   <div className="p-8 text-center border-b border-gray-100/50 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50"></div>
                      <div className="w-16 h-4 bg-gray-200 rounded mx-auto mb-6"></div>
                      <div className="w-3/4 h-8 bg-[#1C1B1A] rounded mx-auto mb-3"></div><div className="w-1/2 h-8 bg-[#1C1B1A] rounded mx-auto mb-8"></div>
                      <div className="flex justify-center gap-3 relative z-10">
                        <div className="w-24 h-8 bg-gray-200 rounded-sm"></div><div className="w-24 h-8 bg-white border border-gray-200 rounded-sm"></div>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="absolute bottom-[5%] right-0 bg-white p-4 rounded-sm border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transform translate-z-30 flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center font-black text-lg text-[var(--color-highlight)]">99</div>
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] mb-0.5">Performa</div>
                   <div className="text-sm font-bold text-[#1C1B1A]">Skor Google</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karya Terpilih (Selected Work) - HUMANIZED ASSET LAYER */}
      <section id="portfolio" className="py-24 bg-[#1C1B1A] relative overflow-hidden">
        {/* Subtle dark texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
             <div>
               <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-4 flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-[var(--color-highlight)]"></span> Bukti Kerja
               </h2>
               <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">Karya Terpilih.</h3>
             </div>
             <p className="text-[#94A3B8] font-light max-w-md">Hasil desain antarmuka nyata menonjolkan esensi *brand* lokal dan profesional lepas (freelancer).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Portfolio 1 (Light Mockup) */}
            <div className="group">
              <div className="relative aspect-[4/3] rounded-[2px] bg-[#292827] border border-gray-800 overflow-hidden shadow-2xl mb-6">
                {/* Browser top-bar */}
                <div className="absolute top-0 left-0 w-full h-8 bg-[#18181A] border-b border-gray-800 flex items-center px-4 z-10">
                  <div className="flex gap-1.5 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  </div>
                </div>
                {/* Genuine Image generated from prompt */}
                <div className="absolute top-8 left-0 w-full h-[calc(100%-2rem)]">
                  <Image 
                    src="/assets/work-1.png" 
                    alt="Mockup website estetik gaya terang"
                    fill
                    className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                 <div>
                   <h4 className="text-white font-bold text-xl font-heading mb-2">Artisan Bakery</h4>
                   <p className="text-[#94A3B8] text-[15px] font-light">Landing page estetik bisnis lokal</p>
                 </div>
              </div>
            </div>

            {/* Portfolio 2 (Dark Mockup) */}
            <div className="group md:mt-12">
              <div className="relative aspect-[4/3] rounded-[2px] bg-[#0F172A] border border-[#1E293B] overflow-hidden shadow-2xl mb-6">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#09090B] border-b border-[#1E293B] flex items-center px-4 z-10">
                  <div className="flex gap-1.5 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                </div>
                {/* Genuine Image generated from prompt */}
                <div className="absolute top-8 left-0 w-full h-[calc(100%-2rem)]">
                  <Image 
                    src="/assets/work-2.png" 
                    alt="Mockup portofolio personal gelap"
                    fill
                    className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                 <div>
                   <h4 className="text-white font-bold text-xl font-heading mb-2">Dev. Studio</h4>
                   <p className="text-[#94A3B8] text-[15px] font-light">Website portofolio desainer teknis</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Stack Section Compact */}
      <section className="py-20 bg-[#F8FAFC] border-t border-b border-gray-200/80">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-4">Fondasi Website</h2>
            <h3 className="text-3xl font-bold font-heading text-[#18181A] mb-4">Teknologi yang Kami Gunakan</h3>
            <p className="text-[#52525B] font-light">WebCipta membangun website dengan teknologi modern yang ringan, cepat, dan relevan untuk kebutuhan bisnis saat ini.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            {/* FRONTEND */}
            <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
               <h4 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Frontend</h4>
               <div className="flex flex-wrap gap-2">
                 {[
                   { name: "Next.js", icon: "/icons/tech/nextjs.svg" },
                   { name: "React", icon: "/icons/tech/react.svg" },
                   { name: "Tailwind CSS", icon: "/icons/tech/tailwindcss.svg" },
                   { name: "TypeScript", icon: "/icons/tech/typescript.svg" }
                 ].map((t) => (
                   <span key={t.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-gray-200 text-[#18181A] text-[12px] font-semibold rounded-sm">
                      <Image src={t.icon} width={16} height={16} alt={t.name} className="opacity-90" /> {t.name}
                   </span>
                 ))}
               </div>
            </div>

            {/* BACKEND & DATABASE */}
            <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
               <h4 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Backend & Database</h4>
               <div className="flex flex-wrap gap-2">
                 {[
                   { name: "Node.js", icon: "/icons/tech/nodejs.svg" },
                   { name: "Supabase", icon: "/icons/tech/supabase.svg" },
                   { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
                   { name: "Prisma", icon: "/icons/tech/prisma.svg" },
                   { name: "Auth", icon: "/icons/ui/key.svg" }
                 ].map((t) => (
                   <span key={t.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-gray-200 text-[#18181A] text-[12px] font-semibold rounded-sm">
                      <Image src={t.icon} width={16} height={16} alt={t.name} className="opacity-90" /> {t.name}
                   </span>
                 ))}
               </div>
            </div>

            {/* DEPLOYMENT & WORKFLOW */}
            <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
               <h4 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Deployment & Workflow</h4>
               <div className="flex flex-wrap gap-2">
                 {[
                   { name: "Vercel", icon: "/icons/tech/vercel.svg" },
                   { name: "GitHub", icon: "/icons/tech/github.svg" },
                   { name: "Responsive", icon: "/icons/ui/smartphone.svg" },
                   { name: "SEO", icon: "/icons/ui/search.svg" },
                   { name: "WhatsApp", icon: "/icons/ui/whatsapp.svg" }
                 ].map((t) => (
                   <span key={t.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-gray-200 text-[#18181A] text-[12px] font-semibold rounded-sm">
                      <Image src={t.icon} width={16} height={16} alt={t.name} className="opacity-90" /> {t.name}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="mt-12 text-center md:text-left text-[13px] text-[#94A3B8] font-light">
             Teknologi yang tepat membantu website tetap cepat, rapi, dan lebih siap berkembang sesuai kebutuhan bisnis.
          </div>
        </div>
      </section>

      {/* Solo Developer Identity Section (SPLIT HUMANISED LAYOUT) */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* The Physical Context (Workspace Photo) */}
            <div className="order-2 lg:order-1 relative perspective-[1000px]">
              <div className="relative aspect-square md:aspect-[4/5] bg-[#F8FAFC] border border-gray-200 p-3 shadow-xl transform rotate-y-[2deg]">
                 <div className="relative w-full h-full overflow-hidden bg-[#18181A]">
                    <Image 
                      src="/assets/workspace.png"
                      alt="Meja kerja solo developer spesialis react dan next.js"
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                 </div>
              </div>
              {/* Floating identity plaque */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-6 shrink-0 flex gap-4 max-w-xs transform translate-z-20">
                 <div className="w-12 h-12 bg-[var(--color-secondary-bg)] border border-gray-200 rounded flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5 text-[#52525B]" />
                 </div>
                 <div>
                    <h5 className="font-bold text-[#1C1B1A]">Di Balik WebCipta</h5>
                    <p className="text-[12px] text-[#94A3B8] uppercase tracking-wider font-bold">Fokus Kualitas</p>
                 </div>
              </div>
            </div>

            {/* The Human Statement */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-highlight)] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[var(--color-highlight)]"></span>
                Pendekatan Kami
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] leading-tight mb-8">
                Kualitas Premium.<br/>Alur Kerja Profesional.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-6 font-light text-lg">
                Sebagai agensi website butik yang berfokus pada hasil praktis, WebCipta memastikan setiap proyek ditangani dengan standar yang tinggi—tanpa birokrasi berbelit. Kepastian biaya, kejelasan struktur, dan hasil akhir yang solid adalah janji kami kepada setiap klien bisnis lokal.
              </p>
              
              <ul className="space-y-4 mt-8 pt-8 border-t border-gray-100">
                <li className="flex gap-3">
                   <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0 mt-0.5" />
                   <span className="text-[#18181A] font-medium">Bespoke Design, tidak menggunakan template murahan.</span>
                </li>
                <li className="flex gap-3">
                   <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0 mt-0.5" />
                   <span className="text-[#18181A] font-medium">Struktur yang efisien agar website dimuat dengan cepat.</span>
                </li>
                <li className="flex gap-3">
                   <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0 mt-0.5" />
                   <span className="text-[#18181A] font-medium">Technical SEO dasar disertakan secara bawaan.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Crafted Process Timeline (Enhanced with Visual Background) */}
      <section className="py-24 bg-[var(--color-secondary-bg)] border-b border-gray-200/80 overflow-hidden relative">
        {/* Real Wireframe Texture integration */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none mix-blend-multiply">
           <Image 
             src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80"
             alt="Wireframe Blueprint"
             fill
             className="object-cover object-right"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary-bg)] to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex justify-between items-end mb-16">
             <div className="max-w-2xl">
               <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-4">SOP Pelaksanaan</h2>
               <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A]">
                 Evolusi Ide Menjadi Realita.
               </h3>
             </div>
             <Link href="/about" className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#52525B] hover:text-[#18181A]">
               Pelajari Lebih <MoveRight className="w-4 h-4" />
             </Link>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[19px] md:left-auto md:top-[28px] md:right-0 md:left-[5%] md:h-[1px] md:w-[90%] bg-gray-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10 pl-14 md:pl-0">
              {[
                { step: "01", title: "Discovery", desc: "Sesi kalibrasi memahami arah bisnis dan pemetaan arsitektur konten." },
                { step: "02", title: "Wireframe", desc: "Penyusunan hirarki visual struktur tata letak (blueprint antarmuka)." },
                { step: "03", title: "Development", desc: "Desain visual ditarik menjadi baris kode interaktif dengan Next.js." },
                { step: "04", title: "Handover", desc: "Instalasi ke cloud, uji kecepatan standar industri, dan penyerahan aset." },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-14 top-1 w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center font-bold text-sm text-[var(--color-accent)] md:hidden">
                    {item.step}
                  </div>
                  <div className="hidden md:flex w-14 h-14 bg-white border-2 border-gray-200 rounded-full items-center justify-center font-bold text-sm font-heading text-[#1C1B1A] mb-8 mx-auto shadow-sm group-hover:border-[var(--color-accent)] group-hover:bg-[#F8FAFC] transition-colors">
                    {item.step}
                  </div>
                  <div className="md:px-4 md:text-center">
                    <h4 className="text-lg font-bold font-heading mb-2 text-[#18181A]">{item.title}</h4>
                    <p className="text-[14px] text-[#52525B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layered Pricing Representation */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-40"></div>
        
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#0F172A] rounded-[2px] shadow-2xl p-1 md:p-2">
             <div className="grid md:grid-cols-2 bg-[#1E293B] border border-[#334155] rounded-[1px] overflow-hidden">
                <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#334155] relative overflow-hidden flex flex-col justify-center">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-highlight)] to-transparent"></div>
                   <h2 className="text-2xl font-bold font-heading text-white mb-4">Investasi Tanpa Beban Tahunan.</h2>
                   <p className="text-[#94A3B8] leading-relaxed mb-8 text-[15px] font-light">
                     Melalui infrastruktur *Edge Network* berkinerja global, website profil Anda bisa menekan biaya server ke angka nol. Pengeluaran tunggal untuk seumur hidup.
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-3">
                       <Check className="w-4 h-4 text-[var(--color-highlight)]" />
                       <span className="text-sm text-[#CBD5E1]">SSL & Cloud CDN Global (Gratis)</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <Check className="w-4 h-4 text-[var(--color-highlight)]" />
                       <span className="text-sm text-[#CBD5E1]">Akses Repositori Original Code</span>
                     </li>
                   </ul>
                </div>

                <div className="bg-[#0B1120] p-10 md:p-14 flex flex-col justify-center items-center text-center relative z-10">
                   <div className="mb-4">
                     <span className="inline-block px-3 py-1 border border-[#334155] bg-[#1E293B] text-[10px] font-bold text-white uppercase tracking-widest mb-6">Mulai Dari</span>
                   </div>
                   <div className="flex items-start gap-1 justify-center mb-6">
                     <span className="text-2xl font-bold text-[#94A3B8] mt-1">Rp</span>
                     <span className="text-6xl md:text-7xl font-black font-heading tracking-tighter text-white">550<span className="text-3xl text-[#94A3B8]">k</span></span>
                   </div>
                   <p className="text-xs text-[#64748B] mb-10 leading-relaxed max-w-[200px]">
                     Satu Kali Pembayaran.<br/>Desain eksklusif hinga 3 Halaman.
                   </p>
                   <Link href="/pricing" className="w-full">
                     <button className="w-full h-12 bg-white text-[#0F172A] font-bold text-[13px] uppercase tracking-widest hover:bg-gray-200 transition-colors">
                       Lihat Detail Penawaran
                     </button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Structured CTA */}
      <section className="py-24 bg-[#FCFBF9] border-t border-gray-200/80">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="w-16 h-1 bg-[var(--color-highlight)] mx-auto mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-[#18181A] mb-8 leading-tight">
            Level Baru Untuk Kedigitalan Bisnis Anda.
          </h2>
          <p className="text-lg text-[#52525B] mb-12 font-light">
            Sesi konsultasi pertama kami murni digunakan untuk pembedahan strategi dan kecocokan ide tanpa ikatan komitmen.
          </p>
          <Link href="/contact">
            <Button size="lg" className="shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-12">Reservasi Jam Diskusi</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
