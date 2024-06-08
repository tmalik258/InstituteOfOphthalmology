import SectionHeading from '../layouts/SectionHeading';
import mainArticle from '../assets/main-article.jpeg';
import secondArticle from '../assets/second-article.jpeg';
import thirdArticle from '../assets/third-article.jpeg';
import ArticleCard from '../layouts/ArticleCard';

export default function Articles() {
  return (
	<div>
		<SectionHeading heading='Our Latest Articles' text='Written by our experts' />
		<div className='flex flex-col lg:flex-row gap-20 px-8'>
			<a href='#' className='flex flex-col gap-8 py-6 px-14 article'>
				<div className='main-article-img relative p-6'><img src={mainArticle} alt="Main Article" className='rounded-3xl' /></div>
				<div>
					<h2 className='text-xl font-medium mb-2'>Card Title</h2>
					<p className='text-lg'>Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.</p>
				</div>
			</a>
			<a href='#' className='flex flex-col justify-between'>
				<ArticleCard img={secondArticle} heading='Card Title' text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.' />
				<ArticleCard img={thirdArticle} heading='Card Title' text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.' />
			</a>
		</div>
	</div>
  )
}
