import phdImage from "../assets/images/ri_graduation-cap-line.png";
import global from "../assets/images/ion_earth (1).png";
import Vector2 from "../assets/images/bi_people.png";
import capital from "../assets/images/fluent_money-20-filled.png";
import location from "../assets/images/Group 73 (1).png";
import mic from "../assets/images/iconoir_microphone-speaking-solid .png";

export const features = [
  {
    icon: <img src={global} alt="Global Icon" className="w-20 h-20 object-contain" />,
    title: "Global Expertise",
    description: "Multinational team with 15+ years of experience."
  },
  {
    icon: <img src={phdImage} alt="PhD Icon" className="w-20 h-20 object-contain" />,
    title: "PhD-Powered Team",
    description: "80% of the founding group hold doctoral degrees."
  },
  {
    icon: <img src={Vector2} alt="Team Icon" className="w-20 h-20 object-contain" />,
    title: "Diversity at the core",
    description: "Founded by a majority-women team."
  },
  {
    icon: <img src={capital} alt="Capital Icon" className="w-20 h-20 object-contain" />,
    title: "Flexible Capital",
    description: "Agile corporate structure designed for scalable growth and investment."
  },
  {
    icon: <img src={location} alt="Location Icon" className="w-20 h-20 object-contain" />,
    title: "Based in Normandy",
    description: "Headquartered in Caen, serving partners across Europe, Asia, and Africa."
  },
  {
    icon: <img src={mic} alt="Mic Icon" className="w-20 h-20 object-contain" />,
    title: "Multilingual by Design",
    description: "Bridging cultures and markets to serve Europe, Asia, and MENA markets."
  }
];