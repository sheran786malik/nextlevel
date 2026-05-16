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
    <main className="min-h-screen bg-[#F8F5EF] font-sans text-[#0D1F17]">
        <Navbar/>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-[#0D1F17] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F5C3A_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#2D865355_0%,transparent_45%),linear-gradient(180deg,#0D1F17_0%,#163826_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(#9ECFB012_1px,transparent_1px),linear-gradient(90deg,#9ECFB012_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#E4BC72]">
            Governance & Compliance
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Policies
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-8 text-white/60 sm:text-lg">
            Our policies help ensure safe, consistent and professional practice
            across all areas of support and provision.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                Our Policies
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
              Policies designed to support safe and effective practice.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[#4A5568] sm:text-base">
            <p>
              Next Level is committed to maintaining clear policies and
              procedures that promote safeguarding, professionalism,
              accountability and high standards of support.
            </p>

            <p>
              Policies are reviewed regularly to ensure they remain aligned with
              legislation, guidance and best practice.
            </p>

            <p>
              Additional documents and policy updates may be made available upon
              request.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY LIST */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                Available Policies
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[#163826] sm:text-6xl">
              Key documents and procedures
            </h2>
          </div>

          <div className="grid gap-6">
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className="group rounded-3xl border border-black/5 bg-[#F8F5EF] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#163826] text-sm font-semibold text-[#E4BC72]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl text-[#163826]">
                        {policy.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm font-light leading-7 text-[#4A5568]">
                        {policy.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={policy.file}
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-6 py-3 text-sm font-semibold text-[#0D1F17] shadow-lg shadow-[#C5973A]/20 transition hover:-translate-y-0.5"
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
      <section className="bg-[#F1EDE3] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
            Additional Information
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
            Need further documentation?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[15px] font-light leading-8 text-[#4A5568]">
            If you require additional policies, safeguarding documentation or
            compliance information, please contact the team directly.
          </p>

          <a
            href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-9 py-4 text-sm font-semibold tracking-wide text-[#0D1F17] shadow-xl shadow-[#C5973A]/25 transition hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}