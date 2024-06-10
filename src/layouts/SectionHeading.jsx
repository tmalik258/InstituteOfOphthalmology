import PropTypes from 'prop-types';
import { memo } from 'react';

function SectionHeading({heading, text=''}) {
  return (
	<div className="text-center mb-20">
		<h1 className="text-5xl font-medium mb-6">
			{ heading }
		</h1>
		{ text && (<p className="sub-text line-clamp-5">{ text }</p>) }
	</div>
  )
}

SectionHeading.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
};

const MemoizedSectionHeading = memo(SectionHeading);

export default MemoizedSectionHeading;