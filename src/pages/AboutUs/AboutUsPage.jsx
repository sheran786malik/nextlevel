import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const about = {
  title: "About Us",

  introduction:
    "Next Level is a specialist educational and support organisation dedicated to helping children and young people who face barriers to mainstream education. We work alongside local authorities, schools, families and professionals to provide safe, structured and child-centred support that creates meaningful long-term outcomes.",

  values: [
    "Child-centred practice",
    "Trauma-informed support",
    "Consistency and stability",
    "Safeguarding first",
    "Positive long-term outcomes",
  ],

  mission:
    "Our mission is to provide compassionate, structured and personalised support that helps young people rebuild confidence, engage positively with education and move towards brighter futures.",

  aims: [
    "Provide safe and nurturing support environments",
    "Help young people re-engage with education",
    "Promote emotional wellbeing and stability",
    "Support independence and personal growth",
    "Work collaboratively with families and professionals",
  ],

  team: [
    {
      name: "Mujtaba Rathor",
      role: "Director",
      description:
        "Leading Next Level with a strong focus on safeguarding, child-centred practice and positive outcomes for vulnerable young people.",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-surface)] font-sans text-[var(--brand-primary)]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--brand-primary)] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-secondary)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,var(--brand-muted)_0%,transparent_45%),linear-gradient(180deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            About Next Level
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            {about.title}
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-[var(--brand-accent)]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
              Introduction
            </span>
          </div>

          <p className="text-lg font-light leading-9 text-[var(--brand-primary)]/70">
            {about.introduction}
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Values
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[var(--brand-primary)] sm:text-6xl">
              What guides our work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {about.values.map((value) => (
              <div
                key={value}
                className="rounded-3xl bg-[var(--brand-surface)] p-8 text-center shadow-sm"
              >
                <p className="font-medium text-[var(--brand-primary)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[var(--brand-accent)]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
              Our Mission
            </span>
          </div>

          <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
            Supporting young people towards brighter futures.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg font-light leading-9 text-[var(--brand-primary)]/70">
            {about.mission}
          </p>
        </div>
      </section>

      {/* AIMS — services-style cards */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Our Aims
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[var(--brand-primary)] sm:text-6xl">
              What we strive to achieve
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {about.aims.map((aim, index) => (
              <div
                key={aim}
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
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Aim text */}
                <div className="relative mt-auto p-6">
                  <p className="font-serif text-xl font-normal leading-snug text-white transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    {aim}
                  </p>

                  <div className="mt-4 h-px w-6 bg-white/60 transition-all duration-300 group-hover:w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Our Team
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[var(--brand-primary)] sm:text-6xl">
              Meet the team
            </h2>
          </div>

          <div className="mx-auto max-w-md rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--brand-primary)] font-serif text-3xl text-[var(--brand-accent)]">
              M
            </div>

            <h3 className="mt-6 font-serif text-3xl text-[var(--brand-primary)]">
              {about.team[0].name}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--brand-accent)]">
              {about.team[0].role}
            </p>

            <p className="mt-6 text-[15px] font-light leading-8 text-[var(--brand-primary)]/70">
              {about.team[0].description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}