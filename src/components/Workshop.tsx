"use client";

import { motion } from "framer-motion";
import { Speaker, Sparkles, Scissors, Compass, ShieldAlert, ArrowUpRight } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

const categories = [
  {
    num: "01",
    title: "Audio Engineering",
    description: "High-fidelity acoustics custom mapped to the vehicle's cabin geometry. Advanced sound damping, custom sub-bass enclosures, and DSP calibrations.",
    specs: ["Damping: Multi-Layer Butyl", "Acoustics: Digital Signal Processing", "Fidelity: Studio Reference"],
    icon: Speaker,
    bgImage: "/images/hero-bg.png"
  },
  {
    num: "02",
    title: "Ambient LED Styling",
    description: "App-controlled multi-zone optic fiber LED integrations highlighting interior contours. Seamless flush fitment without exposed wiring.",
    specs: ["Zones: Quad Cabin Matrix", "Fibers: Ultra-Optic PMMA", "Control: App & Dashboard Switch"],
    icon: Sparkles,
    bgImage: "/images/after.png"
  },
  {
    num: "03",
    title: "Bespoke Cabin Leather",
    description: "Individually tailored seat covers, steering wraps, and door card trims. Premium Alcantara and full-grain Nappa hides with precision stitching.",
    specs: ["Hides: Full-Grain Nappa", "Stitch: Contrast Diamond / Hex", "Detail: Laser-Perf Center Panels"],
    icon: Scissors,
    bgImage: "/images/before.png"
  },
  {
    num: "04",
    title: "Off-Road & Stance",
    description: "Complete vehicle preparation including heavy-duty off-road rigs, snorkel configurations, premium auxiliary lights, and lightweight forged alloy rims.",
    specs: ["Suspension: Elite Stance / Lift", "Rims: Forged Aftermarket Alloys", "Utility: Heavy-duty recovery kits"],
    icon: Compass,
    bgImage: "/images/showroom.png"
  }
];

export default function Workshop() {
  return (
    <section id="workshop" className="relative bg-workshop-bg py-24 md:py-36 border-t border-cream-accent/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 border-b border-cream-accent/10 pb-10">
          <div>
            <span className="text-xs font-title font-black uppercase tracking-[0.25em] text-amber-neon text-amber-glow block mb-4">
              // PERFORMANCE HANGAR
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tight leading-none">
              THE WORKSHOP
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-sm md:text-base max-w-md leading-relaxed">
            Recreating the atmosphere of the actual garage. Real customization happens at the hands of specialists. Pick your upgrade class and config.
          </p>
        </div>

        {/* Categories Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between h-[450px] bg-workshop-card border border-cream-accent/10 p-8 overflow-hidden hover:border-amber-neon/40 transition-all duration-500 carbon-pattern hover:shadow-[0_0_30px_rgba(255,157,0,0.1)]"
              >
                {/* Subtle Image Background reveal on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.18] transition-opacity duration-700 pointer-events-none scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url('${cat.bgImage}')` }}
                />

                {/* Grid line overlay */}
                <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-heading font-black text-zinc-800 group-hover:text-amber-neon/30 transition-colors duration-500">
                      {cat.num}
                    </span>
                    <div className="w-12 h-12 bg-workshop-elevated border border-cream-accent/15 flex items-center justify-center text-cream-accent group-hover:text-amber-neon group-hover:border-amber-neon transition-colors duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tight mt-6 group-hover:text-amber-neon transition-colors duration-500">
                    {cat.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-zinc-400 font-sans mt-3 leading-relaxed max-w-sm">
                    {cat.description}
                  </p>
                </div>

                {/* Specs List / Tuning Sheet style */}
                <div className="border-t border-cream-accent/10 pt-4 mt-6">
                  <div className="flex flex-col gap-1.5 mb-6">
                    {cat.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-title font-black uppercase text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500 tracking-wider">
                        • {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={openContactModal}
                    className="w-full py-3 bg-workshop-elevated hover:bg-amber-neon text-white hover:text-black border border-cream-accent/10 hover:border-amber-neon font-title font-bold text-xs uppercase tracking-widest flex items-center justify-between px-4 transition-all duration-300 cursor-pointer"
                  >
                    <span>CONFIGURE UPGRADE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
