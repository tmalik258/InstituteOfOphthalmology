import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Contact({ closeContact }) {
	const [contactData, setContactData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNo: "",
	})

	const handleDataChange = (data) => {
		setContactData({
			...contactData,
			...data
		})
	}

	const handleContactSubmission = () => {
		console.log("data");
		return false;
	}

	return (
		<div className="popup-form mt-12">
			<form className='w-max md:w-96 space-y-5 p-10 relative rounded-xl bg-white text-center' onSubmit={handleContactSubmission}>
				<h1 className="text-2xl">Contact Now</h1>
				<div className='flex flex-col gap-5'>
					<input type="text" name='firstName' id='firstName' value={contactData.firstName} onChange={(e) => handleDataChange({ "firstName": e.target.value })} placeholder='First Name' className='py-3 px-2 bg-zinc-100 outline-none shadow-md rounded-lg' />
					<input type="text" name='lastName' id='lastName' value={contactData.lastName} onChange={(e) => handleDataChange({ "lastName": e.target.value })} placeholder='Last Name' className='py-3 px-2 bg-zinc-100 outline-none shadow-md rounded-lg' />
					<input type="email" name='email' id='email' value={contactData.email} onChange={(e) => handleDataChange({ "email": e.target.value })} placeholder='Email' className='py-3 px-2 bg-zinc-100 outline-none shadow-md rounded-lg' />
					<input type="tel" name='number' id='number' value={contactData.phoneNo} onChange={(e) => handleDataChange({ "phoneNo": e.target.value })} placeholder='Phone No.' className='py-3 px-2 bg-zinc-100 outline-none shadow-md rounded-lg' />
				</div>
				<button type='submit'>Send</button>
				<div className='absolute top-0 cursor-pointer right-5'>
					<AiOutlineClose size={25} onClick={closeContact} />
				</div>
			</form>
		</div>
	)
}

Contact.propTypes = {
	closeContact: PropTypes.func.isRequired,  // closeContact is a required function
};
  