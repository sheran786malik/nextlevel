import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";

const provision = {
  label: "Specialist Provision",
  title: "Alternative Provisions",
  heroText:
    "High-quality educational placements for young people who cannot access mainstream school.",

  overviewTitle:
    "Re-engaging young people through structured, supportive education.",

  overviewParagraphs: [
    "Our alternative provision offers structured, trauma-informed education for young people who are unable to attend mainstream school.",
    "We focus on rebuilding engagement, confidence and routine through tailored learning environments.",
    "Every placement is designed around the young person’s needs, with clear progression pathways and measurable outcomes.",
  ],

  features: [
    {
      icon: "🏫",
      title: "Structured Learning",
      text: "Clear timetables and routines that support re-engagement with education.",
    },
    {
      icon: "🧠",
      title: "Trauma-Informed Approach",
      text: "Support that understands emotional barriers to learning and attendance.",
    },
    {
      icon: "📈",
      title: "Progress Focused",
      text: "Measurable outcomes across academic, behavioural and personal development.",
    },
  ],
};

export default function AlternativeProvisionPage() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    <ProvisionLayout
      data={provision}
      onReferralClick={() => setReferralOpen(true)}
    >
      {/* OVERVIEW */}
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <h2 className="font-serif text-5xl font-light">
          {provision.overviewTitle}
        </h2>

        <div className="space-y-5 text-[var(--brand-primary)]/70">
          {provision.overviewParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="mt-24 mx-auto max-w-7xl">
        <h2 className="font-serif text-5xl font-light">
          What this includes
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {provision.features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl bg-[var(--brand-light)] p-8 shadow-sm"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-serif text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--brand-primary)]/70">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ProvisionLayout>
  );
}