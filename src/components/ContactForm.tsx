"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="p-10 border border-gray-100 bg-[#F8FAFC] text-center">
        <div className="w-16 h-16 bg-[var(--color-highlight)]/10 text-[var(--color-highlight)] rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#18181A] mb-3">Pesan Diterima.</h3>
        <p className="text-[#52525B] leading-relaxed mb-6">
          Terima kasih telah menghubungi WebCipta. Kami membaca setiap email dan akan segera memberikan respon evaluasi awal dalam kurun waktu 1x24 jam kerja.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="uppercase font-bold tracking-widest text-xs">Kirim Pesan Lain</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8">
         <div className="relative">
            <input 
               type="text" 
               id="name" 
               name="name" 
               required 
               className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 py-3 text-[#18181A] placeholder-transparent focus:ring-0 focus:border-[#18181A] focus:outline-none transition-colors"
               placeholder="Nama Lengkap"
            />
            <label 
               htmlFor="name" 
               className="absolute left-0 -top-3.5 text-[#52525B] text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[#18181A] peer-focus:uppercase peer-focus:tracking-wider cursor-text"
            >
               Nama Lengkap
            </label>
         </div>

         <div className="relative">
            <input 
               type="email" 
               id="email" 
               name="email" 
               required 
               className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 py-3 text-[#18181A] placeholder-transparent focus:ring-0 focus:border-[#18181A] focus:outline-none transition-colors"
               placeholder="Email Perusahaan / Pribadi"
            />
            <label 
               htmlFor="email" 
               className="absolute left-0 -top-3.5 text-[#52525B] text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[#18181A] peer-focus:uppercase peer-focus:tracking-wider cursor-text"
            >
               Alamat Email
            </label>
         </div>

         <div className="relative">
            <textarea 
               id="message" 
               name="message" 
               rows={4} 
               required 
               className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 py-3 text-[#18181A] placeholder-transparent focus:ring-0 focus:border-[#18181A] focus:outline-none transition-colors resize-none"
               placeholder="Ceritakan Proyek Anda..."
            ></textarea>
            <label 
               htmlFor="message" 
               className="absolute left-0 -top-3.5 text-[#52525B] text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[#18181A] peer-focus:uppercase peer-focus:tracking-wider cursor-text"
            >
               Spesifikasi atau Pertanyaan Anda
            </label>
         </div>
      </div>

      <Button 
        type="submit" 
        className="w-full flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 text-white animate-spin" />
            MEMPROSES...
          </>
        ) : (
          <>
            KIRIM PESAN
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
