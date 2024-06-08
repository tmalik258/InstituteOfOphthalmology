import SectionHeading from "../layouts/SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';
import galleryOne from '../assets/gallery-1.jpeg';
import galleryTwo from '../assets/gallery-2.jpeg';
import galleryThree from '../assets/gallery-3.jpeg';

export default function Gallery() {
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
		<div className="relative">
			<SectionHeading heading="Gallery" text="Our medical facility boasts cutting-edge technology and top-notch medical staff. We aim to deliver exceptional healthcare services and a comforting environment for our patients." />
			<button className='absolute bottom-14 z-10 rounded-full btn-arrow' onClick={() => slider.current.slickPrev()}><IoIosArrowBack size={20} /></button>
			<button className='absolute bottom-14 z-10 right-0 rounded-full btn-arrow' onClick={() => slider.current.slickNext()}><IoIosArrowForward size={20} /></button>
			<Slider ref={slider} {...settings}>
				<div className="gallery-img"><img src={galleryOne} alt="" /></div>
				<div className="gallery-img"><img src={galleryTwo} alt="" /></div>
				<div className="gallery-img"><img src={galleryThree} alt="" /></div>
			</Slider>
		</div>
	)
}

