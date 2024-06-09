import PropTypes from 'prop-types';
import { memo } from 'react';

function SearchCard({ heading, value, handleName }) {
  return (
	<div className='shadow-[0px_2.87px_15px_#00000028] mb-20 sm:w-3/5 mx-auto px-10 py-7 rounded-3xl'>
		<h3 className="text-lg font-medium">Find our { heading }</h3>
		<div className="flex max-lg:flex-col gap-3 lg:gap-10 mt-3">
			<input type="text" value={value} onChange={(e) => handleName(e.target.value)} className="rounded-xl w-full px-5 py-4 outline-none bg-[#F3F3F3] placeholder:text-center" placeholder="SEARCH BY NAME" />
			{/* <button onClick={handleSubmit}>Search</button> */}
		</div>
	</div>
  )
}

SearchCard.propTypes = {
	heading: PropTypes.string.isRequired,  // heading is a required string
	value: PropTypes.string.isRequired,  // value is a required string
	handleName: PropTypes.func.isRequired,  // handleName is a required func
	// handleSubmit: PropTypes.func.isRequired,  // handleName is a required func
};

const MemoizedSearchCard = memo(SearchCard);

export default MemoizedSearchCard;