import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const contactInfo = [
  
   {
    icon: <MdEmail className="text-xl sm:text-2xl" />,
    text: "info@clathraenergies.com", 
  },
  {
    icon: <FaPhone className="text-xl sm:text-2xl" />,
    text: "+33(0)76669019", 
  },
 
  {
    icon: <FaLocationDot className="text-xl sm:text-2xl mt-1" />,
    text: (
      <>
        1 Rue Dana Faein,<br />
        14280 Saint-Contest,<br />
        France
      </>
    ),
  },
];