import SectionHeading from "../layouts/SectionHeading";
import DoctorExpertiseCard from "../layouts/DoctorExpertiseCard";
import PropTypes from "prop-types";
import SearchCard from "./SearchCard";
import { useMemo, useState } from "react";
import { memo } from "react";

function PageLayout({ initialData, heading, searchHeading, text }) {
	const [name, setName] = useState("");

	const handleName = (newValue) => {
		setName(newValue);
	};

	const filteredData = useMemo(() => {
		return initialData.filter((value) =>
			value.name.toLowerCase().includes(name.toLowerCase())
		);
	}, [name, initialData]);

	return (
		<div className="container mx-auto p-5">
			<SectionHeading heading={heading} text={text} />
			<SearchCard
				heading={searchHeading}
				value={name}
				handleName={handleName}
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
				{filteredData &&
					filteredData.map((value, id) => (
						<DoctorExpertiseCard
							key={id}
							heading={value.name}
							text={value.description || value.specialty}
							img={value.image}
						/>
					))}
			</div>
		</div>
	);
}

PageLayout.propTypes = {
	heading: PropTypes.string.isRequired, // heading is a required string
	searchHeading: PropTypes.string.isRequired, // searchHeading is a required string
	text: PropTypes.string.isRequired, // text is a required string
	initialData: PropTypes.array.isRequired, // initialData is a required array
};

const MemoizedPageLayout = memo(PageLayout);

export default MemoizedPageLayout;
