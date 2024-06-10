import SectionHeading from '../layouts/SectionHeading';
import mainArticle from '../assets/main-article.jpeg';
import secondArticle from '../assets/second-article.jpeg';
import thirdArticle from '../assets/third-article.jpeg';
import ArticleCard from '../layouts/ArticleCard';

export default function Articles() {
  return (
	<div>
		<SectionHeading heading='Our Latest Articles' text='Written by our experts' />
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-8'>
			<ArticleCard img={mainArticle} classN='flex-col md:row-span-2' postId={1} heading='The Importance of Regular Health Checkups' text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.' />
			<ArticleCard img={secondArticle} heading='Card Title' classN='flex-row' postId={2} text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.' />
			<ArticleCard img={thirdArticle} heading='Card Title' classN='flex-row' postId={3} text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.' />
		</div>
	</div>
  )
}
