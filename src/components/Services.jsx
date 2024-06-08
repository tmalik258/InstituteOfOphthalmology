import SectionHeading from '../layouts/SectionHeading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServiceCard from '../layouts/ServiceCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';
import { FaHeartbeat, FaStethoscope, FaXRay } from "react-icons/fa";

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
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
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
				<ServiceCard heading='Cardiology' icon={<FaHeartbeat size={50} />} text='Cardiac Centre is one of the most reputable and modern hospital......' />
				<ServiceCard heading='ENT' icon={<FaStethoscope size={50} />} text='We offer exceptional diagnostic measures under the expert supervision of our ENT specialists.' />
				<ServiceCard heading='Diagnostic' icon={<FaXRay size={50} />} text='Thanks for all the services, no doubt it is the best hospital.' />
				<ServiceCard heading='Cardiology' icon={<FaHeartbeat size={50} />} text='Cardiac Centre is one of the most <br /> reputable and modern hospital......' />
				<ServiceCard heading='Cardiology' icon={<FaHeartbeat size={50} />} text='Cardiac Centre is one of the most <br /> reputable and modern hospital......' />
			</Slider>
		</div>
	)
}
