'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Cpu, TrendingUp, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            {/* Elegant WebCipta Text Logo or Icon */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-2 shadow-lg inline-flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="font-bold tracking-wider">WEBCIPTA AGENCY</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight font-heading"
          >
            We Build Beautiful & <br className="hidden md:block"/> Functional Websites
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 font-light"
          >
            AI-driven solutions for your business. Elevating digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-blue-700 text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us / Services Preview Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Empowering Your Digital Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              WebCipta handles everything from elegant front-end design to complex AI infrastructure, helping you rank higher and convert better.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="group bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MonitorSmartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Design</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Responsive, lightning-fast, and minimalist websites crafted specifically to reflect your brand's premium identity.
              </p>
              <Link href="/services" className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="group bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Integrations</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Implement smart chatbots, automation flows, and data-driven insights natively into your workflow.
              </p>
              <Link href="/services" className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="group bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dominate search engine rankings. We ensure your architecture uses Next.js to provide blazing fast SSG/SSR performance.
              </p>
              <Link href="/services" className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Portfolio Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Featured Work</h2>
              <p className="text-gray-600 text-lg">A glimpse into the digital excellence we've delivered.</p>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              View full portfolio <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <Image src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lumina Store E-Commerce Redesign Project Homepage Mockup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">E-Commerce</span>
                <h3 className="text-xl font-bold mb-2">Lumina Store Redesign</h3>
                <p className="text-gray-600 text-sm">Increased conversion rates by 45% with a hyper-fast Next.js architecture.</p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MetricsPro Enterprise SaaS Dashboard Analytics Interface" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">Enterprise SaaS</span>
                <h3 className="text-xl font-bold mb-2">MetricsPro Dashboard</h3>
                <p className="text-gray-600 text-sm">A highly responsive analytics dashboard integrating real-time AI insights.</p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vanguard Financials Corporate Website Overview Design" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">Corporate</span>
                <h3 className="text-xl font-bold mb-2">Vanguard Financials</h3>
                <p className="text-gray-600 text-sm">Professional and highly accessible landing page with dynamic CMS integration.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link href="/portfolio" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              View full portfolio <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Testimonial Section */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Loved By Industry Leaders</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl relative">
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6 opacity-50" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6">
                "WebCipta completely transformed our online presence. The new Next.js site is incredibly fast, and the AI chatbot they integrated saves our support team hours every day."
              </p>
              <div className="flex items-center gap-4">
                <Image src="https://i.pravatar.cc/100?img=1" alt="Portrait of Sarah Jenkins, CMO at Lumina" width={48} height={48} className="rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                  <p className="text-sm text-gray-500">CMO @ Lumina</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl relative">
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6 opacity-50" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6">
                "Their design aesthetic is genuinely stunning. We asked for a minimalist, professional look and they over-delivered. Conversion rates are up substantially."
              </p>
              <div className="flex items-center gap-4">
                <Image src="https://i.pravatar.cc/100?img=33" alt="Portrait of David Chen, Founder of MetricsPro" width={48} height={48} className="rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">David Chen</h4>
                  <p className="text-sm text-gray-500">Founder @ MetricsPro</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl relative">
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6 opacity-50" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6">
                "Working with WebCipta was seamless. They understood our enterprise needs and delivered a highly scalable SEO-optimized platform on time and on budget."
              </p>
              <div className="flex items-center gap-4">
                <Image src="https://i.pravatar.cc/100?img=5" alt="Portrait of Elena Martinez, Director at Vanguard" width={48} height={48} className="rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">Elena Martinez</h4>
                  <p className="text-sm text-gray-500">Director @ Vanguard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Row */}
          <div className="border-t border-gray-100 pt-10">
            <p className="text-center text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Dummy Logos purely using CSS shapes/text since we don't have SVGs */}
               <h2 className="text-2xl font-bold font-serif text-gray-600">Lumina</h2>
               <h2 className="text-2xl font-bold font-sans tracking-tighter text-gray-600 flex items-center gap-1"><Cpu className="w-6 h-6"/> MetricsPro</h2>
               <h2 className="text-2xl font-bold font-serif italic text-gray-600">Vanguard</h2>
               <h2 className="text-2xl font-extrabold tracking-widest text-gray-600">ACME CORP</h2>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Before Footer */}
      <section className="py-24 bg-accent text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ready to elevate your business?</h2>
          <p className="text-blue-100 text-xl mb-10">Let's craft an experience that resonates with your audience and drives incredible results.</p>
          <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-accent hover:bg-gray-50 font-bold rounded-full text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project Today
          </Link>
        </div>
      </section>
    </main>
  );
}
