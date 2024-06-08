import PropTypes from 'prop-types';

export default function DoctorCard({heading, text}) {
  return (
	<div className='doctor-card flex flex-col justify-center items-center gap-7'>
		<div className="doctor-img"></div>
		<div className='text-center'>
			<h3 className="text-2xl font-medium">{ heading }</h3>
			<p className="text-lg text-slate-500">{ text }</p>
		</div>
	</div>
  )
}

DoctorCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
};