import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";

const provision = {
  label: "Specialist Provision",
  title: "Summer Enrichment Programme",
  heroText:
    "Structured, supportive summer programmes designed to build confidence, skills, and engagement.",
  overviewTitle: "Meaningful summer provision with purpose.",
  overviewParagraphs: [
    "A safe and structured environment for learning during school breaks.",
    "Designed for young people with additional needs or disrupted education.",
    "Combines education, wellbeing, and enrichment activities.",
  ],
  features: [
    {
      icon: "🌱",
      title: "Confidence Building",
      text: "Activities designed to rebuild self-esteem and engagement.",
    },
    {
      icon: "📘",
      title: "Continued Learning",
      text: "Light academic support to maintain progress over summer.",
    },
    {
      icon: "🤝",
      title: "Social Development",
      text: "Group-based activities to build communication and teamwork.",
    },
  ],
};

export default function SummerCamps() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    <ProvisionLayout
      data={provision}
      onReferralClick={() => setReferralOpen(true)}
    >
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

      <div className="mt-24 mx-auto max-w-7xl">
        <h2 className="font-serif text-5xl font-light">
          What the programme includes
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {provision.features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl bg-[var(--brand-light)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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