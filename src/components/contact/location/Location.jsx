import { BiSolidPhoneCall, BiSolidTimeFive } from "react-icons/bi";
import { FaLocationDot } from 'react-icons/fa6';
import LocationCard from "../../../utilities/contact/LocationCard";

const Location = () => {
  return (
    <div>
      {/* container  */}
      <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
        <div>
          <LocationCard
            icon={<BiSolidPhoneCall />}
            heading="Phone"
            text={<p>+8801797156450</p>}
          />
        </div>
        <div className="my-14 md:my-0">
          <LocationCard
            icon={<FaLocationDot />}
            heading="Address"
            text={<p>Dhaka, Bangladesh</p>}
          />
        </div>
        <div>
          <LocationCard
            icon={<BiSolidTimeFive />}
            heading="Working Hours"
            text={<p>Mon - Fri: 08:00 - 22:00 <br/> Sat - Sun: 10:00 - 23:00</p>}
                
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
