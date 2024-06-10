import { Link } from "react-router-dom";
import DoctorCard from "../layouts/DoctorExpertiseCard";
import SectionHeading from "../layouts/SectionHeading";
import { animateScroll as scroll } from "react-scroll";

export default function Team() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
  return (
	<div>
		<SectionHeading heading="Meet our Doctors" highlightHeading='' text="Well  qualified doctors are ready to serve you" />
		<div className="grid grid-cols-1 max-sm:px-5 md:grid-cols-2 gap-20 xl:w-3/5 mx-auto">
			<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
			<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
			<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
			<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
		</div>
		<div className="text-center mt-20"><button className='text-2xl'><Link to='/our-doctors' onClick={scrollToTop}>See More</Link></button></div>
	</div>
  )
}
