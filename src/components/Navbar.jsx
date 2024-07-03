import {useEffect, useState} from 'react';
import logo from '../assets/IOM logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Contact from '../models/Contact';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

function Navbar() {
	const [menu, setMenu] = useState(false);
	const [contact, setContact] = useState(false);

	const handleChange = () => {
		setMenu(!menu);
	}

	const closeContact = () => {
		setContact(false);
	}

	const closeMenu = () => {
		setMenu(false);
	}

	const openContact = () => {
		// setContact(true)
		window.location.href = "mailto:minstituteophthalmology@gmail.com";
		setMenu(false);
	}

	useEffect(() => {
		if (menu || contact) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [menu, contact]);

	return (
		<div className='container mx-auto'>
			<nav className='flex justify-between items-center'>
				<div className='z-20'>
					<Link to="/"><img src={logo} width={150} alt="Hospital Logo" /></Link>
				</div>
				<ul className='hidden lg:flex gap-10'>
					<NavLinks closeMenu={closeMenu} />
				</ul>
				<button className='hidden lg:block' onClick={openContact}>Contact Us</button>
				<div className={`${contact ? "opacity-100 z-20": "opacity-0 -z-10"} flex fixed inset-0 items-center justify-center bg-black bg-opacity-60 w-screen h-screen`}>
					<Contact closeContact={closeContact} />
				</div>
				<div className='lg:hidden flex items-center z-20 me-5 cursor-pointer'>
					{menu ? (
						<AiOutlineClose size={30} onClick={handleChange} />
					): (
						<AiOutlineMenu size={30} onClick={handleChange} />
					)}
				</div>
				<ul className={`${menu ? "opacity-100 z-10": "opacity-0 -z-10"} lg:hidden flex flex-col justify-center items-center fixed nav-mobile left-0 top-0 text-2xl gap-10 w-screen h-screen transition-opacity duration-400`}>
					<NavLinks closeMenu={closeMenu} />
					<button className='lg:hidden block w-max' onClick={openContact}>Contact Us</button>
				</ul>

			</nav>
		</div>
	)
}

export default Navbar
