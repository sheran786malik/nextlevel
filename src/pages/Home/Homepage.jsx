import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

const services = [
  {
    id: "ebsa-support",
    path: "/provisions/ebsa-support",
    icon: "🧠",
    title: "EBSA Support",
    body: "Specialist, compassionate provision for children experiencing Emotionally Based School Avoidance.",
  },
  {
    id: "alternative-provisions",
    path: "/provisions/alternative-provisions",
    icon: "🏫",
    title: "Alternative Provisions",
    body: "High-quality placements that keep education central for young people outside mainstream school.",
  },
  {
    id: "supported-accommodation",
    path: "/provisions/supported-accommodation",
    icon: "🏡",
    title: "Supported Accommodation",
    body: "Safe, nurturing homes with 24/7 professional support for young people aged 16+.",
  },
  {
    id: "bespoke-curriculum",
    path: "/provisions/bespoke-curriculum",
    icon: "📚",
    title: "Bespoke Curriculum",
    body: "Personalised learning pathways mapped around individual needs, confidence and long-term outcomes.",
  },
];

const stats = [
  { value: "200+", label: "Young people supported" },
  { value: "8+", label: "Years of specialist experience" },
  { value: "3", label: "Dedicated provisions" },
  { value: "24/7", label: "Safeguarding commitment" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
  };
}

