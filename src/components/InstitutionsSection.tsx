import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { nearbyPlaces } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type InstitutionsSectionProps = {
  theme?: SectionTheme;
};

export function InstitutionsSection({ theme = "light" }: InstitutionsSectionProps) {
  return (
    <section className={tc.sectionMuted(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Host Institutions"
          description="SES-IKS 2026 is jointly organized by Central University of Rajasthan and Tribhuvan University."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="h-full [perspective:1200px]">
            <article className="group relative h-full min-h-[30rem] [transform-style:preserve-3d] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:[transform:rotateY(180deg)]">
              <div
                className={`absolute inset-0 rounded-sm border ${tc.border(theme)} ${tc.panel(theme)} [backface-visibility:hidden]`}
              >
                <h3 className={tc.h3Lg(theme)}>Central University of Rajasthan</h3>
                <div className={`mt-6 space-y-4 leading-relaxed ${tc.body(theme)}`}>
                  <p>
                    Established by an Act of Parliament in March 2009, Central University of
                    Rajasthan is located in Ajmer District, Rajasthan. The university operates
                    through its own 518-acre campus with modern amenities.
                  </p>
                  <p>
                    Fully funded by the Ministry of Education through the University Grants
                    Commission, the university has been accredited with an A++ grade by NAAC in
                    2023 and holds Category I University status.
                  </p>
                  <p>
                    The School of Earth Sciences provides interdisciplinary knowledge in
                    environmental and atmospheric sciences, training scholars through research,
                    education, and outreach programs in collaboration with national and
                    international organizations.
                  </p>
                </div>
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center rounded-sm border bg-black/40 backdrop-blur-sm ${tc.border(theme)} [backface-visibility:hidden] [transform:rotateY(180deg)]`}
              >
                <img
                  src="https://images.shiksha.com/mediadata/images/1652078777phphPAHlJ.jpeg"
                  alt="Central University of Rajasthan campus"
                  className="w-11/12 rounded-xl object-cover shadow-lg"
                />
              </div>
            </article>
          </div>

          <div className="h-full [perspective:1200px]">
            <article className="group relative h-full min-h-[30rem] [transform-style:preserve-3d] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:[transform:rotateY(180deg)]">
              <div
                className={`absolute inset-0 rounded-sm border ${tc.border(theme)} ${tc.panel(theme)} [backface-visibility:hidden]`}
              >
                <h3 className={tc.h3Lg(theme)}>Tribhuvan University</h3>
                <div className={`mt-6 space-y-4 leading-relaxed ${tc.body(theme)}`}>
                  <p>
                    Tribhuvan University contributes to SES-IKS 2026 through its School of Earth
                    Sciences and international relations programs, supporting interdisciplinary
                    research in environmental and atmospheric sciences.
                  </p>
                  <p>
                    The university emphasizes training in earth sciences to serve local and global
                    communities, with departments offering undergraduate, postgraduate, and
                    doctoral programs across environmental and atmospheric science.
                  </p>
                  <p>
                    Collaboration between CURaj and Tribhuvan University reflects the conference
                    commitment to cross-border knowledge exchange on sustainable environmental
                    solutions.
                  </p>
                </div>
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center rounded-sm border bg-black/40 backdrop-blur-sm ${tc.border(theme)} [backface-visibility:hidden] [transform:rotateY(180deg)]`}
              >
                <img
                  src="/images/tu-campus.jpeg"
                  alt="Tribhuvan University campus"
                  className="w-11/12 rounded-xl object-cover shadow-lg"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className={`relative aspect-[16/10] overflow-hidden rounded-sm border ${tc.border(theme)}`}>
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
              alt="Mountain landscape near Ajmer representing Himalayan and regional ecosystems"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          <div className={tc.panel(theme)}>
            <h3 className={tc.h3(theme)}>Nearby places</h3>
            <p className={`mt-3 ${tc.body(theme)}`}>
              Delegates visiting Ajmer may explore these nearby destinations.
            </p>
            <ul className="mt-5 space-y-3">
              {nearbyPlaces.map((place) => (
                <li
                  key={place}
                  className={`border-b pb-3 text-lg font-medium last:border-b-0 last:pb-0 ${tc.border(theme)} ${
                    theme === "overlay" ? "text-white" : "text-ink"
                  }`}
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

