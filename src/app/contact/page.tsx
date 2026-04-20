import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | WebCipta Agency",
  description: "Get in touch with WebCipta to discuss your next web development project.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Header Section */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Let's <span className="text-[var(--color-accent)]">Talk</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Ready to start your digital transformation? Reach out to us, and let's craft something amazing together.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
                <p className="text-muted text-lg mb-8">
                  Whether you have a specific project in mind, need advice on AI integration, or just want to explore what's possible — our team is here to help.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted">123 Innovation Drive<br/>Tech City, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-muted">hello@webcipta.com<br/>support@webcipta.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-muted">+1 (234) 567-890<br/>Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Working Hours</h4>
                    <p className="text-muted">Mon - Fri: 9AM - 6PM<br/>Weekend: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 bg-muted/20 rounded-2xl overflow-hidden border border-muted/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sid!4v1684307406282!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form Component */}
            <div className="bg-muted/5 p-8 md:p-10 rounded-3xl border border-muted/20 shadow-xl shadow-black/5">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <ContactForm />
              
              <div className="mt-10 pt-8 border-t border-muted/20 text-center space-y-4">
                <h4 className="font-semibold text-lg">Not sure what you need?</h4>
                <p className="text-muted text-sm">Schedule a quick 15-minute call with our lead strategist.</p>
                <button className="w-full sm:w-auto px-8 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold rounded-xl transition shadow border border-muted/30">
                  Get a Free Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
