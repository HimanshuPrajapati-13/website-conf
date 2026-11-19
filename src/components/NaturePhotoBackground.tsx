"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHOTOS = [
  { src: "/images/hero/glacier.webp", alt: "Glacier and snow-covered mountain peaks" },
  { src: "/images/hero/river.webp", alt: "River flowing through a forest valley" },
  { src: "/images/hero/plains.webp", alt: "Open plains with mountains in the distance" },
  { src: "/images/hero/forest.webp", alt: "Dense green forest canopy" },
  { src: "/images/hero/mountains.webp", alt: "Himalayan mountain range at sunrise" },
  { src: "/images/hero/wetlands.webp", alt: "Misty wetlands and natural landscape" },
] as const;

const SLIDE_INTERVAL_MS = 6000;

export function NaturePhotoBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % PHOTOS.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {PHOTOS.map((photo, index) => (
        <div
          key={photo.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[#0a0d0b]/52" />
    </div>
  );
}
