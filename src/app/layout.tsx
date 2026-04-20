import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/motion/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WebCipta | Jasa Pembuatan Website Profesional di Cibubur",
    template: "%s | WebCipta",
  },
  description: "WebCipta adalah jasa pembuatan website profesional untuk bisnis lokal, UMKM, dan personal brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <NavBar />
        <main className="flex-1 w-full m-0 p-0">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
