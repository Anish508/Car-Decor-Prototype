"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ShieldCheck, Award, Gauge, Settings } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const duration = 2; // seconds
    const totalSteps = 60;
    const increment = Math.ceil(end / totalSteps);
    const stepTime = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading font-black text-4xl md:text-6xl text-white text-neon-glow">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const metrics = [
    {
      title: "Precision Fitting",
      value: 99.8,
      description: "Laser-aligned bespoke cabin fits",
    },
    {
      title: "OEM Integration",
      value: 100,
      description: "Lossless zero-wire slicing installs",
    },
    {
      title: "Sound Tuning",
      value: 98.6,
      description: "Acoustic cabin phase alignment",
    },
    {
      title: "Customer Return",
      value: 95.4,
      description: "Lifetime styling assistance rate",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background blueprint details (F1 grid style) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top title */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
              Engineered Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Performance <span className="text-chrome">Metrics</span>
          </h2>
          <p className="text-sm text-zinc-400 font-medium mt-4">
            Our numbers display the legacy of craft and professional execution we carry to every build.
          </p>
        </div>

        {/* Counters panel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24">
          
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900/30 border border-white/5 relative group hover:border-neon-blue/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-blue/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300">
              <Award className="w-5 h-5 text-zinc-400 group-hover:text-neon-blue" />
            </div>
            <Counter value={44} suffix="+" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-zinc-500 mt-3 group-hover:text-zinc-400">
              Years in Business
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900/30 border border-white/5 relative group hover:border-neon-blue/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-blue/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300">
              <ShieldCheck className="w-5 h-5 text-zinc-400 group-hover:text-neon-blue" />
            </div>
            <Counter value={1000} suffix="+" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-zinc-500 mt-3 group-hover:text-zinc-400">
              Premium Customers
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900/30 border border-white/5 relative group hover:border-neon-blue/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-blue/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300">
              <Settings className="w-5 h-5 text-zinc-400 group-hover:text-neon-blue" />
            </div>
            <Counter value={5000} suffix="+" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-zinc-500 mt-3 group-hover:text-zinc-400">
              Elite Installations
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900/30 border border-white/5 relative group hover:border-neon-blue/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-blue/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300">
              <Gauge className="w-5 h-5 text-zinc-400 group-hover:text-neon-blue" />
            </div>
            <Counter value={100} suffix="+" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-zinc-500 mt-3 group-hover:text-zinc-400">
              Brands Available
            </span>
          </div>

        </div>

        {/* Circular Gauges Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-950 border border-white/5">
              {/* Animated Circular Gauge */}
              <div className="relative w-28 h-28 flex items-center justify-center mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-zinc-900 fill-none"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-neon-blue fill-none"
                    strokeWidth="4"
                    strokeDasharray={2 * Math.PI * 48}
                    initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                    whileInView={{
                      strokeDashoffset:
                        2 * Math.PI * 48 - (2 * Math.PI * 48 * m.value) / 100,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center leading-none">
                  <span className="font-heading font-bold text-white text-lg">{m.value}%</span>
                </div>
              </div>

              <h4 className="text-sm font-heading font-extrabold uppercase tracking-widest text-white mb-2">
                {m.title}
              </h4>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
