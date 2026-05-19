import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const policies = [
  {
    title: "Safeguarding Policy",
    description:
      "Outlines our commitment to safeguarding and promoting the welfare of children and young people.",
    file: "#",
  },
  {
    title: "Behaviour Policy",
    description:
      "Explains expectations around behaviour, relationships, support and positive interventions.",
    file: "#",
  },
  {
    title: "Complaints Policy",
    description:
      "Details the process for raising concerns, feedback or formal complaints.",
    file: "#",
  },
  {
    title: "Health & Safety Policy",
    description:
      "Covers our approach to maintaining safe environments for young people, staff and visitors.",
    file: "#",
  },
  {
    title: "Equality & Diversity Policy",
    description:
      "Sets out our commitment to inclusion, equality, dignity and respect for all individuals.",
    file: "#",
  },
  {
    title: "Data Protection & Confidentiality",
    description:
      "Explains how information is stored, managed and protected responsibly.",
    file: "#",
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-surface)] font-sans text-[var(--brand-primary)]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-[var(--brand-primary)] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-secondary)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,var(--brand-muted)_0%,transparent_45%),linear-gradient(180deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            Governance & Compliance
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Policies
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-8 text-white/70 sm:text-lg">
            Our policies help ensure safe, consistent and professional practice
            across all areas of support and provision.
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
                Our Policies
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
              Policies designed to support safe and effective practice.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[var(--brand-primary)]/70 sm:text-base">
            <p>
              Next Level is committed to maintaining clear policies and procedures that promote safeguarding, professionalism, accountability and high standards of support.
            </p>

            <p>
              Policies are reviewed regularly to ensure they remain aligned with legislation, guidance and best practice.
            </p>

            <p>
              Additional documents and policy updates may be made available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY LIST */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
                Available Policies
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[var(--brand-primary)] sm:text-6xl">
              Key documents and procedures
            </h2>
          </div>

          <div className="grid gap-6">
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className="group rounded-3xl border border-black/5 bg-[var(--brand-surface)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-sm font-semibold text-[var(--brand-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl text-[var(--brand-primary)]">
                        {policy.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm font-light leading-7 text-[var(--brand-primary)]/70">
                        {policy.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={policy.file}
                    className="inline-flex items-center gap-3 rounded-xl bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold text-[var(--brand-primary)] shadow-lg transition hover:bg-[var(--brand-accent-dark)] hover:-translate-y-0.5"
                  >
                    View Policy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="bg-[var(--brand-surface)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            Additional Information
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[var(--brand-primary)] sm:text-6xl">
            Need further documentation?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[15px] font-light leading-8 text-[var(--brand-primary)]/70">
            If you require additional policies, safeguarding documentation or compliance information, please contact the team directly.
          </p>

          <a
            href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
            className="mt-10 inline-block rounded-xl bg-[var(--brand-accent)] px-9 py-4 text-sm font-semibold text-[var(--brand-primary)] shadow-xl transition hover:bg-[var(--brand-accent-dark)] hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}