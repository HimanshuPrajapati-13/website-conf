"use client";

import React from "react";

const tickerItems = [
  "SECURING OUR FUTURE",
  "NURTURING NATURE",
  "ICSES 2027 CALL FOR PAPER OPEN",
  "BRIDGING MODERN SCIENCE & INDIGENOUS KNOWLEDGE SYSTEM",
];

export function SlidingMarquee() {
  return (
    <div className="relative z-20 w-full overflow-hidden border-y border-[#8fd4a8]/30 bg-gradient-to-r from-[#0c2417] via-[#103822] to-[#0c2417] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(143,212,168,0.15)] backdrop-blur-md">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-10">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`ticker-1-${index}`}>
              <span className="font-sans text-sm sm:text-base font-black tracking-[0.2em] uppercase text-white drop-shadow-sm transition-colors hover:text-[#8fd4a8]">
                {item}
              </span>
              <span className="text-[#8fd4a8] text-xs sm:text-sm drop-shadow-[0_0_8px_rgba(143,212,168,0.8)]">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for continuous seamless loop */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pl-6 sm:pl-10">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`ticker-2-${index}`}>
              <span className="font-sans text-sm sm:text-base font-black tracking-[0.2em] uppercase text-white drop-shadow-sm transition-colors hover:text-[#8fd4a8]">
                {item}
              </span>
              <span className="text-[#8fd4a8] text-xs sm:text-sm drop-shadow-[0_0_8px_rgba(143,212,168,0.8)]">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
