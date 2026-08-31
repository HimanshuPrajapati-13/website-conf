"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { navLinks, site } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [onLightSurface, setOnLightSurface] = useState(false);

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnLightSurface(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "-72px 0px 0px 0px" },
    );

    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const useLightNav = !onLightSurface && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          useLightNav
            ? "border-b border-white/10 bg-[#0c0f0d]/30 backdrop-blur-md"
            : "border-b border-border bg-paper/95 backdrop-blur-sm shadow-xs"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[4.5rem] md:px-8 lg:px-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`font-serif text-lg font-semibold tracking-tight transition-colors sm:text-xl md:text-2xl ${
              useLightNav ? "text-white" : "text-ink"
            }`}
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors xl:text-base ${
                  useLightNav
                    ? "text-white/80 hover:text-white"
                    : "text-ink-muted hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#abstracts"
              className={`rounded-sm px-4 py-2 text-sm font-semibold transition-all active:scale-[0.98] xl:px-5 xl:py-2.5 xl:text-base ${
                useLightNav
                  ? "bg-[#8fd4a8] text-[#0c0f0d] hover:bg-white"
                  : "bg-accent text-white hover:bg-accent-hover"
              }`}
            >
              Submit Abstract
            </a>
          </nav>

          <button
            type="button"
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border p-2.5 transition-colors lg:hidden ${
              useLightNav ? "border-white/30 text-white bg-white/10 hover:bg-white/20" : "border-border text-ink bg-paper hover:bg-paper-muted"
            }`}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>

        {open && (
          <div
            className={`border-t px-4 py-6 shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto touch-scroll sm:px-6 lg:hidden ${
              useLightNav ? "border-white/10 bg-[#0c0f0d]/95 backdrop-blur-xl" : "border-border bg-paper"
            }`}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-[44px] items-center rounded-sm px-3 py-2.5 text-base font-medium transition-colors ${
                    useLightNav
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-ink-muted hover:bg-paper-muted hover:text-accent"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#abstracts"
                className={`mt-4 flex min-h-[48px] items-center justify-center rounded-sm px-4 py-3 text-center text-base font-semibold transition-transform active:scale-[0.98] ${
                  useLightNav ? "bg-[#8fd4a8] text-[#0c0f0d]" : "bg-accent text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                Submit Abstract
              </a>
            </nav>
          </div>
        )}
      </header>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
