import React, { useEffect } from "react";

// useEffect example to show the latest addition to the people list

const NewestPerson = ({ newestPerson }) => {
	useEffect(() => {
		const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
		document.title = newestPersonName;
		console.log("useEffect triggered!"); // runs on componentDidMount, componentDidUpdate

		// also runs on componentDidUnmount by the return function below
		return () => {
			console.log("useEffect triggered on unmount");
		};
	}, [newestPerson]); // dependencies, which takes an array of variables that we want to watch - if we pass '[]' then useEffect will only run on mount - if we pass [newestPerson] then it will only run everytime newestPerson changes

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
