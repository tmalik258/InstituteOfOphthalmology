import SectionHeading from '../layouts/SectionHeading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServiceCard from '../layouts/ServiceCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';
import { FaBinoculars, FaEye, FaGlasses, FaProcedures, FaSyringe } from "react-icons/fa";

export default function Services() {
	const slider = useRef(null);

	const settings = {
		accessibility: true,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	};
	return (
		<div className='relative'>
			<SectionHeading heading='Our Dedicated Services' text='Delivering world class medical care' />
			<button className='absolute bottom-14 z-10 rounded-full btn-arrow' onClick={() => slider.current.slickPrev()}><IoIosArrowBack size={20} /></button>
			<button className='absolute bottom-14 z-10 right-0 rounded-full btn-arrow' onClick={() => slider.current.slickNext()}><IoIosArrowForward size={20} /></button>
			<Slider ref={slider} {...settings}>
				<ServiceCard heading='Comprehensive Eye Examinations' icon={<FaEye size={50} />} text='Including vision testing, refraction, and assessment of eye health.' />
				<ServiceCard heading='Prescription of Glasses and Contact Lenses' icon={<FaGlasses size={50} />} text='Based on the examination results.' />
				<ServiceCard heading='Treatment of Refractive Errors' icon={<FaBinoculars size={50} />} text='Such as nearsightedness, farsightedness, and astigmatism.' />
				<ServiceCard heading='Cataract Evaluation and Surgery' icon={<FaSyringe size={50} />} text='Diagnosis, pre-operative assessment, surgery, and post-operative care.' />
				<ServiceCard heading='Glaucoma Management' icon={<FaProcedures size={50} />} text='Diagnosis, treatment  and monitoring.' />
			</Slider>
		</div>
	)
}
