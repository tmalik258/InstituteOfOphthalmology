import DoctorExpertiseCard from "./DoctorExpertiseCard";
import PropTypes from "prop-types";

export default function FilteredData({ data }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
			{data &&
				data.map((value, id) => (
					<DoctorExpertiseCard
						key={id}
						heading={value.name}
						text={value.description || value.specialty}
						img={value.image}
					/>
				))}
		</div>
	);
}

FilteredData.propTypes = {
	data: PropTypes.array.isRequired, // data is a required array
};
