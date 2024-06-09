import PropTypes from 'prop-types';
import { memo } from 'react';

function DoctorExpertiseCard({heading, text, img=null}) {
  return (
	<div className='doctor-expertise-card flex flex-col justify-center items-center gap-7'>
		<div className="doctor-expertise-img">{ img && (<img src={img} alt={heading} decoding='async' />) }</div>
		<div className='text-center px-10'>
			<h3 className="text-2xl font-medium">{ heading }</h3>
			<p className="text-lg text-slate-500">{ text }</p>
		</div>
	</div>
  )
}

DoctorExpertiseCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
	img: PropTypes.string.isRequired,  // img is a required string
};

const MemoizedDoctorExpertiseCard = memo(DoctorExpertiseCard);

export default MemoizedDoctorExpertiseCard;