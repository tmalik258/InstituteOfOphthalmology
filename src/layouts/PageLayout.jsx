import SectionHeading from "../layouts/SectionHeading";
import PropTypes from "prop-types";
import SearchCard from "./SearchCard";
import { useCallback, useMemo, useState, memo } from "react";
import FilteredData from "./FilteredData";

function PageLayout({
	initialData,
	comingSoon,
	comingSoonData,
	heading,
	searchHeading,
	text,
}) {
	const [name, setName] = useState("");

	const handleName = useCallback((newValue) => {
		setName(newValue);
	}, []);

	const filterDataByName = (data, name) => {
		return data.filter(value => value.name.toLowerCase().includes(name.toLowerCase()) | value.description.toLowerCase().includes(name.toLowerCase()));
	};

	const filteredData = useMemo(() => {
		return filterDataByName(initialData, name);
	}, [name, initialData]);

	const comingSoonFilteredData = useMemo(() => {
		return filterDataByName(comingSoonData, name);
	}, [name, comingSoonData]);

	return (
		<div className="container mx-auto p-5">
			<SectionHeading heading={heading} text={text} />
			<SearchCard
				heading={searchHeading}
				value={name}
				handleName={handleName}
			/>
			<FilteredData data={filteredData} />
			{comingSoon && (
				<div className="mt-32">
					<SectionHeading
						heading={"Coming Soon Services"}
						text={"Expert Care from Skilled Professionals"}
					/>
					<FilteredData data={comingSoonFilteredData} />
				</div>
			)}
		</div>
	);
}

PageLayout.propTypes = {
	heading: PropTypes.string.isRequired, // heading is a required string
	searchHeading: PropTypes.string.isRequired, // searchHeading is a required string
	text: PropTypes.string.isRequired, // text is a required string
	initialData: PropTypes.array.isRequired, // initialData is a required array
	comingSoonData: PropTypes.array, // comingSoonData is a required array
	comingSoon: PropTypes.bool, // comingSoon is a bool
};

const MemoizedPageLayout = memo(PageLayout);

export default MemoizedPageLayout;
