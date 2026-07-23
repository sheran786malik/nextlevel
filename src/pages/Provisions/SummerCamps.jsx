import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";
import { card_01, card_02, card_03 } from "../../assets/Summer_campus";

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
      image: card_01, // 2. Added image
    },
    {
      icon: "📘",
      title: "Continued Learning",
      text: "Light academic support to maintain progress over summer.",
      image: card_02, // 2. Added image
    },
    {
      icon: "🤝",
      title: "Social Development",
      text: "Group-based activities to build communication and teamwork.",
      image: card_03, // 2. Added image
    },
  ],
};

export default function SummerCamps() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    // 3. Removed the duplicate JSX inside. ProvisionLayout will now
    // automatically build the page using the data above.
    <ProvisionLayout
      data={provision}
      onReferralClick={() => setReferralOpen(true)}
    />
  );
}
