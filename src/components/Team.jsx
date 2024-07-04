import { Link } from "react-router-dom";
import DoctorCard from "../layouts/DoctorExpertiseCard";
import SectionHeading from "../layouts/SectionHeading";
import { animateScroll as scroll } from "react-scroll";
import { memo } from "react";
import teamMembers from "../team";

function Team() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<div>
			<SectionHeading
				heading="Meet our Doctors"
				highlightHeading=""
				text="Well  qualified doctors are ready to serve you"
			/>
			<div className="grid grid-cols-1  md:grid-cols-2 gap-20 xl:w-3/5 mx-auto">
				{teamMembers.slice(0, 4).map((doctor, index) => (
					<DoctorCard
						key={index}
						heading={doctor.name}
						text={doctor.description}
					/>
				))}
			</div>
			<div className="text-center mt-20">
				<button className="text-2xl">
					<Link to="/our-doctors" onClick={scrollToTop}>
						See More
					</Link>
				</button>
			</div>
		</div>
	);
}

const MemoizedTeam = memo(Team);

export default MemoizedTeam;
