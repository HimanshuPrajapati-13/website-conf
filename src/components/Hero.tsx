"use client";

import Image from "next/image";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative z-10 min-h-screen bg-[#FDFBF7] text-[#1A1A18] pt-20 lg:pt-0 flex flex-col justify-center border-b border-[#2B3A33]/20 overflow-hidden">
      {/* 2-Column Split: Exactly matching the RubyConf poster reference */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr] min-h-[calc(100vh-80px)] lg:min-h-screen">

        {/* Left Column: Editorial Content Pane */}
        <div className="flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-16 py-12 lg:py-24 border-r-0 lg:border-r border-[#2B3A33]/20 bg-[#FDFBF7]">
          <div>
            {/* Header pill / tracker */}
            <div className="mb-4">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3A5D48]">
                ICSES 2027 • 18–19 JANUARY 2027
              </span>
            </div>

            {/* Giant Display Title matching reference typography */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-black uppercase tracking-tight text-[#1A1A18] leading-[1.02]">
              INTERNATIONAL
              <br />
              CONFERENCE ON
              <br />
              <span className="text-[#B87951]">SUSTAINABLE</span>
              <br />
              ENVIRONMENTAL
              <br />
              <span className="text-[#3A5D48]">SOLUTIONS:</span>
            </h1>

            {/* Subtitle Line */}
            <div className="mt-6 text-lg sm:text-2xl font-serif italic text-[#3A5D48] tracking-wide border-l-3 border-[#3A5D48] pl-4">
              Integrating Modern Science and Indigenous Knowledge Systems
            </div>

            {/* Conference Description Story */}
            <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-[#4A5550] max-w-xl">
              <strong className="text-[#1A1A18] font-semibold">ICSES 2027</strong> brings together global researchers, Indigenous knowledge holders, policymakers, and innovators to co-create actionable solutions for environmental resilience. Exploring the synergy between modern atmospheric & earth sciences and time-tested ecological stewardship.
            </p>

            {/* Theme Focus Pill Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#E8EFE9] px-3.5 py-1 text-xs font-mono font-medium text-[#2D5A3F]">
                Climate & Atmosphere
              </span>
              <span className="rounded-full bg-[#E8EFE9] px-3.5 py-1 text-xs font-mono font-medium text-[#2D5A3F]">
                Water & Ecosystems
              </span>
              <span className="rounded-full bg-[#E8EFE9] px-3.5 py-1 text-xs font-mono font-medium text-[#2D5A3F]">
                Indigenous Knowledge (IKS)
              </span>
              <span className="rounded-full bg-[#E8EFE9] px-3.5 py-1 text-xs font-mono font-medium text-[#2D5A3F]">
                Himalayan Session
              </span>
            </div>
          </div>

          <div>
            {/* Pill CTA Buttons matching the reference (Dark Register + Soft Green Prospectus) */}
            <div className="mt-10 pt-4 flex flex-wrap items-center gap-4">
              <a
                href={site.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-[#454F49] px-7 py-3 text-sm sm:text-base font-semibold lowercase tracking-wider text-[#FDFBF7] shadow-md transition-all hover:bg-[#2B3A33] hover:shadow-lg active:scale-95"
              >
                register
              </a>

              <a
                href="#abstracts"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-[#DCE6DE] px-7 py-3 text-sm sm:text-base font-semibold lowercase tracking-wider text-[#2B3A33] transition-all hover:bg-[#ccd9cf] active:scale-95"
              >
                download the prospectus
              </a>
            </div>

            {/* University Collaborator Notes */}
            <div className="mt-8 pt-5 border-t border-[#E5E0D5] flex flex-wrap items-center gap-6 text-sm sm:text-base font-mono text-[#4A5550]">
              <span>Jointly organized by <strong className="text-[#1A1A18] font-semibold">Central University of Rajasthan</strong> &amp; <strong className="text-[#1A1A18] font-semibold">Tribhuvan University, Nepal</strong></span>
            </div>
          </div>
        </div>

        {/* Right Column: Full-Height Edge-to-Edge Image Panel (just like RubyConf) */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-auto min-h-full bg-[#1A2620] overflow-hidden">
          <Image
            src="/images/hero-forest-mist.jpg"
            alt="Misty Mountain Forest Canopy"
            fill
            priority
            className="object-cover object-center filter contrast-[1.05] saturate-[1.08]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          {/* Vertical edge overlay for seamless integration */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none hidden lg:block" />

          {/* Bottom vignette placard */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8 text-white flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#8fd4a8]">ICSES 2027</p>
              <p className="font-serif text-base sm:text-lg font-bold leading-tight mt-1 text-[#EDE5D8]">
                Bridging knowledge, nurturing nature, securing our future
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-mono backdrop-blur-md">
              Himalayan Ecosystems
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
