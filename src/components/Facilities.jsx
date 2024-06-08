import FacilityCard from "../layouts/FacilityCard";
import { MdMonitorHeart, MdLocalHospital } from "react-icons/md";
import { FaAmbulance, FaProcedures } from "react-icons/fa";
import SectionHeading from "../layouts/SectionHeading";

export default function Facilities() {
  return (
	<div>
		<SectionHeading heading='Our Medical Facilities' text='We are dedicated to serve you best medical facilities' />
		<div className="flex flex-col lg:flex-row items-center sm:gap-10 justify-around">
			<FacilityCard icon={<MdMonitorHeart size={110} />} text='Well Equiped Labs'  />
			<FacilityCard icon={<FaAmbulance size={110} />} highlight={true} text='Emergency Ambulance'  />
			<FacilityCard icon={<MdLocalHospital size={110} />} text='Intensive Care Unit (ICU)'  />
			<FacilityCard icon={<FaProcedures size={110} />} text='Operating Theaters'  />
		</div>
	</div>
  )
}
