import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";

const provision = {
  label: "Specialist Provision",
  title: "Bespoke Curriculum",
  heroText:
    "Personalised learning pathways built around each young person.",
  overviewTitle: "Education built around the individual, not the system.",
  overviewParagraphs: [
    "Flexible education for learners outside mainstream.",
    "Adapted to emotional, academic and developmental needs.",
    "Focused on confidence and long-term outcomes.",
  ],
  features: [
    {
      icon: "📚",
      title: "Personalised Learning",
      text: "Tailored academic pathways.",
    },
    {
      icon: "🎯",
      title: "Outcome Focused",
      text: "Structured progression planning.",
    },
    {
      icon: "🧠",
      title: "Holistic Support",
      text: "Combines education with wellbeing.",
    },
  ],
};

export default function BespokeCurriculumPage() {
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
        <h2 className="font-serif text-5xl font-light">What this includes</h2>

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