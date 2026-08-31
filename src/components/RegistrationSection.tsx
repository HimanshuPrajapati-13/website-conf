import { SectionHeader } from "@/components/SectionHeader";
import { paymentDetails, registrationFees, registrationIncludes } from "@/lib/data";
import type { SectionTheme } from "@/lib/section-theme";
import { tc } from "@/lib/section-theme";

type RegistrationSectionProps = {
  theme?: SectionTheme;
};

export function RegistrationSection({ theme = "light" }: RegistrationSectionProps) {
  return (
    <section id="registration" className={tc.section(theme)}>
      <div className="container-wide">
        <SectionHeader
          theme={theme}
          title="Registration"
          description="Complete registration before the deadline to confirm participation. Fees are listed by participant category."
        />

        <div className={`mb-12 ${tc.panelMuted(theme)}`}>
          <h3 className={tc.h3(theme)}>Registration includes</h3>
          <ul className={`mt-5 grid gap-3 sm:grid-cols-2 ${tc.body(theme)}`}>
            {registrationIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={tc.tableWrap(theme)}>
          <table className="w-full min-w-[720px] text-left text-base">
            <thead className={tc.tableHead(theme)}>
              <tr>
                <th className={tc.tableTh(theme)}>Category</th>
                <th className={tc.tableTh(theme)}>Fee</th>
                <th className={tc.tableTh(theme)}>After due date</th>
                <th className={tc.tableTh(theme)}>On-spot</th>
              </tr>
            </thead>
            <tbody>
              {registrationFees.map((row) => {
                const symbol = row.currency === "INR" ? "Rs." : "$";

                return (
                  <tr key={row.category} className={`border-t ${tc.border(theme)}`}>
                    <td className={`px-4 py-4 md:px-6 ${tc.body(theme)}`}>{row.category}</td>
                    <td className={`px-4 py-4 font-semibold md:px-6 ${theme === "overlay" ? "text-white" : "text-ink"}`}>
                      {symbol} {row.fee}
                    </td>
                    <td className={`px-4 py-4 md:px-6 ${tc.body(theme)}`}>
                      {symbol} {row.afterDue}
                    </td>
                    <td className={`px-4 py-4 md:px-6 ${tc.body(theme)}`}>
                      {symbol} {row.onSpot}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className={tc.panel(theme)}>
            <h3 className={tc.h3(theme)}>Participant categories</h3>
            <ul className={`mt-4 space-y-2 ${tc.body(theme)}`}>
              <li>Faculty / Scientist</li>
              <li>Research Scholar / Student</li>
              <li>Industry / Practitioner</li>
            </ul>
          </div>

          <div className={tc.panelMuted(theme)}>
            <h3 className={tc.h3(theme)}>Payment details</h3>
            <dl className="mt-4 space-y-3 text-base">
              <div>
                <dt className={tc.title(theme)}>Bank account</dt>
                <dd className={tc.body(theme)}>{paymentDetails.account}</dd>
              </div>
              <div>
                <dt className={tc.title(theme)}>Bank</dt>
                <dd className={tc.body(theme)}>{paymentDetails.bank}</dd>
              </div>
              <div>
                <dt className={tc.title(theme)}>Branch</dt>
                <dd className={tc.body(theme)}>{paymentDetails.branch}</dd>
              </div>
              <div>
                <dt className={tc.title(theme)}>IFSC</dt>
                <dd className={tc.body(theme)}>{paymentDetails.ifsc}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
