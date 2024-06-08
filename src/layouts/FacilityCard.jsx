import PropTypes from 'prop-types';

export default function FacilityCard({ icon, text, highlight }) {
  return (
	<div className={`flex flex-col gap-4 items-center justify-center facility-card ${highlight && ('highlight-facility')}`}>
		<div className='text-[#99DFFF]'>{ icon }</div>
		<p className='text-lg font-medium'>{ text }</p>
	</div>
  )
}

FacilityCard.propTypes = {
	text: PropTypes.string.isRequired,  // text is a required string
	icon: PropTypes.any.isRequired,  // icon is a required component
	highlight: PropTypes.bool.isRequired,  // icon is a required component
};
  