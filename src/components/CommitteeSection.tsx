import Image from "next/image";
import type { Person } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import {
  advisoryCommittee,
  conveners,
  organizingCommittee,
  organizingSecretaries,
  patrons,
} from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type CommitteeSectionProps = {
  theme?: SectionTheme;
};

function PersonCard({ person, theme }: { person: Person; theme: SectionTheme }) {
  const lines = [
    person.role,
    person.department,
    person.institution,
    person.location,
    person.country,
  ].filter(Boolean);

  return (
    <article className={tc.card(theme)}>
      <h4 className={tc.h4(theme)}>{person.name}</h4>
      <div className={`mt-2 space-y-1 ${tc.body(theme)}`}>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function FeaturePersonCard({ person, theme }: { person: Person; theme: SectionTheme }) {
  const lines = [
    person.role,
    person.department,
    person.institution,
    person.location,
    person.country,
  ].filter(Boolean);

  return (
    <article className={`${tc.card(theme)} flex flex-col gap-6 md:p-8`}>
      <div className="mx-auto">
        <Image
          src={person.photo!}
          alt={person.name}
          width={300}
          height={400}
          className="h-72 w-full max-w-xs rounded-sm object-cover md:h-80"
        />
      </div>
      <div className="text-center">
        <p className={tc.label(theme)}>Patron</p>
        <h4 className={`${tc.h4(theme)} mt-1 text-2xl md:text-3xl`}>{person.name}</h4>
        <div className={`mt-3 space-y-1 ${tc.body(theme)}`}>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

function PersonGrid({ people, theme }: { people: Person[]; theme: SectionTheme }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {people.map((person) =>
        person.photo ? (
          <FeaturePersonCard key={person.name} person={person} theme={theme} />
        ) : (
          <PersonCard key={person.name} person={person} theme={theme} />
        ),
      )}
    </div>
  );
}

export function CommitteeSection({ theme = "light" }: CommitteeSectionProps) {
  return (
    <section id="committee" className={tc.section(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Organizing Committee"
          description="Leadership and committee members guiding SES-IKS 2026."
        />

        <div className="space-y-10 sm:space-y-14">
          <div>
            <h3 className={tc.h2Section(theme)}>Patrons</h3>
            <PersonGrid people={patrons} theme={theme} />
          </div>

          <div>
            <h3 className={tc.h2Section(theme)}>Conveners</h3>
            <PersonGrid people={conveners} theme={theme} />
          </div>

          <div>
            <h3 className={tc.h2Section(theme)}>Organizing Secretaries</h3>
            <PersonGrid people={organizingSecretaries} theme={theme} />
          </div>

          <div>
            <h3 className={tc.h2Section(theme)}>Organizing Committee</h3>
            <PersonGrid people={organizingCommittee} theme={theme} />
          </div>

          <div>
            <h3 className={tc.h2Section(theme)}>Advisory Committee</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {advisoryCommittee.map((member) => (
                <p key={member} className={`px-4 py-3 rounded-sm ${tc.panelMuted(theme)} ${tc.body(theme)} text-sm sm:text-base`}>
                  {member}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
