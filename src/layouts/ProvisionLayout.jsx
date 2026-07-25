import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ProvisionLayout({ data, onReferralClick }) {
  const [referralOpen, setReferralOpen] = useState(false);

  const handleReferralClick = () => {
    setReferralOpen(true);
    if (onReferralClick) onReferralClick();
  };

  return (
    <main className="min-h-screen bg-[var(--brand-light)] font-sans text-[var(--brand-primary)]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[var(--brand-primary)] px-5 pt-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-secondary)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,var(--brand-muted)_0%,transparent_45%),linear-gradient(180deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)]">
            {data.label}
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {data.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/70 sm:text-lg">
            {data.heroText}
          </p>

          {onReferralClick !== undefined && (
            <button
              onClick={handleReferralClick}
              className="mt-10 rounded-xl bg-[var(--brand-accent)] px-9 py-4 text-sm font-semibold text-[var(--brand-primary)] shadow-xl transition hover:-translate-y-1"
            >
              Make a Referral
            </button>
          )}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <h2 className="font-serif text-5xl font-light">
            {data.overviewTitle}
          </h2>

          <div className="space-y-5 text-[var(--brand-primary)]/70">
            {data.overviewParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — services-style cards with images */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl font-light">What this includes</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.features.map((f, i) => (
              <div
                key={f.title}
                className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background image */}
                {f.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${f.image})` }}
                  />
                )}

                {/* Gradient overlay for text legibility - SHARPER CONTRAST */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(155deg, var(--brand-primary) 0%, color-mix(in srgb, var(--brand-primary) 70%, var(--brand-accent-2)) 55%, var(--brand-secondary) 130%)",
                    opacity: 0.25,
                  }}
                />

                {/* Decorative rings */}
                <div
                  className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--brand-secondary) 50%, transparent)",
                  }}
                />
                <div
                  className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--brand-secondary) 30%, transparent)",
                  }}
                />

                {/* Dark gradient at bottom for text - STRONGER */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Index */}
                <span className="absolute left-6 top-5 font-serif text-sm tracking-[0.25em] text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>


                {/* Title + reveal-on-hover detail */}
                <div className="relative mt-auto p-6">
                  <h3 className="font-serif text-2xl font-normal leading-tight text-white">
                    {f.title}
                  </h3>

                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm font-light leading-7 text-white/85">
                        {f.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-3 text-sm font-medium text-white">
                    <span className="h-px w-6 bg-white/60 transition-all duration-300 group-hover:w-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] px-5 py-24 text-center text-white">
        <h2 className="font-serif text-5xl font-light">Discuss a referral</h2>

        <button
          onClick={handleReferralClick}
          className="mt-10 rounded-xl bg-[var(--brand-accent)] px-9 py-4 text-sm font-semibold text-[var(--brand-primary)]"
        >
          Make a Referral
        </button>
      </section>

      <Footer />

      {/* REFERRAL MODAL */}
      <ReferralModal open={referralOpen} onClose={() => setReferralOpen(false)} />
    </main>
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
          
          {/* FIXED CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1.5 text-sm transition hover:opacity-80"
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
              className="rounded-xl px-6 py-3 text-sm font-medium transition hover:bg-black/5"
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