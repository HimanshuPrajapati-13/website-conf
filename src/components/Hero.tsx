
import { ArrowRight, CalendarBlank, MapPin } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative z-10 min-h-[100dvh]">
      <div className="container-wide px-5 pb-20 pt-24 md:px-8 md:pb-24 md:pt-28 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                <CalendarBlank size={16} weight="bold" />
                {site.dates}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                <MapPin size={16} weight="bold" />
                Ajmer, Rajasthan
              </span>
            </div>

            <p className="mt-6 font-serif text-lg italic text-white/80 md:text-xl">
              International Conference on
            </p>

            <h1 className="mt-2 font-serif text-[2.75rem] leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
              Sustainable
              <br />
              Environmental{" "}
              <span className="text-[#8fd4a8]">Solutions</span>
            </h1>

            <div className="mt-5 max-w-2xl border-l-4 border-[#8fd4a8] pl-6">
              <p className="text-xl leading-relaxed text-white/95 md:text-2xl">
                Integrating modern science and indigenous knowledge systems
              </p>
              <p className="mt-3 text-lg text-white/75">{site.tagline}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#abstracts"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#8fd4a8] px-7 py-4 text-lg font-semibold text-[#0c0f0d] transition-all hover:bg-white active:scale-[0.98]"
              >
                Submit Abstract
                <ArrowRight
                  size={20}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#registration"
                className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/10 px-7 py-4 text-lg font-semibold text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/20 active:scale-[0.98]"
              >
                Register Now
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:max-w-3xl">
              {site.organizers.map((org, index) => (
                <div
                  key={org}
                  className="rounded-sm border border-white/15 bg-white/10 p-5 backdrop-blur-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    {index === 0 ? "Jointly organized by" : "In collaboration with"}
                  </p>
                  <p className="mt-2 font-serif text-lg leading-snug text-white">{org}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
