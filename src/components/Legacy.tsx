"use client";

import { motion } from "framer-motion";
import { Wrench, Shield, Award } from "lucide-react";

export default function Legacy() {
  return (
    <section id="legacy" className="relative bg-workshop-bg py-24 md:py-36 overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      
      {/* Neon reflections */}
      <div className="absolute bottom-[-100px] left-[-50px] w-96 h-96 bg-amber-neon/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Magazine Cover Styling (Column Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-l-2 border-amber-neon pl-6 md:pl-10 relative">
            {/* Absolute positioning badge */}
            <div className="absolute top-0 right-0 text-[100px] font-heading font-black text-cream-accent/5 select-none leading-none pointer-events-none">
              1982
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-xs font-title font-black uppercase tracking-[0.25em] text-amber-neon text-amber-glow">
                // ATELIER HERITAGE
              </span>
              
              <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.85] tracking-tighter uppercase">
                44+ Years Of <br />
                <span className="text-chrome">Precision</span> <br />
                Craft
              </h2>

              <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed mt-4">
                Car Decor is not a software startup or a generic accessory retailer. Since 1982, we have operated as an exclusive customization garage, catering to drivers who demand uncompromising automotive individuality.
              </p>
              
              <p className="text-zinc-500 font-sans text-xs md:text-sm leading-relaxed">
                What began as a tuning workshop in Hampankatta has evolved into a premier customization atelier, combining old-world craftsmanship with modern integration technology.
              </p>
            </div>

            {/* Bottom mini-stats plate */}
            <div className="grid grid-cols-2 gap-4 mt-12 border-t border-cream-accent/10 pt-8">
              <div>
                <span className="block text-4xl font-heading font-black text-amber-neon">MANGALORE</span>
                <span className="text-[10px] font-title font-black text-zinc-500 uppercase tracking-widest">Base Operations</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-black text-white">44 YEARS</span>
                <span className="text-[10px] font-title font-black text-zinc-500 uppercase tracking-widest">Atelier Heritage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Asymmetric Photo & Specs Grid (Column Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Main Luxury Car Panel (Column Span 7) */}
            <motion.div 
              className="sm:col-span-7 relative h-[380px] md:h-[480px] bg-workshop-card border border-cream-accent/10 overflow-hidden group shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Background car photo - Singer/Brabus style styling */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
                style={{ backgroundImage: "url('/images/showroom.png')" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-workshop-bg via-transparent to-black/40" />

              {/* Vertical stamp */}
              <div className="absolute top-6 left-6 font-title font-black text-[10px] uppercase text-white/50 tracking-widest rotate-90 origin-top-left">
                TUNING ATELIER // SPEC 01
              </div>

              {/* Overlay content info */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-workshop-bg/90 border-l border-amber-neon">
                <span className="text-[9px] font-title font-black uppercase text-amber-neon tracking-widest">CRAFTSMANSHIP DETAIL</span>
                <h4 className="text-lg font-heading font-black text-white uppercase mt-0.5">Bespoke Upholstery Sewing</h4>
              </div>
            </motion.div>

            {/* Side Pillars (Column Span 5) */}
            <div className="sm:col-span-5 flex flex-col gap-6">
              
              {/* Card 1: Handcrafted */}
              <motion.div 
                className="bg-workshop-card p-6 border border-cream-accent/10 hover:border-amber-neon/30 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-10 h-10 bg-workshop-elevated border border-cream-accent/15 flex items-center justify-center text-amber-neon mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-black text-white uppercase">Surgical Installs</h3>
                <p className="text-xs text-zinc-500 font-sans mt-2 leading-relaxed">
                  Every panel integration is mapped out using high-precision digital schematics to avoid rattle, noise, or warranty issues.
                </p>
              </motion.div>

              {/* Card 2: Paint Protection */}
              <motion.div 
                className="bg-workshop-card p-6 border border-cream-accent/10 hover:border-amber-neon/30 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-10 h-10 bg-workshop-elevated border border-cream-accent/15 flex items-center justify-center text-amber-neon mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-black text-white uppercase">Premium Shields</h3>
                <p className="text-xs text-zinc-500 font-sans mt-2 leading-relaxed">
                  We utilize hydrophobic self-healing coatings and high durability custom leather hides for interior shielding.
                </p>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
