"use client";

import { Star, Quote, Play, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Vikram Shenoy",
    role: "BMW M340i Owner",
    text: "Car Decor did a complete ambient lighting and audio upgrade on my BMW. The attention to detail was exceptional. Zero wire splicing, completely clean OEM fit. Outstanding!",
    rating: 5,
  },
  {
    name: "Dr. Ananya Rai",
    role: "Jeep Compass Owner",
    text: "Got custom seat covers and off-road auxiliary lighting installed. The leather fit is tight, perfectly stitched, and looks better than stock factory options. Recommended!",
    rating: 5,
  },
  {
    name: "Rohan D'Souza",
    role: "Audi A6 Owner",
    text: "The multi-stage paint detailing and ceramic coating they did made my Audi look brand new. The reflection depth is unbelievable. Absolute premium standard in Mangalore.",
    rating: 5,
  },
  {
    name: "Nikhil Hegde",
    role: "Fortuner Owner",
    text: "Installed high-end Android Infotainment and 360 camera package. The reverse parking guide calibration is spot-on. Extremely professional and courteous team.",
    rating: 5,
  },
];

export default function Trust() {
  return (
    <section id="trust" className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background neon light blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyber-blue/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
                Elite Clientele
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              Client <span className="text-chrome">Testimonials</span>
            </h2>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/50 backdrop-blur-md border border-white/5 flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-heading font-bold text-white">4.8</span>
                <div className="flex text-neon-blue">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neon-blue text-neon-blue" />
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase font-heading font-bold tracking-wider mt-1">
                Based on 850+ Google Reviews
              </span>
            </div>
            <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-heading font-extrabold uppercase tracking-widest">
              Verified
            </span>
          </div>
        </div>
      </div>

      {/* INFINITE MARQUEE SCROLLER */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-zinc-950/40 backdrop-blur-md mb-20 z-10 select-none">
        <div className="flex w-[200%] animate-scroll-marquee gap-6">
          {/* Double array to loop seamlessly */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="w-[300px] md:w-[400px] shrink-0 p-6 md:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur border border-white/5 flex flex-col justify-between hover:border-neon-blue/20 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-white/5 pointer-events-none" />
              <div>
                <div className="flex items-center text-neon-blue gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-blue text-neon-blue" />
                  ))}
                </div>
                <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed mb-6 font-medium italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-heading font-black text-white text-sm">
                  {t.name.split(" ")[0][0]}
                  {t.name.split(" ")[1] ? t.name.split(" ")[1][0] : ""}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-white">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-sans font-bold">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOCK VIDEO REVIEWS AREA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Video review Card 1 */}
          <div className="lg:col-span-2 relative h-[350px] rounded-2xl overflow-hidden border border-white/5 group shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"
              style={{ backgroundImage: "url('/images/showroom.png')" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10 transition-opacity duration-500 group-hover:opacity-85" />
            
            {/* Play trigger overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
              <div className="self-end">
                <span className="px-3 py-1 rounded bg-neon-blue/20 border border-neon-blue/40 text-[9px] uppercase font-heading font-extrabold tracking-widest text-neon-blue text-neon-glow">
                  Video Tour
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-neon-blue/50 flex items-center justify-center text-neon-blue hover:scale-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
                  <Play className="w-6 h-6 fill-neon-blue translate-x-0.5" />
                </button>
                <div className="flex flex-col text-left">
                  <h4 className="text-lg font-heading font-bold text-white uppercase leading-none">
                    Atelier Showroom Walkthrough
                  </h4>
                  <span className="text-xs text-zinc-400 font-sans mt-1">
                    Take a virtual flythrough of our customized luxury vehicle display
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Verification / Trust Badge Card */}
          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/5 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-neon-blue" />
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-neon-blue">
                  Official Certifications
                </span>
              </div>
              <h3 className="text-xl font-heading font-extrabold text-white uppercase mb-4 leading-snug">
                Authorized Premium Dealer
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans font-medium">
                We are certified partners of major luxury audio and detail coating manufacturers. All installations comply with official manufacturer warranty regulations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div>
                <span className="text-[10px] uppercase font-heading text-zinc-500 font-bold tracking-widest block mb-1">
                  Warranty Coverage
                </span>
                <span className="text-sm font-heading font-extrabold text-white">
                  Up to 7 Years
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-heading text-zinc-500 font-bold tracking-widest block mb-1">
                  Tech Certification
                </span>
                <span className="text-sm font-heading font-extrabold text-white">
                  MECP Master
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
