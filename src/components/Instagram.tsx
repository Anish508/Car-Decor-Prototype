"use client";

import { Heart, MessageCircle, Play, Eye, Users } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const feedPosts = [
  {
    image: "/images/after.png",
    likes: "4.8K",
    comments: "312",
    type: "reel",
    views: "92K",
    height: "h-[450px]",
    title: "Complete interior transformation on the BMW 3 Series. Custom red Nappa leather upholstery."
  },
  {
    image: "/images/hero-bg.png",
    likes: "2.5K",
    comments: "145",
    type: "post",
    views: "",
    height: "h-[300px]",
    title: "Stealth Fortuner acoustic damper installation. Zero panel resonance."
  },
  {
    image: "/images/showroom.png",
    likes: "6.1K",
    comments: "492",
    type: "reel",
    views: "185K",
    height: "h-[500px]",
    title: "Hyper-Optic ambient LED calibration. Multi-zone controls."
  },
  {
    image: "/images/before.png",
    likes: "1.9K",
    comments: "82",
    type: "post",
    views: "",
    height: "h-[350px]",
    title: "Stock vs Custom steering wheel layout. Forged carbon wraps."
  }
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative bg-workshop-bg py-24 md:py-36 border-t border-cream-accent/5 overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-amber-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-cream-accent/10 pb-8">
          <div>
            <span className="text-xs font-title font-black uppercase tracking-[0.25em] text-amber-neon text-amber-glow block mb-4">
              // SOCIAL TUNING CULTURE
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-none">
              INSTAGRAM CULTURE
            </h2>
          </div>
          
          <div className="flex flex-col lg:items-end gap-2">
            <a
              href="https://www.instagram.com/cardecorofficial?igsh=MWY2YTMzNXQ5endvag=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-title font-black uppercase tracking-wider text-white hover:text-amber-neon transition-colors duration-300 flex items-center gap-2 cursor-pointer group"
            >
              <span>@cardecorofficial</span>
              <span className="w-8 h-8 bg-workshop-elevated border border-cream-accent/10 flex items-center justify-center group-hover:border-amber-neon group-hover:bg-amber-neon group-hover:text-black transition-colors duration-300">
                <InstagramIcon className="w-4 h-4" />
              </span>
            </a>
            <span className="text-[10px] text-zinc-500 uppercase font-title font-black tracking-widest flex items-center gap-1.5 mt-1">
              <Users className="w-3.5 h-3.5 text-amber-neon" />
              <span>Join 25K+ Automotive Devotees</span>
            </span>
          </div>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {feedPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/cardecorofficial?igsh=MWY2YTMzNXQ5endvag=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative ${post.height} border border-cream-accent/10 bg-workshop-card block overflow-hidden hover:border-amber-neon/30 transition-all duration-300 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.8)]`}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"
                style={{ backgroundImage: `url('${post.image}')` }}
              />

              {/* Cover lighting overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-workshop-bg via-workshop-bg/15 to-transparent opacity-80 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-300" />
              
              {/* Overlay grid lines */}
              <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

              {/* Reels icon indicator */}
              {post.type === "reel" && (
                <div className="absolute top-4 right-4 z-20 w-9 h-9 bg-workshop-bg/90 border border-cream-accent/15 flex items-center justify-center text-white rounded-none shadow-lg">
                  <Play className="w-4 h-4 fill-white translate-x-0.5 text-white" />
                </div>
              )}

              {/* Content Detail (Always Visible at bottom, expands on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-3 justify-end h-1/2">
                <p className="text-xs text-zinc-400 font-sans font-medium line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.title}
                </p>

                <div className="flex items-center justify-between">
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-white font-title font-black text-xs">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-amber-neon fill-amber-neon" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-cream-accent" />
                      {post.comments}
                    </span>
                  </div>

                  {/* Reels Views overlay */}
                  {post.type === "reel" && (
                    <span className="text-[9px] font-title font-black uppercase text-amber-neon tracking-widest flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  )}
                </div>

                <div className="border-t border-cream-accent/10 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                  <span className="text-[9px] font-title font-black uppercase tracking-widest text-zinc-500">
                    CLICK TO WATCH ON INSTAGRAM
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
