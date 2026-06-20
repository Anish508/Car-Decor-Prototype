"use client";

import { useRef } from "react";
import { 
  Speaker, 
  Monitor, 
  Sparkles, 
  Scissors, 
  Disc, 
  Video, 
  Camera, 
  Wind, 
  ShieldAlert, 
  Compass, 
  ArrowUpRight 
} from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const services = [
  {
    title: "Car Audio Systems",
    description: "High-fidelity acoustics custom engineered for your vehicle's cabin geometry. Premium amplifiers, subwoofers, and digital signal processors (DSP).",
    icon: Speaker,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Android Infotainment",
    description: "State-of-the-art smart displays featuring Apple CarPlay, Android Auto, navigation, and high-performance processor integration.",
    icon: Monitor,
    accent: "from-cyan-500 to-teal-500",
  },
  {
    title: "Ambient Lighting",
    description: "Immersive multi-zone optical fiber LED lighting. App-controlled RGB animations custom integrated into dash, console, and footwells.",
    icon: Sparkles,
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "Premium Seat Covers",
    description: "Bespoke leather and alcantara upholstery. Individually tailored stitch patterns, custom styling, and anatomical comfort formatting.",
    icon: Scissors,
    accent: "from-red-500 to-orange-500",
  },
  {
    title: "Alloy Wheels",
    description: "Elite lightweight forged and cast alloy rims from the world's leading styling brands. High durability and racing aerodynamics.",
    icon: Disc,
    accent: "from-zinc-500 to-zinc-200",
  },
  {
    title: "Reverse Cameras",
    description: "Ultra-wide angle high definition rear parking assistance guidance cameras seamlessly retrofitted with steering trajectory.",
    icon: Video,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Dash Cameras",
    description: "Dual-channel front and rear high-resolution drive recorders with G-sensor parking guards and night vision recording.",
    icon: Camera,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "Car Detailing",
    description: "Multi-stage machine paint correction, interior disinfection, leather enrichment, and intensive decontamination treatments.",
    icon: Wind,
    accent: "from-cyan-600 to-blue-600",
  },
  {
    title: "Ceramic Coating",
    description: "Ultra-hydrophobic nano-ceramic paint protection shield. High gloss retention, chemical resistance, and self-cleaning attributes.",
    icon: ShieldAlert,
    accent: "from-blue-400 to-teal-400",
  },
  {
    title: "Off-Road Accessories",
    description: "Heavy-duty bullbars, suspension lifts, snorkels, recovery winches, roof racks, and auxiliary off-road LED lighting setups.",
    icon: Compass,
    accent: "from-amber-600 to-orange-600",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Custom springs for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative coordinates between -0.5 and 0.5
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);

    // Glow position variables (relative pixels)
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${px}px`);
    cardRef.current.style.setProperty("--mouse-y", `${py}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col justify-between h-[360px] rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/5 overflow-hidden p-8 interactive-hover transition-all duration-300 hover:border-neon-blue/40 carbon-pattern"
    >
      {/* Light glow mask */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 240, 255, 0.08), transparent 80%)`,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }}>
        {/* Icon with glow background */}
        <div className="relative w-14 h-14 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300">
          <IconComponent className="w-6 h-6 text-zinc-400 group-hover:text-neon-blue transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-500 leading-relaxed font-medium group-hover:text-zinc-400 transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* Footer Link inside Card */}
      <div 
        className="flex items-center justify-between mt-6 pt-4 border-t border-white/5" 
        style={{ transform: "translateZ(15px)" }}
      >
        <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
          Configure Upgrade
        </span>
        <div className="w-8 h-8 rounded-full bg-zinc-950 border border-white/5 flex items-center justify-center group-hover:bg-neon-blue group-hover:border-neon-blue transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-blue/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
                Signature Tailoring
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Premium Custom<br />
              <span className="text-chrome">Services</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 font-medium max-w-sm leading-relaxed md:pb-2">
            Every service is executed with surgical precision and the finest quality components, delivering an uncompromising upgrade for your automobile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
