import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Harga Paket Website | WebCipta Cibubur',
  description: 'Daftar harga transparan paket pembuatan website di WebCipta. Tanpa biaya tersembunyi, cocok untuk semua jenis UMKM.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-24">
      
      {/* Header Section */}
      <section className="bg-[#FCFCFC] pt-36 pb-24 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black font-heading text-[#18181A] mb-8 tracking-tight">Harga Transparan, <br className="hidden md:block"/> Tanpa Jebakan Bulanan.</h1>
          <p className="text-xl text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            Pilih paket sesuai kebutuhan saat ini. Anda selalu bisa melakukan ekspansi belakangan saat bisnis Anda bertumbuh.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Premium Monochromatic Theme */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-end">
            
            {/* Paket 1: Basic Landing Page */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm transition-all hover:border-gray-300">
              <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-3">Basic Landing Page</h3>
              <p className="text-[#52525B] mb-8 min-h-[50px] leading-relaxed">Cocok untuk tes market, iklan, atau promosi single product.</p>
              
              <div className="mb-10 text-[#18181A]">
                <span className="text-base text-[#52525B] font-medium block mb-1">Mulai dari</span>
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black tracking-tight">Rp 550</span>
                  <span className="text-xl font-bold mt-1">rb</span>
                </div>
              </div>
              
              <Link href="/contact" className="block w-full py-4 text-center border border-gray-300 hover:border-gray-900 text-[#18181A] font-semibold rounded-xl transition-all mb-10">
                Pilih Paket
              </Link>
  
              <ul className="space-y-4">
                {['1 Halaman Responsif', 'SEO Basic (Meta Tag)', 'Float Button WhatsApp', 'Hosting Gratis (Vercel)', '1x Revisi Mayor'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0" />
                    <span className="text-[#18181A] font-medium text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Paket 2: Profil Bisnis (Featured Charcoal) */}
            <div className="bg-[#18181A] text-white p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative transform md:-translate-y-4 border border-gray-800">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase">
                  Pilihan Utama
               </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-3">Profil Bisnis Lokal</h3>
              <p className="text-gray-400 mb-8 min-h-[50px] leading-relaxed">Paket andalan UMKM untuk tampil proper di pencarian Google.</p>
              
              <div className="mb-10">
                <span className="text-base text-gray-400 font-medium block mb-1">Fix Fee</span>
                <div className="flex items-start gap-1">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">Rp 1,2</span>
                  <span className="text-xl lg:text-2xl font-bold mt-1 text-gray-200">Juta</span>
                </div>
              </div>
              
              <Link href="/contact" className="block w-full py-4 text-center bg-white hover:bg-gray-100 text-[#18181A] font-bold rounded-xl transition-all mb-10">
                Pilih Paket
              </Link>
  
              <ul className="space-y-4">
                {['Maksimal 5 Halaman', 'Integrasi Google Maps', 'Galeri Foto Produk / Outlet', 'SEO On-Page Lengkap', 'Form Kontak ke Email/Database', 'Hosting Berkualitas', '2x Revisi Mayor'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" />
                    <span className="text-gray-200 font-medium text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Paket 3: Katalog / Toko */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm transition-all hover:border-gray-300">
              <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-3">Katalog / Toko Edukasi</h3>
              <p className="text-[#52525B] mb-8 min-h-[50px] leading-relaxed">Website dengan interaksi CMS atau ratusan input data.</p>
              
              <div className="mb-10 text-[#18181A]">
                <span className="text-base text-[#52525B] font-medium block mb-1">Mulai dari</span>
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black tracking-tight">Rp 2,5</span>
                  <span className="text-xl font-bold mt-1">Juta</span>
                </div>
              </div>
              
              <Link href="/contact" className="block w-full py-4 text-center border border-gray-300 hover:border-gray-900 text-[#18181A] font-semibold rounded-xl transition-all mb-10">
                Diskusi Dulu
              </Link>
  
              <ul className="space-y-4">
                {['Sistem Database (Supabase)', 'Dashboard Admin Mini', 'Fitur Filter / Search', 'Upload Ratusan Item', 'Struktur Kategori Kompleks', 'Unmetered Bandwidth'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0" />
                    <span className="text-[#18181A] font-medium text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
  
          </div>
        </div>
      </section>

      {/* Info Box - Sleek Editorial Warning */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto bg-[#FCFCFC] border border-gray-200 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
           {/* Decorative pattern corner */}
           <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,#18181A_2px,transparent_3px)] bg-[size:16px_16px]"></div>
           
           <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm shrink-0">
                <Info className="w-6 h-6 text-[#18181A]" />
              </div>
              <div>
                 <h4 className="font-bold font-heading text-[#18181A] text-2xl mb-4 tracking-tight">Catatan Mengenai Harga</h4>
                 <div className="space-y-4 text-[#52525B] leading-relaxed">
                   <p>
                      Harga yang tercantum di atas <strong className="font-semibold text-[#18181A]">BELUM termasuk biaya pembelian Domain</strong> (seperti .com, .id, atau .co.id). Biaya domain murni dari pihak registrar (bervariasi antara Rp 150rb hingga Rp 300rb-an per tahun).
                   </p>
                   <p>
                      Namun untuk <strong className="font-semibold text-[#18181A]">Hosting</strong>, kami memaksimalkan layanan tier gratis modern (seperti Vercel atau Supabase) yang luar biasa tangguh untuk standar UMKM. Artinya, <em>tidak ada biaya sewa server bulanan</em> tersembunyi yang akan memberatkan Anda di tahun-tahun awal operasional.
                   </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}
