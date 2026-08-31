"use client";

import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isFading, setIsFading] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Start fading out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Remove from DOM completely after transition (500ms later)
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center gap-8 sm:gap-12 px-4 text-center max-w-full">
        <h1
          className="text-white text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black uppercase tracking-[0.08em] sm:tracking-[0.16em] max-w-[95vw] break-words"
          style={{
            fontFamily: '"Arial Black", Impact, sans-serif',
            transform: "scaleX(1.1)",
            textShadow:
              "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)",
          }}
        >
          SES-IKS&apos;26
        </h1>
        <div className="text-white/80">
          <ConcentricRing className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>
    </div>
  );
}

function ConcentricRing({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-concentric-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <span
        role="status"
        className={`relative inline-block ${className || ""}`}
        style={{
          animation:
            "loading-ui-concentric-ring-rotation var(--duration, 1s) linear infinite",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-current"
          style={{ opacity: 0.25 }}
        />
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 rounded-full border-2 border-transparent border-b-current"
          style={{
            width: "83.333%",
            height: "83.333%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}
