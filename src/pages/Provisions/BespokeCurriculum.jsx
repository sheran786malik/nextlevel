import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";
import { emotional } from "../../assets/EBSA_Support"; // 1. Import the image

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
      image: emotional, // 2. Added image everywhere
    },
    {
      icon: "🎯",
      title: "Outcome Focused",
      text: "Structured progression planning.",
      image: emotional, // 2. Added image everywhere
    },
    {
      icon: "🧠",
      title: "Holistic Support",
      text: "Combines education with wellbeing.",
      image: emotional, // 2. Added image everywhere
    },
  ],
};

export default function BespokeCurriculumPage() {
  const [referralOpen, setReferralOpen] = useState(false);

  return (
    // 3. Removed the custom JSX inside, letting ProvisionLayout build the page 
    // using the updated data (which now includes the images for the cards)
    <ProvisionLayout
      data={provision}
      onReferralClick={() => setReferralOpen(true)}
    />
  );
}