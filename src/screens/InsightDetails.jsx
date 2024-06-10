import { useParams } from "react-router-dom";
import SectionHeading from "../layouts/SectionHeading";
import blogs from "../blogs";
import NoPage from "./NoPage";

export default function InsightDetails() {
	const { id } = useParams();
	const post = blogs.find((blog) => blog.id === parseInt(id));
	return (
		<>
			{post ? (
				<>
					<SectionHeading heading={post.title} />
					<div className="flex flex-col items-center px-10">
						<div className="sm:w-[1232px] h-[625px] mb-10">
							<img
								src={post.path}
								className="w-full h-full rounded-xl object-cover object-top"
								alt={post.title}
							/>
						</div>
						<p className="max-w-[1232px] text-justify">{post.description}</p>
					</div>
				</>
			) : (
				<NoPage />
			)}
		</>
	);
}
