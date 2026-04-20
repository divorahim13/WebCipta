import Link from "next/link";
import { ArrowRight, Code2, Users, Rocket, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Tentang Kami",
  description: "Mengenal lebih dekat visi WebCipta sebagai agensi pembuatan website andalan UMKM dan bisnis lokal di Cibubur.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black font-heading text-[#18181A] mb-8 leading-tight tracking-tight">
              Di Balik <span className="text-[var(--color-accent)]">WebCipta.</span>
            </h1>
            <p className="text-xl text-[#52525B] leading-relaxed font-light">
              Kami memulai WebCipta dengan satu observasi sederhana: Kebanyakan pemilik bisnis kecil di Indonesia membutuhkan website yang profesional, namun dihadapkan pada dua pilihan yang sama-sama tidak ideal.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="py-24 bg-[var(--color-secondary-bg)] border-y border-gray-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase mt-2 mb-6">Problema Industri</h2>
              <h3 className="text-3xl font-bold font-heading text-[#18181A] mb-6 leading-tight">
                Terjebak antara Template Murahan dan Agensi Eksklusif.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-6">
                Pilihan pertama adalah membangun sendiri menggunakan template builder (Wix/WordPress). Meski murah, hasilnya seringkali terasa generic, lambat dimuat, dan SEO-nya kurang dioptimalkan jika tidak paham teknisnya.
              </p>
              <p className="text-[#52525B] leading-relaxed">
                Pilihan kedua adalah menyewa Corporate Agency. Hasilnya indah, namun bisnis skala UMKM atau freelancer seringkali tidak memiliki budget puluhan juta hanya untuk profil perusahaan sederhana.
              </p>
            </div>
            
            <div className="bg-white p-10 md:p-12 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-sm font-bold tracking-widest text-[var(--color-highlight)] uppercase mb-6">Solusi WebCipta</h2>
              <h3 className="text-3xl font-bold font-heading text-[#18181A] mb-6 leading-tight">
                Boutique Agency untuk Skala UMKM.
              </h3>
              <p className="text-[#52525B] leading-relaxed mb-6">
                Kami membangun WebCipta sebagai jalan tengah. Dikelola dengan sistem <em>solo developer agency</em>, kami memangkas biaya account manager, sewa kantor, dan overhead birokrasi. 
              </p>
              <p className="text-[#52525B] leading-relaxed">
                Anda berdiskusi dengan orang yang sama, yang akan menulis langsung baris kode website Anda. Hasilnya? Harga yang jauh lebih masuk akal dengan kualitas arsitektur modern (Next.js/React) yang biasa digunakan startup teknologi kelas dunia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase mb-4 text-center">Pilar Berpikir</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#18181A] text-center mb-16 max-w-2xl mx-auto">
            Nilai Inti yang Mengarahkan Setiap Baris Kode Kami.
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <div>
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-6">
                 <Rocket className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-3">Kecepatan Mayor</h4>
              <p className="text-sm text-[#52525B] leading-relaxed">Website lelet membunuh konversi. Kami tidak berkompromi soal performa. Setiap aset dioptimasi otomatis.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-6">
                 <ShieldCheck className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-3">Kode Bersih</h4>
              <p className="text-sm text-[#52525B] leading-relaxed">Meninggalkan platform builder yang bengkak. Kami menulis struktur langsung menggunakan framework minimalis modern.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-6">
                 <Users className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-3">Empati Pengguna</h4>
              <p className="text-sm text-[#52525B] leading-relaxed">Desain bukan cuma soal warna, tapi kemudahan baca dan navigasi. Fokus pada User Experience.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-6">
                 <Code2 className="w-5 h-5 text-[#18181A]" />
              </div>
              <h4 className="text-lg font-bold font-heading mb-3">AI & Automasi</h4>
              <p className="text-sm text-[#52525B] leading-relaxed">Secara cerdas menggunakan AI untuk mempercepat alur kerja development tanpa meniadakan sentuhan manusia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-24 bg-[#0F172A] text-center border-t border-[#1E293B]">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold font-heading text-white mb-6">Mari Ciptakan Sesuatu yang Hebat.</h2>
          <p className="text-[#94A3B8] mb-10 leading-relaxed max-w-lg mx-auto">
            Apakah Anda siap meningkatkan profil digital bisnis Anda ke standar selanjutnya? Konsultasikan ide Anda bersama mekanik kami.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-[var(--color-highlight)] hover:text-white transition-colors">
            Hubungi WebCipta Sekarang <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
