"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code, Search, Sparkles, MonitorSmartphone } from "lucide-react";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-muted/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[var(--color-accent)]/10 via-background to-background"></div>
        <motion.div
          className="container mx-auto px-4 text-center z-10 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-muted/30 bg-background/50 backdrop-blur-md">
            <span className="text-sm font-medium text-muted">Building the Future of the Web</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
            variants={itemVariants}
          >
            Your Partner for <br className="hidden md:block" />
            <span className="text-[var(--color-accent)]">Stunning Websites</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            WebCipta is a premium web development agency creating high-performance, aesthetically pleasing, and AI-enhanced digital experiences that drive growth.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-base group">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro/Services Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What We Do</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              We specialize in end-to-end digital solutions that help businesses establish a powerful online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<MonitorSmartphone className="h-8 w-8" />}
              title="Web Design"
              description="Crafting visually stunning, user-centric interfaces that engage and convert visitors."
            />
            <ServiceCard 
              icon={<Code className="h-8 w-8" />}
              title="Custom Development"
              description="Building scalable, secure, and blazing-fast web applications tailored to your needs."
            />
            <ServiceCard 
              icon={<Sparkles className="h-8 w-8" />}
              title="AI Web Solutions"
              description="Integrating smart AI features like chatbots and generative UI to elevate user experiences."
            />
            <ServiceCard 
              icon={<Search className="h-8 w-8" />}
              title="SEO Optimization"
              description="Implementing technical and on-page SEO best practices to dominate search rankings."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-2xl border border-muted/20 bg-background hover:bg-muted/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
