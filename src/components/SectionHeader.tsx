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
    <div id={id} className="mb-12 scroll-mt-24 md:mb-16">
      <h2
        className={`font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl ${
          theme === "overlay" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`prose-width mt-5 text-xl leading-relaxed ${
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
