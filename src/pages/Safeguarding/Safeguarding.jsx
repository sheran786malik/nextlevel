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
    <main className="min-h-screen bg-[#F8F5EF] font-sans text-[#0D1F17]">
        <Navbar/>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#0D1F17] px-5 pt-28 text-center text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F5C3A_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#2D865355_0%,transparent_45%),linear-gradient(180deg,#0D1F17_0%,#163826_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#9ECFB012_1px,transparent_1px),linear-gradient(90deg,#9ECFB012_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#E4BC72]">
            Safety First
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Safeguarding
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-8 text-white/60 sm:text-lg">
            Safeguarding is at the heart of everything we do. We are committed
            to creating safe, nurturing and supportive environments where young
            people feel protected, respected and able to thrive.
          </p>
        </div>
      </section>

      {/* PRIORITY */}
      <section className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                A Priority To Safety
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
              Safety is not just a policy. It is our culture.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] font-light leading-8 text-[#4A5568] sm:text-base">
            <p>
              Next Level is committed to safeguarding and promoting the welfare
              of every child and young person we support.
            </p>

            <p>
              We aim to provide environments where young people feel safe,
              listened to and supported by adults who understand their needs and
              responsibilities.
            </p>

            <p>
              Where concerns arise, they are taken seriously and handled through
              appropriate safeguarding procedures, professional judgement and
              multi-agency collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                What Safeguarding Means To Us
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
              A shared responsibility to protect and support young people.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {safeguardingPrinciples.map((item, index) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl bg-[#F8F5EF] p-8 shadow-sm"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#D4EDE0]/70" />

                <p className="relative z-10 font-serif text-sm tracking-[0.25em] text-[#C5973A]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="relative z-10 mt-5 font-serif text-3xl text-[#163826]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 text-sm font-light leading-7 text-[#4A5568]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNATED CONTACT */}
      <section className="bg-[#F1EDE3] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
            Designated Safeguarding Contact
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
            Report a safeguarding concern
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] font-light leading-8 text-[#4A5568]">
            If you have a safeguarding concern, please contact the team as soon
            as possible. Concerns will be treated seriously and handled through
            the appropriate safeguarding process.
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-9 py-4 text-sm font-semibold tracking-wide text-[#0D1F17] shadow-xl shadow-[#C5973A]/25 transition hover:-translate-y-1"
          >
            Email Safeguarding Contact
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}