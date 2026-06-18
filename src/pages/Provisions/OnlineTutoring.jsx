import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";

const provision = {
  label: "Specialist Provision",
  title: "Online Tutoring Support",
  heroText:
    "Personalised one-to-one and small group online learning for consistent academic progress.",
  overviewTitle: "Flexible learning that meets the learner where they are.",
  overviewParagraphs: [
    "Delivered remotely for accessibility, consistency, and flexibility.",
    "Designed for learners who need structured academic support outside school.",
    "Focused on rebuilding confidence and closing learning gaps.",
  ],
  features: [
    {
      icon: "💻",
      title: "1:1 Support",
      text: "Personalised sessions tailored to individual needs and goals.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      text: "Clear targets and measurable academic development.",
    },
    {
      icon: "🧩",
      title: "Flexible Delivery",
      text: "Sessions scheduled around the learner’s routine and needs.",
    },
  ],
};

export default function OnlineTutoring() {
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
          What the tutoring includes
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