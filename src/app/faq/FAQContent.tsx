"use client";

import { useState } from "react";
import { MoveRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { EASE_OUT } from "@/components/motion/variants";

const faqs = [
  {
    k: "Apakah Rp550k benar-benar pembayaran sekali untuk selamanya?",
    j: "Ya, untuk ongkos pengembangan dan desain source code. Website Anda bisa hidup berkat teknologi 'Serverless/Edge' yang menyediakan kuota gratis yang sangat besar untuk profil bisnis. Anda hanya perlu memikirkan biaya domain tahunan (seperti .com atau .id).",
  },
  {
    k: "Bagaimana jika saya belum punya logo dan foto profesional?",
    j: "Tidak masalah. Kami akan menggunakan stok aset legal tak berbayar yang relevan dengan ranah bisnis Anda terlebih dahulu, dipadu padankan dengan tipografi identitas (text-logo) yang tajam.",
  },
  {
    k: "Kenapa website tidak dikembangkan menggunakan WordPress?",
    j: "Banyak corporate mengeluhkan WordPress yang berat karena dihinggapi segudang plugin tambalan lama kelamaan. WebCipta menggunakan kode kustom langsung (React/Next.js) yang jauh lebih kebal terhadap peretasan murah, dan kecepatannya sanggup menembus skor 95+ di Google Pagespeed.",
  },
  {
    k: "Masa pengerjaan estimasinya berapa lama?",
    j: "Bergantung kecepatan Anda menyerahkan draf teks dan materi. Rata-rata berkisar di waktu 4–7 hari kerja sejak titik penyepakatan struktur. Ini lebih lambat dari template instan, tapi jauh lebih teliti karena desain ditata manual.",
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="border border-gray-200 bg-white overflow-hidden"
      animate={{
        backgroundColor: isOpen ? "#F9F9FB" : "#FFFFFF",
        borderColor: isOpen ? "#e2e8f0" : "#e5e7eb",
      }}
      transition={{ duration: 0.2 }}
    >
      <button
        className="w-full text-left p-7 md:p-8 flex justify-between items-start gap-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-lg md:text-xl text-[#18181A] font-heading leading-snug flex-1">
          {faq.k}
        </span>
        <motion.div
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5"
          animate={{
            backgroundColor: isOpen ? "var(--color-highlight, #059669)" : "transparent",
            borderColor: isOpen ? "var(--color-highlight, #059669)" : "#d1d5db",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ rotate: shouldReduce ? 0 : (isOpen ? 180 : 0) }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            {isOpen ? (
              <Minus className="w-3.5 h-3.5 text-white" />
            ) : (
              <Plus className="w-3.5 h-3.5 text-[#52525B]" />
            )}
          </motion.div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: shouldReduce ? 0.01 : 0.3, ease: EASE_OUT },
                opacity: { duration: shouldReduce ? 0.01 : 0.22, delay: shouldReduce ? 0 : 0.08 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: shouldReduce ? 0.01 : 0.22, ease: EASE_OUT },
                opacity: { duration: shouldReduce ? 0.01 : 0.12 },
              },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-7 md:px-8 pb-7 md:pb-8">
              <div className="w-12 h-[1.5px] bg-[var(--color-highlight)] mb-5" />
              <p className="text-[#52525B] leading-relaxed font-light text-[15px]">{faq.j}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden border-b border-gray-200/50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-70" />
        <div className="container mx-auto px-6 max-w-7xl pt-8">
          <div className="max-w-4xl">
            <FadeUp inView={false}>
              <h1 className="text-5xl md:text-7xl font-black font-heading text-[#18181A] mb-8 leading-[1.05] tracking-tight">
                Jawaban Dari <br />
                <span className="text-[var(--color-highlight)]">Pertanyaan Seputar.</span>
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <StaggerContainer className="space-y-4" stagger={0.09} delayChildren={0.05}>
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <FAQItem faq={faq} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.1} className="mt-24">
            <div className="p-10 bg-[var(--color-secondary-bg)] border border-gray-200/50 text-center relative overflow-hidden">
              <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-4">
                Punya Pertanyaan Spesifik?
              </h3>
              <p className="text-[#52525B] mb-8 font-light">Jangan ragu menghubungi secara langsung.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.1em] text-[13px] text-[#18181A] hover:text-[var(--color-highlight)] transition-colors group"
              >
                <span className="border-b border-[#18181A] group-hover:border-[var(--color-highlight)] pb-1 transition-colors">
                  Menuju Halaman Kontak
                </span>
                <MoveRight className="w-4 h-4 text-[var(--color-highlight)]" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
