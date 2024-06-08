import PropTypes from 'prop-types';

export default function ArticleCard({ img, text, heading }) {
  return (
	<div className='flex flex-col lg:flex-row items-center gap-8 article px-4 py-2'>
		<div className='secondary-article-img relative p-5'><img src={img} alt="Secondary Article" className='rounded-3xl' /></div>
		<div>
			<h2 className='text-lg font-medium mb-2'>{ heading }</h2>
			<p>{ text }</p>
		</div>
	</div>
  )
}

ArticleCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
	img: PropTypes.object.isRequired,  // icon is a required component
};