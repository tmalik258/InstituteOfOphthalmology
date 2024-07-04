import SectionHeading from '../layouts/SectionHeading';
import ArticleCard from '../layouts/ArticleCard';
import hospitalBlogPosts from '../blogs';

export default function Articles() {
	console.log(hospitalBlogPosts[0])
  return (
	<div>
		<SectionHeading heading='Our Latest Articles' text='Written by our experts' />
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-8'>
			<ArticleCard img={hospitalBlogPosts[0].path} classN='flex-col md:row-span-2' postId={hospitalBlogPosts[0].id} heading={hospitalBlogPosts[0].title} text={hospitalBlogPosts[0].description} />
			<ArticleCard img={hospitalBlogPosts[1].path} heading={hospitalBlogPosts[1].title} classN='flex-col xl:flex-row' postId={hospitalBlogPosts[1].id} text={hospitalBlogPosts[1].description} />
			<ArticleCard img={hospitalBlogPosts[2].path} heading={hospitalBlogPosts[2].title} classN='flex-col xl:flex-row' postId={hospitalBlogPosts[2].id} text={hospitalBlogPosts[2].description} />
		</div>
	</div>
  )
}
