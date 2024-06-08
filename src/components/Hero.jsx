import GlassCard from '../layouts/GlassCard';
import cover from '../assets/doctor.jpeg';
import { CiSearch } from "react-icons/ci";
import { MdOutlineMedicalServices } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

export default function Hero() {
  return (
	<div className="p-7 flex gap-40">
		<div className="flex flex-col justify-between">
			<div>
				<h1 className="text-5xl font-semibold mb-6">
					<span className="heading-clr">We care</span><br /> about your health
				</h1>
				<p className="sub-text">Good health is the state of mental, physical and social well being <br />
				and it does not just mean absence of diseases.</p>
			</div>
			<div className="text-center">
				<button className='text-2xl'>Explore Our Services</button>
			</div>
		</div>
		<div className='relative mx-auto'>
			<div className='hero-container'>
				<img src={cover} className='hero-cover' alt="Hero Cover" />
			</div>
			<div className="absolute top-8 -left-10">
				<GlassCard icon={<CiSearch size={28} />} heading='Well Qualified doctors' text='Treat with care' />
			</div>
			<div className="absolute bottom-36 -left-28">
				<GlassCard icon={<MdOutlineMedicalServices size={28} />} heading='Our Services' text='Delivering world class 
medical care' />
			</div>
			<div className="absolute top-52 -right-24">
				<GlassCard icon={<HiOutlinePhone size={28} />} heading='Help Line' text='+92 XXX XXXXXXX' />
			</div>
		</div>
	</div>
  )
}
