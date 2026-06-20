"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Eye, Compass, Calendar } from "lucide-react";

export default function VirtualShowroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of the showroom section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background parallax translate
  const bgTranslateY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  
  // Floating cards parallax translate (moves faster for 3D depth)
  const card1TranslateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const card2TranslateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section 
      ref={containerRef} 
      id="showroom" 
      className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Parallax Background Showroom Image */}
      <motion.div
        style={{
          y: bgTranslateY,
          backgroundImage: "url('/images/showroom.png')",
        }}
        className="absolute inset-0 bg-cover bg-center scale-110 pointer-events-none"
      >
        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.02)_0%,rgba(0,0,0,0.75)_80%)]" />
      </motion.div>

      {/* Showroom Central Details */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
              Atelier Flagship
            </span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight">
            Experience <br />
            <span className="text-chrome">Automotive Excellence</span>
          </h2>
          
          <p className="text-sm md:text-base text-zinc-300 font-sans leading-relaxed mt-4 max-w-lg font-medium">
            Step into our premium customization lounge in Mangalore. Consult with engineers, inspect raw forged carbon elements, and test high-fidelity acoustics.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href="#cta"
              className="px-6 py-3.5 rounded-full bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 interactive-hover"
            >
              Schedule Visit
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 hover:border-neon-blue/40 text-white font-heading font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 interactive-hover"
            >
              <MapPin className="w-4 h-4 text-neon-blue" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* FLOATING PARALLAX DETAIL TAGS */}
      
      {/* Tag 1 (Steering wheels area) */}
      <motion.div
        style={{ y: card1TranslateY }}
        className="hidden md:flex absolute top-[25%] left-[12%] z-20 items-center gap-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/5 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-neon-blue">
          <Compass className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-neon-blue">
            Carbon Fitting
          </span>
          <span className="text-xs font-heading font-bold text-white uppercase mt-0.5">
            Interactive Steering Display
          </span>
        </div>
      </motion.div>

      {/* Tag 2 (Acoustics display) */}
      <motion.div
        style={{ y: card2TranslateY }}
        className="hidden md:flex absolute bottom-[25%] right-[12%] z-20 items-center gap-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/5 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-neon-blue">
          <Eye className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-neon-blue">
            Audio lounge
          </span>
          <span className="text-xs font-heading font-bold text-white uppercase mt-0.5">
            Acoustics Test Chambers
          </span>
        </div>
      </motion.div>

    </section>
  );
}
