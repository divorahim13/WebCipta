import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Harga Paket Website | WebCipta Cibubur',
  description: 'Daftar harga transparan paket pembuatan website di WebCipta. Tanpa biaya tersembunyi, cocok untuk semua jenis UMKM.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">Harga Transparan, Tanpa Jebakan Bulanan</h1>
          <p className="text-xl text-gray-600">
            Pilih paket sesuai kebutuhan saat ini. Anda selalu bisa melakukan ekspansi belakangan saat bisnis Anda bertumbuh.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-24 max-w-6xl mx-auto">
          
          {/* Paket 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Landing Page</h3>
            <p className="text-gray-500 mb-6 min-h-[48px]">Cocok untuk tes market, iklan, atau promosi single product.</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-4xl font-extrabold text-gray-900">Rp 550</span>
              <span className="text-lg text-gray-500 font-medium mb-1">rb</span>
            </div>
            
            <Link href="/contact" className="block w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-center rounded-xl transition-colors mb-8">
              Pilih Paket
            </Link>

            <ul className="space-y-4">
              {['1 Halaman Responsif', 'SEO Basic (Meta Tag)', 'Float Button WhatsApp', 'Hosting Gratis (Vercel)', '1x Revisi Mayor'].map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="text-gray-600">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paket 2 (Featured) */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-2xl transform md:-translate-y-4 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white font-bold px-4 py-1 rounded-full text-sm">
                TERLARIS
             </div>
            <h3 className="text-2xl font-bold text-white mb-2">Profil Bisnis Lokal</h3>
            <p className="text-gray-400 mb-6 min-h-[48px]">Paket andalan UMKM untuk tampil proper di perncarian Google.</p>
            <div className="flex items-end gap-1 mb-8 text-white">
              <span className="text-4xl font-extrabold">Rp 1,2</span>
              <span className="text-lg text-gray-400 font-medium mb-1">Juta</span>
              <span className="text-sm border border-gray-700 px-2 py-0.5 rounded-md ml-2 mb-2 text-gray-400">Fix</span>
            </div>
            
            <Link href="/contact" className="block w-full py-3 px-6 bg-accent hover:bg-blue-600 text-white font-bold text-center rounded-xl transition-colors mb-8 shadow-xl">
              Pilih Paket
            </Link>

            <ul className="space-y-4">
              {['Maksimal 5 Halaman', 'Integrasi Google Maps', 'Galeri Foto Produk / Outlet', 'SEO On-Page Lengkap', 'Form Kontak ke Email/Database', 'Hosting Berkualitas', '2x Revisi Mayor'].map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-gray-300">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paket 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Katalog / Toko Edukasi</h3>
            <p className="text-gray-500 mb-6 min-h-[48px]">Website dengan interaksi CMS atau ratusan input data.</p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-lg text-gray-500 font-medium mb-1">Mulai</span>
              <span className="text-4xl font-extrabold text-gray-900">Rp 2,5</span>
              <span className="text-lg text-gray-500 font-medium mb-1">Juta</span>
            </div>
            
            <Link href="/contact" className="block w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-center rounded-xl transition-colors mb-8">
              Diskusi Dulu
            </Link>

            <ul className="space-y-4">
              {['Sistem Database (Supabase)', 'Dashboard Admin Mini', 'Fitur Filter / Search', 'Upload Ratusan Item', 'Struktur Kategori Kompleks', 'Unmetered Bandwidth'].map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="text-gray-600">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer Area */}
        <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-8 flex gap-6 items-start">
           <HelpCircle className="w-8 h-8 text-accent shrink-0" />
           <div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Penting Diketahui Terkait Harga</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                 Harga yang tercantum di atas <strong>BELUM termasuk biaya pembelian Domain</strong> (seperti .com, .id, atau .co.id). Biaya domain bervariasi dari Rp 150rb hingga Rp 300rb-an per tahun tergantung registrar resminya.
              </p>
              <p className="text-gray-600 leading-relaxed">
                 Namun untuk <strong>Hosting</strong>, kami memaksimalkan layanan tier gratis terkuat (seperti Vercel atau Supabase Basic) jika performa website Anda belum menuntut lalu lintas gila-gilaan, sehingga tidak ada *hidden cost* server bulanan yang memberatkan Anda di tahun pertama.
              </p>
           </div>
        </div>

      </div>
    </main>
  );
}
