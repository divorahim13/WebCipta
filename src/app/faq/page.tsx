import { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Pertanyaan Umum | WebCipta Cibubur',
  description: 'Temukan jawaban atas berbagai pertanyaan umum tentang layanan pembuatan website dari WebCipta.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Berapa lama proses pembuatan sebuah website?",
      a: "Tergantung tingkat kerumitan. Untuk landing page sederhana biasanya selesai dalam 3-5 hari kerja jika semua materi (teks & foto) sudah siap. Sementara untuk web dengan banyak halaman profil bisa memakan 1-2 minggu."
    },
    {
      q: "Apakah harga yang tercantum sudah termasuk biaya perpanjangan tahunan?",
      a: "Harga paket hanya untuk jasa *development* satu kali (One Time Fee). Anda hanya akan membayar lagi tahun depan untuk ongkos perpanjangan domain resminya (biasanya kisaran Rp150.000 - Rp300.000), bukan pada kami tapi langsung ke registrar domain Anda (atau bisa kami bantu perpanjangkan tanpa komisi tambahan)."
    },
    {
      q: "Kenapa WebCipta bisa sangat murah padahal di-coding manual (tidak semata pasang template)?",
      a: "Sebagai Solo Developer, kami tak membebankan biaya *overhead* kantor besar dan gaji staf berlapis ke harga layanan Anda. Selain itu, kami menggunakan AI Assistant untuk mempercepat penulisan struktur *boilerplate* kode dan riset kata, sehingga alokasi *man-hours* pengerjaan sangat ditekan."
    },
    {
      q: "Apakah saya perlu server (VPS) sendiri?",
      a: "Hampir 90% website UMKM lokal tidak membutuhkan VPS berbayar mahal tiap bulan. Kami akan *deploy* website Anda ke server awan seperti Vercel yang gratis namun memiliki standar enterprise, jauh lebih aman dan tak rentan *down* ketimbang hosting konvensional murah."
    },
    {
      q: "Saya tidak paham desain atau konten tulisan, apakah WebCipta bisa bantu buatkan kata-katanya?",
      a: "Tentu. Kami siap memberikan saran copywriting terstruktur (AIDA / PAS) untuk formasi isi landing page Anda. Karena kalau sekadar dibuat bagus tapi membingungkan, pengunjung tak akan menekan tombol Call-to-Action."
    },
    {
      q: "Apakah bisa membuat Toko Online yang terintegrasi pembayaran bank langsung?",
      a: "Bisa, namun itu masuk *Custom Development* integrasi *Payment Gateway* seperti Midtrans/Xendit yang tentu ada hitungan kompleksitas berbeda dari paket basic. Coba konsultasikan via WhatsApp untuk *feasibility study*-nya."
    },
    {
      q: "Bagaimana jika suatu saat nanti saya ingin menambah halaman baru?",
      a: "Sangat bisa. Hubungi saja kapan pun ketika bisnis Anda butuh di-scale. Kami bisa membuat halaman tambahan, integrasi database fitur baru, hingga perombakan logo."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-24 selection:bg-indigo-100">
      
      {/* Header Section */}
      <section className="bg-[#FCFCFC] pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-end">
          <div className="md:w-2/3">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Library Informasi</span>
             <h1 className="text-4xl md:text-6xl font-black font-heading text-[#18181A] tracking-tight leading-[1.1]">
               Pertanyaan Umum.
             </h1>
          </div>
          <div className="md:w-1/3 pb-2">
            <p className="text-[#52525B] text-lg leading-relaxed">
              Kami mencoba menjawab sejujur mungkin. Silakan baca sebentar jika masih ada keraguan.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Line Connector (Design Element) */}
      <div className="hidden md:block w-[1px] h-16 bg-gray-200 mx-auto"></div>

      {/* FAQ List - Bespoke Minimalist Bottom Borders */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto border-t border-gray-200">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-200 [&_summary::-webkit-details-marker]:hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer py-8 pr-4">
                <h3 className="font-bold font-heading text-lg md:text-xl text-[#18181A] pr-8 group-hover:text-[var(--color-accent)] transition-colors">
                  {faq.q}
                </h3>
                <span className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-open:rotate-45 group-open:bg-gray-50 group-open:text-[#18181A] transition-all">
                  <svg fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M12 5v14M5 12h14"></path></svg>
                </span>
              </summary>
              <div className="text-[#52525B] text-[15px] md:text-base leading-relaxed pb-10 pr-12 animate-in fade-in slide-in-from-top-4 duration-300">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[#18181A] rounded-[2rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden">
          {/* Subtle noise pattern on dark background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
               <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 tracking-tight">Tidak Me-nemukan Jawaban Anda?</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Langsung tanyakan via WhatsApp atau Email. Kami merespon cepat dan santai setiap pertanyaan.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#18181A] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Hubungi Tim Kami <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
