import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";
import { card_01, card_02, card_03 } from "../../assets/Supported_Accomodation";

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
      image: card_01, // 2. Added image
    },
    {
      icon: "🧭",
      title: "Independence Skills",
      text: "Budgeting, cooking, routines and daily living.",
      image: card_02, // 2. Added image
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      text: "Continuous safeguarding and professional support.",
      image: card_03, // 2. Added image
    },
  ],
};

export default function SupportedAccommodationPage() {
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
