export type SectionTheme = "light" | "overlay";

const hoverLight =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_14px_40px_-16px_rgba(26,77,46,0.16)]";

const hoverOverlay =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/35 hover:bg-white/15 hover:shadow-[0_14px_40px_-16px_rgba(0,0,0,0.45)]";

const hoverAccordion =
  "transition-all duration-300 ease-out hover:border-accent/30 hover:shadow-[0_10px_32px_-14px_rgba(26,77,46,0.12)]";

const hoverAccordionOverlay =
  "transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/14 hover:shadow-[0_10px_32px_-14px_rgba(0,0,0,0.4)]";

function cardHover(theme: SectionTheme) {
  return theme === "overlay" ? hoverOverlay : hoverLight;
}

function accordionHover(theme: SectionTheme) {
  return theme === "overlay" ? hoverAccordionOverlay : hoverAccordion;
}

export const tc = {
  section: (theme: SectionTheme) =>
    theme === "overlay"
      ? "section-pad border-b border-white/10 bg-transparent"
      : "section-pad border-b border-border bg-paper",
  sectionMuted: (theme: SectionTheme) =>
    theme === "overlay"
      ? "section-pad border-b border-white/10 bg-transparent"
      : "section-pad border-b border-border bg-paper-muted",
  panel: (theme: SectionTheme) =>
    theme === "overlay"
      ? `rounded-sm border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8 ${hoverOverlay}`
      : `rounded-sm border border-border bg-paper p-6 md:p-8 ${hoverLight}`,
  panelMuted: (theme: SectionTheme) =>
    theme === "overlay"
      ? `rounded-sm border border-white/15 bg-black/20 p-6 backdrop-blur-md md:p-8 ${hoverOverlay}`
      : `rounded-sm border border-border bg-paper-muted p-6 md:p-8 ${hoverLight}`,
  card: (theme: SectionTheme) =>
    theme === "overlay"
      ? `rounded-sm border border-white/20 bg-white/10 p-5 backdrop-blur-md md:p-6 ${hoverOverlay}`
      : `rounded-sm border border-border bg-paper p-5 md:p-6 ${hoverLight}`,
  cardFlat: (theme: SectionTheme) =>
    theme === "overlay"
      ? `rounded-sm border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md ${hoverOverlay}`
      : `rounded-sm border border-border bg-paper px-5 py-4 ${hoverLight}`,
  h2Section: (theme: SectionTheme) =>
    theme === "overlay"
      ? "mb-6 font-serif text-2xl text-white md:text-3xl"
      : "mb-6 font-serif text-2xl text-ink md:text-3xl",
  h3: (theme: SectionTheme) =>
    theme === "overlay"
      ? "font-serif text-2xl text-white"
      : "font-serif text-2xl text-ink",
  h3Lg: (theme: SectionTheme) =>
    theme === "overlay"
      ? "font-serif text-2xl text-white md:text-3xl"
      : "font-serif text-2xl text-ink md:text-3xl",
  h4: (theme: SectionTheme) =>
    theme === "overlay"
      ? "font-serif text-xl text-white"
      : "font-serif text-xl text-ink",
  body: (theme: SectionTheme) =>
    theme === "overlay" ? "text-base text-white/80" : "text-base text-ink-muted",
  bodyLg: (theme: SectionTheme) =>
    theme === "overlay" ? "text-lg text-white/85" : "text-lg text-ink-muted",
  title: (theme: SectionTheme) =>
    theme === "overlay" ? "text-base font-medium text-white" : "text-base font-medium text-ink",
  accent: (theme: SectionTheme) =>
    theme === "overlay"
      ? "text-lg font-semibold text-[#8fd4a8]"
      : "text-lg font-semibold text-accent",
  subtle: (theme: SectionTheme) =>
    theme === "overlay" ? "text-sm text-white/60" : "text-sm text-ink-subtle",
  label: (theme: SectionTheme) =>
    theme === "overlay"
      ? "text-sm font-semibold uppercase tracking-wide text-white/55"
      : "text-sm font-semibold uppercase tracking-wide text-ink-subtle",
  accentLabel: (theme: SectionTheme) =>
    theme === "overlay"
      ? "text-sm font-semibold text-[#8fd4a8]"
      : "text-sm font-semibold text-accent",
  border: (theme: SectionTheme) =>
    theme === "overlay" ? "border-white/15" : "border-border",
  link: (theme: SectionTheme) =>
    theme === "overlay" ? "text-[#8fd4a8] hover:underline" : "text-accent hover:underline",
  linkMuted: (theme: SectionTheme) =>
    theme === "overlay"
      ? "text-white/75 hover:text-[#8fd4a8]"
      : "text-ink-muted hover:text-accent",
  icon: (theme: SectionTheme) =>
    theme === "overlay" ? "text-[#8fd4a8]" : "text-accent",
  borderAccent: (theme: SectionTheme) =>
    theme === "overlay" ? "border-l-2 border-[#8fd4a8]" : "border-l-2 border-accent",
  tableWrap: (theme: SectionTheme) =>
    theme === "overlay"
      ? "overflow-x-auto rounded-sm border border-white/20 backdrop-blur-md"
      : "overflow-x-auto rounded-sm border border-border",
  tableHead: (theme: SectionTheme) =>
    theme === "overlay" ? "bg-white/10" : "bg-paper-muted",
  tableTh: (theme: SectionTheme) =>
    theme === "overlay"
      ? "px-4 py-4 font-semibold text-white md:px-6"
      : "px-4 py-4 font-semibold text-ink md:px-6",
  accordion: (theme: SectionTheme) =>
    theme === "overlay"
      ? "overflow-hidden rounded-sm border border-white/20 bg-white/10 backdrop-blur-md"
      : "overflow-hidden rounded-sm border border-border bg-paper",
  accordionTitle: (theme: SectionTheme) =>
    theme === "overlay"
      ? "mt-1 font-serif text-xl text-white md:text-2xl"
      : "mt-1 font-serif text-xl text-ink md:text-2xl",
  accordionIcon: (theme: SectionTheme) =>
    theme === "overlay" ? "text-white/70" : "text-ink-muted",
  footer: (theme: SectionTheme) =>
    theme === "overlay"
      ? "relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-md"
      : "border-t border-border bg-paper-muted",
};
