"use client";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-8 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col">
              <span className="text-white font-heading font-black text-xl tracking-widest leading-none">
                CAR DECOR
              </span>
              <span className="text-[9px] text-neon-blue font-sans font-bold tracking-widest leading-none mt-1 uppercase">
                Luxury Customization
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-sans font-medium">
              Mangalore's premier automotive customization studio since 1982. Redefining interior tailoring, acoustics engineering, and vehicle styling aesthetics.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 interactive-hover"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 interactive-hover"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 interactive-hover"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 text-left">
            <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-white">
              Styling Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Acoustics Engineering",
                "Ambient LED Fibers",
                "Leather Comfort Styling",
                "Ceramic Body Shield",
                "Off-Road Commissions",
              ].map((link) => (
                <a
                  key={link}
                  href="#services"
                  className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-sans font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-left">
            <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-white">
              Atelier Details
            </h4>
            <div className="flex flex-col gap-4 text-xs font-sans font-medium text-zinc-500">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-neon-blue shrink-0 mt-0.5" />
                <span>
                  Car Decor, Balmatta Road, <br />
                  Near Jyothi Circle, Mangalore, <br />
                  Karnataka, India - 575001
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-neon-blue shrink-0" />
                <a href="tel:+919900000000" className="hover:text-white transition-colors duration-300">
                  +91 99000 00000
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-neon-blue shrink-0" />
                <a href="mailto:info@cardecor.in" className="hover:text-white transition-colors duration-300">
                  info@cardecor.in
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-neon-blue shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 9:30 AM - 8:00 PM <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed styled in dark mode */}
          <div className="flex flex-col gap-6 text-left">
            <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-white">
              Location Map
            </h4>
            <div className="w-full h-[180px] rounded-xl overflow-hidden border border-white/5 relative group">
              {/* Google Maps standard iframe with styling filters to make it dark */}
              <iframe
                title="Car Decor Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.544605943486!2d74.8427845!3d12.8726581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a39cbfa75bf%3A0xe54e60155bb9ad13!2sJyothi%20Circle%2C%20Hampankatta%2C%20Mangaluru%2C%20Karnataka%20575001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
