import { card_01,
    card_02,
    card_03,
    card_04,
    card_05,
    card_06 } from "../../assets/curriculum"; 

// 1. Added 'export' so this data can be imported elsewhere
export const features = [
  {
    icon: "📝",
    title: "Personalised Learning",
    text: "Tailored academic pathways designed around individual needs and goals.",
    image: card_01,
  },
  {
    icon: "🧠",
    title: "Trauma-Informed Teaching",
    text: "Support that understands and addresses emotional barriers to learning.",
    image: card_02,
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    text: "Clear, measurable targets to celebrate consistent academic development.",
    image: card_03,
  },
  {
    icon: "💚",
    title: "Confidence & Wellbeing",
    text: "Activities and support designed to rebuild self-esteem and engagement.",
    image: card_04,
  },
  {
    icon: "🚀",
    title: "Preparation for Adulthood",
    text: "Building independence, routines, and life skills for long-term stability.",
    image: card_05,
  },
  {
    icon: "🤝",
    title: "Multi-Agency Collaboration",
    text: "Seamless coordination with schools, families, and local authorities.",
    image: card_06,
  },
];

export default function Cards() {
  // You can keep this wrapper component if you use it elsewhere, 
  // or remove it if Curriculum.jsx is now handling the rendering directly.
  return null; 
}