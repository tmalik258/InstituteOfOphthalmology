import {
	FaBinoculars,
	FaEye,
	FaGlasses,
	FaProcedures,
	FaSyringe,
} from "react-icons/fa";

const hospitalServices = [
	{
		id: 1,
		name: "Thorough Eye Evaluation",
		description:
			"Including vision testing, refraction, and assessment of eye health.",
		image: "/expertise/comprehensive-eye-examinations.jpg",
		icon: <FaEye size={50} />,
	},
	{
		id: 2,
		name: "Prescription of Glasses and Contact Lenses",
		description: "Based on the examination results.",
		image: "/expertise/prescription-of-glasses-and-contact-lenses.jpg",
		icon: <FaGlasses size={50} />,
	},
	{
		id: 3,
		name: "Treatment of Refractive Errors",
		description:
			"Such as nearsightedness, farsightedness, and astigmatism.",
		image: "/expertise/treatment-of-refractive-errors.jpg",
		icon: <FaBinoculars size={50} />,
	},
	{
		id: 4,
		name: "Cataract Evaluation and Surgery",
		description:
			"Diagnosis, pre-operative assessment, surgery, and post-operative care.",
		image: "/expertise/cataract-evaluation-and-surgery.jpg",
		icon: <FaSyringe size={50} />,
	},
	{
		id: 5,
		name: "Glaucoma Control",
		description: "Diagnosis, treatment, and monitoring.",
		image: "/expertise/glaucoma-management.jpg",
		icon: <FaProcedures size={50} />,
	},
	// {
	// 	id: 6,
	// 	name: "Endoscopy",
	// 	description:
	// 		"Minimally invasive diagnostic and therapeutic procedures.",
	// 	image: "/expertise/endoscopy.jpeg",
	// },
	// {
	// 	id: 7,
	// 	name: "ENT",
	// 	description: "Care for ear, nose, and throat conditions.",
	// 	image: "/expertise/ent.jpeg",
	// },
	// {
	// 	id: 8,
	// 	name: "Gynecology / Obstetrics",
	// 	description:
	// 		"Complete care for women including pregnancy and childbirth.",
	// 	image: "/expertise/gynecology-obstetrics.jpeg",
	// },
	// {
	// 	id: 9,
	// 	name: "Internal Medicine",
	// 	description:
	// 		"Comprehensive care for adults with various medical conditions.",
	// 	image: "/expertise/internal-medicine.jpeg",
	// },
	// {
	// 	id: 10,
	// 	name: "Laboratory",
	// 	description: "Comprehensive diagnostic lab tests and screenings.",
	// 	image: "/expertise/laboratory.jpeg",
	// },
	// {
	// 	id: 11,
	// 	name: "Neurology",
	// 	description: "Specialized care for nervous system disorders.",
	// 	image: "/expertise/neurology.jpeg",
	// },
	// {
	// 	id: 12,
	// 	name: "Neurosurgery",
	// 	description: "Surgical treatment of neurological conditions.",
	// 	image: "/expertise/neurosurgery.jpeg",
	// },
	// {
	// 	id: 13,
	// 	name: "Orthopedic",
	// 	description:
	// 		"Treatment of musculoskeletal system issues including bones and joints.",
	// 	image: "/expertise/orthopedic.jpeg",
	// },
	// {
	// 	id: 14,
	// 	name: "Paediatric Surgery",
	// 	description: "Surgical care for children.",
	// 	image: "/expertise/paediatric-surgery.jpeg",
	// },
	// {
	// 	id: 15,
	// 	name: "Paediatrics Department",
	// 	description:
	// 		"Healthcare services tailored for children and adolescents.",
	// 	image: "/expertise/paediatrics-department.jpeg",
	// },
	// {
	// 	id: 16,
	// 	name: "Physiotherapy",
	// 	description:
	// 		"Rehabilitation services to restore and maintain physical function.",
	// 	image: "/expertise/physiotherapy.jpeg",
	// },
	// {
	// 	id: 17,
	// 	name: "Radiology",
	// 	description: "Imaging services including X-rays, MRI, and CT scans.",
	// 	image: "/expertise/radiology.jpeg",
	// },
	// {
	// 	id: 18,
	// 	name: "Private/Executive/Deluxe Room",
	// 	description: "Comfortable and private rooms with premium facilities.",
	// 	image: "/expertise/private-executive-deluxe-room.jpeg",
	// },
];

export default hospitalServices;
