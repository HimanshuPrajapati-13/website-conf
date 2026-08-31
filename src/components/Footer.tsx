import { site } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type FooterProps = {
  theme?: SectionTheme;
};

export function Footer({ theme = "light" }: FooterProps) {
  return (
    <footer className={tc.footer(theme)}>
      <div className="container-wide px-5 py-12 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className={`font-serif text-2xl ${theme === "overlay" ? "text-white" : "text-ink"}`}>
              {site.name}
            </p>
            <p className={`mt-3 leading-relaxed ${tc.body(theme)}`}>{site.fullTitle}</p>
            <p className={`mt-4 ${tc.subtle(theme)}`}>{site.dates}</p>
          </div>

          <div className={`space-y-2 ${tc.body(theme)}`}>
            <p>{site.organizingUnit}</p>
            <p>In collaboration with Tribhuvan University, Nepal</p>
            <a
              href="https://www.curaj.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block ${tc.link(theme)}`}
            >
              www.curaj.ac.in
            </a>
          </div>
        </div>

        <div className={`mt-10 border-t pt-6 ${tc.border(theme)} ${tc.subtle(theme)}`}>
          <p>
            Partnership opportunities are available for academic institutions, international
            organizations, development agencies, and industry stakeholders.
          </p>
          <p className="mt-3">
            Copyright {new Date().getFullYear()} SES-IKS 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
