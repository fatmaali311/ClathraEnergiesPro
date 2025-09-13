import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const contactInfo = [
  
   {
    icon: <MdEmail className="text-xl sm:text-2xl" />,
    text: "clathraenergies@gmail.com", 
  },
  {
    icon: <FaPhone className="text-xl sm:text-2xl" />,
    text: "+33(0)766699019", 
  },
 
  {
    icon: <FaLocationDot className="text-xl sm:text-2xl mt-1" />,
    text: (
      <>
        1 Rue Rene Cassin,<br />
        14280 Saint-Contest,<br />
        France
      </>
    ),
  },
];