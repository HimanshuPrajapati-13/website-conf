"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { themes } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type ThemesSectionProps = {
  theme?: SectionTheme;
};

export function ThemesSection({ theme = "light" }: ThemesSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="themes" className={tc.sectionMuted(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Conference Themes"
          description="Six thematic areas covering climate, water, ecosystems, agriculture, resilient transitions, and a special session on Himalayan ecosystems."
        />

        <div className="space-y-3">
          {themes.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.number} className={tc.accordion(theme)}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="min-w-0">
                    <p className={tc.accentLabel(theme)}>
                      Theme {item.number}
                      {item.special ? " (Special Session)" : ""}
                    </p>
                    <h3 className={tc.accordionTitle(theme)}>{item.title}</h3>
                  </div>
                  <CaretDown
                    size={22}
                    weight="bold"
                    className={`mt-1 shrink-0 transition-transform duration-200 ${tc.accordionIcon(theme)} ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className={`border-t px-5 pb-6 pt-2 md:px-6 ${tc.border(theme)}`}>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <p className={tc.label(theme)}>Poster topics</p>
                        <ul className={`mt-3 space-y-2 ${tc.body(theme)}`}>
                          {item.topics.map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      {item.details && item.details.length > 0 && (
                        <div>
                          <p className={tc.label(theme)}>Detailed topics</p>
                          <ul className={`mt-3 space-y-2 ${tc.body(theme)}`}>
                            {item.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
