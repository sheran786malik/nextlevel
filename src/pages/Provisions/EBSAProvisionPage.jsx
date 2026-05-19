import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";

const ebsaData = {
  label: "Specialist Provision",
  title: "EBSA Support",
  heroText:
    "Compassionate, structured support for children experiencing Emotionally Based School Avoidance.",

  overviewTitle:
    "Helping young people feel safe, understood and able to re-engage with education.",

  overviewParagraphs: [
    "Our EBSA support is designed for young people who struggle due to anxiety, trauma or emotional distress.",
    "We work with families and schools using a trauma-informed approach.",
    "Every plan is personalised to rebuild confidence and stability.",
  ],

  features: [
    {
      icon: "🧠",
      title: "Emotional Support",
      text: "Support for anxiety, trauma and emotional barriers.",
    },
    {
      icon: "🏫",
      title: "Re-engagement",
      text: "Gradual return to learning at the child’s pace.",
    },
    {
      icon: "🤝",
      title: "Multi-agency Working",
      text: "Coordination with schools, LA and families.",
    },
  ],
};

export default function EBSAProvisionPage() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    <ProvisionLayout
      data={ebsaData}
      onReferralClick={() => setReferralOpen(true)}
    />
  );
}