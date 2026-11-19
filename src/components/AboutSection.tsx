"use client";

import { focusAreas, pillars } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Plant,
  Drop,
  Tree,
  SunHorizon,
  Scales,
  UsersThree,
  Compass,
  ArrowUpRight,
} from "@phosphor-icons/react";

const pillarIcons = [
  <Plant key="plant" className="text-[#3A5D48]" size={32} weight="duotone" />,
  <Tree key="tree" className="text-[#B87951]" size={32} weight="duotone" />,
  <Scales key="scales" className="text-[#3A5D48]" size={32} weight="duotone" />,
  <UsersThree key="users" className="text-[#B87951]" size={32} weight="duotone" />,
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 border-b border-[#E5E0D5] bg-[#FDFBF7] text-[#1A1A18] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-14 lg:px-16">
        
        {/* Top Section: About the Conference */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
          
          {/* Left Narrative */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3A5D48]">
                  About The Conference
                </span>
                <span className="h-px w-10 bg-[#3A5D48]/40" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A18] leading-[1.08]">
                Bridging Modern Science &amp;{" "}
                <span className="text-[#B87951]">Indigenous Knowledge</span>
              </h2>

              <p className="font-serif text-xl sm:text-2xl italic text-[#3A5D48] leading-relaxed border-l-2 border-[#3A5D48] pl-4">
                ICSES 2027 brings together global experts, researchers, policymakers, practitioners, and students to co-create innovative, inclusive and scalable solutions for a resilient planet.
              </p>

              <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-[#4A5550]">
                <p>
                  Environmental sustainability demands a holistic approach that combines the empirical strength of modern climate and environmental sciences with the generational wisdom of Indigenous Knowledge Systems (IKS).
                </p>
                <p>
                  Practices such as rainwater harvesting, sacred groves, community forest management, and sustainable agriculture have historically maintained ecological balance, resource conservation, and resilient living across ecosystems.
                </p>
                <p>
                  Today, rapid climate destabilization, water stress, biodiversity collapse, and emerging contaminants require transdisciplinary partnerships that honor both scientific rigor and traditional stewardship.
                </p>
              </div>

              {/* Tag counters */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-[#57534E]">
                <span className="rounded-full bg-[#E8EFE9] px-4 py-1.5 text-[#2D5A3F] font-semibold">
                  🌿 2 Full Conference Days
                </span>
                <span className="rounded-full bg-[#F5EBE1] px-4 py-1.5 text-[#B87951] font-semibold">
                  🏔️ Himalayan Focus Session
                </span>
                <span className="rounded-full bg-[#EAE8E3] px-4 py-1.5 text-[#2B3A33] font-semibold">
                  🌏 Nepal &amp; India Partnership
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Focus Areas Card */}
          <ScrollReveal delay={250} className="w-full">
            <aside className="rounded-3xl border border-[#DCD5C5] bg-[#F7F4EC] p-7 sm:p-9 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A5D48]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D5]">
                <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1A1A18]">
                  Conference focus areas
                </h3>
                <Compass className="text-[#3A5D48]" size={26} weight="duotone" />
              </div>

              <ul className="mt-6 space-y-3">
                {focusAreas.map((area, idx) => (
                  <li
                    key={area}
                    className="group flex items-center justify-between border-b border-[#E5E0D5]/70 pb-3.5 text-base sm:text-lg font-medium text-[#2B3A33] transition-colors hover:text-[#B87951] last:border-b-0 last:pb-0"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#8A8175] group-hover:text-[#B87951] transition-colors">
                        0{idx + 1}
                      </span>
                      <span>{area}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#8A8175] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E5E0D5] flex items-center justify-between">
                <p className="font-mono text-xs text-[#6B7280] uppercase tracking-wider">
                  ICSES 2027 • Thematic Tracks
                </p>
                <a
                  href="#themes"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#3A5D48] hover:text-[#B87951] transition-colors uppercase tracking-wider"
                >
                  Explore tracks →
                </a>
              </div>
            </aside>
          </ScrollReveal>

        </div>

        {/* Bottom Section: Integration for a Sustainable Future (4 Pillars) */}
        <div className="mt-24 sm:mt-32 pt-16 border-t border-[#E5E0D5]">
          <ScrollReveal delay={100}>
            <div className="max-w-3xl">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B87951]">
                Core Pillars
              </span>
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A18] leading-[1.08]">
                Integration for a <span className="text-[#3A5D48]">Sustainable Future</span>
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
                The conference is organized around four interconnected pillars that integrate scientific rigor with cultural wisdom to craft actionable environmental solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Pillars Grid with Interactive Hover & Warm Editorial Aesthetics */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.title} delay={150 + idx * 80}>
                <article className="group h-full flex flex-col justify-between rounded-3xl border border-[#DCD5C5] bg-[#F7F4EC] p-7 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3A5D48]/40 hover:bg-[#FAF8F2]">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#E5E0D5] shadow-xs group-hover:scale-110 transition-transform">
                        {pillarIcons[idx % pillarIcons.length]}
                      </div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#8A8175]">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="mt-6 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A18] group-hover:text-[#3A5D48] transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#57534E]">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#E5E0D5]/70 flex items-center justify-between text-xs font-mono text-[#8A8175]">
                    <span className="uppercase tracking-wider">Actionable Framework</span>
                    <span className="text-[#3A5D48] font-bold group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
