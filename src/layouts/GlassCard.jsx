import PropTypes from 'prop-types';

export default function GlassCard({ heading, text, icon }) {
  return (
	<div className="glass-card flex items-center">
		<div className="p-5 text-center">{ icon }</div>
		<div className="leading-4">
			<h3 className="font-medium text-lg">{ heading }</h3>
			<p>{ text }</p>
		</div>
	</div>
  )
}

GlassCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
	icon: PropTypes.any.isRequired,  // icon is a required component
};
  