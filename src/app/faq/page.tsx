export const metadata = {
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
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-xl text-gray-600">
            Kami mencoba menjawab sejujur mungkin. Silakan baca sebentar jika masih ada keraguan.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-2xl border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-bold font-heading text-lg text-gray-900 p-6 md:px-8">
                {faq.q}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-gray-600 leading-relaxed px-6 pb-6 md:px-8">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
