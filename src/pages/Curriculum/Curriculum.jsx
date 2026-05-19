import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const curriculumAreas = [
  {
    title: "English",
    text: "Developing reading, writing, speaking and communication skills through accessible, personalised learning.",
  },
  {
    title: "Maths",
    text: "Building confidence with numeracy, problem-solving and practical maths used in everyday life.",
  },
  {
    title: "PSHE",
    text: "Supporting wellbeing, relationships, confidence, personal safety and preparation for adulthood.",
  },
  {
    title: "Life Skills",
    text: "Helping young people develop routines, independence, decision-making and practical daily living skills.",
  },
  {
    title: "Creative Learning",
    text: "Using creative activities to build confidence, expression, engagement and emotional regulation.",
  },
  {
    title: "Vocational Pathways",
    text: "Supporting young people towards future education, training, employment and personal goals.",
  },
];

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-surface)] font-sans text-[var(--brand-primary)]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--brand-primary)] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-secondary)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,var(--brand-muted)_0%,transparent_45%),linear-gradient(180deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            Learning With Purpose
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Curriculum
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-8 text-white/70 sm:text-lg">
            A flexible, personalised curriculum designed to help young people
            rebuild confidence, re-engage with learning and make meaningful progress.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Our Curriculum
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
              Education shaped around the young person, not a one-size-fits-all model.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[var(--brand-primary)]/70 sm:text-base">
            <p>
              Our curriculum is designed for young people who may need a different
              approach to learning because of anxiety, trauma, SEND, disrupted education
              or other complex needs.
            </p>

            <p>
              We focus on rebuilding trust, confidence and engagement before moving
              young people towards academic, social and personal development.
            </p>

            <p>
              Learning plans are personalised and reviewed regularly so that support
              remains relevant, realistic and outcome-focused.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Our Approach
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
              Structured, supportive and built around progress.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Personalised learning plans",
              "Trauma-informed teaching",
              "Small-step progress tracking",
              "Confidence and wellbeing focus",
              "Preparation for adulthood",
              "Multi-agency collaboration",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-3xl bg-[var(--brand-surface)] p-8 shadow-sm"
              >
                <p className="font-serif text-sm tracking-[0.25em] text-[var(--brand-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[var(--brand-primary)]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Curriculum Areas
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
              Learning that supports education, wellbeing and independence.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {curriculumAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl text-[var(--brand-primary)]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-7 text-[var(--brand-primary)]/70">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            Outcomes
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
            Helping young people move forward with confidence.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-[15px] font-light leading-8 text-[var(--brand-primary)]/70">
            The aim of our curriculum is not only academic progress. We support
            young people to rebuild confidence, develop emotional resilience,
            strengthen independence and take positive steps towards education,
            employment, training or further specialist support.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}