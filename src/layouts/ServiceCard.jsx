import PropTypes from 'prop-types';

export default function ServiceCard({ heading, text, icon }) {
  return (
	<div className='service-card flex justify-center items-center gap-7 px-5 m-5'>
		<div className="service-icon">{ icon }</div>
		<div>
			<h3 className="text-3xl font-bold">{ heading }</h3>
			<p className="text-slate-500">{ text }</p>
		</div>
	</div>
  )
}

ServiceCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
	icon: PropTypes.any.isRequired,  // icon is a required component
};