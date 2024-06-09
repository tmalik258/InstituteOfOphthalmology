import PropTypes from 'prop-types';
import { memo } from 'react';

function AboutCard({img, heading, text, classN="flex-row"}) {
	return (
		<div className={`flex max-sm:flex-col ${classN} gap-7 lg:gap-20 max-sm:p-7`}>
			<div className="basis-1/2">
				<h1 className="text-5xl font-bold mb-5">{ heading }</h1>
				<p className="text-justify text-[#979797] text-lg" dangerouslySetInnerHTML={{ __html: text }}>
				</p>
			</div>
			<div className="rounded-3xl basis-1/2 max-h-[645px] overflow-hidden">
				<img src={img} decoding='async' className='h-full w-full object-cover object-top' alt={heading} />
			</div>
		</div>
	);
}

AboutCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
	classN: PropTypes.string.isRequired,  // classN is a required string
	img: PropTypes.string.isRequired,  // img is a required string
};

const MemoizedAboutCard = memo(AboutCard);

export default MemoizedAboutCard;