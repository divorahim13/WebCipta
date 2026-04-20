import { Metadata } from 'next';
import { ArrowRight, Code2, Cpu, LineChart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang WebCipta | Solo Developer Website Cibubur',
  description: 'Mengenal WebCipta. Solo developer agency yang fokus melayani UMKM, personal brand, dan bisnis lokal Cibubur dengan harga terjangkau.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 bg-blue-50 h-full -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
              Di Balik Layar <span className="text-accent">WebCipta</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Membantu bisnis lokal Anda maju ke ranah digital melalui sentuhan website yang terstruktur, personal, dan efisien secara biaya.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Meja Kerja WebCipta"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">Bukan Agency Besar yang Mahal</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                WebCipta berawal dari keresahan melihat banyaknya pebisnis lokal, UMKM, dan profesional di sekitar Cibubur yang ingin punya website sendiri, tapi tertahan oleh harga jasa agency yang bisa mencapai belasan hingga puluhan juta.
              </p>
              <p>
                Di sisi lain, memakai pembuat website otomatis (builder) atau CMS yang berat seringkali merepotkan, hasilnya kaku, dan lambat saat diakses.
              </p>
              <p>
                <strong>WebCipta hadir sebagai solo developer agency.</strong> Semua pekerjaan, mulai dari analisis kebutuhan, kustomisasi layout, sampai peluncuran domain diproses langsung oleh satu pihak. Komunikasi lebih lancar tanpa harus lewat banyak divisi perantara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Nilai Tambah Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Prinsip yang dipegang untuk memastikan hasil terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-white" />,
                title: "Kode Bersih",
                desc: "Website dibangun mandiri (custom-coded), tidak bergantung total pada CMS berat yang memperlambat loading."
              },
              {
                icon: <Cpu className="w-8 h-8 text-white" />,
                title: "Ditenagai AI",
                desc: "Memanfaatkan asisten AI untuk memotong waktu *development* dan riset teks berulang sehingga harga jadi super terjangkau."
              },
              {
                icon: <LineChart className="w-8 h-8 text-white" />,
                title: "Orientasi SEO",
                desc: "Dari struktur dokumen sampai kata kunci sudah disesuaikan secara natural agar mudah dibaca Google."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-white" />,
                title: "Harga Jujur",
                desc: "Tidak ada biaya layanan bulanan semu. Semua dijabarkan transparan di awal."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Mari Berkolaborasi!</h2>
          <p className="text-xl mb-10 text-blue-100">
            Anda punya impian digital, kami yang akan mewujudkannya dalam bentuk barisan kode rapi.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl"
          >
            Mulai Diskusi <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
