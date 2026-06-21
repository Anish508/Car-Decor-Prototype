"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "SONY" },
  { name: "PIONEER" },
  { name: "JBL" },
  { name: "KENWOOD" },
  { name: "ALPINE" },
  { name: "BLAUPUNKT" },
  { name: "CONTINENTAL" },
];

export default function Brands() {
  return (
    <section className="bg-workshop-bg py-16 border-y border-cream-accent/5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <span className="text-[10px] font-title font-black uppercase tracking-[0.25em] text-zinc-600 block">
          AUTHORIZED PERFORMANCE PARTNERS & INTEGRATIONS
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center bg-workshop-card/30 py-6">
        {/* Infinite Logo Carousel wrapper */}
        <div className="flex w-[200%] animate-scroll-marquee gap-12 items-center">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="w-[180px] shrink-0 text-center group transition-all duration-300 relative cursor-pointer"
            >
              {/* Text-based logo styled like premium racing decal */}
              <span
                className="font-heading font-black text-2xl md:text-3xl tracking-widest transition-all duration-300 uppercase block text-zinc-700 group-hover:scale-105 group-hover:text-amber-neon group-hover:text-amber-glow"
                style={{
                  WebkitTextStroke: "1px rgba(245, 230, 200, 0.05)",
                }}
              >
                {brand.name}
              </span>
              
              {/* Highlight underlay */}
              <div className="absolute inset-0 bg-amber-neon/5 opacity-0 group-hover:opacity-100 rounded-none filter blur-md transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
