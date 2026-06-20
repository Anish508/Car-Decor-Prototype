"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronDown, MessageSquare, PhoneCall, Star } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Mouse Parallax coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse movement to slight offsets for parallax layers
  const textParallaxX = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const textParallaxY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  
  const bgParallaxX = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  const bgParallaxY = useTransform(smoothMouseY, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      // Calculate cursor position offset from center in pixels
      const x = e.clientX - clientWidth / 2;
      const y = e.clientY - clientHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating particles canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      alpha: number;
      drift: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Populate particles
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.1),
        alpha: Math.random() * 0.4 + 0.1,
        drift: Math.random() * 0.2 - 0.1,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`; // Cyan neon glows
        ctx.fill();

        // Slow drifting movement
        p.y += p.speedY;
        p.x += p.drift;

        // Reset particle if it drifts off screen
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }
      });

      // Mouse interactive line connection
      const currentMouseX = mouseX.get() + window.innerWidth / 2;
      const currentMouseY = mouseY.get() + window.innerHeight / 2;

      particles.forEach((p) => {
        const dx = p.x - currentMouseX;
        const dy = p.y - currentMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(currentMouseX, currentMouseY);
          ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 150) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between"
    >
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full scale-105 pointer-events-none"
        style={{ x: bgParallaxX, y: bgParallaxY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.png"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: isVideoLoaded ? 0.45 : 0.25 }}
          onPlay={() => setIsVideoLoaded(true)}
        >
          <source
            src="https://player.vimeo.com/external/459389137.hd.mp4?s=878d65a0da4dcb78a3f85117f72ab27ef51deee8&profile_id=170&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Cover image styling fallback (dark metallic) */}
        {!isVideoLoaded && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-bg.png')",
              opacity: 0.35,
            }}
          />
        )}
        {/* Absolute dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,rgba(0,0,0,0.85)_80%)]" />
      </motion.div>

      {/* Floating Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Hero Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-start z-20 mt-16 md:mt-24">
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
          className="max-w-4xl flex flex-col items-start gap-4 md:gap-6"
        >
          {/* Elite tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-[10px] md:text-xs font-heading font-extrabold uppercase tracking-widest text-neon-blue text-neon-glow">
              Mangalore's Premier Customization Atelier
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Transform Your Car
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block text-chrome text-neon-glow"
              >
                Into A Masterpiece
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl mt-2 font-medium"
          >
            Premium Car Accessories, Detailing, Audio Systems, Lighting, Seat Covers & Complete Vehicle Customization. Crafting high-fidelity experiences since 1982.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-6"
          >
            <a
              href="#cta"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-cyber-blue text-black font-heading font-black text-xs uppercase tracking-widest text-center shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.65)] hover:scale-105 transition-all duration-300 interactive-hover"
            >
              Book Consultation
            </a>
            <a
              href="https://wa.me/919900000000?text=Hello%20Car%20Decor%20Mangalore,%20I%20want%20to%20customize%20my%20vehicle!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-zinc-950 border border-zinc-800 hover:border-neon-blue/50 text-white font-heading font-extrabold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-zinc-900 transition-all duration-300 interactive-hover"
            >
              <MessageSquare className="w-4 h-4 text-neon-blue" />
              <span>WhatsApp Now</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom section with Stats and Scroll Indicator */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-20 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Horizontal Experience Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-heading font-extrabold text-white text-neon-glow">
              44+
            </span>
            <span className="text-[10px] uppercase font-heading text-zinc-500 font-bold tracking-widest leading-tight">
              Years<br />Experience
            </span>
          </div>
          <div className="h-6 w-[1px] bg-zinc-800 hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-heading font-extrabold text-white text-neon-glow">
              1000+
            </span>
            <span className="text-[10px] uppercase font-heading text-zinc-500 font-bold tracking-widest leading-tight">
              Happy<br />Customers
            </span>
          </div>
          <div className="h-6 w-[1px] bg-zinc-800 hidden md:block" />
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-heading font-extrabold text-white flex items-center gap-1 text-neon-glow">
                4.8
                <Star className="w-4 h-4 text-neon-blue fill-neon-blue" />
              </span>
            </div>
            <span className="text-[10px] uppercase font-heading text-zinc-500 font-bold tracking-widest leading-tight">
              Verified<br />Rating
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
          className="flex flex-col items-center gap-1.5 cursor-pointer interactive-hover"
        >
          <span className="text-[9px] uppercase font-heading font-bold tracking-widest text-zinc-500">
            Explore Craftsmanship
          </span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-neon-blue"
            />
          </div>
        </motion.a>
      </div>
    </div>
  );
}
