import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import EBSAIMAGE from '../../assets/anxiety.jpg'
 
import { Link } from "react-router-dom";
 
const services = [
  {
    id: "ebsa-support",
    path: "/provisions/ebsa-support",
    icon: "🧠",
    image:EBSAIMAGE,
    title: "EBSA Support",
    body: "Specialist, compassionate provision for children experiencing Emotionally Based School Avoidance.",
  },
  {
    id: "alternative-provisions",
    path: "/provisions/alternative-provisions",
    icon: "🏫",
    image:EBSAIMAGE,
    title: "Alternative Provisions",
    body: "High-quality placements that keep education central for young people outside mainstream school.",
  },
  {
    id: "supported-accommodation",
    path: "/provisions/supported-accommodation",
    icon: "🏡",
    image:EBSAIMAGE,
    title: "Supported Accommodation",
    body: "Safe, nurturing homes with 24/7 professional support for young people aged 16+.",
  },
  {
    id: "bespoke-curriculum",
    path: "/provisions/bespoke-curriculum",
    icon: "📚",
    image:EBSAIMAGE,
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 text-center"
      style={{ backgroundColor: "var(--brand-primary)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in srgb, var(--brand-primary) 60%, var(--brand-accent-2)) 0%, transparent 55%), radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--brand-accent-2) 33%, transparent) 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--brand-accent-2) 7%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--brand-accent-2) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute -left-28 -top-28 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in srgb, var(--brand-accent-2) 20%, transparent)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in srgb, var(--brand-accent) 10%, transparent)" }}
      />
 
      <div className="relative z-10 mx-auto max-w-5xl">
        <h1
          className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          style={{ color: "var(--brand-secondary)" }}
        >
          Every Child Deserves
          <br />
          <span
            className="bg-clip-text italic text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--brand-accent-2), var(--brand-accent), var(--brand-accent-2))",
              backgroundSize: "200% auto",
            }}
          >
            to Flourish
          </span>
        </h1>
 
        <p
          className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 sm:text-lg"
          style={{ color: "color-mix(in srgb, var(--brand-secondary) 60%, transparent)" }}
        >
          We provide specialist alternative education, EBSA support, and safe
          accommodation for vulnerable children and young people across the UK.
        </p>
 
        <div className="mt-12 flex mb-5 flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onReferralClick}
            className="rounded-xl px-9 py-4 text-sm font-semibold tracking-wide transition hover:-translate-y-1 hover:shadow-2xl"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--brand-accent-dark), var(--brand-accent))",
              color: "var(--brand-primary)",
              boxShadow: "0 20px 25px -5px color-mix(in srgb, var(--brand-accent-dark) 25%, transparent)",
            }}
          >
            Make a Referral
          </button>
          <a
            href="#services"
            className="rounded-xl px-9 py-4 text-sm font-medium tracking-wide backdrop-blur-sm transition hover:-translate-y-1"
            style={{
              border: "1px solid color-mix(in srgb, var(--brand-secondary) 20%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--brand-secondary) 10%, transparent)",
              color: "var(--brand-secondary)",
            }}
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
    <section
      className="px-5 sm:px-8 lg:px-10"
      style={{ backgroundColor: "color-mix(in srgb, var(--brand-primary) 85%, var(--brand-accent-2))" }}
    >
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4 ${reveal.className}`}
      >
        {stats.map((item) => (
          <div
            key={item.value}
            className="px-4 py-10 text-center lg:border-r last:border-r-0"
            style={{ borderColor: "color-mix(in srgb, var(--brand-secondary) 10%, transparent)" }}
          >
            <p
              className="font-serif text-5xl font-light leading-none sm:text-6xl"
              style={{ color: "var(--brand-accent)" }}
            >
              {item.value}
            </p>
            <p
              className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em]"
              style={{ color: "var(--brand-accent-2)" }}
            >
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
      className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      style={{ backgroundColor: "var(--brand-surface)" }}
    >
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 ${reveal.className}`}
      >
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10" style={{ backgroundColor: "var(--brand-accent-dark)" }} />
            <span
              className="text-xs font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--brand-accent-dark)" }}
            >
              About Us
            </span>
          </div>
 
          <h2
            className="font-serif text-5xl font-light leading-tight sm:text-6xl"
            style={{ color: "var(--brand-primary)" }}
          >
            Helping young people rebuild confidence, stability and direction.
          </h2>
        </div>
 
        <div
          className="space-y-5 text-[15px] font-light leading-8 sm:text-base"
          style={{ color: "var(--brand-muted)" }}
        >
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
                className="rounded-xl px-5 py-4 text-sm font-medium shadow-sm"
                style={{
                  backgroundColor: "var(--brand-secondary)",
                  color: "var(--brand-primary)",
                }}
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
      className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      style={{ backgroundColor: "var(--brand-secondary)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={reveal.ref}
          className={`mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end ${reveal.className}`}
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10" style={{ backgroundColor: "var(--brand-accent-dark)" }} />
              <span
                className="text-xs font-medium uppercase tracking-[0.3em]"
                style={{ color: "var(--brand-accent-dark)" }}
              >
                What We Offer
              </span>
            </div>
            <h2
              className="font-serif text-5xl font-light leading-tight sm:text-6xl"
              style={{ color: "var(--brand-primary)" }}
            >
              Our Services
            </h2>
          </div>
          <p
            className="max-w-md text-[15px] font-light leading-8"
            style={{ color: "var(--brand-muted)" }}
          >
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
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient — sits at the base so text stays legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Index */}
                <span className="absolute left-6 top-5 font-serif text-sm tracking-[0.25em] text-white/80">
                  0{index + 1}
                </span>

                {/* Title + reveal-on-hover detail */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl font-normal leading-tight text-white">
                    {service.title}
                  </h3>

                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm font-light leading-7 text-white/85">
                        {service.body}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-3 text-sm font-medium text-white">
                    Learn more
                    <span className="h-px w-6 bg-white/60 transition-all duration-300 group-hover:w-10" />
                  </div>
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
    <section
      className="grid lg:grid-cols-2"
      style={{ backgroundColor: "var(--brand-surface)" }}
    >
      <div
        ref={reveal.ref}
        className={`px-5 py-24 sm:px-8 lg:px-20 lg:py-32 ${reveal.className}`}
      >
        <div
          className="mb-10 h-px w-14"
          style={{ backgroundColor: "var(--brand-accent-dark)" }}
        />
        <h2
          className="font-serif text-5xl font-light leading-tight sm:text-6xl"
          style={{ color: "var(--brand-primary)" }}
        >
          <span className="italic">It seems impossible</span>
          <br />
          until it is done.
        </h2>
        <p
          className="mt-8 max-w-xl text-[15px] font-light leading-8"
          style={{ color: "var(--brand-muted)" }}
        >
          We believe deeply in the potential of every young person. Our holistic, trauma-informed
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
              className="rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.16em]"
              style={{
                backgroundColor: "var(--brand-secondary)",
                color: "var(--brand-primary)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
 
      <div
        className="relative flex min-h-[460px] items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, var(--brand-primary), color-mix(in srgb, var(--brand-primary) 70%, var(--brand-accent-2)))",
        }}
      >
        <div
          className="absolute h-80 w-80 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--brand-secondary) 10%, transparent)" }}
        />
        <div
          className="absolute h-56 w-56 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--brand-secondary) 10%, transparent)" }}
        />
        <div
          className="absolute h-32 w-32 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--brand-secondary) 10%, transparent)" }}
        />
        <div className="relative text-center">
          <p
            className="select-none font-serif text-[140px] font-light leading-none"
            style={{ color: "color-mix(in srgb, var(--brand-secondary) 10%, transparent)" }}
          >
            G
          </p>
          <p
            className="-mt-8 font-serif text-3xl italic"
            style={{ color: "var(--brand-accent)" }}
          >
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
      className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      style={{ backgroundColor: "var(--brand-surface)" }}
    >
      <div ref={reveal.ref} className={`mx-auto max-w-7xl ${reveal.className}`}>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-10" style={{ backgroundColor: "var(--brand-accent-dark)" }} />
          <span
            className="text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: "var(--brand-accent-dark)" }}
          >
            Safeguarding
          </span>
        </div>
 
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <h2
            className="font-serif text-5xl font-light leading-tight sm:text-6xl"
            style={{ color: "var(--brand-primary)" }}
          >
            Safety is not a policy. It is our culture.
          </h2>
 
          <div
            className="rounded-3xl p-8 shadow-sm lg:p-10"
            style={{ backgroundColor: "var(--brand-secondary)" }}
          >
            <p
              className="text-[15px] font-light leading-8"
              style={{ color: "var(--brand-muted)" }}
            >
              The safety and welfare of every young person is our absolute
              priority. We operate with clear reporting structures, safer
              recruitment, trained staff, and strong multi-agency working.
            </p>
            <div
              className="mt-8 rounded-2xl p-6"
              style={{
                border: "1px solid color-mix(in srgb, var(--brand-accent) 40%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--brand-accent) 15%, var(--brand-secondary))",
              }}
            >
              <p
                className="font-semibold"
                style={{ color: "var(--brand-primary)" }}
              >
                Designated Safeguarding Contact
              </p>
              <a
                href="mailto:   admin@nextlevelplus.co.uk"
                className="mt-2 inline-block text-sm font-medium"
                style={{ color: "var(--brand-accent-dark)" }}
              >
                admin@nextlevelplus.co.uk
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
      className="px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32"
      style={{ backgroundColor: "var(--brand-primary)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
          style={{
            border: "1px solid color-mix(in srgb, var(--brand-accent) 40%, transparent)",
            color: "var(--brand-accent)",
          }}
        >
          ✉
        </div>
        <h2
          className="font-serif text-5xl font-light leading-tight sm:text-6xl"
          style={{ color: "var(--brand-secondary)" }}
        >
          Make a referral or start a conversation.
        </h2>
        <p
          className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-8"
          style={{ color: "color-mix(in srgb, var(--brand-secondary) 50%, transparent)" }}
        >
          For referrals, policy documents, partnerships or general enquiries,
          contact the team directly by email.
        </p>
        <a
          href="mailto:   admin@nextlevelplus.co.uk"
          className="mt-10 inline-block rounded-xl px-9 py-4 text-sm font-semibold tracking-wide transition hover:-translate-y-1 hover:shadow-2xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--brand-accent-dark), var(--brand-accent))",
            color: "var(--brand-primary)",
            boxShadow:
              "0 20px 25px -5px color-mix(in srgb, var(--brand-accent-dark) 20%, transparent)",
          }}
        >
          Email Us
        </a>
      </div>
    </section>
  );
}
 