function Hero({ onReferralClick }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D1F17] px-5 pt-24 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F5C3A_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#2D865355_0%,transparent_45%),linear-gradient(180deg,#0D1F17_0%,#163826_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(#9ECFB012_1px,transparent_1px),linear-gradient(90deg,#9ECFB012_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#5BAA7A]/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#E4BC72]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* <div className="mx-auto mb-9 h-16 w-px bg-gradient-to-b from-transparent to-[#E4BC72]" /> */}

        {/* <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-[#E4BC72]/30 bg-[#C5973A]/10 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[#E4BC72]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E4BC72]" />
          Specialist Educational Services · UK
        </div> */}

        <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Every Child Deserves
          <br />
          <span className="bg-gradient-to-r from-[#9ECFB0] via-[#E4BC72] to-[#9ECFB0] bg-[length:200%_auto] bg-clip-text italic text-transparent">
            to Flourish
          </span>
        </h1>

        <p className="mx-auto mt-8  max-w-2xl text-base font-light leading-8 text-white/60 sm:text-lg">
          We provide specialist alternative education, EBSA support, and safe
          accommodation for vulnerable children and young people across the UK.
        </p>

        <div className="mt-12 flex mb-5 flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onReferralClick}
            className="rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-9 py-4 text-sm font-semibold tracking-wide text-[#0D1F17] shadow-xl shadow-[#C5973A]/25 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Make a Referral
          </button>
          <a
            href="#services"
            className="rounded-xl border border-white/20 bg-white/10 px-9 py-4 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const reveal = useReveal();

  return (
    <section className="bg-[#163826] px-5 sm:px-8 lg:px-10">
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4 ${reveal.className}`}
      >
        {stats.map((item) => (
          <div
            key={item.value}
            className="border-white/10 px-4 py-10 text-center lg:border-r last:border-r-0"
          >
            <p className="font-serif text-5xl font-light leading-none text-[#E4BC72] sm:text-6xl">
              {item.value}
            </p>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#9ECFB0]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const reveal = useReveal();

  return (
    <section
      id="about"
      className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 ${reveal.className}`}
      >
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-[#C5973A]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
              About Us
            </span>
          </div>

          <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
            Helping young people rebuild confidence, stability and direction.
          </h2>
        </div>

        <div className="space-y-5 text-[15px] font-light leading-8 text-[#4A5568] sm:text-base">
          <p>
            Next Level is a specialist educational and support organisation
            dedicated to helping children and young people who face barriers to
            mainstream education.
          </p>
          <p>
            We work alongside local authorities, schools, families and
            multi-agency partners to create safe, nurturing pathways that
            genuinely change lives.
          </p>
          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {["Trauma-informed", "Child-centred", "Outcome-led"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white px-5 py-4 text-sm font-medium text-[#1F5C3A] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const reveal = useReveal();

  return (
    <section
      id="services"
      className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={reveal.ref}
          className={`mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end ${reveal.className}`}
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5973A]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                What We Offer
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
              Our Services
            </h2>
          </div>
          <p className="max-w-md text-[15px] font-light leading-8 text-[#4A5568]">
            Every provision is designed around the individual. We meet young
            people where they are and build support around what they need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Link
              to={service.path}
              id={service.id}
              key={service.title}
              className="scroll-mt-28 group relative block overflow-hidden rounded-3xl border border-black/5 bg-[#F8F5EF] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#163826]/10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#D4EDE0]/70" />
              <p className="absolute right-7 top-6 font-serif text-sm tracking-[0.25em] text-[#9CA3AF]">
                0{index + 1}
              </p>
              <div className="relative z-10">
                <div className="mb-6 text-4xl">{service.icon}</div>
                <h3 className="font-serif text-3xl font-normal text-[#163826]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-[#4A5568]">
                  {service.body}
                </p>
                <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#2D8653]">
                  Learn more
                  <span className="h-px w-6 bg-[#2D8653] transition-all group-hover:w-10" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  const reveal = useReveal();

  return (
    <section className="grid bg-[#F1EDE3] lg:grid-cols-2">
      <div
        ref={reveal.ref}
        className={`px-5 py-24 sm:px-8 lg:px-20 lg:py-32 ${reveal.className}`}
      >
        <div className="mb-10 h-px w-14 bg-[#C5973A]" />
        <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
          <span className="italic">It seems impossible</span>
          <br />
          until it is done.
        </h2>
        <p className="mt-8 max-w-xl text-[15px] font-light leading-8 text-[#4A5568]">
          We believe deeply in the potential of every young person — even those
          who have been let down by the system. Our holistic, trauma-informed
          approach creates the conditions for real, lasting change.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          {[
            "Trauma-informed practice",
            "Holistic support",
            "Evidence-based outcomes",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#1F5C3A]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#163826] to-[#1F5C3A]">
        <div className="absolute h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute h-56 w-56 rounded-full border border-white/10" />
        <div className="absolute h-32 w-32 rounded-full border border-white/10" />
        <div className="relative text-center">
          <p className="select-none font-serif text-[140px] font-light leading-none text-white/10">
            G
          </p>
          <p className="-mt-8 font-serif text-3xl italic text-[#E4BC72]">
            Next Level
          </p>
        </div>
      </div>
    </section>
  );
}

function Safeguarding() {
  const reveal = useReveal();

  return (
    <section
      id="safeguarding"
      className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div ref={reveal.ref} className={`mx-auto max-w-7xl ${reveal.className}`}>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-10 bg-[#C5973A]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
            Safeguarding
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <h2 className="font-serif text-5xl font-light leading-tight text-[#163826] sm:text-6xl">
            Safety is not a policy. It is our culture.
          </h2>

          <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
            <p className="text-[15px] font-light leading-8 text-[#4A5568]">
              The safety and welfare of every young person is our absolute
              priority. We operate with clear reporting structures, safer
              recruitment, trained staff, and strong multi-agency working.
            </p>
            <div className="mt-8 rounded-2xl border border-[#E4BC72]/40 bg-[#FBF0D8] p-6">
              <p className="font-semibold text-[#163826]">
                Designated Safeguarding Contact
              </p>
              <a
                href="mailto:mujtabahrathor@hotmail.co.uk"
                className="mt-2 inline-block text-sm font-medium text-[#C5973A]"
              >
                mujtabahrathor@hotmail.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0D1F17] px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#E4BC72]/40 text-3xl text-[#E4BC72]">
          ✉
        </div>
        <h2 className="font-serif text-5xl font-light leading-tight text-white sm:text-6xl">
          Make a referral or start a conversation.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-8 text-white/50">
          For referrals, policy documents, partnerships or general enquiries,
          contact the team directly by email.
        </p>
        <a
          href="mailto:mujtabahrathor@hotmail.co.uk"
          className="mt-10 inline-block rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-9 py-4 text-sm font-semibold tracking-wide text-[#0D1F17] shadow-xl shadow-[#C5973A]/20 transition hover:-translate-y-1 hover:shadow-2xl"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}

// function ReferralModal({ open, onClose }) {
//   if (!open) return null;

//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const data = Object.fromEntries(formData.entries());
//     console.log("Referral submitted:", data);
//     onClose();
//   }

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
//       <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#F8F5EF] shadow-2xl">
//         <div className="sticky top-0 z-10 flex items-start justify-between border-b border-black/10 bg-[#F8F5EF] px-6 py-5 sm:px-8">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5973A]">Referral Form</p>
//             <h2 className="mt-2 font-serif text-3xl font-light text-[#163826] sm:text-4xl">
//               Make a Referral
//             </h2>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-full bg-[#163826] px-3 py-1.5 text-sm text-white transition hover:bg-[#1F5C3A]"
//             aria-label="Close referral form"
//           >
//             ✕
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 px-6 py-7 sm:px-8">
//           <div className="grid gap-5 md:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-medium text-[#163826]">Your name</label>
//               <input
//                 name="referrerName"
//                 required
//                 className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//                 placeholder="Full name"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-[#163826]">Your role</label>
//               <input
//                 name="referrerRole"
//                 className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//                 placeholder="Parent, carer, school, LA officer..."
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-[#163826]">Email address</label>
//               <input
//                 name="email"
//                 type="email"
//                 required
//                 className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-[#163826]">Phone number</label>
//               <input
//                 name="phone"
//                 type="tel"
//                 className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//                 placeholder="Contact number"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-[#163826]">Young person's name</label>
//               <input
//                 name="youngPersonName"
//                 required
//                 className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//                 placeholder="Full name"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-[#163826]">Age</label>
//               <input
//                 name="age"
//                 type="number"
//                 min="0"
//                 className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//                 placeholder="Age"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#163826]">Support needed</label>
//             <select
//               name="supportType"
//               required
//               className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//               defaultValue=""
//             >
//               <option value="" disabled>Select a provision</option>
//               <option value="EBSA Support">EBSA Support</option>
//               <option value="Alternative Provision">Alternative Provision</option>
//               <option value="Supported Accommodation">Supported Accommodation</option>
//               <option value="General enquiry">General enquiry</option>
//             </select>
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#163826]">Referral details</label>
//             <textarea
//               name="details"
//               rows="5"
//               required
//               className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
//               placeholder="Briefly explain the young person's situation, current school status, risks, needs, and what support is being requested."
//             />
//           </div>

//           <div className="rounded-2xl border border-[#E4BC72]/40 bg-[#FBF0D8] p-4 text-sm leading-6 text-[#4A5568]">
//             Please avoid sharing highly sensitive information unless necessary. A member of the team will contact you to discuss the referral securely.
//           </div>

//           <div className="flex flex-col-reverse gap-3 border-t border-black/10 pt-6 sm:flex-row sm:justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded-xl border border-black/10 px-6 py-3 text-sm font-medium text-[#163826] transition hover:bg-white"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-7 py-3 text-sm font-semibold text-[#0D1F17] shadow-lg shadow-[#C5973A]/20 transition hover:-translate-y-0.5"
//             >
//               Submit Referral
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

export default function Homepage() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5EF] font-sans text-[#0D1F17]">
      <Navbar />
      <Hero onReferralClick={() => setReferralOpen(true)} />
      <About />
      <Services />
      <Editorial />
      <Safeguarding />
      <Contact />
      <Footer />
      {/* <ProvisionPage/> */}
      {/* <ReferralModal open={referralOpen} onClose={() => setReferralOpen(false)} /> */}
    </main>
  );
}
