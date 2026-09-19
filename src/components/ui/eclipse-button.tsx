"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  HTMLMotionProps,
} from "framer-motion";

export interface EclipseButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
}

export const EclipseButton = React.forwardRef<
  HTMLButtonElement,
  EclipseButtonProps
>(
  (
    {
      children,
      className = "",
      spotlightColor = "rgba(83, 172, 255, 0.35)",
      variant = "primary",
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // Mouse coordinates relative to button element
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);
    const opacity = useMotionValue(0);

    // Spring physics configuration for responsive cursor tracking
    const springConfig = { stiffness: 400, damping: 28, mass: 0.1 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Dynamic spotlight overlay gradient
    const spotlightBg = useMotionTemplate`radial-gradient(160px circle at ${smoothX}px ${smoothY}px, ${spotlightColor}, transparent 80%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = buttonRef.current || e.currentTarget;
      const rect = target.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);

      if (onMouseMove) onMouseMove(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      opacity.set(1);
      if (onMouseEnter) onMouseEnter(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      opacity.set(0);
      if (onMouseLeave) onMouseLeave(e);
    };

    // Style variants map
    const variantStyles = {
      primary:
        "bg-cihBlue text-white border border-cihBlueDark/20 shadow-md hover:shadow-lg",
      secondary:
        "bg-cihLightBlue text-cihBlueDark border border-cihLightBlue/30 shadow-sm",
      outline:
        "bg-white/80 backdrop-blur-md text-cihBlue border border-slate-200 shadow-xs hover:border-cihBlue/30",
      dark: "bg-cihBlueDark text-white border border-white/10 shadow-lg",
    };

    return (
      <motion.button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }
        }}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-base font-bold transition-colors cursor-pointer select-none group ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {/* Eclipse border overlay */}
        <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none z-10" />

        {/* Spotlight overlay layer */}
        <motion.span
          className="absolute inset-0 pointer-events-none rounded-full transition-opacity duration-300 z-0"
          style={{
            background: spotlightBg,
            opacity: opacity,
          }}
        />

        {/* Inner Eclipse Glow Rim */}
        <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cihLightBlue/20 via-cihYellow/20 to-cihLightBlue/20 blur-xs z-0" />

        {/* Button Content */}
        <span className="relative z-20 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

EclipseButton.displayName = "EclipseButton";

export default EclipseButton;
