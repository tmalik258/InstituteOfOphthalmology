import blogs from '../blogs';
import ArticleCard from '../layouts/ArticleCard';
import MemoizedSectionHeading from '../layouts/SectionHeading';

export default function Insights() {
  return (
	<>
		<MemoizedSectionHeading heading='Our Latest Articles' text='Written by our Experts' />
		<div className="container mx-auto">
			<div className='flex flex-col gap-10 px-10 lg:px-52'>
				{blogs && blogs.map((blog, id) => <ArticleCard img={blog.path} classN='flex-row' subClassN='sm:basis-4/5' heading={blog.title} text={blog.description} postId={blog.id} key={id} />)}
			</div>
		</div>
	</>
  )
}