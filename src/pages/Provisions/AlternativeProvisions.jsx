import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";
import { emotional } from "../../assets/EBSA_Support"; // 1. Import the image

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
      image: emotional, // 2. Added image
    },
    {
      icon: "🧠",
      title: "Trauma-Informed Approach",
      text: "Support that understands emotional barriers to learning and attendance.",
      image: emotional, // 2. Added image
    },
    {
      icon: "📈",
      title: "Progress Focused",
      text: "Measurable outcomes across academic, behavioural and personal development.",
      image: emotional, // 2. Added image
    },
  ],
};

export default function AlternativeProvisionPage() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    // 3. Removed the duplicate JSX inside. ProvisionLayout will now 
    // automatically build the Overview and Features sections using the data above.
    <ProvisionLayout
      data={provision}
      onReferralClick={() => setReferralOpen(true)}
    />
  );
}