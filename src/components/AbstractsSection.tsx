import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "@/components/SectionHeader";
import { abstractGuidelines, site } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type AbstractsSectionProps = {
  theme?: SectionTheme;
};

export function AbstractsSection({ theme = "light" }: AbstractsSectionProps) {
  return (
    <section id="abstracts" className={tc.sectionMuted(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Call for Abstracts"
          description="Researchers, academicians, practitioners, and students are invited to submit original research abstracts aligned with the conference themes."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className={tc.h3(theme)}>Presentation formats</h3>
              <ul className={`mt-4 space-y-2 ${tc.bodyLg(theme)}`}>
                <li>Oral presentations</li>
                <li>Poster presentations</li>
              </ul>
              <p className={`mt-4 ${tc.body(theme)}`}>
                High-quality papers may be considered for peer-reviewed publications.
              </p>
            </div>

            <div>
              <h3 className={tc.h3(theme)}>Formatting requirements</h3>
              <ul className={`mt-4 space-y-2 ${tc.body(theme)}`}>
                {abstractGuidelines.formatting.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={tc.h3(theme)}>Content requirements</h3>
              <p className={`mt-4 ${tc.body(theme)}`}>
                Required sequence: {abstractGuidelines.sequence}
              </p>
              <p className={`mt-2 ${tc.body(theme)}`}>{abstractGuidelines.titleLimit}</p>
              <ul className={`mt-4 space-y-2 ${tc.body(theme)}`}>
                {abstractGuidelines.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className={`mt-4 space-y-2 ${tc.body(theme)}`}>
                {abstractGuidelines.restrictions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={`h-fit ${tc.panel(theme)}`}>
            <h3 className={tc.h3(theme)}>Submit your abstract</h3>
            <p className={`mt-4 leading-relaxed ${tc.body(theme)}`}>
              Submit your abstract along with the registration form via email before the
              submission deadline.
            </p>

            <a
              href={`mailto:${site.email}?subject=SES-IKS%202026%20Abstract%20Submission`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-accent-hover active:scale-[0.98]"
            >
              <EnvelopeSimple size={22} weight="bold" />
              Email Abstract
            </a>

            <div className={`mt-6 space-y-2 border-t pt-6 text-base ${tc.border(theme)}`}>
              <p className={tc.title(theme)}>Submission email</p>
              <a href={`mailto:${site.email}`} className={`break-all ${tc.link(theme)}`}>
                {site.email}
              </a>
            </div>

            <p className={`mt-4 ${tc.subtle(theme)}`}>
              The conference poster also references an online submission portal. Details will be
              updated on this website as they become available.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
