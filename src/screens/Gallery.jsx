import galleryImages from "../galleryImages";
import SectionHeading from "../layouts/SectionHeading";

export default function Gallery() {
  return (
	<div className="container mx-auto">
		<SectionHeading heading="Our Showcase" text="Explore our photo gallery to see our hospital in action, dedicated to providing expert care for you." />
		<div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-3">
			{galleryImages.map((value, id) => (<div className="gallery-image" key={id}><img src={value.path} className="max-w-full rounded-xl md:hover:scale-105 md:duration-75 md:transition-transform" alt={value.alt} /></div>) )}
		</div>
	</div>
  )
}
