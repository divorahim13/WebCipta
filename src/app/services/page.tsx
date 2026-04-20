import { Metadata } from "next";
import { MonitorSmartphone, Code, Search, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | WebCipta",
  description: "Explore WebCipta's premium services: Web Design, Custom Development, SEO Optimization, and AI Web Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Our <span className="text-[var(--color-accent)]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl space-y-24">
          
          {/* 1. Web Design */}
          <div id="web-design" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-muted/5 p-8 rounded-2xl border border-muted/20">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-[var(--color-accent)] font-semibold mb-2 block">Starting at</span>
                  <h3 className="text-3xl font-bold">$1,500</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> UI/UX Research & Wireframing</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> High-Fidelity Prototypes</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Responsive Mobile-First Design</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Brand Identity Integration</li>
              </ul>
              <Link href="/contact?service=web-design">
                <Button className="w-full">Request Quote</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex p-4 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                <MonitorSmartphone size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Web Design</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                We craft visually stunning, user-centric interfaces. Our designs are built on solid UX principles, ensuring that your visitors not only enjoy an aesthetically pleasing experience but also navigate your site intuitively, leading to higher conversion rates.
              </p>
            </div>
          </div>

          <hr className="border-muted/20" />

          {/* 2. Custom Development */}
          <div id="custom-dev" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex p-4 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                <Code size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Custom Development</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                Leveraging bleeding-edge frameworks like Next.js and Supabase, we build scalable, secure, and blazing-fast web applications. Move beyond simple templates with dynamic digital products tailored specifically to your complex business needs.
              </p>
            </div>
            <div className="bg-muted/5 p-8 rounded-2xl border border-muted/20">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-[var(--color-accent)] font-semibold mb-2 block">Starting at</span>
                  <h3 className="text-3xl font-bold">$3,000</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Frontend Engineering (React/Next.js)</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Custom Backend & API Architecure</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Database Modeling & Setup (Supabase)</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Performance & Security Optimization</li>
              </ul>
              <Link href="/contact?service=custom-dev">
                <Button className="w-full">Request Quote</Button>
              </Link>
            </div>
          </div>

          <hr className="border-muted/20" />

          {/* 3. SEO Optimization */}
          <div id="seo" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-muted/5 p-8 rounded-2xl border border-muted/20">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-[var(--color-accent)] font-semibold mb-2 block">Starting at</span>
                  <h3 className="text-3xl font-bold">$800<span className="text-lg font-normal text-muted">/mo</span></h3>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Comprehensive Site Audits</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Keyword Research & Content Strategy</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Technical Next.js SEO Metadata</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Monthly Performance Reporting</li>
              </ul>
              <Link href="/contact?service=seo">
                <Button className="w-full">Request Quote</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex p-4 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                <Search size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">SEO Optimization</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                A beautiful website is useless if no one can find it. We implement robust technical and on-page SEO best practices natively into your codebase to ensure you dominate search rankings and drive organic, high-intent traffic.
              </p>
            </div>
          </div>

          <hr className="border-muted/20" />

          {/* 4. AI Web Solutions */}
          <div id="ai" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex p-4 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                <Sparkles size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">AI Web Solutions</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                Ready for the future? We integrate smart AI features into your existing or new website. From custom-trained LLM customer support chatbots to automated content translation pipelines, we make your website work smarter.
              </p>
            </div>
            <div className="bg-muted/5 p-8 rounded-2xl border border-muted/20">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-[var(--color-accent)] font-semibold mb-2 block">Starting at</span>
                  <h3 className="text-3xl font-bold">$2,500</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Custom ChatGPT Integration</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> AI Trained on Your Business Logic</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Generative UI Components</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--color-accent)] mr-3 h-5 w-5" /> Automated Workflows via AI</li>
              </ul>
              <Link href="/contact?service=ai">
                <Button className="w-full">Request Quote</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
