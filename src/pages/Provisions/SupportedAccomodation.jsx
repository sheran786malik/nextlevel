import { useState } from "react";
import ProvisionLayout from "../../layouts/ProvisionLayout";
import { emotional } from "../../assets/EBSA_Support"; // 1. Import the image

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
      image: emotional, // 2. Added image
    },
    {
      icon: "🧭",
      title: "Independence Skills",
      text: "Budgeting, cooking, routines and daily living.",
      image: emotional, // 2. Added image
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      text: "Continuous safeguarding and professional support.",
      image: emotional, // 2. Added image
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