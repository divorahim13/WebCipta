import { MoveRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering diajukan terkait jasa WebCipta.",
};

const faqs = [
  {
    k: "Apakah Rp550k benar-benar pembayaran sekali untuk selamanya?",
    j: "Ya, untuk ongkos pengembangan dan desain *source code*. Website Anda bisa hidup berkat teknologi 'Serverless/Edge' yang menyediakan kuota gratis yang sangat besar untuk profil bisnis. Anda hanya perlu memikirkan biaya domain tahunan (seperti .com atau .id)."
  },
  {
    k: "Bagaimana jika saya belum punya logo dan foto profsional?",
    j: "Tidak masalah. Kami akan menggunakan stok aset legal tak berbayar yang relevan dengan ranah bisnis Anda terlebih dahulu, dipadu padankan dengan tipografi identitas (text-logo) yang tajam."
  },
  {
    k: "Kenapa website tidak dikembangkan menggunakan WordPress?",
    j: "Banyak corporate mengeluhkan WordPress yang berat karena dihinggapi segudang plugin tambalan lama kelamaan. WebCipta menggunakan kode kustom langsung (React/Next.js) yang jauh lebih kebal tehadap peretasan murah, dan kecepatannya sanggup menembus skor 95+ di Google Pagespeed."
  },
  {
    k: "Masa pengerjaan estimasinya berapa lama?",
    j: "Bergantung kecepatan Anda menyerahkan draf teks dan materi. Rata-rata berkisar di waktu 4–7 hari kerja sejak titik penyepakatan struktur. Ini lebih lambat dari template instan, tapi jauh lebih teliti karena desain ditata manual."
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden border-b border-gray-200/50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70"></div>
        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
              Jawaban Dari <br/>
              <span className="text-[var(--color-highlight)]">Pertanyaan Seputar.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 p-8 cursor-pointer shadow-sm open:bg-[#F9F9FB] transition-colors">
                <summary className="font-bold text-lg md:text-xl text-[#18181A] outline-none font-heading flex justify-between items-center pr-4">
                  <span>{faq.k}</span>
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 group-open:border-[var(--color-highlight)] group-open:bg-[var(--color-highlight)] group-open:text-white transition-all">
                     <span className="group-open:hidden">+</span>
                     <span className="hidden group-open:inline">-</span>
                  </div>
                </summary>
                <div className="w-12 h-[1px] bg-[var(--color-highlight)] my-6 opacity-0 group-open:opacity-100 transition-opacity"></div>
                <p className="text-[#52525B] leading-relaxed font-light text-[15px]">{faq.j}</p>
              </details>
            ))}
          </div>

          <div className="mt-24 p-10 bg-[var(--color-secondary-bg)] border border-gray-200/50 text-center relative overflow-hidden">
             <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">Punya Pertanyaan Spesifik?</h3>
             <p className="text-[#52525B] mb-8 font-light">Jangan ragu menghubungi secara langsung.</p>
             <Link href="/contact" className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.1em] text-[13px] text-[#18181A] hover:text-[var(--color-accent)] transition-colors group">
               <span className="border-b border-[#18181A] group-hover:border-[var(--color-accent)] pb-1 transition-colors">Menuju Halaman Kontak</span>
               <MoveRight className="w-4 h-4 text-[var(--color-highlight)]" />
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
