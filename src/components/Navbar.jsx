import {useState} from 'react';
import logo from '../assets/IOM logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Contact from '../models/Contact';
import NavLinks from './NavLinks';

function Navbar() {
	const [menu, setMenu] = useState(false);
	const [contact, setContact] = useState(false);

	const handleChange = () => {
		setMenu(!menu);
	}

	const closeContact = () => {
		setContact(false);
	}

	const openContact = () => {
		setContact(true)
		setMenu(false);
	}

	return (
		<div className='container mx-auto'>
			<nav className='flex justify-between items-center'>
				<img src={logo} width={150} alt="Hospital Logo" className='z-10' />
				<ul className='hidden lg:flex gap-10'>
					<NavLinks />
				</ul>
				<button className='hidden lg:block' onClick={openContact}>Contact Us</button>
				<div className={`${contact ? "opacity-100 z-10": "opacity-0 -z-10"} flex fixed inset-0 items-center justify-center bg-black bg-opacity-60 w-full h-full`}>
					<Contact closeContact={closeContact} />
				</div>
				<div className='lg:hidden flex items-center z-10 me-5 cursor-pointer'>
					{menu ? (
						<AiOutlineClose size={30} onClick={handleChange} />
					): (
						<AiOutlineMenu size={30} onClick={handleChange} />
					)}
				</div>
				<ul className={`${menu ? "opacity-100 z-0": "opacity-0 -z-10"} lg:hidden flex flex-col justify-center items-center absolute nav-mobile left-0 top-0 text-2xl gap-10 w-full h-full transition-opacity duration-400`}>
					<NavLinks />
					<button className='lg:hidden block w-max' onClick={openContact}>Contact Us</button>
				</ul>

			</nav>
		</div>
	)
}

export default Navbar
