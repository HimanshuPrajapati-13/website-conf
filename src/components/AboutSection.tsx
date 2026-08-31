import { SectionHeader } from "@/components/SectionHeader";
import { focusAreas, pillars } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-pad border-b border-border bg-paper">
      <div className="container-wide">
        <SectionHeader
          title="About the Conference"
          description="SES-IKS 2026 brings together scientists, academicians, policymakers, practitioners, and students to explore the synergy between traditional wisdom and contemporary scientific innovation."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Environmental sustainability is one of the most pressing global challenges of our
              time. While modern science and technology have significantly advanced our
              understanding of environmental processes, sustainable solutions require
              integrating scientific innovation with traditional and indigenous knowledge
              systems.
            </p>
            <p>
              This region possesses a rich heritage of environmental stewardship embedded
              within Indigenous Knowledge Systems, where nature has traditionally been regarded
              as an integral part of human life and cultural practice.
            </p>
            <p>
              Practices such as rainwater harvesting, sacred groves, community forest
              management, and sustainable agriculture have historically supported ecological
              balance, resource conservation, and resilient living. Today, climate change,
              water scarcity, biodiversity loss, and emerging pollutants demand interdisciplinary
              solutions that bridge knowledge systems.
            </p>
          </div>

          <aside className="rounded-sm border border-border bg-paper-muted p-6 md:p-8">
            <h3 className="font-serif text-2xl text-ink">Conference focus areas</h3>
            <ul className="mt-5 space-y-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="border-b border-border pb-3 text-base font-medium text-ink last:border-b-0 last:pb-0"
                >
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <h3 className="font-serif text-3xl text-ink md:text-4xl">
            Integration for a Sustainable Future
          </h3>
          <p className="prose-width mt-4 text-lg text-ink-muted">
            The conference is organized around four interconnected pillars that shape
            actionable environmental solutions.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-sm border border-border bg-paper p-6 md:p-8"
              >
                <h4 className="font-serif text-xl text-ink md:text-2xl">{pillar.title}</h4>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
