import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Harga",
  description: "Daftar harga transparan jasa pembuatan website WebCipta. Harga rasional untuk UMKM dan pekerja lepas.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black font-heading text-[#18181A] mb-6 tracking-tight leading-tight">
              Investasi Jelas, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-[var(--color-highlight)]">Tanpa Biaya Tersembunyi.</span>
            </h1>
            <p className="text-lg text-[#52525B] leading-relaxed font-light">
              Sebagai agency mandiri, kami bisa memberikan harga premium design-studio dengan angka UMKM. Tidak ada biaya langganan server bulanan, website adalah milik Anda 100%.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Offer */}
      <section className="py-12 bg-white pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="grid lg:grid-cols-12 gap-0 border border-gray-200 overflow-hidden shadow-2xl shadow-[var(--color-accent)]/5">
            {/* Left Detail */}
            <div className="lg:col-span-7 bg-[#FCFBF9] p-10 md:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 shadow-sm text-xs font-bold uppercase tracking-widest text-[#18181A] mb-8">
                Paket Paling Diminati
              </div>
              <h2 className="text-3xl font-bold font-heading text-[#18181A] mb-4">Web Essentials</h2>
              <p className="text-[#52525B] leading-relaxed mb-10">
                Solusi sempurna untuk profil perusahaan, portfolio mandiri, toko jasa lokal, dan pendaratan kampanye marketing. Kuat, cepat, responsif.
              </p>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Desain Landing Page 1-3 Bagian</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Responsive Mobile-First</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Optimasi SEO Fundamental</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Integrasi WhatsApp & Maps</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Bantuan Copywriting Dasar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Asset Image/Illustration Gratis</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Setup Hosting Vercel (Gratis)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-highlight)] shrink-0" />
                  <span className="text-sm font-medium text-[#18181A]">Pengerjaan 3-7 Hari Kerja</span>
                </div>
              </div>
            </div>

            {/* Right Price Box */}
            <div className="lg:col-span-5 bg-[#0F172A] p-10 md:p-16 flex flex-col justify-center text-white relative">
              <div className="absolute top-0 right-0 p-8 bg-white/[0.02] transform rotate-45 translate-x-8 -translate-y-8"></div>
              
              <div className="mb-2">
                <span className="text-[#94A3B8] font-bold text-sm uppercase tracking-widest block mb-2">Satu Kali Bayar</span>
                <div className="flex items-start gap-2">
                  <span className="text-2xl font-bold font-heading mt-1">Rp</span>
                  <span className="text-6xl font-black font-heading tracking-tighter">550<span className="text-3xl text-[#94A3B8]">k</span></span>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] mt-4 mb-10 leading-relaxed pb-8 border-b border-[#334155]">
                Harga bersih. Tanpa maintenance fee kecuali Anda membutuhkan custom domain (.com/.id) atau database dinamis bulanan.
              </p>

              <Link href="/contact" className="w-full">
                <button className="w-full h-14 bg-white text-[#0F172A] font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                   Pesan Kuota Sekarang
                   <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
          
          <div className="mt-10 text-center max-w-2xl mx-auto">
             <p className="text-xs text-[#52525B] font-bold uppercase tracking-widest mb-2">Ingin Kebutuhan Lebih Custom? (CMS, Blog, E-commerce)</p>
             <p className="text-[#18181A] text-sm">
               Kirimkan spesifikasi proyek Anda, kami akan hitungkan estimasi terbaik secara transparan. <Link href="/contact" className="text-[var(--color-accent)] font-bold hover:underline">Hubungi kami via email.</Link>
             </p>
          </div>

        </div>
      </section>
    </>
  );
}
