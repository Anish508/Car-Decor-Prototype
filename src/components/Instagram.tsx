"use client";

import { useState } from "react";
import { Heart, MessageCircle, Play, Eye, Users, ChevronRight, Activity, MessageSquare, Award } from "lucide-react";

// Real post & reel logs matching their actual IG profile screenshot
const reelLogs = [
  {
    tag: "PINNED // AFTERMARKET WHEELS",
    title: "Bronze Velocity forged wheel profile details & fitment check.",
    views: "1.2M",
    likes: "194K",
    comments: "312",
    date: "Pinned Build",
    modClass: "FORGED WHEELS"
  },
  {
    tag: "REEL // BLACK THAR MS0733",
    title: "The custom Black Thar 'HONORABLE' build walkthrough and grille upgrades.",
    views: "15K",
    likes: "1k",
    comments: "245",
    date: "Recent Build",
    modClass: "OFF-ROAD"
  },
  {
    tag: "REEL // LED OPTIONS",
    title: "Fortuner Legender high-beam LED optics and multi-beam projector calibrations.",
    views: "185K",
    likes: "6.1K",
    comments: "492",
    date: "1 Week Ago",
    modClass: "LED DESIGN"
  },
  {
    tag: "REEL // XUV 700 GOLD STANCE",
    title: "Gold multi-spoke alloy rim installations and absolute fender flush checks.",
    views: "78K",
    likes: "2.8K",
    comments: "156",
    date: "2 Weeks Ago",
    modClass: "STANCE & RIMS"
  }
];

// Profile highlights matching their actual IG highlights bubbles
const profileHighlights = [
  {
    title: "FORGED WHEELS",
    desc: "Bespoke lightweight alloys, multi-spoke rims, and custom bronze/gold finishes."
  },
  {
    title: "VALVETRONIC",
    desc: "Performance exhausts, active valve control setups, and sound acoustics."
  },
  {
    title: "STEERING CUSTOMS",
    desc: "Custom hand-stitched steering wraps, forged carbon inserts, and ergonomics."
  },
  {
    title: "BENGALURU & MANGALORE",
    desc: "Atelier customization hangar serving automotive enthusiasts across Karnataka."
  }
];

export default function InstagramFeed() {
  const [copied, setCopied] = useState(false);

  const handleCopyHandle = () => {
    navigator.clipboard.writeText("@cardecorofficial");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              // INSTAGRAM BROADCAST MATRIX
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
            </a>
            <span className="text-[10px] text-zinc-500 uppercase font-title font-black tracking-widest flex items-center gap-1.5 mt-1">
              <Users className="w-3.5 h-3.5 text-amber-neon" />
              <span>Join 32K+ Automotive Devotees</span>
            </span>
          </div>
        </div>

        {/* Dashboard grid layout (3 Columns / Asymmetrical responsive blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: Live Reels Broadcast Logs (5 Columns Span) */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-workshop-card border border-cream-accent/10 p-6 md:p-8 carbon-pattern relative">
            <div className="flex justify-between items-center border-b border-cream-accent/10 pb-4">
              <span className="text-[10px] font-title font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-amber-neon animate-pulse" />
                ACTIVE HANGAR LOGS
              </span>
              <span className="text-[9px] font-mono text-zinc-600">FEED // VALID</span>
            </div>

            <div className="flex flex-col gap-4">
              {reelLogs.map((log) => (
                <a
                  key={log.tag}
                  href="https://www.instagram.com/cardecorofficial?igsh=MWY2YTMzNXQ5endvag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-workshop-bg hover:bg-workshop-elevated border border-cream-accent/5 hover:border-amber-neon/30 p-4 transition-all duration-300 relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-title font-black text-amber-neon tracking-wider">
                      {log.tag}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      {log.date}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-sans font-bold text-white group-hover:text-amber-neon transition-colors leading-tight">
                    {log.title}
                  </h4>
                  
                  {/* Reel Statistics */}
                  <div className="flex items-center gap-4 mt-4 text-[10px] font-title font-black text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-amber-neon" />
                      {log.views} VIEWS
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                      {log.likes} LIKES
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-cream-accent" />
                      {log.comments} COMMENTS
                    </span>
                  </div>

                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-hover:text-amber-neon group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Official Profile Highlights & Focus (4 Columns Span) */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-workshop-card border border-cream-accent/10 p-6 md:p-8 carbon-pattern relative">
            <div className="flex justify-between items-center border-b border-cream-accent/10 pb-4">
              <span className="text-[10px] font-title font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-neon" />
                TUNING BUBBLES // FOCUS
              </span>
              <span className="text-[9px] font-mono text-zinc-600">STAT // EST 1992</span>
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto max-h-[360px] pr-2 scrollbar-thin">
              {profileHighlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-workshop-bg border-l-2 border-amber-neon/50 p-4 flex flex-col gap-2 hover:border-amber-neon transition-colors duration-300"
                >
                  <span className="text-[11px] font-title font-black text-white uppercase tracking-wider">
                    {item.title}
                  </span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Real Instagram Stats Telemetry (3 Columns Span) */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-workshop-card border border-cream-accent/10 p-6 md:p-8 carbon-pattern relative text-left">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-700">PROFILE // TG-32</div>
            
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-[9px] font-title font-black text-zinc-500 uppercase tracking-widest">
                VERIFIED FOLLOWERS
              </span>
              <span className="text-5xl font-heading font-black text-white leading-none">
                32.3K
              </span>
              <span className="text-[9px] font-title font-black text-amber-neon text-amber-glow uppercase tracking-widest">
                @cardecorofficial
              </span>
            </div>

            <div className="flex flex-col gap-6 mt-10 border-t border-cream-accent/10 pt-6">
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 border-b border-cream-accent/5 pb-2">
                <span>TOTAL POSTS:</span>
                <span className="text-white font-bold">1,431</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 border-b border-cream-accent/5 pb-2">
                <span>ESTABLISHED:</span>
                <span className="text-white font-bold">1992</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>VERIFICATION:</span>
                <span className="text-amber-neon font-bold">CAR DECOR ®</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/cardecorofficial?igsh=MWY2YTMzNXQ5endvag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-amber-neon text-black font-title font-bold text-xs uppercase tracking-widest text-center hover:bg-amber-dark transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>OPEN INSTAGRAM</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyHandle}
                className="w-full py-3 bg-workshop-elevated border border-cream-accent/10 hover:border-amber-neon/30 text-white font-title font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                {copied ? "COPIED HANDLE!" : "COPY HANDLE"}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
