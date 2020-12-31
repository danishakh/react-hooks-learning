import React from "react";

const PeopleCount = (props) => {
	return (
		<h2 className="text-center mt-4">
			{props.peopleCount} people in the list!
		</h2>
	);
};

export default PeopleCount;
