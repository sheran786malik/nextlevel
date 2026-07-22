import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";
import { emotional } from "../../assets/EBSA_Support"; // 1. Import the image

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
      image: emotional, // 2. Added image
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      text: "Clear targets and measurable academic development.",
      image: emotional, // 2. Added image
    },
    {
      icon: "🧩",
      title: "Flexible Delivery",
      text: "Sessions scheduled around the learner's routine and needs.",
      image: emotional, // 2. Added image
    },
  ],
};

export default function OnlineTutoring() {
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