"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, RefreshCw, Eye } from "lucide-react";

const projects = [
  {
    id: "interior",
    title: "Cabin Tailoring",
    before: "/images/before.png",
    after: "/images/after.png",
    description: "Witness the transition from stock plastic trims to bespoke hand-stitched Nappa leather and forged carbon details.",
    beforeLabel: "Stock Fabric Trim",
    afterLabel: "Bespoke Nappa Leather Hangar Build"
  },
  {
    id: "lighting",
    title: "Ambient Optics",
    before: "/images/before.png",
    after: "/images/showroom.png",
    description: "Atmospheric multi-zone optic fiber LED setups accentuating dashboard lines and footwells without visible conduits.",
    beforeLabel: "Dark Stock Cabin",
    afterLabel: "Ambient LED Matrix System"
  },
  {
    id: "audio",
    title: "Acoustic Stage",
    before: "/images/before.png",
    after: "/images/hero-bg.png",
    description: "Complete interior acoustic damping coupled with digital signal processors and bespoke trunk enclosures.",
    beforeLabel: "Uninsulated Chassis",
    afterLabel: "Concert Stage Audio Damping"
  },
  {
    id: "wheels",
    title: "Alloy Upgrades",
    before: "/images/before.png",
    after: "/images/showroom.png",
    description: "Transitioning to lightweight performance forged alloys to enhance braking clearance and road presence.",
    beforeLabel: "OEM Steel Wheels",
    afterLabel: "Elite Multi-Spoke Alloys"
  }
];

export default function Transformations() {
  const [activeTab, setActiveTab] = useState("interior");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentProject = projects.find((p) => p.id === activeTab) || projects[0];

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return; // Only move on click drag
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="transformations" className="relative bg-workshop-bg py-24 md:py-36 border-t border-cream-accent/5 overflow-hidden">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-amber-neon/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-title font-black uppercase tracking-[0.25em] text-amber-neon text-amber-glow block mb-4">
            // BEFORE / AFTER COMPARISON
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase leading-none tracking-tight">
            TRANSFORMATIONS
          </h2>
          <p className="text-zinc-500 font-sans text-sm md:text-base mt-4 max-w-lg leading-relaxed">
            Every vehicle leaves our hangar transformed. Slide the controller to compare our performance customization with the factory stock layout.
          </p>
        </div>

        {/* Tab Selector - Magazine Spec Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveTab(proj.id);
                setSliderPosition(50);
              }}
              className={`py-4 border text-center transition-all duration-300 font-title font-bold text-xs uppercase tracking-widest cursor-pointer ${
                activeTab === proj.id
                  ? "bg-amber-neon text-black border-amber-neon shadow-[0_0_15px_rgba(255,157,0,0.25)]"
                  : "bg-workshop-card text-zinc-400 border-cream-accent/10 hover:border-cream-accent/30 hover:text-white"
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Dynamic Detail Text */}
        <p className="text-center text-zinc-400 font-sans text-xs md:text-sm max-w-xl mx-auto mb-12 border-l border-r border-amber-neon/30 px-6 py-2">
          {currentProject.description}
        </p>

        {/* Slider Box */}
        <div className="relative max-w-4xl mx-auto">
          {/* Top Instruction overlay */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-workshop-bg/80 border border-cream-accent/10 text-[9px] uppercase font-title font-black text-white tracking-widest">
            <Sliders className="w-3 h-3 text-amber-neon" />
            <span>DRAG CENTER DIAL TO COMPARE</span>
          </div>

          <div
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            className="relative h-[320px] sm:h-[500px] w-full border border-cream-accent/10 overflow-hidden cursor-ew-resize select-none shadow-[0_20px_50px_rgba(0,0,0,0.9)] touch-none"
          >
            {/* BEFORE IMAGE (Full Background) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${currentProject.before}')` }}
            >
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-workshop-bg/80 border border-cream-accent/15 text-[10px] font-title font-black uppercase tracking-wider text-zinc-400">
                {currentProject.beforeLabel}
              </div>
            </div>

            {/* AFTER IMAGE (Overlay polygon clipping) */}
            <div
              className="absolute inset-0 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('${currentProject.after}')`,
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-amber-neon/10 border border-amber-neon/30 text-[10px] font-title font-black uppercase tracking-wider text-amber-neon text-amber-glow">
                {currentProject.afterLabel}
              </div>
            </div>

            {/* SLIDER BAR HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-amber-neon pointer-events-none"
              style={{ left: `${sliderPosition}%`, boxShadow: "0 0 10px #FF9D00" }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-none bg-workshop-bg border border-amber-neon flex items-center justify-center shadow-[0_0_20px_rgba(255,157,0,0.5)] transition-transform duration-200 hover:scale-110">
                <RefreshCw className="w-5 h-5 text-amber-neon animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
