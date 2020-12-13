import React, { useEffect } from "react";

// useEffect example to show the latest addition to the people list

const NewestPerson = ({ newestPerson }) => {
	useEffect(() => {
		const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
		document.title = newestPersonName;
		console.log("useEffect triggered!");
	});

	return (
		<div className="col-sm-12">
			<h2 className="mt-4 text-center">
				Latest Addition:{" "}
				{`${newestPerson.firstName} ${newestPerson.lastName} was just added to the list!`}
			</h2>
		</div>
	);
};

export default NewestPerson;
