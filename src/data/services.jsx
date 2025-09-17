import workerImg from "../assets/images/worker_8944749 .png";
import experimentImg from "../assets/images/experiment_16468410.png";
import solid_droplet from "../assets/images/solid_droplet.png";
import flowbite_lightbulb from "../assets/images/flowbite_lightbulb-solid.png";
import game_brain from "../assets/images/game-icons_brain.png";
import hugeicons_innovation from "../assets/images/hugeicons_ai-innovation-01.png";
import steps_fill from "../assets/images/ph_steps-fill.png";
import collaboration_meeting from "../assets/images/streamline-freehand_collaboration-meeting-team-file.png";
export const servicesData = [
  {
    number: "1",
    title: "Engineering",
    image: workerImg,
    subtitle: "Engineering smarter biogas & biomethane plants.",
    text: "From feasibility to performance guarantees, we deliver rigorous process studies and practical solutions tailored to your project.",
    borderColor: "border-2 border-[var(--green-500)]",
    numberBgColor: "bg-[var(--green-500)]",
    titleColor: "text-[var(--green-500)]",
    buttonBgColor: "bg-[var(--green-500)]",
    buttonHoverBgColor: "hover:bg-[#45a049]",
    buttonText: "Request a Feasibility Study",
    boxes: [
      {
        icon: game_brain ,
        title: "Our Expertise",
        points: [
          "Concept & basic design (BFD, PFD, Heat & Mass Balance)",
          "Biogas upgrading & CO₂ recovery sizing",
          "Digestate handling & process optimization",
          "Performance test protocols & guarantees",
        ],
      },
      {
        icon: steps_fill,
        title: "Our Approach",
        points: [
          "Intake & data collection",
          "Feasibility study and scenario comparison",
          "Process design package delivery",
          "CAPEX/OPEX optimization & risk mitigation",
        ],
      },
      {
        icon: flowbite_lightbulb,
        title: "Why It Matters",
        points: [
          "Maximize methane yield & plant efficiency",
          "Reduce investment risks",
          "Ensure compliance with French and EU standards",
        ],
      },
    ],
  },
  {
    number: "2",
    image: experimentImg,
    title: "Innovation and Technology Pathways",
    subtitle: "Innovation in safe gas storage & transport.",
    text: " We are pioneering hydrate-based technologies to store biogas, biomethane, and CO₂ in solid-like form — scalable, solvent-free, and patent-protected.",
    borderColor: "border-2 border-[var(--secondary-blue)]",
    numberBgColor: "bg-[var(--secondary-blue)]",
    titleColor: "text-[var(--secondary-blue)]",
    buttonBgColor: "bg-[var(--secondary-blue)]",
    buttonHoverBgColor: "hover:bg-[#3b78e7]",
    buttonText: "Discover Our Technology",
    boxes: [
      {
        icon: solid_droplet,
        title: "What is Hydrate Storage?",
        points: [
          "A breakthrough technology turning gas into a stable, solid-like form at moderate conditions",
          "The first industrial application for One-of-a-kind hydrate storage of biogas and CCSU",
          "Safer, more flexible, and more affordable than liquefaction or compression",
        ],
      },
      {
        icon: hugeicons_innovation,
        title: "Our Innovation Focus",
        points: [
          "One-of-a-kind system making small and remote biogas projects profitable",
          "Cost-efficient, sustainable alternative to traditional gas storage",
          "Modular design: scalable from farm pilot to full industrial deployment",
        ],
      },
      {
        icon: collaboration_meeting,
        title: "Collaboration Models",
        points: [
          "Joint research projects",
          "Industrial partnerships",
          "Licensing and IP co-development",
        ],
      },
    ],
  },
];
