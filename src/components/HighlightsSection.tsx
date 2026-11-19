import { SectionHeader } from "@/components/SectionHeader";
import { highlights, whyAttend } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type HighlightsSectionProps = {
  theme?: SectionTheme;
};

export function HighlightsSection({ theme = "light" }: HighlightsSectionProps) {
  return (
    <section className={tc.sectionMuted(theme)}>
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader theme={theme} title="Why Attend" />
            <ul className="space-y-4">
              {whyAttend.map((item) => (
                <li key={item} className={`pl-5 leading-relaxed ${tc.borderAccent(theme)} ${tc.bodyLg(theme)}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader theme={theme} title="Conference Highlights" />
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className={`leading-relaxed ${tc.cardFlat(theme)} ${tc.body(theme)}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
