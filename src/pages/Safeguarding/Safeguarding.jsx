import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const safeguardingPrinciples = [
  {
    title: "Prioritising Young People",
    text: "The welfare, safety and wellbeing of every young person is placed at the centre of all decisions.",
  },
  {
    title: "Vigilance and Awareness",
    text: "We remain alert to concerns, risks, changes in behaviour and anything that may indicate a young person needs support.",
  },
  {
    title: "Safer Recruitment",
    text: "Staff and adults working with young people are expected to follow appropriate safer recruitment and suitability checks.",
  },
  {
    title: "Clear Policies and Procedures",
    text: "Safeguarding concerns are handled through clear reporting routes, escalation processes and professional standards.",
  },
  {
    title: "Open Communication",
    text: "We encourage young people, families, staff and professionals to raise concerns early and openly.",
  },
  {
    title: "Multi-agency Working",
    text: "We work with schools, local authorities, social care and relevant professionals to keep young people safe.",
  },
  {
    title: "Empowerment",
    text: "Young people are supported to understand their rights, boundaries and how to seek help when needed.",
  },
  {
    title: "Continuous Improvement",
    text: "We regularly review safeguarding practice to strengthen safety, accountability and quality of care.",
  },
];

export default function SafeguardingPage() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <main className="min-h-screen bg-[var(--brand-surface)] font-sans text-[var(--brand-primary)]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--brand-primary)] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-secondary)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,var(--brand-muted)_0%,transparent_45%),linear-gradient(180deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            Safety First
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Safeguarding
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-8 text-white/70 sm:text-lg">
            Safeguarding is at the heart of everything we do. We are committed
            to creating safe, nurturing and supportive environments where young
            people feel protected, respected and able to thrive.
          </p>
        </div>
      </section>

      {/* PRIORITY */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                A Priority To Safety
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
              Safety is not just a policy. It is our culture.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[var(--brand-primary)]/70 sm:text-base">
            <p>
              Next Level is committed to safeguarding and promoting the welfare
              of every child and young person we support.
            </p>

            <p>
              We aim to provide environments where young people feel safe,
              listened to and supported by adults who understand their needs.
            </p>

            <p>
              Where concerns arise, they are taken seriously and handled through
              appropriate safeguarding procedures and multi-agency collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                What Safeguarding Means To Us
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
              A shared responsibility to protect and support young people.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {safeguardingPrinciples.map((item, index) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl bg-[var(--brand-surface)] p-8 shadow-sm"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[var(--brand-muted)]/30" />

                <p className="relative z-10 font-serif text-sm tracking-[0.25em] text-[var(--brand-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="relative z-10 mt-5 font-serif text-3xl text-[var(--brand-primary)]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 text-sm font-light leading-7 text-[var(--brand-primary)]/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            Designated Safeguarding Contact
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
            Report a safeguarding concern
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] font-light leading-8 text-[var(--brand-primary)]/70">
            If you have a safeguarding concern, please contact the team as soon
            as possible. Concerns will be handled through the appropriate safeguarding process.
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-10 inline-block rounded-xl bg-[var(--brand-accent)] px-9 py-4 text-sm font-semibold text-[var(--brand-primary)] shadow-xl transition hover:bg-[var(--brand-accent-dark)] hover:-translate-y-1"
          >
            Email Safeguarding Contact
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}