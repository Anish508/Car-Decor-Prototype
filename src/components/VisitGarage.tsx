"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Compass } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function VisitGarage() {
  return (
    <section id="location" className="relative bg-workshop-bg py-24 md:py-36 border-t border-cream-accent/5 overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-50px] w-96 h-96 bg-amber-neon/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 border-b border-cream-accent/10 pb-8">
          <div>
            <span className="text-xs font-title font-black uppercase tracking-[0.25em] text-amber-neon text-amber-glow block mb-4">
              // ATELIER LOCATION & SCHEDULE
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tight leading-none">
              VISIT THE GARAGE
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-sm md:text-base max-w-sm leading-relaxed">
            Step into our premium customization hangar. Consult with technicians, browse raw leather hides, and listen to acoustic testing environments in person.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Coordinates & Contacts (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-workshop-card border border-cream-accent/10 p-8 md:p-10 carbon-pattern relative">
            {/* Corner bracket decals */}
            <div className="absolute top-4 left-4 text-[9px] font-title font-black text-zinc-600 tracking-wider">
              [CD // MANGALORE HQ]
            </div>

            <div className="flex flex-col gap-8 mt-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-amber-neon shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-title font-black uppercase text-zinc-500 tracking-wider">PHYSICAL ATELIER</span>
                  <p className="text-sm font-sans text-white font-medium mt-1 leading-relaxed">
                    Car Decor, Balmatta Road,<br />
                    Near Jyothi Circle, Hampankatta,<br />
                    Mangalore, Karnataka - 575001
                  </p>
                </div>
              </div>

              {/* Coordinates */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-amber-neon shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-title font-black uppercase text-zinc-500 tracking-wider">COORDINATES</span>
                  <p className="text-sm font-sans text-white font-medium mt-1">
                    12.8727° N, 74.8428° E
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-amber-neon shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-title font-black uppercase text-zinc-500 tracking-wider">HOTLINE COMMISSIONS</span>
                  <p className="text-sm font-sans text-white font-medium mt-1">
                    <a href="tel:+917892671436" className="hover:text-amber-neon transition-colors">
                      +91 78926 71436
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-amber-neon shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-title font-black uppercase text-zinc-500 tracking-wider">WORKSHOP SCHEDULE</span>
                  <p className="text-sm font-sans text-white font-medium mt-1 leading-relaxed">
                    Mon - Sat: 9:30 AM - 8:00 PM <br />
                    Sunday: Hangar Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-cream-accent/10">
              <button
                onClick={openContactModal}
                className="w-full py-4 bg-amber-neon hover:bg-amber-dark text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,157,0,0.15)]"
              >
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>

          {/* Right panel: Dark Mode Map embed (7 columns) */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[400px] border border-cream-accent/10 relative group">
            <iframe
              title="Car Decor Garage Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.544605943486!2d74.8427845!3d12.8726581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a39cbfa75bf%3A0xe54e60155bb9ad13!2sJyothi%20Circle%2C%20Hampankatta%2C%20Mangaluru%2C%20Karnataka%20575001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Decal borders */}
            <div className="absolute inset-0 border-2 border-workshop-bg pointer-events-none" />
            <div className="absolute inset-0 border border-cream-accent/10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
