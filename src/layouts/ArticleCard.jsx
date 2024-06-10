import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

function ArticleCard({ img, text, heading, classN="", subClassN="", postId }) {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
  return (
	<Link to={`/insights/${postId}`} onClick={scrollToTop} className={`flex flex-col lg:${classN} items-center gap-8 article py-6 px-14`}>
		<div className='main-article-img relative p-5'><img src={img} decoding='async' alt="Secondary Article" className='rounded-3xl' /></div>
		<div className={`${subClassN}`}>
			<h2 className='text-2xl font-semibold mb-2'>{ heading }</h2>
			<p className='line-clamp-5 text-justify'>{ text }</p>
		</div>
	</Link>
  )
}

ArticleCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	text: PropTypes.string.isRequired,  // text is a required string
	img: PropTypes.string.isRequired,  // img is a required string
	classN: PropTypes.string.isRequired,  // classN is a required string
	subClassN: PropTypes.string.isRequired,  // subClassN is a required string
	postId: PropTypes.number.isRequired,  // subClassN is a required string
};

const MemoizedArticleCard = memo(ArticleCard);

export default MemoizedArticleCard;