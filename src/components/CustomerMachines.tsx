"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

const builds = [
  {
    tag: "COM-9281",
    model: "Fortuner 'Stealth' Hangar Edition",
    class: "Off-Road & Cabin Refinement",
    mods: ["Full Damping (Triple Layer)", "Optic Amber Ambient lighting", "Bespoke Comfort Upholstery", "Alloy Wheels Stance Kit"],
    specs: ["Damping Coefficient: -12dB Cabin Noise", "Leather Grade: Full-Grain Cognac Nappa", "Chassis ID: CD-FTN-928"],
    image: "/images/after.png",
    gridSpan: "lg:col-span-8"
  },
  {
    tag: "COM-0482",
    model: "BMW 3 Series 'Atelier' Stage",
    class: "Concert Acoustics & Aesthetics",
    mods: ["Digital Signal Processor Tuning", "Focal Audio Drivers Custom Install", "Alcantara Dash wraps", "Ceramic Gloss Shield Coating"],
    specs: ["Frequency Range: 22Hz - 22kHz", "Optic Count: 140 PMMA Fiber Ends", "Chassis ID: CD-BMW-330"],
    image: "/images/showroom.png",
    gridSpan: "lg:col-span-4"
  },
  {
    tag: "COM-3184",
    model: "Thar 'Expedition' Blueprint",
    class: "Heavy Duty Off-Road Styling",
    mods: ["Off-Road Aux LED Lights", "Complete Suspensions Tuning Lift", "Snorkel System & Winch Setup", "Comfort Seat Covers Integration"],
    specs: ["Auxiliary Output: 18,000 LM Combined", "Upholstery: Hydrophobic Cordura Hides", "Chassis ID: CD-THR-318"],
    image: "/images/hero-bg.png",
    gridSpan: "lg:col-span-12"
  }
];

export default function CustomerMachines() {
  return (
    <section id="client-machines" className="relative bg-workshop-bg py-24 md:py-36 border-t border-cream-accent/5 overflow-hidden">
      {/* Grid line overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 border-b border-cream-accent/10 pb-8">
          <div>
            <span className="text-xs font-title font-black uppercase tracking-[0.25em] text-amber-neon text-amber-glow block mb-4">
              // CLIENT COMMISSIONS CATALOG
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tight leading-none">
              CUSTOMER MACHINES
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-sm md:text-base max-w-sm leading-relaxed">
            Every build is a collaboration. Inspect raw build summaries, custom configurations, and chassis tracking sheets of cars custom built in our hangar.
          </p>
        </div>

        {/* Asymmetrical Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {builds.map((build, idx) => (
            <motion.div
              key={build.tag}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`${build.gridSpan} group relative flex flex-col justify-between min-h-[480px] bg-workshop-card border border-cream-accent/10 p-6 md:p-10 overflow-hidden hover:border-amber-neon/40 transition-all duration-500 carbon-pattern`}
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 transition-opacity duration-1000 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url('${build.image}')` }}
              />

              {/* Cover shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-workshop-bg via-workshop-bg/60 to-transparent" />
              
              {/* Overlay grid lines */}
              <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

              {/* Stamp ID */}
              <div className="relative z-10 flex justify-between items-center border-b border-cream-accent/10 pb-4">
                <span className="text-xs font-title font-black uppercase tracking-widest text-zinc-500">
                  BUILD REF: <span className="text-amber-neon text-amber-glow">{build.tag}</span>
                </span>
                
                <span className="text-[9px] font-title font-black uppercase text-cream-accent border border-cream-accent/20 px-2 py-0.5 tracking-wider bg-workshop-elevated">
                  {build.class}
                </span>
              </div>

              {/* Middle Section: Mod details */}
              <div className="relative z-10 mt-12 mb-16">
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight leading-none group-hover:text-amber-neon transition-colors duration-300">
                  {build.model}
                </h3>
                
                {/* Custom specs checklist */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                  {build.mods.map((mod, mIdx) => (
                    <span key={mIdx} className="text-xs text-zinc-400 font-sans flex items-center gap-1.5 font-medium">
                      <span className="w-1 h-1 bg-amber-neon rounded-full" />
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom section: Spec sheet */}
              <div className="relative z-10 border-t border-cream-accent/10 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col gap-1">
                  {build.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-title font-black uppercase text-zinc-500 tracking-wider">
                      {spec}
                    </span>
                  ))}
                </div>

                <button
                  onClick={openContactModal}
                  className="py-3 px-6 bg-amber-neon text-black font-title font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-amber-dark transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,157,0,0.15)] self-start md:self-auto"
                >
                  <span>REQUEST BLUEPRINT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
