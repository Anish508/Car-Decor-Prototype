"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Check, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form fields
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("Audio Engineering");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle || !phone) return;
    setSubmitted(true);
    
    // Simulate API call and redirect to WhatsApp in a separate tab with formatted details
    const text = encodeURIComponent(
      `Hello Car Decor! I'd like to book a customization blueprint consultation.\n\n*Name:* ${name || "Enthusiast"}\n*Vehicle:* ${vehicle}\n*Upgrade:* ${service}\n*Contact:* ${phone}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/917892671436?text=${text}`, "_blank");
      setSubmitted(false);
      setIsOpen(false);
      setName("");
      setVehicle("");
      setPhone("");
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-xl overflow-hidden border border-cream-accent/15 bg-workshop-card p-6 md:p-10 shadow-[0_0_50px_rgba(255,157,0,0.15)] z-10 text-left carbon-pattern"
          >
            {/* F1 Grid lines on background */}
            <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

            {/* Glowing headlight reflection */}
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-amber-neon/10 rounded-full filter blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-cream-accent/60 hover:text-amber-neon hover:border-amber-neon/50 transition-all duration-300 rounded-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="relative z-10 flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border-b border-cream-accent/10 pb-4">
                    <span className="text-[11px] font-title font-black uppercase tracking-widest text-amber-neon text-amber-glow">
                      ATELIER CONFIGURATOR
                    </span>
                    <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mt-1">
                      COMMISSION A BUILD
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-title font-black uppercase tracking-widest text-zinc-500">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Driver Name"
                        className="w-full bg-workshop-elevated border border-cream-accent/10 rounded-none px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-amber-neon transition-colors duration-300"
                      />
                    </div>

                    {/* Vehicle */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-title font-black uppercase tracking-widest text-zinc-500">
                        Vehicle Model <span className="text-amber-neon">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        placeholder="e.g. Porsche 911, Fortuner, Thar"
                        className="w-full bg-workshop-elevated border border-cream-accent/10 rounded-none px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-amber-neon transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Select Upgrade */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-title font-black uppercase tracking-widest text-zinc-500">
                        Upgrade Class
                      </label>
                      <div className="relative">
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-workshop-elevated border border-cream-accent/10 rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-neon transition-colors duration-300 appearance-none"
                        >
                          <option value="Audio Engineering">High-Fidelity Audio</option>
                          <option value="Ambient LED Styling">Ambient LED Integration</option>
                          <option value="Bespoke Cabin Leather">Premium Seat Covers & Cabin</option>
                          <option value="Detailing & Coatings">Ceramic Shield & Paint Correction</option>
                          <option value="Off-Road Performance">Off-Road Accessories & Suspension</option>
                          <option value="Forged Alloys & Stance">Alloys & Wheel Upgrades</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Contact Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-title font-black uppercase tracking-widest text-zinc-500">
                        Mobile Number <span className="text-amber-neon">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 XXXXX XXXXX"
                        className="w-full bg-workshop-elevated border border-cream-accent/10 rounded-none px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-amber-neon transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      type="submit"
                      className="w-full py-4 bg-amber-neon text-black font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-dark transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,157,0,0.2)]"
                    >
                      <span>CONFIRM BUILD BLUEPRINT</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-4 text-xs font-sans text-zinc-500 text-center mt-2">
                      <a href="tel:+917892671436" className="flex items-center gap-1 hover:text-cream-accent transition-colors">
                        <Phone className="w-3.5 h-3.5 text-amber-neon" />
                        <span>Direct Call</span>
                      </a>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-amber-neon" />
                        <span>Opens WhatsApp</span>
                      </span>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-16 text-center gap-5 relative z-10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                >
                  <div className="w-20 h-20 rounded-full bg-amber-neon/10 border-2 border-amber-neon flex items-center justify-center text-amber-neon shadow-[0_0_30px_rgba(255,157,0,0.3)]">
                    <Check className="w-10 h-10 stroke-[3px]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-black text-white uppercase">
                      BUILD BLUEPRINT LAUNCHED
                    </h3>
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-sm mt-2">
                      Connecting you to our head tuning stylist on WhatsApp to finalize your vehicle layout...
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Global utility helper to open contact modal from any component
export function openContactModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-contact-modal"));
  }
}
