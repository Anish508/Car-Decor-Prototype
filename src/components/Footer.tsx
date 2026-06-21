"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, ShieldAlert } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-workshop-bg border-t border-cream-accent/5 pt-20 pb-8 relative overflow-hidden select-none">
      {/* Background grid line overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-amber-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6 text-left relative">
            <div className="flex flex-col">
              <span className="text-white font-heading font-black text-2xl tracking-widest leading-none">
                CAR DECOR
              </span>
              <span className="text-[9px] text-amber-neon font-title font-black tracking-widest leading-none mt-1 uppercase">
                Luxury Customization Atelier
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-sans font-medium max-w-xs">
              Mangalore's premier automotive customization studio since 1982. Redefining interior comfort, acoustics engineering, and vehicle styling aesthetics.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/cardecorofficial?igsh=MWY2YTMzNXQ5endvag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-zinc-400 hover:text-amber-neon hover:border-amber-neon/40 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/917892671436"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center text-zinc-400 hover:text-amber-neon hover:border-amber-neon/40 transition-all duration-300 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-none" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 text-left">
            <h4 className="text-xs font-title font-black uppercase tracking-widest text-white">
              // DESIGN STYLING CLASSES
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Acoustics Sound Damping",
                "App-Controlled Ambient LEDs",
                "Cognac & Black Upholstery",
                "Ceramic Body Shield Coating",
                "Off-Road Rally Suspension",
                "Forged Alloys & Rim Alignment"
              ].map((link) => (
                <a
                  key={link}
                  href="#workshop"
                  className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-sans font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-left">
            <h4 className="text-xs font-title font-black uppercase tracking-widest text-white">
              // HANGAR HEADQUARTERS
            </h4>
            <div className="flex flex-col gap-4 text-xs font-sans font-medium text-zinc-500">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-amber-neon shrink-0 mt-0.5" />
                <span>
                  Car Decor, Balmatta Road, <br />
                  Near Jyothi Circle, Mangalore, <br />
                  Karnataka, India - 575001
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-amber-neon shrink-0" />
                <a href="tel:+917892671436" className="hover:text-white transition-colors duration-300">
                  +91 78926 71436
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-amber-neon shrink-0" />
                <a href="mailto:info@cardecor.in" className="hover:text-white transition-colors duration-300">
                  info@cardecor.in
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-amber-neon shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 9:30 AM - 8:00 PM <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Showroom Specs Panel (Dashboard feel) */}
          <div className="flex flex-col gap-6 text-left relative bg-workshop-card border border-cream-accent/10 p-6 carbon-pattern">
            <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-700">SYS // ST-01</div>
            
            <h4 className="text-xs font-title font-black uppercase tracking-widest text-white mb-2">
              // ATELIER METRICS
            </h4>
            
            <div className="flex flex-col gap-3 font-mono text-[10px] text-zinc-500">
              <div className="flex justify-between border-b border-cream-accent/5 pb-1">
                <span>ESTABLISHED:</span>
                <span className="text-white">1982</span>
              </div>
              <div className="flex justify-between border-b border-cream-accent/5 pb-1">
                <span>WORKSHOP STATUS:</span>
                <span className="text-amber-neon text-amber-glow font-bold">ACTIVE</span>
              </div>
              <div className="flex justify-between border-b border-cream-accent/5 pb-1">
                <span>COORDINATES:</span>
                <span className="text-white">12.8727° N, 74.8428° E</span>
              </div>
              <div className="flex justify-between">
                <span>COMMISSION QUEUE:</span>
                <span className="text-white">AVAILABLE</span>
              </div>
            </div>

            <button
              onClick={openContactModal}
              className="mt-4 w-full py-2.5 bg-workshop-elevated hover:bg-amber-neon text-white hover:text-black border border-cream-accent/15 hover:border-amber-neon font-title font-bold text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              REQUEST A TOUR
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-cream-accent/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-zinc-600 font-sans font-medium">
            &copy; {currentYear} Car Decor Mangalore. All Rights Reserved. Custom Engineering Atelier.
          </span>
          <div className="flex items-center gap-6 text-[10px] text-zinc-600 font-sans font-medium">
            <a href="#" className="hover:text-zinc-400 transition-colors duration-300">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-zinc-400 transition-colors duration-300">Terms of Commission</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
