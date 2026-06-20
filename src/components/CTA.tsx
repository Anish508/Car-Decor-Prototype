"use client";

import { useState } from "react";
import { MessageSquare, Calendar, MapPin, X, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [vehicle, setVehicle] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Audio System");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setVehicle("");
      setPhone("");
    }, 2500);
  };

  return (
    <>
      <section id="cta" className="relative py-32 bg-black overflow-hidden flex items-center justify-center min-h-[70vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none scale-105"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            opacity: 0.35,
          }}
        />
        {/* Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08)_0%,rgba(0,0,0,0.85)_80%)]" />

        {/* Floating background lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-blue/10 rounded-full filter blur-[120px] animate-pulse-slow pointer-events-none" />

        {/* CTA Content Container */}
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
                Bespoke Commissions
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black uppercase text-white tracking-tight leading-none text-neon-glow">
              Ready To Upgrade <br />
              <span className="text-chrome">Your Ride?</span>
            </h2>

            <p className="text-sm md:text-base text-zinc-300 font-sans max-w-xl leading-relaxed mt-4 font-medium">
              Transform your everyday drive into an elite luxury experience. Get a custom tailoring blueprint layout mapped out by our styling consultants in Mangalore.
            </p>

            {/* Buttons Grid */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-cyber-blue text-black font-heading font-black text-xs uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 interactive-hover"
              >
                Get Custom Quote
              </button>
              
              <a
                href="https://wa.me/917892671436?text=I%20want%20to%20get%20a%20price%20quote%20for%20a%20car%20upgrade!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950 border border-zinc-800 hover:border-neon-blue/40 text-white font-heading font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-900 transition-all duration-300 interactive-hover"
              >
                <MessageSquare className="w-4 h-4 text-neon-blue" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#showroom"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/10 hover:bg-white/5 text-white font-heading font-bold text-xs uppercase tracking-widest hover:border-white/20 transition-all duration-300 interactive-hover"
              >
                Visit Showroom
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING CONSULTATION MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-8 shadow-2xl z-10 text-left carbon-pattern"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-neon-blue">
                        Custom Design Request
                      </span>
                      <h3 className="text-2xl font-heading font-black text-white uppercase mt-1">
                        Configure Upgrade
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-zinc-500">
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        required
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        placeholder="e.g. Fortuner, BMW 3 Series, Creta"
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-neon-blue transition-colors duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-zinc-500">
                        Select Core Upgrade
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-blue transition-colors duration-300 appearance-none"
                      >
                        <option value="Audio System">Car Audio Engineering</option>
                        <option value="Ambient Lighting">LED Ambient Lighting</option>
                        <option value="Premium Seat Covers">Custom Seat Covers</option>
                        <option value="Detailing & Coating">Ceramic Coating & Detailing</option>
                        <option value="Off-Road Build">Off-Road Accessories</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-zinc-500">
                        Contact Mobile
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 78926 71436"
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-neon-blue transition-colors duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-blue to-cyber-blue text-black font-heading font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
                    >
                      <span>Submit Blueprint Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-heading font-black text-white uppercase mt-2">
                      Blueprint Scheduled
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-sans max-w-xs font-medium">
                      Your request has been registered. A styling coordinator will contact you shortly to review layouts.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
