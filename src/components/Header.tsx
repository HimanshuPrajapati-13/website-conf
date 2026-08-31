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

  const useLightNav = !onLightSurface && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        useLightNav
          ? "border-b border-white/10 bg-[#0c0f0d]/20 backdrop-blur-md"
          : "border-b border-border bg-paper/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8 lg:px-12">
        <Link
          href="/"
          className={`font-serif text-xl font-semibold tracking-tight transition-colors md:text-2xl ${
            useLightNav ? "text-white" : "text-ink"
          }`}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
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
            className={`rounded-sm px-5 py-2.5 text-base font-semibold transition-colors active:scale-[0.98] ${
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
          className={`inline-flex items-center justify-center rounded-sm border p-2.5 lg:hidden ${
            useLightNav ? "border-white/30 text-white" : "border-border text-ink"
          }`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open && (
        <div
          className={`border-t px-5 py-6 lg:hidden ${
            useLightNav ? "border-white/10 bg-[#0c0f0d]/95" : "border-border bg-paper"
          }`}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-sm px-2 py-3 text-lg font-medium transition-colors ${
                  useLightNav
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-ink-muted hover:bg-paper-muted hover:text-accent"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#abstracts"
              className={`mt-3 rounded-sm px-4 py-3 text-center text-lg font-semibold ${
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
  );
}
