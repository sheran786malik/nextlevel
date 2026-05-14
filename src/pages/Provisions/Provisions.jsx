import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ProvisionPage({ provision }) {
  return (
    <main className="min-h-screen page-bg font-sans">
      <Navbar />

      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-5 pt-28 text-center text-white dark-hero-bg sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(#9ECFB012_1px,transparent_1px),linear-gradient(90deg,#9ECFB012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#5BAA7A]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#E4BC72]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[var(--gold-light)]">
            {provision.eyebrow}
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {provision.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/60 sm:text-lg">
            {provision.intro}
          </p>

          <a
            href="#contact"
            className="gold-gradient mt-10 inline-block rounded-xl px-9 py-4 text-sm font-semibold tracking-wide text-[var(--ink)] shadow-xl transition hover:-translate-y-1"
          >
            Make a Referral
          </a>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
                Overview
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--forest)] sm:text-6xl">
              {provision.heading}
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[var(--text-muted)] sm:text-base">
            {provision.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl font-light text-[var(--forest)] sm:text-6xl">
            What this includes
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {provision.features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-[var(--cream)] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#163826]/10"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[var(--mist)]/70" />
                <p className="absolute right-7 top-6 font-serif text-sm tracking-[0.25em] text-gray-400">
                  0{index + 1}
                </p>

                <div className="relative z-10">
                  <div className="mb-6 text-4xl">{feature.icon}</div>
                  <h3 className="font-serif text-3xl font-normal text-[var(--forest)]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-[var(--text-muted)]">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--ink)] px-5 py-24 text-center text-white sm:px-8 lg:px-10">
        <h2 className="font-serif text-5xl font-light leading-tight sm:text-6xl">
          Discuss a referral
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-8 text-white/50">
          Contact the team to discuss whether this provision is suitable.
        </p>
        <a
          href="mailto:mujtabahrathor@hotmail.co.uk"
          className="gold-gradient mt-10 inline-block rounded-xl px-9 py-4 text-sm font-semibold tracking-wide text-[var(--ink)]"
        >
          Email Us
        </a>
      </section>

      <Footer />
    </main>
  );
}