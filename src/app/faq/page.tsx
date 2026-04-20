export const metadata = {
  title: "FAQ - Pertanyaan Umum",
  description: "Pertanyaan yang sering diajukan seputar jasa pembuatan website, biaya hosting, dan waktu pengerjaan.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Berapa lama proses pembuatan website?",
      a: "Tergantung tingkat kerumitan dan kelengkapan materi dari Anda (teks, logo, foto). Untuk landing page atau website profil bisnis standar, biasanya selesai dalam 3-7 hari kerja sejak materi lengkap kami terima."
    },
    {
      q: "Apakah biaya Rp 550.000 itu per tahun?",
      a: "Tidak! Biaya pembuatan website dari WebCipta adalah satu kali bayar (One-time payment). Tidak ada biaya maintenance bulanan dari kami. Anda mendapatkan layanan gratis hosting dari Vercel/Netlify seumur hidup untuk tipe website statis (landing page / company profile)."
    },
    {
      q: "Apakah saya harus beli domain sendiri?",
      a: "Secara default Anda akan mendapat subdomain gratis (contoh: namabisnis.vercel.app). Namun, untuk kredibilitas, sangat disarankan Anda memiliki domain sendiri (.com / .id / .co.id). Biaya sewa domain ini dibayarkan langsung ke penyedia domain (biasanya kisaran Rp 150rb - 300rb per tahun) dan menjadi milik Anda sepenuhnya."
    },
    {
      q: "Apakah bisa request desain yang sangat spesifik?",
      a: "Tentu. Kami tidak menggunakan template instant yang 'plek-ketiplek'. Semua layout dibangun dan diatur ulang manual dengan kode (menggunakan framework Next.js & Tailwind). Karena itu, kami bisa menyesuaikan desain agar selaras dengan identitas brand Anda."
    },
    {
      q: "Bagaimana jika ada fitur tambahan? Misalnya toko online/keranjang belanja?",
      a: "Paket dasar difokuskan pada landing page informatif dan profil perusahaan. Jika Anda butuh sistem dinamis seperti keranjang belanja, kalkulator biaya, payment gateway, atau sistem blog, kami akan menghitung biayanya terpisah sesuai kompleksitas. Silahkan hubungi kami dengan list fitur Anda."
    },
    {
      q: "Kenapa harganya lebih murah dari agensi lain?",
      a: "Karena WebCipta berbentuk 'Solo Developer Agency'. Tidak ada biaya sewa kantor mewah, tak ada puluhan karyawan yang harus digaji, dan tidak ada account manager. Anda memesan dan berkomunikasi langsung dengan pemrogram yang merancang website Anda. Kami juga memanfaatkan teknologi AI modern untuk memangkas jam kerja secara drastis."
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-[var(--color-secondary-bg)] min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black font-heading text-[#18181A] mb-8 tracking-tight">Klarifikasi Awal.</h1>
        <p className="text-xl text-[#52525B] mb-16 font-light leading-relaxed">
          Beberapa pertanyaan umum seputar cara kerja, harga, dan batasan layanan kami.
        </p>
        
        <div className="border-t border-gray-300/50">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-300/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between py-6 md:py-8 font-bold font-heading text-lg md:text-xl text-[#18181A] transition-colors focus:outline-none">
                <span className="pr-8">{faq.q}</span>
                <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-white border border-gray-200 mt-1">
                  <svg className="h-3 w-3 text-[#18181A] transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="pb-8 -mt-2 pr-8 md:pr-12">
                <p className="text-[#52525B] leading-relaxed text-[15px] md:text-base">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
