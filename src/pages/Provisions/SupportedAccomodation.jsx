import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";

const provision = {
  label: "Specialist Provision",
  title: "Supported Accommodation",
  heroText:
    "Safe, nurturing accommodation with structured support for young people aged 16+.",
  overviewTitle:
    "Helping young people build independence, stability and confidence for adulthood.",
  overviewParagraphs: [
    "Safe and structured accommodation for vulnerable young people.",
    "Focused on independence, routines and stability.",
    "Personalised transition planning into adulthood.",
  ],
  features: [
    {
      icon: "🏡",
      title: "Safe Accommodation",
      text: "Stable, safeguarding-led living environments.",
    },
    {
      icon: "🧭",
      title: "Independence Skills",
      text: "Budgeting, cooking, routines and daily living.",
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      text: "Continuous safeguarding and professional support.",
    },
  ],
};

export default function SupportedAccommodationPage() {
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