import { Metadata } from "next";
import { Users, Award, Zap, Code2, Sparkles, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Web Development Experts",
  description: "Learn about WebCipta, your trusted partner in web development and AI-enhanced solutions.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            About <span className="text-[var(--color-accent)]">WebCipta</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            We are a dedicated team of developers, designers, and innovators passionate about crafting modern, intelligent web solutions.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Pioneering the AI-Enhanced Web</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Established with the vision of bridging the gap between aesthetics and advanced technology, WebCipta brings a fresh perspective to digital experiences.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Our expertise lies in combining bleeding-edge web frameworks like Next.js with artificial intelligence to deliver websites that don't just look stunning, but also work intelligently behind the scenes to drive your business goals.
              </p>
              <div className="mb-8">
                <Link href="/services" className="px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2">
                  Explore Our Services <Zap size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-2 bg-accent/10 rounded-lg text-[var(--color-accent)]"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-semibold">Performance First</h4>
                    <span className="text-sm text-muted">Optimized core web vitals.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-2 bg-accent/10 rounded-lg text-[var(--color-accent)]"><Sparkles size={20} /></div>
                  <div>
                    <h4 className="font-semibold">AI Integrated</h4>
                    <span className="text-sm text-muted">Smart automation & bots.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Abstract decorative graphic */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent blur-3xl -z-10 rounded-full" />
              <div className="space-y-6">
                <div className="bg-muted/5 border border-muted/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Code2 size={40} className="text-[var(--color-accent)] mb-4" />
                  <h3 className="font-bold">Frontend Excellence</h3>
                </div>
                <div className="bg-muted/5 border border-muted/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Users size={40} className="text-[var(--color-accent)] mb-4" />
                  <h3 className="font-bold">User-Centric UI/UX</h3>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-muted/5 border border-muted/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Database size={40} className="text-[var(--color-accent)] mb-4" />
                  <h3 className="font-bold">Robust Backends</h3>
                </div>
                <div className="bg-muted/5 border border-muted/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Award size={40} className="text-[var(--color-accent)] mb-4" />
                  <h3 className="font-bold">Award-Winning Quality</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 bg-muted/5 border-y border-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the Team</h2>
            <p className="text-muted max-w-2xl mx-auto">
              The creative minds and technical experts dedicated to building your digital success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-background rounded-2xl p-6 border border-muted/20 text-center hover:border-[var(--color-accent)]/50 transition-colors">
              <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[var(--color-accent)] to-blue-400 rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold">A</div>
              <h3 className="text-xl font-bold mb-1">Alex Mercer</h3>
              <p className="text-[var(--color-accent)] text-sm font-medium mb-3">Lead Developer & Founder</p>
              <p className="text-muted text-sm px-4">Specializes in Next.js architectures and full-stack system design.</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-background rounded-2xl p-6 border border-muted/20 text-center hover:border-[var(--color-accent)]/50 transition-colors">
              <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[var(--color-accent)] to-teal-400 rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold">S</div>
              <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
              <p className="text-[var(--color-accent)] text-sm font-medium mb-3">Creative Director</p>
              <p className="text-muted text-sm px-4">Award-winning UI/UX designer obsessed with minimalist aesthetics.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-background rounded-2xl p-6 border border-muted/20 text-center hover:border-[var(--color-accent)]/50 transition-colors">
              <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[var(--color-accent)] to-indigo-400 rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold">M</div>
              <h3 className="text-xl font-bold mb-1">Marcus Thorne</h3>
              <p className="text-[var(--color-accent)] text-sm font-medium mb-3">AI Integrations Specialist</p>
              <p className="text-muted text-sm px-4">Expert in bringing LLMs and intelligent automations into web apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders / Testimonials */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Trusted By Innovators</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            <div className="text-2xl font-bold font-mono">TechNova</div>
            <div className="text-2xl font-bold font-serif italic">Lumina Studio</div>
            <div className="text-2xl font-bold tracking-widest">NEXUS</div>
            <div className="text-2xl font-bold uppercase">Quantum AI</div>
          </div>
        </div>
      </section>
    </div>
  );
}
