import { SectionHeader } from "@/components/SectionHeader";
import { importantDates, posterDates } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type DatesSectionProps = {
  theme?: SectionTheme;
};

export function DatesSection({ theme = "light" }: DatesSectionProps) {
  return (
    <section id="dates" className={tc.section(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Important Dates"
          description="Key milestones for abstract submission, acceptance notification, registration, and the conference program."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className={tc.panelMuted(theme)}>
            <h3 className={tc.h3(theme)}>Conference schedule</h3>
            <dl className="mt-6 space-y-5">
              {importantDates.map((item) => (
                <div
                  key={item.event}
                  className={`flex flex-col gap-1 border-b pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between ${tc.border(theme)}`}
                >
                  <dt className={tc.title(theme)}>{item.event}</dt>
                  <dd className={tc.accent(theme)}>{item.date}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={tc.panel(theme)}>
            <h3 className={tc.h3(theme)}>Poster reference dates</h3>
            <p className={`mt-3 ${tc.body(theme)}`}>
              The conference poster also lists the following timeline. Please confirm the
              applicable deadline with the organizing committee before submission.
            </p>
            <dl className="mt-6 space-y-5">
              {posterDates.map((item) => (
                <div
                  key={item.event}
                  className={`flex flex-col gap-1 border-b pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between ${tc.border(theme)}`}
                >
                  <dt className={tc.title(theme)}>{item.event}</dt>
                  <dd className={tc.bodyLg(theme)}>{item.date}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
