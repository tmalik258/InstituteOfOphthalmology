import SectionHeading from '../layouts/SectionHeading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServiceCard from '../layouts/ServiceCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';
import { FaBinoculars, FaEye, FaGlasses, FaProcedures, FaSyringe } from "react-icons/fa";
import hospitalServices from '../services';

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
				{
					hospitalServices.map((service, index) => 
						<ServiceCard key={index} heading={service.name} icon={service.icon} text={service.description} />
					)
				}
			</Slider>
		</div>
	)
}