function ReferralModal({ open, onClose }) {
  if (!open) return null;
 
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Referral submitted:", data);
    onClose();
  }
 
  const inputStyle = {
    width: "100%",
    borderRadius: "0.75rem",
    border: "1px solid color-mix(in srgb, var(--brand-primary) 10%, transparent)",
    backgroundColor: "var(--brand-secondary)",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    outline: "none",
  };
 
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl shadow-2xl"
        style={{ backgroundColor: "var(--brand-surface)" }}
      >
        <div
          className="sticky top-0 z-10 flex items-start justify-between px-6 py-5 sm:px-8"
          style={{
            borderBottom: "1px solid color-mix(in srgb, var(--brand-primary) 10%, transparent)",
            backgroundColor: "var(--brand-surface)",
          }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--brand-accent-dark)" }}
            >
              Referral Form
            </p>
            <h2
              className="mt-2 font-serif text-3xl font-light sm:text-4xl"
              style={{ color: "var(--brand-primary)" }}
            >
              Make a Referral
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1.5 text-sm transition"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--brand-secondary)",
            }}
            aria-label="Close referral form"
          >
            ✕
          </button>
        </div>
 
        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-7 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                Your name
              </label>
              <input
                name="referrerName"
                required
                style={inputStyle}
                placeholder="Full name"
              />
            </div>
 
            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                Your role
              </label>
              <input
                name="referrerRole"
                style={inputStyle}
                placeholder="Parent, carer, school, LA officer..."
              />
            </div>
 
            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                style={inputStyle}
                placeholder="you@example.com"
              />
            </div>
 
            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                Phone number
              </label>
              <input
                name="phone"
                type="tel"
                style={inputStyle}
                placeholder="Contact number"
              />
            </div>
 
            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                Young person's name
              </label>
              <input
                name="youngPersonName"
                required
                style={inputStyle}
                placeholder="Full name"
              />
            </div>
 
            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                Age
              </label>
              <input
                name="age"
                type="number"
                min="0"
                style={inputStyle}
                placeholder="Age"
              />
            </div>
          </div>
 
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{ color: "var(--brand-primary)" }}
            >
              Support needed
            </label>
            <select
              name="supportType"
              required
              style={inputStyle}
              defaultValue=""
            >
              <option value="" disabled>Select a provision</option>
              <option value="EBSA Support">EBSA Support</option>
              <option value="Alternative Provision">Alternative Provision</option>
              <option value="Supported Accommodation">Supported Accommodation</option>
              <option value="General enquiry">General enquiry</option>
            </select>
          </div>
 
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{ color: "var(--brand-primary)" }}
            >
              Referral details
            </label>
            <textarea
              name="details"
              rows="5"
              required
              style={{ ...inputStyle, resize: "none" }}
              placeholder="Briefly explain the young person's situation, current school status, risks, needs, and what support is being requested."
            />
          </div>
 
          <div
            className="rounded-2xl p-4 text-sm leading-6"
            style={{
              border: "1px solid color-mix(in srgb, var(--brand-accent) 40%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--brand-accent) 15%, var(--brand-secondary))",
              color: "var(--brand-muted)",
            }}
          >
            Please avoid sharing highly sensitive information unless necessary. A member of the team will contact you to discuss the referral securely.
          </div>
 
          <div
            className="flex flex-col-reverse gap-3 pt-6 sm:flex-row sm:justify-end"
            style={{ borderTop: "1px solid color-mix(in srgb, var(--brand-primary) 10%, transparent)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-6 py-3 text-sm font-medium transition"
              style={{
                border: "1px solid color-mix(in srgb, var(--brand-primary) 10%, transparent)",
                color: "var(--brand-primary)",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--brand-accent-dark), var(--brand-accent))",
                color: "var(--brand-primary)",
                boxShadow:
                  "0 10px 15px -3px color-mix(in srgb, var(--brand-accent-dark) 20%, transparent)",
              }}
            >
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default function Homepage() {
  const [referralOpen, setReferralOpen] = useState(false);
 
  return (
    <main
      className="min-h-screen font-sans"
      style={{ backgroundColor: "var(--brand-surface)", color: "var(--brand-primary)" }}
    >
      <Navbar />
      <Hero onReferralClick={() => setReferralOpen(true)} />
      <About />
      <Services />
      <Editorial />
      <Safeguarding />
      <Contact />
      <Footer />
      <ReferralModal open={referralOpen} onClose={() => setReferralOpen(false)} />
    </main>
  );
}