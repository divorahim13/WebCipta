import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
    default: "WebCipta | Your Partner for Stunning Websites",
    template: "%s | WebCipta",
  },
  description: "WebCipta is a professional website development agency specializing in modern, high-performance, AI-enhanced web solutions.",
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
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

