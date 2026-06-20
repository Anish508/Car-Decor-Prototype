"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 45, stiffness: 450, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Offset by half of cursor width/height to center it
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Use opacity and pointer events in className instead of conditional return 
  // to ensure React hooks are always rendered in the exact same order.
  return (
    <div className={`transition-opacity duration-300 pointer-events-none z-50 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Outer Spring Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-blue pointer-events-none mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? "rgba(0, 240, 255, 0.15)" : "rgba(0, 240, 255, 0.03)",
          borderColor: isHovered ? "rgba(0, 240, 255, 1)" : "rgba(0, 240, 255, 0.4)",
          boxShadow: isHovered 
            ? "0 0 15px rgba(0, 240, 255, 0.6)" 
            : "0 0 5px rgba(0, 240, 255, 0.1)",
        }}
      />
      {/* Inner Precision Dot (Snaps instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          // Offset inside the cursorX/Y to align center with the outer ring (outer is 32px wide, inner is 8px wide, offset = 12px)
          translateX: 12,
          translateY: 12,
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
