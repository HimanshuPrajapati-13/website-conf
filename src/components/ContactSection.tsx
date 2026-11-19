import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type ContactSectionProps = {
  theme?: SectionTheme;
};

export function ContactSection({ theme = "light" }: ContactSectionProps) {
  return (
    <section id="contact" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Contact"
          description="Reach the organizing committee for abstract submission, registration, and general conference inquiries."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className={tc.panelMuted(theme)}>
            <EnvelopeSimple size={28} weight="duotone" className={tc.icon(theme)} />
            <h3 className={`mt-4 ${tc.h4(theme)}`}>Email</h3>
            <div className="mt-3 space-y-2 text-base">
              <a href={`mailto:${site.email}`} className={`block break-all ${tc.link(theme)}`}>
                {site.email}
              </a>
              <a href={`mailto:${site.secretaryEmail}`} className={`block break-all ${tc.linkMuted(theme)}`}>
                {site.secretaryEmail}
              </a>
            </div>
          </div>

          <div className={tc.panelMuted(theme)}>
            <Phone size={28} weight="duotone" className={tc.icon(theme)} />
            <h3 className={`mt-4 ${tc.h4(theme)}`}>Phone / WhatsApp</h3>
            <div className={`mt-3 space-y-2 ${tc.body(theme)}`}>
              {site.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`} className={`block ${tc.linkMuted(theme)}`}>
                  +91 {phone}
                </a>
              ))}
            </div>
          </div>

          <div className={tc.panelMuted(theme)}>
            <MapPin size={28} weight="duotone" className={tc.icon(theme)} />
            <h3 className={`mt-4 ${tc.h4(theme)}`}>Conference Secretariat</h3>
            <address className={`mt-3 space-y-1 not-italic ${tc.body(theme)}`}>
              <p>School of Earth Sciences</p>
              <p>Central University of Rajasthan</p>
              <p>NH-8, Bandar Sindri, Ajmer</p>
              <p>Rajasthan 305817, India</p>
            </address>
          </div>
        </div>

        <div className={`mt-10 ${tc.panel(theme)}`}>
          <h3 className={tc.h3(theme)}>Organizing Secretary</h3>
          <div className={tc.body(theme)}>
            <p className={`font-semibold ${theme === "overlay" ? "text-white" : "text-ink"}`}>
              Dr. Pramod N. Kamble
            </p>
            <p>Head and Associate Professor</p>
            <p>Department of Environmental Science</p>
            <p>Central University of Rajasthan, Ajmer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
