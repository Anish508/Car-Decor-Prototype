"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MessageSquare, Car, ShoppingBag, Wrench, ShieldCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "1. Consultation",
    description: "Sit down with our styling specialists in Mangalore. We analyze your vehicle, audio preferences, and custom interior aspirations to form an execution blueprint.",
    icon: MessageSquare,
  },
  {
    title: "2. Vehicle Inspection",
    description: "Our certified technicians conduct a 40-point structural and electrical diagnosis to map wire lanes, speaker cavities, and panel tolerances before styling begins.",
    icon: Car,
  },
  {
    title: "3. Product Selection",
    description: "Handpick materials, custom stitching colors, alloy layouts, and premium components from our curated authorized brand wall.",
    icon: ShoppingBag,
  },
  {
    title: "4. Professional Installation",
    description: "Surgical execution of audio enclosures, fiber-optic light wiring, and custom seat tailoring. Completed with zero-splice, loss-free connections.",
    icon: Wrench,
  },
  {
    title: "5. Quality Check",
    description: "Intensive evaluation of acoustics phase alignments, electrical currents, and leather stitching tension. Complete certification verification.",
    icon: ShieldCheck,
  },
  {
    title: "6. Masterpiece Delivery",
    description: "Handover of your modified vehicle with warranty booklets and official registration of custom components. Your custom journey is complete.",
    icon: CheckCircle,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scale value
  const scaleYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="bg-zinc-950 py-24 md:py-32 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-neon-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
              Execution Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
            The Custom <span className="text-chrome">Workflow</span>
          </h2>
          <p className="text-sm text-zinc-400 font-medium mt-4 leading-relaxed">
            From initial sketch to final engine start, we follow a rigorous, premium process to guarantee perfect styling.
          </p>
        </div>

        {/* Timeline body */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 md:pl-16">
          
          {/* Default Dark Background Line */}
          <div className="absolute left-3 md:left-7 top-2 bottom-2 w-[2px] bg-zinc-900 rounded-full" />

          {/* Active Glowing Progress Line */}
          <motion.div
            style={{
              scaleY: scaleYSpring,
              transformOrigin: "top",
              boxShadow: "0 0 12px #00f0ff"
            }}
            className="absolute left-3 md:left-7 top-2 bottom-2 w-[2px] bg-neon-blue rounded-full"
          />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
                  
                  {/* Glowing Node Point */}
                  <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-6 h-6 md:w-10 md:h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-neon-blue group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-300 z-10">
                    <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-zinc-500 group-hover:text-neon-blue transition-colors duration-300" />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="flex-1 p-6 md:p-8 rounded-2xl bg-zinc-900/30 backdrop-blur-md border border-white/5 group-hover:border-neon-blue/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.05)] transition-all duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-heading font-extrabold uppercase text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
