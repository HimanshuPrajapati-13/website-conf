"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { navLinks } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ease-out ${
          isScrolled
            ? "top-3 px-3 sm:top-5 sm:px-6"
            : "top-4 px-3 sm:top-6 sm:px-8 xl:px-12"
        }`}
      >
        <div
          className={`relative flex w-full items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? "max-w-5xl rounded-full border border-white/10 bg-[#0d1210]/90 px-3.5 py-2.5 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.8),0_0_20px_rgba(20,90,50,0.25)] backdrop-blur-xl sm:px-6 sm:py-3"
              : "max-w-[92rem] rounded-full border border-[#8fd4a8]/35 bg-[#0b130e]/85 px-5 py-3 shadow-[0_16px_50px_-10px_rgba(0,0,0,0.7),0_0_35px_rgba(143,212,168,0.22)] backdrop-blur-2xl sm:px-8 sm:py-3.5"
          }`}
        >
          {/* Logo brand left */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border p-1 transition-colors duration-500 ${
                isScrolled
                  ? "border-emerald-500/30 bg-emerald-950/40"
                  : "border-[#8fd4a8]/50 bg-emerald-950/50 shadow-[0_0_12px_rgba(143,212,168,0.3)]"
              }`}
            >
              <Image
                src="/images/cur-logo.gif"
                alt="CURAJ Logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-sm font-black tracking-wider text-white uppercase sm:text-base">
                SES-IKS
              </span>
              <span
                className={`text-[10px] font-bold tracking-[0.2em] uppercase sm:text-xs transition-colors duration-500 ${
                  isScrolled ? "text-emerald-400" : "text-[#8fd4a8]"
                }`}
              >
                2027 • CONF
              </span>
            </div>
          </Link>

          {/* Center navigation links */}
          <nav
            className="hidden items-center gap-1 md:flex lg:gap-2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;

              return isScrolled ? (
                // Scrolled Pill Style (Active pill bubble with background)
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 lg:px-4 lg:text-[13px] ${
                    isActive
                      ? "bg-white/15 text-emerald-400 shadow-inner"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                // Top Screen Style (Clean sleek uppercase text with emerald/mint active highlight)
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-black tracking-widest uppercase transition-colors duration-300 lg:px-4 lg:text-[13px] ${
                    isActive
                      ? "text-[#8fd4a8] drop-shadow-[0_0_10px_rgba(143,212,168,0.5)]"
                      : "text-zinc-200 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right action button */}
          <div className="hidden md:flex md:items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsza1YyN5lN5OecahYIc0TEelgiTchaJPaqA3_fiTMxT4gGw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0c0f0d] transition-all duration-500 active:scale-95 ${
                isScrolled
                  ? "bg-emerald-500 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/40"
                  : "bg-[#8fd4a8] shadow-md shadow-[#8fd4a8]/30 hover:bg-white hover:shadow-[#8fd4a8]/50"
              }`}
            >
              Submit
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>

        {/* Mobile dropdown sheet */}
        {open && (
          <div className="absolute inset-x-3 top-16 z-50 overflow-hidden rounded-3xl border border-white/15 bg-[#0d1210]/95 p-5 shadow-2xl backdrop-blur-2xl sm:inset-x-6 md:hidden">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide uppercase text-zinc-200 transition-colors hover:bg-white/10 hover:text-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-white/30">→</span>
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScsza1YyN5lN5OecahYIc0TEelgiTchaJPaqA3_fiTMxT4gGw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center rounded-xl bg-emerald-500 py-3 text-center text-xs font-bold tracking-widest uppercase text-black transition-colors hover:bg-emerald-400 active:scale-98"
                onClick={() => setOpen(false)}
              >
                Submit Abstract
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
