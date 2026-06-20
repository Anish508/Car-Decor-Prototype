"use client";

import { Heart, MessageCircle, Play, Eye } from "lucide-react";
import { motion } from "framer-motion";

const instagramPosts = [
  {
    image: "/images/after.png",
    likes: "2.4K",
    comments: "184",
    type: "reel",
    views: "45K",
  },
  {
    image: "/images/hero-bg.png",
    likes: "1.8K",
    comments: "95",
    type: "post",
    views: "",
  },
  {
    image: "/images/showroom.png",
    likes: "3.2K",
    comments: "245",
    type: "reel",
    views: "82K",
  },
  {
    image: "/images/before.png",
    likes: "920",
    comments: "52",
    type: "post",
    views: "",
  },
];

export default function InstagramShowcase() {
  return (
    <section id="instagram" className="bg-zinc-950 py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
                Live Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Follow The <span className="text-chrome">Transformations</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end md:pb-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-heading font-extrabold uppercase tracking-widest text-white hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group"
            >
              <span>@CarDecorMangalore</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
            <span className="text-[10px] text-zinc-500 uppercase font-heading font-bold tracking-wider mt-1">
              Join 25K+ Automotive Enthusiasts
            </span>
          </div>
        </div>

        {/* Masonry / Grid Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/40 block hover:border-neon-blue/30 transition-all duration-300 interactive-hover"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-105"
                style={{ backgroundImage: `url('${post.image}')` }}
              />

              {/* Dark shading layer */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Reels icon */}
              {post.type === "reel" && (
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
                </div>
              )}

              {/* Hover Stats overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col gap-4">
                  {post.type === "reel" && post.views && (
                    <div className="flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue">
                      <Eye className="w-4 h-4" />
                      <span>{post.views} Views</span>
                    </div>
                  )}

                  <div className="flex items-center gap-6 text-white font-heading font-black text-sm">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-white text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <span className="text-[9px] uppercase font-heading font-extrabold tracking-widest text-zinc-400 mt-2">
                    Tap to view on Instagram
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
