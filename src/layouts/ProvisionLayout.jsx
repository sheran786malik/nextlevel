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

      {/* FEATURES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl font-light">
            What this includes
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.features.map((f, i) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-3xl bg-[var(--brand-light)] p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[var(--brand-muted)]/30" />

                <p className="absolute right-7 top-6 font-serif text-sm tracking-[0.25em] text-black/20">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <div className="relative z-10">
                  <div className="mb-6 text-4xl">{f.icon}</div>
                  <h3 className="font-serif text-3xl">{f.title}</h3>
                  <p className="mt-4 text-sm font-light leading-7 text-[var(--brand-primary)]/70">
                    {f.text}
                  </p>
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