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
    <main className="min-h-screen bg-[#F8F5EF] font-sans text-[#0D1F17]">
      <Navbar/>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#0D1F17] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F5C3A_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#2D865355_0%,transparent_45%),linear-gradient(180deg,#0D1F17_0%,#163826_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(#9ECFB012_1px,transparent_1px),linear-gradient(90deg,#9ECFB012_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#E4BC72]">
            About Next Level
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {about.title}
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-[#C5973A]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
              Introduction
            </span>
          </div>

          <p className="text-lg font-light leading-9 text-[#4A5568]">
            {about.introduction}
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                Values
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[#163826] sm:text-6xl">
              What guides our work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {about.values.map((value) => (
              <div
                key={value}
                className="rounded-3xl bg-[#F8F5EF] p-8 text-center shadow-sm"
              >
                <p className="font-medium text-[#163826]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#F1EDE3] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#C5973A]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
              Our Mission
            </span>
          </div>

          <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
            Supporting young people towards brighter futures.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg font-light leading-9 text-[#4A5568]">
            {about.mission}
          </p>
        </div>
      </section>

      {/* AIMS */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                Our Aims
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[#163826] sm:text-6xl">
              What we strive to achieve
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {about.aims.map((aim, index) => (
              <div
                key={aim}
                className="flex items-start gap-5 rounded-3xl bg-[#F8F5EF] p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#163826] text-sm font-semibold text-[#E4BC72]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-lg font-light leading-8 text-[#4A5568]">
                  {aim}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                Our Team
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light text-[#163826] sm:text-6xl">
              Meet the team
            </h2>
          </div>

          <div className="mx-auto max-w-md rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#163826] font-serif text-3xl text-[#E4BC72]">
              M
            </div>

            <h3 className="mt-6 font-serif text-3xl text-[#163826]">
              {about.team[0].name}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#C5973A]">
              {about.team[0].role}
            </p>

            <p className="mt-6 text-[15px] font-light leading-8 text-[#4A5568]">
              {about.team[0].description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}