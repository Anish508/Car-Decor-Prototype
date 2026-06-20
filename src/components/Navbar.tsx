"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Showcase", href: "#showcase" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Timeline", href: "#process" },
    { name: "Showroom", href: "#showroom" },
    { name: "Instagram", href: "#instagram" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-black/60 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <span className="text-white font-heading font-extrabold text-lg tracking-tighter group-hover:scale-110 transition-transform duration-300">
                CD
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-black text-lg tracking-widest leading-none">
                CAR DECOR
              </span>
              <span className="text-[9px] text-neon-blue font-sans font-bold tracking-widest leading-none mt-1 uppercase">
                Luxury Customization
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs text-zinc-400 font-heading font-semibold uppercase tracking-wider transition-colors duration-300 hover:text-white group"
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[1.5px] bg-neon-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call-to-action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917892671436?text=I%20am%20interested%20in%20a%20luxury%20car%20upgrade!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-neon-blue/50 text-xs font-heading font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-neon-blue" />
              <span>WhatsApp Now</span>
            </a>
            <a
              href="#cta"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-cyber-blue text-black font-heading font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-heading font-bold uppercase tracking-widest text-zinc-300 hover:text-neon-blue transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                className="flex flex-col gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://wa.me/917892671436?text=I%20am%20interested%20in%20a%20luxury%20car%20upgrade!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-zinc-900 border border-white/10 text-sm font-heading font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-neon-blue" />
                  <span>WhatsApp Now</span>
                </a>
                <a
                  href="#cta"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-cyber-blue text-black font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center"
                >
                  <span>Book Consultation</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
