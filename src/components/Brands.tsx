"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "SONY", color: "group-hover:text-[#ffffff] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]" },
  { name: "PIONEER", color: "group-hover:text-[#ff0000] group-hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]" },
  { name: "JBL", color: "group-hover:text-[#ff6600] group-hover:shadow-[0_0_15px_rgba(255,102,0,0.4)]" },
  { name: "KENWOOD", color: "group-hover:text-[#ff2a2a] group-hover:shadow-[0_0_15px_rgba(255,42,42,0.4)]" },
  { name: "ALPINE", color: "group-hover:text-[#00a3e0] group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)]" },
  { name: "BLAUPUNKT", color: "group-hover:text-[#00529b] group-hover:shadow-[0_0_15px_rgba(0,82,155,0.4)]" },
  { name: "CONTINENTAL", color: "group-hover:text-[#ffa500] group-hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]" },
];

export default function Brands() {
  return (
    <section className="bg-black py-16 border-y border-white/5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <span className="text-[10px] font-heading font-black uppercase tracking-widest text-zinc-600 block">
          Authorized Partner & Custom Integrations
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center bg-zinc-950/20 py-6">
        {/* Infinite Logo Carousel wrapper */}
        <div className="flex w-[200%] animate-scroll-marquee gap-12 items-center">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="w-[180px] shrink-0 text-center group transition-all duration-300 relative cursor-pointer"
            >
              {/* Text-based logo styled like premium racing decal */}
              <span
                className={`font-heading font-black text-2xl md:text-3xl tracking-widest transition-all duration-300 uppercase block
                  text-zinc-700 group-hover:scale-105 group-hover:font-extrabold group-hover:text-neon-glow`}
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
                }}
              >
                {brand.name}
              </span>
              
              {/* Highlight underlay */}
              <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 rounded-lg filter blur-md transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
