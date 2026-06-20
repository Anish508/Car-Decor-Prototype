"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Eye, Sparkles, Sliders } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const builds = [
  {
    title: "Interior Refinement",
    description: "Nappa leather upholsteries, forged carbon dash trims, and custom steering alignments.",
    image: "/images/after.png",
    category: "Cabin Upholstery",
  },
  {
    title: "Elite Ambient lighting",
    description: "App-controlled multi-zone optic fiber installs highlighting interior body lines.",
    image: "/images/showroom.png", // reusing the showroom image which features neon blue ambient lights
    category: "LED Integration",
  },
  {
    title: "Concert Audio Setups",
    description: "Fiberglass subwoofer enclosures, customized trunk damping, and digital amplifiers.",
    image: "/images/hero-bg.png", // reusing hero bg showing custom premium car layout
    category: "High Fidelity Sound",
  },
];

export default function Showcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Before/After slider mouse/touch movement handler
  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // GSAP Horizontal scrolling ScrollTrigger for the categories
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        horizontalSectionRef.current,
        { translateX: 0 },
        {
          translateX: "-33.33%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1.2,
            start: "top top",
            end: () => `+=${horizontalSectionRef.current?.offsetWidth || 1000}`,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="showcase" className="bg-zinc-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
              Transformation Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Interactive <span className="text-chrome">Showcase</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-medium mt-4">
            Interact with our premium customization slider or swipe through our design portfolio to witness how we redefine stock vehicles.
          </p>
        </div>
      </div>

      {/* BEFORE / AFTER SLIDER CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 mb-32">
        <div className="relative mb-6">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded bg-black/60 backdrop-blur border border-white/5 text-[10px] uppercase font-heading font-bold text-white">
            <span>Drag slider to compare transformation</span>
          </div>
        </div>

        <div
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          className="relative h-[300px] md:h-[550px] w-full rounded-2xl overflow-hidden border border-white/5 cursor-ew-resize select-none shadow-[0_15px_40px_rgba(0,0,0,0.8)] touch-none"
        >
          {/* BEFORE IMAGE (Background) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/before.png')" }}
          >
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/60 border border-white/5 text-xs font-heading font-extrabold uppercase tracking-widest text-zinc-400">
              Stock Interior
            </div>
          </div>

          {/* AFTER IMAGE (Foreground / Clipped) */}
          <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: "url('/images/after.png')",
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-neon-blue/20 border border-neon-blue/40 text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
              Bespoke Car Decor Upgrade
            </div>
          </div>

          {/* SLIDER BAR / HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-neon-blue/80 pointer-events-none"
            style={{ left: `${sliderPosition}%`, boxShadow: "0 0 10px #00f0ff" }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Sliders className="w-4 h-4 text-neon-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* GSAP PINNED HORIZONTAL CAROUSEL */}
      <div ref={triggerRef} className="relative w-full">
        <div className="overflow-hidden">
          <div
            ref={horizontalSectionRef}
            className="flex flex-col lg:flex-row w-full lg:w-[150%] h-auto lg:h-[70vh] items-stretch lg:items-center relative gap-8 lg:gap-0 px-6 lg:px-0"
          >
            {/* Introductory panel */}
            <div className="w-full lg:w-[33.33%] h-auto lg:h-full flex flex-col justify-center py-8 lg:py-0 px-0 lg:px-24 bg-transparent lg:bg-black border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-neon-blue" />
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue">
                  Elite Masterpieces
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-heading font-black uppercase text-white tracking-tight leading-none mb-6">
                Redefining the <br />
                <span className="text-chrome">Drive Experience</span>
              </h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-sm">
                Scroll down to review closeups of custom steering wheels, console refitting, high-fidelity subwoofers, and dynamic neon components.
              </p>
            </div>

            {/* Showcase items */}
            {builds.map((build, idx) => (
              <div
                key={idx}
                className="w-full lg:w-[33.33%] h-[350px] sm:h-[450px] lg:h-full flex items-center justify-center p-6 sm:p-8 bg-zinc-950 border lg:border-0 lg:border-r border-white/5 rounded-2xl lg:rounded-none relative group overflow-hidden"
              >
                {/* Background Image with Zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${build.image}')`, opacity: 0.35 }}
                />
                
                {/* Ambient glow backing */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60 z-10" />

                {/* Floating Info card */}
                <div className="relative z-20 max-w-md p-8 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-col gap-4 text-left">
                  <span className="text-[10px] font-heading font-black uppercase tracking-widest text-neon-blue bg-neon-blue/10 px-2.5 py-1 rounded self-start">
                    {build.category}
                  </span>
                  <h4 className="text-2xl font-heading font-bold text-white uppercase leading-none">
                    {build.title}
                  </h4>
                  <p className="text-sm text-zinc-400 font-sans font-medium leading-relaxed">
                    {build.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
