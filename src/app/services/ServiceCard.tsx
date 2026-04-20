"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/motion/variants";

export type ServiceCardData = {
  id: string;
  icon: string;
  title: string;
  tag?: string;
  desc: string;
  target: string;
  includes: string[];
  setup: string;
  price: string;
  cta: string;
};

export default function ServiceCard({ data }: { data: ServiceCardData }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="bg-white border border-gray-200 transition-colors duration-300 flex flex-col group"
      whileHover={shouldReduce ? {} : { y: -4, boxShadow: "0 12px 40px rgb(0,0,0,0.08)", borderColor: "#18181A" }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
    >
      {/* Card Header */}
      <div className="p-8 pb-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#18181A] group-hover:border-[#18181A] transition-all duration-300">
            <Image
              src={data.icon}
              alt={data.title}
              width={26}
              height={26}
              className="group-hover:invert transition-all duration-300"
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">{data.id}</span>
            {data.tag && (
              <span
                className={`font-bold uppercase tracking-wider px-2.5 py-1 ${
                  data.tag === "Opsional"
                    ? "text-[12px] bg-[var(--color-highlight)] text-white"
                    : "text-[10px] bg-[#18181A] text-white"
                }`}
              >
                {data.tag}
              </span>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold font-heading text-[#18181A] mb-3 leading-tight">{data.title}</h3>
        <p className="text-[13px] text-[#52525B] leading-relaxed font-light">{data.desc}</p>
      </div>

      {/* Card Body */}
      <div className="p-8 flex flex-col grow">
        {/* Target */}
        <div className="mb-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-2">Cocok Untuk</div>
          <p className="text-[13px] text-[#18181A] font-medium leading-relaxed">{data.target}</p>
        </div>

        {/* Includes */}
        <div className="mb-6 grow">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-3">Sudah Termasuk</div>
          <ul className="space-y-2">
            {data.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#52525B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-highlight)] shrink-0 mt-0.5" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Setup + Price + CTA */}
        <div className="pt-5 border-t border-gray-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1">Setup</div>
              <p className="text-[12px] text-[#52525B]">{data.setup}</p>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1">Estimasi Harga</div>
              <p className="text-[13px] font-bold text-[#18181A]">{data.price}</p>
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#18181A] hover:text-[var(--color-highlight)] transition-colors group/link"
          >
            <span className="border-b border-transparent group-hover/link:border-[var(--color-highlight)] transition-colors pb-0.5">
              {data.cta}
            </span>
            <motion.span
              className="inline-flex"
              whileHover={shouldReduce ? {} : { x: 3 }}
              transition={{ duration: 0.15 }}
            >
              <MoveRight className="w-3.5 h-3.5" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
