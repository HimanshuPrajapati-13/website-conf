"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowsClockwise, Image as ImageIcon } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { nearbyPlaces } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type InstitutionsSectionProps = {
  theme?: SectionTheme;
};

type InstitutionCardProps = {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  theme: SectionTheme;
};

function InstitutionCard({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  theme,
}: InstitutionCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-full [perspective:1200px]">
      <article
        onClick={() => setFlipped((v) => !v)}
        className={`group relative h-full min-h-[32rem] sm:min-h-[30rem] cursor-pointer [transform-style:preserve-3d] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } lg:hover:[transform:rotateY(180deg)]`}
      >
        {/* Front Face: Description */}
        <div
          className={`absolute inset-0 flex flex-col justify-between rounded-sm border ${tc.border(theme)} ${tc.panel(theme)} [backface-visibility:hidden]`}
        >
          <div>
            <div className="flex items-center justify-between gap-3">
              <h3 className={tc.h3Lg(theme)}>{title}</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur-md shrink-0 lg:hidden">
                <ImageIcon size={14} />
                Photo
              </span>
            </div>
            <div className={`mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed ${tc.body(theme)}`}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs sm:text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <ArrowsClockwise size={15} />
              Tap or hover to flip
            </span>
          </div>
        </div>

        {/* Back Face: Campus Photo */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 rounded-sm border bg-black/60 backdrop-blur-md ${tc.border(theme)} [backface-visibility:hidden] [transform:rotateY(180deg)]`}
        >
          <div className="relative h-4/5 w-full overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 sm:mt-4 flex items-center justify-between w-full px-2 text-xs sm:text-sm text-white/80">
            <span className="font-medium text-white">{title} Campus</span>
            <span className="flex items-center gap-1 text-white/60">
              <ArrowsClockwise size={14} /> Tap to flip back
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export function InstitutionsSection({ theme = "light" }: InstitutionsSectionProps) {
  const [activePlaceIndex, setActivePlaceIndex] = useState(0);
  const [subImageIndex, setSubImageIndex] = useState(0);
  const activePlace = nearbyPlaces[activePlaceIndex] || nearbyPlaces[0];
  const activeImages = activePlace.images && activePlace.images.length > 0 ? activePlace.images : [activePlace.image];

  // Auto-cycle multiple photos if available (e.g. Pushkar ghats & sunset)
  useEffect(() => {
    setSubImageIndex(0);
  }, [activePlaceIndex]);

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const timer = setInterval(() => {
      setSubImageIndex((prev) => (prev + 1) % activeImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeImages.length, activePlaceIndex]);

  return (
    <section className={tc.sectionMuted(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Host Institutions"
          description="SES-IKS 2026 is jointly organized by Central University of Rajasthan and Tribhuvan University."
        />

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <InstitutionCard
            title="Central University of Rajasthan"
            paragraphs={[
              "Established by an Act of Parliament in March 2009, Central University of Rajasthan is located in Ajmer District, Rajasthan. The university operates through its own 518-acre campus with modern amenities.",
              "Fully funded by the Ministry of Education through the University Grants Commission, the university has been accredited with an A++ grade by NAAC in 2023 and holds Category I University status.",
              "The School of Earth Sciences provides interdisciplinary knowledge in environmental and atmospheric sciences, training scholars through research, education, and outreach programs in collaboration with national and international organizations.",
            ]}
            imageSrc="/images/curaj-campus.jpeg"
            imageAlt="Central University of Rajasthan campus"
            theme={theme}
          />

          <InstitutionCard
            title="Tribhuvan University"
            paragraphs={[
              "Tribhuvan University contributes to SES-IKS 2026 through its School of Earth Sciences and international relations programs, supporting interdisciplinary research in environmental and atmospheric sciences.",
              "The university emphasizes training in earth sciences to serve local and global communities, with departments offering undergraduate, postgraduate, and doctoral programs across environmental and atmospheric science.",
              "Collaboration between CURaj and Tribhuvan University reflects the conference commitment to cross-border knowledge exchange on sustainable environmental solutions.",
            ]}
            imageSrc="/images/tu-campus.jpeg"
            imageAlt="Tribhuvan University campus"
            theme={theme}
          />
        </div>

        {/* Nearby Places with Interactive Hover Image Preview & Multi-photo Carousel */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Dynamic Image Display with smooth transition */}
          <div className={`relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-full overflow-hidden rounded-sm border ${tc.border(theme)} shadow-xl bg-black/40`}>
            {activeImages.map((imgSrc, imgIdx) => (
              <div
                key={imgSrc}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  imgIdx === subImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={activePlace.alt}
                  fill
                  priority={activePlaceIndex === 0 && imgIdx === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>
            ))}

            {/* Photo indicators if multiple photos exist */}
            {activeImages.length > 1 && (
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/20">
                <span className="text-xs text-white/70 mr-1">Photo</span>
                {activeImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSubImageIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === subImageIndex ? "w-5 bg-[#8fd4a8]" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 text-white">
              <span className="inline-flex items-center rounded-full bg-[#8fd4a8]/20 border border-[#8fd4a8]/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#8fd4a8] backdrop-blur-md">
                {activePlace.distance || "Nearby Destination"}
              </span>
              <h4 className="mt-2 font-serif text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
                {activePlace.name}
              </h4>
              {activePlace.description && (
                <p className="mt-1 text-xs sm:text-sm text-white/85 line-clamp-2 max-w-lg">
                  {activePlace.description}
                </p>
              )}
            </div>
          </div>

          {/* Places List with Hover Interaction */}
          <div className={`${tc.panel(theme)} flex flex-col justify-between`}>
            <div>
              <h3 className={tc.h3(theme)}>Nearby places</h3>
              <p className={`mt-2 sm:mt-3 text-sm sm:text-base ${tc.body(theme)}`}>
                Delegates visiting Ajmer may explore these renowned destinations. Hover or tap to preview.
              </p>
              
              <ul className="mt-5 space-y-2.5 sm:space-y-3">
                {nearbyPlaces.map((place, index) => {
                  const isActive = index === activePlaceIndex;
                  return (
                    <li
                      key={place.name}
                      onMouseEnter={() => setActivePlaceIndex(index)}
                      onClick={() => setActivePlaceIndex(index)}
                      className={`group cursor-pointer rounded-sm border p-3.5 sm:p-4 transition-all duration-200 ${
                        isActive
                          ? theme === "overlay"
                            ? "border-[#8fd4a8] bg-white/20 shadow-md translate-x-1"
                            : "border-accent bg-paper-muted shadow-sm translate-x-1"
                          : theme === "overlay"
                          ? "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                          : "border-border bg-paper hover:border-border-strong hover:bg-paper-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <span
                            className={`block text-base sm:text-lg font-medium transition-colors ${
                              isActive
                                ? "text-[#8fd4a8] font-semibold"
                                : theme === "overlay"
                                ? "text-white group-hover:text-white/90"
                                : "text-ink group-hover:text-accent"
                            }`}
                          >
                            {place.name}
                          </span>
                          {place.description && (
                            <p
                              className={`mt-0.5 text-xs sm:text-sm line-clamp-1 transition-colors ${
                                isActive ? "text-white/80" : tc.subtle(theme)
                              }`}
                            >
                              {place.description}
                            </p>
                          )}
                        </div>

                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-xs transition-all ${
                            isActive
                              ? "bg-[#8fd4a8] text-[#0c0f0d] font-semibold"
                              : "text-white/50 opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          {isActive ? "Viewing" : "Preview →"}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="mt-4 pt-3 border-t border-white/10 text-xs text-white/55">
              Tip: Hover or tap any location to see photos and explore regional attractions around Central University of Rajasthan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

