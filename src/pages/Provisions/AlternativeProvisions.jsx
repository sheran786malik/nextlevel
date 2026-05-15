import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const provision = {
  label: "Specialist Provision",

  title: "Alternative Provisions",

  heroText:
    "High-quality education and support for young people outside mainstream school.",

  overviewTitle:
    "Creating safe, structured learning pathways outside mainstream education.",

  overviewParagraphs: [
    "Our alternative provision supports young people who need a different environment to learn, rebuild confidence and make progress.",

    "We provide structured routines, personalised learning plans and pastoral support around each young person’s needs.",

    "The goal is to stabilise, educate and help each young person move towards positive long-term outcomes.",
  ],

  features: [
    {
      icon: "📚",
      title: "Personalised Learning",
      text: "Flexible education pathways shaped around ability, confidence, needs and future goals.",
    },

    {
      icon: "🧩",
      title: "Structured Support",
      text: "Clear routines, consistent expectations and supportive adult relationships.",
    },

    {
      icon: "📈",
      title: "Progress Tracking",
      text: "Ongoing monitoring of attendance, engagement, wellbeing and educational progress.",
    },
  ],
};

export default function AlternativeProvisionPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] font-sans text-[#0D1F17]">
      {/* HERO */}
      <Navbar/>
      <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#0D1F17] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F5C3A_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#2D865355_0%,transparent_45%),linear-gradient(180deg,#0D1F17_0%,#163826_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(#9ECFB012_1px,transparent_1px),linear-gradient(90deg,#9ECFB012_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#5BAA7A]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#E4BC72]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#E4BC72]">
            {provision.label}
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {provision.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/60 sm:text-lg">
            {provision.heroText}
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-9 py-4 text-sm font-semibold tracking-wide text-[#0D1F17] shadow-xl shadow-[#C5973A]/25 transition hover:-translate-y-1"
          >
            Make a Referral
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                Overview
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
              {provision.overviewTitle}
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[#4A5568] sm:text-base">
            {provision.overviewParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl font-light text-[#163826] sm:text-6xl">
            What this includes
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {provision.features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-[#F8F5EF] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#163826]/10"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#D4EDE0]/70" />

                <p className="absolute right-7 top-6 font-serif text-sm tracking-[0.25em] text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="relative z-10">
                  <div className="mb-6 text-4xl">{feature.icon}</div>

                  <h3 className="font-serif text-3xl font-normal text-[#163826]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm font-light leading-7 text-[#4A5568]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#0D1F17] px-5 py-24 text-center text-white sm:px-8 lg:px-10"
      >
        <h2 className="font-serif text-5xl font-light leading-tight sm:text-6xl">
          Discuss a referral
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-8 text-white/50">
          Contact the team to discuss whether this provision is suitable for the
          young person.
        </p>

        <a
          href="mailto:mujtabahrathor@hotmail.co.uk"
          className="mt-10 inline-block rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-9 py-4 text-sm font-semibold tracking-wide text-[#0D1F17] shadow-xl shadow-[#C5973A]/25 transition hover:-translate-y-1"
        >
          Email Us
        </a>
      </section>

      <Footer />
    </main>
  );
}