import GlassCard from "../layouts/GlassCard";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMedicalServices } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function Hero() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<div className="p-7 flex gap-40">
			<div className="flex flex-col max-sm:gap-20 justify-between">
				<div>
					<h1 className="text-5xl font-semibold mb-6">
						<span className="heading-clr">We care</span>
						<br /> about your health
					</h1>
					<p className="sub-text">
						Good health is the state of mental, physical and social
						well being <br />
						and it does not just mean absence of diseases.
					</p>
				</div>
				<div className="text-center">
					<button className="text-2xl">
						<Link to="/expertise" onClick={scrollToTop}>Explore Our Services</Link>
					</button>
				</div>
			</div>
			<div className="relative mx-auto max-sm:hidden">
				<div className="hero-container">
					<img src={'/gallery/7.jpg'} className="hero-cover" alt="Hero Cover" />
				</div>
				<div className="absolute top-16 -left-12">
					<GlassCard
						icon={<CiSearch size={28} />}
						heading="Well Qualified doctors"
						text="Treat with care"
					/>
				</div>
				<div className="absolute bottom-28 -left-32">
					<GlassCard
						icon={<MdOutlineMedicalServices size={28} />}
						heading="Our Services"
						text="Delivering world class 
medical care"
					/>
				</div>
				<div className="absolute bottom-52 -right-36">
					<GlassCard
						icon={<HiOutlinePhone size={28} />}
						heading="Help Line"
						text="+92 XXX XXXXXXX"
					/>
				</div>
			</div>
		</div>
	);
}
