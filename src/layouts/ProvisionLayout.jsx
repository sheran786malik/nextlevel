import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ProvisionLayout({ data, onReferralClick }) {
  return (
    <main className="min-h-screen bg-[var(--brand-light)] font-sans text-[var(--brand-primary)]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[var(--brand-primary)] px-5 pt-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-secondary)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,var(--brand-muted)_0%,transparent_45%),linear-gradient(180deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            {data.label}
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {data.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/70 sm:text-lg">
            {data.heroText}
          </p>

          {onReferralClick && (
            <button
              onClick={onReferralClick}
              className="mt-10 rounded-xl bg-[var(--brand-accent)] px-9 py-4 text-sm font-semibold text-[var(--brand-primary)] shadow-xl transition hover:-translate-y-1"
            >
              Make a Referral
            </button>
          )}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <h2 className="font-serif text-5xl font-light">
            {data.overviewTitle}
          </h2>

          <div className="space-y-5 text-[var(--brand-primary)]/70">
            {data.overviewParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — services-style cards */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl font-light">
            What this includes
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.features.map((f, i) => (
              <div
                key={f.title}
                className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(155deg, var(--brand-primary) 0%, color-mix(in srgb, var(--brand-primary) 70%, var(--brand-accent-2)) 55%, var(--brand-secondary) 130%)",
                }}
              >
                {/* Decorative rings, echoing the Editorial section */}
                <div
                  className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ borderColor: "color-mix(in srgb, var(--brand-secondary) 15%, transparent)" }}
                />
                <div
                  className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border"
                  style={{ borderColor: "color-mix(in srgb, var(--brand-secondary) 8%, transparent)" }}
                />

                {/* Gradient — sits at the base so text stays legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Index */}
                <span className="absolute left-6 top-5 font-serif text-sm tracking-[0.25em] text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="absolute right-6 top-5 text-3xl">{f.icon}</div>

                {/* Title + reveal-on-hover detail */}
                <div className="relative mt-auto p-6">
                  <h3 className="font-serif text-2xl font-normal leading-tight text-white">
                    {f.title}
                  </h3>

                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm font-light leading-7 text-white/85">
                        {f.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-3 text-sm font-medium text-white">
                    <span className="h-px w-6 bg-white/60 transition-all duration-300 group-hover:w-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] px-5 py-24 text-center text-white">
        <h2 className="font-serif text-5xl font-light">
          Discuss a referral
        </h2>

        <button
          onClick={onReferralClick}
          className="mt-10 rounded-xl bg-[var(--brand-accent)] px-9 py-4 text-sm font-semibold text-[var(--brand-primary)]"
        >
          Make a Referral
        </button>
      </section>

      <Footer />
    </main>
  );
}