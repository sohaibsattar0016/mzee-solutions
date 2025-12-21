"use client";

import { ParticleNetwork } from "./ParticleNetwork";

export function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Particle Network */}
      <ParticleNetwork />
      
      {/* Cyberpunk Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-30" />

      {/* Ambient Glow - Top Left (Cyan/Blue) */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      {/* Ambient Glow - Bottom Right (Purple) */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      {/* Circuit Veins - Left Side (Desktop) */}
      <svg 
        className="fixed left-0 top-0 w-24 h-full text-purple-500 opacity-10 hidden md:block"
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
      >
        <path d="M0 0 V100 H30 V200 H50 V300 H20 V400 H40 V500 H10 V600 H35 V700 H25 V800 H45 V900 H15 V1000" stroke="currentColor" strokeWidth="1" />
        <path d="M0 50 H20 V150 H40 V250 H15 V350 H35 V450 H25 V550 H45 V650 H20 V750 H40 V850 H30 V950" stroke="currentColor" strokeWidth="1" />
        <path d="M0 100 H15 V220 H30 V340 H10 V460 H25 V580 H40 V700 H20 V820 H35 V940" stroke="currentColor" strokeWidth="1" />
        
        {/* Circuit Nodes */}
        <circle cx="30" cy="100" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="50" cy="200" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="20" cy="300" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="40" cy="400" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="10" cy="500" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="35" cy="600" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="25" cy="700" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="45" cy="800" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="15" cy="900" r="3" fill="currentColor" className="animate-pulse" />
      </svg>

      {/* Circuit Veins - Right Side (Desktop) */}
      <svg 
        className="fixed right-0 top-0 w-24 h-full text-purple-500 opacity-10 hidden md:block"
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path d="M100 0 V100 H70 V200 H50 V300 H80 V400 H60 V500 H90 V600 H65 V700 H75 V800 H55 V900 H85 V1000" stroke="currentColor" strokeWidth="1" />
        <path d="M100 50 H80 V150 H60 V250 H85 V350 H65 V450 H75 V550 H55 V650 H80 V750 H60 V850 H70 V950" stroke="currentColor" strokeWidth="1" />
        <path d="M100 100 H85 V220 H70 V340 H90 V460 H75 V580 H60 V700 H80 V820 H65 V940" stroke="currentColor" strokeWidth="1" />
        
        {/* Circuit Nodes */}
        <circle cx="70" cy="100" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="50" cy="200" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="80" cy="300" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="60" cy="400" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="90" cy="500" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="65" cy="600" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="75" cy="700" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="55" cy="800" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="85" cy="900" r="3" fill="currentColor" className="animate-pulse" />
      </svg>

      {/* Circuit Veins - Left Side (Mobile) */}
      <svg 
        className="fixed left-[5px] top-0 w-8 h-full text-purple-500 opacity-5 block md:hidden"
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
      >
        <path d="M0 0 V100 H30 V200 H50 V300 H20 V400 H40 V500 H10 V600 H35 V700 H25 V800 H45 V900 H15 V1000" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="100" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="20" cy="300" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="10" cy="500" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="25" cy="700" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="15" cy="900" r="3" fill="currentColor" className="animate-pulse" />
      </svg>

      {/* Circuit Veins - Right Side (Mobile) */}
      <svg 
        className="fixed right-[5px] top-0 w-8 h-full text-purple-500 opacity-5 block md:hidden"
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path d="M100 0 V100 H70 V200 H50 V300 H80 V400 H60 V500 H90 V600 H65 V700 H75 V800 H55 V900 H85 V1000" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="70" cy="100" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="80" cy="300" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="90" cy="500" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="75" cy="700" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="85" cy="900" r="3" fill="currentColor" className="animate-pulse" />
      </svg>

      {/* Additional Horizontal Circuit Lines */}
      <div className="fixed top-1/4 left-0 right-0 h-px bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10" />
      <div className="fixed top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
      <div className="fixed top-3/4 left-0 right-0 h-px bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10" />
    </div>
  );
}
