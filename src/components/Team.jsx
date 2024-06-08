import DoctorCard from "../layouts/DoctorCard";
import SectionHeading from "../layouts/SectionHeading";

export default function Team() {
  return (
	<div>
		<SectionHeading heading="Meet our Doctors" highlightHeading='' text="Well  qualified doctors are ready to serve you" />
		<div className="flex flex-col gap-20">
			<div className="flex gap-20 justify-center">
				<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
				<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
			</div>
			<div className="flex gap-20 justify-center">
				<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
				<DoctorCard heading="Dr. Robert Henry" text="Cardiologist" />
			</div>
		</div>
		<div className="text-center mt-20"><button className='text-2xl'>See More</button></div>
	</div>
  )
}
