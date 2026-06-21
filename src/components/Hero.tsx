"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight, Compass, ShieldAlert } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-workshop-bg flex flex-col justify-between overflow-hidden">
      {/* Background blueprint grids */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      
      {/* Headlight glow overlay in center */}
      <div className="absolute top-[20%] left-[45%] w-[400px] h-[400px] bg-amber-neon/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Main split-screen container */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 items-stretch w-full">
        
        {/* LEFT COLUMN: Editorial Typography (Magazine Cover Layout) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-32 pb-12 relative z-10 border-r border-cream-accent/5">
          {/* Vertical layout stamp on the edge */}
          <div className="hidden xl:block absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-title font-black uppercase tracking-[0.4em] text-zinc-600">
            MANGALORE HQ // 12.8727° N, 74.8428° E // EST. 1982
          </div>

          <div className="max-w-xl xl:pl-6 flex flex-col gap-6 md:gap-8">
            
            {/* Hangar decal tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 self-start border-l-2 border-amber-neon pl-4"
            >
              <span className="text-[11px] font-title font-black uppercase tracking-widest text-amber-neon text-amber-glow">
                HANGAR DECAL SPEC // ISSUE 1044
              </span>
            </motion.div>

            {/* Giant Magazine Style Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tight leading-[0.8] text-white">
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  44 YEARS OF
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-chrome text-amber-glow"
                >
                  AUTOMOTIVE
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white"
                >
                  EXCELLENCE
                </motion.span>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed font-medium"
            >
              This is not a software service. Car Decor is an iconic customization garage with 44+ years of reputation in crafting studio-grade audio stages, App-controlled optic ambient matrices, and premium Nappa cabins in Mangalore.
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full mt-4"
            >
              <button
                onClick={openContactModal}
                className="px-8 py-4 bg-amber-neon text-black font-heading font-black text-xs uppercase tracking-widest text-center hover:bg-amber-dark hover:shadow-[0_0_30px_rgba(255,157,0,0.4)] transition-all duration-300 cursor-pointer"
              >
                COMMISSION A BUILD
              </button>
              <a
                href="https://wa.me/917892671436?text=Hello%20Car%20Decor%20Mangalore,%20I%20want%20to%20customize%20my%20vehicle!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-workshop-elevated border border-cream-accent/10 hover:border-amber-neon/50 text-white font-title font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-workshop-card transition-all duration-300 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-amber-neon" />
                <span>WhatsApp Atelier</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN: Full-height Luxury Vehicle Image Overlay */}
        <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-0 flex flex-col justify-end overflow-hidden border-t lg:border-t-0 border-cream-accent/5">
          {/* Main Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero.jpeg')",
            }}
          />
          
          {/* Orange glowing reflections & headlight gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-workshop-bg via-workshop-bg/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-workshop-bg via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,157,0,0.15)_0%,transparent_75%)]" />

          {/* Grid overlays */}
          <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

          {/* Magazine Stamp elements */}
          <div className="absolute top-8 right-8 z-20 flex flex-col text-right">
            <span className="text-[10px] font-title font-black text-amber-neon text-amber-glow uppercase tracking-widest leading-none">
              CD // SPECIFICATION CODES
            </span>
            <span className="text-[9px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
              TYPE: FORGED_CABIN_01
            </span>
          </div>

          <div className="absolute left-8 bottom-8 z-20 hidden sm:flex flex-col border-l border-amber-neon pl-4">
            <span className="text-[9px] font-title font-black text-zinc-400 uppercase tracking-widest leading-none">
              CHASSIS TRACKING
            </span>
            <span className="text-xl font-heading font-black text-white mt-1 uppercase">
              BMW 330I / COGNAC BUILD
            </span>
          </div>

        </div>

      </div>

      {/* BOTTOM METRICS BAR */}
      <div className="relative z-20 border-t border-cream-accent/5 bg-workshop-card/85 backdrop-blur-md px-6 py-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Horizontal Experience Stats */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-heading font-black text-amber-neon text-amber-glow leading-none">
              44+
            </span>
            <span className="text-[9px] uppercase font-title text-zinc-500 font-bold tracking-widest leading-tight">
              Years<br />Reputation
            </span>
          </div>
          <div className="h-6 w-[1px] bg-cream-accent/10 hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="text-3xl font-heading font-black text-white leading-none">
              1000+
            </span>
            <span className="text-[9px] uppercase font-title text-zinc-500 font-bold tracking-widest leading-tight">
              Happy<br />Enthusiasts
            </span>
          </div>
          <div className="h-6 w-[1px] bg-cream-accent/10 hidden md:block" />
          <div className="flex items-center gap-3">
            <div className="flex items-center text-amber-neon leading-none">
              <span className="text-3xl font-heading font-black text-white mr-1 leading-none">
                4.8
              </span>
            </div>
            <span className="text-[9px] uppercase font-title text-zinc-500 font-bold tracking-widest leading-tight">
              Google<br />Rating
            </span>
          </div>
        </div>

        {/* Sub-label Stamp */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-neon animate-pulse" />
          <span className="text-[9px] font-title font-black uppercase tracking-widest text-zinc-400">
            AUTHORIZED TUNING HANGAR // MANGALORE, IND
          </span>
        </div>

      </div>

    </section>
  );
}
