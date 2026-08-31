import type { ReactNode } from "react";
import type { SectionTheme } from "@/lib/section-theme";

type SectionHeaderProps = {
  title: string;
  description?: string;
  id?: string;
  theme?: SectionTheme;
  children?: ReactNode;
};

export function SectionHeader({
  title,
  description,
  id,
  theme = "light",
  children,
}: SectionHeaderProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-20 sm:mb-12 md:mb-16">
      <h2
        className={`font-serif text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl ${
          theme === "overlay" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`prose-width mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg md:mt-5 md:text-xl ${
            theme === "overlay" ? "text-white/80" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
